import type { LucideIcon } from 'lucide-react';

export interface ProjectSection { id: string; title: string; body: string; }
export interface ProjectScreenshot { src: string; alt: string; label: string; }
export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  category: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  features: string[];
  cover: string;
  screenshots: ProjectScreenshot[];
  presentation?: ProjectScreenshot[];
  featuredMedia: 'cover' | 'screens';
  visualType: 'phone' | 'browser';
  sections: ProjectSection[];
  pipeline?: string[];
  github: string;
  demo: string;
}

export interface Service {
  title: string;
  description: string;
  technologies: string[];
  deliverables: string[];
  icon: LucideIcon;
}

export interface SkillGroup { title: string; description: string; skills: string[]; }
