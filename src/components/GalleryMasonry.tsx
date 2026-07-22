"use client";

import { useEffect, useState } from "react";
import { GALLERY } from "@/lib/gallery";
import { ux } from "@/lib/images";

const HEIGHTS: Record<string, string> = {
  tall: "h-80",
  wide: "h-52",
  normal: "h-64",
};

export default function GalleryMasonry() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? a : (a + 1) % GALLERY.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? a : (a - 1 + GALLERY.length) % GALLERY.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {GALLERY.map((g, i) => (
          <button
            key={g.title}
            onClick={() => setActive(i)}
            className={`mb-4 block w-full break-inside-avoid rounded-2xl overflow-hidden relative group ${HEIGHTS[g.span]}`}
            aria-label={`Open ${g.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ux(g.img, 700, 700)}
              alt={g.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-3 left-4 right-4 text-left text-sm font-semibold text-white leading-snug">
              {g.title}
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[950] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY[active].title}
        >
          <div
            className="relative w-full max-w-3xl aspect-[16/10] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ux(GALLERY[active].img, 1400, 875)}
              alt={GALLERY[active].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <p className="absolute bottom-5 left-6 font-display text-xl font-bold text-white">
              {GALLERY[active].title}
            </p>
          </div>
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 text-white text-xl hover:bg-white/20 transition"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
