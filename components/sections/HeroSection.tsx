"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  staggerBackdrop,
  staggerContainer,
  staggerItem,
  springTransition,
} from "@/lib/motion";
import { DataPipelineBackground } from "@/components/background/DataPipelineBackground";
import type { RoleTechnology, TechAccent } from "@/content/types";

type HeroSectionProps = {
  greetingLine1: string;
  greetingLine2: string;
  heroSubtitle: string;
  roles: RoleView[];
  relatedTechnologiesLabel: string;
  rolesLabel: string;
  ctaLabel: string;
};

type RoleView = {
  id: string;
  title: string;
  technologies: RoleTechnology[];
  accent: TechAccent;
};

const chipBase =
  "inline-flex cursor-default select-none items-center rounded-full border px-2 py-0.5 text-[11px] font-medium leading-tight tracking-wide transition-[box-shadow,border-color,background-color] duration-200 will-change-transform";

function TechChip({ label, accent }: { label: string; accent: TechAccent }) {
  const isData = accent === "data";
  return (
    <motion.span
      className={`${chipBase} ${
        isData
          ? "border-[#10b981]/35 bg-[#10b981]/[0.07] text-emerald-100/90 hover:border-[#10b981]/80 hover:bg-[#10b981]/14 hover:shadow-[0_0_14px_rgba(16,185,129,0.38)]"
          : "border-[#dc2626]/35 bg-[#dc2626]/[0.07] text-red-100/90 hover:border-[#dc2626]/85 hover:bg-[#dc2626]/14 hover:shadow-[0_0_14px_rgba(220,38,38,0.42)]"
      }`}
      whileHover={{ scale: 1.045 }}
      transition={springTransition}
    >
      {label}
    </motion.span>
  );
}

function TechnologyItem({
  technology,
  roleId,
  accent,
}: {
  technology: RoleTechnology;
  roleId: string;
  accent: TechAccent;
}) {
  if (typeof technology === "string") {
    return (
      <TechChip
        key={`${roleId}-${technology}`}
        label={technology}
        accent={accent}
      />
    );
  }

  return (
    <div
      key={`${roleId}-${technology.label}`}
      className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] p-2.5"
    >
      <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-300">
        <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
        {technology.label}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {technology.items.map((item) => (
          <TechChip
            key={`${roleId}-${technology.label}-${item}`}
            label={item}
            accent={accent}
          />
        ))}
      </div>
    </div>
  );
}

function RoleCard({
  role,
  relatedTechnologiesLabel,
}: {
  role: RoleView;
  relatedTechnologiesLabel: string;
}) {
  const isData = role.accent === "data";
  const glow = isData
    ? "hover:border-[#10b981]/55 hover:shadow-[0_18px_60px_-28px_rgba(16,185,129,0.9)] focus-within:border-[#10b981]/55 focus-within:shadow-[0_18px_60px_-28px_rgba(16,185,129,0.9)]"
    : "hover:border-[#dc2626]/55 hover:shadow-[0_18px_60px_-28px_rgba(220,38,38,0.85)] focus-within:border-[#dc2626]/55 focus-within:shadow-[0_18px_60px_-28px_rgba(220,38,38,0.85)]";
  const pulse = isData ? "bg-[#10b981]" : "bg-[#dc2626]";

  return (
    <motion.li
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-3 text-left shadow-sm shadow-black/10 outline-none transition-[border-color,background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/[0.055] focus-within:-translate-y-1 focus-within:bg-white/[0.055] ${glow}`}
      whileHover={{ y: -3 }}
      transition={springTransition}
    >
      <button
        type="button"
        className="w-full text-left outline-none"
        aria-label={`${role.title}: ${relatedTechnologiesLabel}`}
      >
        <span
          className={`mb-2 block h-1 w-8 rounded-full ${pulse} opacity-80 transition-all duration-300 group-hover:w-16 group-hover:opacity-100 group-focus-within:w-16 group-focus-within:opacity-100`}
        />
        <span className="block text-sm font-semibold text-zinc-100 sm:text-[15px]">
          {role.title}
        </span>
        <span className="mt-1 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-zinc-500 opacity-80">
          {relatedTechnologiesLabel}
          <svg
            className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className="grid max-h-0 opacity-0 transition-[max-height,opacity,margin-top] duration-300 ease-out group-hover:mt-3 group-hover:max-h-96 group-hover:opacity-100 group-focus-within:mt-3 group-focus-within:max-h-96 group-focus-within:opacity-100">
        <div className="flex flex-wrap gap-1.5 border-t border-white/[0.07] pt-3">
          {role.technologies.map((technology) => (
            <TechnologyItem
              key={
                typeof technology === "string"
                  ? `${role.id}-${technology}`
                  : `${role.id}-${technology.label}`
              }
              technology={technology}
              roleId={role.id}
              accent={role.accent}
            />
          ))}
        </div>
      </div>
    </motion.li>
  );
}

export function HeroSection({
  greetingLine1,
  greetingLine2,
  heroSubtitle,
  roles,
  relatedTechnologiesLabel,
  rolesLabel,
  ctaLabel,
}: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen scroll-mt-24 md:scroll-mt-24"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 min-h-screen"
        variants={staggerBackdrop}
        initial="hidden"
        animate="visible"
      >
        <DataPipelineBackground />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/35 via-[#0a0a0a]/55 to-[#0a0a0a]/95"
          aria-hidden
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-28">
        <motion.div
          className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex min-w-0 flex-col gap-8"
            variants={staggerItem}
          >
            <div className="space-y-5">
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-[2.75rem] xl:text-6xl">
                  <span className="block text-zinc-400">{greetingLine1}</span>
                  <span className="mt-1 block whitespace-nowrap text-[clamp(1.35rem,4.2vw,3.75rem)] text-zinc-50">
                    {greetingLine2}
                  </span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                  {heroSubtitle}
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                  {rolesLabel}
                </h2>
                <ul className="grid max-w-3xl gap-2 sm:grid-cols-2">
                  {roles.map((role) => (
                    <RoleCard
                      key={role.id}
                      role={role}
                      relatedTechnologiesLabel={relatedTechnologiesLabel}
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center rounded-lg bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-950 shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                {ctaLabel}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
            variants={staggerItem}
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-2xl bg-zinc-900/40 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_25px_80px_-20px_rgba(0,0,0,0.65),0_0_100px_-30px_rgba(16,185,129,0.2),0_0_80px_-40px_rgba(220,38,38,0.12)]">
              <Image
                src="/profile.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[center_18%]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
