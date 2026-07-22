// Event films — single source of truth.
//
// Videos are hosted EXTERNALLY (CDN / Cloudflare Stream / Bunny / S3 / YouTube /
// Vimeo) to keep the repo light. Posters ship locally in /public/videos/posters.
//
// To go live: upload the compressed MP4s (handed off separately) to your host and
// paste the URLs below — either directly here, or via the matching NEXT_PUBLIC_*
// env vars (which take precedence). Until a `src` is set, the card shows its poster
// with a "coming soon" state and the hero falls back to its poster image.
//
// `kind` controls playback: "mp4" → <video>, "youtube"/"vimeo" → embedded <iframe>.
// For a YouTube/Vimeo card set `src` to the watch/embed URL and kind accordingly.

export type VideoKind = "mp4" | "youtube" | "vimeo";

export type WorkVideo = {
  id: string;
  title: string;
  subtitle: string;
  poster: string;
  src: string;
  kind: VideoKind;
};

const env = (v: string | undefined) => v ?? "";

export const HERO_VIDEO = {
  // A short (2.4 MB), muted, looping landscape clip for the hero background.
  // Bundled locally so it plays out of the box; override with a CDN URL via env.
  src: env(process.env.NEXT_PUBLIC_HERO_VIDEO_URL) || "/videos/hero-aerial.mp4",
  poster: "/videos/posters/fafai-aerial.jpg",
};

export const WORK_VIDEOS: WorkVideo[] = [
  {
    id: "fafai-aerial",
    title: "FAFAI Expo — Aerial Film",
    subtitle: "Exhibition · Aerial cinematography",
    poster: "/videos/posters/fafai-aerial.jpg",
    src: env(process.env.NEXT_PUBLIC_WORK_VIDEO_FAFAI_AERIAL),
    kind: "mp4",
  },
  {
    id: "fafai-highlights",
    title: "FAFAI Expo — Highlights",
    subtitle: "Exhibition · Event highlights",
    poster: "/videos/posters/fafai-highlights.jpg",
    src: env(process.env.NEXT_PUBLIC_WORK_VIDEO_FAFAI_HIGHLIGHTS),
    kind: "mp4",
  },
  {
    id: "halftime",
    title: "Halftime — Post-Event Film",
    subtitle: "Corporate event · Post-event edit",
    poster: "/videos/posters/halftime.jpg",
    src: env(process.env.NEXT_PUBLIC_WORK_VIDEO_HALFTIME),
    kind: "mp4",
  },
  {
    id: "iexceed-sangam",
    title: "I-Exceed Sangam",
    subtitle: "Corporate gathering · Short film",
    poster: "/videos/posters/iexceed-sangam.jpg",
    src: env(process.env.NEXT_PUBLIC_WORK_VIDEO_IEXCEED),
    kind: "mp4",
  },
];
