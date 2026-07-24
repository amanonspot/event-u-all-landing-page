import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import CaseStudyCard from "@/components/CaseStudyCard";
import { featuredCaseStudies } from "@/lib/case-studies";

export default function CaseStudiesTeaser() {
  const studies = featuredCaseStudies();
  return (
    <section id="case-studies" className="px-6 md:px-12 py-24 bg-bg scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow="Case Studies"
            title={<>Proof, not just <span className="text-gradient">promises</span></>}
            intro="Real corporate events, delivered concept to execution — with the outcomes that mattered to each client."
          />
          <FadeIn>
            <Link href="/case-studies" className="mb-12 hidden sm:inline-flex text-sm font-semibold text-accent hover:opacity-80">
              View all case studies →
            </Link>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {studies.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 0.08}>
              <CaseStudyCard study={s} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 text-center sm:hidden">
            <Link href="/case-studies" className="inline-flex px-7 py-3.5 border border-border text-fg text-[15px] font-semibold rounded-lg hover:bg-surface transition">
              View All Case Studies
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
