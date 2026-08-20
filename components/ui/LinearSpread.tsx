"use client";

import {
  useCallback,
  useId,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { springTransition } from "@/lib/motion";

export type LinearSpreadItem = {
  id: string;
};

type LinearSpreadProps<T extends LinearSpreadItem> = {
  items: T[];
  renderCard: (item: T, isActive: boolean) => ReactNode;
  renderDetail?: (item: T) => ReactNode;
  onActiveClick?: (item: T) => void;
  className?: string;
  ariaLabel: string;
  prevLabel?: string;
  nextLabel?: string;
  initialIndex?: number;
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d={
          direction === "left"
            ? "M10 3.5L5.5 8L10 12.5"
            : "M6 3.5L10.5 8L6 12.5"
        }
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function useIsMobile(breakpointPx = 640) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const media = window.matchMedia(`(max-width: ${breakpointPx}px)`);
      media.addEventListener("change", onStoreChange);
      return () => media.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(`(max-width: ${breakpointPx}px)`).matches,
    () => false,
  );
}

export function LinearSpread<T extends LinearSpreadItem>({
  items,
  renderCard,
  renderDetail,
  onActiveClick,
  className = "",
  ariaLabel,
  prevLabel = "Anterior",
  nextLabel = "Siguiente",
  initialIndex = 0,
}: LinearSpreadProps<T>) {
  const labelId = useId();
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.min(Math.max(initialIndex, 0), Math.max(items.length - 1, 0)),
  );

  const goTo = useCallback(
    (index: number) => {
      if (items.length === 0) return;
      const next = ((index % items.length) + items.length) % items.length;
      setActiveIndex(next);
    },
    [items.length],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      goTo(activeIndex + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      goTo(items.length - 1);
    }
  };

  if (items.length === 0) return null;

  const safeIndex = Math.min(activeIndex, items.length - 1);
  const activeItem = items[safeIndex];
  const count = items.length;
  const showArrows = count > 1;
  const nearStep = isMobile ? 58 : 110;
  const farStep = isMobile ? 88 : 160;

  return (
    <div className={className}>
      <div
        role="listbox"
        aria-labelledby={labelId}
        aria-activedescendant={`${labelId}-option-${activeItem.id}`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="relative outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
      >
        <span id={labelId} className="sr-only">
          {ariaLabel}
        </span>

        <div className="relative mx-auto max-w-5xl">
          <div className="relative mx-auto flex h-[min(62vw,17.5rem)] items-center justify-center overflow-hidden px-11 sm:h-[22rem] sm:overflow-visible sm:px-14">
            {items.map((item, index) => {
              const offset = index - safeIndex;
              const abs = Math.abs(offset);
              const isActive = offset === 0;
              const x =
                offset * (abs === 0 ? 0 : abs === 1 ? nearStep : farStep);
              const scale = isActive ? 1 : abs === 1 ? 0.86 : 0.74;
              const opacity = isActive
                ? 1
                : abs === 1
                  ? isMobile
                    ? 0.4
                    : 0.65
                  : abs === 2
                    ? isMobile
                      ? 0
                      : 0.28
                    : 0;
              const zIndex = count - abs;

              return (
                <motion.div
                  key={item.id}
                  id={`${labelId}-option-${item.id}`}
                  role="option"
                  aria-selected={isActive}
                  className="absolute w-[min(70vw,15.5rem)] sm:w-[20rem]"
                  style={{ zIndex }}
                  initial={false}
                  animate={{
                    x,
                    scale,
                    opacity,
                    filter:
                      isActive
                        ? "blur(0px)"
                        : abs > 1
                          ? "blur(1px)"
                          : "blur(0px)",
                  }}
                  transition={springTransition}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (isActive && onActiveClick) {
                        onActiveClick(item);
                        return;
                      }
                      goTo(index);
                    }}
                    className={`group block w-full overflow-hidden rounded-[1.35rem] border text-left transition-[border-color,box-shadow] duration-300 ${
                      isActive
                        ? "border-white/20 bg-zinc-900/90 shadow-[0_28px_80px_-40px_rgba(16,185,129,0.55)]"
                        : "border-white/[0.08] bg-zinc-950/80 hover:border-white/16"
                    }`}
                  >
                    {renderCard(item, isActive)}
                  </button>
                </motion.div>
              );
            })}
          </div>

          {showArrows ? (
            <>
              <button
                type="button"
                aria-label={prevLabel}
                onClick={() => goTo(safeIndex - 1)}
                className="absolute left-0 top-1/2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-zinc-950/90 text-zinc-200 shadow-lg backdrop-blur transition hover:border-[#10b981]/45 hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 sm:left-1 sm:h-11 sm:w-11"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                aria-label={nextLabel}
                onClick={() => goTo(safeIndex + 1)}
                className="absolute right-0 top-1/2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-zinc-950/90 text-zinc-200 shadow-lg backdrop-blur transition hover:border-[#10b981]/45 hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 sm:right-1 sm:h-11 sm:w-11"
              >
                <ArrowIcon direction="right" />
              </button>
            </>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-6">
          {items.map((item, index) => (
            <button
              key={`dot-${item.id}`}
              type="button"
              aria-label={`Ir al ítem ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === safeIndex
                  ? "w-7 bg-[#10b981]"
                  : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>

      {renderDetail ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={springTransition}
            className="mt-8 sm:mt-10"
          >
            {renderDetail(activeItem)}
          </motion.div>
        </AnimatePresence>
      ) : null}
    </div>
  );
}
