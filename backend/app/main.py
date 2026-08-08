from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Backend API Gateway for MyAI Portfolio, Multi-Agent Orchestration, RAG, and Job Matching Engine"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "status": "online",
        "system": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "provider": settings.LLM_PROVIDER,
        "docs": "/docs"
    }

@app.get("/health")
async def health():
    return {"status": "healthy", "database": "connected", "vector_store": "active"}
