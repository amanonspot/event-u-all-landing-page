import type { ReactNode } from "react";
import { ux } from "@/lib/images";

// Dark, image-backed page header used across sub-pages for a consistent,
// finished look (matches the homepage hero treatment).
export default function PageHeader({
  eyebrow,
  title,
  intro,
  img,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  img: string;
}) {
  return (
    <section className="relative bg-hero-bg text-hero-fg px-6 md:px-12 pt-36 pb-20 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ux(img, 1920, 700)}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 120% at 80% 0%, rgba(200,150,58,0.16) 0%, transparent 55%), linear-gradient(180deg, rgba(8,12,22,0.75) 0%, rgba(8,12,22,0.92) 100%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">{eyebrow}</div>
        <h1 className="font-display text-[clamp(32px,5.5vw,60px)] font-extrabold leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {intro && (
          <p className="text-hero-muted text-lg mt-5 max-w-xl leading-relaxed">{intro}</p>
        )}
      </div>
    </section>
  );
}
