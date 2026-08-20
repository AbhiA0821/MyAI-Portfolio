from fastapi import APIRouter, HTTPException, Depends, Header, Body
from pydantic import BaseModel, EmailStr
from typing import Optional, List, Dict, Any
from backend.app.core.security import (
    authenticate_admin,
    verify_admin_session_token,
    delete_admin_session,
    get_current_admin,
    ensure_default_admin_user
)
from backend.app.services.job_agent_service import (
    get_agent_status,
    toggle_agent,
    get_formatted_history,
    record_real_application,
    run_job_discovery_and_applications_workflow
)
from backend.app.rag.engine import rag_engine

router = APIRouter(prefix="/admin", tags=["Private Admin Control Center"])

class LoginRequest(BaseModel):
    email: str
    password: str

class ToggleRequest(BaseModel):
    enabled: bool

class ApplicationCreateRequest(BaseModel):
    company: str
    role: str
    jobUrl: str
    source: str
    status: str
    failureReason: Optional[str] = None

# Public Admin Authentication Route
@router.post("/login")
def admin_login(payload: LoginRequest) -> Dict[str, Any]:
    if not payload.email.strip() or not payload.password.strip():
        raise HTTPException(status_code=400, detail="Email and password are required")
    
    auth_result = authenticate_admin(payload.email.strip(), payload.password)
    if not auth_result:
        raise HTTPException(status_code=401, detail="401 Unauthorized: Invalid admin email or password")
    
    return auth_result

# Protected Admin Logout Route
@router.post("/logout")
def admin_logout(
    current_admin: Dict[str, Any] = Depends(get_current_admin),
    x_admin_token: Optional[str] = Header(None)
):
    token = current_admin.get("token") or x_admin_token
    if token:
        delete_admin_session(token)
    return {"status": "success", "message": "Admin session invalidated"}

# Protected Admin Identity Profile Route
@router.get("/me")
def read_admin_profile(current_admin: Dict[str, Any] = Depends(get_current_admin)) -> Dict[str, Any]:
    return {
        "fullName": current_admin["fullName"],
        "email": current_admin["email"],
        "role": current_admin["role"],
        "status": "AUTHENTICATED"
    }

# Protected RAG Retrieval Debugging Endpoint
@router.get("/rag/debug")
def rag_debug_endpoint(
    query: str = "Which college does Abhishek study at?",
    current_admin: Dict[str, Any] = Depends(get_current_admin)
) -> Dict[str, Any]:
    query_meta = rag_engine.preprocess_query(query)
    retrieved_docs = rag_engine.search(query, top_k=5)
    formatted_context = rag_engine.format_context(retrieved_docs)
    
    return {
        "query": query,
        "preprocessed_query": query_meta["cleaned_query"],
        "detected_category": query_meta["detected_category"],
        "retrieved_count": len(retrieved_docs),
        "total_documents_in_index": len(rag_engine.documents),
        "retrieved_documents": retrieved_docs,
        "formatted_context": formatted_context
    }

# Protected RAG Knowledge Base Reindex Endpoint
@router.post("/rag/reindex")
def rag_reindex_endpoint(
    current_admin: Dict[str, Any] = Depends(get_current_admin)
) -> Dict[str, Any]:
    rag_engine._init_knowledge_base()
    return {
        "status": "success",
        "message": f"Successfully reindexed {len(rag_engine.documents)} knowledge documents.",
        "documents_count": len(rag_engine.documents)
    }

# Requirement 3: Every Admin API Endpoint MUST verify authentication
@router.get("/agent/status")
def read_agent_status(current_admin: Dict[str, Any] = Depends(get_current_admin)) -> Dict[str, Any]:
    return get_agent_status()

@router.post("/agent/toggle")
def set_agent_toggle(
    payload: ToggleRequest,
    current_admin: Dict[str, Any] = Depends(get_current_admin)
) -> Dict[str, Any]:
    return toggle_agent(payload.enabled)

@router.get("/applications")
def read_applications(current_admin: Dict[str, Any] = Depends(get_current_admin)) -> List[Dict[str, Any]]:
    return get_formatted_history()

@router.post("/record-application")
def create_application_record(
    payload: ApplicationCreateRequest,
    current_admin: Dict[str, Any] = Depends(get_current_admin)
) -> Dict[str, Any]:
    if not payload.company.strip() or not payload.role.strip() or not payload.jobUrl.strip():
        raise HTTPException(status_code=400, detail="Company, role, and jobUrl are required.")
    
    app_record = record_real_application(
        company=payload.company,
        role=payload.role,
        job_url=payload.jobUrl,
        source=payload.source,
        status=payload.status,
        failure_reason=payload.failureReason
    )
    return app_record

@router.post("/agent/run-now")
def trigger_agent_run(current_admin: Dict[str, Any] = Depends(get_current_admin)) -> Dict[str, Any]:
    return run_job_discovery_and_applications_workflow()
