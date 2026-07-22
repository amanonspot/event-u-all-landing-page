import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import { ACTIVITIES } from "@/lib/site";
import { ux } from "@/lib/images";

export default function Activities() {
  return (
    <section id="activities" className="px-6 md:px-12 py-24 bg-bg scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Team Building"
          title={<>Activities that build <span className="text-gradient">real teams</span></>}
          intro="Curated experiences designed around your goals — bonding, strategy, leadership, or pure fun."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACTIVITIES.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.06}>
              <div className="group h-full bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-colors">
                <div className="relative h-40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ux(a.img, 520, 320)}
                    alt={a.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-white text-sm font-display font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-display text-lg font-bold text-fg">{a.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{a.blurb}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 text-center">
            <Link href="/services#team-building" className="inline-flex px-7 py-3.5 border border-border text-fg text-[15px] font-semibold rounded-lg hover:bg-surface transition">
              View All Activities
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
