import { motion } from 'motion/react'
import { ArrowUpRight, ExternalLink, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'
import type { Project } from '../lib/types'

interface ProjectCardProps {
  project: Project
  index: number
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const initials = project.title.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('')

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.16) }}
      className="project-card-compact group"
    >
      <div className="project-media">
        {project.image && !imageFailed ? (
          <img
            src={project.image}
            alt={project.alt ?? `${project.title} screenshot`}
            loading={index < 3 ? 'eager' : 'lazy'}
            onError={() => setImageFailed(true)}
            className="size-full object-cover object-center transition duration-500 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="project-fallback" aria-hidden="true"><span>{initials}</span></div>
        )}
        <div className="project-media-overlay" />
        {project.featured ? <span className="project-featured">Featured</span> : null}
        {project.year ? <span className="project-year">{project.year}</span> : null}
      </div>

      <div className="project-card-body">
        <button
          type="button"
          className="project-title-button"
          onClick={() => onOpen(project)}
          aria-label={`View details for ${project.title}`}
        >
          <span>
            <span className="project-category">{project.category}</span>
            <span className="mt-2 block font-display text-xl font-semibold tracking-[-0.025em] text-white">{project.title}</span>
          </span>
          <span className="project-open-icon"><ArrowUpRight size={17} /></span>
        </button>

        <p className="mt-2 text-sm leading-6 text-zinc-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => <span key={technology} className="chip chip-muted">{technology}</span>)}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.github ? <a className="project-action" href={project.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a> : null}
          {project.demo ? <a className="project-action" href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Prototype</a> : null}
          {project.linkedinPost ? <a className="project-action" href={project.linkedinPost} target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn Post</a> : null}
          <button type="button" className="project-more" onClick={() => onOpen(project)}>View details <ArrowUpRight size={14} /></button>
        </div>
      </div>
    </motion.article>
  )
}
