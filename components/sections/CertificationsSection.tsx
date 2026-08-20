import { getLocale, getTranslations } from "next-intl/server";
import { portfolio } from "@/content/portfolio";
import { CertificationsShowcase } from "@/components/sections/CertificationsShowcase";

type Locale = "es" | "en";

export async function CertificationsSection() {
  const t = await getTranslations("sections.certifications");
  const locale = (await getLocale()) as Locale;

  const platforms = portfolio.certificationPlatforms.map((platform) => ({
    id: platform.id,
    label: platform.label[locale],
  }));

  const certifications = portfolio.certifications.map((cert) => ({
    ...cert,
    title: cert.title[locale],
  }));

  return (
    <section
      id="certificaciones"
      className="scroll-mt-24 border-t border-zinc-800/60 md:scroll-mt-24"
      aria-labelledby="certificaciones-heading"
    >
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#10b981]">
            {t("eyebrow")}
          </p>
          <h2
            id="certificaciones-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            {t("description")}
          </p>
        </div>

        <div className="mt-12">
          <CertificationsShowcase
            platforms={platforms}
            certifications={certifications}
            allLabel={t("allLabel")}
            emptyLabel={t("emptyLabel")}
            emptyHint={t("emptyHint")}
            credentialLabel={t("credentialLabel")}
            previewLabel={t("previewLabel")}
            noCredentialLabel={t("noCredentialLabel")}
            closePreviewLabel={t("closePreviewLabel")}
            spreadAriaLabel={t("spreadAriaLabel")}
            prevLabel={t("prevLabel")}
            nextLabel={t("nextLabel")}
          />
        </div>
      </div>
    </section>
  );
}
