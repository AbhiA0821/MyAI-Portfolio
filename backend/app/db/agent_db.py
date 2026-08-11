import sqlite3
import os
from datetime import datetime
from typing import Dict, Any, List, Optional
import zoneinfo

DB_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "agent_database.sqlite")

def get_ist_now() -> datetime:
    return datetime.now(zoneinfo.ZoneInfo("Asia/Kolkata"))

def get_ist_date_str() -> str:
    return get_ist_now().strftime("%Y-%m-%d")

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Agent Settings Table (Single row)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS agent_settings (
            id INTEGER PRIMARY KEY DEFAULT 1,
            agent_enabled INTEGER NOT NULL DEFAULT 0,
            daily_limit INTEGER NOT NULL DEFAULT 10,
            timezone TEXT NOT NULL DEFAULT 'Asia/Kolkata',
            last_run TEXT,
            next_run TEXT,
            last_email_status TEXT DEFAULT 'NOT SENT',
            last_email_sent_at TEXT
        );
    """)

    # Seed default row if empty
    cursor.execute("SELECT COUNT(*) FROM agent_settings WHERE id = 1;")
    if cursor.fetchone()[0] == 0:
        cursor.execute("""
            INSERT INTO agent_settings (id, agent_enabled, daily_limit, timezone, last_email_status)
            VALUES (1, 0, 10, 'Asia/Kolkata', 'NOT SENT');
        """)

    # Application Records Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS applications (
            id TEXT PRIMARY KEY,
            company TEXT NOT NULL,
            role TEXT NOT NULL,
            job_url TEXT NOT NULL,
            source TEXT NOT NULL,
            status TEXT NOT NULL,
            discovered_at TEXT NOT NULL,
            applied_at TEXT,
            failure_reason TEXT
        );
    """)

    # Admin Users Table (Requirement 2 & 12)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS admin_users (
            id TEXT PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            salt TEXT NOT NULL,
            full_name TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'Administrator',
            created_at TEXT NOT NULL
        );
    """)

    # Admin Sessions Table (Requirement 2 & 12)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS admin_sessions (
            token TEXT PRIMARY KEY,
            email TEXT NOT NULL,
            created_at TEXT NOT NULL,
            expires_at TEXT NOT NULL
        );
    """)

    conn.commit()
    conn.close()

def get_agent_settings() -> Dict[str, Any]:
    init_db()
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM agent_settings WHERE id = 1;")
    row = cursor.fetchone()
    conn.close()
    if row:
        return dict(row)
    return {
        "agent_enabled": 0,
        "daily_limit": 10,
        "timezone": "Asia/Kolkata",
        "last_run": None,
        "next_run": None,
        "last_email_status": "NOT SENT",
        "last_email_sent_at": None
    }

def update_agent_settings(
    agent_enabled: Optional[bool] = None,
    last_run: Optional[str] = None,
    next_run: Optional[str] = None,
    last_email_status: Optional[str] = None,
    last_email_sent_at: Optional[str] = None
):
    init_db()
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    updates = []
    params = []

    if agent_enabled is not None:
        updates.append("agent_enabled = ?")
        params.append(1 if agent_enabled else 0)
    if last_run is not None:
        updates.append("last_run = ?")
        params.append(last_run)
    if next_run is not None:
        updates.append("next_run = ?")
        params.append(next_run)
    if last_email_status is not None:
        updates.append("last_email_status = ?")
        params.append(last_email_status)
    if last_email_sent_at is not None:
        updates.append("last_email_sent_at = ?")
        params.append(last_email_sent_at)

    if updates:
        query = f"UPDATE agent_settings SET {', '.join(updates)} WHERE id = 1;"
        cursor.execute(query, params)
        conn.commit()
    conn.close()

def get_applications_today_count() -> int:
    init_db()
    today_str = get_ist_date_str()
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        SELECT COUNT(*) FROM applications
        WHERE status = 'SUBMITTED' AND applied_at LIKE ?;
    """, (f"{today_str}%",))
    count = cursor.fetchone()[0]
    conn.close()
    return count

def get_applications_history() -> List[Dict[str, Any]]:
    init_db()
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM applications ORDER BY datetime(discovered_at) DESC;")
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]

def insert_application(app_data: Dict[str, Any]):
    init_db()
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO applications (id, company, role, job_url, source, status, discovered_at, applied_at, failure_reason)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    """, (
        app_data["id"],
        app_data["company"],
        app_data["role"],
        app_data["job_url"],
        app_data["source"],
        app_data["status"],
        app_data["discovered_at"],
        app_data.get("applied_at"),
        app_data.get("failure_reason")
    ))
    conn.commit()
    conn.close()

def find_duplicate_application(job_url: str, company: str, role: str) -> bool:
    init_db()
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        SELECT COUNT(*) FROM applications
        WHERE job_url = ? OR (LOWER(company) = LOWER(?) AND LOWER(role) = LOWER(?));
    """, (job_url, company, role))
    count = cursor.fetchone()[0]
    conn.close()
    return count > 0

def cancel_in_progress_applications():
    init_db()
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        UPDATE applications
        SET status = 'CANCELLED_BY_USER', failure_reason = 'Agent manually turned OFF by user'
        WHERE status IN ('DISCOVERED', 'VIEWED', 'READY', 'APPLYING');
    """)
    conn.commit()
    conn.close()

def update_application_status(app_id: str, status: str, failure_reason: Optional[str] = None, applied_at: Optional[str] = None):
    init_db()
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    if applied_at:
        cursor.execute("""
            UPDATE applications
            SET status = ?, failure_reason = ?, applied_at = ?
            WHERE id = ?;
        """, (status, failure_reason, applied_at, app_id))
    else:
        cursor.execute("""
            UPDATE applications
            SET status = ?, failure_reason = ?
            WHERE id = ?;
        """, (status, failure_reason, app_id))
    conn.commit()
    conn.close()

# Admin User & Session DB Functions
def get_admin_user_by_email(email: str) -> Optional[Dict[str, Any]]:
    init_db()
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM admin_users WHERE LOWER(email) = LOWER(?);", (email.strip(),))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def save_admin_user(user_id: str, email: str, password_hash: str, salt: str, full_name: str):
    init_db()
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    now_iso = get_ist_now().isoformat()
    cursor.execute("""
        INSERT OR REPLACE INTO admin_users (id, email, password_hash, salt, full_name, role, created_at)
        VALUES (?, ?, ?, ?, ?, 'Administrator', ?);
    """, (user_id, email.lower().strip(), password_hash, salt, full_name, now_iso))
    conn.commit()
    conn.close()

def save_admin_session(token: str, email: str, expires_at: str):
    init_db()
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    now_iso = get_ist_now().isoformat()
    cursor.execute("""
        INSERT OR REPLACE INTO admin_sessions (token, email, created_at, expires_at)
        VALUES (?, ?, ?, ?);
    """, (token, email.lower().strip(), now_iso, expires_at))
    conn.commit()
    conn.close()

def get_admin_session(token: str) -> Optional[Dict[str, Any]]:
    init_db()
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM admin_sessions WHERE token = ?;", (token,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def delete_admin_session(token: str):
    init_db()
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("DELETE FROM admin_sessions WHERE token = ?;", (token,))
    conn.commit()
    conn.close()
