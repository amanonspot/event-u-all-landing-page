"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { STATS } from "@/lib/site";
import { HERO_VIDEO } from "@/lib/videos";

// Brand gradient wash (radial gold + coral over a dark base) — reused from the
// previous dark hero so the finished state is a readable video hero.
const BRAND_WASH =
  "radial-gradient(120% 90% at 75% 0%, rgba(200,150,58,0.20) 0%, transparent 55%), radial-gradient(90% 80% at 10% 100%, rgba(224,101,60,0.16) 0%, transparent 60%), linear-gradient(180deg, rgba(8,12,22,0.82) 0%, rgba(8,12,22,0.92) 100%)";

function HeroVideo() {
  return HERO_VIDEO.src ? (
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
  );
}

// Headline whose text color is driven by `currentColor` so a parent can animate
// ink → white as the gradient overlay fades in. Gold accents stay fixed.
function Headline() {
  return (
    <div className="max-w-3xl mx-auto text-center px-6">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-current/20 bg-current/[0.06] text-xs font-semibold mb-6 tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-accent euall-pulse" />
        Concept to Execution · 20+ Years · PAN‑India
      </div>
      <h1 className="font-display text-[clamp(36px,5.6vw,72px)] font-extrabold leading-[1.04] tracking-tight">
        Corporate Events <br className="hidden sm:block" />
        Planned to <span className="text-gradient">Perfection.</span>
      </h1>
      <p className="text-lg leading-relaxed mt-6 mb-9 max-w-xl mx-auto opacity-80">
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
          className="inline-flex items-center gap-2 px-7 py-3.5 border border-current/40 text-[15px] font-semibold rounded-lg hover:bg-current/10 transition"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
}

function Caption() {
  return (
    <span
      className="absolute left-4 bottom-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 select-none z-20"
      style={{ writingMode: "vertical-rl" as const }}
    >
      Take a look around
    </span>
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

// Desktop scroll-reveal. The hero is the first section (starts at scroll 0), so
// we track window scroll in PIXELS over the sticky scrub distance (120vh = the
// 220vh track minus the 100vh viewport). This is more robust than target/offset
// measurement with a sticky-containing target.
function AnimatedHero({ vh }: { vh: number }) {
  const { scrollY } = useScroll();
  const end = vh * 1.2; // scroll distance for the full reveal

  const width = useTransform(scrollY, [0, end], ["58%", "100%"]);
  const height = useTransform(scrollY, [0, end], ["34vh", "100vh"]);
  const radius = useTransform(scrollY, [0, end], [24, 0]);
  const mediaY = useTransform(scrollY, [0, end], [40, 0]);
  // Gradient overlay reaches full (dark) before the headline turns white, so
  // white text always lands on an already-darkened video.
  const overlayOpacity = useTransform(scrollY, [end * 0.1, end * 0.45], [0, 1]);
  const headlineColor = useTransform(scrollY, [end * 0.34, end * 0.52], ["#0b1220", "#ffffff"]);
  const headlineY = useTransform(scrollY, [0, end], [0, -24]);

  return (
    <>
      <section className="relative h-[220vh] bg-bg">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Media rises from the bottom and expands to full-bleed background */}
          <motion.div
            style={{ width, height, borderRadius: radius, y: mediaY }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden shadow-[0_30px_80px_rgba(11,18,32,0.18)] z-10"
          >
            <HeroVideo />
            {/* Brand gradient overlay — opacity tied to scroll */}
            <motion.div aria-hidden className="absolute inset-0" style={{ opacity: overlayOpacity, background: BRAND_WASH }} />
            <Caption />
          </motion.div>

          {/* Headline sits in the upper area (clear of the initial video card)
              and turns white as the overlay fades in — never fades out. */}
          <motion.div
            style={{ color: headlineColor, y: headlineY }}
            className="absolute inset-x-0 top-0 pt-[12vh] z-20 pointer-events-none"
          >
            <div className="pointer-events-auto">
              <Headline />
            </div>
          </motion.div>
        </div>
      </section>
      <StatsStrip />
    </>
  );
}

// Static readable dark-video hero for mobile / reduced motion.
function StaticHero() {
  return (
    <>
      <section className="relative bg-hero-bg text-white min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
        <HeroVideo />
        <div aria-hidden className="absolute inset-0" style={{ background: BRAND_WASH }} />
        <Caption />
        <div className="relative z-10 w-full text-white">
          <Headline />
        </div>
      </section>
      <StatsStrip />
    </>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => {
      setIsDesktop(mq.matches);
      setVh(window.innerHeight);
    };
    update();
    mq.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => {
      mq.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return isDesktop && !reduce && vh > 0 ? <AnimatedHero vh={vh} /> : <StaticHero />;
}
