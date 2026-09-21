"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

type HeroSectionProps = {
  greetingLine1: string;
  greetingLine2: string;
  heroRole: string;
  heroSubtitle: string;
  ctaLabel: string;
  cvLabel: string;
};

export function HeroSection({
  greetingLine1,
  greetingLine2,
  heroRole,
  heroSubtitle,
  ctaLabel,
  cvLabel,
}: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen scroll-mt-24 md:scroll-mt-24"
    >
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 pb-20 pt-36 sm:px-8 lg:pb-24 lg:pt-32">
        <motion.div
          className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-24"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex min-w-0 flex-col gap-9"
            variants={staggerItem}
          >
            <div className="space-y-6">
              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-zinc-50 sm:text-6xl lg:text-[4.8rem] lg:leading-[0.92] xl:text-[5.5rem]">
                  <span className="block text-zinc-500">{greetingLine1}</span>
                  <span className="mt-2 block text-zinc-50">
                    {greetingLine2}
                  </span>
                </h1>
                <p className="inline-flex w-fit rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100 shadow-[0_0_24px_rgba(16,185,129,0.12)]">
                  {heroRole}
                </p>
                <div className="max-w-3xl rounded-[1.75rem] border border-white/[0.08] bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-6">
                  <p className="text-base leading-8 text-zinc-300 sm:text-lg">
                    {heroSubtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-b from-white to-zinc-300 px-6 py-3 text-sm font-bold text-zinc-950 shadow-[0_16px_35px_rgba(0,0,0,0.35),inset_0_0_18px_rgba(255,255,255,0.55)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(16,185,129,0.28),inset_0_0_22px_rgba(255,255,255,0.75)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                {ctaLabel}
              </a>
              <a
                href="/cv-jose-maria-atonur-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-[#10b981]/35 bg-gradient-to-b from-[#10b981]/20 to-[#064e3b]/35 px-6 py-3 text-sm font-bold text-emerald-50 shadow-[0_16px_35px_rgba(0,0,0,0.32),inset_0_0_18px_rgba(16,185,129,0.1)] transition duration-300 hover:-translate-y-0.5 hover:border-[#10b981]/75 hover:shadow-[0_18px_45px_rgba(16,185,129,0.28),inset_0_0_20px_rgba(16,185,129,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                {cvLabel}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
            variants={staggerItem}
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[390px] overflow-hidden rounded-[2rem] bg-zinc-900/40 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_25px_80px_-20px_rgba(0,0,0,0.65),0_0_100px_-30px_rgba(16,185,129,0.22),0_0_80px_-40px_rgba(220,38,38,0.16)] lg:ml-auto">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a]/35 via-transparent to-transparent" />
              <Image
                src="/profile-photo-2026.png"
                alt="Jose Maria Atonur con traje"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[center_34%] saturate-[1.03] contrast-[1.03]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
