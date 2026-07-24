import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import PageHeader from "@/components/PageHeader";
import { SectionHeader } from "@/components/Section";
import CaseStudyCard from "@/components/CaseStudyCard";
import { INDUSTRY_DETAILS, getIndustry, caseStudiesForIndustry } from "@/lib/industries";

export function generateStaticParams() {
  return INDUSTRY_DETAILS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return { title: "Industry" };
  return {
    title: `${ind.name} Events`,
    description: `Corporate event management for ${ind.name}. ${ind.blurb}`,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const studies = caseStudiesForIndustry(ind.name);

  return (
    <>
      <PageHeader
        eyebrow="Industry"
        title={<>{ind.name} <span className="text-gradient">events</span></>}
        intro={ind.blurb}
        img={ind.img}
      />

      {/* Brands worked with */}
      {ind.brands.length > 0 && (
        <section className="px-6 md:px-12 py-16 bg-surface">
          <div className="max-w-6xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-6 text-center">
              Brands we&apos;ve worked with in {ind.name}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {ind.brands.map((b) => (
                <FadeIn key={b.name}>
                  {b.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={b.logo} alt={b.name} className="h-10 w-auto object-contain opacity-80" />
                  ) : (
                    <div className="flex items-center justify-center h-16 min-w-[150px] px-6 rounded-xl bg-bg border border-border font-display font-bold text-fg/70">
                      {b.name}
                    </div>
                  )}
                </FadeIn>
              ))}
            </div>
            <p className="text-center text-xs text-muted-dim mt-6">
              Representative brands — logos shown on request.
            </p>
          </div>
        </section>
      )}

      {/* Case studies for this industry */}
      <section className="px-6 md:px-12 py-20 bg-bg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Case Studies"
            title={<>Our work in <span className="text-gradient">{ind.name}</span></>}
          />
          {studies.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {studies.map((s, i) => (
                <FadeIn key={s.slug} delay={(i % 6) * 0.05}>
                  <CaseStudyCard study={s} />
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-border rounded-2xl">
              <p className="font-display text-xl font-bold text-fg mb-2">Case studies coming soon</p>
              <p className="text-sm text-muted mb-5 max-w-md mx-auto">
                We&apos;ve delivered events in {ind.name} — detailed case studies are being prepared.
                Reach out and we&apos;ll share relevant examples.
              </p>
              <Link href="/contact" className="inline-flex px-6 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:opacity-90 transition">
                Request examples →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 pb-24 bg-bg">
        <div className="max-w-6xl mx-auto bg-hero-bg text-hero-fg rounded-3xl p-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
            Planning an event in {ind.name}?
          </h2>
          <p className="text-hero-muted mb-6 max-w-md mx-auto">
            Tell us your brief and we&apos;ll craft a tailored proposal within 48 hours.
          </p>
          <Link href="/contact" className="inline-flex px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition">
            Get Proposal →
          </Link>
        </div>
      </section>
    </>
  );
}
