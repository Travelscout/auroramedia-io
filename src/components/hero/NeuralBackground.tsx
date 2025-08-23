"use client";

import { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
    };
    const nodes = Array.from({ length: 120 }, () => ({
      x: Math.random(), y: Math.random(), z: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006, vy: (Math.random() - 0.5) * 0.0006, vz: (Math.random() - 0.5) * 0.0006,
    }));
    const links: Array<[number, number]> = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() < 0.02) links.push([i, j]);
      }
    }
    const render = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      // Keep canvas transparent so underlying section gradient shows through

      // move nodes
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.z += n.vz;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
        if (n.z < 0 || n.z > 1) n.vz *= -1;
      });

      // draw links
      ctx.lineWidth = 1 * DPR;
      links.forEach(([a, b]) => {
        const na = nodes[a], nb = nodes[b];
        const ax = na.x * w, ay = na.y * h; const bx = nb.x * w, by = nb.y * h;
        const opacity = 0.15 + ((na.z + nb.z) / 2) * 0.2;
        ctx.strokeStyle = `rgba(99,102,241,${opacity})`;
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
      });

      // draw nodes
      nodes.forEach(n => {
        const x = n.x * w, y = n.y * h; const r = (1.2 + n.z * 2.2) * DPR;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
        grad.addColorStop(0, "rgba(236,72,153,0.6)");
        grad.addColorStop(1, "rgba(236,72,153,0)");
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(x, y, r * 3, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(x, y, r * 0.6, 0, Math.PI * 2); ctx.fill();
      });

      raf = requestAnimationFrame(render);
    };
    const ro = new ResizeObserver(resize); ro.observe(canvas);
    resize(); render();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 -z-10 rounded-2xl" aria-hidden />;
}


