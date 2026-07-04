import { getTranslations } from "next-intl/server";

export async function ProjectsSection() {
  const t = await getTranslations("sections.projects");

  return (
    <section
      id="proyectos"
      className="scroll-mt-20 border-t border-zinc-800/60 md:scroll-mt-16"
      aria-labelledby="proyectos-heading"
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
        <h2
          id="proyectos-heading"
          className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
        >
          {t("title")}
        </h2>
      </div>
    </section>
  );
}
