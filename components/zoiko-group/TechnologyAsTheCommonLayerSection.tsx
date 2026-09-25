import React from "react";

export default function TechnologyAsTheCommonLayerSection() {
  const rows = [
    {
      capabilityFamily: "AI & agentic systems",
      groupLevelContext:
        "Research and platform capability across the technology estate.",
      zoikosuiteRule:
        "Only shows ZoikoSuite AI capabilities the ZoikoSuite product source verifies.",
    },
    {
      capabilityFamily: "Cloud & digital infrastructure",
      groupLevelContext:
        "Shared technology competency / infrastructure context.",
      zoikosuiteRule:
        "Deployment, residency, and key-custody claims come only from ZoikoSuite Trust.",
    },
    {
      capabilityFamily: "Security, identity & assurance",
      groupLevelContext: "Shared technology and governance competency.",
      zoikosuiteRule:
        "No certification inheritance — ZoikoSuite assurance claims remain separately governed.",
    },
    {
      capabilityFamily: "Industry technology",
      groupLevelContext: "Domain-specific technology development.",
      zoikosuiteRule:
        "No industry availability claim without ZoikoSuite coverage status.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            TECHNOLOGY AS THE COMMON LAYER
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Technology is the connection point — accountability remains
            explicit.
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-300">
          {/* Table Header */}
          <div className="w-full pb-4 pt-4 border-b border-gray-300 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-3/12">CAPABILITY FAMILY</div>
            <div className="w-4/12">GROUP-LEVEL CONTEXT</div>
            <div className="w-5/12">ZOIKOSUITE RULE</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Capability Family */}
              <div className="w-full md:w-3/12 text-[#0b1329] text-base font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Capability Family
                </span>
                {row.capabilityFamily}
              </div>

              {/* Group-Level Context */}
              <div className="w-full md:w-4/12 text-gray-600 font-light leading-relaxed text-[16.5px] pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Group-Level Context
                </span>
                {row.groupLevelContext}
              </div>

              {/* ZoikoSuite Rule */}
              <div className="w-full md:w-5/12 text-gray-600 font-light leading-relaxed text-[16.5px]">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  ZoikoSuite Rule
                </span>
                {row.zoikosuiteRule}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
