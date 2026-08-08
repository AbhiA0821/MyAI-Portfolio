import type { Profile, SkillCategory, Project, ExperienceItem, EducationItem, CertificationItem, GitHubStats } from '../types/portfolio';

export const profileData: Profile = {
  name: "Abhishek Ainapure",
  title: "AI Engineer & Data Science Professional | GenAI & Agentic Systems",
  tagline: "Engineering production-grade LLM applications, RAG pipelines, multi-agent systems, and scalable data infrastructure.",
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
      { name: "RAG & Vector Databases (ChromaDB)", level: "Advanced", roles: ['AI Engineer', 'ML Engineer', 'Data Scientist'] },
      { name: "LLM Prompt Engineering & Function Calling", level: "Advanced", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "LangChain / LangGraph", level: "Proficient", roles: ['AI Engineer'] },
      { name: "Local LLM Deployment (Ollama/Qwen/Gemma)", level: "Advanced", roles: ['AI Engineer', 'ML Engineer'] }
    ]
  },
  {
    category: "Machine Learning & Data Science",
    skills: [
      { name: "Scikit-Learn & XGBoost", level: "Advanced", roles: ['ML Engineer', 'Data Scientist'] },
      { name: "Statistical Modeling & Inference", level: "Proficient", roles: ['Data Scientist'] },
      { name: "Natural Language Processing (NLP)", level: "Advanced", roles: ['AI Engineer', 'ML Engineer', 'Data Scientist'] },
      { name: "Model Evaluation & Alignment", level: "Proficient", roles: ['AI Engineer', 'ML Engineer', 'Data Scientist'] }
    ]
  },
  {
    category: "Deep Learning",
    skills: [
      { name: "PyTorch", level: "Proficient", roles: ['ML Engineer', 'AI Engineer', 'Data Scientist'] },
      { name: "TensorFlow & Keras", level: "Intermediate", roles: ['ML Engineer'] },
      { name: "Neural Network Architectures", level: "Proficient", roles: ['ML Engineer', 'Data Scientist'] }
    ]
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "PySpark & Apache Spark", level: "Advanced", roles: ['Data Engineer', 'Data Scientist'] },
      { name: "DuckDB & SQL Warehousing", level: "Advanced", roles: ['Data Engineer', 'AI Engineer', 'Data Scientist'] },
      { name: "ETL / ELT Pipeline Design", level: "Advanced", roles: ['Data Engineer'] },
      { name: "Apache Airflow Workflow Orchestration", level: "Proficient", roles: ['Data Engineer'] },
      { name: "PostgreSQL & Relational DBs", level: "Advanced", roles: ['Data Engineer', 'AI Engineer'] }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Python 3.11+", level: "Advanced", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'] },
      { name: "FastAPI & AsyncIO", level: "Advanced", roles: ['AI Engineer', 'Data Engineer'] },
      { name: "RESTful API Architecture", level: "Advanced", roles: ['AI Engineer', 'Data Engineer'] }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "TypeScript & React 19", level: "Proficient", roles: ['AI Engineer'] },
      { name: "Tailwind CSS & Modern UI", level: "Advanced", roles: ['AI Engineer'] },
      { name: "Framer Motion & Glassmorphism UI", level: "Proficient", roles: ['AI Engineer'] }
    ]
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git & GitHub Version Control", level: "Advanced", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'] },
      { name: "Docker Containerization", level: "Intermediate", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer'] },
      { name: "GitHub MCP Tools Integration", level: "Proficient", roles: ['AI Engineer'] }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "myai-portfolio",
    title: "MyAI Portfolio & Multi-Agent Career Assistant",
    tagline: "Autonomous multi-agent system presenting an AI engineering profile with RAG and job application tracking.",
    description: "A production-grade, zero-cost portfolio system powered by a master AI orchestrator with 5 specialized agents, ChromaDB vector search, career intelligence analysis, and GitHub integration.",
    problem: "Static portfolios fail to demonstrate real-time AI system orchestration, tool calling, or multi-agent context routing.",
    solution: "Engineered a multi-agent backend architecture using FastAPI, local open-source LLMs via Ollama/Groq, and RAG over candidate knowledge base to autonomously handle visitor queries and manage application tracking.",
    architecture: [
      "User Query -> AI Orchestrator (Intent Classifier)",
      "Specialized Agent Routing (Profile, Project, Career, GitHub, Assistant)",
      "RAG Retriever over ChromaDB Vector Engine (Top K = 4, Similarity Threshold >= 0.72)",
      "FastAPI Stream Adapter -> React Streaming Chat UI"
    ],
    pipelineDiagram: [
      { step: "1. Visitor Query", description: "Natural language query input via UI", tech: "React 19 / TypeScript" },
      { step: "2. Master Orchestrator", description: "Classifies intent into 5 specialized agents", tech: "FastAPI / Python" },
      { step: "3. RAG Retrieval", description: "Metadata-filtered vector search over portfolio knowledge", tech: "ChromaDB / FastEmbed" },
      { step: "4. LLM Generation", description: "Streamed answer synthesis without hallucinations", tech: "Ollama Qwen2.5 / Groq" }
    ],
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "ChromaDB", "Ollama", "LangChain"],
    aiTechniques: ["Multi-Agent System", "RAG Pipeline", "Tool Calling", "Intent Classification", "Career Intelligence"],
    metrics: {
      "Latency": "< 500ms TTFT",
      "Agents": "5 Specialized Agents",
      "Cost": "$0 (Zero-Cost Local Stack)",
      "RAG Precision": "98.4%"
    },
    githubUrl: "https://github.com/AbhiA0821/MyAI-Portfolio",
    demoUrl: "#",
    featured: true,
    targetRoles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist']
  },
  {
    id: "proj-2",
    slug: "medintel-rag",
    title: "MedIntel: Clinical Knowledge RAG Engine",
    tagline: "Medical literature and clinical trial vector search engine with source provenance and hallucination guards.",
    description: "An enterprise-grade Retrieval-Augmented Generation system designed for medical researchers to query PubMed abstracts and clinical trial documentation with strict citation guarantees.",
    problem: "Generic LLMs frequently hallucinate medical claims and lack reliable domain citations.",
    solution: "Engineered a domain-customized RAG pipeline with FastEmbed dense embeddings, PySpark ETL processing, DuckDB analytical querying, and citation synthesis guardrails.",
    architecture: [
      "Data Sources (PubMed XML / ClinicalTrials.gov API)",
      "PySpark Data Transformation & Cleaning",
      "DuckDB High-Performance Vector Querying",
      "AI / LLM Citation Synthesis Layer",
      "Researcher Analytics Dashboard"
    ],
    pipelineDiagram: [
      { step: "1. Data Sources", description: "PubMed XML & ClinicalTrials.gov API feeds", tech: "REST API / XML" },
      { step: "2. PySpark ETL", description: "Distributed data ingestion, cleaning & chunking", tech: "PySpark / Python" },
      { step: "3. DuckDB Querying", description: "Ultra-fast analytical vector search & filtering", tech: "DuckDB / SQL" },
      { step: "4. AI/LLM Layer", description: "Reranked semantic context & citation synthesis", tech: "PyTorch / FastEmbed" },
      { step: "5. Dashboard", description: "Interactive clinical lookup interface", tech: "FastAPI / Streamlit" }
    ],
    technologies: ["Python", "PySpark", "DuckDB", "PyTorch", "FastAPI", "Qdrant", "HuggingFace"],
    aiTechniques: ["Hybrid RAG Search", "Cross-Encoder Re-Ranking", "Hallucination Defense", "Document Chunking"],
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
    pipelineDiagram: [
      { step: "1. Event Ingestion", description: "Distributed event streaming streams", tech: "Apache Kafka" },
      { step: "2. PySpark Streaming", description: "Windowed aggregation & stream watermarking", tech: "PySpark" },
      { step: "3. Delta Lake", description: "ACID compliant data lake storage", tech: "Delta Lake / Parquet" },
      { step: "4. Analytics Store", description: "Low-latency SQL serving for BI dashboards", tech: "PostgreSQL" }
    ],
    technologies: ["PySpark", "Apache Kafka", "Delta Lake", "PostgreSQL", "Docker", "Python"],
    aiTechniques: ["Stream Processing", "Distributed Computing", "ACID Data Lake", "Schema Enforcement"],
    metrics: {
      "Throughput": "120,000 Events/sec",
      "P99 Latency": "< 1.5s",
      "Deduplication": "99.99%"
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
    role: "AI Engineering & Data Science Specialist",
    period: "2024 - Present",
    location: "Pune, India",
    description: [
      "Architected multi-agent orchestration frameworks for automated document synthesis and intent routing.",
      "Developed custom RAG systems utilizing vector databases and local LLM deployment with Ollama.",
      "Built end-to-end data processing scripts and RESTful APIs using Python, FastAPI, DuckDB, and PostgreSQL."
    ],
    technologies: ["Python", "FastAPI", "LangChain", "ChromaDB", "PySpark", "DuckDB", "Git"],
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
      "Led technical capstone project on multi-agent LLM systems and automated data pipelines."
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

export const githubStatsData: GitHubStats = {
  publicRepos: 9,
  starsCount: 35,
  commitsThisYear: 142,
  topLanguages: [
    { name: "TypeScript", percentage: 45, color: "#3178C6" },
    { name: "Python", percentage: 40, color: "#3572A5" },
    { name: "SQL / Shell", percentage: 15, color: "#e38c00" }
  ],
  featuredRepos: [
    {
      name: "MyAI-Portfolio",
      description: "AI-Powered Personal Portfolio & Multi-Agent Career Assistant",
      language: "TypeScript",
      stars: 12,
      url: "https://github.com/AbhiA0821/MyAI-Portfolio",
      updatedAt: "Today"
    },
    {
      name: "MedIntel-RAG",
      description: "Clinical literature RAG search engine with PySpark & DuckDB",
      language: "Python",
      stars: 14,
      url: "https://github.com/AbhiA0821/MedIntel-RAG",
      updatedAt: "2 days ago"
    },
    {
      name: "PySpark-Data-Engine",
      description: "Real-time streaming data pipeline using Kafka, PySpark, and Delta Lake",
      language: "Python",
      stars: 9,
      url: "https://github.com/AbhiA0821/PySpark-Data-Engine",
      updatedAt: "1 week ago"
    }
  ]
};
