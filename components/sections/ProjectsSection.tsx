import { getLocale, getTranslations } from "next-intl/server";
import { portfolio } from "@/content/portfolio";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";

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
      className="scroll-mt-24 md:scroll-mt-24"
      aria-labelledby="proyectos-heading"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28">
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
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-4 shadow-[0_24px_90px_-60px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:p-6">
          <ProjectsShowcase
            projects={projects}
            highlightsLabel={t("highlightsLabel")}
            stackLabel={t("stackLabel")}
            ariaLabel={t("spreadAriaLabel")}
            prevLabel={t("prevLabel")}
            nextLabel={t("nextLabel")}
          />
        </div>
      </div>
    </section>
  );
}
