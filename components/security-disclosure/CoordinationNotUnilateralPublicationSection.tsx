import React from "react";

export default function CoordinationNotUnilateralPublicationSection() {
  const rows = [
    {
      area: "Disclosure timing",
      rule: "Policy may define a default coordination approach, but case-specific safety and exploitation factors can change timing.",
    },
    {
      area: "Researcher credit",
      rule: "Opt-in only; respects pseudonym/anonymity; remediation is never conditioned on publicity rights.",
    },
    {
      area: "Technical detail",
      rule: "Redacts secrets, exploit-enabling detail, customer identifiers, and unresolved attack paths until approved.",
    },
    {
      area: "CVE/CNA handling",
      rule: "Never implies ZoikoSuite is a CNA unless verified.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            COORDINATED DISCLOSURE & PUBLIC ADVISORY MODEL
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Coordination, not unilateral publication
          </h1>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-b border-[#DCD6C8]">
          <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Area</div>
            <div className="md:col-span-8">Required Rule</div>
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-start ${
                index !== rows.length - 1 ? "border-b border-[#DCD6C8]" : ""
              }`}
            >
              <div className="md:col-span-4 text-sm font-semibold text-[#0b1329] tracking-tight mb-2 md:mb-0">
                {row.area}
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
