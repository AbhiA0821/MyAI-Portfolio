from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from ...agents.orchestrator import orchestrator

router = APIRouter(prefix="/chat", tags=["AI Chatbot"])

class ChatRequest(BaseModel):
    message: str
    role_context: str = "AI Engineer"

@router.post("")
async def chat_endpoint(request: ChatRequest):
    if not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    async def event_generator():
        async for chunk in orchestrator.route_and_execute_stream(request.message, role_context=request.role_context):
            yield chunk

    return StreamingResponse(event_generator(), media_type="text/plain")
