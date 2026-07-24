import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eventuall.com";

const routes = [
  "",
  "/services",
  "/destinations",
  "/gallery",
  "/contact",
  "/about",
  "/case-studies",
  "/blog",
  ...CASE_STUDIES.map((c) => `/case-studies/${c.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.7,
  }));
}
