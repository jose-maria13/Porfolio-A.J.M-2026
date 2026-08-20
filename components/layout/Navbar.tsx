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
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-xl backdrop-saturate-150">
      <nav
        className="relative mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-8"
        aria-label={t("ariaLabel")}
      >
        <a
          href="#inicio"
          className="group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          <span className="hidden text-sm font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-[#10b981] sm:block sm:text-base">
            {t("brand")}
          </span>
          <span className="block text-sm font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-[#10b981] sm:hidden">
            {t("brandShort")}
          </span>
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1.5 md:flex">
          {navIds.map(({ key, hash }) => (
            <li key={hash}>
              <a
                href={`#${hash}`}
                className="block rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/[0.07] hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex min-w-0 flex-1 items-center justify-start gap-0.5 overflow-x-auto px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {navIds.map(({ key, hash }) => (
            <li key={hash} className="shrink-0">
              <a
                href={`#${hash}`}
                className="block whitespace-nowrap rounded-full px-2.5 py-2 text-[11px] font-medium text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-zinc-100 sm:px-3.5 sm:text-sm"
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
