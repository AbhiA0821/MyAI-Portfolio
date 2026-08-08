import os
import re
from typing import List, Dict, Any

class RAGEngine:
    def __init__(self, knowledge_dir: str = "./knowledge"):
        self.knowledge_dir = knowledge_dir
        self.documents: List[Dict[str, Any]] = []
        self._load_knowledge_base()

    def _load_knowledge_base(self):
        if not os.path.exists(self.knowledge_dir):
            return

        for filename in os.listdir(self.knowledge_dir):
            if filename.endswith(".md"):
                file_path = os.path.join(self.knowledge_dir, filename)
                category = filename.replace(".md", "")
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()

                # Chunking by headers
                sections = re.split(r'\n(?=## )', content)
                for sec in sections:
                    if sec.strip():
                        self.documents.append({
                            "category": category,
                            "content": sec.strip(),
                            "source": filename
                        })

    def search(self, query: str, category_filter: str = None, top_k: int = 3) -> List[Dict[str, Any]]:
        query_words = set(query.lower().split())
        scored_docs = []

        for doc in self.documents:
            if category_filter and doc["category"] != category_filter:
                continue

            doc_text = doc["content"].lower()
            doc_words = set(re.findall(r'\w+', doc_text))
            overlap = len(query_words.intersection(doc_words))
            
            # Simple term frequency weighting
            score = overlap / (len(query_words) + 1)
            if overlap > 0:
                scored_docs.append((score, doc))

        scored_docs.sort(key=lambda x: x[0], reverse=True)
        results = [doc for score, doc in scored_docs[:top_k]]
        return results

    def format_context(self, docs: List[Dict[str, Any]]) -> str:
        if not docs:
            return "NO_VERIFIED_CONTEXT"
        
        context_str = "Verified Knowledge Base Context:\n\n"
        for idx, doc in enumerate(docs, 1):
            context_str += f"--- Document {idx} [Category: {doc['category']}] ---\n{doc['content']}\n\n"
        return context_str

rag_engine = RAGEngine()
