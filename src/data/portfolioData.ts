import type {
  Profile,
  SkillCategory,
  ExpertiseItem,
  Project,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  GitHubStats,
  TimelineMilestone,
  StatItem,
  WorkflowStep
} from '../types/portfolio';

export const profileData: Profile = {
  name: "Abhishek Ainapure",
  title: "AI & Data Science Specialist | GenAI & Agentic Systems",
  tagline: "Building intelligent systems with Machine Learning, Generative AI and modern data technologies.",
  bio: "Passionate AI & Data Science specialist dedicated to developing cutting-edge Generative AI solutions, autonomous multi-agent workflows, and high-performance data pipelines. Experienced in bridging the gap between theoretical machine learning models and robust software systems.",
  location: "Pune, India (Open to Global / Remote Roles)",
  email: "ainapureabhi0821@gmail.com",
  githubUrl: "https://github.com/AbhiA0821",
  linkedinUrl: "https://linkedin.com/in/abhishek-ainapure",
  targetRoles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'],
  availability: "Immediate / Open to Opportunities"
};

export const statsData: StatItem[] = [
  {
    id: "stat-1",
    label: "Featured AI & Data Projects",
    numericValue: 3,
    suffix: "+",
    description: "Production RAG, Multi-Agent & PySpark Systems",
    iconName: "Cpu"
  },
  {
    id: "stat-2",
    label: "Core Stack Technologies",
    numericValue: 20,
    suffix: "+",
    description: "Python, PySpark, FastAPI, Vector DBs, React",
    iconName: "Layers"
  },
  {
    id: "stat-3",
    label: "Verified Specializations",
    numericValue: 2,
    suffix: "",
    description: "Generative AI & Data Engineering Certifications",
    iconName: "Award"
  },
  {
    id: "stat-4",
    label: "Public Repositories",
    numericValue: 9,
    suffix: "",
    description: "Open source AI models, RAG engines & ETL tools",
    iconName: "GitBranch"
  },
  {
    id: "stat-5",
    label: "Multi-Agent System Nodes",
    numericValue: 5,
    suffix: " Agents",
    description: "Autonomous routing, tool execution & memory engine",
    iconName: "Bot"
  }
];

