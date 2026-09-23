import React from "react";

export default function TrustAndGovernanceUpdatesSection() {
  const rows = [
    {
      updateClass: "Security",
      examples:
        "Security architecture update, independently validated assessment summary, material disclosure.",
      canonicalHandoff:
        "Security Overview / Security Disclosure / System Status",
    },
    {
      updateClass: "Compliance & Certifications",
      examples:
        "Framework readiness, audit/attestation publication, scope change, expiration/renewal.",
      canonicalHandoff: "Compliance Overview / Certifications",
    },
    {
      updateClass: "Privacy & Residency",
      examples: "Privacy architecture or residency availability change.",
      canonicalHandoff: "Privacy Architecture / Data Residency",
    },
    {
      updateClass: "Responsible AI",
      examples:
        "AI governance policy, model/provider governance, transparency update.",
      canonicalHandoff: "Responsible AI",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-4xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            TRUST & GOVERNANCE UPDATES
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Inherits the exact truth state from the Trust architecture — never
            upgraded
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-300">
          {/* Table Header */}
          <div className="w-full pb-4 pt-4 border-b border-gray-300 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-3/12">UPDATE CLASS</div>
            <div className="w-5/12">EXAMPLES</div>
            <div className="w-4/12">CANONICAL HANDOFF</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Update Class */}
              <div className="w-full md:w-3/12 text-[#0b1329] text-base font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Update Class
                </span>
                {row.updateClass}
              </div>

              {/* Examples */}
              <div className="w-full md:w-5/12 text-gray-600 font-light leading-relaxed text-[16.5px] pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Examples
                </span>
                {row.examples}
              </div>

              {/* Canonical Handoff */}
              <div className="w-full md:w-4/12 text-gray-600 font-light leading-relaxed text-[16.5px]">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Canonical Handoff
                </span>
                {row.canonicalHandoff}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
