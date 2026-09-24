import React from "react";

export default function ExactStatusNeverImpliedByPageDesignAloneSection() {
  const rows = [
    {
      state: "No public bounty",
      treatment:
        '"We currently do not operate a public monetary bounty. We still welcome qualifying vulnerability reports through this policy."',
    },
    {
      state: "Public bounty",
      treatment:
        "Renders only the approved platform, asset eligibility, severity/reward table, exclusions, and tax/payment terms.",
    },
    {
      state: "Private / invitation-only",
      treatment:
        "Private reward terms are never exposed publicly; report acceptance is distinguished from reward eligibility.",
    },
    {
      state: "Unknown registry state",
      treatment: 'No reward card or "eligible" label is rendered.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            REWARDS, BOUNTIES & RECOGNITION
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Exact status — never implied by page design alone
          </h1>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-b border-[#DCD6C8]">
          <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">State</div>
            <div className="md:col-span-8">Public Copy Treatment</div>
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-start ${
                index !== rows.length - 1 ? "border-b border-[#DCD6C8]" : ""
              }`}
            >
              <div className="md:col-span-4 text-sm font-semibold text-[#0b1329] tracking-tight mb-2 md:mb-0">
                {row.state}
              </div>
              <div className="md:col-span-8 text-sm text-gray-600 font-light leading-relaxed">
                {row.treatment}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
