from typing import Dict, Any, AsyncGenerator
from ..rag.engine import rag_engine
from ..core.llm_provider import get_llm_provider

class SpecializedAgent:
    def __init__(self, name: str, category_filter: str):
        self.name = name
        self.category_filter = category_filter

    async def run_stream(self, query: str, role_context: str = "AI Engineer") -> AsyncGenerator[str, None]:
        docs = rag_engine.search(query, category_filter=self.category_filter)
        context = rag_engine.format_context(docs)

        if context == "NO_VERIFIED_CONTEXT":
            yield "I don't have that information in the portfolio knowledge base."
            return

        system_prompt = f"""You are the {self.name} representing Abhishek Ainapure's AI Engineering Portfolio.
Answer the user's question accurately using ONLY the provided verified context.
Target Career Role Context: {role_context}.
If the information is not present in the context, respond safely with:
'I don't have that information in the portfolio knowledge base.'

Context:
{context}
"""
        provider = get_llm_provider()
        async for chunk in provider.generate_stream(query, system_prompt=system_prompt):
            yield chunk

class MasterOrchestrator:
    def __init__(self):
        self.agents = {
            "profile": SpecializedAgent("Profile Agent", "profile"),
            "project": SpecializedAgent("Project Agent", "projects"),
            "resume": SpecializedAgent("Resume Agent", "profile"),
            "career": SpecializedAgent("Career Agent", "profile"),
            "job_match": SpecializedAgent("Job Match Agent", "projects"),
            "job_app": SpecializedAgent("Job Application Agent", "profile")
        }

    def classify_intent(self, query: str) -> str:
        q_lower = query.lower()
        if any(w in q_lower for w in ["project", "medintel", "pyspark", "repo", "github", "build"]):
            return "project"
        if any(w in q_lower for w in ["resume", "experience", "education", "degree"]):
            return "resume"
        if any(w in q_lower for w in ["job", "match", "suitable", "fit", "salary"]):
            return "job_match"
        if any(w in q_lower for w in ["apply", "application", "automate"]):
            return "job_app"
        if any(w in q_lower for w in ["role", "career", "engineer", "scientist"]):
            return "career"
        return "profile"

    async def route_and_execute_stream(self, query: str, role_context: str = "AI Engineer") -> AsyncGenerator[str, None]:
        agent_key = self.classify_intent(query)
        agent = self.agents.get(agent_key, self.agents["profile"])
        
        # Stream metadata badge header
        yield f"[Agent: {agent.name}] "
        async for chunk in agent.run_stream(query, role_context=role_context):
            yield chunk

orchestrator = MasterOrchestrator()
