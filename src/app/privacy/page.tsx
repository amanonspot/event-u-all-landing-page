import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <StubPage
      eyebrow="Legal"
      title="Privacy Policy"
      desc="Our full privacy policy is being finalised. For any questions about how we handle your data, please contact us."
    />
  );
}
