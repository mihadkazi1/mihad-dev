import { motion } from 'motion/react'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { site } from '../lib/site'

export function Contact() {
  return (
    <section id="contact" className="section-shell pb-8 sm:pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading number="10" eyebrow="Contact" title="Let’s build something meaningful." description="I’m open to opportunities, collaborations, and interesting projects across game development, augmented reality, and software development." />

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="surface-card relative overflow-hidden p-7 sm:p-9 lg:p-11">
          <div className="absolute right-[-10%] top-[-25%] h-72 w-72 rounded-full bg-sky-300/8 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl">For game, AR, mobile, or software work — let’s talk.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="button-primary" href={`mailto:${site.email}`}><Mail size={16} /> Email Me</a>
                <a className="button-secondary" href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
                <a className="button-secondary" href={site.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a href={`mailto:${site.email}`} className="contact-row"><div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]"><Mail size={16} /></div><div className="min-w-0 flex-1"><p className="text-xs uppercase tracking-[0.18em] text-zinc-600">Email</p><p className="mt-1 truncate text-sm text-zinc-200">{site.email}</p></div><ArrowUpRight size={15} /></a>
              <div className="contact-row"><div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]"><Phone size={16} /></div><div className="min-w-0 flex-1"><p className="text-xs uppercase tracking-[0.18em] text-zinc-600">Phone</p><p className="mt-1 text-sm text-zinc-200">{site.phone}</p></div></div>
              <div className="contact-row"><div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]"><MapPin size={16} /></div><div className="min-w-0 flex-1"><p className="text-xs uppercase tracking-[0.18em] text-zinc-600">Location</p><p className="mt-1 text-sm text-zinc-200">{site.location}</p></div></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
