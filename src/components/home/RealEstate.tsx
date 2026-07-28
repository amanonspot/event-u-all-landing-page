import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import { REAL_ESTATE } from "@/lib/site";
import { ux } from "@/lib/images";

export default function RealEstate() {
  return (
    <section id="real-estate" className="px-6 md:px-12 py-24 bg-hero-bg text-hero-fg scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          dark
          eyebrow="For Real Estate Developers"
          title={<>Launches that <span className="text-gradient">move inventory</span></>}
          intro="From project unveils to channel-partner meets — high-impact real estate events built to drive site visits and bookings."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REAL_ESTATE.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.06}>
              <div className="group relative h-64 rounded-2xl overflow-hidden border border-hero-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ux(r.img, 520, 420)}
                  alt={r.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-lg font-bold text-white">{r.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed mt-1.5">{r.blurb}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

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
