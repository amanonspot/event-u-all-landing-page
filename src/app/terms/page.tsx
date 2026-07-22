import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <StubPage
      eyebrow="Legal"
      title="Terms & Conditions"
      desc="Our full terms of service are being finalised. For any questions, please get in touch with our team."
    />
  );
}
