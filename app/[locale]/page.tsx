import { getTranslations } from "next-intl/server";
import { portfolio } from "@/content/portfolio";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingContactButton } from "@/components/layout/FloatingContactButton";
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
          greetingLine1={t("heroGreetingLine1")}
          greetingLine2={t("heroGreetingLine2", { name: portfolio.name })}
          heroSubtitle={t("heroSubtitle")}
          roles={roles}
          rolesLabel={t("rolesLabel")}
          relatedTechnologiesLabel={t("relatedTechnologiesLabel")}
          ctaLabel={t("ctaViewWork")}
          cvLabel={t("ctaViewCv")}
        />

        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <FloatingContactButton links={portfolio.contact} />
    </>
  );
}
