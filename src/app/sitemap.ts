import type { MetadataRoute } from "next";

const BASE = "https://calc.frinjo.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/income-tax-calculator", "/pta-tax-calculator", "/zakat-calculator", "/blog", "/about", "/privacy"];
  const blogPosts = [
    "/blog/income-tax-slab-guide-pakistan-2026",
    "/blog/pta-mobile-tax-passport-vs-cnic-2026",
    "/blog/zakat-nisab-rates-2026",
  ];
  return [...pages, ...blogPosts].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date("2026-10-15"),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
}
