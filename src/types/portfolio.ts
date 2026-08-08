export type TargetRole = 'AI Engineer' | 'ML Engineer' | 'Data Engineer' | 'Data Scientist';
export type SkillProficiency = 'Learning' | 'Working Knowledge' | 'Hands-on' | 'Strong' | 'Proficient' | 'Advanced';

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

export interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  technologies: string[];
  proficiencyLabel: SkillProficiency;
  detailedOverview: string;
  keyCapabilities: string[];
  targetRoles: TargetRole[];
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
  category: 'AI / GenAI' | 'Machine Learning' | 'Data Engineering' | 'Web / Software';
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

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Future Focus';
}

export interface StatItem {
  id: string;
  label: string;
  numericValue: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  statusBadge: string;
}

