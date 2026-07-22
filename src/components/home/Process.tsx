import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import { PROCESS } from "@/lib/site";

export default function Process() {
  return (
    <section className="px-6 md:px-12 py-24 bg-hero-bg text-hero-fg">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          dark
          eyebrow="How We Work"
          title={<>From brief to <span className="text-gradient">standing ovation</span></>}
          intro="A proven seven-step process that keeps your event on-brief, on-time, and on-budget."
        />

        <div className="relative grid md:grid-cols-2 gap-x-12">
          {PROCESS.map((p, i) => (
            <FadeIn key={p.step} delay={(i % 2) * 0.08}>
              <div className="flex gap-5 py-5 border-b border-hero-border">
                <div className="font-display text-2xl font-extrabold text-accent shrink-0 w-12">
                  {p.step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="text-sm text-hero-muted leading-relaxed mt-1">{p.blurb}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
