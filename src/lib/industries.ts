// Per-industry detail: intro copy, hero image, and "brands worked with".
// Case studies come from CASE_STUDIES (tagged by `industry`) — no duplication.
//
// ⚠ PLACEHOLDER: brand names below are illustrative. Swap for real client logos
// when available — set `logo` to an image path and the UI renders the logo
// instead of the styled name box.

import { INDUSTRIES } from "@/lib/site";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";

export type Brand = { name: string; logo?: string };

export type Industry = {
  name: string; // matches an entry in INDUSTRIES (and CaseStudy.industry)
  slug: string;
  blurb: string;
  img: string; // Unsplash id via ux()
  brands: Brand[];
};

export function industrySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Content keyed by the industry name. Keep names in sync with INDUSTRIES.
const DETAILS: Record<string, { blurb: string; img: string; brands: string[] }> = {
  "IT/Tech": {
    blurb:
      "High-velocity teams, distributed offices, and product moments that need to land. We run sales kickoffs, leadership offsites, and launch events for technology companies.",
    img: "photo-1522071820081-009f0129c71c",
    brands: ["NimbusCloud", "ByteForge", "Quantel", "StackWorks", "Hexaline"],
  },
  BFSI: {
    blurb:
      "Compliance-heavy, high-stakes, and detail-obsessed. We deliver dealer meets, sales conferences, and award nights for banks, NBFCs, and insurers.",
    img: "photo-1540575467063-178a50c2df87",
    brands: ["Meridian NBFC", "AxisPoint", "SafeVault", "CapitalNest", "Assuro"],
  },
  FMCG: {
    blurb:
      "Fast-moving brands, national footprints, and channel networks to energize. We produce annual awards, distributor meets, and family days at scale.",
    img: "photo-1519671482749-fd09be7ccebf",
    brands: ["FreshCart", "Glowvia", "DailyGood", "Munchies Co.", "PureLeaf"],
  },
  "Pharma/Healthcare": {
    blurb:
      "Regulated, science-led, and audience-specific. We handle conferences, CME events, and expo activations for pharma and healthcare organisations.",
    img: "photo-1511578314322-379afb476865",
    brands: ["Medivance", "CuraLabs", "VitalCare", "GenRx", "Novabio"],
  },
  "Real Estate": {
    blurb:
      "Project launches, channel-partner meets, and broker events engineered to drive on-ground bookings and buzz.",
    img: "photo-1587825140708-dfaf72ae4b04",
    brands: ["Skyline Estates", "UrbanNest", "Prime Acres", "Vantage Realty"],
  },
  Manufacturing: {
    blurb:
      "Plants, dealer networks, and large workforces. We run townhalls, family days, safety-day events, and dealer conferences across cities.",
    img: "photo-1544928147-79a2dbc1f389",
    brands: ["IronWorks", "MechCore", "Tensile Ltd.", "ForgePro", "Unimech"],
  },
  "E-commerce": {
    blurb:
      "Always-on teams and seller ecosystems. We deliver seller summits, hackathons, and high-energy annual celebrations.",
    img: "photo-1560439514-4e9645039924",
    brands: ["ShopSphere", "KartlyReal", "QuickBasket", "DealNest"],
  },
  Retail: {
    blurb:
      "Store networks and seasonal moments. We run store-launch events, retail conferences, and reward programs for frontline teams.",
    img: "photo-1533174072545-7a4b6ad7a6c3",
    brands: ["TrendMart", "Vogue Retail", "StyleHub", "MegaStore"],
  },
  Automotive: {
    blurb:
      "Reveal moments, dealer networks, and press. We produce product launches, dealer conferences, and experiential drives.",
    img: "photo-1470229722913-7c0e2dbbafd3",
    brands: ["Velocity Motors", "DriveOne", "AutoNexa", "Torqueline"],
  },
  Education: {
    blurb:
      "Campuses, cohorts, and convocations. We manage annual days, fests, and leadership summits for institutions and edtech.",
    img: "photo-1523580494863-6f3031224c94",
    brands: ["LearnBridge", "EduNova", "Scholr", "CampusOne"],
  },
  Hospitality: {
    blurb:
      "Experience-first brands with exacting standards. We deliver brand activations, GMs' conferences, and celebration nights.",
    img: "photo-1512453979798-5ea266f8880c",
    brands: ["StayWell", "Aurora Hotels", "The Grand Co.", "Coast & Cove"],
  },
};

export const INDUSTRY_DETAILS: Industry[] = INDUSTRIES.map((name) => {
  const d = DETAILS[name] ?? {
    blurb: "Corporate events planned concept to execution for this sector.",
    img: "photo-1540575467063-178a50c2df87",
    brands: [],
  };
  return {
    name,
    slug: industrySlug(name),
    blurb: d.blurb,
    img: d.img,
    brands: d.brands.map((b) => ({ name: b })),
  };
});

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRY_DETAILS.find((i) => i.slug === slug);
}

export function caseStudiesForIndustry(name: string): CaseStudy[] {
  return CASE_STUDIES.filter((c) => c.industry === name);
}
