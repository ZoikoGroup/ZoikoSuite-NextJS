import React from "react";

interface TrustCard {
  number: string;
  title: string;
  description: string;
}

export default function ScopeAndTrustSection() {
  const cards: TrustCard[] = [
    {
      number: "01",
      title: "No universal coverage",
      description:
        "Countries, industries, obligations and integrations need confirmation.",
    },
    {
      number: "02",
      title: "No evidence guarantee",
      description:
        "Immutability, audit readiness, exports and retention remain unverified.",
    },
    {
      number: "03",
      title: "Sensitive records",
      description:
        "No actual organization records, raw evidence or personal data in the public page.",
    },
    {
      number: "04",
      title: "No automated assurance",
      description:
        "Tracking and internal review never imply continuous compliance or certified standing.",
    },
  ];

  return (
    <section className="w-full bg-[#F6F5F1] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          SCOPE & TRUST
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-12">
          Governance clarity without overclaim.
        </h2>

        {/* Cards Grid: 3 columns on desktop, 4th card wraps nicely */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-black/5 p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                <span className="text-xs font-bold text-[#B49347] tracking-wider mb-3 block">
                  {card.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F2421] tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
