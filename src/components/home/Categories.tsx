import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import { CATEGORIES } from "@/lib/site";
import { ux } from "@/lib/images";

export default function Categories() {
  return (
    <section id="services" className="px-6 md:px-12 py-24 bg-bg">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="What are you planning?"
          title={<>One partner for every <span className="text-gradient">corporate moment</span></>}
          intro="From reward nights to international offsites — pick a starting point and we take it from concept to execution."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06}>
              <Link
                href={c.href}
                className="group relative block h-52 rounded-2xl overflow-hidden bg-hero-surface border border-hero-border p-6 flex flex-col justify-between transition-transform hover:-translate-y-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ux(c.img, 600, 500)}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-45 transition-all duration-300 group-hover:opacity-60 group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-2xl opacity-50 transition-opacity group-hover:opacity-80"
                  style={{ background: c.accent }}
                />
                <span
                  className="relative text-xs font-semibold uppercase tracking-wider"
                  style={{ color: c.accent }}
                >
                  {c.tag}
                </span>
                <div className="relative">
                  <h3 className="font-display text-xl font-bold text-white leading-snug">
                    {c.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-hero-muted group-hover:text-white transition-colors">
                    Explore →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
