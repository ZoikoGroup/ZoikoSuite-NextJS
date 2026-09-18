import React from "react";

export default function AssistanceSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-7 sm:px-14 md:px-28 py-16 bg-white flex flex-col lg:flex-row justify-start items-start gap-12 overflow-hidden">
      {/* Left Column Content */}
      <div className="flex-1 w-full flex flex-col justify-start items-start gap-5">
        {/* Section Header */}
        <div className="w-full flex flex-col justify-start items-start gap-3.5">
          <div className="inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-0.5 bg-[#C44242]" />
            <span className="text-[#C44242] text-xs font-medium font-['JetBrains_Mono'] uppercase tracking-wider">
              Assistance
            </span>
          </div>
          <h2 className="w-full text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight sm:leading-10">
            Approved context in. Cited assistance out.
          </h2>
        </div>

        {/* Security Analytics Card */}
        <div className="w-full p-6 bg-white rounded-2xl border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
          <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
            Security Analytics
          </h3>
          <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
            May hand off approved rule, match, correlation, context, replay or
            priority references when current.
          </p>
        </div>
      </div>

      {/* Right Column Card (AI Assistance) */}
      <div className="flex-1 w-full p-8 bg-white rounded-2xl shadow-[0px_12px_32px_0px_rgba(11,37,48,0.10)] border border-[#0A2029]/10 flex flex-col justify-start items-start gap-4">
        <span className="text-[#1F7A6C] text-xs font-normal font-['JetBrains_Mono'] tracking-wider">
          AI ASSISTANCE
        </span>

        <p className="w-full text-slate-900 text-base font-normal font-['Manrope'] leading-6">
          AI may summarize authorized context with citations, retrieve permitted
          evidence references, or make advisory recommendations when supported.
        </p>

        <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
          Grounded, cited, overridable and permission-bound. Separate from human
          or organizational decisions. No automatic sending, hidden write
          authority, approval, ownership or response execution.
        </p>

        {/* Fallback Warning Box */}
        <div className="w-full p-3.5 bg-[#FBEFEF] rounded-lg flex justify-start items-start">
          <span className="w-full text-[#C44242] text-xs font-normal font-['JetBrains_Mono'] tracking-wide">
            AI UNAVAILABLE → DETERMINISTIC / HUMAN FALLBACK
          </span>
        </div>
      </div>
    </section>
  );
}
