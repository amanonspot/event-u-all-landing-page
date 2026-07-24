// ⚠ PLACEHOLDER CONTENT — client names, logos, and ROI numbers are illustrative.
// Every metric here must be sourced and approved by the client before publishing
// (see information-architecture.md §6 / §7.4). Swap `client` for real names (or
// keep anonymized labels like "Leading NBFC"), and replace `roi` values with
// verified figures. Gallery entries are Unsplash photo IDs resolved via ux().

import { INDUSTRIES } from "@/lib/site";

// Service axis — maps 1:1 to the 5 groups on /services, with the anchor slugs
// used by that page's ANCHORS map (so a filter can deep-link into the section).
export const CASE_SERVICES = [
  { id: "corporate", label: "Corporate Events", anchor: "corporate" },
  { id: "rr", label: "Rewards & Recognition", anchor: "rr" },
  { id: "offsites", label: "Offsites & Team Building", anchor: "offsites" },
  { id: "launches", label: "Launches", anchor: "launches" },
  { id: "exhibitions", label: "Exhibitions", anchor: "exhibitions" },
] as const;

export type ServiceId = (typeof CASE_SERVICES)[number]["id"];

// Industry axis reuses the site-wide taxonomy for consistent tagging.
export const CASE_INDUSTRIES = INDUSTRIES;

export type RoiMetric = { label: string; value: string };

