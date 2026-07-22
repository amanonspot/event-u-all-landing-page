import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import { INDUSTRIES } from "@/lib/site";

export default function Industries() {
  return (
    <section className="px-6 md:px-12 py-24 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Industries Served"
          title={<>Every sector, <span className="text-gradient">one standard</span></>}
          intro="We plan and produce events for organisations across every major industry."
        />

        <div className="flex flex-wrap gap-3">
          {INDUSTRIES.map((name, i) => (
            <FadeIn key={name} delay={i * 0.03}>
              <span className="inline-flex px-5 py-3 rounded-full bg-bg border border-border text-sm font-semibold text-fg hover:border-accent/50 hover:text-accent transition-colors">
                {name}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
