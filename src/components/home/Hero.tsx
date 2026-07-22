import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import { STATS } from "@/lib/site";
import { ux, HERO_IMG } from "@/lib/images";
import { HERO_VIDEO } from "@/lib/videos";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 pb-24 overflow-hidden bg-hero-bg text-hero-fg">
      {/* Cinematic backdrop: looping event film when a hosted URL is set,
          otherwise the aerial poster / photo. The poster is always present as
          the video's fallback + LCP image. Reduced motion → poster only. */}
      {HERO_VIDEO.src ? (
        <video
          src={HERO_VIDEO.src}
          poster={HERO_VIDEO.poster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
        />
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_VIDEO.src ? HERO_VIDEO.poster : ux(HERO_IMG, 1920, 1080)}
        alt=""
        aria-hidden
        className={`absolute inset-0 w-full h-full object-cover ${HERO_VIDEO.src ? "motion-reduce:block hidden" : ""}`}
      />
      {/* Dark gradient wash for legibility + brand tint */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 90% at 75% 0%, rgba(200,150,58,0.20) 0%, transparent 55%), radial-gradient(90% 80% at 10% 100%, rgba(224,101,60,0.16) 0%, transparent 60%), linear-gradient(180deg,rgba(8,12,22,0.82) 0%,rgba(8,12,22,0.92) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div className="max-w-2xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-hero-border rounded-full bg-white/[0.04] text-xs font-semibold text-hero-fg/90 mb-6 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-accent euall-pulse" />
              Concept to Execution · 20+ Years · PAN‑India
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-[clamp(38px,6.2vw,74px)] font-extrabold leading-[1.02] tracking-tight mb-6">
              Corporate Events <br className="hidden sm:block" />
              Planned to <span className="text-gradient">Perfection.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-hero-muted leading-relaxed mb-9 max-w-xl">
              From strategy and venues to artists, production and hospitality — we
              deliver high-impact corporate events under one roof. Trusted by
              India&apos;s leading brands.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-[15px] font-semibold rounded-lg hover:opacity-90 hover:shadow-[0_0_40px_rgba(200,150,58,0.4)] transition"
              >
                Get Proposal →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-hero-border text-hero-fg/90 text-[15px] font-semibold rounded-lg hover:text-white hover:border-white/40 hover:bg-white/[0.06] transition"
              >
                Explore Services
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-1 gap-2.5 sm:gap-4">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={0.2 + i * 0.1}>
              <div className="h-full bg-white/[0.05] border border-hero-border rounded-2xl px-3 py-4 sm:px-6 sm:py-5 backdrop-blur-sm">
                <div className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[11px] sm:text-sm text-hero-muted mt-1 leading-tight">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
