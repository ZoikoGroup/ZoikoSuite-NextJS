import React from "react";

export default function NoInventedAgeThresholdOrChildDirectedClaimSection() {
  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            CHILDREN & AGE-RELATED PROCESSING
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            No invented age threshold or child-directed claim
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            [ Approved age-eligibility and handling statement, reflecting
            product eligibility, actual audience, and jurisdiction-specific
            legal review. ]
          </p>
        </div>
      </div>
    </section>
  );
}
