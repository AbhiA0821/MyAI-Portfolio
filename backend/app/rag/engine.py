import os
import re
import math
from typing import List, Dict, Any, Optional
from .ingest import load_verified_documents, generate_doc_hash

# Try importing Qdrant and FastEmbed
try:
    from qdrant_client import QdrantClient
    from qdrant_client.models import Distance, VectorParams, PointStruct, Filter, FieldCondition, MatchValue
    HAS_QDRANT = True
except ImportError:
    HAS_QDRANT = False

try:
    from fastembed import TextEmbedding
    HAS_FASTEMBED = True
except ImportError:
    HAS_FASTEMBED = False

STOP_WORDS = {
    "what", "which", "where", "who", "when", "how", "why", "is", "are", "was", "were",
    "does", "do", "did", "he", "his", "him", "abhishek", "ainapure", "the", "a", "an",
    "in", "at", "on", "to", "for", "of", "with", "by", "from", "will", "join", "have", "has"
}

DOMAIN_KEYWORDS = {
    "education", "college", "clg", "university", "school", "study", "studying", "degree", "btech", "cgpa", "grades", "adcet",
    "project", "projects", "built", "made", "build", "medintel", "hireagent", "resumematcher", "art", "cyclegan", "repo", "github",
    "intern", "internship", "experience", "worked", "job", "infosys", "tecspeak",
    "certif", "certification", "certifications", "certificate", "oracle",
    "skill", "skills", "technolog", "technology", "technologies", "stack", "python", "pyspark", "duckdb", "airflow", "pytorch", "sql", "qdrant",
    "contact", "email", "phone number", "mobile", "linkedin", "location", "role"
}

