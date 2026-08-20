"use client";

import { LinearSpread } from "@/components/ui/LinearSpread";

export type ProjectView = {
  id: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

type ProjectsShowcaseProps = {
  projects: ProjectView[];
  highlightsLabel: string;
  stackLabel: string;
  ariaLabel: string;
  prevLabel: string;
  nextLabel: string;
};

export function ProjectsShowcase({
  projects,
  highlightsLabel,
  stackLabel,
  ariaLabel,
  prevLabel,
  nextLabel,
}: ProjectsShowcaseProps) {
  return (
    <LinearSpread
      items={projects}
      ariaLabel={ariaLabel}
      prevLabel={prevLabel}
      nextLabel={nextLabel}
      renderCard={(project, isActive) => (
        <div className="relative aspect-[4/5] bg-gradient-to-b from-zinc-800/80 via-zinc-950 to-black p-5">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(220,38,38,0.12),_transparent_50%)]"
            aria-hidden
          />
          <div className="relative flex h-full flex-col justify-between">
            <span className="inline-flex w-fit rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-300">
              {project.category}
            </span>
            <div>
              <h3
                className={`text-xl font-semibold tracking-tight text-zinc-50 transition-opacity sm:text-2xl ${
                  isActive ? "opacity-100" : "opacity-90"
                }`}
              >
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-400">
                {project.summary}
              </p>
            </div>
          </div>
        </div>
      )}
      renderDetail={(project) => (
        <article className="border-t border-white/[0.08] pt-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#10b981]">
                {project.category}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-300">
                {project.summary}
              </p>

              <div className="mt-8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {highlightsLabel}
                </p>
                <ul className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-7 text-zinc-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10b981]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-6">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {stackLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={`${project.id}-${technology}`}
                      className="border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {project.links.length > 0 ? (
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-[#10b981]/35 bg-[#10b981]/10 px-4 py-3 text-sm font-medium text-emerald-100 transition hover:border-[#10b981]/70 hover:bg-[#10b981]/18 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                    >
                      {link.label}
                      <span className="ml-2" aria-hidden>
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              ) : null}
            </aside>
          </div>
        </article>
      )}
    />
  );
}
