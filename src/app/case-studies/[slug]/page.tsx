import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import PageHeader from "@/components/PageHeader";
import DragScroller from "@/components/DragScroller";
import { SectionHeader } from "@/components/Section";
import { ux } from "@/lib/images";
import { CASE_STUDIES, getCaseStudy, serviceLabel } from "@/lib/case-studies";
import { CATEGORIES } from "@/lib/site";

// Map a case-study service id to the anchor slug used on /services and in the
// homepage CATEGORIES hrefs, so we can filter the current service out.
const SERVICE_ANCHOR: Record<string, string> = {
  corporate: "corporate",
  rr: "rr",
  offsites: "offsites",
  launches: "launches",
  exhibitions: "exhibitions",
};

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
        </div>
      </article>

      {/* Explore other services — dark full-bleed scroller linking into /services */}
      <section className="py-20 bg-hero-bg text-hero-fg overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <SectionHeader
            dark
            eyebrow="More from Event‑U‑All"
            title={<>Explore other <span className="text-gradient">services</span></>}
            intro="From reward nights to international offsites — see the other formats we plan and execute end to end."
          />
        </div>

        <div className="pl-6 md:pl-[max(1.5rem,calc((100%-72rem)/2+3rem))]">
          <DragScroller ariaLabel="Other services">
            {CATEGORIES.filter((c) => !c.href.endsWith("#" + SERVICE_ANCHOR[study.service])).map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group relative block h-72 w-[300px] sm:w-[340px] shrink-0 rounded-2xl overflow-hidden border border-hero-border transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_18px_50px_rgba(0,0,0,0.4)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ux(c.img, 560, 460)}
                  alt={c.title}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-colors duration-300 group-hover:from-black/75" />
                <div className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-widest" style={{ color: c.accent }}>
                  {c.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-lg font-bold text-white">{c.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-white transition-colors">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
            {/* trailing spacer so the last card can scroll fully into view */}
            <div aria-hidden className="shrink-0 w-6 md:w-12" />
          </DragScroller>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-12 py-14 bg-bg">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
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
      </section>
    </>
  );
}
