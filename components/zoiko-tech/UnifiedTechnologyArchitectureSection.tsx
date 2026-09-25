import React from "react";

export default function UnifiedTechnologyArchitectureSection() {
  const rows = [
    {
      layer: "Application layer",
      description: "ZoikoSuite and selected Zoiko technology platforms.",
      status: "Examples only; registry-driven availability.",
    },
    {
      layer: "Platform & integration services",
      description:
        "Identity, integration services, event contracts, workflow primitives, developer interfaces.",
      status:
        "Shared patterns where implemented; not a universal common runtime.",
    },
    {
      layer: "Developer layer",
      description:
        "APIs, webhooks, SDKs, sandbox, documentation, observability.",
      status: "Availability varies by platform and release.",
    },
    {
      layer: "Security & trust layer",
      description:
        "Identity, access, audit, evidence, privacy, compliance, security control surfaces.",
      status: "ZoikoSuite Trust pages remain canonical for ZoikoSuite claims.",
    },
    {
      layer: "Infrastructure & intelligence",
      description:
        "Cloud/digital infrastructure, governed AI, data services, operational tooling.",
      status: "Deployment and implementation status must be stated.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            UNIFIED TECHNOLOGY ARCHITECTURE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            A simplified, buyer-readable layer view
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-300">
          {/* Table Header */}
          <div className="w-full pb-4 pt-4 border-b border-gray-300 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-4/12">LAYER</div>
            <div className="w-4/12">DESCRIPTION</div>
            <div className="w-4/12">AVAILABILITY / STATUS</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Layer */}
              <div className="w-full md:w-4/12 text-[#0b1329] text-base font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Layer
                </span>
                {row.layer}
              </div>

              {/* Description */}
              <div className="w-full md:w-4/12 text-gray-600 font-light leading-relaxed text-[16.5px] pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Description
                </span>
                {row.description}
              </div>

              {/* Status */}
              <div className="w-full md:w-4/12 text-gray-600 font-light italic leading-relaxed text-[16.5px]">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Availability / Status
                </span>
                {row.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
