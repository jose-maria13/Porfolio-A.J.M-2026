"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { springTransition } from "@/lib/motion";

const locales = ["es", "en"] as const;

export function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("localeSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("label")}
        className="flex min-w-[5.2rem] items-center justify-between gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-200 shadow-[inset_0_0_14px_rgba(255,255,255,0.03)] backdrop-blur-sm transition-colors hover:border-[#10b981]/35 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#10b981]/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] sm:min-w-[6.2rem] sm:text-sm sm:normal-case sm:tracking-normal"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{t(locale as "es" | "en")}</span>
        <motion.span
          aria-hidden
          animate={{ rotate: open ? 180 : 0 }}
          transition={springTransition}
          className="inline-block text-zinc-500"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            role="listbox"
            aria-label={t("label")}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={springTransition}
            className="absolute right-0 z-50 mt-2 min-w-[10rem] origin-top overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/95 p-1 shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            {locales.map((loc) => (
              <button
                key={loc}
                type="button"
                role="option"
                aria-selected={locale === loc}
                className={`block w-full rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-white/[0.06] focus:bg-white/[0.06] focus:outline-none ${
                  locale === loc ? "text-[#10b981]" : "text-zinc-200"
                }`}
                onClick={() => {
                  router.replace(pathname, { locale: loc });
                  setOpen(false);
                }}
              >
                {t(loc)}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