class RAGEngine:
    def __init__(self, db_path: str = "./qdrant_db", collection_name: str = "portfolio_knowledge"):
        self.db_path = db_path
        self.collection_name = collection_name
        self.documents: List[Dict[str, Any]] = []
        self.qdrant_client: Optional[Any] = None
        self.embed_model: Optional[Any] = None
        self.vector_dim = 384  # Dimension for BAAI/bge-small-en-v1.5
        
        self._init_knowledge_base()

    def _init_knowledge_base(self):
        """Loads documents and initializes Qdrant Vector DB & Embedding Model if available."""
        self.documents = load_verified_documents()
        
        # Initialize FastEmbed model if installed
        if HAS_FASTEMBED:
            try:
                self.embed_model = TextEmbedding(model_name="BAAI/bge-small-en-v1.5")
            except Exception as e:
                print(f"[RAGEngine] FastEmbed init notice: {e}")
                self.embed_model = None
                
        # Initialize Qdrant client if installed
        if HAS_QDRANT:
            try:
                os.makedirs(self.db_path, exist_ok=True)
                self.qdrant_client = QdrantClient(path=self.db_path)
                self._setup_qdrant_collection()
            except Exception as e:
                print(f"[RAGEngine] Qdrant init notice (using fallback in-memory index): {e}")
                try:
                    self.qdrant_client = QdrantClient(location=":memory:")
                    self._setup_qdrant_collection()
                except Exception as ex:
                    print(f"[RAGEngine] Qdrant memory fallback error: {ex}")
                    self.qdrant_client = None

    def _generate_embedding(self, text: str) -> List[float]:
        """Generates embedding for text using FastEmbed or deterministic TF-IDF dense projection fallback."""
        if self.embed_model:
            try:
                embeddings = list(self.embed_model.embed([text]))
                return embeddings[0].tolist()
            except Exception:
                pass

        # Deterministic lightweight dense vector projection fallback (384 dimensions)
        words = re.findall(r'\w+', text.lower())
        vec = [0.0] * self.vector_dim
        for idx, word in enumerate(words):
            if word not in STOP_WORDS:
                h = hash(word) % self.vector_dim
                vec[h] += 1.0 / (idx + 1.0)
        norm = math.sqrt(sum(x * x for x in vec)) or 1.0
        return [x / norm for x in vec]

    def _setup_qdrant_collection(self):
        """Creates collection and indexes documents into Qdrant."""
        if not self.qdrant_client:
            return

        collections = [c.name for c in self.qdrant_client.get_collections().collections]
        if self.collection_name not in collections:
            self.qdrant_client.create_collection(
                collection_name=self.collection_name,
                vectors_config=VectorParams(size=self.vector_dim, distance=Distance.COSINE)
            )

        # Build point structs for Qdrant
        points = []
        for idx, doc in enumerate(self.documents):
            vec = self._generate_embedding(doc["content"])
            points.append(
                PointStruct(
                    id=idx + 1,
                    vector=vec,
                    payload=doc
                )
            )

        if points:
            self.qdrant_client.upsert(
                collection_name=self.collection_name,
                points=points
            )

    def preprocess_query(self, query: str) -> Dict[str, Any]:
        """Processes query string and detects category intent."""
        q_lower = query.lower()
        cleaned_q = re.sub(r'[^\w\s]', '', q_lower)
        query_words = set(cleaned_q.split())
        meaningful_words = query_words - STOP_WORDS
        
        detected_category = None
        has_domain_term = any(kw in cleaned_q for kw in DOMAIN_KEYWORDS)

        # Reject private/unrelated questions from mapping to category
        is_unrelated = any(w in cleaned_q for w in ["password", "pin", "food", "favorite", "hobby", "join in 2030", "salary", "wifi", "secret"])

        if not is_unrelated:
            # Education synonyms
            if any(w in cleaned_q for w in ["clg", "college", "university", "school", "study", "studying", "degree", "btech", "b tech", "cgpa", "education", "hsc", "ssc", "adcet"]):
                detected_category = "education"
            # Projects synonyms
            elif any(w in cleaned_q for w in ["project", "projects", "built", "made", "build", "medintel", "hireagent", "resumematcher", "resume matcher", "art", "cyclegan", "repo", "repos", "repositories"]):
                detected_category = "projects"
            # Internship / Experience synonyms
            elif any(w in cleaned_q for w in ["intern", "internship", "experience", "worked", "job", "infosys", "tecspeak"]):
                detected_category = "experience"
            # Certifications synonyms
            elif any(w in cleaned_q for w in ["certif", "certification", "certifications", "certificate", "oracle", "genai cert"]):
                detected_category = "certifications"
            # Skills synonyms
            elif any(w in cleaned_q for w in ["skill", "skills", "technolog", "technology", "technologies", "stack", "pyspark", "duckdb", "airflow", "pytorch"]):
                detected_category = "skills"
            # GitHub / Contact profile synonyms
            elif any(w in cleaned_q for w in ["github", "linkedin", "contact", "email", "phone number", "mobile", "location"]):
                if "github" in cleaned_q:
                    detected_category = "github_repository"
                else:
                    detected_category = "profile"

        return {
            "cleaned_query": cleaned_q,
            "raw_query": query,
            "meaningful_words": meaningful_words,
            "has_domain_term": has_domain_term,
            "is_unrelated": is_unrelated,
            "detected_category": detected_category
        }

    def search(self, query: str, category_filter: Optional[str] = None, top_k: int = 4) -> List[Dict[str, Any]]:
        """Hybrid retrieval combining Qdrant dense vector similarity and category/keyword filtering."""
        query_meta = self.preprocess_query(query)
        effective_category = category_filter or query_meta["detected_category"]

        # Anti-Hallucination Guardrail: If query is unrelated or has no domain terms/category, reject unverified queries immediately
        if query_meta["is_unrelated"] or (not query_meta["has_domain_term"] and not effective_category):
            return []

        query_vec = self._generate_embedding(query)
        results = []

        # 1. Qdrant Vector Similarity Retrieval if active
        if self.qdrant_client:
            try:
                search_result = self.qdrant_client.query_points(
                    collection_name=self.collection_name,
                    query=query_vec,
                    limit=top_k * 2
                ).points
                
                for hit in search_result:
                    doc = hit.payload
                    score = float(hit.score)
                    
                    # Exact keyword match boost for specific terms (e.g. CGPA, ADCET)
                    doc_content_low = doc["content"].lower()
                    for word in query_meta["meaningful_words"]:
                        if word in doc_content_low:
                            score += 0.25

                    # Boost score if matching detected category
                    if effective_category and doc.get("category") == effective_category:
                        score += 0.35

                    results.append((score, doc))
            except Exception as e:
                print(f"[RAGEngine] Qdrant query error: {e}")
                results = []

        # 2. Hybrid Keyword & Category Scoring Fallback / Re-ranking
        if not results:
            for doc in self.documents:
                doc_text = (doc["title"] + " " + doc["content"]).lower()
                doc_words = set(re.findall(r'\w+', doc_text))
                
                overlap = len(query_meta["meaningful_words"].intersection(doc_words))
                score = overlap / (len(query_meta["meaningful_words"]) + 1.0)

                if effective_category and doc.get("category") == effective_category:
                    score += 0.40

                if score > 0.05 or (effective_category and doc.get("category") == effective_category):
                    results.append((score, doc))

        # Filter results by relevance threshold
        results.sort(key=lambda x: x[0], reverse=True)
        seen_ids = set()
        unique_docs = []
        
        for score, doc in results:
            if score < 0.65 and not effective_category:
                continue

            doc_id = doc.get("id", doc.get("title"))
            if doc_id not in seen_ids:
                seen_ids.add(doc_id)
                doc_copy = dict(doc)
                doc_copy["retrieval_score"] = round(score, 4)
                unique_docs.append(doc_copy)
                if len(unique_docs) >= top_k:
                    break

        return unique_docs

    def format_context(self, docs: List[Dict[str, Any]]) -> str:
        """Formats retrieved documents into a context block with explicit source citations."""
        if not docs:
            return "NO_VERIFIED_CONTEXT"

        context_str = "VERIFIED KNOWLEDGE BASE CONTEXT:\n\n"
        for idx, doc in enumerate(docs, 1):
            source_label = doc.get("source_type", f"Source: {doc.get('source', 'Portfolio')}")
            url_str = f" ({doc['url']})" if doc.get("url") else ""
            context_str += f"[Chunk {idx} | Category: {doc.get('category')} | {source_label}{url_str}]\n"
            context_str += f"Title: {doc.get('title')}\n"
            context_str += f"Content: {doc.get('content')}\n\n"

        return context_str.strip()


rag_engine = RAGEngine()
