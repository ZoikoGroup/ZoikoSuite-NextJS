import React from "react";

export default function TrustAndProofSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-7 sm:px-14 md:px-28 py-16 bg-[#F0EDE6] flex flex-col justify-start items-start gap-7 overflow-hidden">
      {/* Section Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3.5">
        <div className="inline-flex justify-start items-center gap-2.5">
          <div className="w-5 h-0.5 bg-[#C44242]" />
          <span className="text-[#C44242] text-xs font-medium font-['JetBrains_Mono'] uppercase tracking-wider">
            Trust and proof · #proof
          </span>
        </div>
        <h2 className="w-full text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight sm:leading-10">
          Proof routes stay direct and ungated.
        </h2>
        <p className="w-full text-gray-500 text-base font-normal font-['Manrope'] leading-6">
          Authoritative destinations carry the claim. This page does not
          reproduce certification, encryption, residency, uptime, retention or
          assurance claims.
        </p>
      </div>

      {/* Proof Route Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {/* Card 1: Evidence */}
        <div className="h-16 p-4 bg-white rounded-xl border border-[#0A2029]/10 flex justify-start items-center gap-3">
          <div className="w-5 h-5 relative flex items-center justify-center">
            <div className="w-3.5 h-4 border-2 border-slate-900 rounded-sm" />
          </div>
          <span className="flex-1 text-slate-900 text-xs font-bold font-['Manrope']">
            Evidence
          </span>
        </div>

        {/* Card 2: Trust */}
        <div className="h-16 p-4 bg-white rounded-xl border border-[#0A2029]/10 flex justify-start items-center gap-3">
          <div className="w-5 h-5 relative flex items-center justify-center">
            <div className="w-3.5 h-4 border-2 border-slate-900 rounded-sm" />
          </div>
          <span className="flex-1 text-slate-900 text-xs font-bold font-['Manrope']">
            Trust
          </span>
        </div>

        {/* Card 3: Docs */}
        <div className="h-16 p-4 bg-white rounded-xl border border-[#0A2029]/10 flex justify-start items-center gap-3">
          <div className="w-5 h-5 relative flex items-center justify-center">
            <div className="w-3.5 h-4 border-2 border-slate-900 rounded-sm" />
          </div>
          <span className="flex-1 text-slate-900 text-xs font-bold font-['Manrope']">
            Docs
          </span>
        </div>

        {/* Card 4: System Status */}
        <div className="h-16 p-4 bg-white rounded-xl border border-[#0A2029]/10 flex justify-start items-center gap-3">
          <div className="w-5 h-5 relative flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-slate-900 rounded-sm" />
          </div>
          <span className="flex-1 text-slate-900 text-xs font-bold font-['Manrope']">
            System Status
          </span>
        </div>

        {/* Card 5: Integrations */}
        <div className="h-16 p-4 bg-white rounded-xl border border-[#0A2029]/10 flex justify-start items-center gap-3">
          <div className="w-5 h-5 relative flex items-center justify-center">
            <div className="w-2.5 h-4 border-2 border-slate-900 rounded-sm" />
          </div>
          <span className="flex-1 text-slate-900 text-xs font-bold font-['Manrope']">
            Integrations - when current
          </span>
        </div>

        {/* Card 6: Responsible AI */}
        <div className="h-16 p-4 bg-white rounded-xl border border-[#0A2029]/10 flex justify-start items-center gap-3">
          <div className="w-5 h-5 relative flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-slate-900 rounded-sm" />
          </div>
          <span className="flex-1 text-slate-900 text-xs font-bold font-['Manrope']">
            Responsible AI - when approved
          </span>
        </div>
      </div>

      {/* Public-Safe States Footer Note */}
      <p className="w-full text-gray-500 text-xs font-normal font-['JetBrains_Mono'] leading-4">
        PUBLIC-SAFE STATES: case source unavailable · evidence
        restricted/missing · communication unavailable · conflicting history ·
        owner unavailable without silent reassignment · external sync
        delayed/failed · Governed Response unavailable · route-manifest failure
        · no-JavaScript operation
      </p>
    </section>
  );
}
