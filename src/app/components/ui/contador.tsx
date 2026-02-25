import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedCounterProps = {
  to: number;
  durationMs?: number;
  from?: number;
  decimals?: number;
  suffix?: string; // "+", "%", " años", etc.
  className?: string;
};

export function AnimatedCounter({
  to,
  durationMs = 1200,
  from = 0,
  decimals = 0,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(from);

  const formatter = useMemo(() => {
    return new Intl.NumberFormat("es-CO", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [decimals]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (prefersReduced) {
      setValue(to);
      return;
    }

    let hasRun = false;
    let rafId: number | null = null;

    const animate = () => {
      const start = performance.now();
      const delta = to - from;

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        // easing suave (easeOutCubic)
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(from + delta * eased);

        if (t < 1) rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          hasRun = true;
          animate();
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [to, from, durationMs]);

  return (
    <span ref={ref} className={className}>
      {formatter.format(Number(value.toFixed(decimals)))}
      {suffix}
    </span>
  );
}