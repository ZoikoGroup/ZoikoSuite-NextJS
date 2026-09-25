import React from "react";

export default function StrategicCapitalAndPartnershipRoutingSection() {
  const rows = [
    {
      intent: "Institutional equity / growth capital",
      route: "Investor Relations",
    },
    {
      intent: "Sovereign / infrastructure capital",
      route: "Investor Relations + Strategic Partnerships when approved",
    },
    {
      intent: "Debt / credit relationship",
      route: "Finance / Investor Relations route",
    },
    {
      intent: "Commercial partnership only",
      route: "Partners / Strategic Partnerships",
    },
    {
      intent: "M&A / corporate development",
      route:
        "Corporate Development route if publicly exposed; otherwise IR triage",
    },
    {
      intent: "Enterprise customer",
      route: "ZoikoSuite sales",
    },
    {
      intent: "Media",
      route: "Newsroom / Press Office",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            STRATEGIC CAPITAL & PARTNERSHIP ROUTING
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Route by intent, not a single generic form
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-200">
          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 bg-white"
            >
              {/* Intent Column */}
              <div className="w-full md:w-5/12 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.intent}
              </div>

              {/* Route Column */}
              <div className="w-full md:w-7/12 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.route}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
