import { getLocale, getTranslations } from "next-intl/server";
import { portfolio } from "@/content/portfolio";

type Locale = "es" | "en";

export async function ProjectsSection() {
  const t = await getTranslations("sections.projects");
  const locale = (await getLocale()) as Locale;
  const projects = portfolio.projects.map((project) => ({
    ...project,
    category: project.category[locale],
    summary: project.summary[locale],
    highlights: project.highlights[locale],
  }));

  return (
    <section
      id="proyectos"
      className="scroll-mt-24 border-t border-zinc-800/60 md:scroll-mt-24"
      aria-labelledby="proyectos-heading"
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#10b981]">
            {t("eyebrow")}
          </p>
          <h2
            id="proyectos-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-zinc-950/50 p-6 shadow-[0_24px_90px_-55px_rgba(16,185,129,0.55)] transition duration-300 hover:-translate-y-1 hover:border-[#10b981]/40 hover:bg-white/[0.045] sm:p-8"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#10b981]/10 blur-3xl transition duration-500 group-hover:bg-[#10b981]/18" />
              <div className="pointer-events-none absolute -bottom-24 left-12 h-48 w-48 rounded-full bg-[#dc2626]/10 blur-3xl transition duration-500 group-hover:bg-[#dc2626]/16" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_0.4fr] lg:items-start">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-zinc-300">
                    {project.summary}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/[0.06] bg-black/20 p-5">
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {t("highlightsLabel")}
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

                <aside className="space-y-5">
                  <div className="rounded-3xl border border-white/[0.07] bg-white/[0.035] p-5">
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {t("stackLabel")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span
                          key={`${project.id}-${technology}`}
                          className="rounded-full border border-[#dc2626]/35 bg-[#dc2626]/[0.08] px-3 py-1.5 text-xs font-medium text-red-100/90 transition duration-200 hover:border-[#dc2626]/80 hover:bg-[#dc2626]/15 hover:shadow-[0_0_18px_rgba(220,38,38,0.35)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.links.length > 0 ? (
                    <div className="flex flex-col gap-3">
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
          ))}
        </div>
      </div>
    </section>
  );
}
