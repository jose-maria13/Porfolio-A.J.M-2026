"use client";

import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";

const navIds = [
  { key: "inicio" as const, hash: "inicio" },
  { key: "sobreMi" as const, hash: "sobre-mi" },
  { key: "experiencia" as const, hash: "experiencia" },
  { key: "proyectos" as const, hash: "proyectos" },
  { key: "certificaciones" as const, hash: "certificaciones" },
];

export function Navbar() {
  const t = useTranslations("nav");

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className="relative mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 rounded-[1.4rem] border border-white/[0.09] bg-zinc-950/55 px-3 shadow-[0_18px_70px_-42px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-2xl backdrop-saturate-150 sm:px-4"
        aria-label={t("ariaLabel")}
      >
        <a
          href="#inicio"
          className="group flex shrink-0 items-center gap-3 rounded-2xl px-1.5 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-xs font-bold text-emerald-200 shadow-[inset_0_0_18px_rgba(16,185,129,0.1)]">
            JM
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-sm font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-[#10b981]">
              {t("brand")}
            </span>
          </span>
          <span className="block text-sm font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-[#10b981] sm:hidden">
            {t("brandShort")}
          </span>
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.035] p-1.5 lg:flex">
          {navIds.map(({ key, hash }) => (
            <li key={hash}>
              <a
                href={`#${hash}`}
                className="block rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition duration-300 hover:bg-white/[0.08] hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex min-w-0 flex-1 items-center justify-start gap-1 overflow-x-auto px-1 py-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
          {navIds.map(({ key, hash }) => (
            <li key={hash} className="shrink-0">
              <a
                href={`#${hash}`}
                className="block whitespace-nowrap rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-2 text-[11px] font-medium text-zinc-400 transition-colors hover:border-white/[0.12] hover:bg-white/[0.06] hover:text-zinc-100 sm:px-3.5 sm:text-sm"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="shrink-0">
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  );
}
