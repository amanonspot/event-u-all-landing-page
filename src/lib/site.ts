// Central content + config for Event‑U‑All.
// Swap placeholder contact details / lists for real client data when available.

export const SITE = {
  name: "Event‑U‑All",
  tagline: "Corporate Events Planned to Perfection",
  phoneDisplay: "+91 99999 99999",
  phoneHref: "tel:+919999999999",
  email: "hello@eventuall.com",
  address: "PAN‑India · Head Office, Bengaluru, India",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999",
  socials: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/#activities", label: "Activities" },
  { href: "/#artists", label: "Artists" },
  { href: "/#industries", label: "Industries" },
  { href: "/gallery", label: "Gallery" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Corporate Clients" },
  { value: 5000, suffix: "+", label: "Events Delivered" },
];

export const CLIENT_LOGOS = [
  "Google", "Microsoft", "Zoom", "Amazon", "Autodesk", "Nike",
  "EY", "PwC", "Adobe", "Oracle", "Infosys", "TCS", "Accenture", "IBM",
];

// Category tiles — "What are you planning?"
export const CATEGORIES = [
  { title: "Rewards & Recognition", tag: "R&R", accent: "#e0653c", href: "/services#rr", img: "photo-1519671482749-fd09be7ccebf" },
  { title: "Corporate Offsites", tag: "Offsite & MICE", accent: "#22c55e", href: "/services#offsites", img: "photo-1540575467063-178a50c2df87" },
  { title: "Team Building", tag: "Engagement", accent: "#3b82f6", href: "/services#team-building", img: "photo-1522071820081-009f0129c71c" },
  { title: "Annual Day", tag: "Celebrations", accent: "#c8963a", href: "/services#annual-day", img: "photo-1533174072545-7a4b6ad7a6c3" },
  { title: "Real Estate Launch", tag: "Launches", accent: "#a855f7", href: "/services#launches", img: "photo-1587825140708-dfaf72ae4b04" },
  { title: "Exhibitions & Expos", tag: "Exhibitions", accent: "#06b6d4", href: "/services#exhibitions", img: "photo-1511578314322-379afb476865" },
];

export const DESTINATIONS = [
  { name: "Goa", blurb: "Beach offsites & sundowners", img: "photo-1512343879784-a960bf40e7f2" },
  { name: "Thailand", blurb: "International team retreats", img: "photo-1528181304800-259b08848526" },
  { name: "Vietnam", blurb: "Culture-rich MICE experiences", img: "photo-1528127269322-539801943592" },
  { name: "Dubai", blurb: "Luxury leadership retreats", img: "photo-1512453979798-5ea266f8880c" },
  { name: "Bali", blurb: "Wellness & incentive tours", img: "photo-1537996194471-e657df975ab4" },
  { name: "Bengaluru", blurb: "City offsites & townhalls", img: "photo-1596176530529-78163a4f7af2" },
  { name: "Coorg", blurb: "Plantation team getaways", img: "photo-1506929562872-bb421503ef21" },
  { name: "Lonavala", blurb: "Weekend adventure camps", img: "photo-1464366400600-7168b8af9bc3" },
];

export const ACTIVITIES = [
  { title: "Adventure Challenge", blurb: "High-energy outdoor missions that push teams past their comfort zone.", img: "photo-1517457373958-b7bdd4587205" },
  { title: "The Amazing Race", blurb: "City-wide clue hunts that reward collaboration and quick thinking.", img: "photo-1511578314322-379afb476865" },
  { title: "Survival Challenge", blurb: "Wilderness problem-solving that forges real trust.", img: "photo-1475721027785-f74eccf877e2" },
  { title: "Escape Rooms", blurb: "Time-boxed puzzles built around your company values.", img: "photo-1560439514-4e9645039924" },
  { title: "Leadership Workshops", blurb: "Facilitated sessions that turn managers into leaders.", img: "photo-1505373877841-8d25f7d46678" },
  { title: "CSR Activities", blurb: "Purpose-led team building that gives back to communities.", img: "photo-1544928147-79a2dbc1f389" },
];

export const ARTISTS = [
  { title: "Celebrity Artists", blurb: "A-list performers for marquee nights.", img: "photo-1470229722913-7c0e2dbbafd3" },
  { title: "Music Bands", blurb: "Live bands across genres and languages.", img: "photo-1492684223066-81342ee5ff30" },
  { title: "Comedians", blurb: "Corporate-clean stand-up that lands.", img: "photo-1511795409834-ef04bbd61622" },
  { title: "Motivational Speakers", blurb: "Keynotes that move the room.", img: "photo-1505373877841-8d25f7d46678" },
  { title: "Anchors & Emcees", blurb: "Hosts who keep the energy high.", img: "photo-1533174072545-7a4b6ad7a6c3" },
  { title: "DJs & Dancers", blurb: "After-parties that never dip.", img: "photo-1523580494863-6f3031224c94" },
];

export const WHY_US = [
  { stat: 20, suffix: "+", label: "Years Experience" },
  { stat: 1000, suffix: "+", label: "Corporate Clients" },
  { stat: 5000, suffix: "+", label: "Events Delivered" },
  { stat: 28, suffix: "", label: "States Covered" },
];

export const WHY_US_POINTS = [
  "Dedicated event manager per account",
  "End-to-end, concept-to-execution delivery",
  "Budget optimization without cutting corners",
  "Original creative concepts, never templated",
  "PAN‑India logistics & production network",
  "24×7 on-ground support during events",
];

export const PROCESS = [
  { step: "01", title: "Requirement Discussion", blurb: "We listen first — goals, budget, audience, and the outcome you need." },
  { step: "02", title: "Proposal", blurb: "A tailored concept, timeline, and transparent costing within 48 hours." },
  { step: "03", title: "Venue Finalization", blurb: "Shortlist, site visits, and negotiated bookings across destinations." },
  { step: "04", title: "Creative Planning", blurb: "Theme, stage, branding, content, and entertainment locked in." },
  { step: "05", title: "Production", blurb: "AV, fabrication, travel, and hospitality managed under one roof." },
  { step: "06", title: "Execution", blurb: "A dedicated crew runs the day so your team just shows up." },
  { step: "07", title: "Feedback", blurb: "Post-event report, media, and measurable outcomes." },
];

export const TESTIMONIALS = [
  { quote: "Event‑U‑All turned our annual day into the most talked-about event of the year. Flawless execution.", name: "HR Head", company: "Fortune 500 IT Firm" },
  { quote: "From concept to on-ground delivery in Goa, everything was seamless. They think like an extension of our team.", name: "Admin Lead", company: "Global Consulting" },
  { quote: "Our dealer meet had 800 attendees across three cities. Not a single detail slipped.", name: "Marketing Director", company: "Automobile Major" },
  { quote: "Budgets respected, creative elevated, timelines beaten. Rare combination.", name: "CXO", company: "Manufacturing Group" },
];

export const INDUSTRIES = [
  "IT/Tech", "BFSI", "FMCG", "Pharma/Healthcare", "Real Estate", "Manufacturing",
  "E-commerce", "Retail", "Automotive", "Education", "Hospitality",
];

export const SERVICE_GROUPS = [
  {
    id: "corporate",
    name: "Corporate Events",
    items: ["Annual Day", "Townhall", "Leadership Summit", "Conferences", "Dealer Meets", "Sales Kickoffs"],
  },
  {
    id: "engagement",
    name: "Employee Engagement",
    items: ["Rewards & Recognition", "Team Building", "Fun Fridays", "Sports Day", "Family Day", "CSR Events"],
  },
  {
    id: "outdoor",
    name: "Outdoor Experiences",
    items: ["Corporate Offsites", "Luxury Retreats", "Adventure Camps", "Leadership Retreats", "Destination Events"],
  },
  {
    id: "launches",
    name: "Launches",
    items: ["Product Launch", "Brand Launch", "Real Estate Launch", "Retail Launch", "Franchise Launch"],
  },
  {
    id: "exhibitions",
    name: "Exhibitions",
    items: ["Trade Shows", "Corporate Expos", "Booth Design", "Conference Management"],
  },
];

export const FAQS = [
  { q: "How much does a corporate event cost?", a: "It depends on scale, destination, and inclusions. After a short discovery call we share a transparent, itemised proposal — usually within 48 hours." },
  { q: "Do you operate across India?", a: "Yes. We run events PAN‑India and manage international offsites in destinations like Thailand, Dubai, Vietnam, and Bali." },
  { q: "Can you arrange artists and performers?", a: "Absolutely — celebrity artists, bands, comedians, speakers, anchors, and DJs are all part of our network." },
  { q: "Do you handle travel and hospitality?", a: "We manage the full stack: travel, stay, transfers, and on-ground hospitality, all under one dedicated event manager." },
  { q: "How early should we book?", a: "For large offsites and destination events we recommend 6–8 weeks. We regularly turn around smaller events faster." },
  { q: "Do you provide event branding and production?", a: "Yes — stage design, AV, fabrication, branding, and content are all delivered in-house." },
];
