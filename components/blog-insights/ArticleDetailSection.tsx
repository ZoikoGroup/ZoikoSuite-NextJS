import React from "react";

export default function ArticleDetailSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      {/* Header Content */}
      <div className="max-w-6xl w-full flex flex-col items-start mb-10">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            06 / ARTICLE DETAIL
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-3">
          Article detail template
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed max-w-2xl">
          The full editorial experience: classification, provenance, key
          takeaway, body, sources, and correction state.
        </p>
      </div>

      {/* Visual Graphic Container */}
      <div className="max-w-6xl w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-white flex items-center justify-center border border-slate-100">
        <img
          src="/doc/9.png"
          alt="Article Detail Template Illustration"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
