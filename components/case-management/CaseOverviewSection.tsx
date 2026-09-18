import React from "react";

export default function CaseOverviewSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-7 sm:px-14 md:px-28 py-16 bg-white flex flex-col justify-start items-start gap-9 overflow-hidden">
      {/* Section Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3.5">
        <div className="inline-flex justify-start items-center gap-2.5">
          <div className="w-5 h-0.5 bg-[#C44242]" />
          <span className="text-[#C44242] text-xs font-medium font-['JetBrains_Mono'] uppercase tracking-wider">
            Overview · #overview
          </span>
        </div>
        <h2 className="w-full text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight sm:leading-10">
          One governed record. Clear, separate authorities.
        </h2>
        <p className="w-full text-gray-500 text-base font-normal font-['Manrope'] leading-6">
          A synthetic conceptual model showing how reviewable case context
          connects without turning the case into an incident verdict.
        </p>
      </div>

      {/* Main Grid / Layout Container */}
      <div className="w-full min-h-[460px] flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-5 overflow-hidden">
        {/* Left Column Items */}
        <div className="w-full lg:flex-1 self-stretch flex flex-col justify-between items-start gap-3.5">
          <div className="w-full p-6 bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(11,37,48,0.04)] border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
            <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
              Investigation
            </h3>
            <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
              Questions, hypotheses, reviewers and current case context.
            </p>
          </div>
          <div className="w-full p-6 bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(11,37,48,0.04)] border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
            <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
              Evidence
            </h3>
            <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
              Governed references, lineage, completeness, access and history.
            </p>
          </div>
          <div className="w-full p-6 bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(11,37,48,0.04)] border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
            <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
              Communications
            </h3>
            <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
              Attributable references only when approved.
            </p>
          </div>
        </div>

        {/* Central Card (Teal 950 Highlight) */}
        <div className="w-full lg:w-96 p-7 bg-[#0A2029] rounded-[20px] shadow-[0px_12px_32px_0px_rgba(11,37,48,0.10)] flex flex-col justify-start items-start gap-4">
          <span className="text-[#5FE3C5] text-xs font-normal font-['JetBrains_Mono'] tracking-wider">
            CENTRAL CASE RECORD
          </span>
          <span className="w-full text-white text-lg font-extrabold font-['JetBrains_Mono'] tracking-wide">
            CASE-SYNTHETIC-7F3A
          </span>
          <h3 className="w-full text-white text-xl font-extrabold font-['Hanken_Grotesk']">
            Review of approved detection context
          </h3>
          <p className="w-full text-white/70 text-xs font-normal font-['Manrope'] leading-5">
            Scope: public-safe environment and time boundary
            <br />
            Owner / reviewers: accountable roles only
            <br />
            Workflow state: authoritative reference only
            <br />
            Visibility: governed access class
            <br />
            Related refs: Detection, Analytics, Evidence, AI, integration,
            response
            <br />
            Context: missing · stale · restricted · conflicting
          </p>
        </div>

        {/* Right Column Items */}
        <div className="w-full lg:flex-1 self-stretch flex flex-col justify-between items-start gap-3.5">
          <div className="w-full p-6 bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(11,37,48,0.04)] border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
            <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
              Decision history
            </h3>
            <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
              Reviewer, decision, rationale, escalation and effective time.
            </p>
          </div>
          <div className="w-full p-6 bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(11,37,48,0.04)] border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
            <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
              Ownership
            </h3>
            <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
              Accountable role and access boundary.
            </p>
          </div>
          <div className="w-full p-6 bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(11,37,48,0.04)] border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
            <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
              Handoffs
            </h3>
            <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
              Separate authorities remain distinct.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
