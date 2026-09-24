import React from "react";

const reasons = [
  {
    title: "Meaningful systems",
    lines: [
      "Work on business-critical systems where",
      "accuracy, governance, and operational context",
      "matter.",
    ],
  },
  {
    title: "Broad problem surface",
    lines: [
      "Collaborate across finance, workforce, legal,",
      "compliance, evidence, and intelligence.",
    ],
  },
  {
    title: "Technical + domain depth",
    lines: [
      "Solve problems where software must respect",
      "policy, jurisdiction, and enterprise controls.",
    ],
  },
  {
    title: "Ownership with accountability",
    lines: [
      "Senior contributors have clear decision rights and",
      "review responsibilities.",
    ],
  },
  {
    title: "Global operating context",
    lines: [
      "Build for multi-entity and cross-border enterprise",
      "use cases \u2014 not a promise of global employment.",
    ],
  },
  {
    title: "Growth through difficult work",
    lines: [
      "Learning comes from meaningful ownership,",
      "review, mentorship, and cross-functional",
      "exposure.",
    ],
  },
];

export default function WhyJoinSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-10">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            WHY JOIN
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-[36px] font-serif font-bold text-[#16223A] leading-tight tracking-tight whitespace-nowrap">
            Convert through the work, not unverified perks
          </h2>
        </div>

        {/* Reason Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="w-full p-6 sm:p-7 border border-[#DCD6C8] bg-white rounded-xl flex flex-col items-start justify-start hover:shadow-xs transition-shadow"
            >
              <h3 className="text-[#16223A] text-sm md:text-base font-bold leading-6 mb-2">
                {reason.title}
              </h3>
              <p className="text-[#4B5872] text-xs md:text-sm font-normal leading-5">
                {reason.lines.map((line, idx) => (
                  <span key={idx} className="block whitespace-normal lg:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
