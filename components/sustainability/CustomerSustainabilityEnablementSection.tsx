import React from "react";

export default function CustomerSustainabilityEnablementSection() {
  const rows = [
    {
      useCase: "Entity / site reporting",
      whatZoikoSuiteMayEnable:
        "Structured ownership, reporting period, evidence, approval, entity context.",
      prohibitedShortcut: '"Automated ESG compliance."',
    },
    {
      useCase: "Supplier diligence",
      whatZoikoSuiteMayEnable:
        "Questionnaires, attestations, documents, exceptions, reviews, expiry.",
      prohibitedShortcut: '"Sustainable supply chain guaranteed."',
    },
    {
      useCase: "Obligations / policy",
      whatZoikoSuiteMayEnable:
        "Track sustainability-related obligations, owners, deadlines, evidence.",
      prohibitedShortcut: '"Regulatory compliance guaranteed."',
    },
    {
      useCase: "Audit / assurance packs",
      whatZoikoSuiteMayEnable:
        "Assemble approved records and evidence manifests.",
      prohibitedShortcut:
        '"Audit-ready" unless required evidence and scope are verified.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            CUSTOMER SUSTAINABILITY ENABLEMENT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Govern sustainability-related operations without promising outcomes
            the platform cannot independently prove.
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-200">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 bg-gray-50/50 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-3">Use Case</div>
            <div className="md:col-span-5">What ZoikoSuite May Enable</div>
            <div className="md:col-span-4">Prohibited Shortcut</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start md:items-center bg-white"
            >
              {/* Use Case Column */}
              <div className="md:col-span-3 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.useCase}
              </div>

              {/* What ZoikoSuite May Enable Column */}
              <div className="md:col-span-5 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.whatZoikoSuiteMayEnable}
              </div>

              {/* Prohibited Shortcut Column */}
              <div className="md:col-span-4 text-gray-500 font-light italic leading-relaxed text-[15px]">
                {row.prohibitedShortcut}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
