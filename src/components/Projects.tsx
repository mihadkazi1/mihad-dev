import { useMemo, useState } from 'react'
import { Github } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import { projects } from '../data/projects'
import type { Project, ProjectCategory } from '../lib/types'

const filters: Array<'All' | ProjectCategory> = [
  'All',
  'Game Development',
  'Augmented Reality',
  'Software Development',
  'AI / ML',
  'Web Development',
  'Portfolio',
]

type Filter = (typeof filters)[number]

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const visibleProjects = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => project.category === filter),
    [filter],
  )

  return (
    <section id="work" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Projects"
          number="03"
          title="Selected projects across game, AR, and software development."
          description="A focused collection of games, AR experiences, mobile applications, AI systems, and web projects."
          action={<a href="https://github.com/mihadkazi1" target="_blank" rel="noreferrer" className="button-secondary"><Github size={16} /> More on GitHub <span aria-hidden>↗</span></a>}
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`filter-pill ${filter === item ? 'filter-pill-active' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
