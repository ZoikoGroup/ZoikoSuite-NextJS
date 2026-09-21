import React from "react";

export default function EvidenceJurisdictionSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      {/* Top Header Row with Title and Description */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col items-start">
          {/* Subtitle / Breadcrumb */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C29B38]" />
            <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
              EVIDENCE, JURISDICTION AND THIRD-PARTY AI
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight max-w-xl">
            What is retained, what is status-qualified, what is diligenced
          </h2>
        </div>

        {/* Right Description Text */}
        <div className="max-w-md">
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Three handoffs: to Evidence Architecture, to legal applicability,
            and to vendor procurement.
          </p>
        </div>
      </div>

      {/* Cards Grid (3 columns) */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: AI Evidence Retained */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div>
            <span className="text-[#6B7280] text-[11px] font-bold tracking-widest uppercase block mb-4">
              AI EVIDENCE RETAINED
            </span>
            <ul className="space-y-3">
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Input and output references</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Model and provider version at time of use</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Boundary applied and policy basis</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Reviewer, decision and rationale</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Resulting source-truth state</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Jurisdiction Readiness */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div>
            <span className="text-[#6B7280] text-[11px] font-bold tracking-widest uppercase block mb-4">
              JURISDICTION READINESS
            </span>
            <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
              AI regulatory frameworks are referenced as external context for
              design, never as conformance.
            </p>
            <p className="text-[#4B5563] text-sm leading-relaxed">
              Applicability, effective dates and obligations depend on your
              jurisdiction, sector and use case.
            </p>
          </div>
        </div>

        {/* Card 3: Third-Party AI and Providers */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div>
            <span className="text-[#6B7280] text-[11px] font-bold tracking-widest uppercase block mb-4">
              THIRD-PARTY AI AND PROVIDERS
            </span>
            <ul className="space-y-3">
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Provider inventory with hosting mode</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Data-use posture per provider contract</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Model version change triggers review</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Provider incident affects dependent systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
