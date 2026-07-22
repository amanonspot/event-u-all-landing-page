import type { Metadata } from "next";
import ProposalForm from "@/components/ProposalForm";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a customised proposal for your corporate event. Call, WhatsApp, or send us your brief — we respond within one business day.",
};

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi Event‑U‑All, I'd like a proposal for a corporate event."
  )}`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let&apos;s create something <span className="text-gradient">extraordinary</span></>}
        intro="Tell us about your event and we'll craft a tailored proposal within 48 hours."
        img="photo-1511578314322-379afb476865"
      />

      <section className="px-6 md:px-12 py-20 bg-surface">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <ContactCard label="Call us" value={SITE.phoneDisplay} href={SITE.phoneHref} />
            <ContactCard label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <ContactCard label="WhatsApp" value="Chat with our team" href={whatsappHref} external />
            <div className="bg-bg border border-border rounded-2xl p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-dim mb-2">Office</div>
              <p className="font-semibold text-fg">{SITE.address}</p>
              <div className="mt-4 h-40 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-sm text-muted-dim">
                Map embed placeholder
              </div>
            </div>
          </div>

          <ProposalForm />
        </div>
      </section>
    </>
  );
}

function ContactCard({
  label,
  value,
  href,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block bg-bg border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors"
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-dim mb-2">{label}</div>
      <p className="font-display text-lg font-bold text-fg">{value}</p>
    </a>
  );
}
