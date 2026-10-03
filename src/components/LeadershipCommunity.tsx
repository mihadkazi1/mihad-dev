import { motion } from 'motion/react'
import { BadgeCheck, Building2, HeartHandshake, PenLine, ShieldCheck, Users } from 'lucide-react'
import { leadership } from '../data/leadership'

const iconMap = {
  users: Users,
  badge: BadgeCheck,
  campus: Building2,
  writer: PenLine,
  shield: ShieldCheck,
  heart: HeartHandshake,
} as const

export function LeadershipCommunity() {
  return (
    <section id="leadership" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300/80">09. Leadership &amp; Community</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">Beyond the work I build, I stay involved in leadership, community, and continuous growth.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {leadership.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.article
                key={`${item.title}-${item.organization}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.18) }}
                className="surface-card p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-300">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-semibold text-zinc-500">{item.period}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-sky-200/85">{item.organization}</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-500">
                  {item.description.map((point) => <li key={point} className="flex gap-2"><span className="mt-[0.65rem] size-1.5 shrink-0 rounded-full bg-sky-300/80" />{point}</li>)}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
