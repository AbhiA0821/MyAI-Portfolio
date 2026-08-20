from typing import Dict, Any, AsyncGenerator, List, Optional
from ..rag.engine import rag_engine
from ..core.llm_provider import get_llm_provider

SYSTEM_RAG_PROMPT = """You are Abhishek Ainapure's Grounded Portfolio Assistant.

You answer questions ONLY using the verified context retrieved from the portfolio knowledge base below.

Strict Anti-Hallucination Instructions:
1. Never invent or assume facts.
2. If the answer is present in the retrieved context, answer clearly, concisely, and professionally.
3. Include clear source citations at the end of your response (e.g. Source: Resume / Education, Source: GitHub / Resume).
4. If a GitHub repository URL is present in the context, provide a Markdown link (e.g. [View GitHub](https://github.com/AbhiA0821/MedIntel)).
5. If the answer is NOT present or the retrieved context is insufficient, respond strictly with:
   "I don't have verified information about that in Abhishek's portfolio."
6. Do NOT guess or use outside general LLM knowledge to fill missing details.

Retrieved Context:
{context}
"""

class SpecializedAgent:
    def __init__(self, name: str, category_filter: Optional[str] = None):
        self.name = name
        self.category_filter = category_filter

    async def run_stream(self, query: str, conversation_history: Optional[List[Dict[str, str]]] = None) -> AsyncGenerator[str, None]:
        # Formulate search query considering recent history for follow-ups
        search_query = query
        if conversation_history:
            # Append last user query if follow-up pronoun detected (e.g. "which one", "he", "his")
            q_low = query.lower()
            if any(w in q_low for w in ["which one", "what about", "is it", "ongoing", "status"]):
                for msg in reversed(conversation_history):
                    if msg.get("role") == "user":
                        search_query = f"{msg.get('content', '')} {query}"
                        break

        docs = rag_engine.search(search_query, category_filter=self.category_filter)
        context = rag_engine.format_context(docs)

        if context == "NO_VERIFIED_CONTEXT":
            yield "I don't have verified information about that in Abhishek's portfolio."
            return

        formatted_system_prompt = SYSTEM_RAG_PROMPT.format(context=context)
        provider = get_llm_provider()
        
        # Check if provider is fallback or LLM API
        generated_any = False
        try:
            async for chunk in provider.generate_stream(query, system_prompt=formatted_system_prompt):
                generated_any = True
                yield chunk
        except Exception:
            generated_any = False

        if not generated_any:
            # Deterministic context-grounded response synthesis if LLM provider streaming is offline
            yield self._synthesize_grounded_fallback(query, docs)

    def _synthesize_grounded_fallback(self, query: str, docs: List[Dict[str, Any]]) -> str:
        """Grounded synthesis directly from retrieved docs when offline."""
        if not docs:
            return "I don't have verified information about that in Abhishek's portfolio."
        
        primary_doc = docs[0]
        category = primary_doc.get("category", "")
        
        response = f"{primary_doc['content']}\n\n"
        source_label = primary_doc.get("source_type", "Resume / Portfolio")
        if primary_doc.get("url"):
            response += f"Source: {source_label} ([View GitHub]({primary_doc['url']}))"
        else:
            response += f"Source: {source_label}"
            
        return response


class MasterOrchestrator:
    def __init__(self):
        self.agents = {
            "education": SpecializedAgent("Education Agent", "education"),
            "projects": SpecializedAgent("Projects Agent", "projects"),
            "experience": SpecializedAgent("Experience Agent", "experience"),
            "certifications": SpecializedAgent("Certifications Agent", "certifications"),
            "skills": SpecializedAgent("Skills Agent", "skills"),
            "profile": SpecializedAgent("Profile Agent", "profile"),
            "github_repository": SpecializedAgent("GitHub Agent", "github_repository"),
            "assistant": SpecializedAgent("Portfolio Assistant Agent", None)
        }

    def route(self, query: str) -> SpecializedAgent:
        query_meta = rag_engine.preprocess_query(query)
        cat = query_meta["detected_category"]
        if cat and cat in self.agents:
            return self.agents[cat]
        return self.agents["assistant"]

    async def route_and_execute_stream(
        self,
        query: str,
        conversation_history: Optional[List[Dict[str, str]]] = None,
        role_context: str = "AI Engineer"
    ) -> AsyncGenerator[str, None]:
        agent = self.route(query)
        yield f"[Agent: {agent.name}] "
        async for chunk in agent.run_stream(query, conversation_history=conversation_history):
            yield chunk

orchestrator = MasterOrchestrator()
