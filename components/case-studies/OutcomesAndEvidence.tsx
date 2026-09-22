import React from "react";

interface OutcomeCard {
  statOrTitle: string;
  subtitleOrCategory: string;
  description: string;
}

const outcomesData: OutcomeCard[] = [
  {
    statOrTitle: "40",
    subtitleOrCategory: "% faster",
    description:
      "Evidence assembly time for the Q2 2026 audit cycle, vs. Q2 2025.",
  },
  {
    statOrTitle: "3",
    subtitleOrCategory: "functions",
    description:
      "Compliance, Internal Audit, and Security now share one evidence record.",
  },
  {
    statOrTitle: "Qualitative",
    subtitleOrCategory: "",
    description:
      '"Auditors could self-serve evidence for the first time" — customer-reported observation.',
  },
] as const;

export default function OutcomesAndEvidence() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A07A2E]">
            06 / OUTCOMES & EVIDENCE
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-2">
          Outcomes, metrics <span className="text-[#111827]">&</span> evidence
        </h2>

        {/* Subtext info */}
        <p className="text-sm text-[#4B5563] mb-8">
          A metric is never separated from the context needed to interpret it
          honestly.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {outcomesData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all"
            >
              <div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-[#0F476A] tracking-tight">
                    {item.statOrTitle}
                  </span>
                  {item.subtitleOrCategory && (
                    <span className="text-lg font-semibold text-[#111827]">
                      {item.subtitleOrCategory}
                    </span>
                  )}
                </div>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
