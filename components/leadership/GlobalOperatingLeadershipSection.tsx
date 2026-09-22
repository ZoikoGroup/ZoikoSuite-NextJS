import React from "react";

export default function GlobalOperatingLeadershipSection() {
  const rows = [
    {
      element: "Global context",
      specification:
        "ZoikoSuite is built for multi-entity and cross-border operations; linked to current published coverage methodology.",
    },
    {
      element: "Location treatment",
      specification:
        "Only publicly verified company locations are shown. Executive location is never inferred from office listings.",
    },
    {
      element: "Regional accountability",
      specification:
        "If verified regional leaders exist, grouped by actual operating remit, not geography alone.",
    },
    {
      element: "Jurisdiction awareness",
      specification:
        "Legal, privacy, residency, tax, employment, and regulatory requirements differ by jurisdiction; leadership works through the platform's status-qualified model.",
    },
    {
      element: "Availability",
      specification:
        "Leadership presence never implies product availability or legal coverage.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-4xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            GLOBAL OPERATING LEADERSHIP
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[34px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Global operating awareness — without inventing regional titles
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-300">
          {/* Table Header */}
          <div className="w-full pb-4 pt-4 border-b border-gray-300 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-4/12">ELEMENT</div>
            <div className="w-8/12">SPECIFICATION</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Element */}
              <div className="w-full md:w-4/12 text-[#0b1329] text-base font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Element
                </span>
                {row.element}
              </div>

              {/* Specification */}
              <div className="w-full md:w-8/12 text-gray-600 text-sm md:text-base font-light leading-relaxed">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Specification
                </span>
                {row.specification}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
