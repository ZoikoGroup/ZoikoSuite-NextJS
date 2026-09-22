import React from "react";

export default function EntityJurisdictionResidencySection() {
  const rows = [
    {
      layer: "Legal entity",
      requiredExplanation:
        "Parent, subsidiary, branch, reporting hierarchy, delegated authority,\nfiscal calendar.",
      visualTreatment: "Interactive entity tree",
      isBadge: false,
    },
    {
      layer: "Jurisdiction",
      requiredExplanation:
        "Country, state/province, tax, labor, filing, and regulatory boundaries.",
      visualTreatment: "Rule-context chips",
      isBadge: false,
    },
    {
      layer: "Effective date",
      requiredExplanation:
        "Historical, current, and future-dated policy and rule states.",
      visualTreatment: "Timeline control",
      isBadge: false,
    },
    {
      layer: "Residency",
      requiredExplanation:
        "Storage, processing, backup, replication, and sovereign-deployment constraints.",
      visualTreatment: "Residency status panel",
      isBadge: false,
    },
    {
      layer: "Coverage status",
      requiredExplanation:
        "Available · Limited · Partner-Supported · Planned · Not Available.",
      visualTreatment: "STATUS LABEL",
      isBadge: true,
    },
    {
      layer: "Rule provenance",
      requiredExplanation:
        "Source, version, effective date, and review status.",
      visualTreatment: "Expandable evidence drawer",
      isBadge: false,
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-4xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            ENTITY · JURISDICTION · RESIDENCY
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-[32px] font-serif font-bold text-[#0b1329] leading-[1.15] tracking-tight mb-4">
            Operate locally. Expand across borders. Keep the rules attached to
            the action.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            ZoikoSuite is built for organizations operating across entities and
            jurisdictions. Specific workflow coverage is published by status,
            not implied by a map.
          </p>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col">
          {/* Table Header */}
          <div className="w-full pb-4 border-b border-gray-300 flex flex-col md:flex-row items-start justify-between gap-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-full md:w-3/12">LAYER</div>
            <div className="w-full md:w-6/12">REQUIRED EXPLANATION</div>
            <div className="w-full md:w-3/12">VISUAL TREATMENT</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-200 flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6"
            >
              {/* Layer Column */}
              <div className="w-full md:w-3/12 text-[#0b1329] text-base font-medium">
                {row.layer}
              </div>

              {/* Required Explanation Column */}
              <div className="w-full md:w-6/12 text-gray-600 text-sm md:text-base font-light leading-relaxed whitespace-pre-line">
                {row.requiredExplanation}
              </div>

              {/* Visual Treatment Column */}
              <div className="w-full md:w-3/12 text-gray-700 text-sm font-normal flex items-center">
                {row.isBadge ? (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-gray-300 text-[10px] font-semibold text-gray-600 tracking-wider">
                    {row.visualTreatment}
                  </span>
                ) : (
                  <span>{row.visualTreatment}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
