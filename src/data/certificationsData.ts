export interface VerifiedCertification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  validUntil?: string;
  credentialId?: string;
  credentialUrl?: string;
  verificationCode?: string;
  category: 'Generative AI' | 'Data Science & ML' | 'Artificial Intelligence' | 'Data Engineering & Analytics' | 'Databases & SQL';
  image: string;
  description: string;
  skills: string[];
  featured: boolean;
}

export const verifiedCertifications: VerifiedCertification[] = [
  {
    id: "cert-oracle-genai",
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle University / Oracle Certified Professional",
    issueDate: "September 30, 2025",
    credentialId: "322687563OCI25GAIOCP",
    credentialUrl: "https://mylearn.oracle.com/ou/certification",
    category: "Generative AI",
    image: "/certificates/oracle-genai-2025.svg",
    description: "Official professional certification validating expertise in Oracle Cloud Infrastructure Generative AI services, LLM fine-tuning, retrieval-augmented generation (RAG), and prompt engineering.",
    skills: ["Generative AI", "OCI GenAI Services", "RAG Pipelines", "LLMs", "Prompt Engineering"],
    featured: true
  },
  {
    id: "cert-oracle-ds",
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle University / Oracle Certified Professional",
    issueDate: "October 13, 2025",
    validUntil: "October 13, 2027",
    credentialId: "322687563OCI25DSOCP",
    credentialUrl: "https://mylearn.oracle.com/ou/certification",
    category: "Data Science & ML",
    image: "/certificates/oracle-datascience-2025.svg",
    description: "Professional recognition for end-to-end Machine Learning model training, evaluation, automated ML (AutoML), and MLOps deployment on Oracle Cloud Infrastructure.",
    skills: ["Machine Learning", "Data Science", "OCI Data Science", "MLOps", "AutoML"],
    featured: true
  },
  {
    id: "cert-infosys-ai",
    title: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    issueDate: "April 23, 2026",
    credentialUrl: "https://verify.onwingspan.com",
    category: "Artificial Intelligence",
    image: "/certificates/infosys-ai-2026.svg",
    description: "Comprehensive course completion certification covering AI algorithms, deep learning neural networks, natural language processing, and AI ethics.",
    skills: ["Artificial Intelligence", "Deep Learning", "NLP", "Neural Networks"],
    featured: true
  },
  {
    id: "cert-tata-datavis",
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata / Forage Capstone",
    issueDate: "August 12, 2025",
    verificationCode: "WS8SeyBivQbGWGry5",
    category: "Data Engineering & Analytics",
    image: "/certificates/tata-datavis-2025.svg",
    description: "Practical simulation completing business scenario framing, data preparation, chart selection, and executive analytical visualization.",
    skills: ["Data Visualization", "Business Analytics", "Dashboard Design", "Data Insights"],
    featured: false
  },
  {
    id: "cert-tecspeak-sql",
    title: "Database (SQL) Internship Completion Certificate",
    issuer: "Tecspeak IT Solutions",
    issueDate: "July 09, 2025",
    category: "Databases & SQL",
    image: "/certificates/tecspeak-sql-2025.svg",
    description: "Verified industry internship completion for SQL database administration, relational schema optimization, query writing, and data manipulation.",
    skills: ["SQL", "Relational Databases", "Database Management", "Query Optimization"],
    featured: false
  }
];
