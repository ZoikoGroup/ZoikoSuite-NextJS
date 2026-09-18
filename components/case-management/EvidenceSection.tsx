import React from "react";

export default function EvidenceSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-7 sm:px-14 md:px-28 py-16 bg-[#F0EDE6] flex flex-col lg:flex-row justify-start items-start lg:items-center gap-12 overflow-hidden">
      {/* Left Column Content */}
      <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-6">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-3.5">
          <div className="inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-0.5 bg-[#C44242]" />
            <span className="text-[#C44242] text-xs font-medium font-['JetBrains_Mono'] uppercase tracking-wider">
              Evidence · #evidence
            </span>
          </div>
          <h2 className="w-full text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight sm:leading-10">
            Evidence context remains governed at the source.
          </h2>
          <p className="w-full text-gray-500 text-base font-normal font-['Manrope'] leading-6">
            A case can collect or reference evidence context. Verified evidence
            does not by itself determine compromise, causality, root cause,
            legal responsibility, compliance status or response authority.
          </p>
        </div>

        {/* Action Button */}
        <button className="px-6 py-4 bg-white rounded-lg border border-[#0A2029] inline-flex justify-start items-center transition-colors hover:bg-slate-50">
          <span className="text-slate-900 text-sm font-bold font-['Manrope']">
            Open Evidence
          </span>
        </button>
      </div>

      {/* Right Feature Card */}
      <div className="w-full lg:w-[540px] p-7 bg-[#0A2029] rounded-2xl flex flex-col justify-start items-start gap-3.5 shadow-xl">
        <span className="text-[#5FE3C5] text-xs font-normal font-['JetBrains_Mono'] tracking-wider">
          GOVERNED EVIDENCE REFERENCE
        </span>

        <p className="w-full text-white text-sm font-normal font-['Manrope'] leading-6">
          Origin and relationship
          <br />
          Lineage and access state
          <br />
          Completeness and verification limitations
          <br />
          Version, scope and exclusions
          <br />
          Superseded · withdrawn · corrected history
        </p>

        {/* Inner Warning Sub-card */}
        <div className="w-full p-3 bg-white/5 rounded-lg border border-white/10 flex justify-start items-start">
          <span className="w-full text-[#F3C86A] text-xs font-normal font-['JetBrains_Mono'] tracking-wide">
            RESTRICTED / MISSING REFERENCES REMAIN EXPLICIT
          </span>
        </div>
      </div>
    </section>
  );
}
