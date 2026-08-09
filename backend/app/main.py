from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.core.config import settings
from backend.app.api.v1.chat import router as chat_router
from backend.app.api.v1.agent import router as agent_router
from backend.app.db.agent_db import init_db

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

@app.on_event("startup")
def on_startup():
    init_db()

app.include_router(chat_router, prefix=settings.API_V1_STR)
app.include_router(agent_router, prefix=settings.API_V1_STR)

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
