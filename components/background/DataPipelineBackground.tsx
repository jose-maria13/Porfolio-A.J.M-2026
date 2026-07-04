"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const EMERALD = "#10b981";
const CRIMSON = "#dc2626";

type NodeDef = { nx: number; ny: number; accent: "emerald" | "crimson" };
type EdgeDef = { from: number; to: number };

const NODES: NodeDef[] = [
  { nx: 0.12, ny: 0.22, accent: "emerald" },
  { nx: 0.12, ny: 0.48, accent: "crimson" },
  { nx: 0.12, ny: 0.74, accent: "emerald" },
  { nx: 0.42, ny: 0.36, accent: "emerald" },
  { nx: 0.42, ny: 0.64, accent: "crimson" },
  { nx: 0.68, ny: 0.28, accent: "crimson" },
  { nx: 0.68, ny: 0.52, accent: "emerald" },
  { nx: 0.9, ny: 0.42, accent: "crimson" },
];

const EDGES: EdgeDef[] = [
  { from: 0, to: 3 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 2, to: 4 },
  { from: 3, to: 5 },
  { from: 3, to: 6 },
  { from: 4, to: 6 },
  { from: 5, to: 7 },
  { from: 6, to: 7 },
];

function hexToRgba(hex: string, a: number) {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/**
 * Fondo tipo DAG / pipeline: nodos y aristas sutiles en Canvas (sin dependencias pesadas).
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
    const t0 = performance.now();

    const draw = (tMs: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;

      const t = reduceMotion ? 0 : (tMs - t0) * 0.001;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < EDGES.length; i++) {
        const e = EDGES[i];
        const a = NODES[e.from];
        const b = NODES[e.to];
        const x1 = a.nx * w;
        const y1 = a.ny * h;
        const x2 = b.nx * w;
        const y2 = b.ny * h;
        const alpha = reduceMotion ? 0.16 : 0.09 + 0.07 * Math.sin(t * 1.1 + i * 0.4);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      for (let i = 0; i < NODES.length; i++) {
        const n = NODES[i];
        const x = n.nx * w;
        const y = n.ny * h;
        const pulse = reduceMotion ? 0.5 : 0.42 + 0.12 * Math.sin(t * 1.25 + i * 0.65);
        const color = n.accent === "emerald" ? EMERALD : CRIMSON;
        const r = 2.2 + pulse * 1.4;

        ctx.beginPath();
        ctx.arc(x, y, r + 2.5, 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(color, 0.06 + pulse * 0.05);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(color, 0.2 + pulse * 0.12);
        ctx.fill();
        ctx.strokeStyle = hexToRgba(color, 0.42);
        ctx.lineWidth = 1;
        ctx.stroke();
      }
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
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
