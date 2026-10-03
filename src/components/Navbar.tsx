import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, site } from '../lib/site'
import { useActiveSection } from '../hooks/useActiveSection'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navItems.map((item) => item.href.slice(1)))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
    return () => document.body.classList.remove('overflow-hidden')
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" onClick={close} className="group flex items-center gap-3" aria-label={`${site.brand} home`}>
          <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] font-display text-sm font-bold text-white transition group-hover:border-sky-300/30 group-hover:bg-white/[0.07]">KM</span>
          <span className="hidden font-display text-sm font-semibold tracking-[0.18em] text-zinc-100 sm:inline">MIHAD</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const id = item.href.slice(1)
            const isActive = active === id
            return (
              <a key={item.href} href={item.href} className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-100'}`}>
                {isActive ? <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.06]" transition={{ type: 'spring', stiffness: 420, damping: 32 }} /> : null}
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="#contact" className="button-primary !px-4 !py-2.5 text-sm">Let’s Talk <span aria-hidden>↗</span></a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-100" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div id="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.24 }} className="overflow-hidden border-t border-white/10 bg-[#0a0b0f]/95 backdrop-blur-xl lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8" aria-label="Mobile navigation">
              {navItems.map((item) => <a key={item.href} href={item.href} onClick={close} className="rounded-xl px-3 py-3 text-base text-zinc-300 hover:bg-white/[0.05] hover:text-white">{item.label}</a>)}
              <a href="#contact" onClick={close} className="button-primary mt-3 justify-center">Let’s Talk <span aria-hidden>↗</span></a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
