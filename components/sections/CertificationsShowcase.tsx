"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { LinearSpread } from "@/components/ui/LinearSpread";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

export type CertificationPlatformView = {
  id: string;
  label: string;
};

export type CertificationView = {
  id: string;
  platformId: string;
  title: string;
  year?: string;
  image: string;
  credentialUrl?: string;
};

type CertificationsShowcaseProps = {
  platforms: CertificationPlatformView[];
  certifications: CertificationView[];
  allLabel: string;
  emptyLabel: string;
  emptyHint: string;
  credentialLabel: string;
  previewLabel: string;
  noCredentialLabel: string;
  closePreviewLabel: string;
  spreadAriaLabel: string;
  prevLabel: string;
  nextLabel: string;
};

export function CertificationsShowcase({
  platforms,
  certifications,
  allLabel,
  emptyLabel,
  emptyHint,
  credentialLabel,
  previewLabel,
  noCredentialLabel,
  closePreviewLabel,
  spreadAriaLabel,
  prevLabel,
  nextLabel,
}: CertificationsShowcaseProps) {
  const [platformFilter, setPlatformFilter] = useState<string>("all");
  const [preview, setPreview] = useState<CertificationView | null>(null);

  const visiblePlatforms = useMemo(() => {
    const used = new Set(certifications.map((c) => c.platformId));
    return platforms.filter((p) => used.has(p.id));
  }, [certifications, platforms]);

  const filtered = useMemo(() => {
    if (platformFilter === "all") return certifications;
    return certifications.filter((c) => c.platformId === platformFilter);
  }, [certifications, platformFilter]);

  if (certifications.length === 0) {
    return (
      <div className="rounded-[1.5rem] border border-dashed border-white/15 bg-white/[0.02] px-6 py-14 text-center">
        <p className="text-base font-medium text-zinc-200">{emptyLabel}</p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-zinc-500">
          {emptyHint}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Plataformas"
      >
        <button
          type="button"
          role="tab"
          aria-selected={platformFilter === "all"}
          onClick={() => setPlatformFilter("all")}
          className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition ${
            platformFilter === "all"
              ? "border-[#10b981]/50 bg-[#10b981]/15 text-emerald-100"
              : "border-white/10 bg-transparent text-zinc-400 hover:border-white/20 hover:text-zinc-200"
          }`}
        >
          {allLabel}
        </button>
        {visiblePlatforms.map((platform) => (
          <button
            key={platform.id}
            type="button"
            role="tab"
            aria-selected={platformFilter === platform.id}
            onClick={() => setPlatformFilter(platform.id)}
            className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition ${
              platformFilter === platform.id
                ? "border-[#10b981]/50 bg-[#10b981]/15 text-emerald-100"
                : "border-white/10 bg-transparent text-zinc-400 hover:border-white/20 hover:text-zinc-200"
            }`}
          >
            {platform.label}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <LinearSpread
          key={platformFilter}
          items={filtered}
          ariaLabel={spreadAriaLabel}
          prevLabel={prevLabel}
          nextLabel={nextLabel}
          onActiveClick={(cert) => {
            if (cert.credentialUrl) {
              window.open(cert.credentialUrl, "_blank", "noopener,noreferrer");
              return;
            }
            setPreview(cert);
          }}
          renderCard={(cert, isActive) => (
            <div className="relative aspect-[4/3] bg-zinc-950">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 78vw, 18.5rem"
                className={`object-contain p-2 transition duration-500 ${
                  isActive ? "opacity-100" : "opacity-85"
                }`}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                {cert.year ? (
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                    {cert.year}
                  </p>
                ) : null}
                <h3 className="mt-1 text-lg font-semibold leading-snug tracking-tight text-zinc-50">
                  {cert.title}
                </h3>
                {isActive ? (
                  <p className="mt-2 text-[11px] font-medium text-[#10b981]">
                    {cert.credentialUrl ? `${credentialLabel} ↗` : `${previewLabel} ↗`}
                  </p>
                ) : null}
              </div>
            </div>
          )}
          renderDetail={(cert) => {
            const platform = platforms.find((p) => p.id === cert.platformId);

            return (
              <article className="flex flex-col gap-5 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#10b981]">
                    {platform?.label}
                    {cert.year ? ` · ${cert.year}` : ""}
                  </p>
                  <h3 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                    {cert.title}
                  </h3>
                  {!cert.credentialUrl ? (
                    <p className="mt-3 text-sm text-zinc-500">{noCredentialLabel}</p>
                  ) : null}
                </div>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center justify-center rounded-lg border border-[#10b981]/35 bg-[#10b981]/10 px-5 py-3 text-sm font-medium text-emerald-100 transition hover:border-[#10b981]/70 hover:bg-[#10b981]/18 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                  >
                    {credentialLabel}
                    <span className="ml-2" aria-hidden>
                      ↗
                    </span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setPreview(cert)}
                    className="inline-flex shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-white/30 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                  >
                    {previewLabel}
                  </button>
                )}
              </article>
            );
          }}
        />
      </div>

      <ImageLightbox
        open={Boolean(preview)}
        src={preview?.image ?? ""}
        alt={preview?.title ?? ""}
        title={preview?.title}
        closeLabel={closePreviewLabel}
        onClose={() => setPreview(null)}
      />
    </div>
  );
}
