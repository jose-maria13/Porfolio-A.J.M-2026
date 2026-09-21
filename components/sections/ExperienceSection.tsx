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
      className="scroll-mt-24 md:scroll-mt-24"
      aria-labelledby="experiencia-heading"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28">
        <div
          className="group/frame relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_90px_-60px_rgba(0,0,0,0.9)] backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#10b981]/35 hover:bg-white/[0.045] hover:shadow-[0_0_0_1px_rgba(16,185,129,0.12),0_28px_80px_-48px_rgba(16,185,129,0.45)] sm:p-8 lg:p-10"
        >
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#10b981]/50 to-transparent opacity-70 transition-opacity duration-300 group-hover/frame:opacity-100"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-px top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[#dc2626]/35 to-transparent opacity-60 transition-opacity duration-300 group-hover/frame:opacity-100"
            aria-hidden
          />

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

          <ol className="mt-12 space-y-6">
            {experiences.map((experience, index) => (
              <li
                key={experience.id}
                className="group grid gap-6 lg:grid-cols-[12rem_1fr] lg:gap-10"
              >
                <div className="relative rounded-3xl border border-white/[0.07] bg-white/[0.025] p-5 lg:pt-5">
                  <p className="text-sm text-zinc-500">{experience.duration}</p>
                  <span className="mt-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.16em] text-[#10b981]">
                    {experience.statusLabel?.[locale] ?? t("roleLabel")}
                  </span>
                  <span className="mt-6 block text-4xl font-semibold tracking-tighter text-white/[0.08]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <article className="rounded-3xl border border-white/[0.08] bg-zinc-950/35 p-5 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#10b981]/35 group-hover:bg-white/[0.05] sm:p-6">
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                    {experience.title}
                  </h3>

                  {experience.url ? (
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#10b981] transition hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                    >
                      {experience.hideUrlPrefix
                        ? (experience.urlLabel ?? experience.url)
                        : `${t("projectLabel")}: ${experience.urlLabel ?? experience.url}`}
                      <span aria-hidden>↗</span>
                    </a>
                  ) : null}

                  <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
                    {experience.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.stack.map((technology) => (
                      <span
                        key={`${experience.id}-${technology}`}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
