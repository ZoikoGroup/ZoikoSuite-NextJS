import React from "react";

const domains = [
  {
    title: "FINANCE & TAX",
    lines: [
      "Build governed financial truth, close, AP/",
      "AR, tax treatment, and entity-aware",
      "controls where accuracy and explainability",
      "matter.",
    ],
  },
  {
    title: "WORKFORCE & PAYROLL",
    lines: [
      "Design and engineer employment, payroll,",
      "benefits, leave, and workforce compliance",
      "experiences across jurisdictional contexts.",
    ],
  },
  {
    title: "LEGAL & COMMERCIAL",
    lines: [
      "Turn contracts, obligations, approvals,",
      "vendors, and commercial workflows into",
      "traceable operating systems.",
    ],
  },
  {
    title: "COMPLIANCE & OBLIGATIONS",
    lines: [
      "Model what is due, why it applies, who",
      "owns it, what evidence exists, and what",
      "changes when jurisdictional rules shift.",
    ],
  },
  {
    title: "EVIDENCE & AUDIT",
    lines: [
      "Create audit-defensible records, lineage,",
      "manifests, decision trails, and integrity-",
      "aware evidence experiences.",
    ],
  },
  {
    title: "INTELLIGENCE & REPORTING",
    lines: [
      "Build governed AI, analytics, forecasting,",
      "and decision support where human",
      "accountability remains explicit.",
    ],
  },
];

export default function WhatWeBuildSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-10">
          <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            WHAT WE BUILD
          </span>

          <h2 className="text-3xl md:text-[36px] font-serif font-bold text-[#16223A] leading-tight tracking-tight whitespace-nowrap">
            Six platform domains, one governed system
          </h2>

          <p className="text-[#4B5872] text-sm md:text-base font-normal leading-relaxed mt-3">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              This is candidate-facing work context, not a promise that every domain has an active
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              vacancy.
            </span>
          </p>
        </div>

        {/* Domain Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="w-full p-6 sm:p-7 border border-[#DCD6C8] bg-white rounded-xl flex flex-col items-start justify-start hover:shadow-xs transition-shadow"
            >
              <span className="text-[#A8843A] text-xs font-bold tracking-wider uppercase mb-3 block">
                {domain.title}
              </span>
              <p className="text-[#16223A] text-sm font-bold leading-6">
                {domain.lines.map((line, idx) => (
                  <span key={idx} className="block whitespace-normal lg:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
