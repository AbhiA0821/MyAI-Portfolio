from typing import List, Dict, Optional
from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from ...agents.orchestrator import orchestrator

router = APIRouter(prefix="/chat", tags=["AI Chatbot"])

class ChatMessageHistory(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[ChatMessageHistory]] = None
    role_context: str = "AI Engineer"

@router.post("")
async def chat_endpoint(request: ChatRequest):
    if not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    formatted_history = None
    if request.history:
        formatted_history = [{"role": h.role, "content": h.content} for h in request.history]

    async def event_generator():
        async for chunk in orchestrator.route_and_execute_stream(
            request.message,
            conversation_history=formatted_history,
            role_context=request.role_context
        ):
            yield chunk

    return StreamingResponse(event_generator(), media_type="text/plain")
