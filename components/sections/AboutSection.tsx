import { getLocale, getTranslations } from "next-intl/server";
import { portfolio } from "@/content/portfolio";

type Locale = "es" | "en";

export async function AboutSection() {
  const t = await getTranslations("sections.about");
  const locale = (await getLocale()) as Locale;
  const timeline = portfolio.about.timeline.map((item) => ({
    ...item,
    period: item.period[locale],
    title: item.title[locale],
    description: item.description[locale],
  }));
  const personalParagraphs = portfolio.about.personal[locale];
  const languages = portfolio.languages.map((language) => ({
    ...language,
    name: language.name[locale],
    level: language.level[locale],
  }));

  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 border-t border-zinc-800/60 bg-[#0a0a0a] md:scroll-mt-24"
      aria-labelledby="sobre-mi-heading"
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#10b981]">
            {t("eyebrow")}
          </p>
          <h2
            id="sobre-mi-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
          >
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="relative">
            <div className="absolute bottom-4 left-[17px] top-4 w-px bg-gradient-to-b from-[#10b981]/70 via-zinc-700 to-[#dc2626]/60" />
            <ol className="space-y-5">
              {timeline.map((item) => (
                <li key={item.id} className="relative pl-12">
                  <span className="absolute left-0 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-950 shadow-[0_0_24px_rgba(16,185,129,0.22)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
                  </span>
                  <article className="group rounded-3xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#10b981]/40 hover:bg-white/[0.055] hover:shadow-[0_24px_70px_-35px_rgba(16,185,129,0.8)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#10b981]">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[2rem] border border-white/[0.07] bg-zinc-950/45 p-6 shadow-[0_24px_90px_-50px_rgba(220,38,38,0.45)] sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-[#dc2626]/70 to-transparent" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                {t("personalLabel")}
              </span>
            </div>
            <div className="space-y-5">
              {personalParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-zinc-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-white/[0.07] pt-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-[#10b981]/70 to-transparent" />
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {t("languagesLabel")}
                </span>
              </div>
              <ul className="space-y-3">
                {languages.map((language) => (
                  <li
                    key={language.id}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-3"
                  >
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-zinc-200">
                        {language.name}
                      </span>
                      <span className="text-xs text-zinc-500">{language.level}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#10b981]/80 to-[#10b981]"
                        style={{ width: `${language.proficiency}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-6 text-zinc-500">
                {t("languagesNote")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
