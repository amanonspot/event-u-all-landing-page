"use client";

import { useRef, type ReactNode } from "react";

// Lightweight scroll-snap carousel with prev/next controls. No dependencies.
export default function Carousel({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 520), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2 -mx-1 px-1"
      >
        {children}
      </div>

      <div className="flex justify-center gap-3 mt-7">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Previous"
          className="w-11 h-11 rounded-full border border-border bg-bg flex items-center justify-center text-fg hover:bg-surface hover:border-accent/50 transition"
        >
          ‹
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Next"
          className="w-11 h-11 rounded-full border border-border bg-bg flex items-center justify-center text-fg hover:bg-surface hover:border-accent/50 transition"
        >
          ›
        </button>
      </div>
    </div>
  );
}
