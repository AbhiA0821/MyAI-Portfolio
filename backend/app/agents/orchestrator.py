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
            yield "I don't have that information in my portfolio knowledge base."
            return

        system_prompt = f"""You are the {self.name} representing Abhishek Ainapure's AI Engineering Portfolio.
Answer the visitor's question accurately using ONLY the provided verified context.
Target Role Context: {role_context}.
If the information is not present in the context, respond strictly with:
'I don't have that information in my portfolio knowledge base.'

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
            "career": SpecializedAgent("Career Agent", "profile"),
            "github": SpecializedAgent("GitHub Agent", "projects"),
            "assistant": SpecializedAgent("Portfolio Assistant Agent", "profile")
        }

    def classify_intent(self, query: str) -> str:
        q_lower = query.lower()
        if any(w in q_lower for w in ["project", "resume", "medintel", "art", "cyclegan", "pyspark", "duckdb", "architecture", "build"]):
            return "project"
        if any(w in q_lower for w in ["github", "repo", "stars", "commit", "code"]):
            return "github"
        if any(w in q_lower for w in ["role", "career", "engineer", "scientist", "align"]):
            return "career"
        if any(w in q_lower for w in ["skill", "experience", "education", "degree", "certif"]):
            return "profile"
        return "assistant"

    async def route_and_execute_stream(self, query: str, role_context: str = "AI Engineer") -> AsyncGenerator[str, None]:
        agent_key = self.classify_intent(query)
        agent = self.agents.get(agent_key, self.agents["assistant"])
        
        # Stream metadata badge header
        yield f"[Agent: {agent.name}] "
        async for chunk in agent.run_stream(query, role_context=role_context):
            yield chunk

orchestrator = MasterOrchestrator()
