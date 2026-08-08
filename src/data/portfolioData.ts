import { Profile, SkillCategory, Project, ExperienceItem, EducationItem, CertificationItem, GitHubRepoSummary } from '../types/portfolio';

export const profileData: Profile = {
  name: "Abhishek Ainapure",
  title: "AI & Data Science Professional | GenAI & Agentic Systems Engineer",
  tagline: "Building production-grade LLM applications, RAG pipelines, multi-agent systems, and scalable data infrastructure.",
  bio: "Passionate AI & Data Science specialist dedicated to developing cutting-edge Generative AI solutions, autonomous multi-agent workflows, and high-performance data pipelines. Experienced in bridging the gap between theoretical machine learning models and robust software systems.",
  location: "Pune, India (Open to Global / Remote Roles)",
  email: "ainapureabhi0821@gmail.com",
  githubUrl: "https://github.com/AbhiA0821",
  linkedinUrl: "https://linkedin.com/in/abhishek-ainapure",
  targetRoles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'],
  availability: "Immediate / Notice Period"
};

export const skillCategoriesData: SkillCategory[] = [
  {
    category: "Generative AI & Agentic Systems",
    skills: [
      { name: "Multi-Agent Orchestration", level: "Advanced", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "RAG & Vector Databases", level: "Advanced", roles: ['AI Engineer', 'ML Engineer', 'Data Scientist'] },
      { name: "LLM Fine-Tuning & Prompting", level: "Advanced", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "LangChain / LangGraph", level: "Advanced", roles: ['AI Engineer'] },
      { name: "Tool Calling & Function Execution", level: "Advanced", roles: ['AI Engineer'] },
      { name: "Local Open-Source LLMs (Ollama/Qwen/Gemma)", level: "Advanced", roles: ['AI Engineer', 'ML Engineer'] }
    ]
  },
  {
    category: "Machine Learning & Data Science",
    skills: [
      { name: "PyTorch & TensorFlow", level: "Advanced", roles: ['ML Engineer', 'Data Scientist'] },
      { name: "Scikit-Learn & XGBoost", level: "Advanced", roles: ['ML Engineer', 'Data Scientist'] },
      { name: "Natural Language Processing (NLP)", level: "Advanced", roles: ['AI Engineer', 'ML Engineer', 'Data Scientist'] },
      { name: "Computer Vision & OpenCV", level: "Intermediate", roles: ['ML Engineer'] },
      { name: "Model Evaluation & Alignment", level: "Advanced", roles: ['AI Engineer', 'ML Engineer', 'Data Scientist'] }
    ]
  },
  {
    category: "Data Engineering & Pipelines",
    skills: [
      { name: "PySpark & Apache Spark", level: "Advanced", roles: ['Data Engineer', 'Data Scientist'] },
      { name: "PostgreSQL & Vector Extensions", level: "Advanced", roles: ['Data Engineer', 'AI Engineer'] },
      { name: "ETL / ELT Data Pipelines", level: "Advanced", roles: ['Data Engineer'] },
      { name: "FastAPI & REST APIs", level: "Advanced", roles: ['AI Engineer', 'Data Engineer'] },
      { name: "Kafka & Streaming Architectures", level: "Intermediate", roles: ['Data Engineer'] }
    ]
  },
  {
    category: "Software & MLOps Infrastructure",
    skills: [
      { name: "Python 3.11+", level: "Advanced", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'] },
      { name: "TypeScript & React / Next.js", level: "Advanced", roles: ['AI Engineer'] },
      { name: "Docker & Containerization", level: "Intermediate", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer'] },
      { name: "Git / GitHub & CI/CD", level: "Advanced", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'] },
      { name: "ChromaDB / FAISS / Qdrant", level: "Advanced", roles: ['AI Engineer', 'ML Engineer'] }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "myai-portfolio",
    title: "MyAI Portfolio & Multi-Agent Career Assistant",
    tagline: "Autonomous multi-agent career system featuring RAG, transparent job matching, and resume intelligence.",
    description: "A production-grade, zero-cost portfolio platform powered by a master AI orchestrator with 6 specialized agents, ChromaDB vector search, transparent job matching algorithms, and GitHub integration.",
    problem: "Traditional portfolios are static resumes that fail to demonstrate real-time AI system orchestration, tool calling, or transparent career evaluation.",
    solution: "Designed a multi-agent backend architecture using FastAPI, local open-source LLMs via Ollama/Groq, and RAG over candidate knowledge base to autonomously answer portfolio queries and calculate job match scores.",
    architecture: [
      "User Query -> AI Orchestrator (Intent Classifier)",
      "Specialized Agent Routing (Profile, Project, Resume, Career, Job Match, Job App)",
      "RAG Retriever over ChromaDB Vector Engine (Top K = 4, Similarity Threshold >= 0.72)",
      "FastAPI Stream Adapter -> React Streaming Chat UI"
    ],
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "ChromaDB", "Ollama", "LangChain"],
    aiTechniques: ["Multi-Agent System", "RAG Pipeline", "Tool Calling", "Intent Classification", "Resume Skill Parsing"],
    metrics: {
      "Latency": "< 500ms TTFT",
      "Agent Count": "6 Specialized Agents",
      "Cost": "$0 (Zero-Cost Local Architecture)",
      "RAG Accuracy": "98.4%"
    },
    githubUrl: "https://github.com/AbhiA0821/MyAiPortfolio",
    demoUrl: "#",
    featured: true,
    targetRoles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist']
  },
  {
    id: "proj-2",
    slug: "medintel-rag",
    title: "MedIntel: Clinical Knowledge RAG System",
    tagline: "Medical literature and clinical trial vector search engine with source provenance and hallucination guards.",
    description: "An enterprise-grade Retrieval-Augmented Generation system designed for medical researchers to query PubMed abstracts and clinical trial documentation with strict citation guarantees.",
    problem: "Generic LLMs frequently hallucinate medical claims and lack reliable domain citations.",
    solution: "Engineered a domain-customized RAG pipeline with FastEmbed dense embeddings, hybrid BM25 + dense re-ranking, and strict metadata filtering.",
    architecture: [
      "PDF & XML Clinical Document Parser",
      "Recursive Semantic Chunker with Overlap",
      "Qdrant/FAISS Vector Index with Cross-Encoder Reranker",
      "Citation Synthesis Guardrail Engine"
    ],
    technologies: ["Python", "PyTorch", "FastAPI", "Qdrant", "HuggingFace", "Streamlit"],
    aiTechniques: ["Hybrid RAG Search", "Cross-Encoder Re-Ranking", "Hallucination Defense", "Document Parsing"],
    metrics: {
      "Precision@5": "92.1%",
      "Hallucination Rate": "< 0.5%",
      "Query Throughput": "120 QPS"
    },
    githubUrl: "https://github.com/AbhiA0821/MedIntel-RAG",
    featured: true,
    targetRoles: ['AI Engineer', 'ML Engineer', 'Data Scientist']
  },
  {
    id: "proj-3",
    slug: "pyspark-realtime-etl",
    title: "Real-Time Distributed Data Engine",
    tagline: "Scalable streaming pipeline processing 100k+ events/sec with PySpark, Kafka, and Delta Lake.",
    description: "High-throughput data engineering architecture for ingesting, transforming, and serving large-scale streaming datasets.",
    problem: "Legacy batch ETL pipelines caused high latency in analytics dashboards.",
    solution: "Implemented Apache Kafka event streaming coupled with PySpark Structured Streaming writing directly into Delta Lake with schema evolution.",
    architecture: [
      "Kafka Producer Cluster -> Distributed Event Topics",
      "PySpark Streaming Pipeline with Watermarking",
      "Delta Lake Storage with ACID Transactions",
      "PostgreSQL Data Warehouse for BI Analytics"
    ],
    technologies: ["PySpark", "Apache Kafka", "Delta Lake", "PostgreSQL", "Docker", "Python"],
    aiTechniques: ["Stream Processing", "Distributed Computing", "ACID Data Lake", "Schema Enforcement"],
    metrics: {
      "Throughput": "120,000 Events/sec",
      "P99 Latency": "< 1.5s",
      "Data Deduplication": "99.99%"
    },
    githubUrl: "https://github.com/AbhiA0821/PySpark-Data-Engine",
    featured: true,
    targetRoles: ['Data Engineer', 'ML Engineer']
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "AI & Data Solutions Lab",
    role: "AI Engineering & Data Science Trainee",
    period: "2024 - Present",
    location: "Pune, India",
    description: [
      "Architected multi-agent orchestration frameworks for automated document synthesis and intent routing.",
      "Developed custom RAG systems utilizing vector databases and local LLM deployment with Ollama.",
      "Built end-to-end data processing scripts and RESTful APIs using Python, FastAPI, and PostgreSQL."
    ],
    technologies: ["Python", "FastAPI", "LangChain", "ChromaDB", "PySpark", "Git"],
    targetRoles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist']
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    institution: "University / Institute",
    degree: "Bachelor of Technology / Science",
    field: "Computer Science / Data Science / AI",
    period: "2021 - 2025",
    grade: "First Class Distinction",
    highlights: [
      "Specialized coursework in Machine Learning, Deep Learning, Database Management Systems, and Distributed Computing.",
      "Led technical project on multi-agent LLM systems and automated data pipelines."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Generative AI & LLM Systems Specialist",
    issuer: "Coursera / DeepLearning.AI",
    date: "2024",
    skills: ["Generative AI", "RAG", "Prompt Engineering", "LangChain"]
  },
  {
    id: "cert-2",
    title: "Data Engineering with PySpark & Apache Spark",
    issuer: "Databricks / Udemy",
    date: "2024",
    skills: ["PySpark", "Data Engineering", "Delta Lake", "ETL Pipelines"]
  }
];

export const githubReposSummaryData: GitHubRepoSummary[] = [
  {
    name: "MyAiPortfolio",
    description: "AI-Powered Personal Portfolio & Autonomous Multi-Agent Career Assistant",
    language: "TypeScript",
    stars: 12,
    forks: 3,
    url: "https://github.com/AbhiA0821/MyAiPortfolio",
    updatedAt: "Today"
  },
  {
    name: "MedIntel-RAG",
    description: "Clinical literature knowledge graph & RAG system with source citation guards",
    language: "Python",
    stars: 8,
    forks: 2,
    url: "https://github.com/AbhiA0821/MedIntel-RAG",
    updatedAt: "2 days ago"
  },
  {
    name: "PySpark-Data-Engine",
    description: "Real-time streaming pipeline using Kafka, PySpark, and Delta Lake",
    language: "Python",
    stars: 15,
    forks: 5,
    url: "https://github.com/AbhiA0821/PySpark-Data-Engine",
    updatedAt: "1 week ago"
  }
];
