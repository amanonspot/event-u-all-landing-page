"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import { PROCESS } from "@/lib/site";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.55"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="px-6 md:px-12 py-24 bg-hero-bg text-hero-fg">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          dark
          eyebrow="How We Work"
          title={<>From brief to <span className="text-gradient">standing ovation</span></>}
          intro="A proven seven-step process that keeps your event on-brief, on-time, and on-budget."
        />

        <div ref={ref} className="relative">
          {/* Base connector line */}
          <div
            aria-hidden
            className="absolute top-2 bottom-2 w-px bg-hero-border left-[23px] md:left-1/2 md:-translate-x-1/2"
          />
          {/* Gold scroll-fill line */}
          <motion.div
            aria-hidden
            style={{ height: reduce ? "100%" : fillHeight }}
            className="absolute top-2 w-px left-[23px] md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-accent via-accent to-accent-2 shadow-[0_0_12px_rgba(200,150,58,0.6)]"
          />

          <div className="flex flex-col gap-6 md:gap-0">
            {PROCESS.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <div key={p.step} className="relative md:grid md:grid-cols-2 md:gap-x-8 md:py-3 md:items-center">
                  {/* Node — vertically centered with its card */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-[23px] md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-11 h-11 rounded-full bg-hero-bg border-2 border-accent text-accent font-display text-sm font-extrabold flex items-center justify-center shadow-[0_0_0_4px_rgba(8,12,22,1),0_0_18px_rgba(200,150,58,0.35)]">
                      {p.step}
                    </div>
                  </div>

                  {/* Card — pulled toward the centre line */}
                  <FadeIn
                    delay={0.05}
                    className={`pl-16 md:pl-0 ${
                      left ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div
                      className={`bg-white/[0.03] border border-hero-border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.05] md:max-w-[460px] ${
                        left ? "md:ml-auto" : "md:mr-auto"
                      }`}
                    >
                      <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                      <p className="text-sm text-hero-muted leading-relaxed mt-1.5">{p.blurb}</p>
                    </div>
                  </FadeIn>
                </div>
              );
            })}

            {/* Finish marker — label sits beside (mobile) / below (desktop) the node */}
            <div className="relative pt-6 md:pt-8">
              <div className="absolute top-0 left-[23px] md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-11 h-11 rounded-full bg-accent text-white flex items-center justify-center shadow-[0_0_0_4px_rgba(8,12,22,1),0_0_22px_rgba(200,150,58,0.5)]">
                  ★
                </div>
              </div>
              <p className="pl-16 md:pl-0 md:pt-16 md:text-center font-display text-base font-bold text-white">
                Standing ovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
