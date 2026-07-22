import FadeIn from "@/components/FadeIn";
import ProposalForm from "@/components/ProposalForm";

export default function ProposalCTA() {
  return (
    <section id="proposal" className="px-6 md:px-12 py-24 bg-surface scroll-mt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-12 items-start">
        <FadeIn>
          <div className="lg:sticky lg:top-28">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Get Proposal
            </div>
            <h2 className="font-display text-[clamp(28px,3.8vw,46px)] font-extrabold leading-tight mb-5">
              Let&apos;s create something <span className="text-gradient">extraordinary</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6 max-w-md">
              Tell us about your event and we&apos;ll craft a customised proposal —
              concept, timeline, and transparent costing, usually within 48 hours.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Dedicated event manager from day one",
                "Transparent, itemised proposal",
                "PAN‑India & international delivery",
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm font-medium text-fg">
                  <span className="w-5 h-5 rounded-full bg-accent-soft text-accent flex items-center justify-center text-xs font-bold">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ProposalForm />
        </FadeIn>
      </div>
    </section>
  );
}
