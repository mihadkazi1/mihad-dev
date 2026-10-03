import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: string
  action?: ReactNode
  number?: string
}

export function SectionHeading({ eyebrow, title, description, action, number }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300/80">{number ? `${number}. ` : ''}{eyebrow}</p>
        <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{title}</h2>
        {description ? <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
