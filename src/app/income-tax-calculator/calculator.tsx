"use client";

import { useMemo, useState } from "react";

type Slab = { upTo: number; base: number; rate: number; over: number; label: string };

// Finance Act 2026 — salaried individuals, FY 2026-27. Verified Oct 2026.
const SLABS: Slab[] = [
  { upTo: 600_000, base: 0, rate: 0, over: 0, label: "Up to Rs 600,000" },
  { upTo: 1_200_000, base: 0, rate: 0.01, over: 600_000, label: "Rs 600,001 – 1,200,000" },
  { upTo: 2_200_000, base: 6_000, rate: 0.11, over: 1_200_000, label: "Rs 1,200,001 – 2,200,000" },
  { upTo: 3_200_000, base: 116_000, rate: 0.2, over: 2_200_000, label: "Rs 2,200,001 – 3,200,000" },
  { upTo: 4_100_000, base: 316_000, rate: 0.25, over: 3_200_000, label: "Rs 3,200,001 – 4,100,000" },
  { upTo: 5_600_000, base: 541_000, rate: 0.29, over: 4_100_000, label: "Rs 4,100,001 – 5,600,000" },
  { upTo: 7_000_000, base: 976_000, rate: 0.32, over: 5_600_000, label: "Rs 5,600,001 – 7,000,000" },
  { upTo: Infinity, base: 1_424_000, rate: 0.35, over: 7_000_000, label: "Above Rs 7,000,000" },
];

function taxOn(annual: number): number {
  if (annual <= 0) return 0;
  const s = SLABS.find((x) => annual <= x.upTo)!;
  return Math.round(s.base + s.rate * (annual - s.over));
}

const fmt = (n: number) =>
  "Rs " + Math.round(n).toLocaleString("en-PK", { maximumFractionDigits: 0 });

export default function IncomeTaxForm() {
  const [monthly, setMonthly] = useState<string>("100000");

  const annual = useMemo(() => {
    const m = parseFloat(monthly.replace(/,/g, "")) || 0;
    return m * 12;
  }, [monthly]);

  const tax = useMemo(() => taxOn(annual), [annual]);
  const monthlyTax = tax / 12;
  const takeHome = annual / 12 - monthlyTax;
  const eff = annual > 0 ? (tax / annual) * 100 : 0;

  const activeIdx = SLABS.findIndex((x) => annual <= x.upTo);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">
        Income Tax Calculator Pakistan 2026-27
      </h1>
      <p className="mt-3 text-zinc-600">
        Calculate your salary income tax under the new FBR slabs (Finance Act
        2026). Enter your monthly gross salary to see monthly tax, take-home
        pay, and the slab breakdown.
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <label className="block text-sm font-semibold text-zinc-700">
          Monthly gross salary (Rs)
        </label>
        <input
          type="text"
          inputMode="numeric"
          value={monthly}
          onChange={(e) => setMonthly(e.target.value)}
          className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-2xl font-bold focus:border-emerald-600 focus:outline-none"
          placeholder="100,000"
        />

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-xl bg-emerald-50 p-4">
            <p className="text-xs font-semibold text-emerald-800">Annual tax</p>
            <p className="text-xl font-extrabold text-emerald-900">{fmt(tax)}</p>
          </div>
          <div className="rounded-xl bg-zinc-100 p-4">
            <p className="text-xs font-semibold text-zinc-600">Monthly tax</p>
            <p className="text-xl font-extrabold">{fmt(monthlyTax)}</p>
          </div>
          <div className="rounded-xl bg-zinc-100 p-4">
            <p className="text-xs font-semibold text-zinc-600">Take-home / month</p>
            <p className="text-xl font-extrabold">{fmt(takeHome)}</p>
          </div>
          <div className="rounded-xl bg-zinc-100 p-4">
            <p className="text-xs font-semibold text-zinc-600">Effective rate</p>
            <p className="text-xl font-extrabold">{eff.toFixed(2)}%</p>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-bold">2026-27 salaried slabs (FBR)</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-zinc-500 border-b">
                <th className="py-2 pr-4">Annual income</th>
                <th className="py-2">Tax</th>
              </tr>
            </thead>
            <tbody>
              {SLABS.map((s, i) => (
                <tr
                  key={s.label}
                  className={`border-b border-zinc-100 ${i === activeIdx && annual > 0 ? "bg-emerald-50 font-semibold" : ""}`}
                >
                  <td className="py-2 pr-4">{s.label}</td>
                  <td className="py-2">
                    {s.rate === 0
                      ? "0% (exempt)"
                      : `${fmt(s.base)} + ${Math.round(s.rate * 100)}% above Rs ${s.over.toLocaleString("en-PK")}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          The 9% surcharge on income above Rs 10 million has been abolished for
          2026-27. Estimate only — not official tax advice.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold text-zinc-900">How the calculation works</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Pakistan taxes salaried income in progressive slabs — each rate
          applies only to the income inside that band. The fixed amounts (Rs
          6,000, Rs 116,000, etc.) are the cumulative tax on everything below
          the band. Your employer deducts this monthly from your payslip.
        </p>
      </div>
    </div>
  );
}
