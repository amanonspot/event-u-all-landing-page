import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import PageHeader from "@/components/PageHeader";
import { ux } from "@/lib/images";
import { CASE_STUDIES, getCaseStudy, serviceLabel } from "@/lib/case-studies";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study" };
  return {
    title: study.title,
    description: `${study.client} · ${study.challenge}`,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`${study.industry} · ${serviceLabel(study.service)}`}
        title={study.title}
        intro={`${study.client}${study.location ? ` · ${study.location}` : ""} · ${study.scale}`}
        img={study.gallery[0]}
      />

      <article className="px-6 md:px-12 py-20 bg-bg">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {/* Challenge / Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">The Challenge</div>
                <p className="text-lg text-fg leading-relaxed">{study.challenge}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Our Solution</div>
                <p className="text-lg text-fg leading-relaxed">{study.solution}</p>
              </div>
            </FadeIn>
          </div>

          {/* ROI metrics */}
          <FadeIn>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-5">The Impact</div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {study.roi.map((m) => (
                  <div key={m.label} className="bg-surface border border-border rounded-2xl p-6 text-center">
                    <div className="font-display text-2xl md:text-3xl font-extrabold text-gradient leading-tight">
                      {m.value}
                    </div>
                    <div className="text-xs text-muted mt-2 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Testimonial */}
          {study.testimonialQuote && (
            <FadeIn>
              <blockquote className="bg-hero-bg text-hero-fg rounded-3xl p-8 md:p-10 text-center">
                <div className="text-accent text-xl mb-4" aria-hidden>★★★★★</div>
                <p className="font-display text-xl md:text-2xl font-semibold leading-snug">
                  “{study.testimonialQuote}”
                </p>
                <div className="text-sm text-hero-muted mt-4">{study.client}</div>
              </blockquote>
            </FadeIn>
          )}

          {/* Gallery */}
          {study.gallery.length > 1 && (
            <FadeIn>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {study.gallery.map((img, i) => (
                  <div key={img + i} className="relative h-44 rounded-2xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ux(img, 520, 360)} alt={`${study.title} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Footer CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-border pt-10">
            <Link href="/case-studies" className="text-sm font-semibold text-accent hover:opacity-80">
              ← All case studies
            </Link>
            <Link
              href="/contact"
              className="inline-flex px-7 py-3.5 bg-accent text-white text-[15px] font-semibold rounded-lg hover:opacity-90 transition"
            >
              Plan an event like this →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
