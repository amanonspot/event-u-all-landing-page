"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import VideoLightbox from "@/components/VideoLightbox";
import { WORK_VIDEOS, type WorkVideo } from "@/lib/videos";

export default function FeaturedWork() {
  const [active, setActive] = useState<WorkVideo | null>(null);

  return (
    <section id="work" className="px-6 md:px-12 py-24 bg-hero-bg text-hero-fg scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          dark
          eyebrow="Featured Work"
          title={<>Real events, <span className="text-gradient">on film</span></>}
          intro="A look at some of the corporate events, expos and celebrations we've produced and captured end to end."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {WORK_VIDEOS.map((v, i) => {
            const playable = v.src.length > 0;
            return (
              <FadeIn key={v.id} delay={i * 0.06}>
                <button
                  onClick={() => playable && setActive(v)}
                  disabled={!playable}
                  aria-label={playable ? `Play ${v.title}` : `${v.title} — coming soon`}
                  className="group relative block w-full aspect-video rounded-2xl overflow-hidden border border-hero-border text-left disabled:cursor-default"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.poster}
                    alt={v.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                  {/* Play button / coming soon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {playable ? (
                      <span className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-accent/80">
                        <span className="ml-1 border-y-[10px] border-y-transparent border-l-[16px] border-l-white" />
                      </span>
                    ) : (
                      <span className="px-3 py-1.5 rounded-full bg-black/50 border border-white/20 text-xs font-semibold text-white/80">
                        Film coming soon
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-lg font-bold text-white leading-snug">{v.title}</h3>
                    <p className="text-sm text-white/70 mt-1">{v.subtitle}</p>
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {active && <VideoLightbox video={active} onClose={() => setActive(null)} />}
    </section>
  );
}