export const expertiseData: ExpertiseItem[] = [
  {
    id: "exp-genai",
    title: "01 Generative AI",
    subtitle: "LLMs, RAG, Prompt Engineering & AI Applications",
    description: "Designing structured LLM applications, custom prompt pipelines, tool invocation, and grounded vector retrieval.",
    iconName: "Sparkles",
    technologies: ["LLMs", "RAG", "Prompt Engineering", "LangChain", "LangGraph", "ChromaDB", "Ollama"],
    proficiencyLabel: "Strong",
    detailedOverview: "Built custom local and cloud LLM execution wrappers with strict JSON output validation, function calling, fallback chains, and streaming user interfaces.",
    keyCapabilities: [
      "Dynamic prompt composition and context window management",
      "Function/Tool calling integration for multi-step task execution",
      "Local model execution with Ollama (Qwen, Gemma, Llama 3)",
      "RAG retrieval grounding and hallucination reduction guardrails"
    ],
    targetRoles: ['AI Engineer', 'ML Engineer']
  },
  {
    id: "exp-agents",
    title: "02 Multi-Agent Systems",
    subtitle: "Agent Orchestration, Routing, Tools & Workflows",
    description: "Architecting autonomous multi-agent networks with specialized domain agents and centralized master intent routing.",
    iconName: "Bot",
    technologies: ["Agent Orchestration", "Intent Router", "State Machines", "GitHub Tools", "RAG Retriever"],
    proficiencyLabel: "Hands-on",
    detailedOverview: "Designed MyAI Engine with 5 specialized agent nodes (Profile, Project, Career, GitHub, Assistant) operating under a central intent orchestrator.",
    keyCapabilities: [
      "Natural language intent classification and query dispatching",
      "Agent state persistence and memory context propagation",
      "Autonomous tool execution across external APIs and vector stores",
      "Asynchronous streaming response coordination"
    ],
    targetRoles: ['AI Engineer', 'ML Engineer']
  },
  {
    id: "exp-ml",
    title: "03 Machine Learning",
    subtitle: "ML, Deep Learning, Computer Vision & NLP",
    description: "Training, evaluating, and deploying statistical ML models, NLP text pipelines, and deep learning architectures.",
    iconName: "Brain",
    technologies: ["Scikit-Learn", "PyTorch", "XGBoost", "NLP", "Deep Learning", "Pandas", "NumPy"],
    proficiencyLabel: "Proficient",
    detailedOverview: "Applied supervised and unsupervised ML techniques for classification, regression, and natural language processing tasks with rigorous evaluation metrics.",
    keyCapabilities: [
      "Feature engineering, text tokenization, and vectorization",
      "PyTorch neural network design and training loops",
      "Cross-validation, hyperparameter tuning, and ROC/AUC analysis",
      "Statistical inference and exploratory data analytics"
    ],
    targetRoles: ['ML Engineer', 'Data Scientist', 'AI Engineer']
  },
  {
    id: "exp-de",
    title: "04 Data Engineering",
    subtitle: "PySpark, SQL, DuckDB, Airflow & ETL",
    description: "Constructing scalable batch and real-time streaming data ingestion pipelines using Apache Spark, SQL, and Airflow.",
    iconName: "Server",
    technologies: ["PySpark", "Apache Spark", "SQL", "DuckDB", "Apache Airflow", "PostgreSQL", "ETL Pipelines"],
    proficiencyLabel: "Strong",
    detailedOverview: "Experienced in handling high-volume event streams, distributed data processing in PySpark, writing Delta Lake tables, and SQL warehousing.",
    keyCapabilities: [
      "Distributed data extraction, transformation, and loading (ETL/ELT)",
      "PySpark DataFrame transformations and window aggregations",
      "DuckDB in-memory analytical SQL processing",
      "Schema enforcement and stream watermarking"
    ],
    targetRoles: ['Data Engineer', 'Data Scientist', 'ML Engineer']
  },
  {
    id: "exp-apps",
    title: "05 AI Applications",
    subtitle: "FastAPI, Python, Streamlit, Next.js & AI Products",
    description: "Building production-grade REST APIs, asynchronous microservices, and modern frontend user interfaces.",
    iconName: "Terminal",
    technologies: ["FastAPI", "Python 3.11+", "Streamlit", "React 19", "Next.js", "TypeScript", "Tailwind CSS"],
    proficiencyLabel: "Strong",
    detailedOverview: "Developing end-to-end full-stack AI applications combining Python API backends with responsive React/TypeScript interfaces.",
    keyCapabilities: [
      "FastAPI AsyncIO RESTful microservice development",
      "Server-Sent Events (SSE) streaming API adapters",
      "Modern React 19 UI component architecture",
      "Containerization with Docker"
    ],
    targetRoles: ['AI Engineer', 'Data Engineer']
  }
];

export const marqueeTechnologiesRow1 = [
  "PYTHON",
  "SQL",
  "PYSPARK",
  "DUCKDB",
  "AIRFLOW",
  "FASTAPI",
  "POSTGRESQL"
];

export const marqueeTechnologiesRow2 = [
  "LLM",
  "RAG",
  "LANGCHAIN",
  "LANGGRAPH",
  "OLLAMA",
  "CHROMADB",
  "FASTEMBED"
];

export const marqueeTechnologiesRow3 = [
  "TENSORFLOW",
  "PYTORCH",
  "SCIKIT-LEARN",
  "PANDAS",
  "NUMPY",
  "XGBOOST"
];

export const marqueeTechnologiesRow4 = [
  "NEXT.JS",
  "TYPESCRIPT",
  "REACT 19",
  "TAILWIND CSS",
  "GIT",
  "GITHUB",
  "DOCKER"
];

export const workflowStepsData: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Understand",
    subtitle: "Problem & Requirements",
    description: "Analyze core problem scope, user requirements, data schemas, latency thresholds, and accuracy criteria before writing code.",
    techStack: ["Problem Scoping", "Data Schema Definition", "Target Alignment"],
    statusBadge: "STAGE 01"
  },
  {
    stepNumber: "02",
    title: "Design",
    subtitle: "Architecture & Data Flow",
    description: "Architect high-level data flow, multi-agent communication topology, vector database indexes, and REST API contracts.",
    techStack: ["System Architecture", "Pipeline Diagrams", "API Contracts"],
    statusBadge: "STAGE 02"
  },
  {
    stepNumber: "03",
    title: "Build",
    subtitle: "Models, APIs & AI Systems",
    description: "Write clean, modular Python and TypeScript code implementing FastAPI endpoints, LLM tool wrappers, and PySpark transformations.",
    techStack: ["Python 3.11+", "FastAPI", "React 19 / TS", "Ollama"],
    statusBadge: "STAGE 03"
  },
  {
    stepNumber: "04",
    title: "Integrate",
    subtitle: "RAG & Knowledge Grounding",
    description: "Implement document chunking, dense vector embeddings, top-K reranking, and context injection to ground AI responses.",
    techStack: ["ChromaDB", "FastEmbed", "Metadata Filtering"],
    statusBadge: "STAGE 04"
  },
  {
    stepNumber: "05",
    title: "Evaluate",
    subtitle: "Quality, Accuracy & Reliability",
    description: "Benchmark precision, latency, hallucination rates, and error recovery using automated assertion tests and validation datasets.",
    techStack: ["RAG Precision Metrics", "Latency Benchmarks", "Unit Tests"],
    statusBadge: "STAGE 05"
  },
  {
    stepNumber: "06",
    title: "Deploy",
    subtitle: "Production & Monitoring",
    description: "Containerize system components, setup background task orchestration, configure environment variables, and establish audit telemetry.",
    techStack: ["Docker", "Async Workers", "Audit Logging"],
    statusBadge: "STAGE 06"
  }
];

