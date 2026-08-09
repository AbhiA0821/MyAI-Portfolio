import os
import hashlib
import secrets
import uuid
import logging
from datetime import datetime, timedelta
from typing import Optional, Dict, Any
from fastapi import Header, HTTPException, Depends, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from backend.app.db.agent_db import (
    get_admin_user_by_email,
    save_admin_user,
    save_admin_session,
    get_admin_session,
    delete_admin_session,
    get_ist_now
)

logger = logging.getLogger(__name__)
security_scheme = HTTPBearer(auto_error=False)

DEFAULT_ADMIN_EMAIL = os.getenv("ADMIN_EMAIL", "ainapureabhi0821@gmail.com")
DEFAULT_ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "Abhi@2026")
SESSION_DURATION_HOURS = 24

def hash_password(password: str, salt_bytes: Optional[bytes] = None) -> tuple[str, str]:
    if not salt_bytes:
        salt_bytes = secrets.token_bytes(16)
    hash_bytes = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt_bytes, 100000)
    return hash_bytes.hex(), salt_bytes.hex()

def verify_password(password: str, stored_hash_hex: str, stored_salt_hex: str) -> bool:
    salt_bytes = bytes.fromhex(stored_salt_hex)
    computed_hash_hex, _ = hash_password(password, salt_bytes)
    return secrets.compare_digest(computed_hash_hex, stored_hash_hex)

def ensure_default_admin_user():
    existing = get_admin_user_by_email(DEFAULT_ADMIN_EMAIL)
    if not existing:
        hash_hex, salt_hex = hash_password(DEFAULT_ADMIN_PASSWORD)
        user_id = str(uuid.uuid4())
        save_admin_user(
            user_id=user_id,
            email=DEFAULT_ADMIN_EMAIL,
            password_hash=hash_hex,
            salt=salt_hex,
            full_name="Abhishek Ainapure"
        )
        logger.info("Default admin user initialized for %s", DEFAULT_ADMIN_EMAIL)

def authenticate_admin(email: str, password: str) -> Optional[Dict[str, Any]]:
    ensure_default_admin_user()
    user = get_admin_user_by_email(email)
    if not user:
        return None
    if verify_password(password, user["password_hash"], user["salt"]):
        # Generate session token
        token = secrets.token_urlsafe(32)
        expires_at = (get_ist_now() + timedelta(hours=SESSION_DURATION_HOURS)).isoformat()
        save_admin_session(token, user["email"], expires_at)
        return {
            "token": token,
            "email": user["email"],
            "fullName": user["full_name"],
            "role": user["role"],
            "expiresAt": expires_at
        }
    return None

def verify_admin_session_token(token: str) -> Optional[Dict[str, Any]]:
    if not token:
        return None
    session = get_admin_session(token)
    if not session:
        return None
    
    # Check expiration
    expires_at = datetime.fromisoformat(session["expires_at"])
    if get_ist_now() > expires_at:
        delete_admin_session(token)
        return None

    user = get_admin_user_by_email(session["email"])
    if not user:
        return None
    
    return {
        "email": user["email"],
        "fullName": user["full_name"],
        "role": user["role"],
        "token": token
    }

def get_current_admin(
    credentials: Optional[HTTPAuthorizationCredentials] = Security(security_scheme),
    x_admin_token: Optional[str] = Header(None)
) -> Dict[str, Any]:
    token = None
    if credentials and credentials.credentials:
        token = credentials.credentials
    elif x_admin_token:
        token = x_admin_token

    if not token:
        raise HTTPException(
            status_code=401,
            detail="401 Unauthorized: Admin authentication credentials missing"
        )

    admin_profile = verify_admin_session_token(token)
    if not admin_profile:
        raise HTTPException(
            status_code=401,
            detail="401 Unauthorized: Session token is invalid or expired"
        )

    return admin_profile
