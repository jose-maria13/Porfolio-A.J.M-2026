"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Star = {
  x: number;
  y: number;
  r: number;
  speed: number;
  alpha: number;
};

function createStars(count: number): Star[] {
  return Array.from({ length: count }, (_, index) => {
    const seed = Math.sin(index * 999) * 10000;
    const x = seed - Math.floor(seed);
    const ySeed = Math.sin(index * 444) * 10000;
    const y = ySeed - Math.floor(ySeed);

    return {
      x,
      y,
      r: index % 9 === 0 ? 1.6 : index % 4 === 0 ? 1.1 : 0.75,
      speed: 0.015 + (index % 7) * 0.004,
      alpha: 0.35 + (index % 5) * 0.1,
    };
  });
}

const STARS = createStars(170);

/**
 * Fondo tipo starfield: minimalista, liviano y determinístico.
 */
export function DataPipelineBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    const draw = (tMs: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;

      const t = reduceMotion ? 0 : tMs * 0.001;

      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createRadialGradient(w * 0.5, h, 0, w * 0.5, h, h);
      gradient.addColorStop(0, "rgba(27, 39, 53, 0.85)");
      gradient.addColorStop(0.45, "rgba(9, 10, 15, 0.78)");
      gradient.addColorStop(1, "rgba(3, 7, 18, 0.96)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      for (const star of STARS) {
        const drift = reduceMotion ? 0 : t * star.speed;
        const x = star.x * w;
        const y = ((star.y + drift) % 1) * h;
        ctx.beginPath();
        ctx.arc(x, y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      }

      ctx.fillStyle = "rgba(16,185,129,0.035)";
      ctx.fillRect(0, 0, w, h);
    };

    const loop = (now: number) => {
      draw(now);
      if (!reduceMotion) {
        rafId = requestAnimationFrame(loop);
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    resize();

    if (!reduceMotion) {
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [reduceMotion]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_78%_36%,rgba(220,38,38,0.08),transparent_24%)]"
        aria-hidden
      />
    </>
  );
}
