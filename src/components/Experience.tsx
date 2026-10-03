import { motion } from 'motion/react'
import { BriefcaseBusiness, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading number="04" eyebrow="Experience" title="Work that shaped the current direction." description="Professional experience focused on game development and augmented reality." />

        <div className="relative">
          <div className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-sky-300/30 via-white/10 to-transparent" />
          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.article key={item.role + item.company} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: index * 0.08 }} className="relative pl-14">
                <div className="absolute left-0 top-2 grid size-10 place-items-center rounded-2xl border border-white/10 bg-[#0b0d12] text-zinc-300 shadow-lg">
                  <BriefcaseBusiness size={17} />
                </div>
                <div className="surface-card p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{item.role}</h3>
                        {item.current ? <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-200">Current</span> : null}
                      </div>
                      <p className="mt-2 text-sm text-sky-200/85">{item.company}{item.location ? ` · ${item.location}` : ''}</p>
                    </div>
                    <span className="shrink-0 text-sm font-medium text-zinc-500">{item.period}</span>
                  </div>
                  <div className="mt-6 space-y-3">
                    {item.description.map((description) => (
                      <div key={description} className="flex gap-3 text-sm leading-7 text-zinc-400">
                        <CheckCircle2 size={17} className="mt-1 shrink-0 text-zinc-600" />
                        <span>{description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
