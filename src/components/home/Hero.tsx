"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
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

function EyebrowTitle() {
  return (
    <>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-current/20 bg-current/[0.06] text-xs font-semibold tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-accent euall-pulse" />
        Concept to Execution · 20+ Years · PAN‑India
      </div>
      <h1 className="mt-8 font-display text-[clamp(36px,5.4vw,70px)] font-extrabold leading-[1.06] tracking-tight">
        Corporate Events <br className="hidden sm:block" />
        Planned to <span className="text-gradient">Perfection.</span>
      </h1>
    </>
  );
}

const SUBTEXT =
  "From strategy and venues to artists, production and hospitality — high-impact corporate events, delivered under one roof.";

function CTAs() {
  return (
    <div className="mt-10 flex gap-4 flex-wrap justify-center">
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
  );
}

// Glass stat cards with a hover micro-interaction (lift + brighten + glow).
function StatCards() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {STATS.map((s) => (
        <div
          key={s.label}
          className="group min-w-[150px] flex-1 max-w-[200px] rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.16] hover:border-white/35 hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
        >
          <div className="font-display text-3xl md:text-4xl font-extrabold text-gradient transition-transform duration-300 group-hover:scale-105">
            <AnimatedCounter target={s.value} suffix={s.suffix} />
          </div>
          <div className="text-xs md:text-sm text-white/70 mt-1.5">{s.label}</div>
        </div>
      ))}
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

// Shared centered column wrapper with generous breathing room.
function HeroColumn({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl mx-auto text-center px-6">{children}</div>;
}

// Desktop scroll-reveal. The hero is the first section (starts at scroll 0), so
// we track window scroll in PIXELS over the sticky scrub distance (120vh = the
// 220vh track minus the 100vh viewport). More robust than target/offset with a
// sticky-containing target.
function AnimatedHero({ vh }: { vh: number }) {
  const { scrollY } = useScroll();
  const end = vh * 1.2; // scroll distance for the full reveal

  const width = useTransform(scrollY, [0, end], ["58%", "100%"]);
  const height = useTransform(scrollY, [0, end], ["32vh", "100vh"]);
  const radius = useTransform(scrollY, [0, end], [24, 0]);
  const mediaY = useTransform(scrollY, [0, end], [40, 0]);
  // Overlay reaches full (dark) before the headline turns white.
  const overlayOpacity = useTransform(scrollY, [end * 0.1, end * 0.45], [0, 1]);
  const headlineColor = useTransform(scrollY, [end * 0.34, end * 0.52], ["#0b1220", "#ffffff"]);
  const headlineY = useTransform(scrollY, [0, end], [0, -12]);
  // Subtext: visible at top, gone through the scrub, back at the settled end.
  const subtextOpacity = useTransform(scrollY, [0, end * 0.12, end * 0.82, end], [1, 0, 0, 1]);
  // Stat cards: fade + rise in once the reveal is done.
  const statsOpacity = useTransform(scrollY, [end * 0.8, end], [0, 1]);
  const statsY = useTransform(scrollY, [end * 0.8, end], [16, 0]);

  return (
    <section className="relative h-[220vh] bg-bg">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Media rises from the bottom and expands to full-bleed background */}
        <motion.div
          style={{ width, height, borderRadius: radius, y: mediaY }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden shadow-[0_30px_80px_rgba(11,18,32,0.18)] z-10"
        >
          <HeroVideo />
          <motion.div aria-hidden className="absolute inset-0" style={{ opacity: overlayOpacity, background: BRAND_WASH }} />
          <Caption />
        </motion.div>

        {/* Headline — sits in the upper area, turns white as the overlay darkens */}
        <motion.div
          style={{ color: headlineColor, y: headlineY }}
          className="absolute inset-x-0 top-0 pt-[13vh] z-20 pointer-events-none"
        >
          <HeroColumn>
            <div className="pointer-events-auto inline-block">
              <EyebrowTitle />
            </div>
            <motion.p
              style={{ opacity: subtextOpacity }}
              className="text-lg leading-relaxed mt-7 max-w-xl mx-auto opacity-90"
            >
              {SUBTEXT}
            </motion.p>
            <div className="pointer-events-auto">
              <CTAs />
            </div>
            <motion.div style={{ opacity: statsOpacity, y: statsY }} className="mt-12 pointer-events-auto">
              <StatCards />
            </motion.div>
          </HeroColumn>
        </motion.div>
      </div>
    </section>
  );
}

// Static readable dark-video hero for mobile / reduced motion.
function StaticHero() {
  return (
    <section className="relative bg-hero-bg text-white min-h-screen flex items-center py-28 overflow-hidden">
      <HeroVideo />
      <div aria-hidden className="absolute inset-0" style={{ background: BRAND_WASH }} />
      <Caption />
      <div className="relative z-10 w-full text-white">
        <HeroColumn>
          <EyebrowTitle />
          <p className="text-lg leading-relaxed mt-7 max-w-xl mx-auto opacity-90">{SUBTEXT}</p>
          <CTAs />
          <div className="mt-12">
            <StatCards />
          </div>
        </HeroColumn>
      </div>
    </section>
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
