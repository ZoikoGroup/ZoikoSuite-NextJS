import React from "react";

export default function HumanOversightSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      {/* Top Header Row with Title and Description */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col items-start">
          {/* Subtitle / Breadcrumb */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C29B38]" />
            <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
              HUMAN OVERSIGHT AND DECISION AUTHORITY
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight max-w-xl">
            A reviewer is named, not implied
          </h2>
        </div>

        {/* Right Description Text */}
        <div className="max-w-md">
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Material decisions carry a reviewer, a rationale and a timeout. An
            unreviewed proposal expires rather than proceeding by default.[cite:
            15]
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Review Record Fields */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div>
            <span className="text-[#6B7280] text-[11px] font-bold tracking-widest uppercase block mb-4">
              REVIEW RECORD FIELDS
            </span>
            <ul className="space-y-3 mb-8">
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Named reviewer and their authority basis</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  AI output reference and model version used
                </span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  Accept, reject, or accept-with-edit, plus rationale
                </span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Timeout behaviour and escalation path</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  Resulting state and its evidence reference
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full bg-slate-100 rounded-lg px-4 py-2.5 text-[#6B7280] text-[11px] font-bold tracking-wider uppercase">
            ARCHITECTURE REQUIREMENT
          </div>
        </div>

        {/* Card 2: Timeout Behaviour */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 border-l-[4px] border-l-[#8A3B3B] flex flex-col justify-between">
          <div>
            <span className="text-[#6B7280] text-[11px] font-bold tracking-widest uppercase block mb-4">
              TIMEOUT BEHAVIOUR
            </span>
            <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
              An AI proposal awaiting review past its timeout{" "}
              <strong className="text-[#111827]">
                does not proceed by default
              </strong>
              . It escalates to the named escalation path, and if still
              unreviewed it expires — leaving the authoritative record
              unchanged.
            </p>
            <p className="text-[#6B2626] text-xs sm:text-sm leading-relaxed mb-8">
              Silent auto-acceptance after a timeout is the single most common
              way a governed AI workflow becomes an ungoverned one.
            </p>
          </div>
          <div className="w-full bg-slate-100 rounded-lg px-4 py-2.5 text-[#6B7280] text-[11px] font-bold tracking-wider uppercase">
            ARCHITECTURE REQUIREMENT
          </div>
        </div>
      </div>
    </section>
  );
}
