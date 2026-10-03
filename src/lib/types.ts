export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
}

export type ProjectCategory =
  | 'Game Development'
  | 'Augmented Reality'
  | 'Software Development'
  | 'AI / ML'
  | 'Web Development'
  | 'Portfolio'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  details: string
  technologies: string[]
  image?: string
  alt?: string
  github?: string
  demo?: string
  linkedinPost?: string
  featured: boolean
  year?: string
  highlights: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  location?: string
  period: string
  current?: boolean
  description: string[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface EducationItem {
  institution: string
  qualification: string
  period: string
  details: string[]
  metric?: string
}

export interface AwardItem {
  title: string
  organization: string
  period: string
  description: string
  certificateUrl: string
}

export interface CertificateItem {
  title: string
  organization: string
  period: string
  description: string
  certificateUrl: string
}

export interface LeadershipItem {
  title: string
  organization: string
  period: string
  description: string[]
  icon: 'users' | 'badge' | 'campus' | 'writer' | 'shield' | 'heart'
}
