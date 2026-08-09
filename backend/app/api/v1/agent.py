from fastapi import APIRouter, HTTPException, Body
from pydantic import BaseModel, HttpUrl
from typing import Optional, List, Dict, Any
from backend.app.services.job_agent_service import (
    get_agent_status,
    toggle_agent,
    get_formatted_history,
    record_real_application,
    run_job_discovery_and_applications_workflow
)

router = APIRouter(prefix="/agent", tags=["Job Application Agent"])

class ToggleRequest(BaseModel):
    enabled: bool

class ApplicationCreateRequest(BaseModel):
    company: str
    role: str
    jobUrl: str
    source: str
    status: str
    failureReason: Optional[str] = None

@router.get("/status")
def read_agent_status() -> Dict[str, Any]:
    return get_agent_status()

@router.post("/toggle")
def set_agent_toggle(payload: ToggleRequest) -> Dict[str, Any]:
    return toggle_agent(payload.enabled)

@router.get("/applications")
def read_applications() -> List[Dict[str, Any]]:
    return get_formatted_history()

@router.post("/record-application")
def create_application_record(payload: ApplicationCreateRequest) -> Dict[str, Any]:
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

@router.post("/run-now")
def trigger_agent_run() -> Dict[str, Any]:
    return run_job_discovery_and_applications_workflow()
