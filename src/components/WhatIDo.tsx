import { motion } from 'motion/react'
import { Boxes, Code2, ScanLine } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const items = [
  {
    number: '01',
    title: 'Game Development',
    description: 'Designing interactive 3D gameplay systems in Unity with a focus on movement, mechanics, UI, level progression, and player feedback.',
    icon: Boxes,
    tags: ['Unity', 'C#', '3D Development', 'Gameplay Mechanics', 'UI', 'Level Progression'],
  },
  {
    number: '02',
    title: 'Augmented Reality',
    description: 'Building mobile AR experiences that connect real-world image targets with interactive educational 3D content.',
    icon: ScanLine,
    tags: ['Unity', 'Vuforia Engine', 'Android', 'Image Targets', 'Interactive 3D', 'Educational AR'],
  },
  {
    number: '03',
    title: 'Software Development',
    description: 'Creating practical mobile and web applications with modern frontend tooling, backend fundamentals, databases, and ML experimentation.',
    icon: Code2,
    tags: ['React', 'TypeScript', 'JavaScript', 'React Native', 'Firebase', 'MySQL'],
  },
]

export function WhatIDo() {
  return (
    <section id="what-i-do" className="section-shell !pt-0">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading number="02" eyebrow="What I Do" title="Three lanes. One technical mindset." description="My work is strongest where engineering and interaction meet." />
        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: index * 0.07 }} className="surface-card group relative overflow-hidden p-7 sm:p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="mb-10 flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-200 transition duration-300 group-hover:border-sky-300/20 group-hover:bg-sky-300/[0.07] group-hover:text-sky-100"><Icon size={21} /></div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-zinc-700">{item.number}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                <p className="mt-4 min-h-[100px] text-sm leading-7 text-zinc-400">{item.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <span key={tag} className="chip chip-muted">{tag}</span>)}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
