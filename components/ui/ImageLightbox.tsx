"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { springTransition } from "@/lib/motion";

type ImageLightboxProps = {
  open: boolean;
  src: string;
  alt: string;
  title?: string;
  closeLabel: string;
  onClose: () => void;
};

export function ImageLightbox({
  open,
  src,
  alt,
  title,
  closeLabel,
  onClose,
}: ImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label={closeLabel}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            aria-label={title ? undefined : alt}
            className="relative z-10 flex max-h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#0e1116] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] sm:max-h-[90vh]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={springTransition}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] px-4 py-3 sm:px-5">
              {title ? (
                <p
                  id={titleId}
                  className="min-w-0 truncate text-sm font-medium text-zinc-200"
                >
                  {title}
                </p>
              ) : (
                <span />
              )}
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 sm:h-9 sm:w-9"
                aria-label={closeLabel}
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="relative min-h-[42vh] flex-1 bg-black/40 sm:min-h-[50vh]">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-contain p-2 sm:p-6"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
