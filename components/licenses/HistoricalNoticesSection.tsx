import React from "react";

export default function HistoricalNoticesSection() {
  const rows = [
    {
      element: "Release archive",
      requirement:
        "Browse supported and historical notice bundles by product, version, distribution, and release date.",
    },
    {
      element: "Superseded state",
      requirement:
        "Old records remain available where useful but clearly marked superseded.",
    },
    {
      element: "Change log",
      requirement:
        "New component; removed component; version changed; license changed; attribution changed; source-offer changed; correction.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            HISTORICAL NOTICES, SUPERCEDED RELEASES & CHANGES
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Every release notice has a stable, immutable identifier
          </h1>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-b border-[#DCD6C8]">
          <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Element</div>
            <div className="md:col-span-8">Requirement</div>
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-start ${
                index !== rows.length - 1 ? "border-b border-[#DCD6C8]" : ""
              }`}
            >
              <div className="md:col-span-4 text-sm font-semibold text-[#0b1329] tracking-tight mb-2 md:mb-0">
                {row.element}
              </div>
              <div className="md:col-span-8 text-sm text-gray-600 max-w-xl font-light leading-relaxed">
                {row.requirement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
