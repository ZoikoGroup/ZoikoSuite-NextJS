import React from "react";

export default function AuthorizedAgentFlowSection() {
  const rows = [
    {
      field: "Representative name / organization",
      rule: "Required for the agent route.",
    },
    {
      field: "Authority type",
      rule: "Signed permission, legal authority, parent/guardian, or other approved basis.",
    },
    {
      field: "Evidence",
      rule: "Only when legally/operationally required; secure upload/attestation.",
    },
    {
      field: "Consumer confirmation",
      rule: "Requested directly when applicable and legally permitted.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            AUTHORIZED AGENT / REPRESENTATIVE FLOW
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Authority, verification, and least-data design
          </h1>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-b border-[#DCD6C8]">
          <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Field</div>
            <div className="md:col-span-8">Rule</div>
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-start ${
                index !== rows.length - 1 ? "border-b border-[#DCD6C8]" : ""
              }`}
            >
              <div className="md:col-span-4 text-sm font-semibold text-[#0b1329] tracking-tight mb-2 md:mb-0">
                {row.field}
              </div>
              <div className="md:col-span-8 text-sm text-gray-600 font-light leading-relaxed">
                {row.rule}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
