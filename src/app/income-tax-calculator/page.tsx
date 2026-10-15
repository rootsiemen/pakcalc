import type { Metadata } from "next";
import IncomeTaxForm from "./calculator";
import { pageMeta, softwareAppLd, breadcrumbLd } from "../lib/seo";

const PAGE_PATH = "/income-tax-calculator";
const PAGE_TITLE =
  "Income Tax Calculator Pakistan 2026-27 — Salary Tax & Take-Home Pay";
const PAGE_DESC =
  "Free income tax calculator for salaried Pakistanis 2026-27. Enter monthly salary, get monthly tax, take-home pay and FBR slab breakdown under Finance Act 2026.";

export const metadata: Metadata = pageMeta({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESC,
});

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the income tax slabs for salaried individuals in Pakistan 2026-27?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0% up to Rs 600,000; 1% on Rs 600,001–1,200,000; Rs 6,000 + 11% on Rs 1,200,001–2,200,000; Rs 116,000 + 20% on Rs 2,200,001–3,200,000; Rs 316,000 + 25% on Rs 3,200,001–4,100,000; Rs 541,000 + 29% on Rs 4,100,001–5,600,000; Rs 976,000 + 32% on Rs 5,600,001–7,000,000; Rs 1,424,000 + 35% above Rs 7,000,000.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum taxable salary in Pakistan for 2026-27?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annual salary up to Rs 600,000 (Rs 50,000 per month) is fully exempt from income tax.",
      },
    },
  ],
};

const appLd = softwareAppLd(PAGE_TITLE, PAGE_DESC, PAGE_PATH);
const crumbLd = breadcrumbLd([
  { name: "Home", path: "" },
  { name: "Income Tax Calculator", path: PAGE_PATH },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }}
      />
      <IncomeTaxForm />
    </>
  );
}
