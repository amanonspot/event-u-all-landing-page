// Ancillary / enabling services that support the 5 core sellable groups shown in
// nav + homepage (see SERVICE_GROUPS in src/lib/site.ts). Sourced from the IA
// doc §8.
//
// ⚠ Confirm which of these are genuinely offered today vs. aspirational before
// publishing — mis-stated capabilities are a client-trust risk in this category.

export type ServiceCategory = { category: string; services: string[] };

export const ANCILLARY_SERVICES: ServiceCategory[] = [
  {
    category: "Venue & Logistics",
    services: [
      "Venue sourcing & negotiation",
      "Travel & accommodation management",
      "On-ground transport & coach coordination",
      "Permits, vendor & compliance management",
    ],
  },
  {
    category: "Production",
    services: [
      "Stage design & fabrication",
      "AV, lighting & sound production",
      "LED walls & live streaming",
      "Event tech — RSVP apps, QR check-in, live polling",
    ],
  },
  {
    category: "Talent & Entertainment",
    services: [
      "Artist & celebrity booking",
      "Emcee & anchor sourcing",
      "Choreography & performance curation",
    ],
  },
  {
    category: "Food & Beverage",
    services: [
      "Catering & menu curation",
      "Themed dining experiences",
      "Mixology & bar services",
    ],
  },
  {
    category: "Creative",
    services: [
      "Theme conceptualization",
      "Décor & set design",
      "Branding & signage",
      "Gifting & merchandise curation",
    ],
  },
  {
    category: "Documentation",
    services: [
      "Event photography & videography",
      "Post-event highlight films",
      "Drone coverage",
    ],
  },
  {
    category: "Specialized",
    services: [
      "Hybrid & virtual event streaming",
      "Sustainability-focused (green) events",
      "CSR-linked event add-ons",
      "International destination logistics (visa & customs support)",
    ],
  },
  {
    category: "Post-event",
    services: [
      "Feedback & analytics reporting",
      "ROI & impact reporting for stakeholders",
    ],
  },
];
