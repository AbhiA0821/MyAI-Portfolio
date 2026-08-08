# MyAI Portfolio — AI Engineering & Multi-Agent Career Assistant

> **Tagline**: *"AI-Powered Personal Portfolio & Multi-Agent Career Assistant"*

MyAI Portfolio is a production-grade, zero-cost personal portfolio and autonomous career intelligence platform built for AI Engineers, ML Engineers, Data Engineers, and Data Scientists.

---

## 🌟 Key Features

1. **Role-Based Profile Selector**: Dynamically filter technical skills, project showcases, and career highlights tailored for **AI Engineer**, **ML Engineer**, **Data Engineer**, or **Data Scientist**.
2. **Multi-Agent Orchestrator**: 6 specialized AI agents (Profile Agent, Project Agent, Resume Agent, Career Agent, Job Match Agent, Job Application Agent) routed by a Master Intent Classifier.
3. **RAG Vector Search Engine**: Verified document retrieval over local knowledge bases eliminating hallucinations. Safe fallback response: *"I don't have that information in the portfolio knowledge base."*
4. **Transparent Job Match Evaluator**: Real-time resume vs job description scoring using transparent multi-attribute weighting.
5. **Permitted Job Application Tracker**: Rate-limited (10 applications/day cap) tracking system adhering strictly to website terms, anti-bot rules, and human safety controls.
6. **Zero-Cost Infrastructure**: ₹0 cost setup powered by local open-source models (Ollama Qwen2.5 / Gemma 2), ChromaDB / SQLite-vec, FastAPI backend, and React 19 / Vite / Tailwind CSS frontend.

---

## 🏗️ Architecture Overview

```
User -> React 19 / Vite Frontend (Tailwind CSS, Glassmorphism)
         │
         ▼
FastAPI Backend Gateway (REST & Server-Sent Events / Streaming)
         │
         ▼
Multi-Agent Orchestrator (Intent Router)
   ├── Profile Agent (RAG Vector Store)
   ├── Project Agent (GitHub MCP / Projects RAG)
   ├── Resume Agent (Resume Parser)
   ├── Career Agent (Skill Matrix)
   ├── Job Match Agent (Scoring Engine)
   └── Job Application Agent (Permitted API Engine)
```

---

## 🚀 Quick Start (Local Development)

### 1. Frontend Setup
```bash
npm install
npm run dev
```
Open `http://localhost:5173`.

### 2. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
API Documentation available at `http://localhost:8000/docs`.

---

## 🔮 Future Integration Plans

- **Ralph Integration**: Autonomous subagent loop for automated code implementation, testing, and self-healing verification.
- **CodeRabbit Integration**: Continuous code quality audits, pull request security reviews, and maintainability checks.

---
License: MIT  
Author: Abhishek Ainapure (https://github.com/AbhiA0821)
