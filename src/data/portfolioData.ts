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
  title: "AI Engineer | Machine Learning | Generative AI | Data Engineering",
  tagline: "B.Tech AI & Data Science student building practical AI applications, RAG systems, machine learning solutions, and scalable data pipelines.",
  bio: "B.Tech Artificial Intelligence and Data Science student at Annasaheb Dange College of Engineering & Technology (CGPA 8.26/10) with hands-on experience building practical AI applications, RAG systems, machine learning solutions, and scalable data pipelines using Python, PySpark, DuckDB, SQL, Apache Airflow, PyTorch, FastAPI, and Streamlit.",
  location: "Ichalkaranji, Maharashtra, India",
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
    description: "Resume-Matcher, MedIntel, Art-Generation & Data-Engineering",
    iconName: "Cpu"
  },
  {
    id: "stat-2",
    label: "Core Stack Technologies",
    numericValue: 12,
    suffix: "+",
    description: "Python, PySpark, DuckDB, SQL, Airflow, PyTorch, Scikit-learn",
    iconName: "Layers"
  },
  {
    id: "stat-3",
    label: "Verified Certifications",
    numericValue: 3,
    suffix: "",
    description: "Oracle OCI GenAI, Oracle OCI Data Science & Infosys AI Credentials",
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
    technologies: ["Scikit-Learn", "PyTorch", "KNN", "Random Forest", "CycleGAN", "Pandas", "NumPy"],
    proficiencyLabel: "Proficient",
    detailedOverview: "Applied supervised and unsupervised ML techniques for classification, regression, and natural language processing tasks with rigorous evaluation metrics.",
    keyCapabilities: [
      "Skill parsing and domain classification using KNN & Random Forest",
      "CycleGAN generator/discriminator training for style transfer",
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
    detailedOverview: "Experienced in handling patient vital record streams, distributed data processing in PySpark, writing analytical queries, and SQL warehousing.",
    keyCapabilities: [
      "Distributed data extraction, transformation, and loading (ETL/ELT)",
      "PySpark DataFrame transformations and window aggregations",
      "DuckDB in-memory analytical SQL processing",
      "Airflow pipeline orchestration and DAG execution"
    ],
    targetRoles: ['Data Engineer', 'Data Scientist', 'ML Engineer']
  },
  {
    id: "exp-apps",
    title: "05 AI Applications",
    subtitle: "FastAPI, Python, Streamlit & Web APIs",
    description: "Building REST APIs, asynchronous microservices, and interactive Streamlit analytics dashboards.",
    iconName: "Terminal",
    technologies: ["FastAPI", "Python", "Streamlit", "Flask", "SQLite", "RapidAPI", "REST APIs"],
    proficiencyLabel: "Strong",
    detailedOverview: "Developing end-to-end full-stack AI applications combining Python API backends with interactive Streamlit dashboards.",
    keyCapabilities: [
      "FastAPI AsyncIO RESTful microservice development",
      "Streamlit real-time interactive UI dashboards",
      "RapidAPI integration for live job postings and data",
      "SQLite embedded database management"
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
  "PYTORCH",
  "SCIKIT-LEARN",
  "CYCLEGAN",
  "RANDOM FOREST",
  "KNN",
  "PANDAS",
  "NUMPY"
];

export const marqueeTechnologiesRow4 = [
  "STREAMLIT",
  "FLASK",
  "REST APIS",
  "TYPESCRIPT",
  "REACT 19",
  "GIT",
  "GITHUB"
];

export const workflowStepsData: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Understand",
    subtitle: "Problem & Requirements",
    description: "Deconstruct user goals into structured requirements and domain context.",
    techStack: ["Problem Scoping", "Data Schema Definition", "Target Alignment"],
    statusBadge: "STAGE 01"
  },
  {
    stepNumber: "02",
    title: "Architect",
    subtitle: "Architecture & Data Flow",
    description: "Design modular schemas, data transformation pipelines, and agent graphs.",
    techStack: ["System Architecture", "Pipeline Diagrams", "API Contracts"],
    statusBadge: "STAGE 02"
  },
  {
    stepNumber: "03",
    title: "Execute",
    subtitle: "Models, APIs & AI Systems",
    description: "Implement clean code using Python, PySpark, DuckDB, PyTorch & FastAPI.",
    techStack: ["Python", "PySpark", "DuckDB", "PyTorch", "FastAPI"],
    statusBadge: "STAGE 03"
  },
  {
    stepNumber: "04",
    title: "Verify",
    subtitle: "Quality, Accuracy & Reliability",
    description: "Validate performance, system accuracy, and automated test coverage.",
    techStack: ["RAG Precision Metrics", "Latency Benchmarks", "Unit Tests"],
    statusBadge: "STAGE 04"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    category: "AI / Machine Learning",
    skills: [
      { name: "Machine Learning", level: "Proficient", roles: ['ML Engineer', 'AI Engineer'] },
      { name: "PyTorch", level: "Hands-on", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "Deep Learning", level: "Hands-on", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "GANs", level: "Hands-on", roles: ['AI Engineer', 'ML Engineer'] }
    ]
  },
  {
    category: "Generative AI",
    skills: [
      { name: "Generative AI", level: "Proficient", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "LLM API Integration", level: "Proficient", roles: ['AI Engineer'] },
      { name: "RAG", level: "Proficient", roles: ['AI Engineer'] }
    ]
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "PySpark", level: "Proficient", roles: ['Data Engineer', 'ML Engineer'] },
      { name: "Apache Airflow", level: "Working Knowledge", roles: ['Data Engineer'] },
      { name: "DuckDB", level: "Proficient", roles: ['Data Engineer'] },
      { name: "ETL Pipelines", level: "Proficient", roles: ['Data Engineer'] },
      { name: "Kafka", level: "Working Knowledge", roles: ['Data Engineer'] },
      { name: "SQL", level: "Proficient", roles: ['Data Engineer', 'Data Scientist'] }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "FastAPI", level: "Proficient", roles: ['AI Engineer', 'Data Engineer'] },
      { name: "Flask", level: "Proficient", roles: ['AI Engineer', 'Data Engineer'] },
      { name: "REST APIs", level: "Proficient", roles: ['AI Engineer', 'Data Engineer'] },
      { name: "JWT Authentication", level: "Proficient", roles: ['AI Engineer'] },
      { name: "Firebase Authentication", level: "Working Knowledge", roles: ['AI Engineer'] }
    ]
  },
  {
    category: "Application / Tools",
    skills: [
      { name: "Streamlit", level: "Proficient", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "Git", level: "Proficient", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer'] },
      { name: "GitHub", level: "Proficient", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer'] },
      { name: "MySQL", level: "Proficient", roles: ['Data Engineer', 'AI Engineer'] }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-resume-matcher",
    slug: "resume-matcher",
    title: "AI Resume Analyzer & Live Job Matcher",
    tagline: "AI-Powered Resume Analysis & Machine Learning Job Recommendation System",
    description: "Developed an AI-powered resume analyzer for skill extraction and domain classification using KNN and Random Forest models. Integrated real-time job listings using RapidAPI and deployed the application on Streamlit Cloud.",
    problem: "Job seekers struggle to extract structured skill sets from resumes and identify matching engineering domains accurately.",
    solution: "Built Resume-Matcher using PDFPlumber text extraction, KNN & Random Forest domain classification models, SQLite data persistence, and interactive Streamlit analytics.",
    architecture: [
      "PDF Resume Upload -> Skill & Text Extraction (PDFPlumber)",
      "Feature Engineering -> KNN & Random Forest ML Domain Classification",
      "RapidAPI Integration -> Real-time Live Job Listings Search",
      "Interactive Analytics Dashboard (Streamlit Cloud)"
    ],
    pipelineDiagram: [
      { step: "1. Resume Parsing", description: "Extracts text from PDF/DOCX resumes", tech: "Python / PDFPlumber" },
      { step: "2. Feature Extraction", description: "Identifies tech skills & experience indicators", tech: "Scikit-Learn" },
      { step: "3. ML Classification", description: "KNN & Random Forest domain prediction", tech: "Machine Learning" },
      { step: "4. Live Job Match", description: "RapidAPI real-time job listings search", tech: "Streamlit Cloud" }
    ],
    technologies: ["Python", "Streamlit", "Scikit-learn", "KNN", "Random Forest", "SQLite", "RapidAPI", "PDFPlumber", "Pandas", "NumPy"],
    aiTechniques: ["KNN Classification", "Random Forest", "Resume Skill Parsing", "Domain Classification"],
    metrics: {
      "Rank": "01 (Featured)",
      "ML Models": "KNN + Random Forest",
      "Interface": "Streamlit Cloud"
    },
    githubUrl: "https://github.com/AbhiA0821/Resume-Matcher",
    demoUrl: "https://resume-matcher-ypjig2msxnqn7dchb2ctg5.streamlit.app",
    featured: true,
    targetRoles: ['ML Engineer', 'Data Scientist', 'AI Engineer'],
    category: "Machine Learning"
  },
  {
    id: "proj-medintel",
    slug: "medintel",
    title: "MedIntel — AI Healthcare Data Pipeline",
    tagline: "ONGOING • Patient Vital Record Processing & Monitoring Pipeline",
    description: "Developing an AI-powered healthcare data pipeline for processing and monitoring patient vital data. Building scalable ETL workflows using PySpark, DuckDB, and Apache Airflow for healthcare data processing, paired with a Streamlit dashboard and LLM insights.",
    problem: "Processing patient vital sign records requires structured relational schemas, scalable PySpark transformations, and automated Airflow pipeline orchestration.",
    solution: "Architected a Python vital sign simulator and DuckDB database schema paired with PySpark ETL routines and Apache Airflow DAG scheduling.",
    architecture: [
      "Patient Vitals Simulator -> DuckDB In-Memory Relational Schema",
      "PySpark Data Cleaning, Transformation & Validation",
      "Apache Airflow Pipeline Orchestration",
      "Streamlit Analytics Dashboard & LLM Insights Integration"
    ],
    pipelineDiagram: [
      { step: "1. Vitals Simulation", description: "Simulates patient vital sign data", tech: "Python" },
      { step: "2. DuckDB Storage", description: "Patients & vital signs relational tables", tech: "DuckDB / SQL" },
      { step: "3. PySpark ETL", description: "Data cleaning, transformation & validation", tech: "PySpark" },
      { step: "4. Pipeline DAG", description: "Automated workflow runs", tech: "Apache Airflow" }
    ],
    technologies: ["Python", "PySpark", "DuckDB", "Apache Airflow", "LLM", "Streamlit", "Pandas", "SQL"],
    aiTechniques: ["PySpark ETL Processing", "DuckDB Analytical SQL", "Vital Sign Monitoring", "LLM Insights"],
    metrics: {
      "Rank": "02 (Ongoing)",
      "Engine": "PySpark + DuckDB",
      "Orchestration": "Apache Airflow"
    },
    githubUrl: "https://github.com/AbhiA0821/MedIntel",
    featured: true,
    targetRoles: ['Data Engineer', 'ML Engineer'],
    category: "Data Engineering"
  },
  {
    id: "proj-art-generation",
    slug: "art-generation",
    title: "Art Generation Using CycleGAN",
    tagline: "Generative Deep Learning & CycleGAN Artwork Synthesis",
    description: "Developed a CycleGAN-based deep learning model to convert real-world images into Ghibli-style artwork. Implemented custom Generator and Discriminator networks with image preprocessing and adversarial training on unpaired datasets.",
    problem: "Converting real-world photographs to stylized artwork requires unpaired image-to-image translation without explicit image pairs.",
    solution: "Implemented custom CycleGAN Generator and Discriminator neural networks in PyTorch with cycle-consistency loss optimization.",
    architecture: [
      "Unpaired Real Photo & Ghibli Style Image Datasets",
      "Generator (Image-to-Image Translation) & Discriminator (Adversarial Validation)",
      "Cycle-Consistency & Adversarial Loss Optimization",
      "High-Quality Stylized Artwork Output"
    ],
    pipelineDiagram: [
      { step: "1. Input Datasets", description: "Unpaired photo & artwork datasets", tech: "Pillow / TorchVision" },
      { step: "2. Generator Network", description: "Deep residual generator network", tech: "PyTorch" },
      { step: "3. Discriminator Network", description: "PatchGAN adversarial discriminator", tech: "Deep Learning" },
      { step: "4. Training Loop", description: "Cycle-consistency loss optimization", tech: "GANs" }
    ],
    technologies: ["Python", "PyTorch", "Deep Learning", "CycleGAN", "GANs", "NumPy", "Matplotlib"],
    aiTechniques: ["CycleGAN Architecture", "Adversarial Training", "Cycle-Consistency Loss", "Image Preprocessing"],
    metrics: {
      "Rank": "03",
      "Architecture": "CycleGAN Deep Learning",
      "Framework": "PyTorch"
    },
    githubUrl: "https://github.com/AbhiA0821/Art-Generation",
    featured: true,
    targetRoles: ['ML Engineer', 'AI Engineer'],
    category: "AI / GenAI"
  },
  {
    id: "proj-data-engineering",
    slug: "data-engineering",
    title: "Data-Engineering — SQL, PySpark & DuckDB Repository",
    tagline: "Structured Learning Repository: Analytical SQL, PySpark & DuckDB",
    description: "A structured learning and implementation repository documenting core data engineering principles, analytical SQL window queries, PySpark DataFrame transformations, and DuckDB analytical schemas.",
    problem: "Mastering scalable data engineering requires hands-on implementations of SQL analytical queries and Spark distributed transformations.",
    solution: "Maintains clean code modules covering analytical SQL queries, PySpark data operations, and DuckDB analytical processing.",
    architecture: [
      "Analytical SQL & DuckDB Relational Schemas",
      "PySpark DataFrame Transformations & Aggregations",
      "Data Ingestion & Engineering Code Exercises"
    ],
    pipelineDiagram: [
      { step: "1. Core SQL", description: "Analytical window functions & schemas", tech: "SQL" },
      { step: "2. Spark Operations", description: "PySpark transformations & aggregations", tech: "PySpark" },
      { step: "3. Analytical Engine", description: "In-memory SQL analytical queries", tech: "DuckDB" },
      { step: "4. Open Source", description: "Hands-on data engineering modules", tech: "Git / GitHub" }
    ],
    technologies: ["Python", "SQL", "PySpark", "DuckDB", "Apache Airflow", "Git"],
    aiTechniques: ["Distributed Data Processing", "Analytical SQL Warehousing", "DataFrame Transformations"],
    metrics: {
      "Rank": "04",
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
    id: "exp-infosys",
    company: "Infosys Springboard 7.0",
    role: "AI Virtual Intern",
    period: "Starting August 2026",
    location: "Remote / Virtual Internship",
    description: [
      "Selected for the Infosys Springboard 7.0 AI Virtual Internship.",
      "Working on an industry-oriented AI project involving Python and Data Engineering.",
      "Focus areas include Machine Learning, PySpark, DuckDB, and real-world AI applications."
    ],
    technologies: ["Python", "Machine Learning", "PySpark", "DuckDB", "Data Engineering"],
    targetRoles: ['AI Engineer', 'ML Engineer', 'Data Engineer']
  },
  {
    id: "exp-tecspeak",
    company: "TecSpeak IT Solutions, Sangli",
    role: "Database (SQL) Intern",
    period: "June 2025 – July 2025",
    location: "Sangli, Maharashtra, India",
    description: [
      "Completed hands-on training in SQL and relational database concepts.",
      "Practiced writing SQL queries for data retrieval and manipulation.",
      "Gained practical understanding of database management and SQL fundamentals."
    ],
    technologies: ["SQL", "Relational Databases", "Database Management", "Query Writing"],
    targetRoles: ['Data Engineer', 'Data Scientist']
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-btech",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    field: "Artificial Intelligence and Data Science",
    institution: "Annasaheb Dange College of Engineering & Technology",
    period: "2023 – Present",
    grade: "CGPA: 8.26 / 10",
    highlights: [
      "Specialized coursework in Machine Learning, Deep Learning, Database Management Systems, and Distributed Data Engineering.",
      "Built practical projects in resume matching, healthcare data engineering, and generative image synthesis."
    ]
  },
  {
    id: "edu-hsc",
    degree: "HSC (Science)",
    field: "Higher Secondary Certificate (Science)",
    institution: "State Board",
    period: "2021 – 2023",
    grade: "81%",
    highlights: [
      "Completed Higher Secondary Education focusing on Physics, Chemistry, Mathematics, and Computer Science."
    ]
  },
  {
    id: "edu-ssc",
    degree: "SSC (CBSE)",
    field: "Secondary School Certificate",
    institution: "CBSE Board",
    period: "2021",
    grade: "89%",
    highlights: [
      "Strong foundation in Mathematics, Science, and Information Technology."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-oci-genai",
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    date: "September 2025",
    skills: ["Generative AI", "OCI GenAI Services", "RAG", "LLMs", "Prompt Engineering"],
    verifyUrl: "https://mylearn.oracle.com/ou/certification"
  },
  {
    id: "cert-oci-ds",
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle University",
    date: "October 2025",
    skills: ["Machine Learning", "Data Science", "OCI Data Science", "AutoML"],
    verifyUrl: "https://mylearn.oracle.com/ou/certification"
  },
  {
    id: "cert-infosys-ai",
    title: "Artificial Intelligence – Infosys Springboard",
    issuer: "Infosys Springboard",
    date: "April 2026",
    skills: ["Artificial Intelligence", "Machine Learning", "Python", "Data Science"],
    verifyUrl: "https://infyspringboard.onwingspan.com"
  }
];

export const githubStatsData: GitHubStats = {
  publicRepos: 9,
  starsCount: 4,
  commitsThisYear: 120,
  topLanguages: [
    { name: "Python", percentage: 65, color: "#3572A5" },
    { name: "Jupyter Notebook", percentage: 25, color: "#DA5B0A" },
    { name: "SQL", percentage: 10, color: "#e38c00" }
  ],
  featuredRepos: [
    {
      name: "Resume-Matcher",
      description: "AI-powered resume analyzer & machine learning job recommendation system",
      language: "Python",
      stars: 1,
      url: "https://github.com/AbhiA0821/Resume-Matcher",
      updatedAt: "Verified"
    },
    {
      name: "MedIntel",
      description: "AI Healthcare Data Pipeline using DuckDB, PySpark & Apache Airflow",
      language: "Python",
      stars: 1,
      url: "https://github.com/AbhiA0821/MedIntel",
      updatedAt: "Verified"
    },
    {
      name: "Art-Generation",
      description: "CycleGAN deep learning model to convert real-world images into Ghibli-style artwork",
      language: "Jupyter Notebook",
      stars: 1,
      url: "https://github.com/AbhiA0821/Art-Generation",
      updatedAt: "Verified"
    },
    {
      name: "Data-Engineering",
      description: "Structured learning repository: Analytical SQL, PySpark & DuckDB implementations",
      language: "Python",
      stars: 1,
      url: "https://github.com/AbhiA0821/Data-Engineering",
      updatedAt: "Verified"
    }
  ]
};
