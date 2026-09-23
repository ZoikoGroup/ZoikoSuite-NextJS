import React from "react";

export default function MigrationShadowModeSection() {
  const cards = [
    {
      title: "Shadow Ledger & Payroll",
      description:
        "Run finance and payroll in parallel — compare postings, balances, deductions, taxes, and exceptions against the incumbent system before cutover.",
    },
    {
      title: "Migration integrity",
      description:
        "Validate completeness, referential integrity, balances, historical lineage, and rejected records.",
    },
    {
      title: "ZoikoSchema layer",
      description:
        "Map external finance, payroll, HR, contract, and compliance data into a governed canonical structure.",
    },
    {
      title: "Progressive replacement",
      description:
        "Start as a governance layer, coexist with selected systems, consolidate over time, or replace where justified.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            MIGRATION & SHADOW MODE
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-[32px] font-serif font-bold text-[#0b1329] leading-[1.15] tracking-tight mb-4">
            Adopt without a big-bang risk
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Adopt ZoikoSuite through evidence-led migration — not an unproven
            big-bang replacement.
          </p>
        </div>

        {/* Outer Container Box with Background #F6F1E6 */}
        <div className="w-full bg-[#EFE8D8] rounded-3xl p-6 md:p-12 border border-[#EBE3D3]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#FBFAF7] rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 flex flex-col justify-between"
              >
                <h3 className="text-[#0b1329] text-base md:text-lg font-semibold tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
