import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import PageHeader from "@/components/PageHeader";
import { DESTINATIONS } from "@/lib/site";
import { ux } from "@/lib/images";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Corporate offsite and MICE destinations across India and abroad — Goa, Thailand, Dubai, Bali, Vietnam, Bengaluru and more.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Destinations"
        title={<>Offsites your team will <span className="text-gradient">never forget</span></>}
        intro="From beach sundowners to international retreats — we handle venues, travel, stay and on-ground execution end to end."
        img="photo-1528181304800-259b08848526"
      />

      <section className="px-6 md:px-12 py-20 bg-bg">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((d, i) => (
            <FadeIn key={d.name} delay={i * 0.05}>
              <div className="rounded-2xl overflow-hidden bg-surface border border-border">
                <div className="h-48 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ux(d.img, 640, 420)}
                    alt={d.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h2 className="absolute bottom-3 left-4 font-display text-2xl font-bold text-white">
                    {d.name}
                  </h2>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted">{d.blurb}</p>
                  <Link href="/contact" className="mt-3 inline-flex text-sm font-semibold text-accent hover:opacity-80">
                    Plan an offsite here →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
