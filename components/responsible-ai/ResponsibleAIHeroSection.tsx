import React from "react";

export default function ResponsibleAIHeroSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 px-6 md:px-12 lg:px-20 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col items-start justify-center">
          {/* Subtitle / Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#A07A2E]" />
            <span className="text-[#A07A2E] text-xs font-bold tracking-[0.2em] uppercase">
              RESPONSIBLE AI
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-bold text-white leading-[1.2] tracking-tight mb-6">
            AI can assist. Governance remains in control.
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            ZoikoSuite applies intelligence within policy, authorization,
            evidence, source-truth and human-review boundaries across finance,
            workforce, legal, tax, compliance and evidence workflows.
          </p>

          {/* Buttons / Action Group */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="bg-[#D0AA55] hover:bg-[#b08b30] text-[#111827] font-semibold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2"
            >
              Request a Responsible AI review →
            </a>
            <a
              href="#"
              className="bg-transparent hover:bg-white/5 text-white border border-slate-700 font-semibold text-sm px-6 py-3 rounded-full transition-colors"
            >
              Talk to a solutions architect
            </a>
          </div>
        </div>

        {/* Right Column: Visual Graphic */}
        <div className="relative w-full aspect-[3/3] overflow-hidden">
          <img
            src="/responsible/1.png"
            alt="AI can assist. Governance remains in control illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
