import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import PageHeader from "@/components/PageHeader";
import { SectionHeader } from "@/components/Section";
import { SERVICE_GROUPS } from "@/lib/site";
import { ANCILLARY_SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Corporate events, employee engagement, outdoor experiences, launches and exhibitions — planned concept to execution by Event‑U‑All.",
};

const ANCHORS: Record<string, string> = {
  corporate: "corporate",
  engagement: "rr",
  outdoor: "offsites",
  launches: "launches",
  exhibitions: "exhibitions",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={<>Everything your event needs, <span className="text-gradient">under one roof</span></>}
        intro="Strategy, venues, creative, production, artists, travel and hospitality — managed end to end by a single dedicated team."
        img="photo-1540575467063-178a50c2df87"
      />

      <section className="px-6 md:px-12 py-20 bg-bg">
        <div className="max-w-6xl mx-auto flex flex-col gap-14">
          {SERVICE_GROUPS.map((group, gi) => (
            <FadeIn key={group.id} delay={gi * 0.05}>
              <div id={ANCHORS[group.id] ?? group.id} className="scroll-mt-24">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-display text-lg font-extrabold text-accent">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-extrabold text-fg">
                    {group.name}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="bg-surface border border-border rounded-xl p-5 hover:border-accent/40 transition-colors"
                    >
                      <h3 className="font-semibold text-fg">{item}</h3>
                      <p className="text-sm text-muted mt-1.5">
                        Concept-to-execution planning tailored to your objectives.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Full capabilities — ancillary/enabling services under one roof */}
        <div className="max-w-6xl mx-auto mt-20">
          <SectionHeader
            eyebrow="Full Capabilities"
            title={<>Everything managed <span className="text-gradient">in-house</span></>}
            intro="Beyond the core categories, these enabling services mean one team — and one point of contact — owns your entire event."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ANCILLARY_SERVICES.map((cat, i) => (
              <FadeIn key={cat.category} delay={(i % 4) * 0.05}>
                <div className="h-full bg-surface border border-border rounded-2xl p-5">
                  <h3 className="font-display text-base font-bold text-fg mb-3">{cat.category}</h3>
                  <ul className="flex flex-col gap-2">
                    {cat.services.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-muted leading-snug">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 bg-hero-bg text-hero-fg rounded-3xl p-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
            Not sure where to start?
          </h2>
          <p className="text-hero-muted mb-6 max-w-md mx-auto">
            Share your brief and we&apos;ll recommend the right format, destination and budget.
          </p>
          <Link href="/contact" className="inline-flex px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition">
            Get Proposal →
          </Link>
        </div>
      </section>
    </>
  );
}
