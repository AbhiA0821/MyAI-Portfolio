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
  image?: string;
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
    image: "/certificates/oracle-generative-ai.png",
    description: "Official professional certification validating expertise in Oracle Cloud Infrastructure Generative AI services, LLMs, fine-tuning, RAG, and prompt engineering.",
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
    image: "/certificates/oracle-data-science.png",
    description: "Professional recognition for end-to-end Machine Learning model training, evaluation, AutoML, and MLOps deployment on Oracle Cloud Infrastructure.",
    skills: ["Machine Learning", "Data Science", "OCI Data Science", "MLOps", "AutoML"],
    featured: true
  },
  {
    id: "cert-aws-sa",
    title: "Solutions Architecture (AWS) Job Simulation",
    issuer: "Forage Capstone",
    issueDate: "August 12, 2025",
    verificationCode: "WS8SeyBivQbGWGry5",
    category: "Data Engineering & Analytics",
    image: "/certificates/aws-solutions-architect.png",
    description: "Completed practical tasks in designing simple, scalable, hosting architecture on AWS infrastructure.",
    skills: ["AWS", "Solutions Architecture", "Cloud Architecture", "System Design"],
    featured: true
  },
  {
    id: "cert-tecspeak-sql",
    title: "Database (SQL) Internship Completion Certificate",
    issuer: "Tecspeak IT Solutions",
    issueDate: "July 09, 2025",
    category: "Databases & SQL",
    image: "/certificates/tecspeak-sql.png",
    description: "Verified industry internship completion certificate for SQL database queries, relational schema optimization, and data manipulation.",
    skills: ["SQL", "Relational Databases", "Database Management", "Query Optimization"],
    featured: false
  }
];


