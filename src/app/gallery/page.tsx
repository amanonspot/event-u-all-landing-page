import type { Metadata } from "next";
import GalleryMasonry from "@/components/GalleryMasonry";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at corporate events, offsites, award nights, launches and team building experiences delivered by Event‑U‑All.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={<>Moments we&apos;ve <span className="text-gradient">brought to life</span></>}
        intro="A snapshot of the events, offsites and celebrations we've produced for India's leading brands."
        img="photo-1492684223066-81342ee5ff30"
      />

      <section className="px-6 md:px-12 py-20 bg-bg">
        <div className="max-w-6xl mx-auto">
          <GalleryMasonry />
        </div>
      </section>
    </>
  );
}
