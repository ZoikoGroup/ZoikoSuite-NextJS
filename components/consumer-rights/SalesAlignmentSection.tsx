import React from "react";

export default function SalesAlignmentSection() {
  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-10 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SALES, CONVERSION & TRUST ALIGNMENT
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-white leading-tight tracking-tight mb-6">
            Commercial value without contaminating the rights journey
          </h1>

          {/* Description */}
          <p className="text-gray-300 font-light leading-relaxed text-[15px] max-w-3xl">
            This page contains no sales CTA inside the request flow. Its
            commercial role is trust conversion: demonstrating to prospects,
            customers, procurement teams, privacy counsel, and security
            reviewers that ZoikoSuite can operationalize privacy obligations
            rather than merely publish policy language.
          </p>
        </div>

        {/* Callout Box */}
        <div
          className="w-full bg-[#FFFFFF0D] border-l-4 border-l-[#C8A24A] p-4"
        >
          <p className="text-gray-300 font-light leading-relaxed text-[14px]">
            Trust principle: the conversion event is successful rights exercise
            and increased confidence — not a demo request. No cross-sell,
            newsletter opt-in, ad pixels, or promotional banners appear on
            request or status pages.
          </p>
        </div>
      </div>
    </section>
  );
}
