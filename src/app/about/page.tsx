import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <StubPage
      eyebrow="About"
      title="20+ years of concept-to-execution events"
      desc="Our full story — team, milestones and philosophy — is coming soon. In the meantime, tell us about your event and we'll show you what we can do."
    />
  );
}
