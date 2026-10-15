import type { Metadata } from "next";
import ZakatForm from "./calculator";

export const metadata: Metadata = {
  title: "Zakat Calculator Pakistan 2026 — 2.5% with Live Nisab",
  description:
    "Free zakat calculator: 2.5% on cash, gold, silver and business assets with nisab from today's Pakistan gold & silver rates.",
};

export default function Page() {
  return <ZakatForm />;
}
