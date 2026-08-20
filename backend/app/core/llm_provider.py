from abc import ABC, abstractmethod
import httpx
import json
import logging
import os
from typing import AsyncGenerator, List
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
            async with httpx.AsyncClient(timeout=30.0) as client:
                response = await client.post(url, json=payload)
                if response.status_code == 200:
                    return response.json().get("response", "")
        except Exception as e:
            logger.warning(f"Ollama local connection notice: {e}")
        return ""

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
            async with httpx.AsyncClient(timeout=30.0) as client:
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
            logger.warning(f"Ollama streaming notice: {e}")
        return


class GeminiProvider(BaseLLMProvider):
    def __init__(self, model: str = "gemini-1.5-flash"):
        self.model = model
        self.api_keys: List[str] = []
        
        # Load keys from GEMINI_API_KEYS or GEMINI_API_KEY env vars
        keys_str = os.getenv("GEMINI_API_KEYS") or settings.GEMINI_API_KEY or os.getenv("GEMINI_API_KEY", "")
        if keys_str:
            self.api_keys = [k.strip() for k in keys_str.split(",") if k.strip()]

    async def generate(self, prompt: str, system_prompt: str = "", temperature: float = 0.2) -> str:
        if not self.api_keys:
            return ""
            
        contents = []
        if system_prompt:
            contents.append({"role": "user", "parts": [{"text": f"System Instruction: {system_prompt}"}]})
        contents.append({"role": "user", "parts": [{"text": prompt}]})

        payload = {"contents": contents, "generationConfig": {"temperature": temperature}}

        for key in self.api_keys:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/{self.model}:generateContent?key={key}"
            try:
                async with httpx.AsyncClient(timeout=30.0) as client:
                    resp = await client.post(url, json=payload)
                    if resp.status_code == 200:
                        data = resp.json()
                        candidates = data.get("candidates", [])
                        if candidates and "content" in candidates[0]:
                            return candidates[0]["content"]["parts"][0]["text"]
            except Exception as e:
                logger.warning(f"Gemini key rotation notice: {e}")
        return ""

    async def generate_stream(self, prompt: str, system_prompt: str = "", temperature: float = 0.2) -> AsyncGenerator[str, None]:
        if not self.api_keys:
            return

        contents = []
        if system_prompt:
            contents.append({"role": "user", "parts": [{"text": f"System Instruction: {system_prompt}"}]})
        contents.append({"role": "user", "parts": [{"text": prompt}]})

        payload = {"contents": contents, "generationConfig": {"temperature": temperature}}

        for key in self.api_keys:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/{self.model}:streamGenerateContent?alt=sse&key={key}"
            try:
                async with httpx.AsyncClient(timeout=30.0) as client:
                    async with client.stream("POST", url, json=payload) as resp:
                        if resp.status_code == 200:
                            yielded_any = False
                            async for line in resp.aiter_lines():
                                if line.startswith("data: "):
                                    data = json.loads(line[6:])
                                    text = data.get("candidates", [{}])[0].get("content", {}).get("parts", [{}])[0].get("text", "")
                                    if text:
                                        yielded_any = True
                                        yield text
                            if yielded_any:
                                return
            except Exception as e:
                logger.warning(f"Gemini streaming key rotation notice: {e}")
        return


class GroqProvider(BaseLLMProvider):
    def __init__(self, api_key: str = settings.GROQ_API_KEY, model: str = "llama-3.3-70b-versatile"):
        self.api_key = api_key or os.getenv("GROQ_API_KEY", "")
        self.model = model
        self.url = "https://api.groq.com/openai/v1/chat/completions"

    async def generate(self, prompt: str, system_prompt: str = "", temperature: float = 0.2) -> str:
        if not self.api_key:
            return ""
        headers = {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}
        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        messages.append({"role": "user", "content": prompt})

        payload = {"model": self.model, "messages": messages, "temperature": temperature, "stream": False}
        try:
            async with httpx.AsyncClient(timeout=30.0) as client:
                resp = await client.post(self.url, headers=headers, json=payload)
                if resp.status_code == 200:
                    data = resp.json()
                    return data["choices"][0]["message"]["content"]
        except Exception as e:
            logger.warning(f"Groq generation notice: {e}")
        return ""

    async def generate_stream(self, prompt: str, system_prompt: str = "", temperature: float = 0.2) -> AsyncGenerator[str, None]:
        if not self.api_key:
            return
        headers = {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}
        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        messages.append({"role": "user", "content": prompt})

        payload = {"model": self.model, "messages": messages, "temperature": temperature, "stream": True}
        try:
            async with httpx.AsyncClient(timeout=30.0) as client:
                async with client.stream("POST", self.url, headers=headers, json=payload) as resp:
                    if resp.status_code == 200:
                        async for line in resp.aiter_lines():
                            if line.startswith("data: ") and line != "data: [DONE]":
                                data = json.loads(line[6:])
                                delta = data["choices"][0]["delta"].get("content", "")
                                if delta:
                                    yield delta
                        return
        except Exception as e:
            logger.warning(f"Groq streaming notice: {e}")
        return


class OpenAIProvider(BaseLLMProvider):
    def __init__(self, api_key: str = settings.OPENAI_API_KEY, model: str = "gpt-4o-mini"):
        self.api_key = api_key or os.getenv("OPENAI_API_KEY", "")
        self.model = model
        self.url = "https://api.openai.com/v1/chat/completions"

    async def generate(self, prompt: str, system_prompt: str = "", temperature: float = 0.2) -> str:
        if not self.api_key:
            return ""
        headers = {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}
        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        messages.append({"role": "user", "content": prompt})

        payload = {"model": self.model, "messages": messages, "temperature": temperature, "stream": False}
        try:
            async with httpx.AsyncClient(timeout=30.0) as client:
                resp = await client.post(self.url, headers=headers, json=payload)
                if resp.status_code == 200:
                    data = resp.json()
                    return data["choices"][0]["message"]["content"]
        except Exception as e:
            logger.warning(f"OpenAI generation notice: {e}")
        return ""

    async def generate_stream(self, prompt: str, system_prompt: str = "", temperature: float = 0.2) -> AsyncGenerator[str, None]:
        if not self.api_key:
            return
        headers = {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}
        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        messages.append({"role": "user", "content": prompt})

        payload = {"model": self.model, "messages": messages, "temperature": temperature, "stream": True}
        try:
            async with httpx.AsyncClient(timeout=30.0) as client:
                async with client.stream("POST", self.url, headers=headers, json=payload) as resp:
                    if resp.status_code == 200:
                        async for line in resp.aiter_lines():
                            if line.startswith("data: ") and line != "data: [DONE]":
                                data = json.loads(line[6:])
                                delta = data["choices"][0]["delta"].get("content", "")
                                if delta:
                                    yield delta
                        return
        except Exception as e:
            logger.warning(f"OpenAI streaming notice: {e}")
        return


def get_llm_provider() -> BaseLLMProvider:
    """Factory returns LLM provider configured by environment variables."""
    provider_type = (settings.LLM_PROVIDER or os.getenv("LLM_PROVIDER", "")).lower()
    
    if provider_type == "gemini" or os.getenv("GEMINI_API_KEYS") or os.getenv("GEMINI_API_KEY"):
        return GeminiProvider()
    elif provider_type == "groq" or os.getenv("GROQ_API_KEY"):
        return GroqProvider()
    elif provider_type == "openai" or os.getenv("OPENAI_API_KEY"):
        return OpenAIProvider()
    elif provider_type == "ollama":
        return OllamaLocalProvider()
        
    return OllamaLocalProvider()
