import React from "react";

export default function IndustriesAndComplexOperatingEnvironmentsSection() {
  const rows = [
    {
      domain: "Telecommunications",
      displayDirection:
        "Infrastructure/billing/communications engineering experience at category level.",
      guardrail:
        "Never implies every telecom capability is a ZoikoSuite module.",
    },
    {
      domain: "Financial operations",
      displayDirection:
        "Billing, payroll, accounting, and financial-operations technology depth.",
      guardrail:
        "Separates technology capability from regulated financial-service authorization.",
    },
    {
      domain: "Healthcare / care technology",
      displayDirection: "Domain technology experience only where approved.",
      guardrail:
        "No clinical efficacy or regulated-device claims without evidence.",
    },
    {
      domain: "Cross-border / regulated environments",
      displayDirection:
        "Emphasizes jurisdiction, evidence, identity, security, and deployment complexity.",
      guardrail:
        'Uses actual product coverage status, never blanket "global compliance."',
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            INDUSTRIES & COMPLEX OPERATING ENVIRONMENTS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Breadth of technical domain experience
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-300">
          {/* Table Header */}
          <div className="w-full pb-4 pt-4 border-b border-gray-300 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-3/12">DOMAIN</div>
            <div className="w-5/12">DISPLAY DIRECTION</div>
            <div className="w-4/12">GUARDRAIL</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Domain */}
              <div className="w-full md:w-3/12 text-[#0b1329] text-base font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Domain
                </span>
                {row.domain}
              </div>

              {/* Display Direction */}
              <div className="w-full md:w-5/12 text-gray-600 font-light leading-relaxed text-[16.5px] pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Display Direction
                </span>
                {row.displayDirection}
              </div>

              {/* Guardrail */}
              <div className="w-full md:w-4/12 text-gray-600 font-light leading-relaxed text-[16.5px]">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Guardrail
                </span>
                {row.guardrail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
