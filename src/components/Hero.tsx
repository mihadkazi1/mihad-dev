import { motion } from 'motion/react'
import { ArrowDownRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { site } from '../lib/site'

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_78%_22%,rgba(98,130,255,0.12),transparent_28%),radial-gradient(circle_at_18%_12%,rgba(154,92,255,0.08),transparent_24%)]" />
      <div className="absolute left-[-8%] top-48 -z-10 h-56 w-56 rounded-full bg-blue-500/8 blur-3xl" />
      <div className="absolute right-[-8%] top-28 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 sm:px-8 md:pb-28 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:px-10 lg:pb-32">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-300">
            <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
            Building interactive experiences with Unity & modern software tools
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.04, ease: 'easeOut' }} className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            KAZI SAQLAIN MIHAD
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.82, delay: 0.08, ease: 'easeOut' }} className="max-w-3xl font-display text-[clamp(3rem,6.5vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
            Game &amp; AR Developer
            <span className="block bg-gradient-to-r from-sky-200 via-white to-violet-200 bg-clip-text text-transparent">Software Developer</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16, ease: 'easeOut' }} className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            I build interactive 3D experiences, augmented reality applications, and practical software solutions using modern development technologies.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24, ease: 'easeOut' }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="button-primary group">View My Work <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
            <a href={site.cvPath} download className="button-secondary"><Download size={16} /> Download CV</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.34 }} className="mt-9 flex flex-wrap items-center gap-2.5 text-sm text-zinc-500">
            <span className="mr-2 text-xs uppercase tracking-[0.18em] text-zinc-600">Connect</span>
            <a className="social-link" href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
            <a className="social-link" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a className="social-link" href={`mailto:${site.email}`} aria-label="Email"><Mail size={16} /></a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.97, x: 22 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.14, ease: 'easeOut' }} className="relative mx-auto w-full max-w-[570px] lg:justify-self-end">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0d12] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_20%,rgba(107,163,255,0.17),transparent_28%),radial-gradient(circle_at_82%_76%,rgba(164,118,255,0.14),transparent_24%)]" />

            <div className="relative mx-auto aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-[2rem] sm:aspect-[5/6]">
              <img
                src="/images/kazi-saqlain-mihad.webp"
                alt="Portrait of Kazi Saqlain Mihad"
                className="absolute inset-0 size-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090c]/80 via-[#08090c]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-200/90">Game · AR · Software</p>
                    <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">Kazi Saqlain Mihad</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/25 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-md">
                    Unity · C# · AR
                  </div>
                </div>
              </div>
            </div>

            <motion.div animate={{ y: [0, -7, 0, 7, 0], rotate: [0, 1.5, 0, -1.5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-4 top-5 rounded-xl border border-white/10 bg-[#10131a]/88 px-3 py-2.5 font-mono text-[10px] text-zinc-300 shadow-xl backdrop-blur-md sm:left-6 sm:top-7">
              <span className="text-sky-300">&lt;Developer /&gt;</span>
            </motion.div>

            <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-4 top-5 rounded-xl border border-white/10 bg-[#10131a]/88 px-3 py-2.5 font-mono text-[10px] text-zinc-300 shadow-xl backdrop-blur-md sm:right-6 sm:top-7">
              <span className="text-violet-200">interactive</span> · <span className="text-emerald-200">3D</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="divider" />
      </div>
    </section>
  )
}
