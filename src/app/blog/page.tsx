import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <StubPage
      eyebrow="Blog"
      title="Ideas for better corporate events"
      desc="Our blog is coming soon — playbooks on offsites, engagement, budgets and destinations. Check back shortly."
    />
  );
}
