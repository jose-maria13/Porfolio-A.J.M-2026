"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { springTransition } from "@/lib/motion";
import type { ContactLink } from "@/content/types";

type FloatingContactButtonProps = {
  links: ContactLink[];
};

const emojiByContact: Record<ContactLink["id"], string> = {
  gmail: "📧",
  linkedin: "💼",
  github: "🐙",
};

const accentByContact: Record<ContactLink["id"], string> = {
  gmail: "bg-[#ea4335]/15 text-red-100 border-[#ea4335]/40",
  linkedin: "bg-[#0a66c2]/15 text-sky-100 border-[#0a66c2]/45",
  github: "bg-zinc-800/80 text-zinc-100 border-zinc-600/70",
};

export function FloatingContactButton({ links }: FloatingContactButtonProps) {
  const t = useTranslations("contactFloating");
  const [open, setOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<ContactLink["id"] | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const copyToClipboard = async (link: ContactLink) => {
    await navigator.clipboard.writeText(link.value);
    setCopiedId(link.id);
    window.setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div
      ref={rootRef}
      className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={springTransition}
            className="w-[min(calc(100vw-2.5rem),22rem)] overflow-hidden rounded-3xl border border-white/[0.09] bg-zinc-950/95 p-4 shadow-[0_24px_90px_-35px_rgba(0,0,0,0.9),0_0_50px_-28px_rgba(16,185,129,0.9)] backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/[0.07] pb-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#10b981]">
                  {t("eyebrow")}
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  {t("title")} 👋
                </p>
              </div>
              <button
                type="button"
                aria-label={t("closeLabel")}
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/[0.08] px-2.5 py-1 text-xs text-zinc-400 transition hover:border-zinc-600 hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60"
              >
                ESC
              </button>
            </div>

            <div className="grid gap-3">
              {links.map((link) => (
                <div
                  key={link.id}
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 transition duration-200 hover:-translate-y-0.5 hover:border-[#10b981]/45 hover:bg-white/[0.06]"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-xl transition group-hover:scale-105 ${accentByContact[link.id]}`}
                    aria-hidden
                  >
                    {emojiByContact[link.id]}
                  </span>

                  <a
                    href={link.href}
                    target={link.id === "gmail" ? undefined : "_blank"}
                    rel={link.id === "gmail" ? undefined : "noreferrer"}
                    className="min-w-0 flex-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60"
                  >
                    <span className="block text-sm font-semibold text-zinc-100">
                      {link.label}
                    </span>
                    <span className="block truncate text-xs text-zinc-500">
                      {link.value}
                    </span>
                  </a>

                  {link.id === "gmail" ? (
                    <button
                      type="button"
                      aria-label={t("copyEmailLabel")}
                      onClick={() => void copyToClipboard(link)}
                      className="shrink-0 rounded-full border border-[#10b981]/25 bg-[#10b981]/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-100 transition hover:border-[#10b981]/70 hover:bg-[#10b981]/18 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60"
                    >
                      {copiedId === link.id ? t("copiedLabel") : t("copyLabel")}
                    </button>
                  ) : (
                    <span
                      className="shrink-0 text-base transition group-hover:scale-110"
                      aria-hidden
                    >
                      {link.id === "linkedin" ? "🔗" : "🚀"}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        aria-expanded={open}
        aria-label={t("buttonLabel")}
        onClick={() => setOpen((current) => !current)}
        className="group inline-flex items-center gap-3 rounded-full border border-[#10b981]/35 bg-zinc-950/90 px-4 py-3 text-sm font-semibold text-zinc-100 shadow-[0_18px_60px_-24px_rgba(16,185,129,0.95)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#10b981]/70 hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-35" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-[#10b981]" />
        </span>
        {t("buttonText")} 💬
      </button>
    </div>
  );
}
