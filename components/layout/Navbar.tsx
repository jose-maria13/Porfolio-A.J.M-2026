"use client";

import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";

const navIds = [
  { key: "inicio" as const, hash: "inicio" },
  { key: "sobreMi" as const, hash: "sobre-mi" },
  { key: "experiencia" as const, hash: "experiencia" },
  { key: "proyectos" as const, hash: "proyectos" },
];

export function Navbar() {
  const t = useTranslations("nav");

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#0a0a0a]/65 backdrop-blur-xl backdrop-saturate-150">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-8"
        aria-label={t("ariaLabel")}
      >
        <a
          href="#inicio"
          className="shrink-0 font-mono text-sm font-semibold tracking-[0.12em] text-zinc-100 transition-colors hover:text-[#10b981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          {t("brand")}
        </a>

        <ul className="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto py-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2 [&::-webkit-scrollbar]:hidden">
          {navIds.map(({ key, hash }) => (
            <li key={hash} className="shrink-0">
              <a
                href={`#${hash}`}
                className="rounded-md px-2 py-2 text-xs text-zinc-400 transition-colors hover:text-zinc-100 sm:px-2.5 sm:text-sm"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="shrink-0 border-l border-white/[0.06] pl-3 sm:pl-4">
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  );
}
