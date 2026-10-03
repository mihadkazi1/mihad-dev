import { AnimatePresence, motion } from 'motion/react'
import { ExternalLink, Github, Linkedin, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { Project } from '../lib/types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setImageFailed(false), [project])

  useEffect(() => {
    if (!project) return
    closeButtonRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose, project])

  useEffect(() => {
    if (!project) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [project])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="project-modal-backdrop"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => { if (event.currentTarget === event.target) onClose() }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="project-modal"
          >
            <div className="sticky right-0 top-0 z-10 flex justify-end p-4">
              <button ref={closeButtonRef} onClick={onClose} className="modal-close" aria-label="Close project details"><X size={18} /></button>
            </div>
            <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="p-5 pt-0 sm:p-7 sm:pt-0 lg:p-8 lg:pt-0">
                <div className="project-modal-media">
                  {project.image && !imageFailed ? <img src={project.image} alt={project.alt ?? `${project.title} screenshot`} className="size-full object-cover" loading="eager" onError={() => setImageFailed(true)} /> : <ProjectFallback project={project} />}
                </div>
              </div>
              <div className="p-5 pt-0 sm:p-7 sm:pt-0 lg:p-9 lg:pt-0">
                <div className="mb-4 flex flex-wrap items-center gap-2"><span className="eyebrow-pill">{project.category}</span>{project.year ? <span className="eyebrow-pill">{project.year}</span> : null}</div>
                <h3 id="project-modal-title" className="font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">{project.title}</h3>
                <p className="mt-5 text-base leading-7 text-zinc-400">{project.details}</p>
                <div className="mt-7">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">Highlights</p>
                  <div className="grid gap-2 sm:grid-cols-2">{project.highlights.map((highlight) => <div key={highlight} className="modal-highlight">{highlight}</div>)}</div>
                </div>
                <div className="mt-7">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">Tech</p>
                  <div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="chip">{technology}</span>)}</div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.github ? <a className="button-secondary" href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a> : null}
                  {project.demo ? <a className="button-primary" href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Prototype</a> : null}
                  {project.linkedinPost ? <a className="button-secondary" href={project.linkedinPost} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn Post</a> : null}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function ProjectFallback({ project }: { project: Project }) {
  return (
    <div className="project-fallback project-fallback-modal" aria-label={`${project.title} project visual placeholder`}>
      <div><span>{project.title.split(' ').map((word) => word[0]).slice(0, 2).join('')}</span><p>Project visual will appear here.</p></div>
    </div>
  )
}
