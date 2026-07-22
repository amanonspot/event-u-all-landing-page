import FadeIn from "@/components/FadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import { SectionHeader } from "@/components/Section";
import { WHY_US, WHY_US_POINTS } from "@/lib/site";

export default function WhyUs() {
  return (
    <section className="px-6 md:px-12 py-24 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Why Event‑U‑All"
          title={<>Delivering <span className="text-gradient">extraordinary results</span>, every time</>}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {WHY_US.map((w, i) => (
            <FadeIn key={w.label} delay={i * 0.06}>
              <div className="bg-bg border border-border rounded-2xl p-6 text-center">
                <div className="font-display text-3xl md:text-4xl font-extrabold text-gradient">
                  <AnimatedCounter target={w.stat} suffix={w.suffix} />
                </div>
                <div className="text-sm text-muted mt-2">{w.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_US_POINTS.map((p, i) => (
            <FadeIn key={p} delay={i * 0.05}>
              <div className="flex items-start gap-3 bg-bg border border-border rounded-xl p-5">
                <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-accent-soft text-accent flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                <span className="text-sm font-medium text-fg leading-relaxed">{p}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
