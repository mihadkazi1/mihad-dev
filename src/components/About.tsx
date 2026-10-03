import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { ArrowUpRight, Code2, Gamepad2, MapPin } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { site } from '../lib/site'

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="About"
          number="01"
          title="Building where software becomes interactive."
          description="My work sits between game development, augmented reality, and practical software engineering — with Unity and C# at the center of the interactive side."
        />

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="surface-card p-7 sm:p-9">
            <p className="max-w-4xl text-base leading-8 text-zinc-300 sm:text-lg">
              I’m a Computer Science and Engineering student focused on Game Development, Augmented Reality, and Software Development. My portfolio is built around practical projects: interactive 3D games, educational AR experiences, mobile software, AI/ML experiments, and web applications.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
              I enjoy turning a rough idea into a working system — shaping mechanics, interfaces, interactions, and the small details that make a technical project feel complete.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Unity', 'C#', 'Augmented Reality', 'React', 'Python', 'Interactive 3D'].map((item) => <span key={item} className="chip">{item}</span>)}
            </div>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <InfoCard icon={<MapPin size={18} />} label="Based in" value={site.location} />
            <InfoCard icon={<Gamepad2 size={18} />} label="Primary direction" value="Game & AR Development" />
            <InfoCard icon={<Code2 size={18} />} label="Current focus" value="Unity, C#, interactive systems" />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="surface-card flex items-start gap-4 p-6">
      <div className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-300">{icon}</div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600">{label}</p>
        <p className="mt-1 text-sm leading-6 text-zinc-200">{value}</p>
      </div>
      <ArrowUpRight size={15} className="mt-1 text-zinc-700" aria-hidden="true" />
    </motion.div>
  )
}
