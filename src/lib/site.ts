import type { NavItem, SocialLink } from './types'

export const site = {
  name: 'Kazi Saqlain Mihad',
  brand: 'Mihad Kazi',
  domain: 'https://mihadkazi.me',
  email: 'mihadkazi1@gmail.com',
  phone: '+880 1624-875270',
  location: 'Uttara, Dhaka, Bangladesh',
  github: 'https://github.com/mihadkazi1',
  linkedin: 'https://www.linkedin.com/in/mihadkazi1',
  cvPath: '/cv/Kazi-Saqlain-Mihad-CV.pdf',
  // Replace this later with your Google Drive folder containing your certificates.
  credentialDocumentsUrl: 'https://drive.google.com/drive/folders/REPLACE_WITH_YOUR_CREDENTIALS_FOLDER',
} as const

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] satisfies readonly NavItem[]

export const socialLinks = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'Email', href: `mailto:${site.email}` },
] satisfies readonly SocialLink[]
