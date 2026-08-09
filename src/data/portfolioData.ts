import type {
  Profile,
  SkillCategory,
  ExpertiseItem,
  Project,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  GitHubStats,
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
    label: "Verified Projects",
    numericValue: 4,
    suffix: "",
    description: "MedIntel, Resume-Matcher, Art-Generation & Data-Engineering",
    iconName: "Cpu"
  },
  {
    id: "stat-2",
    label: "Core Stack Technologies",
    numericValue: 15,
    suffix: "+",
    description: "Python, PySpark, DuckDB, TensorFlow, React, SQL",
    iconName: "Layers"
  },
  {
    id: "stat-3",
    label: "Verified Certifications",
    numericValue: 4,
    suffix: "",
    description: "Oracle OCI, AWS Forage & Tecspeak Industry Credentials",
    iconName: "Award"
  },
  {
    id: "stat-4",
    label: "Public Repositories",
    numericValue: 9,
    suffix: "",
    description: "Verified open source GitHub repositories under AbhiA0821",
    iconName: "GitBranch"
  },
  {
    id: "stat-5",
    label: "MyAI Architecture",
    numericValue: 5,
    suffix: " Nodes",
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
    detailedOverview: "Designed MyAI Engine with 5 specialized agent nodes operating under a central intent orchestrator.",
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
    description: "Constructing scalable batch and streaming data ingestion pipelines using Apache Spark, SQL, and Airflow.",
    iconName: "Server",
    technologies: ["PySpark", "Apache Spark", "SQL", "DuckDB", "Apache Airflow", "PostgreSQL", "ETL Pipelines"],
    proficiencyLabel: "Strong",
    detailedOverview: "Experienced in handling high-volume event streams, distributed data processing in PySpark, writing analytical queries, and SQL warehousing.",
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
    description: "Building REST APIs, asynchronous microservices, and modern frontend user interfaces.",
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
      { name: "TensorFlow & Keras", level: "Working Knowledge", roles: ['ML Engineer'] },
      { name: "Neural Network Architectures", level: "Working Knowledge", roles: ['ML Engineer', 'Data Scientist'] }
    ]
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "PySpark & Apache Spark", level: "Strong", roles: ['Data Engineer', 'Data Scientist'] },
      { name: "DuckDB & SQL Warehousing", level: "Strong", roles: ['Data Engineer', 'AI Engineer', 'Data Scientist'] },
      { name: "ETL / ELT Pipeline Design", level: "Strong", roles: ['Data Engineer'] },
      { name: "Apache Airflow (In Progress)", level: "Working Knowledge", roles: ['Data Engineer'] },
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
      { name: "Docker (Planned)", level: "Working Knowledge", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer'] }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-medintel",
    slug: "medintel",
    title: "MedIntel — Healthcare Data Pipeline",
    tagline: "ONGOING • Patient Vital Ingestion & Airflow Pipeline",
    description: "An ongoing end-to-end healthcare data engineering pipeline designed to process patient vital signs, utilizing DuckDB analytical tables, PySpark transformations, and a Flask analytics dashboard.",
    problem: "Processing patient vital records requires structured relational database schemas, scalable PySpark transformations, and automated pipeline execution.",
    solution: "Architected a Python vital sign simulator and DuckDB database schema paired with PySpark ETL routines and Airflow scheduling.",
    architecture: [
      "Patient Vitals Simulator -> DuckDB In-Memory Relational Schema",
      "PySpark Data Processing & Validation",
      "Apache Airflow Orchestration (In Progress)",
      "Flask Analytics Dashboard"
    ],
    pipelineDiagram: [
      { step: "1. Vitals Simulation", description: "Simulates patient vital sign data", tech: "Python" },
      { step: "2. DuckDB Storage", description: "Patients & vital signs relational tables", tech: "DuckDB / SQL" },
      { step: "3. PySpark ETL", description: "Data cleaning, transformation & validation", tech: "PySpark" },
      { step: "4. Orchestration", description: "Pipeline DAG runs (In Progress)", tech: "Apache Airflow" }
    ],
    technologies: ["Python", "PySpark", "DuckDB", "Pandas", "Scikit-learn", "Flask", "Apache Airflow (In Progress)", "Docker (Planned)"],
    aiTechniques: ["PySpark ETL Processing", "DuckDB Analytical SQL", "Vital Sign Classification", "Data Validation"],
    metrics: {
      "Project Status": "ONGOING",
      "Engine": "PySpark + DuckDB",
      "Orchestration": "Airflow (In Progress)"
    },
    githubUrl: "https://github.com/AbhiA0821/MedIntel",
    featured: true,
    targetRoles: ['Data Engineer', 'ML Engineer'],
    category: "Data Engineering"
  },
  {
    id: "proj-resume-matcher",
    slug: "resume-matcher",
    title: "Resume-Matcher — Smart Resume Analyzer & Job Matcher",
    tagline: "AI-Powered Resume Analysis & Job Recommendation System",
    description: "An intelligent Streamlit application that parses PDF/DOCX resumes, automatically extracts technical skills, predicts domain classification using KNN & Random Forest models, and visualizes skill breakdowns.",
    problem: "Job seekers struggle to extract structured skill sets from resumes and identify matching engineering domains.",
    solution: "Built Resume-Matcher using PDFPlumber/docx text extraction, KNN and Random Forest classification models, and interactive Streamlit analytics.",
    architecture: [
      "PDF/DOCX Resume Upload -> Text Extraction",
      "Skill Parsing & Domain Classification (KNN + Random Forest)",
      "Interactive Streamlit Dashboard & Analytics"
    ],
    pipelineDiagram: [
      { step: "1. Document Parsing", description: "Extracts text from PDF/DOCX resumes", tech: "Python / PDFPlumber" },
      { step: "2. Feature Extraction", description: "Identifies tech skills & experience indicators", tech: "Scikit-Learn" },
      { step: "3. ML Classification", description: "KNN & Random Forest domain prediction", tech: "Machine Learning" },
      { step: "4. Analytics", description: "Skill breakdown & Streamlit dashboard", tech: "Streamlit / Plotly" }
    ],
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Plotly", "SQLite", "PDFPlumber", "Python-docx", "Requests API"],
    aiTechniques: ["KNN Classification", "Random Forest", "Resume Skill Parsing", "Domain Prediction"],
    metrics: {
      "ML Models": "KNN + Random Forest",
      "Parser": "PDFPlumber / Docx",
      "Interface": "Streamlit App"
    },
    githubUrl: "https://github.com/AbhiA0821/Resume-Matcher",
    demoUrl: "https://resume-matcher-ypjig2msxnqn7dchb2ctg5.streamlit.app",
    featured: true,
    targetRoles: ['ML Engineer', 'Data Scientist', 'AI Engineer'],
    category: "Machine Learning"
  },
  {
    id: "proj-art-generation",
    slug: "art-generation",
    title: "Art-Generation — Neural Style Transfer",
    tagline: "Deep Learning Image Synthesis & Neural Style Transfer",
    description: "Deep learning repository implementing Neural Style Transfer (NST) using Convolutional Neural Networks to synthesize images by combining content structure with artistic artwork style representations.",
    problem: "Synthesizing artwork while maintaining underlying content structure requires deep layer feature extraction and loss optimization.",
    solution: "Implemented Gram matrix style representations and feature loss optimizations in PyTorch/Jupyter Notebook environments.",
    architecture: [
      "Content & Style Image Input",
      "Convolutional Neural Network Feature Extraction",
      "Gram Matrix Style Computation & Loss Optimization",
      "Synthesized Artwork Output"
    ],
    pipelineDiagram: [
      { step: "1. Input Images", description: "Content photo & artwork style image", tech: "Pillow / TorchVision" },
      { step: "2. CNN Features", description: "Extract deep feature activation maps", tech: "PyTorch" },
      { step: "3. Style Representation", description: "Compute Gram matrices for style loss", tech: "NumPy / PyTorch" },
      { step: "4. Optimization", description: "Iterative pixel gradient updates", tech: "Deep Learning" }
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "Jupyter Notebook", "NumPy", "Matplotlib", "Pillow"],
    aiTechniques: ["Neural Style Transfer", "Convolutional Neural Networks", "Gram Matrix Style Loss", "Feature Optimization"],
    metrics: {
      "Architecture": "CNN Neural Style Transfer",
      "Environment": "Jupyter Notebook / PyTorch",
      "Domain": "Generative Deep Learning"
    },
    githubUrl: "https://github.com/AbhiA0821/Art-Generation",
    featured: true,
    targetRoles: ['ML Engineer', 'AI Engineer'],
    category: "AI / GenAI"
  },
  {
    id: "proj-data-engineering",
    slug: "data-engineering",
    title: "Data-Engineering — Learning & Hands-On Repository",
    tagline: "Structured Learning Repository: SQL, PySpark & DuckDB",
    description: "A structured learning and implementation repository documenting core data engineering principles, analytical SQL window queries, PySpark DataFrame transformations, and DuckDB schemas.",
    problem: "Mastering data engineering tools requires practical hands-on implementations of SQL analytical queries and Spark transformations.",
    solution: "Maintains clean code modules covering analytical SQL queries, PySpark data operations, and DuckDB analytical processing.",
    architecture: [
      "Analytical SQL & DuckDB Relational Schemas",
      "PySpark DataFrame Transformations & Aggregations",
      "PostgreSQL Ingestion & Data Engineering Exercises"
    ],
    pipelineDiagram: [
      { step: "1. Core SQL", description: "Analytical window functions & schemas", tech: "SQL / PostgreSQL" },
      { step: "2. Spark Operations", description: "PySpark transformations & aggregations", tech: "PySpark" },
      { step: "3. Analytical Engine", description: "In-memory SQL analytical queries", tech: "DuckDB" },
      { step: "4. Open Source", description: "Hands-on data engineering modules", tech: "Git / GitHub" }
    ],
    technologies: ["Python", "SQL", "PySpark", "DuckDB", "PostgreSQL", "Git"],
    aiTechniques: ["Distributed Data Processing", "Analytical SQL Warehousing", "DataFrame Transformations"],
    metrics: {
      "Type": "Learning Repository",
      "Focus": "Data Engineering",
      "Stack": "SQL + PySpark + DuckDB"
    },
    githubUrl: "https://github.com/AbhiA0821/Data-Engineering",
    featured: true,
    targetRoles: ['Data Engineer'],
    category: "Data Engineering"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "AI & Data Engineering Projects",
    role: "AI & Data Science Specialist",
    period: "2024 - Present",
    location: "Pune, India",
    description: [
      "Engineered smart resume skill parsing algorithms and domain classification models using KNN and Random Forest.",
      "Developed healthcare ETL scripts and vital sign simulation pipelines using Python, PySpark, DuckDB, and SQL.",
      "Implemented neural style transfer models and deep learning image synthesis pipelines in PyTorch."
    ],
    technologies: ["Python", "PySpark", "DuckDB", "PyTorch", "Scikit-Learn", "Streamlit", "Flask", "SQL", "Git"],
    targetRoles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist']
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering / Data Science",
    institution: "Pune University / Affiliated Institute",
    period: "2021 - 2025",
    grade: "First Class Distinction",
    highlights: [
      "Specialized coursework in Machine Learning, Deep Learning, Database Management Systems, and Distributed Computing.",
      "Developed hands-on capstone projects in resume matching, healthcare data engineering, and neural style transfer."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Oracle OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    date: "2025",
    skills: ["Generative AI", "OCI GenAI Services", "RAG", "LLMs"],
    verifyUrl: "https://mylearn.oracle.com/ou/certification"
  },
  {
    id: "cert-2",
    title: "Oracle OCI 2025 Certified Data Science Professional",
    issuer: "Oracle University",
    date: "2025",
    skills: ["Machine Learning", "Data Science", "OCI Data Science", "AutoML"],
    verifyUrl: "https://mylearn.oracle.com/ou/certification"
  },
  {
    id: "cert-3",
    title: "Solutions Architecture (AWS) Job Simulation",
    issuer: "Forage Capstone",
    date: "2025",
    skills: ["AWS", "Solutions Architecture", "Cloud Architecture", "System Design"],
    verifyUrl: "https://www.theforage.com"
  },
  {
    id: "cert-4",
    title: "Database (SQL) Internship Completion Certificate",
    issuer: "Tecspeak IT Solutions",
    date: "2025",
    skills: ["SQL", "Relational Databases", "Database Management", "Query Optimization"],
    verifyUrl: "https://mylearn.oracle.com/ou/certification"
  }
];

