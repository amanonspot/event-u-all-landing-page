import Link from "next/link";
import { SITE } from "@/lib/site";

const SERVICES = [
  { href: "/services#rr", label: "Rewards & Recognition" },
  { href: "/services#team-building", label: "Team Building" },
  { href: "/services#offsites", label: "Corporate Offsites" },
  { href: "/services#launches", label: "Launches" },
];

const COMPANY = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: SITE.socials.linkedin, label: "LinkedIn" },
  { href: SITE.socials.instagram, label: "Instagram" },
  { href: SITE.socials.facebook, label: "Facebook" },
  { href: SITE.socials.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-hero-bg text-hero-fg px-6 md:px-12 py-16 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
        <div className="col-span-2">
          <Link href="/" aria-label="Event‑U‑All — home" className="inline-flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Event‑U‑All" className="h-8 w-auto brightness-0 invert" />
          </Link>
          <p className="text-sm text-hero-muted mt-4 max-w-[280px] leading-relaxed">
            Concept to execution corporate event management. Trusted by India&apos;s
            leading brands for 20+ years.
          </p>
          <div className="mt-5 flex flex-col gap-1.5 text-sm text-hero-muted">
            <a href={SITE.phoneHref} className="hover:text-white transition-colors">{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
            <span>{SITE.address}</span>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-hero-muted mb-4">Services</div>
          <div className="flex flex-col gap-2.5">
            {SERVICES.map((s) => (
              <Link key={s.label} href={s.href} className="text-sm text-hero-muted hover:text-white transition-colors">{s.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-hero-muted mb-4">Company</div>
          <div className="flex flex-col gap-2.5">
            {COMPANY.map((c) => (
              <Link key={c.label} href={c.href} className="text-sm text-hero-muted hover:text-white transition-colors">{c.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-hero-muted mb-4">Follow</div>
          <div className="flex flex-col gap-2.5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-hero-muted hover:text-white transition-colors">{s.label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-hero-border flex flex-col sm:flex-row gap-3 justify-between text-sm text-hero-muted">
        <p>© {new Date().getFullYear()} Event‑U‑All. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