export type CaseStudy = {
  slug: string;
  title: string;
  client: string; // real name or anonymized label (NDA)
  clientLogo?: string;
  industry: string; // one of CASE_INDUSTRIES
  service: ServiceId; // one of CASE_SERVICES ids
  location?: string;
  scale: string; // guests / duration / budget bracket
  challenge: string;
  solution: string;
  roi: RoiMetric[]; // 2–4 quantified outcomes (placeholder — verify!)
  testimonialQuote?: string;
  gallery: string[]; // Unsplash photo IDs (via ux())
  featured?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "pan-india-sales-conference-800-delegates",
    title: "Pan-India Sales Conference for 800 Delegates",
    client: "Leading NBFC",
    industry: "BFSI",
    service: "corporate",
    location: "Bengaluru",
    scale: "800 delegates · 3 days · ₹50 Lakh+ bracket",
    challenge:
      "Consolidate a fragmented regional sales network into one high-energy annual conference, on a tight 6-week runway across three arrival cities.",
    solution:
      "End-to-end production under one roof — venue, travel for 800, a themed main stage, live award ceremony, and a QR-based check-in app that cleared registration in under 20 minutes.",
    roi: [
      { label: "RSVP-to-attendance", value: "98%" },
      { label: "Under initial budget", value: "18%" },
      { label: "Avg. feedback score", value: "4.8/5" },
      { label: "Cities, zero incidents", value: "3" },
    ],
    testimonialQuote:
      "They ran an 800-person, three-city conference like a single seamless day. Not one detail slipped.",
    gallery: ["photo-1540575467063-178a50c2df87", "photo-1505373877841-8d25f7d46678", "photo-1511578314322-379afb476865"],
    featured: true,
  },
  {
    slug: "annual-awards-night-fmcg",
    title: "Annual Awards Night & Top-Performer Gala",
    client: "Global FMCG Brand",
    industry: "FMCG",
    service: "rr",
    location: "Goa",
    scale: "450 guests · 1 night · gala production",
    challenge:
      "Reinvent a dated internal awards night into a destination gala that would lift nominations and retention among top performers.",
    solution:
      "A beachside black-tie gala with bespoke stage design, a celebrity host, live entertainment, and a filmed recap package delivered within 48 hours.",
    roi: [
      { label: "YoY jump in nominations", value: "32%" },
      { label: "Post-event NPS", value: "72" },
      { label: "Recap video views", value: "40K+" },
    ],
    gallery: ["photo-1519671482749-fd09be7ccebf", "photo-1492684223066-81342ee5ff30", "photo-1533174072545-7a4b6ad7a6c3"],
    featured: true,
  },
  {
    slug: "leadership-offsite-thailand",
    title: "Leadership Offsite in Thailand",
    client: "Enterprise SaaS Company",
    industry: "IT/Tech",
    service: "offsites",
    location: "Thailand",
    scale: "60 leaders · 4 days · international",
    challenge:
      "Align a newly-merged leadership team and reset strategy — abroad, with full visa, travel, and agenda logistics handled for them.",
    solution:
      "A four-day international offsite blending facilitated strategy sessions with activity-led team building, curated dining, and end-to-end travel/visa support.",
    roi: [
      { label: "Leaders attended", value: "60/60" },
      { label: "Alignment score (post)", value: "4.7/5" },
      { label: "Re-booked next year", value: "Yes" },
    ],
    testimonialQuote:
      "Concept to on-ground delivery abroad — seamless. They think like an extension of our team.",
    gallery: ["photo-1528181304800-259b08848526", "photo-1522071820081-009f0129c71c", "photo-1517457373958-b7bdd4587205"],
    featured: true,
  },
  {
    slug: "ev-product-launch-automotive",
    title: "Flagship EV Product Launch",
    client: "Automotive Major",
    industry: "Automotive",
    service: "launches",
    location: "Mumbai",
    scale: "1,200 attendees · press + dealers",
    challenge:
      "Unveil a flagship EV to press and channel partners with a reveal moment strong enough to drive on-ground bookings.",
    solution:
      "A GTM launch with a kinetic reveal set, LED-wall storytelling, synchronized lighting, live streaming, and a dealer booking lounge on site.",
    roi: [
      { label: "On-ground bookings", value: "₹2.3 Cr" },
      { label: "Livestream reach", value: "180K" },
      { label: "Press pickups", value: "60+" },
    ],
    gallery: ["photo-1560439514-4e9645039924", "photo-1492684223066-81342ee5ff30", "photo-1470229722913-7c0e2dbbafd3"],
    featured: false,
  },
  {
    slug: "pharma-trade-show-activation",
    title: "Trade Show Booth & Activation",
    client: "Pharma Manufacturer",
    industry: "Pharma/Healthcare",
    service: "exhibitions",
    location: "Hyderabad",
    scale: "18×12m booth · 3-day expo",
    challenge:
      "Stand out at a crowded industry expo and convert footfall into qualified leads for the sales team.",
    solution:
      "A custom double-decker booth with product demo pods, a lead-capture kiosk, and scheduled micro-sessions that kept the stand busy through the day.",
    roi: [
      { label: "Qualified leads", value: "540" },
      { label: "Footfall vs. target", value: "+46%" },
      { label: "Demo sign-ups", value: "210" },
    ],
    gallery: ["photo-1511578314322-379afb476865", "photo-1540575467063-178a50c2df87", "photo-1505373877841-8d25f7d46678"],
    featured: false,
  },
  {
    slug: "family-day-manufacturing",
    title: "Family Day for 5,000 Employees",
    client: "Manufacturing Group",
    industry: "Manufacturing",
    service: "rr",
    location: "Pune",
    scale: "5,000 attendees · 1 day · carnival",
    challenge:
      "Host a single-day family carnival for 5,000 employees and dependents with tight crowd, safety, and F&B logistics.",
    solution:
      "A full carnival build — stages, kids' zones, curated F&B, and crowd-flow planning — delivered with a dedicated on-ground crew and zero-incident execution.",
    roi: [
      { label: "Attendees hosted", value: "5,000" },
      { label: "Safety incidents", value: "0" },
      { label: "Satisfaction score", value: "4.6/5" },
    ],
    gallery: ["photo-1544928147-79a2dbc1f389", "photo-1522071820081-009f0129c71c", "photo-1517457373958-b7bdd4587205"],
    featured: false,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function featuredCaseStudies(): CaseStudy[] {
  const feat = CASE_STUDIES.filter((c) => c.featured);
  return (feat.length ? feat : CASE_STUDIES).slice(0, 3);
}

export function serviceLabel(id: ServiceId): string {
  return CASE_SERVICES.find((s) => s.id === id)?.label ?? id;
}

export function serviceAnchor(id: ServiceId): string {
  return CASE_SERVICES.find((s) => s.id === id)?.anchor ?? "";
}
