"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import { TESTIMONIALS } from "@/lib/site";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="px-6 md:px-12 py-24 bg-bg">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          center
          eyebrow="Client Testimonials"
          title={<>Rated <span className="text-gradient">5 stars</span> by 2000+ teams</>}
        />

        <FadeIn>
          <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 text-center">
            <div className="text-accent text-2xl mb-5" aria-label="5 star rating">★★★★★</div>
            <blockquote className="font-display text-xl md:text-2xl font-semibold text-fg leading-snug">
              “{t.quote}”
            </blockquote>
            <div className="mt-6 text-sm text-muted">
              <span className="font-semibold text-fg">{t.name}</span> · {t.company}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-7 bg-accent" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
