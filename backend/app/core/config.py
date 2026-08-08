import os
from pydantic import BaseModel

class Settings(BaseModel):
    PROJECT_NAME: str = "MyAI Portfolio Backend"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Zero-Cost LLM Settings
    LLM_PROVIDER: str = os.getenv("LLM_PROVIDER", "ollama") # ollama, groq, openai, gemini
    OLLAMA_BASE_URL: str = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
    OLLAMA_MODEL: str = os.getenv("OLLAMA_MODEL", "qwen2.5:latest")
    
    # Cloud Backups
    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "")
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    
    # Vector DB
    CHROMA_PERSIST_DIR: str = os.getenv("CHROMA_PERSIST_DIR", "./chroma_db")
    
    # Safety Controls
    MAX_DAILY_APPLICATIONS: int = 10
    VERIFICATION_SCORE_THRESHOLD: float = 0.85

settings = Settings()
