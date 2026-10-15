export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  description: string;
  toolHref: string;
  toolLabel: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "income-tax-slab-guide-pakistan-2026",
    title: "Income Tax on Salary in Pakistan 2026-27: Complete Slab Guide",
    date: "2026-10-15",
    excerpt:
      "Every slab, rate and worked example for salaried income tax in Pakistan for 2026-27 — plus the mistakes that cost people money.",
    description:
      "Complete guide to Pakistan's 2026-27 income tax slabs for salaried individuals: rates, worked examples, monthly tax table and how employers deduct it.",
    toolHref: "/income-tax-calculator",
    toolLabel: "Income Tax Calculator",
    content: `
<p>If you earn a salary in Pakistan, the Finance Act 2026 changed the rules on what you owe — and the good news is that most salaried people pay a little less this year. The surcharge that used to sit on top of higher incomes has been abolished, and the tax-free threshold stays at <strong>Rs 600,000 per year</strong> (Rs 50,000 a month). Earn that or less, and you owe zero income tax.</p>
<p>This guide walks through every slab for 2026-27, shows you how to calculate your own tax with a worked example, and clears up the misunderstandings that trip people up every year.</p>
<h2>The 2026-27 slabs for salaried individuals</h2>
<p>Pakistan uses a progressive system: higher slices of your income are taxed at higher rates, but the lower slices always keep their lower rate. Here are the official annual slabs:</p>
<table>
<thead><tr><th>Annual taxable income</th><th>Tax</th></tr></thead>
<tbody>
<tr><td>Up to Rs 600,000</td><td>0%</td></tr>
<tr><td>Rs 600,001 – 1,200,000</td><td>1% of the amount above Rs 600,000</td></tr>
<tr><td>Rs 1,200,001 – 2,200,000</td><td>Rs 6,000 + 11% of the amount above Rs 1,200,000</td></tr>
<tr><td>Rs 2,200,001 – 3,200,000</td><td>Rs 116,000 + 20% of the amount above Rs 2,200,000</td></tr>
<tr><td>Rs 3,200,001 – 4,100,000</td><td>Rs 316,000 + 25% of the amount above Rs 3,200,000</td></tr>
<tr><td>Rs 4,100,001 – 5,600,000</td><td>Rs 541,000 + 29% of the amount above Rs 4,100,000</td></tr>
<tr><td>Rs 5,600,001 – 7,000,000</td><td>Rs 976,000 + 32% of the amount above Rs 5,600,000</td></tr>
<tr><td>Above Rs 7,000,000</td><td>Rs 1,424,000 + 35% of the amount above Rs 7,000,000</td></tr>
</tbody>
</table>
<h2>Worked example: Rs 150,000 monthly salary</h2>
<p>Annual income is Rs 1,800,000, which falls in the Rs 1.2M–2.2M band. The math:</p>
<ul>
<li>Fixed amount for the band: <strong>Rs 6,000</strong></li>
<li>Plus 11% of (1,800,000 − 1,200,000) = 11% × 600,000 = <strong>Rs 66,000</strong></li>
<li>Total annual tax: <strong>Rs 72,000</strong> — about <strong>Rs 6,000 per month</strong></li>
</ul>
<p>Notice the effective rate is only 4% of total income, even though the person sits in the "11% slab". This is the single most misunderstood point in Pakistani salary tax, and we will come back to it below.</p>
<h2>Monthly tax quick reference</h2>
<table>
<thead><tr><th>Monthly salary</th><th>Approx. monthly tax</th></tr></thead>
<tbody>
<tr><td>Rs 50,000</td><td>Rs 0</td></tr>
<tr><td>Rs 100,000</td><td>Rs 500</td></tr>
<tr><td>Rs 150,000</td><td>Rs 6,000</td></tr>
<tr><td>Rs 200,000</td><td>Rs 15,167</td></tr>
<tr><td>Rs 300,000</td><td>Rs 41,333</td></tr>
<tr><td>Rs 500,000</td><td>Rs 103,417</td></tr>
</tbody>
</table>
<p>These are estimates before any adjustments. For your exact figure, run the numbers through our free <a href="/income-tax-calculator">income tax calculator</a> — it shows the full slab-by-slab breakup.</p>
<h2>How your employer deducts it</h2>
<p>Most salaried employees never file a separate payment: the employer divides your estimated annual tax into twelve equal parts and withholds it from each month's pay. This is an <em>adjustable</em> advance, not a final extra charge — when you file your return, the withheld amount counts toward what you owe.</p>
<h2>Three mistakes that cost people money</h2>
<p><strong>1. Confusing marginal and effective rates.</strong> If you earn Rs 1.8M a year you are not "paying 11%" — only the slice above Rs 1.2M is taxed at 11%. Your effective rate is far lower.</p>
<p><strong>2. Ignoring the filer advantage.</strong> Being on the Active Taxpayers List doesn't change these salary slabs, but it sharply reduces withholding on everything else — bank profits, property deals, vehicle purchases. Filing once pays for itself many times over.</p>
<p><strong>3. Forgetting the abolished surcharge.</strong> Older articles still mention a surcharge on high incomes. For 2026-27 it is gone — do not add it to your math.</p>
<h2>Bottom line</h2>
<p>For 2026-27 the system is simpler and slightly lighter than before: Rs 600,000 tax-free, eight clean bands, no surcharge. Plug your salary into the <a href="/income-tax-calculator">income tax calculator</a> to see your monthly deduction and take-home pay in seconds.</p>
    `,
  },
  {
    slug: "pta-mobile-tax-passport-vs-cnic-2026",
    title: "PTA Mobile Tax Pakistan 2026: Passport vs CNIC Registration Cost",
    date: "2026-10-15",
    excerpt:
      "Every charge in the PTA mobile tax explained — and whether registering on a passport really saves you money in 2026.",
    description:
      "PTA mobile registration tax 2026: full DIRBS charge breakup, passport vs CNIC cost comparison, the 60-day rule and how to register.",
    toolHref: "/pta-tax-calculator",
    toolLabel: "PTA Mobile Tax Calculator",
    content: `
<p>Brought a phone from abroad, or buying an imported one locally? Before it works on a Pakistani network for more than the grace period, it must be registered with the PTA's DIRBS system — and that means tax. The total is not one number but <strong>five separate charges</strong>, and whether you register on a passport or a CNIC changes the bill.</p>
<h2>The five charges that make up PTA tax</h2>
<p>Under SRO 1064(I)/2026, every imported phone pays the same first four lines; the fifth depends on how you register:</p>
<ol>
<li><strong>Customs duty — Rs 250 flat</strong> on every phone, regardless of value.</li>
<li><strong>Regulatory duty</strong> — a fixed amount by value band, ranging from roughly Rs 240 on the cheapest phones up to Rs 17,600 on flagships.</li>
<li><strong>Sales tax</strong> — 18% on phones valued up to $500, 25% above $500, charged on the phone's value plus the duties above.</li>
<li><strong>Mobile handset levy</strong> — an additional fixed levy on smartphones.</li>
<li><strong>Income tax (withholding)</strong> — a fixed amount by value band. This is the line that differs: it applies on CNIC registrations and is <strong>doubled for non-filers</strong>, but is skipped entirely on passport registrations.</li>
</ol>
<h2>Passport vs CNIC: where the difference actually is</h2>
<p>Four of the five charges are identical either way. The <em>only</em> saving from a passport registration is the income tax line. On a mid-range phone that can mean a few thousand rupees; on a flagship, considerably more — especially if you are a non-filer, where the CNIC income tax line doubles.</p>
<p>But passport registration has strict conditions:</p>
<ul>
<li>It must be done <strong>within 60 days of arrival</strong> in Pakistan.</li>
<li>It is meant for <strong>one phone per passport per year</strong> for personal use.</li>
<li>You need the passport number and arrival stamp details at the time of registration.</li>
</ul>
<p>If you miss the 60-day window, the passport route is closed and you register on CNIC like everyone else.</p>
<h2>A realistic comparison</h2>
<p>Take a phone valued around $400–500. On CNIC as a filer you would pay all five lines; on a passport you would pay the same bill minus the income tax line. As a non-filer on CNIC, that income tax line doubles — which is why non-filers see the biggest sticker shock and the biggest reason to get on the Active Taxpayers List. Run your exact phone value through our <a href="/pta-tax-calculator">PTA tax calculator</a> to see the line-by-line breakup for passport, CNIC filer, and CNIC non-filer side by side.</p>
<h2>How registration works</h2>
<ol>
<li>Find your phone's IMEI by dialing <strong>*#06#</strong>.</li>
<li>Go to the PTA DIRBS portal and create an account (or use the DIRBS app).</li>
<li>Enter the IMEI, your passport or CNIC details, and the phone's details.</li>
<li>The system generates a PSID payment slip — pay it through mobile banking, ATM or a bank branch.</li>
<li>Once payment confirms, the IMEI is whitelisted, usually within 24–48 hours.</li>
</ol>
<h2>What happens if you don't register?</h2>
<p>An unregistered phone works briefly on local networks and then gets blocked — calls, SMS and mobile data all stop. There is no workaround: the block is tied to the IMEI itself, so swapping SIMs changes nothing. With used imported phones, always verify the IMEI is PTA-approved <em>before</em> paying the seller.</p>
<h2>Bottom line</h2>
<p>Passport registration is cheaper, but only by the income tax line — and only within 60 days of arrival. Everyone else registers on CNIC, where being a filer cuts the bill. Check your exact cost with the <a href="/pta-tax-calculator">PTA mobile tax calculator</a> before you pay anything.</p>
    `,
  },
  {
    slug: "zakat-nisab-rates-2026",
    title: "Zakat Calculator 2026: Nisab, Rates and How to Calculate",
    date: "2026-10-15",
    excerpt:
      "Who pays zakat, how nisab is set from gold and silver prices, and a worked example of the 2.5% calculation.",
    description:
      "Zakat 2026 guide: nisab thresholds from gold and silver rates, which assets count, the 2.5% formula with a worked example.",
    toolHref: "/zakat-calculator",
    toolLabel: "Zakat Calculator",
    content: `
<p>Zakat is 2.5% of qualifying wealth held for a full lunar year — simple in principle, confusing in practice. The questions everyone asks are the same: <em>am I above nisab?</em>, <em>which assets count?</em>, and <em>what do I do about debts?</em> This guide answers all three with a worked example.</p>
<h2>When zakat becomes obligatory</h2>
<p>Three conditions must all hold:</p>
<ol>
<li><strong>Nisab</strong> — your zakatable wealth reaches the minimum threshold.</li>
<li><strong>Hawl</strong> — you have held that wealth for one lunar (hijri) year.</li>
<li><strong>Ownership</strong> — the wealth is fully yours and in your possession (not, say, a pension you cannot access yet).</li>
</ol>
<h2>What is nisab in 2026?</h2>
<p>Nisab is defined as the value of <strong>87.48 grams of gold</strong> or <strong>612.36 grams of silver</strong>. Because silver is far cheaper per gram, the silver nisab is much lower in rupee terms — and scholars who use it as the benchmark mean more people qualify to pay. In practice, most calculators in Pakistan show you both and let the silver value decide.</p>
<p>Gold and silver prices move daily, so a fixed rupee figure printed in an article goes stale fast. Our <a href="/zakat-calculator">zakat calculator</a> pulls today's Pakistan bullion rates and computes live nisab for you — that is the number you should use, not last month's.</p>
<h2>Which assets count?</h2>
<ul>
<li><strong>Cash</strong> in hand and in bank accounts.</li>
<li><strong>Gold and silver</strong> — jewellery included, at current market value (not what you paid).</li>
<li><strong>Business assets</strong> — stock-in-trade and inventory at wholesale value, plus business cash.</li>
<li><strong>Investments</strong> — shares, mutual funds and savings certificates at current value.</li>
<li><strong>Money owed to you</strong> that you expect to recover.</li>
</ul>
<p>Your home, the car you drive, furniture and personal items are <strong>not</strong> zakatable. Rental property itself is not zakatable either — but rental income you have saved up is.</p>
<h2>Don't forget to subtract debts</h2>
<p>Immediate debts and upcoming obligatory payments (a loan instalment due now, for example) are deducted from your zakatable total <em>before</em> applying the 2.5%. Long-term debts are a scholarly grey area; many scholars allow deducting only the portion due within the year.</p>
<h2>Worked example</h2>
<ul>
<li>Bank balance: Rs 800,000</li>
<li>Gold jewellery (60g at current rates): Rs 1,020,000</li>
<li>Business stock: Rs 500,000</li>
<li>Less: immediate loan payment due: Rs 200,000</li>
<li><strong>Net zakatable wealth: Rs 2,120,000</strong></li>
<li><strong>Zakat at 2.5%: Rs 53,000</strong></li>
</ul>
<p>First check this net figure against the live silver nisab — if it is above, zakat is due on the whole amount.</p>
<h2>Who can receive it?</h2>
<p>Zakat goes to the poor and needy, those in debt, and the other categories named in the Quran — not to your own dependents (parents, spouse, children), and by most scholars' view not to the wealthy or to mosques as institutions. When in doubt, give to individuals in genuine need.</p>
<h2>Bottom line</h2>
<p>Add up the qualifying assets, subtract immediate debts, check against live nisab, and pay 2.5%. The <a href="/zakat-calculator">zakat calculator</a> does all of this with today's gold and silver rates — try it before Ramadan or whenever your zakat year completes.</p>
    `,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
