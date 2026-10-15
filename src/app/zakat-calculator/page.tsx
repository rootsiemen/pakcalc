import type { Metadata } from "next";
import ZakatForm from "./calculator";
import { pageMeta, softwareAppLd, breadcrumbLd } from "../lib/seo";

const PAGE_PATH = "/zakat-calculator";
const PAGE_TITLE = "Zakat Calculator Pakistan 2026 — 2.5% with Live Nisab";
const PAGE_DESC =
  "Free zakat calculator: 2.5% on cash, gold, silver and business assets with nisab from today's Pakistan gold & silver rates.";

export const metadata: Metadata = pageMeta({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESC,
});

const appLd = softwareAppLd(PAGE_TITLE, PAGE_DESC, PAGE_PATH);
const crumbLd = breadcrumbLd([
  { name: "Home", path: "" },
  { name: "Zakat Calculator", path: PAGE_PATH },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }}
      />
      <ZakatForm />
    </>
  );
}
