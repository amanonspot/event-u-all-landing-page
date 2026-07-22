import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Carousel from "@/components/Carousel";
import { SectionHeader } from "@/components/Section";
import { DESTINATIONS } from "@/lib/site";
import { ux } from "@/lib/images";

export default function Destinations() {
  return (
    <section className="px-6 md:px-12 py-24 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow="Featured Destinations"
            title={<>Offsites your team will <span className="text-gradient">never forget</span></>}
          />
          <FadeIn>
            <Link href="/destinations" className="mb-12 hidden sm:inline-flex text-sm font-semibold text-accent hover:opacity-80">
              Explore all destinations →
            </Link>
          </FadeIn>
        </div>

        <Carousel ariaLabel="Featured destinations">
          {DESTINATIONS.map((d) => (
            <div
              key={d.name}
              className="snap-start shrink-0 w-[240px] sm:w-[260px] rounded-2xl overflow-hidden bg-bg border border-border shadow-sm"
            >
              <div className="h-52 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ux(d.img, 520, 420)}
                  alt={d.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-3 left-4 font-display text-xl font-bold text-white">
                  {d.name}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted">{d.blurb}</p>
                <Link href="/destinations" className="mt-3 inline-flex text-sm font-semibold text-accent hover:opacity-80">
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
