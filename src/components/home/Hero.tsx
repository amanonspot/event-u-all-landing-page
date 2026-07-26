"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { STATS } from "@/lib/site";
import { HERO_VIDEO } from "@/lib/videos";

function HeroMedia({ rounded = true }: { rounded?: boolean }) {
  return (
    <>
      {HERO_VIDEO.src ? (
        <video
          src={HERO_VIDEO.src}
          poster={HERO_VIDEO.poster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={HERO_VIDEO.poster} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      )}
      {/* subtle wash for the caption legibility */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      <span
        className="absolute left-4 bottom-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 select-none"
        style={{ writingMode: "vertical-rl" as const }}
      >
        Take a look around
      </span>
      {rounded && null}
    </>
  );
}

function Headline() {
  return (
    <div className="max-w-3xl mx-auto text-center px-6">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-border rounded-full bg-surface text-xs font-semibold text-muted mb-6 tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-accent euall-pulse" />
        Concept to Execution · 20+ Years · PAN‑India
      </div>
      <h1 className="font-display text-[clamp(40px,7vw,86px)] font-extrabold leading-[1.02] tracking-tight text-fg">
        Corporate Events <br className="hidden sm:block" />
        Planned to <span className="text-gradient">Perfection.</span>
      </h1>
      <p className="text-lg text-muted leading-relaxed mt-6 mb-9 max-w-xl mx-auto">
        From strategy and venues to artists, production and hospitality — high-impact
        corporate events, delivered under one roof.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-[15px] font-semibold rounded-lg hover:opacity-90 hover:shadow-[0_0_40px_rgba(200,150,58,0.4)] transition"
        >
          Get Proposal →
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-fg text-[15px] font-semibold rounded-lg hover:bg-surface transition"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
}

function StatsStrip() {
  return (
    <section className="px-6 md:px-12 py-12 bg-bg border-t border-border">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient">
              <AnimatedCounter target={s.value} suffix={s.suffix} />
            </div>
            <div className="text-xs sm:text-sm text-muted mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Scrub only on desktop and when motion is allowed; otherwise a clean static stack.
  const animated = isDesktop && !reduce;

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["58%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["46vh", "100vh"]);
  const radius = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 0.5], [0, -70]);

  // ── Static fallback (mobile / reduced motion): headline → media → stats ──
  if (!animated) {
    return (
      <>
        <section className="bg-bg pt-32 pb-14">
          <Headline />
          <div className="mt-12 px-4 sm:px-6">
            <div className="relative mx-auto max-w-6xl h-[52vh] min-h-[340px] rounded-2xl overflow-hidden">
              <HeroMedia />
            </div>
          </div>
        </section>
        <StatsStrip />
      </>
    );
  }

  // ── Animated scroll-reveal (desktop) ──
  return (
    <>
      <section ref={ref} className="relative h-[220vh] bg-bg">
        <div className="sticky top-0 h-screen overflow-hidden flex items-start justify-center">
          {/* Headline sits in the upper area and fades up as the media takes over */}
          <motion.div
            style={{ opacity: headlineOpacity, y: headlineY }}
            className="absolute top-[16vh] inset-x-0 z-20"
          >
            <Headline />
          </motion.div>

          {/* Media rises from the bottom and expands to full-bleed */}
          <motion.div
            style={{ width, height, borderRadius: radius, y: mediaY }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden shadow-[0_30px_80px_rgba(11,18,32,0.18)] z-10"
          >
            <HeroMedia />
          </motion.div>
        </div>
      </section>
      <StatsStrip />
    </>
  );
}
