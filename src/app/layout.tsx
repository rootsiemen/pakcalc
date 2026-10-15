import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PakCalc — Pakistan Tax & Money Calculators",
    template: "%s | PakCalc",
  },
  description:
    "Free Pakistan tax calculators: income tax on salary 2026-27, PTA mobile tax (passport & CNIC), and zakat calculator with live nisab. Accurate, updated, no signup.",
  keywords: [
    "income tax calculator pakistan 2026",
    "pta tax calculator",
    "zakat calculator pakistan",
    "salary tax calculator",
  ],
  openGraph: {
    title: "PakCalc — Pakistan Tax & Money Calculators",
    description:
      "Free calculators: income tax on salary, PTA mobile tax, zakat. Updated for 2026-27.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PakCalc",
  url: "https://calc.frinjo.me",
  description:
    "Free Pakistan tax and money calculators: income tax, PTA mobile tax, zakat.",
};

function Header() {
  const links = [
    { href: "/income-tax-calculator", label: "Income Tax" },
    { href: "/pta-tax-calculator", label: "PTA Tax" },
    { href: "/zakat-calculator", label: "Zakat" },
    { href: "/about", label: "About" },
  ];
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tight">
          <span className="text-emerald-700">Pak</span>
          <span className="text-zinc-900">Calc</span>
        </a>
        <nav className="flex gap-4 text-sm font-medium text-zinc-600">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-emerald-700">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-16">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-zinc-500">
        <p className="font-semibold text-zinc-700 mb-2">PakCalc</p>
        <p className="max-w-2xl">
          PakCalc provides free estimates for guidance only. It is not official
          tax advice. Rates change — confirm important decisions with FBR, PTA,
          or a qualified professional.
        </p>
        <div className="mt-4 flex gap-4">
          <a href="/about" className="hover:text-emerald-700">About</a>
          <a href="/privacy" className="hover:text-emerald-700">Privacy</a>
          <a href="/income-tax-calculator" className="hover:text-emerald-700">Income Tax</a>
          <a href="/pta-tax-calculator" className="hover:text-emerald-700">PTA Tax</a>
          <a href="/zakat-calculator" className="hover:text-emerald-700">Zakat</a>
        </div>
        <p className="mt-4 text-xs">© 2026 PakCalc. Rates last verified: October 2026.</p>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
