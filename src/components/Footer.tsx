import { Github, Linkedin, Mail } from 'lucide-react'
import { site } from '../lib/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-7 text-sm sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-display font-semibold text-zinc-100">Kazi Saqlain Mihad</p>
          <p className="mt-1 text-zinc-600">Game &amp; AR Developer | Software Developer</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href={site.github} target="_blank" rel="noreferrer" className="footer-link"><Github size={15} /> GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="footer-link"><Linkedin size={15} /> LinkedIn</a>
          <a href={`mailto:${site.email}`} className="footer-link"><Mail size={15} /> Email</a>
          <span className="hidden h-4 w-px bg-white/10 sm:block" />
          <span className="text-zinc-700">© 2026 Kazi Saqlain Mihad</span>
        </div>
      </div>
    </footer>
  )
}