export const githubStatsData: GitHubStats = {
  publicRepos: 9,
  starsCount: 5,
  commitsThisYear: 142,
  topLanguages: [
    { name: "Python", percentage: 55, color: "#3572A5" },
    { name: "TypeScript", percentage: 30, color: "#3178C6" },
    { name: "Jupyter / SQL", percentage: 15, color: "#DA5B0A" }
  ],
  featuredRepos: [
    {
      name: "MedIntel",
      description: "[ONGOING] Healthcare Data Pipeline using DuckDB, PySpark & Apache Airflow",
      language: "Python",
      stars: 3,
      url: "https://github.com/AbhiA0821/MedIntel",
      updatedAt: "Verified"
    },
    {
      name: "Resume-Matcher",
      description: "Smart Resume Analyzer & Job Recommendation System using KNN + Random Forest",
      language: "Python",
      stars: 1,
      url: "https://github.com/AbhiA0821/Resume-Matcher",
      updatedAt: "Verified"
    },
    {
      name: "Art-Generation",
      description: "Deep Learning Neural Style Transfer using CNNs in PyTorch & Jupyter",
      language: "Jupyter Notebook",
      stars: 0,
      url: "https://github.com/AbhiA0821/Art-Generation",
      updatedAt: "Verified"
    },
    {
      name: "Data-Engineering",
      description: "Structured Learning Repository: Analytical SQL, PySpark & DuckDB",
      language: "Python",
      stars: 1,
      url: "https://github.com/AbhiA0821/Data-Engineering",
      updatedAt: "Verified"
    }
  ]
};
