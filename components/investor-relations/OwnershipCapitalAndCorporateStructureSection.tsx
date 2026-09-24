import React from "react";

export default function OwnershipCapitalAndCorporateStructureSection() {
  const rows = [
    {
      topic: "Ownership",
      rule: "Only approved description shown; percentages/names require explicit public approval.",
    },
    {
      topic: "Minority investors",
      rule: "Not named or logoed without rights and current approval.",
    },
    {
      topic: "Capital raises",
      rule: "Only formally approved/announced transactions are displayed.",
    },
    {
      topic: "Public-offering pathways",
      rule: "IPO/SPAC/other pathways mentioned only if the current approved IR source explicitly does and Legal approves repetition.",
    },
    {
      topic: "Guarantees",
      rule: "Parent guarantees, cross-defaults, or financial support are never inferred.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            OWNERSHIP, CAPITAL & CORPORATE STRUCTURE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Precise language, never inferred
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-200">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-gray-200 flex flex-col md:flex-row items-start justify-between gap-4 bg-gray-50/50 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="w-full md:w-4/12">Topic</div>
            <div className="w-full md:w-8/12">Public Design Rule</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 bg-white"
            >
              {/* Topic Column */}
              <div className="w-full md:w-4/12 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.topic}
              </div>

              {/* Rule Column */}
              <div className="w-full md:w-8/12 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.rule}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
