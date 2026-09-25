import React from "react";

export default function LicensesAndThirdPartyNoticesSection() {
  return (
    <section className="relative w-full bg-[#FBFAF7] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Subtitle */}
        <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
          LEGAL · LICENSES
        </span>

        {/* Main Headline */}
        <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
          Licenses and third-party notices, mapped to the software you use.
        </h1>

        {/* Description Text */}
        <p className="text-gray-600 font-light leading-relaxed text-[15px] max-w-2xl">
          Review approved license records, open-source notices, attribution
          requirements, and applicable source or redistribution information for
          ZoikoSuite software and distributed components.
        </p>
      </div>
    </section>
  );
}
