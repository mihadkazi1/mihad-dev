import { motion } from 'motion/react'
import { GraduationCap } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { education } from '../data/education'

export function Education() {
  return (
    <section id="education" className="section-shell !pt-6">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading number="06" eyebrow="Education" title="The academic foundation." />
        <div className="grid gap-4">
          {education.map((item, index) => (
            <motion.article key={item.institution} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.07 }} className="surface-card grid gap-5 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:p-6 lg:p-7">
              <div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-300"><GraduationCap size={20} /></div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{item.institution}</h3>
                <p className="mt-1 text-sm font-medium text-sky-200/85">{item.qualification}</p>
                {item.details.length ? <div className="mt-4 flex flex-wrap gap-2">{item.details.map((detail) => <span key={detail} className="chip chip-muted">{detail}</span>)}</div> : null}
              </div>
              <div className="sm:text-right">
                <p className="text-sm text-zinc-500">{item.period}</p>
                {item.metric ? <p className="mt-2 text-sm font-semibold text-zinc-200">{item.metric}</p> : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
