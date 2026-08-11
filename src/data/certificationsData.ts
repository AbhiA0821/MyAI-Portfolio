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

// Verified certifications matching authoritative resume & LinkedIn credentials.
// SQL Internship belongs under Work Experience and is omitted from Certifications.
export const verifiedCertifications: VerifiedCertification[] = [
  {
    id: "cert-oracle-genai",
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    issueDate: "September 2025",
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
    issuer: "Oracle University",
    issueDate: "October 2025",
    validUntil: "October 2027",
    credentialId: "322687563OCI25DSOCP",
    credentialUrl: "https://mylearn.oracle.com/ou/certification",
    category: "Data Science & ML",
    image: "/certificates/oracle-data-science.png",
    description: "Professional recognition for end-to-end Machine Learning model training, evaluation, AutoML, and MLOps deployment on Oracle Cloud Infrastructure.",
    skills: ["Machine Learning", "Data Science", "OCI Data Science", "MLOps", "AutoML"],
    featured: true
  },
  {
    id: "cert-infosys-ai",
    title: "Artificial Intelligence – Infosys Springboard",
    issuer: "Infosys Springboard",
    issueDate: "April 2026",
    category: "Artificial Intelligence",
    credentialUrl: "https://infyspringboard.onwingspan.com",
    description: "Artificial Intelligence certification from Infosys Springboard covering core machine learning, deep learning concepts, and AI application development.",
    skills: ["Artificial Intelligence", "Machine Learning", "Python", "Data Science"],
    featured: true
  }
];


