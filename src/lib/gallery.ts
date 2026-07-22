// Gallery items reference Unsplash photo IDs (resolved via `ux()` in
// src/lib/images.ts). Swap for the client's real event photos when available.
export type GalleryItem = { title: string; span: "tall" | "wide" | "normal"; img: string };

export const GALLERY: GalleryItem[] = [
  { title: "Corporate Beach Treasure Hunt", span: "tall", img: "photo-1517457373958-b7bdd4587205" },
  { title: "The Grand Gala Night", span: "wide", img: "photo-1492684223066-81342ee5ff30" },
  { title: "Bollywood Entertainment Act", span: "normal", img: "photo-1523580494863-6f3031224c94" },
  { title: "Outdoor Day Outing, Bengaluru", span: "normal", img: "photo-1522071820081-009f0129c71c" },
  { title: "Annual Day Stage Production", span: "wide", img: "photo-1533174072545-7a4b6ad7a6c3" },
  { title: "Leadership Retreat, Goa", span: "tall", img: "photo-1540575467063-178a50c2df87" },
  { title: "Dealer Meet Conference", span: "normal", img: "photo-1505373877841-8d25f7d46678" },
  { title: "Product Launch Activation", span: "normal", img: "photo-1560439514-4e9645039924" },
  { title: "Awards & Recognition Night", span: "normal", img: "photo-1519671482749-fd09be7ccebf" },
  { title: "Family Day Carnival", span: "wide", img: "photo-1544928147-79a2dbc1f389" },
];
