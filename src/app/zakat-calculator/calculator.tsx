"use client";

import { useMemo, useState } from "react";

// Rates verified 2026-10-15 (All Pakistan Sarafa Association). User-editable.
const DEFAULT_GOLD_TOLA = 437836;
const DEFAULT_SILVER_TOLA = 6148;

const fmt = (n: number) =>
  "Rs " + Math.round(n).toLocaleString("en-PK", { maximumFractionDigits: 0 });

const num = (s: string) => parseFloat(s.replace(/,/g, "")) || 0;

export default function ZakatForm() {
  const [cash, setCash] = useState("500000");
  const [goldTola, setGoldTola] = useState("2");
  const [silverTola, setSilverTola] = useState("0");
  const [assets, setAssets] = useState("0");
  const [debts, setDebts] = useState("0");
  const [goldRate, setGoldRate] = useState(String(DEFAULT_GOLD_TOLA));
  const [silverRate, setSilverRate] = useState(String(DEFAULT_SILVER_TOLA));

  const r = useMemo(() => {
    const gr = num(goldRate) || DEFAULT_GOLD_TOLA;
    const sr = num(silverRate) || DEFAULT_SILVER_TOLA;
    const nisabGold = 7.5 * gr;
    const nisabSilver = 52.5 * sr;
    const nisab = Math.min(nisabGold, nisabSilver);
    const goldVal = num(goldTola) * gr;
    const silverVal = num(silverTola) * sr;
    const total = num(cash) + goldVal + silverVal + num(assets) - num(debts);
    const liable = total >= nisab && total > 0;
    const zakat = liable ? total * 0.025 : 0;
    return { gr, sr, nisabGold, nisabSilver, nisab, goldVal, silverVal, total, liable, zakat };
  }, [cash, goldTola, silverTola, assets, debts, goldRate, silverRate]);

  const inputCls =
    "mt-1 w-full rounded-xl border border-zinc-300 px-4 py-2.5 font-semibold focus:border-emerald-600 focus:outline-none";
  const lbl = "block text-sm font-semibold text-zinc-700";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">Zakat Calculator 2026</h1>
      <p className="mt-3 text-zinc-600">
        Calculate 2.5% zakat on cash, gold, silver and business assets. Nisab is
        worked out live from today&apos;s Pakistan bullion rates (editable below).
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className={lbl}>Cash in hand &amp; bank (Rs)</label>
            <input value={cash} onChange={(e) => setCash(e.target.value)} inputMode="numeric" className={inputCls} />
          </div>
          <div>
            <label className={lbl}>Gold owned (tola)</label>
            <input value={goldTola} onChange={(e) => setGoldTola(e.target.value)} inputMode="decimal" className={inputCls} />
          </div>
          <div>
            <label className={lbl}>Silver owned (tola)</label>
            <input value={silverTola} onChange={(e) => setSilverTola(e.target.value)} inputMode="decimal" className={inputCls} />
          </div>
          <div>
            <label className={lbl}>Investments / business stock (Rs)</label>
            <input value={assets} onChange={(e) => setAssets(e.target.value)} inputMode="numeric" className={inputCls} />
          </div>
          <div>
            <label className={lbl}>Debts you owe (Rs)</label>
            <input value={debts} onChange={(e) => setDebts(e.target.value)} inputMode="numeric" className={inputCls} />
          </div>
        </div>

        <div className="mt-6 border-t border-zinc-100 pt-4">
          <p className="text-sm font-semibold text-zinc-700">Today&apos;s bullion rates (editable)</p>
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            <div>
              <label className={lbl}>Gold per tola (Rs)</label>
              <input value={goldRate} onChange={(e) => setGoldRate(e.target.value)} inputMode="numeric" className={inputCls} />
            </div>
            <div>
              <label className={lbl}>Silver per tola (Rs)</label>
              <input value={silverRate} onChange={(e) => setSilverRate(e.target.value)} inputMode="numeric" className={inputCls} />
            </div>
          </div>
          <p className="mt-2 text-xs text-zinc-500">
            Nisab: lower of 7.5 tola gold ({fmt(r.nisabGold)}) and 52.5 tola silver ({fmt(r.nisabSilver)}) = <strong>{fmt(r.nisab)}</strong>
          </p>
        </div>

        <div className={`mt-6 rounded-xl p-5 ${r.liable ? "bg-emerald-50" : "bg-zinc-100"}`}>
          <p className={`text-sm font-semibold ${r.liable ? "text-emerald-800" : "text-zinc-600"}`}>
            {r.liable ? "Zakat due (2.5%)" : "No zakat due"}
          </p>
          <p className={`text-3xl font-extrabold ${r.liable ? "text-emerald-900" : "text-zinc-700"}`}>
            {r.liable ? fmt(r.zakat) : "—"}
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Net zakatable wealth: {fmt(Math.max(r.total, 0))} · Nisab: {fmt(r.nisab)}
            {!r.liable && r.total > 0 && " (below nisab)"}
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs text-zinc-500">
        Zakat is due when zakatable wealth held for one lunar year meets or
        exceeds nisab. This is a general estimate — consult a scholar for
        specific rulings.
      </p>
    </div>
  );
}
