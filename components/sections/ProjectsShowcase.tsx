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

function ProjectFolderPreview({ title }: { title: string }) {
  return (
    <div
      className="group/folder relative mx-auto mb-4 flex h-20 w-32 cursor-default items-end justify-center [perspective:1500px] sm:h-24 sm:w-36"
      aria-hidden
    >
      <div className="absolute inset-1 origin-bottom rounded-2xl bg-zinc-500/80 transition duration-300 group-hover/folder:[transform:rotateX(-18deg)]" />
      <div className="absolute inset-1 origin-bottom rounded-2xl bg-zinc-300/90 transition duration-300 group-hover/folder:[transform:rotateX(-29deg)]" />
      <div className="absolute inset-1 origin-bottom rounded-2xl bg-zinc-100/95 transition duration-300 group-hover/folder:[transform:rotateX(-38deg)]" />
      <div className="absolute bottom-0 h-[76px] w-full origin-bottom rounded-2xl rounded-tr-md bg-gradient-to-t from-amber-600 to-amber-400 shadow-[inset_0_18px_28px_rgba(251,191,36,0.24),0_12px_34px_rgba(0,0,0,0.3)] transition duration-300 before:absolute before:-top-2 before:right-[104px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%)] after:absolute after:bottom-[99%] after:right-0 after:h-3 after:w-28 after:rounded-t-2xl after:bg-amber-400 group-hover/folder:[transform:rotateX(-42deg)_translateY(1px)] sm:h-[88px] sm:before:right-[116px] sm:after:w-32" />
      <span className="relative z-10 mb-4 max-w-24 truncate text-center text-[8px] font-bold uppercase tracking-[0.16em] text-amber-950/70 sm:max-w-28 sm:text-[9px]">
        {title}
      </span>
    </div>
  );
}

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
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-zinc-800/80 via-zinc-950 to-black p-4 sm:p-4">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(220,38,38,0.12),_transparent_50%)]"
            aria-hidden
          />
          <div className="relative flex h-full flex-col justify-between">
            <span className="inline-flex w-fit max-w-full truncate rounded-md border border-white/10 bg-black/30 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-zinc-300 sm:text-[9px]">
              {project.category}
            </span>
            <ProjectFolderPreview title={project.title} />
            <div>
              <h3
                className={`text-lg font-semibold tracking-tight text-zinc-50 transition-opacity sm:text-xl ${
                  isActive ? "opacity-100" : "opacity-90"
                }`}
              >
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-400 sm:text-sm sm:leading-6">
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
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300"
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
                      className="inline-flex items-center justify-center rounded-2xl border border-[#10b981]/35 bg-gradient-to-b from-[#10b981]/18 to-[#052e25]/35 px-4 py-3 text-sm font-bold text-emerald-50 shadow-[0_14px_32px_rgba(0,0,0,0.28),inset_0_0_16px_rgba(16,185,129,0.1)] transition duration-300 hover:-translate-y-0.5 hover:border-[#10b981]/70 hover:shadow-[0_18px_44px_rgba(16,185,129,0.22),inset_0_0_20px_rgba(16,185,129,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
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
