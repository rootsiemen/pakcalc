import type { Metadata } from "next";
import { pageMeta } from "./lib/seo";

export const metadata: Metadata = pageMeta({
  path: "",
  title: "PakCalc — Free Pakistan Tax & Money Calculators (2026-27)",
  description:
    "Calculate Pakistan income tax on salary, PTA mobile registration tax (passport & CNIC), and zakat with live nisab. Free, accurate, updated for 2026-27.",
  absoluteTitle: true,
});

const tools = [
  {
    href: "/income-tax-calculator",
    title: "Income Tax Calculator",
    desc: "Salary tax for 2026-27 under the new FBR slabs. Monthly tax, take-home pay, slab breakdown.",
    tag: "2026-27 slabs",
  },
  {
    href: "/pta-tax-calculator",
    title: "PTA Mobile Tax Calculator",
    desc: "DIRBS registration tax on imported phones — passport vs CNIC, filer vs non-filer, full line-by-line breakup.",
    tag: "Passport / CNIC",
  },
  {
    href: "/zakat-calculator",
    title: "Zakat Calculator",
    desc: "2.5% zakat on cash, gold, silver and business assets with live nisab from today's gold & silver rates.",
    tag: "Live nisab",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Pakistan Tax & Money <span className="text-emerald-700">Calculators</span>
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Free, accurate calculators updated for 2026-27 — income tax on salary,
          PTA mobile tax, and zakat. No signup, instant results.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tools.map((t) => (
          <a
            key={t.href}
            href={t.href}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition"
          >
            <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full px-3 py-1">
              {t.tag}
            </span>
            <h2 className="mt-3 text-xl font-bold">{t.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{t.desc}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-emerald-700">
              Calculate now →
            </span>
          </a>
        ))}
      </div>

      <div className="mt-14 rounded-2xl bg-white border border-zinc-200 p-6">
        <h2 className="text-xl font-bold">Why PakCalc?</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600 list-disc pl-5">
          <li>Rates follow the Finance Act 2026 and FBR SRO 1064(I)/2026 — verified October 2026.</li>
          <li>Line-by-line breakup so you see exactly where every rupee goes.</li>
          <li>Works on mobile, no account needed, results are instant.</li>
        </ul>
      </div>
    </div>
  );
}
