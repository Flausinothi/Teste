export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  url?: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  items: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  about: string;
  experiences: Experience[];
  education: Education[];
  skills: SkillGroup[];
  certificates: Certificate[];
}

export type Tab = "resume" | "certificates" | "cronogram";
