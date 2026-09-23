import React from "react";

export default function TechnologyCompanyThesisSection() {
  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Subtitle */}
        <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
          TECHNOLOGY COMPANY THESIS
        </span>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-[32px] max-w-2xl font-bold text-[#0b1329] leading-tight tracking-tight mb-6">
          Built as a platform company, not a single application.
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base max-w-2xl font-light leading-relaxed">
          Zoiko Tech develops reusable technology capabilities across
          intelligence, infrastructure, enterprise operations, communications,
          security, and industry systems. ZoikoSuite is one platform within that
          broader technology estate, with its own product architecture,
          governance model, and buyer outcomes.
        </p>
      </div>
    </section>
  );
}
