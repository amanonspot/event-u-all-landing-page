import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (every route is prerendered) — export to plain HTML so
  // hosts like Netlify serve it directly without a Next.js server runtime.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
