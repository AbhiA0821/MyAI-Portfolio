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
  location: "Ichalkaranji, Maharashtra",
  email: "ainapureabhi0821@gmail.com",
  githubUrl: "https://github.com/AbhiA0821",
  linkedinUrl: "https://www.linkedin.com/in/abhishek-ainapure",
  targetRoles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'],
  availability: "Immediate / Open to Opportunities"
};

export const statsData: StatItem[] = [
  {
    id: "stat-1",
    label: "Verified Projects",
    numericValue: 3,
    suffix: "",
    description: "MedIntel, HireAgent / Resume-Matcher & Art-Generation",
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
    subtitle: "LLMs, RAG, Prompt Engineering & Multi-Agent Systems",
    description: "Designing structured LLM applications, custom prompt pipelines, tool invocation, and grounded vector retrieval.",
    iconName: "Sparkles",
    technologies: ["LLMs", "RAG", "Prompt Engineering", "Qdrant", "Multi-Agent Systems", "Generative AI"],
    proficiencyLabel: "Strong",
    detailedOverview: "Built custom LLM execution pipelines with vector storage, multi-agent coordination, and context-grounded retrieval.",
    keyCapabilities: [
      "Dynamic prompt composition and context window management",
      "Function/Tool calling integration for multi-step task execution",
      "Vector search with Qdrant for semantic resume-to-job matching",
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
    technologies: ["Agent Orchestration", "Multi-Agent Systems", "Qdrant", "RapidAPI", "Streamlit"],
    proficiencyLabel: "Hands-on",
    detailedOverview: "Designed multi-agent AI systems for skill extraction, domain classification, and context-aware recommendation.",
    keyCapabilities: [
      "Collaborative AI agent architecture for skill extraction & domain classification",
      "Real-time job listings integration via RapidAPI",
      "Semantic search using Qdrant vector database",
      "Interactive Streamlit dashboards for user execution"
    ],
    targetRoles: ['AI Engineer', 'ML Engineer']
  },
  {
    id: "exp-ml",
    title: "03 Machine Learning",
    subtitle: "ML, Deep Learning, CycleGAN & Computer Vision",
    description: "Training, evaluating, and deploying statistical ML models, computer vision neural networks, and GAN architectures.",
    iconName: "Brain",
    technologies: ["Scikit-Learn", "PyTorch", "CycleGAN", "GANs", "Deep Learning", "Pandas", "NumPy"],
    proficiencyLabel: "Proficient",
    detailedOverview: "Applied machine learning and deep learning for classification and image-to-image artwork translation.",
    keyCapabilities: [
      "CycleGAN deep learning model for real-world image to Ghibli-style artwork translation",
      "Custom Generator and Discriminator network architectures in PyTorch",
      "Adversarial training and cycle-consistency loss optimization",
      "Exploratory data analysis and feature engineering with NumPy & Pandas"
    ],
    targetRoles: ['ML Engineer', 'Data Scientist', 'AI Engineer']
  },
  {
    id: "exp-de",
    title: "04 Data Engineering",
    subtitle: "PySpark, SQL, DuckDB, Airflow & ETL",
    description: "Constructing scalable batch data ingestion pipelines using Apache Spark, DuckDB SQL, and Apache Airflow.",
    iconName: "Server",
    technologies: ["PySpark", "DuckDB", "Apache Airflow", "SQL", "ETL Pipelines", "Kafka", "MySQL"],
    proficiencyLabel: "Strong",
    detailedOverview: "Experienced in handling patient vital record streams, distributed data processing in PySpark, analytical DuckDB SQL queries, and Airflow DAGs.",
    keyCapabilities: [
      "Distributed data extraction, transformation, and loading (ETL workflows)",
      "PySpark DataFrame transformations and vital record aggregation",
      "DuckDB in-memory analytical SQL processing",
      "Apache Airflow pipeline orchestration and DAG execution"
    ],
    targetRoles: ['Data Engineer', 'Data Scientist', 'ML Engineer']
  },
  {
    id: "exp-apps",
    title: "05 Backend & Frameworks",
    subtitle: "FastAPI, Flask, Streamlit, JWT & REST APIs",
    description: "Building REST APIs, authentication layers, microservices, and interactive Streamlit analytics dashboards.",
    iconName: "Terminal",
    technologies: ["FastAPI", "Flask", "Streamlit", "REST APIs", "JWT Authentication", "Firebase Auth", "MySQL"],
    proficiencyLabel: "Strong",
    detailedOverview: "Developing end-to-end web backends and interactive data applications combining Python API services with Streamlit UIs.",
    keyCapabilities: [
      "FastAPI RESTful microservice and endpoint design",
      "JWT and Firebase Authentication integration",
      "Interactive Streamlit dashboard development",
      "Relational MySQL database query optimization and management"
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
  "MYSQL"
];

export const marqueeTechnologiesRow2 = [
  "LLMS",
  "RAG",
  "QDRANT",
  "MULTI-AGENT SYSTEMS",
  "PROMPT ENGINEERING",
  "REST APIS",
  "JWT"
];

export const marqueeTechnologiesRow3 = [
  "PYTORCH",
  "DEEP LEARNING",
  "CYCLEGAN",
  "GANS",
  "MACHINE LEARNING",
  "SCIKIT-LEARN",
  "PANDAS"
];

export const marqueeTechnologiesRow4 = [
  "STREAMLIT",
  "FLASK",
  "FIREBASE AUTH",
  "ETL PIPELINES",
  "KAFKA",
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
    description: "Implement clean code using Python, PySpark, DuckDB, PyTorch, FastAPI & Streamlit.",
    techStack: ["Python", "PySpark", "DuckDB", "PyTorch", "FastAPI"],
    statusBadge: "STAGE 03"
  },
  {
    stepNumber: "04",
    title: "Verify",
    subtitle: "Quality, Accuracy & Reliability",
    description: "Validate performance, system accuracy, and automated test coverage.",
    techStack: ["RAG Precision Metrics", "ETL Verification", "Unit Tests"],
    statusBadge: "STAGE 04"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: "Proficient", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'] },
      { name: "SQL", level: "Proficient", roles: ['Data Engineer', 'Data Scientist', 'AI Engineer'] }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "Machine Learning", level: "Proficient", roles: ['ML Engineer', 'AI Engineer', 'Data Scientist'] },
      { name: "Deep Learning", level: "Hands-on", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "PyTorch", level: "Hands-on", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "Scikit-Learn", level: "Proficient", roles: ['ML Engineer', 'AI Engineer'] },
      { name: "KNN", level: "Proficient", roles: ['ML Engineer'] },
      { name: "Random Forest", level: "Proficient", roles: ['ML Engineer'] },
      { name: "GANs", level: "Hands-on", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "CycleGAN", level: "Hands-on", roles: ['AI Engineer', 'ML Engineer'] }
    ]
  },
  {
    category: "Generative AI",
    skills: [
      { name: "LLMs", level: "Proficient", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "RAG", level: "Proficient", roles: ['AI Engineer'] },
      { name: "Prompt Engineering", level: "Proficient", roles: ['AI Engineer'] },
      { name: "LLM API Integration", level: "Proficient", roles: ['AI Engineer'] }
    ]
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "PySpark", level: "Proficient", roles: ['Data Engineer', 'ML Engineer'] },
      { name: "Apache Spark", level: "Working Knowledge", roles: ['Data Engineer'] },
      { name: "Apache Airflow", level: "Working Knowledge", roles: ['Data Engineer'] },
      { name: "DuckDB", level: "Proficient", roles: ['Data Engineer'] },
      { name: "ETL", level: "Proficient", roles: ['Data Engineer'] }
    ]
  },
  {
    category: "Backend / Application",
    skills: [
      { name: "FastAPI", level: "Proficient", roles: ['AI Engineer', 'Data Engineer'] },
      { name: "Flask", level: "Proficient", roles: ['AI Engineer', 'Data Engineer'] },
      { name: "Streamlit", level: "Proficient", roles: ['AI Engineer', 'ML Engineer'] },
      { name: "REST APIs", level: "Proficient", roles: ['AI Engineer', 'Data Engineer'] }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: "Proficient", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer'] },
      { name: "GitHub", level: "Proficient", roles: ['AI Engineer', 'ML Engineer', 'Data Engineer'] }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-hireagent",
    slug: "resume-matcher",
    title: "HireAgent – AI-Powered Multi-Agent Recruitment System",
    tagline: "ONGOING • AI-Powered Multi-Agent Recruitment & Resume Analysis System",
    description: "Developing a multi-agent AI system that uses LLMs and Retrieval-Augmented Generation (RAG) for automated resume analysis and job matching. Implementing the Qdrant vector database for semantic search and context-aware resume-to-job matching. Designing collaborative AI agents for skill extraction, domain classification, and job recommendation, with real-time job listings integrated via RapidAPI.",
    problem: "Automating structured resume analysis and context-aware job matching requires vector semantic search, multi-agent collaboration, and real-time job market integration.",
    solution: "Architected a multi-agent recruitment system integrating RAG pipelines, Qdrant vector database, FastAPI/Streamlit components, MySQL persistence, and real-time job listings via RapidAPI.",
    architecture: [
      "Resume Ingestion -> Text Parsing & Skill Extraction (PDF / DOCX)",
      "Semantic Search -> Qdrant Vector Database Context-Aware Matching",
      "Collaborative Agents -> Skill Extraction, Domain Classification & Recommendation",
      "User Interface & API -> Streamlit Dashboard & FastAPI RESTful Backend"
    ],
    pipelineDiagram: [
      { step: "1. Ingestion", description: "Resume text parsing & skill extraction", tech: "Python / LLMs" },
      { step: "2. Vector Index", description: "Semantic embedding & vector retrieval", tech: "Qdrant / RAG" },
      { step: "3. Agent Network", description: "Skill extraction & domain classification", tech: "Multi-Agent Systems" },
      { step: "4. UI & Job API", description: "Streamlit dashboard & live job listings", tech: "Streamlit / RapidAPI" }
    ],
    technologies: ["Python", "LLMs", "RAG", "Qdrant", "Multi-Agent Systems", "Streamlit", "Scikit-Learn", "FastAPI", "MySQL", "JWT", "Firebase Auth", "REST APIs"],
    aiTechniques: ["Multi-Agent Systems", "RAG / Context Matching", "Qdrant Vector Search", "Skill Domain Classification"],
    metrics: {
      "Project": "01 (Flagship)",
      "Architecture": "Multi-Agent + RAG",
      "Vector DB": "Qdrant",
      "Status": "Ongoing"
    },
    githubUrl: "https://github.com/AbhiA0821/Resume-Matcher",
    demoUrl: "https://resume-matcher-ypjig2msxnqn7dchb2ctg5.streamlit.app",
    featured: true,
    targetRoles: ['AI Engineer', 'ML Engineer'],
    category: "AI / GenAI"
  },
  {
    id: "proj-medintel",
    slug: "medintel",
    title: "MedIntel – AI Healthcare Data Pipeline",
    tagline: "ONGOING • Patient Vital Record Processing & Monitoring Pipeline",
    description: "Developing an AI-powered healthcare data pipeline for processing and monitoring patient vital data. Building scalable ETL workflows using PySpark, DuckDB, and Apache Airflow for healthcare data processing. Developing a Streamlit dashboard and integrating LLM APIs for intelligent healthcare insights.",
    problem: "Processing continuous patient vital-sign records requires structured relational schemas, distributed data transformations, and automated pipeline orchestration.",
    solution: "Architected an AI healthcare data pipeline with PySpark ETL routines, DuckDB analytical storage, Apache Airflow DAG scheduling, Streamlit monitoring, and LLM-powered insights.",
    architecture: [
      "Patient Vital Records -> Data Ingestion & Monitoring Engine",
      "Distributed ETL -> PySpark Data Ingestion & Transformations",
      "Analytical Warehouse -> DuckDB Relational Query Engine",
      "Pipeline Workflow -> Apache Airflow DAG Scheduling & Streamlit UI"
    ],
    pipelineDiagram: [
      { step: "1. Vitals Ingestion", description: "Patient vital-sign record streaming", tech: "Python" },
      { step: "2. Analytical Storage", description: "In-memory analytical SQL storage", tech: "DuckDB / SQL" },
      { step: "3. PySpark ETL", description: "Distributed cleaning & transformation", tech: "PySpark" },
      { step: "4. Workflow & UI", description: "Airflow DAG execution & LLM dashboard", tech: "Apache Airflow / Streamlit" }
    ],
    technologies: ["Python", "PySpark", "DuckDB", "Apache Airflow", "LLM", "Streamlit", "SQL"],
    aiTechniques: ["PySpark Distributed ETL", "DuckDB Analytical SQL", "Patient Vital Monitoring", "LLM Insights Integration"],
    metrics: {
      "Project": "02 (Ongoing)",
      "Processing Engine": "PySpark + DuckDB",
      "Orchestration": "Apache Airflow",
      "Status": "Ongoing"
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
    tagline: "Unpaired Image-to-Image Artwork Translation with PyTorch",
    description: "Developed a CycleGAN-based deep learning model to convert real-world images into Ghibli-style artwork. Implemented custom Generator and Discriminator networks with image preprocessing and adversarial training. Trained the model on unpaired datasets to generate high-quality stylized images.",
    problem: "Converting real-world photographs to stylized artwork requires unpaired image-to-image translation without matched image pairs.",
    solution: "Implemented custom CycleGAN Generator and Discriminator neural networks in PyTorch with adversarial training and cycle-consistency loss optimization.",
    architecture: [
      "Unpaired Datasets -> Real-World Photos & Artwork Images",
      "Generator Networks -> Residual Generator Architectures (G: X->Y, F: Y->X)",
      "Discriminator Networks -> PatchGAN Adversarial Discriminators (Dx, Dy)",
      "Training Loop -> Cycle-Consistency Loss Optimization in PyTorch"
    ],
    pipelineDiagram: [
      { step: "1. Data Ingestion", description: "Unpaired image loading & preprocessing", tech: "TorchVision / Pillow" },
      { step: "2. Generator", description: "Deep residual generator network", tech: "PyTorch" },
      { step: "3. Discriminator", description: "PatchGAN adversarial validation", tech: "Deep Learning" },
      { step: "4. Adversarial Loop", description: "Cycle-consistency loss training", tech: "CycleGAN / GANs" }
    ],
    technologies: ["Python", "PyTorch", "Deep Learning", "CycleGAN", "GANs"],
    aiTechniques: ["CycleGAN Architecture", "Adversarial Training", "Cycle-Consistency Loss", "Image Preprocessing"],
    metrics: {
      "Project": "03",
      "Architecture": "CycleGAN Deep Learning",
      "Framework": "PyTorch"
    },
    githubUrl: "https://github.com/AbhiA0821/Art-Generation",
    featured: true,
    targetRoles: ['ML Engineer', 'AI Engineer'],
    category: "AI / GenAI"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-infosys",
    company: "Infosys Springboard 7.0",
    role: "AI Virtual Intern (Selected)",
    period: "Starting August 2026",
    location: "Virtual / Remote",
    description: [
      "Selected for the Infosys Springboard 7.0 AI Virtual Internship.",
      "Will work on an industry-oriented AI project involving Python and Data Engineering.",
      "Focus areas include Machine Learning, PySpark, DuckDB, and real-world AI applications."
    ],
    technologies: ["Python", "PySpark", "DuckDB", "Machine Learning", "Data Engineering"],
    targetRoles: ['AI Engineer', 'ML Engineer', 'Data Engineer']
  },
  {
    id: "exp-tecspeak",
    company: "TecSpeak IT Solutions",
    role: "Database (SQL) Intern",
    period: "June 2025 – July 2025",
    location: "Sangli, Maharashtra",
    description: [
      "Completed hands-on training in SQL and relational database concepts.",
      "Practiced writing SQL queries for data retrieval and manipulation.",
      "Gained practical understanding of database management and SQL fundamentals."
    ],
    technologies: ["SQL", "Relational Databases", "Database Management", "SQL Queries"],
    targetRoles: ['Data Engineer', 'Data Scientist', 'AI Engineer']
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-btech",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    field: "Artificial Intelligence & Data Science",
    institution: "Annasaheb Dange College of Engineering & Technology",
    period: "2023 – Present",
    grade: "CGPA: 8.26 / 10",
    highlights: [
      "Specialized coursework in Machine Learning, Deep Learning, Database Management Systems, and Distributed Data Engineering.",
      "Building practical AI applications, RAG systems, machine learning solutions, and scalable data pipelines."
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
  starsCount: 3,
  commitsThisYear: 0,
  topLanguages: [
    { name: "Python", percentage: 65, color: "#3572A5" },
    { name: "Jupyter Notebook", percentage: 25, color: "#DA5B0A" },
    { name: "SQL", percentage: 10, color: "#e38c00" }
  ],
  featuredRepos: [
    {
      name: "Resume-Matcher",
      description: "HireAgent — AI-powered multi-agent recruitment & resume analysis system",
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
    }
  ]
};