export const timelineData: TimelineMilestone[] = [
  {
    year: "2023",
    title: "Computer Science & Data Science Foundation",
    subtitle: "Core Algorithms, Python & Statistical Machine Learning",
    description: "Mastered fundamental software engineering principles, core data structures, algorithms, SQL database management, and hands-on Python data analysis.",
    highlights: [
      "Built statistical machine learning models with Scikit-learn and Pandas.",
      "Developed custom REST APIs and relational database schemas."
    ],
    technologies: ["Python", "SQL", "Scikit-Learn", "Pandas", "Git"],
    status: "Completed"
  },
  {
    year: "2024",
    title: "Data Engineering & Distributed Computing",
    subtitle: "PySpark, DuckDB & Big Data Pipelines",
    description: "Expanded focus into large-scale data engineering, distributed computing with Apache Spark, high-performance in-memory processing with DuckDB, and API microservices.",
    highlights: [
      "Implemented distributed ETL pipelines processing multi-gigabyte datasets.",
      "Created FastAPI microservices with AsyncIO and PostgreSQL warehousing.",
      "Earned Databricks / DeepLearning.AI certifications."
    ],
    technologies: ["PySpark", "DuckDB", "FastAPI", "PostgreSQL", "Docker"],
    status: "Completed"
  },
  {
    year: "2025",
    title: "Multi-Agent Systems & GenAI Engineering",
    subtitle: "MedIntel Clinical RAG & MyAI Multi-Agent Engine",
    description: "Engineered state-of-the-art Generative AI applications, hybrid RAG systems, local open-source LLM deployments, and autonomous multi-agent orchestration frameworks.",
    highlights: [
      "Developed MedIntel Clinical Knowledge RAG Engine with PubMed vector search.",
      "Architected MyAI Multi-Agent Portfolio Engine with 5 specialized agent nodes.",
      "Built interactive streaming React 19 UI with Framer Motion visual polish."
    ],
    technologies: ["LangChain", "LangGraph", "ChromaDB", "Ollama", "React 19", "TypeScript"],
    status: "In Progress"
  },
  {
    year: "2026",
    title: "Production AI & Scalable Systems",
    subtitle: "Enterprise Autonomous Agents & Data Infrastructure",
    description: "Focusing on enterprise-grade AI production systems, multi-agent evaluation frameworks, zero-cost architecture deployment, and scalable backend pipelines.",
    highlights: [
      "Optimizing RAG retrieval precision and multi-agent intent routing.",
      "Integrating personal private career automation and application telemetry."
    ],
    technologies: ["Multi-Agent Systems", "RAG Optimization", "Async Python", "System Design"],
    status: "In Progress"
  },
  {
    year: "Future",
    title: "Senior AI System Architecture",
    subtitle: "Designing Resilient Multi-Agent Platforms",
    description: "Aiming to lead complex AI engineering initiatives, building resilient multi-agent platforms, and advancing production AI systems globally.",
    highlights: [
      "Driving multi-agent system standards and production LLM guardrails.",
      "Designing fault-tolerant distributed data infrastructure."
    ],
    technologies: ["AI Architecture", "Distributed Systems", "Agentic Frameworks"],
    status: "Future Focus"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    category: "AI & Generative AI",
    skills: [
      { name: "Multi-Agent Orchestration", level: "Hands-on", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "RAG & Vector DBs (ChromaDB)", level: "Strong", roles: ['AI Engineer', 'ML Engineer', 'Data Scientist'] },
      { name: "Prompt Engineering & Function Calling", level: "Strong", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "LangChain / LangGraph", level: "Proficient", roles: ['AI Engineer'] },
      { name: "Local LLM Deployment (Ollama)", level: "Hands-on", roles: ['AI Engineer', 'ML Engineer'] }
    ]
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-Learn & XGBoost", level: "Proficient", roles: ['ML Engineer', 'Data Scientist'] },
      { name: "Statistical Modeling & Inference", level: "Working Knowledge", roles: ['Data Scientist'] },
      { name: "Natural Language Processing (NLP)", level: "Strong", roles: ['AI Engineer', 'ML Engineer', 'Data Scientist'] },
      { name: "Model Evaluation & Metrics", level: "Proficient", roles: ['AI Engineer', 'ML Engineer', 'Data Scientist'] }
    ]
  },
  {
    category: "Deep Learning",
    skills: [
      { name: "PyTorch", level: "Working Knowledge", roles: ['ML Engineer', 'AI Engineer', 'Data Scientist'] },
      { name: "TensorFlow & Keras", level: "Learning", roles: ['ML Engineer'] },
      { name: "Neural Network Architectures", level: "Working Knowledge", roles: ['ML Engineer', 'Data Scientist'] }
    ]
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "PySpark & Apache Spark", level: "Strong", roles: ['Data Engineer', 'Data Scientist'] },
      { name: "DuckDB & SQL Warehousing", level: "Strong", roles: ['Data Engineer', 'AI Engineer', 'Data Scientist'] },
      { name: "ETL / ELT Pipeline Design", level: "Strong", roles: ['Data Engineer'] },
      { name: "Apache Airflow Orchestration", level: "Working Knowledge", roles: ['Data Engineer'] },
      { name: "PostgreSQL & Relational DBs", level: "Strong", roles: ['Data Engineer', 'AI Engineer'] }
    ]
  },
  {
    category: "Backend & Programming",
    skills: [
      { name: "Python 3.11+", level: "Strong", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'] },
      { name: "FastAPI & AsyncIO", level: "Strong", roles: ['AI Engineer', 'Data Engineer'] },
      { name: "RESTful API Architecture", level: "Strong", roles: ['AI Engineer', 'Data Engineer'] }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "TypeScript & React 19", level: "Proficient", roles: ['AI Engineer'] },
      { name: "Tailwind CSS & Modern UI", level: "Strong", roles: ['AI Engineer'] },
      { name: "Framer Motion & Glassmorphism UI", level: "Proficient", roles: ['AI Engineer'] }
    ]
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git & GitHub Version Control", level: "Strong", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'] },
      { name: "Docker Containerization", level: "Working Knowledge", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer'] },
      { name: "GitHub MCP Tools Integration", level: "Hands-on", roles: ['AI Engineer'] }
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
    targetRoles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'],
    category: "AI / GenAI"
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
      { step: "1. Data", description: "PubMed XML & ClinicalTrials.gov API feeds", tech: "REST API / XML" },
      { step: "2. PySpark", description: "Ingestion, cleaning & chunking", tech: "PySpark / Python" },
      { step: "3. Transformation", description: "FastEmbed dense vector embedding", tech: "FastEmbed / PyTorch" },
      { step: "4. DuckDB", description: "In-memory analytical vector search & SQL filter", tech: "DuckDB / SQL" },
      { step: "5. AI / LLM", description: "Reranked semantic context & citation synthesis", tech: "Ollama / Groq" },
      { step: "6. Dashboard", description: "Interactive clinical lookup interface", tech: "FastAPI / React" }
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
    targetRoles: ['AI Engineer', 'ML Engineer', 'Data Scientist'],
    category: "AI / GenAI"
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
    targetRoles: ['Data Engineer', 'ML Engineer'],
    category: "Data Engineering"
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
    institution: "Pune University / Affiliated Institute",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering / Data Science",
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
    issuer: "DeepLearning.AI / Coursera",
    date: "2024",
    skills: ["Generative AI", "RAG", "Prompt Engineering", "LangChain"],
    verifyUrl: "https://github.com/AbhiA0821/MyAI-Portfolio"
  },
  {
    id: "cert-2",
    title: "Data Engineering with PySpark & Apache Spark",
    issuer: "Databricks / Udemy",
    date: "2024",
    skills: ["PySpark", "Data Engineering", "Delta Lake", "ETL Pipelines"],
    verifyUrl: "https://github.com/AbhiA0821/MyAI-Portfolio"
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
