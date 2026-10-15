import type { Metadata } from "next";
import PtaForm from "./calculator";

export const metadata: Metadata = {
  title: "PTA Mobile Tax Calculator 2026-27 — Passport & CNIC (DIRBS)",
  description:
    "Calculate PTA mobile registration tax for 2026-27 on passport or CNIC. Line-by-line breakup: customs duty, regulatory duty, sales tax, income tax, handset levy.",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is PTA registration cheaper on passport or CNIC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Passport is cheaper by the income tax line only. Phones registered on passport within 60 days of arrival skip income tax; customs duty, regulatory duty, sales tax and handset levy are the same on both.",
      },
    },
    {
      "@type": "Question",
      name: "How is PTA tax calculated in 2026-27?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Five charges: Rs 250 customs duty; fixed regulatory duty by value band (Rs 240–17,600); sales tax 18% (up to $500) or 25% (above $500) on value plus duties; fixed income tax by band on CNIC only (doubled for non-filers); and a mobile handset levy on smartphones.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <PtaForm />
    </>
  );
}
