import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";
import { INDUSTRY_DETAILS } from "@/lib/industries";

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
  "/industries",
  ...CASE_STUDIES.map((c) => `/case-studies/${c.slug}`),
  ...INDUSTRY_DETAILS.map((i) => `/industries/${i.slug}`),
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
