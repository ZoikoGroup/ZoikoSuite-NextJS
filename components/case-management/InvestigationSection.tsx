import React from "react";

export default function InvestigationSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-7 sm:px-14 md:px-28 py-16 bg-[#F7F5F0] flex flex-col justify-start items-start gap-8 overflow-hidden">
      {/* Section Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3.5">
        <div className="inline-flex justify-start items-center gap-2.5">
          <div className="w-5 h-0.5 bg-[#C44242]" />
          <span className="text-[#C44242] text-xs font-medium font-['JetBrains_Mono'] uppercase tracking-wider">
            Investigation · #investigation
          </span>
        </div>
        <h2 className="w-full text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight sm:leading-10">
          Questions remain questions until the source supports more.
        </h2>
        <p className="w-full text-gray-500 text-base font-normal font-['Manrope'] leading-6">
          Current review context keeps attribution, uncertainty and corrections
          visible. No question becomes a verdict without explicit, attributed
          review.
        </p>
      </div>

      {/* Grid Row 1 */}
      <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-5">
        {/* Card 1 */}
        <div className="flex-1 p-6 bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(11,37,48,0.04)] border border-[#0A2029]/10 flex flex-col justify-between items-start gap-4">
          <div className="w-11 h-11 bg-gray-200 rounded-xl inline-flex justify-center items-center">
            <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-[#1F7A6C] rounded-sm" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h3 className="w-full text-slate-900 text-base font-extrabold font-['Hanken_Grotesk']">
              Current question under review
            </h3>
            <p className="w-full text-gray-500 text-xs font-normal font-['Manrope'] leading-5">
              Explicitly a question, not a verdict. Source-backed observations
              and relationships sit beside attributable hypotheses - not beneath
              a finding label.
            </p>
          </div>
          <div className="px-2.5 py-1 bg-[#FFF5D8] rounded-[100px] inline-flex justify-start items-start">
            <span className="text-[#725510] text-[10px] font-bold font-['JetBrains_Mono']">
              QUESTION · NOT VERDICT
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 p-6 bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(11,37,48,0.04)] border border-[#0A2029]/10 flex flex-col justify-between items-start gap-4">
          <div className="w-11 h-11 bg-gray-200 rounded-xl inline-flex justify-center items-center">
            <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
              <div className="w-3.5 h-4 border-2 border-[#1F7A6C] rounded-sm" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h3 className="w-full text-slate-900 text-base font-extrabold font-['Hanken_Grotesk']">
              Source-backed observations
            </h3>
            <p className="w-full text-gray-500 text-xs font-normal font-['Manrope'] leading-5">
              Relationships and observations attributable to approved sources.
              Source and scope remain visible. Unknown, stale and restricted
              references are labeled explicitly.
            </p>
          </div>
          <div className="px-2.5 py-1 bg-[#E4F0EC] rounded-[100px] inline-flex justify-start items-start">
            <span className="text-[#1F7A6C] text-[10px] font-bold font-['JetBrains_Mono']">
              SOURCE · SCOPE VISIBLE
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex-1 p-6 bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(11,37,48,0.04)] border border-[#0A2029]/10 flex flex-col justify-between items-start gap-4">
          <div className="w-11 h-11 bg-[#F0EDE6] rounded-xl inline-flex justify-center items-center">
            <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
              <div className="w-3 h-4 border-2 border-[#0A2029] rounded-sm" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h3 className="w-full text-slate-900 text-base font-extrabold font-['Hanken_Grotesk']">
              Attributable hypotheses
            </h3>
            <p className="w-full text-gray-500 text-xs font-normal font-['Manrope'] leading-5">
              Uncertainty and ownership are preserved. A hypothesis is labeled
              as such - not promoted to a conclusion without attributed,
              explicit review.
            </p>
          </div>
          <div className="px-2.5 py-1 bg-[#F0EDE6] rounded-[100px] inline-flex justify-start items-start">
            <span className="text-[#0A2029] text-[10px] font-bold font-['JetBrains_Mono']">
              UNCERTAINTY PRESERVED
            </span>
          </div>
        </div>
      </div>

      {/* Grid Row 2 */}
      <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-5">
        {/* Card 4 */}
        <div className="flex-1 p-6 bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(11,37,48,0.04)] border border-[#0A2029]/10 flex flex-col justify-between items-start gap-4">
          <div className="w-11 h-11 bg-[#FBEFEF] rounded-xl inline-flex justify-center items-center">
            <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-[#C44242] rounded-sm" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h3 className="w-full text-slate-900 text-base font-extrabold font-['Hanken_Grotesk']">
              Supporting and contradicting context
            </h3>
            <p className="w-full text-gray-500 text-xs font-normal font-['Manrope'] leading-5">
              Conflicts remain explicit. Contradictions are not suppressed.
              Stale, conflicting or restricted context is labeled - not silently
              omitted.
            </p>
          </div>
          <div className="px-2.5 py-1 bg-[#FBEFEF] rounded-[100px] inline-flex justify-start items-start">
            <span className="text-[#C44242] text-[10px] font-bold font-['JetBrains_Mono']">
              CONFLICTS EXPLICIT
            </span>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex-1 p-6 bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(11,37,48,0.04)] border border-[#0A2029]/10 flex flex-col justify-between items-start gap-4">
          <div className="w-11 h-11 bg-gray-200 rounded-xl inline-flex justify-center items-center">
            <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
              <div className="w-3.5 h-4 border-2 border-[#1F7A6C] rounded-sm" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h3 className="w-full text-slate-900 text-base font-extrabold font-['Hanken_Grotesk']">
              Governed evidence references
            </h3>
            <p className="w-full text-gray-500 text-xs font-normal font-['Manrope'] leading-5">
              Evidence access state, lineage, completeness and verification
              limitations. Restricted, missing and stale states remain visible -
              never hidden from the record.
            </p>
          </div>
          <div className="px-2.5 py-1 bg-[#E4F0EC] rounded-[100px] inline-flex justify-start items-start">
            <span className="text-[#1F7A6C] text-[10px] font-bold font-['JetBrains_Mono']">
              ACCESS STATE VISIBLE
            </span>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex-1 p-6 bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(11,37,48,0.04)] border border-[#0A2029]/10 flex flex-col justify-between items-start gap-4">
          <div className="w-11 h-11 bg-[#F0EDE6] rounded-xl inline-flex justify-center items-center">
            <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-[#0A2029] rounded-sm" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h3 className="w-full text-slate-900 text-base font-extrabold font-['Hanken_Grotesk']">
              Reviewer activity and corrections
            </h3>
            <p className="w-full text-gray-500 text-xs font-normal font-['Manrope'] leading-5">
              Who reviewed, what changed and when. Corrections preserve
              attributable prior context rather than rewriting history silently.
            </p>
          </div>
          <div className="px-2.5 py-1 bg-[#F0EDE6] rounded-[100px] inline-flex justify-start items-start">
            <span className="text-[#0A2029] text-[10px] font-bold font-['JetBrains_Mono']">
              CORRECTIONS ATTRIBUTABLE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
