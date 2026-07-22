// Central image helper. We hotlink Unsplash's on-the-fly optimized CDN
// (auto format + compression + crop), so no binaries live in the repo and
// images arrive already sized for the layout. Swap the IDs for the client's
// own photography when available — only this file and the data arrays change.

export function ux(id: string, w = 1200, h?: number): string {
  const crop = h ? `&fit=crop&h=${h}` : "&fit=crop";
  return `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format${crop}`;
}

// Full-bleed hero backdrop (stage lights / live event)
export const HERO_IMG = "photo-1492684223066-81342ee5ff30";
