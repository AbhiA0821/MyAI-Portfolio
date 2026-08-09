import uuid
import logging
from datetime import datetime
from typing import Dict, Any, List, Optional
from backend.app.db.agent_db import (
    get_agent_settings,
    update_agent_settings,
    get_applications_today_count,
    get_applications_history,
    insert_application,
    update_application_status,
    find_duplicate_application,
    cancel_in_progress_applications,
    get_ist_now,
    get_ist_date_str
)
from backend.app.services.email_service import send_daily_email_report

logger = logging.getLogger(__name__)

TARGET_ROLES = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI Engineer",
    "LLM Specialist",
    "RAG Systems Engineer",
    "Data Engineer",
    "PySpark Data Specialist",
    "Data Scientist",
    "AI/ML Intern",
    "Data Engineering Intern",
    "Machine Learning Intern"
]

def get_agent_status() -> Dict[str, Any]:
    settings = get_agent_settings()
    today_count = get_applications_today_count()
    daily_limit = settings.get("daily_limit", 10)
    remaining = max(0, daily_limit - today_count)
    history = get_applications_history()

    return {
        "agentEnabled": bool(settings.get("agent_enabled", 0)),
        "applicationsToday": today_count,
        "dailyLimit": daily_limit,
        "remainingCapacity": remaining,
        "lastRun": settings.get("last_run"),
        "nextRun": settings.get("next_run"),
        "lastEmailStatus": settings.get("last_email_status", "NOT SENT"),
        "totalHistoryCount": len(history)
    }

def toggle_agent(enabled: bool) -> Dict[str, Any]:
    update_agent_settings(agent_enabled=enabled)
    
    # Requirement 3 & 25: Immediate OFF switch
    if not enabled:
        cancel_in_progress_applications()
        logger.info("Master Agent turned OFF. Cancelled pending application processing.")
    else:
        logger.info("Master Agent turned ON. Authorized for persistent daily automation.")

    return get_agent_status()

def get_formatted_history() -> List[Dict[str, Any]]:
    rows = get_applications_history()
    formatted = []
    for r in rows:
        formatted.append({
            "id": r["id"],
            "company": r["company"],
            "role": r["role"],
            "jobUrl": r["job_url"],
            "source": r["source"],
            "status": r["status"],
            "discoveredAt": r["discovered_at"],
            "appliedAt": r.get("applied_at"),
            "failureReason": r.get("failure_reason")
        })
    return formatted

def record_real_application(
    company: str,
    role: str,
    job_url: str,
    source: str,
    status: str,
    failure_reason: Optional[str] = None
) -> Dict[str, Any]:
    settings = get_agent_settings()

    # Requirement 15 & 25: Check OFF state
    if not settings.get("agent_enabled", 0):
        status = "CANCELLED_BY_USER"
        failure_reason = "Agent is turned OFF by user"

    # Requirement 12: Duplicate protection
    if find_duplicate_application(job_url, company, role) and status == "SUBMITTED":
        status = "SKIPPED"
        failure_reason = "Duplicate application detected"

    # Requirement 4: Check daily limit before SUBMITTED
    if status == "SUBMITTED":
        today_count = get_applications_today_count()
        if today_count >= settings.get("daily_limit", 10):
            status = "SKIPPED"
            failure_reason = "Daily limit of 10 applications reached for today in IST"

    now_iso = get_ist_now().isoformat()
    app_id = str(uuid.uuid4())

    app_data = {
        "id": app_id,
        "company": company,
        "role": role,
        "job_url": job_url,
        "source": source,
        "status": status,
        "discovered_at": now_iso,
        "applied_at": now_iso if status == "SUBMITTED" else None,
        "failure_reason": failure_reason
    }

    insert_application(app_data)
    return app_data

def run_job_discovery_and_applications_workflow() -> Dict[str, Any]:
    settings = get_agent_settings()

    # Requirement 1 & 3: Stop if OFF
    if not settings.get("agent_enabled", 0):
        logger.info("Job agent is OFF. Skipping discovery & applications workflow.")
        return get_agent_status()

    today_count = get_applications_today_count()
    daily_limit = settings.get("daily_limit", 10)

    if today_count >= daily_limit:
        logger.info("Daily limit of 10 applications already reached for today.")
        update_agent_settings(last_run=get_ist_now().isoformat())
        send_daily_email_report()
        return get_agent_status()

    now_iso = get_ist_now().isoformat()
    update_agent_settings(last_run=now_iso)

    # Requirement 17: Send daily email report after workflow completion
    send_daily_email_report()
    return get_agent_status()
