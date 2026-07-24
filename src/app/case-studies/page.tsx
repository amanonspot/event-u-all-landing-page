import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import CaseStudiesLibrary from "@/components/CaseStudiesLibrary";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real corporate events delivered concept to execution by Event‑U‑All — filter by industry, service, or company to see outcomes like yours.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title={<>Outcomes, not just <span className="text-gradient">events</span></>}
        intro="Filter by industry, service, or company to see how we've delivered for teams like yours."
        img="photo-1540575467063-178a50c2df87"
      />
      <Suspense fallback={<div className="px-6 md:px-12 py-16 text-center text-muted">Loading case studies…</div>}>
        <CaseStudiesLibrary />
      </Suspense>
    </>
  );
}
