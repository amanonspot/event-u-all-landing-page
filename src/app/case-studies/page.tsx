import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
    <StubPage
      eyebrow="Case Studies"
      title="Outcomes, not just events"
      desc="Detailed case studies — challenge, solution, execution and results — are being prepared. Reach out and we'll share relevant examples for your industry."
    />
  );
}
