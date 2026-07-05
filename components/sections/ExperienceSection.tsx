import { getLocale, getTranslations } from "next-intl/server";
import { portfolio } from "@/content/portfolio";

type Locale = "es" | "en";

export async function ExperienceSection() {
  const t = await getTranslations("sections.experience");
  const locale = (await getLocale()) as Locale;
  const experiences = portfolio.experiences.map((experience) => ({
    ...experience,
    title: experience.title[locale],
    duration: experience.duration[locale],
    description: experience.description[locale],
  }));

  return (
    <section
      id="experiencia"
      className="scroll-mt-24 border-t border-zinc-800/60 bg-[#0a0a0a] md:scroll-mt-24"
      aria-labelledby="experiencia-heading"
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#dc2626]">
            {t("eyebrow")}
          </p>
          <h2
            id="experiencia-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
          >
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-zinc-950/50 p-6 shadow-[0_24px_90px_-55px_rgba(16,185,129,0.65)] transition duration-300 hover:-translate-y-1 hover:border-[#10b981]/40 hover:bg-white/[0.045] sm:p-8"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#10b981]/10 blur-3xl transition duration-500 group-hover:bg-[#10b981]/18" />
              <div className="pointer-events-none absolute -bottom-24 left-12 h-48 w-48 rounded-full bg-[#dc2626]/10 blur-3xl transition duration-500 group-hover:bg-[#dc2626]/16" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-start">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100">
                      {experience.statusLabel?.[locale] ?? t("roleLabel")}
                    </span>
                    <span className="text-sm text-zinc-500">
                      {experience.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                    {experience.title}
                  </h3>

                  {experience.url ? (
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#10b981] transition hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                    >
                      {experience.hideUrlPrefix
                        ? experience.urlLabel ?? experience.url
                        : `${t("projectLabel")}: ${experience.urlLabel ?? experience.url}`}
                      <span aria-hidden>↗</span>
                    </a>
                  ) : null}

                  <div className="mt-6 rounded-2xl border border-white/[0.06] bg-black/20 p-5">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {t("descriptionLabel")}
                    </p>
                    <p className="text-base leading-8 text-zinc-300">
                      {experience.description}
                    </p>
                  </div>
                </div>

                <aside className="rounded-3xl border border-white/[0.07] bg-white/[0.035] p-5">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    {t("stackLabel")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.stack.map((technology) => (
                      <span
                        key={`${experience.id}-${technology}`}
                        className="rounded-full border border-[#dc2626]/35 bg-[#dc2626]/[0.08] px-3 py-1.5 text-xs font-medium text-red-100/90 transition duration-200 hover:border-[#dc2626]/80 hover:bg-[#dc2626]/15 hover:shadow-[0_0_18px_rgba(220,38,38,0.35)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </aside>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
