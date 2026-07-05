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
        className="flex min-w-[6.75rem] items-center justify-between gap-2 rounded-full border border-white/[0.08] bg-zinc-950/80 px-3.5 py-2.5 text-sm font-medium text-zinc-200 shadow-sm backdrop-blur-sm transition-colors hover:border-zinc-600 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#10b981]/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] sm:min-w-[7.5rem]"
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
            className="absolute right-0 z-50 mt-1.5 min-w-[10rem] origin-top overflow-hidden rounded-lg border border-zinc-700/90 bg-zinc-900/95 py-1 shadow-xl shadow-black/40 backdrop-blur-md"
          >
            {locales.map((loc) => (
              <button
                key={loc}
                type="button"
                role="option"
                aria-selected={locale === loc}
                className={`block w-full px-3 py-2 text-left text-sm transition-colors hover:bg-zinc-800/90 focus:bg-zinc-800/90 focus:outline-none ${
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
