import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import { FAQS } from "@/lib/site";

export default function FAQ() {
  return (
    <section className="px-6 md:px-12 py-24 bg-bg">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          center
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient">answered</span></>}
        />

        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => (
            <FadeIn key={f.q} delay={i * 0.04}>
              <details className="group bg-surface border border-border rounded-xl px-6 py-5 [&_summary]:cursor-pointer">
                <summary className="flex items-center justify-between gap-4 list-none font-semibold text-fg">
                  {f.q}
                  <span className="shrink-0 text-accent text-xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">{f.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
