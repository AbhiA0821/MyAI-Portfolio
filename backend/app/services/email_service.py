import os
import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from backend.app.db.agent_db import get_agent_settings, get_applications_today_count, get_applications_history, update_agent_settings, get_ist_date_str, get_ist_now

logger = logging.getLogger(__name__)

def send_daily_email_report() -> bool:
    settings = get_agent_settings()
    
    # Requirement 18: If agent is OFF, do not send report.
    if not settings.get("agent_enabled", 0):
        logger.info("Agent is OFF. Skipping daily email report.")
        return False

    email_host = os.getenv("EMAIL_HOST", "")
    email_port = int(os.getenv("EMAIL_PORT", "587"))
    email_user = os.getenv("EMAIL_USER", "")
    email_pass = os.getenv("EMAIL_PASSWORD", "")
    recipient = os.getenv("RECIPIENT_EMAIL", email_user or "ainapureabhi0821@gmail.com")

    today_str = get_ist_date_str()
    today_count = get_applications_today_count()
    daily_limit = settings.get("daily_limit", 10)
    remaining = max(0, daily_limit - today_count)

    # Get today's actual applications from history
    all_apps = get_applications_history()
    today_apps = [a for a in all_apps if (a.get("applied_at") or a.get("discovered_at") or "").startswith(today_str)]

    submitted_apps = [a for a in today_apps if a.get("status") == "SUBMITTED"]
    failed_apps = [a for a in today_apps if a.get("status") in ("FAILED", "MANUAL_ACTION_REQUIRED")]
    skipped_apps = [a for a in today_apps if a.get("status") == "SKIPPED"]

    # Construct email text
    subject = f"MyAI Job Application Report — {get_ist_now().strftime('%d %b %Y')}"
    
    body = f"""MyAI Autonomous Job Application Report
===============================================
Date: {today_str} (Asia/Kolkata IST)
Agent Status: ACTIVE
Applications Today: {today_count} / {daily_limit}
Remaining Daily Capacity: {remaining}

SUCCESSFUL SUBMISSIONS ({len(submitted_apps)}):
"""
    if submitted_apps:
        for idx, app in enumerate(submitted_apps, 1):
            body += f"{idx}. {app['company']} — {app['role']}\n   URL: {app['job_url']}\n   Source: {app['source']}\n\n"
    else:
        body += "None submitted today.\n\n"

    body += f"FAILED / ACTION REQUIRED ({len(failed_apps)}):\n"
    if failed_apps:
        for idx, app in enumerate(failed_apps, 1):
            body += f"{idx}. {app['company']} — {app['role']} [{app['status']}]\n   Reason: {app.get('failure_reason') or 'N/A'}\n\n"
    else:
        body += "None failed today.\n\n"

    body += f"SKIPPED ({len(skipped_apps)}):\n"
    if skipped_apps:
        for idx, app in enumerate(skipped_apps, 1):
            body += f"{idx}. {app['company']} — {app['role']} [Already Applied]\n"
    else:
        body += "None skipped today.\n\n"

    body += "===============================================\nGenerated automatically by MyAI Autonomous Agent."

    # Requirement 19 & 20: Email Service & Failure handling
    if not email_host or not email_user or not email_pass:
        logger.warning("Email credentials not fully configured in environment. Skipping SMTP dispatch.")
        update_agent_settings(last_email_status="NOT SENT", last_email_sent_at=get_ist_now().isoformat())
        return False

    try:
        msg = MIMEMultipart()
        msg["From"] = email_user
        msg["To"] = recipient
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))

        with smtplib.SMTP(email_host, email_port, timeout=15) as server:
            server.starttls()
            server.login(email_user, email_pass)
            server.send_message(msg)

        now_str = get_ist_now().isoformat()
        update_agent_settings(last_email_status="SENT", last_email_sent_at=now_str)
        logger.info("Daily email report sent successfully to %s", recipient)
        return True

    except Exception as e:
        # Requirement 20: If email fails, do NOT change application records! Store emailStatus = FAILED
        logger.error("Failed to send daily email report: %s", str(e))
        update_agent_settings(last_email_status="FAILED", last_email_sent_at=get_ist_now().isoformat())
        return False
