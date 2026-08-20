import os
import json
import hashlib
from typing import List, Dict, Any

KNOWLEDGE_JSON_PATH = os.path.join(os.path.dirname(__file__), "../../..", "knowledge", "knowledge_base.json")
KNOWLEDGE_DIR = os.path.join(os.path.dirname(__file__), "../../..", "knowledge")

def generate_doc_hash(doc: Dict[str, Any]) -> str:
    content_str = f"{doc.get('id', '')}:{doc.get('title', '')}:{doc.get('content', '')}"
    return hashlib.sha256(content_str.encode("utf-8")).hexdigest()

def load_verified_documents() -> List[Dict[str, Any]]:
    documents = []
    
    if os.path.exists(KNOWLEDGE_JSON_PATH):
        with open(KNOWLEDGE_JSON_PATH, "r", encoding="utf-8") as f:
            documents = json.load(f)
    
    # Process markdown files in knowledge directory if any exist
    if os.path.exists(KNOWLEDGE_DIR):
        for filename in os.listdir(KNOWLEDGE_DIR):
            if filename.endswith(".md"):
                file_path = os.path.join(KNOWLEDGE_DIR, filename)
                category = filename.replace(".md", "")
                with open(file_path, "r", encoding="utf-8") as f:
                    text = f.read()
                
                # Verify if file has content
                if text.strip():
                    doc_id = f"md_{category}"
                    # Check if doc_id already present from JSON
                    if not any(d.get("id") == doc_id for d in documents):
                        documents.append({
                            "id": doc_id,
                            "source": "knowledge_file",
                            "source_type": f"Knowledge / {category.title()}",
                            "category": category,
                            "title": f"Candidate {category.title()}",
                            "project": "",
                            "date": "",
                            "url": "https://github.com/AbhiA0821",
                            "content": text.strip()
                        })

    # Ensure hash IDs for deduplication
    for doc in documents:
        if "doc_hash" not in doc:
            doc["doc_hash"] = generate_doc_hash(doc)
            
    return documents

if __name__ == "__main__":
    docs = load_verified_documents()
    print(f"Loaded {len(docs)} verified knowledge documents.")
    for d in docs:
        print(f"- [{d['category']}] {d['title']} ({d['source_type']})")
