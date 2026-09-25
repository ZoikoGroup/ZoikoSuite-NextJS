import React from "react";

export default function NotEveryDependencyCanOrShouldPublishContractualTermsSection() {
  const rows = [
    {
      scenario: "Commercial SDK with attribution requirement",
      publicBehavior:
        'Component identity, attribution, applicable distribution, and "commercial terms on file."',
      internalBehavior:
        "Contract owner, renewal, usage restrictions, evidence, expiry, release gate.",
    },
    {
      scenario: "Restricted license terms",
      publicBehavior:
        '"License details restricted" only if accurate, plus an enterprise licensing contact.',
      internalBehavior:
        "Access-controlled contract record and approval history.",
    },
    {
      scenario: "Expired/terminated right",
      publicBehavior:
        "Never published as active or shipped in new artifacts unless approved transition rights apply.",
      internalBehavior:
        "Release blocker, replacement plan, renewal/termination evidence.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            THIRD-PARTY COMMERCIAL & RESTRICTED COMPONENTS
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Not every dependency can or should publish contractual terms
          </h1>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-b border-[#DCD6C8]">
          <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Scenario</div>
            <div className="md:col-span-4">Public Behavior</div>
            <div className="md:col-span-4">Internal Behavior</div>
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-start ${
                index !== rows.length - 1 ? "border-b border-[#DCD6C8]" : ""
              }`}
            >
              <div className="md:col-span-4 text-sm font-semibold text-[#0b1329] tracking-tight mb-2 md:mb-0 pr-2">
                {row.scenario}
              </div>
              <div className="md:col-span-4 text-sm text-gray-600 font-light leading-relaxed mb-2 md:mb-0 pr-2">
                {row.publicBehavior}
              </div>
              <div className="md:col-span-4 text-sm text-gray-600 font-light leading-relaxed">
                {row.internalBehavior}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
