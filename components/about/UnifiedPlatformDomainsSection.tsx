import React from "react";

export default function UnifiedPlatformDomainsSection() {
  const domains = [
    {
      number: "01",
      title: "FINANCE & TAX",
      headline: "Continuous financial truth with jurisdiction-aware treatment.",
      footer: "Ledger · AP / AR · close & consolidation",
    },
    {
      number: "02",
      title: "WORKFORCE & PAYROLL",
      headline:
        "Governed employment and pay across local and cross-border operations.",
      footer: "Payroll · benefits & leave · workforce compliance",
    },
    {
      number: "03",
      title: "LEGAL & COMMERCIAL",
      headline:
        "Move contracts, obligations, approvals, and spend through controlled execution.",
      footer: "Contract lifecycle · clauses · vendor diligence",
    },
    {
      number: "04",
      title: "COMPLIANCE & OBLIGATIONS",
      headline:
        "Know what is due, why it is due, who owns it, and what evidence exists.",
      footer: "Obligations registry · filing tracker · escalations",
    },
    {
      number: "05",
      title: "EVIDENCE & AUDIT",
      headline:
        "Retrieve the complete action, decision, rule, document, and approval lineage.",
      footer: "Audit events · document vault · evidence manifests",
    },
    {
      number: "06",
      title: "INTELLIGENCE & REPORTING",
      headline:
        "Forecast exposure and prioritize risk without changing source truth.",
      footer: "Anomalies · forecasting · executive reporting",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section with Split Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          {/* Left Title Area */}
          <div className="max-w-2xl">
            <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              UNIFIED PLATFORM DOMAINS
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-[32px] font-serif font-bold text-[#0b1329] leading-[1.15] tracking-tight">
              Modular capability, unified control
            </h1>
          </div>

          {/* Right Description Area */}
          <div className="max-w-xs">
            <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
              Six domains, one governance model. Outcomes first — open service
              detail only when you ask for it.
            </p>
          </div>
        </div>

        {/* Domains Grid (3 columns, 2 rows) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/5 flex flex-col justify-between"
            >
              <div>
                {/* Domain Category Header */}
                <span className="text-[#A8843A] text-xs font-semibold tracking-wider uppercase block mb-3">
                  {domain.number} · {domain.title}
                </span>

                {/* Domain Headline */}
                <h3 className="text-[#0b1329] text-base font-bold leading-snug mb-2">
                  {domain.headline}
                </h3>
              </div>

              {/* Domain Footer (Sub-modules list) */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-gray-500 text-xs font-normal tracking-wide">
                  {domain.footer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
