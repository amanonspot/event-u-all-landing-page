import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SectionHeader } from "@/components/Section";
import { GALLERY } from "@/lib/gallery";
import { ux } from "@/lib/images";

export default function GalleryPreview() {
  const items = GALLERY.slice(0, 4);
  return (
    <section className="px-6 md:px-12 py-24 bg-bg">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          center
          eyebrow="Image Gallery"
          title={<>Moments we&apos;ve <span className="text-gradient">brought to life</span></>}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((g, i) => (
            <FadeIn key={g.title} delay={i * 0.06}>
              <div className="relative h-56 rounded-2xl overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ux(g.img, 520, 460)}
                  alt={g.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <p className="absolute bottom-3 left-4 right-4 text-sm font-semibold text-white leading-snug">
                  {g.title}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 text-center">
            <Link href="/gallery" className="inline-flex px-7 py-3.5 bg-accent text-white text-[15px] font-semibold rounded-lg hover:opacity-90 transition">
              View Full Gallery
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
