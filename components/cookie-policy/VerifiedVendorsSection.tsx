import React from "react";

export default function VerifiedVendorsSection() {
  const rows = [
    {
      field: "Provider name",
      requiredBehavior: "Verified provider name; no logo unless rights exist.",
    },
    {
      field: "ZoikoSuite purpose",
      requiredBehavior:
        "ZoikoSuite-approved purpose, not vendor marketing language.",
    },
    {
      field: "Party role",
      requiredBehavior:
        "First-party context / third-party service / independent controller only if Legal approves the label.",
    },
    {
      field: "Status",
      requiredBehavior:
        'Active; suspended; planned; retired; unknown — "unknown" cannot publish as active.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            THIRD-PARTY TECHNOLOGIES & VENDORS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Verified vendors — no vendor marketing language
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Field</div>
            <div className="md:col-span-8">Required Behavior</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center bg-[#F6F1E6]"
            >
              {/* Field Column */}
              <div className="md:col-span-4 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.field}
              </div>

              {/* Required Behavior Column */}
              <div className="md:col-span-8 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.requiredBehavior}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
