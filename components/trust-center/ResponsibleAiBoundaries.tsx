import React from "react";

const aiMayItems = [
  "Detect anomalies against configured expectations",
  "Forecast exposure from source data, labelled as a projection",
  "Extract obligations, clauses and metadata with provenance",
  "Prioritize exceptions for human review",
  "Summarize a decision basis with its sources cited",
  "Provide decision support to a named reviewer",
];

const aiMayNotItems = [
  "Make any autonomous material decision",
  "Bypass authority, approval or segregation requirements",
  "Alter source truth in any system of record",
  "Satisfy an evidence requirement on its own",
  "Act on a customer, patient, claimant or constituent",
  "Substitute for professional or regulated judgment",
];

export default function ResponsibleAiBoundaries() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                RESPONSIBLE AI
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-[40px] lg:text-[40px] font-bold tracking-tight leading-[1.1]">
              Boundaries that hold in every product surface
            </h2>
          </div>

          <div className="lg:col-span-6 flex items-end">
            <p className="text-[15px] lg:text-[16px] text-[#52525B] leading-relaxed max-w-lg">
              These apply platform-wide and are not relaxed by configuration,
              deployment option or customer agreement.
            </p>
          </div>
        </div>

        {/* Two Column List Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* AI MAY Column */}
          <div className="bg-[#F2F8F8] border border-[#C3D0D8] border-l-3 border-l-[#1E7A5A] rounded-2xl p-8 shadow-sm">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#166534] mb-6">
              AI MAY
            </h3>
            <ul className="space-y-4">
              {aiMayItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[15px] text-[#111827]"
                >
                  <span className="text-[#166534] mt-1.5">•</span>
                  <span className="flex-1 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI MAY NOT Column */}
          <div className="bg-[#FDF2F2] border border-[#DFA9A9] border-l-3 border-l-[#8A3B3B] rounded-2xl p-8 shadow-sm">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#991B1B] mb-6">
              AI MAY NOT
            </h3>
            <ul className="space-y-4">
              {aiMayNotItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[15px] text-[#111827]"
                >
                  <span className="text-[#991B1B] mt-1.5">•</span>
                  <span className="flex-1 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
