import React from "react";

const commitments = [
  {
    title: "Accessible job search",
    lines: [
      "Keyboard, screen-reader, zoom/reflow, focus,",
      "contrast, semantic filters, accessible",
      "autocomplete.",
    ],
  },
  {
    title: "Accommodation route",
    lines: [
      'Dedicated "Request an interview accommodation"',
      "action, available before and during application.",
    ],
  },
  {
    title: "Minimal disclosure",
    lines: [
      "Accommodation requests never require diagnosis",
      "details beyond what is necessary to provide",
      "support.",
    ],
  },
  {
    title: "Separation from evaluation",
    lines: [
      "Accommodation data is not exposed to",
      "interviewers except operational details they need.",
    ],
  },
  {
    title: "Qualification hierarchy",
    lines: [
      "Required qualifications are always separated from",
      "preferred/advantageous criteria.",
    ],
  },
  {
    title: "No diversity theater",
    lines: [
      "No demographic, employee-group, or pay-equity",
      "claims without verified ownership and data.",
    ],
  },
];

export default function InclusionAccessibilityBelongingSection() {
  return (
    <section className="relative w-full bg-[#EFE8D8] py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-10">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            INCLUSION, ACCESSIBILITY &amp; BELONGING
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-[36px] font-serif font-bold text-[#16223A] leading-tight tracking-tight whitespace-nowrap">
            Operational, not slogan-only
          </h2>
        </div>

        {/* Commitment Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {commitments.map((commitment) => (
            <div
              key={commitment.title}
              className="w-full p-6 sm:p-7 border border-[#DCD6C8] bg-white rounded-xl flex flex-col items-start justify-start hover:shadow-xs transition-shadow"
            >
              <h3 className="text-[#16223A] text-sm md:text-base font-bold leading-6 mb-2">
                {commitment.title}
              </h3>
              <p className="text-[#4B5872] text-xs md:text-sm font-normal leading-5">
                {commitment.lines.map((line, idx) => (
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
