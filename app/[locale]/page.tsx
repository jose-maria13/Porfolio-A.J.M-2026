import { getTranslations } from "next-intl/server";
import { portfolio } from "@/content/portfolio";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

type PageProps = {
  params: Promise<{ locale: "es" | "en" }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("home");

  const roles = portfolio.roles.map((role) => ({
    ...role,
    title: role.title[locale],
  }));

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <HeroSection
          greeting={t("heroGreeting", { name: portfolio.name })}
          roles={roles}
          rolesLabel={t("rolesLabel")}
          relatedTechnologiesLabel={t("relatedTechnologiesLabel")}
          ctaLabel={t("ctaViewWork")}
        />

        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
    </>
  );
}
