import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/about",
  title: "About PakCalc",
  description:
    "About PakCalc — free Pakistan tax and money calculators for income tax, PTA mobile tax and zakat, updated for 2026-27.",
});

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">About PakCalc</h1>
      <p className="mt-4 text-zinc-600">
        PakCalc is a free set of money calculators built for Pakistan: income
        tax on salary under the 2026-27 FBR slabs, PTA mobile registration tax
        (DIRBS) on passport or CNIC, and a zakat calculator with live nisab.
      </p>
      <p className="mt-4 text-zinc-600">
        Rates are checked against the Finance Act 2026, FBR SRO 1064(I)/2026,
        and daily bullion rates, and every calculator shows a line-by-line
        breakup so you can see exactly how the number is reached.
      </p>
      <p className="mt-4 text-zinc-600">
        Everything runs in your browser — no signup, no data leaves your
        device. Figures are estimates for guidance, not official tax advice.
      </p>
    </div>
  );
}
