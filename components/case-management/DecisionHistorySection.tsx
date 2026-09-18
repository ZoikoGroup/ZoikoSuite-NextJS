import React from "react";

export default function DecisionHistorySection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-7 sm:px-14 md:px-28 py-16 bg-white flex flex-col justify-start items-start gap-8 overflow-hidden">
      {/* Section Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3.5">
        <div className="inline-flex justify-start items-center gap-2.5">
          <div className="w-5 h-0.5 bg-[#C44242]" />
          <span className="text-[#C44242] text-xs font-medium font-['JetBrains_Mono'] uppercase tracking-wider">
            Decision history · #decisions · #history
          </span>
        </div>
        <h2 className="w-full text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight sm:leading-10">
          Chronology that never rewrites the past silently.
        </h2>
        <p className="w-full text-gray-500 text-base font-normal font-['Manrope'] leading-6">
          Review, recommendation, decision, approval, escalation, override and
          response authorization remain distinct-including rejected and negative
          paths.
        </p>
      </div>

      {/* Top Process Flow Steps */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        <div className="p-4 bg-gray-100 rounded-xl flex flex-col justify-start items-start">
          <span className="w-full text-center text-[#0A2029] text-xs font-bold font-['JetBrains_Mono']">
            Create / Link
          </span>
        </div>
        <div className="p-4 bg-gray-100 rounded-xl flex flex-col justify-start items-start">
          <span className="w-full text-center text-[#0A2029] text-xs font-bold font-['JetBrains_Mono']">
            Investigate
          </span>
        </div>
        <div className="p-4 bg-gray-100 rounded-xl flex flex-col justify-start items-start">
          <span className="w-full text-center text-[#0A2029] text-xs font-bold font-['JetBrains_Mono']">
            Review
          </span>
        </div>
        <div className="p-4 bg-gray-100 rounded-xl flex flex-col justify-start items-start">
          <span className="w-full text-center text-[#0A2029] text-xs font-bold font-['JetBrains_Mono']">
            Decide / Escalate
          </span>
        </div>
        <div className="p-4 bg-gray-100 rounded-xl flex flex-col justify-start items-start col-span-2 sm:col-span-1">
          <span className="w-full text-center text-[#0A2029] text-xs font-bold font-['JetBrains_Mono']">
            Correct / Preserve
          </span>
        </div>
      </div>

      {/* Cards Grid Sequence */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
        {/* Card 1: Review */}
        <div className="p-6 bg-white rounded-2xl border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
          <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
            Review
          </h3>
          <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
            who + what + when
          </p>
        </div>

        {/* Card 2: Decision */}
        <div className="p-6 bg-white rounded-2xl border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
          <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
            Decision
          </h3>
          <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
            type + rationale
          </p>
        </div>

        {/* Card 3: Escalation */}
        <div className="p-6 bg-white rounded-2xl border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
          <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
            Escalation
          </h3>
          <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
            from / to + reason
          </p>
        </div>

        {/* Card 4: Evidence */}
        <div className="p-6 bg-white rounded-2xl border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
          <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
            Evidence
          </h3>
          <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
            references + scope
          </p>
        </div>

        {/* Card 5: Authority */}
        <div className="p-6 bg-white rounded-2xl border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
          <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
            Authority
          </h3>
          <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
            role + decision right
          </p>
        </div>

        {/* Card 6: Correction */}
        <div className="p-6 bg-white rounded-2xl border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
          <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
            Correction
          </h3>
          <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
            previous + new + why
          </p>
        </div>
      </div>
    </section>
  );
}
