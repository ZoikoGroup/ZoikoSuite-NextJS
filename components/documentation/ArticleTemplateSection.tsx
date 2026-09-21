import React from "react";

export default function ArticleTemplateSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            06 / ARTICLE TEMPLATE
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-3">
          Documentation article template
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
          Left docs navigation, task-first article body, and a right-rail
          on-page table of contents — the canonical reading experience every
          card opens into.
        </p>

        {/* Visual Graphic Container */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-slate-900 flex items-center justify-center">
          <img
            src="/doc/2.png"
            alt="Documentation article template illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
