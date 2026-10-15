import type { MetadataRoute } from "next";

const BASE = "https://calc.frinjo.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/income-tax-calculator", "/pta-tax-calculator", "/zakat-calculator", "/about", "/privacy"];
  return pages.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date("2026-10-15"),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
}
