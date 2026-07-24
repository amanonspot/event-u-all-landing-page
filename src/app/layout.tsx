import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HashScroll from "@/components/HashScroll";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eventuall.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Event‑U‑All — Corporate Events Planned to Perfection",
    template: "%s — Event‑U‑All",
  },
  description:
    "Concept to execution corporate event management. 20+ years, 1000+ corporate clients, PAN‑India. Offsites, team building, R&R, annual days, launches and more.",
  keywords: [
    "corporate event management",
    "corporate offsites",
    "team building",
    "rewards and recognition",
    "annual day",
    "dealer meet",
    "event company India",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Event‑U‑All — Corporate Events Planned to Perfection",
    description:
      "Concept to execution corporate event management, trusted by India's leading brands.",
    siteName: "Event‑U‑All",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Event‑U‑All",
  url: siteUrl,
  description:
    "Concept-to-execution corporate event management company. 20+ years experience, 1000+ corporate clients, PAN‑India operations.",
  areaServed: "IN",
  slogan: "Corporate Events Planned to Perfection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <HashScroll />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
