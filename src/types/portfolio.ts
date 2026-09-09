export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  headline: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  phone?: string;
  status: string;
  resumeDriveUrl: string;
  resumeDownloadUrl: string;
  localResumePath?: string;
  profilePhoto: string;
  profilePhotoDriveUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface TechItem {
  id: string;
  name: string;
  category: "language" | "framework" | "database" | "tool";
  categoryLabel: string;
  description: string;
  accentColor: string;
  core: boolean;
}

export interface SkillItem {
  name: string;
  level?: "Expert" | "Proficient" | "Familiar";
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  current?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  contribution?: string;
  outcome?: string;
  category: "Mobile" | "Full Stack" | "Frontend" | "Backend" | "Software / Utility" | "Travel Platform" | "Bus Booking";
  githubUrl?: string;
  liveUrl?: string;
  liveUrlLabel?: string;
  featured: boolean;
  accentColor: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  grade?: string;
  cgpa?: string;
  details?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  url?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillCategory[];
  techStack: TechItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}
