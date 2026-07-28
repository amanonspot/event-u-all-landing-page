import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import DragScroller from "@/components/DragScroller";
import { REAL_ESTATE } from "@/lib/site";
import { ux } from "@/lib/images";

export default function RealEstate() {
  return (
    <section id="real-estate" className="py-24 bg-hero-bg text-hero-fg scroll-mt-20 overflow-hidden">
      {/* Header + CTA stay within the content column */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            dark
            eyebrow="For Real Estate Developers"
            title={<>Launches that <span className="text-gradient">move inventory</span></>}
            intro="From project unveils to channel-partner meets — high-impact real estate events built to drive site visits and bookings."
          />
          <FadeIn>
            <span className="mb-12 hidden md:inline-flex text-xs font-semibold uppercase tracking-widest text-hero-muted">
              Drag to explore →
            </span>
          </FadeIn>
        </div>
      </div>

      {/* Full-bleed drag scroller — cards align to the content column, then
          peek off the right edge. */}
      <div className="pl-6 md:pl-[max(1.5rem,calc((100%-72rem)/2+3rem))]">
        <DragScroller ariaLabel="Real estate offerings">
          {REAL_ESTATE.map((r) => (
            <div
              key={r.title}
              className="group relative h-80 w-[320px] sm:w-[420px] shrink-0 rounded-2xl overflow-hidden border border-hero-border transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_18px_50px_rgba(0,0,0,0.4)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ux(r.img, 560, 460)}
                alt={r.title}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-colors duration-300 group-hover:from-black/75" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-lg font-bold text-white">{r.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed mt-1.5">{r.blurb}</p>
              </div>
            </div>
          ))}
          {/* trailing spacer so the last card can scroll fully into view */}
          <div aria-hidden className="shrink-0 w-6 md:w-12" />
        </DragScroller>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex px-7 py-3.5 bg-accent text-white text-[15px] font-semibold rounded-lg hover:opacity-90 hover:shadow-[0_0_40px_rgba(200,150,58,0.4)] transition"
            >
              Get Proposal →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
