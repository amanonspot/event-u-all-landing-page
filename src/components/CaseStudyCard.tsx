import Link from "next/link";
import { ux } from "@/lib/images";
import { serviceLabel, type CaseStudy } from "@/lib/case-studies";

// Reusable case-study card — used on the homepage teaser and the library grid.
export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const headline = study.roi[0];
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col h-full bg-bg border border-border rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(11,18,32,0.08)] transition"
    >
      <div className="relative h-44 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ux(study.gallery[0], 560, 360)}
          alt={study.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-sm text-[11px] font-semibold text-white">
            {study.industry}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-accent/85 text-[11px] font-semibold text-white">
            {serviceLabel(study.service)}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        {headline && (
          <div className="mb-3">
            <span className="font-display text-2xl font-extrabold text-gradient">{headline.value}</span>
            <span className="text-xs text-muted-dim ml-2">{headline.label}</span>
          </div>
        )}
        <h3 className="font-display text-lg font-bold text-fg leading-snug">{study.title}</h3>
        <p className="text-sm text-muted mt-1.5">
          {study.client}
          {study.location ? ` · ${study.location}` : ""}
        </p>
        <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
          Read more →
        </span>
      </div>
    </Link>
  );
}
