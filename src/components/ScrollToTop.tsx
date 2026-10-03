import { motion, useScroll } from 'motion/react'

export function ScrollToTop() {
  const { scrollYProgress } = useScroll()
  return <motion.div className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-sky-300 via-violet-300 to-sky-200" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
}
