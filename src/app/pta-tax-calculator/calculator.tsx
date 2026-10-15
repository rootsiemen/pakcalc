"use client";

import { useMemo, useState } from "react";

type Band = {
  maxUsd: number;
  label: string;
  rd: number;
  incomeTax: number; // CNIC filer
  levy: number; // smartphone
  stRate: number;
};

// SRO 1064(I)/2026 + Finance Act 2026. Verified Oct 2026.
const BANDS: Band[] = [
  { maxUsd: 30, label: "Up to $30", rd: 240, incomeTax: 100, levy: 100, stRate: 0.18 },
  { maxUsd: 100, label: "$30 – $100", rd: 2400, incomeTax: 100, levy: 200, stRate: 0.18 },
  { maxUsd: 200, label: "$100 – $200", rd: 6000, incomeTax: 100, levy: 200, stRate: 0.18 },
  { maxUsd: 350, label: "$200 – $350", rd: 8800, incomeTax: 970, levy: 1800, stRate: 0.18 },
  { maxUsd: 500, label: "$350 – $500", rd: 12000, incomeTax: 5000, levy: 4000, stRate: 0.18 },
  { maxUsd: 700, label: "$500 – $700", rd: 17600, incomeTax: 11500, levy: 8000, stRate: 0.25 },
  { maxUsd: Infinity, label: "Above $700", rd: 17600, incomeTax: 11500, levy: 16000, stRate: 0.25 },
];

const fmt = (n: number) =>
  "Rs " + Math.round(n).toLocaleString("en-PK", { maximumFractionDigits: 0 });

export default function PtaForm() {
  const [usd, setUsd] = useState("600");
  const [rate, setRate] = useState("280");
  const [regType, setRegType] = useState<"cnic" | "passport">("cnic");
  const [filer, setFiler] = useState(true);
  const [smartphone, setSmartphone] = useState(true);

  const r = useMemo(() => {
    const usdV = parseFloat(usd) || 0;
    const rateV = parseFloat(rate) || 0;
    const valueRs = usdV * rateV;
    const band = BANDS.find((b) => usdV <= b.maxUsd) ?? BANDS[BANDS.length - 1];
    const cd = 250;
    const rd = band.rd;
    const st = Math.round((valueRs + cd + rd) * band.stRate);
    let it = 0;
    if (regType === "cnic") {
      it = band.incomeTax;
      if (!smartphone && usdV <= 30) it = 70; // basic phone, lowest band
      if (!filer) it *= 2;
    }
    const levy = smartphone ? band.levy : 0;
    const total = cd + rd + st + it + levy;
    return { usdV, rateV, valueRs, band, cd, rd, st, it, levy, total };
  }, [usd, rate, regType, filer, smartphone]);

  const inputCls =
    "mt-1 w-full rounded-xl border border-zinc-300 px-4 py-2.5 font-semibold focus:border-emerald-600 focus:outline-none";
  const segBtn = (active: boolean) =>
    `flex-1 rounded-lg px-3 py-2 text-sm font-semibold ${active ? "bg-emerald-700 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">
        PTA Mobile Tax Calculator 2026-27
      </h1>
      <p className="mt-3 text-zinc-600">
        Work out the DIRBS registration tax on an imported phone — on passport
        or CNIC, with every charge shown line by line.
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-zinc-700">Phone value (USD)</label>
            <input type="text" inputMode="decimal" value={usd} onChange={(e) => setUsd(e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-700">Exchange rate (Rs per $)</label>
            <input type="text" inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} className={inputCls} />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold text-zinc-700 mb-1">Registration type</label>
          <div className="flex gap-2">
            <button className={segBtn(regType === "cnic")} onClick={() => setRegType("cnic")}>CNIC</button>
            <button className={segBtn(regType === "passport")} onClick={() => setRegType("passport")}>Passport</button>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1">Filer status {regType === "passport" && <span className="font-normal text-zinc-400">(no effect on passport)</span>}</label>
            <div className="flex gap-2">
              <button className={segBtn(filer)} onClick={() => setFiler(true)}>Filer</button>
              <button className={segBtn(!filer)} onClick={() => setFiler(false)}>Non-filer</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1">Phone type</label>
            <div className="flex gap-2">
              <button className={segBtn(smartphone)} onClick={() => setSmartphone(true)}>Smartphone</button>
              <button className={segBtn(!smartphone)} onClick={() => setSmartphone(false)}>Basic</button>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-emerald-50 p-5">
          <p className="text-sm font-semibold text-emerald-800">Total PTA tax</p>
          <p className="text-3xl font-extrabold text-emerald-900">{fmt(r.total)}</p>
          <p className="mt-1 text-xs text-emerald-700">
            {regType === "cnic" ? "On CNIC" : "On passport"} · {fmt(r.usdV)} at Rs {r.rateV}/$ · Band: {r.band.label}
          </p>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Value in rupees", fmt(r.valueRs)],
                ["Customs duty", fmt(r.cd)],
                ["Regulatory duty", fmt(r.rd)],
                [`Sales tax (${Math.round(r.band.stRate * 100)}%)`, fmt(r.st)],
                ["Income tax" + (regType === "passport" ? " (exempt on passport)" : !filer ? " (non-filer ×2)" : ""), fmt(r.it)],
                ["Mobile handset levy", fmt(r.levy)],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-zinc-100">
                  <td className="py-2 text-zinc-600">{k}</td>
                  <td className="py-2 text-right font-semibold">{v}</td>
                </tr>
              ))}
              <tr className="font-extrabold">
                <td className="py-2">Total</td>
                <td className="py-2 text-right">{fmt(r.total)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-4 text-xs text-zinc-500">
        Estimate based on SRO 1064(I)/2026 and the Finance Act 2026. Customs uses
        its own assessed value for your exact model — the DIRBS amount on your
        PSID is final. Not official advice.
      </p>
    </div>
  );
}
