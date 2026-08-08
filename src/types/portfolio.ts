export type TargetRole = 'AI Engineer' | 'ML Engineer' | 'Data Engineer' | 'Data Scientist';
export type SkillProficiency = 'Advanced' | 'Proficient' | 'Intermediate';

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  targetRoles: TargetRole[];
  availability: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: SkillProficiency;
    iconName?: string;
    roles: TargetRole[];
  }[];
}

export interface PipelineNode {
  step: string;
  description: string;
  tech: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  pipelineDiagram?: PipelineNode[];
  technologies: string[];
  aiTechniques: string[];
  metrics: { [key: string]: string };
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  targetRoles: TargetRole[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  targetRoles: TargetRole[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  skills: string[];
}

export interface GitHubStats {
  publicRepos: number;
  starsCount: number;
  commitsThisYear: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  featuredRepos: {
    name: string;
    description: string;
    language: string;
    stars: number;
    url: string;
    updatedAt: string;
  }[];
}
