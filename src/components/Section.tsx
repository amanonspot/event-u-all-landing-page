import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";

// Standard section header (eyebrow + title + optional intro), reused across
// the homepage and sub-pages for consistent rhythm.
export function SectionHeader({
  eyebrow,
  title,
  intro,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <FadeIn>
      <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl mb-12`}>
        {eyebrow && (
          <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            {eyebrow}
          </div>
        )}
        <h2
          className={`font-display text-[clamp(26px,3.6vw,44px)] font-extrabold leading-tight ${
            dark ? "text-hero-fg" : "text-fg"
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p className={`mt-4 text-base leading-relaxed ${dark ? "text-hero-muted" : "text-muted"}`}>
            {intro}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
