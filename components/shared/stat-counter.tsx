"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  /** Final numeric value to count up to. */
  target: number;
  /** Text suffix, e.g. "+" or "/5". */
  suffix?: string;
  /** Render as a decimal (e.g. 4.9) instead of an integer. */
  decimal?: boolean;
  label: string;
  durationMs?: number;
}

/** Count-up stat used for the 50+/15+/4.9 hero and footer stats. */
export function StatCounter({
  target,
  suffix = "",
  decimal = false,
  label,
  durationMs = 1400,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          const eased = 1 - (1 - progress) * (1 - progress);
          setValue(decimal ? Math.round(target * eased * 10) / 10 : Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, decimal, durationMs]);

  return (
    <div ref={ref} className="text-center">
      <strong className="block font-heading text-3xl text-primary sm:text-4xl">
        {decimal ? value.toFixed(1) : value}
        {suffix}
      </strong>
      <span className="mt-1 block text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
