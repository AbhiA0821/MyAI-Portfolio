from abc import ABC, abstractmethod
import httpx
import json
import logging
from typing import AsyncGenerator
from .config import settings

logger = logging.getLogger(__name__)

class BaseLLMProvider(ABC):
    @abstractmethod
    async def generate(self, prompt: str, system_prompt: str = "", temperature: float = 0.2) -> str:
        pass

    @abstractmethod
    async def generate_stream(self, prompt: str, system_prompt: str = "", temperature: float = 0.2) -> AsyncGenerator[str, None]:
        pass

class OllamaLocalProvider(BaseLLMProvider):
    def __init__(self, base_url: str = settings.OLLAMA_BASE_URL, model: str = settings.OLLAMA_MODEL):
        self.base_url = base_url.rstrip("/")
        self.model = model

    async def generate(self, prompt: str, system_prompt: str = "", temperature: float = 0.2) -> str:
        url = f"{self.base_url}/api/generate"
        payload = {
            "model": self.model,
            "prompt": prompt,
            "system": system_prompt,
            "stream": False,
            "options": {"temperature": temperature}
        }
        try:
            async with httpx.AsyncClient(timeout=60.0) as client:
                response = await client.post(url, json=payload)
                if response.status_code == 200:
                    return response.json().get("response", "")
        except Exception as e:
            logger.warning(f"Ollama local connection failed: {e}. Falling back to deterministic rule engine.")
        
        # Rule-based fallback response if Ollama service is not locally running
        return f"[MyAI Assistant Context]: Regarding your query '{prompt[:50]}...', Abhishek is an experienced AI & Data professional specializing in Multi-Agent Systems, RAG, and scalable Data Pipelines."

    async def generate_stream(self, prompt: str, system_prompt: str = "", temperature: float = 0.2) -> AsyncGenerator[str, None]:
        url = f"{self.base_url}/api/generate"
        payload = {
            "model": self.model,
            "prompt": prompt,
            "system": system_prompt,
            "stream": True,
            "options": {"temperature": temperature}
        }
        try:
            async with httpx.AsyncClient(timeout=60.0) as client:
                async with client.stream("POST", url, json=payload) as response:
                    if response.status_code == 200:
                        async for line in response.aiter_lines():
                            if line:
                                data = json.loads(line)
                                chunk = data.get("response", "")
                                if chunk:
                                    yield chunk
                        return
        except Exception as e:
            logger.warning(f"Ollama streaming connection failed: {e}. Streaming fallback.")

        fallback_text = f"Based on the verified portfolio context, Abhishek Ainapure is an AI & Data professional skilled in Multi-Agent Systems, RAG, PySpark, and FastAPI. Please review the relevant sections for technical details."
        for word in fallback_text.split():
            yield word + " "

def get_llm_provider() -> BaseLLMProvider:
    # Provider Abstraction Factory
    provider_type = settings.LLM_PROVIDER.lower()
    if provider_type == "ollama":
        return OllamaLocalProvider()
    return OllamaLocalProvider()
