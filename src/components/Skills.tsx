import { motion } from 'motion/react'
import { SectionHeading } from './SectionHeading'
import { skills } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          number="05"
          eyebrow="Toolkit"
          title="Skills & technologies"
          description="Tools and technologies reflected in my academic work, projects, and current development experience."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.045, 0.18) }}
              className="skill-panel"
            >
              <h3 className="font-display text-lg font-semibold tracking-[-0.015em] text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
