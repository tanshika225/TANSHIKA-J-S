
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Web Technologies' | 'Mobile Development' | 'Backend / Database' | 'Tools';
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}
