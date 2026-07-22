import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import { ARTISTS } from "@/lib/site";
import { ux } from "@/lib/images";

export default function Artists() {
  return (
    <section id="artists" className="px-6 md:px-12 py-24 bg-hero-bg text-hero-fg scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          dark
          eyebrow="Artist Management"
          title={<>Headline talent, <span className="text-gradient">booked & briefed</span></>}
          intro="From celebrity acts to stand-up and live bands — we handle curation, negotiation, and stage-ready delivery."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ARTISTS.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.06}>
              <div className="group relative h-64 rounded-2xl overflow-hidden border border-hero-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ux(a.img, 520, 420)}
                  alt={a.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-lg font-bold text-white">{a.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed mt-1.5">{a.blurb}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
