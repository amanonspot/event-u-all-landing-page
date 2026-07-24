import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import PageHeader from "@/components/PageHeader";
import { ux } from "@/lib/images";
import { INDUSTRY_DETAILS, caseStudiesForIndustry } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Corporate events delivered across every major sector — see the case studies and brands we've worked with in your industry.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={<>Every sector, <span className="text-gradient">one standard</span></>}
        intro="We plan and produce events across every major industry. Pick yours to see relevant case studies and the brands we've worked with."
        img="photo-1540575467063-178a50c2df87"
      />

      <section className="px-6 md:px-12 py-20 bg-bg">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRY_DETAILS.map((ind, i) => {
            const count = caseStudiesForIndustry(ind.name).length;
            return (
              <FadeIn key={ind.slug} delay={(i % 6) * 0.05}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex flex-col h-full bg-bg border border-border rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(11,18,32,0.08)] transition"
                >
                  <div className="relative h-40 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ux(ind.img, 560, 320)}
                      alt={ind.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <h2 className="absolute bottom-3 left-4 font-display text-xl font-bold text-white">
                      {ind.name}
                    </h2>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <p className="text-sm text-muted leading-relaxed line-clamp-3">{ind.blurb}</p>
                    <div className="mt-auto pt-4 flex items-center justify-between text-sm">
                      <span className="text-muted-dim">
                        {count > 0 ? `${count} case ${count === 1 ? "study" : "studies"}` : "Case studies soon"}
                      </span>
                      <span className="font-semibold text-accent group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}
