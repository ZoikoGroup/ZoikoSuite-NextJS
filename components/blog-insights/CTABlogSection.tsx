import React from "react";

export default function CTABlogSection() {
  return (
    <section className="w-full bg-[#08222F] py-20 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        {/* Subtitle / Breadcrumb */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-[1px] bg-[#C29B38]" />
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            SEE IT IN PRACTICE
          </span>
          <span className="w-6 h-[1px] bg-[#C29B38]" />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[33px] font-bold text-white leading-[1.2] tracking-tight mb-4 max-w-2xl">
          See how this applies to your own governance model
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
          Talk to a solutions architect about scoping policy, evidence, and
          control mapping for your organization.
        </p>

        {/* Buttons / Action Group */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="bg-[#C29B38] hover:bg-[#b08b30] text-[#111827] font-semibold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2"
          >
            Talk to a solutions architect →
          </a>
          <a
            href="#"
            className="bg-transparent hover:bg-white/5 text-white border border-slate-700 font-semibold text-sm px-6 py-3 rounded-full transition-colors"
          >
            Continue reading insights
          </a>
        </div>
      </div>
    </section>
  );
}
