import { motion } from 'motion/react'
import { Award, ExternalLink, FileBadge } from 'lucide-react'
import { awards } from '../data/awards'
import { certificates } from '../data/certificates'

export function Credentials() {
  return (
    <section id="credentials" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="credentials-grid">
          <div className="credential-column">
            <div className="credential-heading">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300/80">07. Awards</p>
                
              </div>
            </div>

            <div className="grid gap-4">
              {awards.map((award, index) => (
                <motion.article
                  key={award.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.15) }}
                  className="surface-card credential-card credential-card-award"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-11 place-items-center rounded-2xl border border-sky-300/15 bg-sky-300/[0.05] text-sky-200">
                      <Award size={18} />
                    </div>
                    <span className="text-xs font-semibold text-zinc-500">{award.period}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.02em] text-white">{award.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-sky-200/85">{award.organization}</p>
                  <p className="mt-4 text-sm leading-6 text-zinc-500">{award.description}</p>
                  <a
                    href={award.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary mt-6 w-fit !rounded-xl !px-3.5 !py-2.5 text-xs"
                    aria-label={`View award document: ${award.title}`}
                  >
                    <ExternalLink size={14} />
                    View Award
                  </a>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="credential-column">
            <div className="credential-heading">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300/80">08. Certificates</p>
                
                
              </div>
            </div>

            <div className="grid gap-3">
              {certificates.map((certificate, index) => (
                <motion.article
                  key={certificate.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.14) }}
                  className="surface-card certificate-row"
                >
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300">
                    <FileBadge size={17} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-base font-semibold leading-6 tracking-[-0.015em] text-white">{certificate.title}</h3>
                        <p className="mt-1 text-xs font-medium leading-5 text-sky-200/80">{certificate.organization}</p>
                      </div>
                      <span className="shrink-0 text-xs font-semibold text-zinc-500">{certificate.period}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-500">{certificate.description}</p>
                    <a
                      href={certificate.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 transition hover:text-white"
                      aria-label={`View certificate: ${certificate.title}`}
                    >
                      <ExternalLink size={14} />
                      View Certificate
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
