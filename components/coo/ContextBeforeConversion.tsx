import React from "react";

export default function ContextBeforeConversion() {
  return (
    <section className="bg-[#092632] py-24 px-6 md:px-12 font-sans text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Tagline */}
        <p className="text-[#C9A34C] text-xs font-bold tracking-[0.2em] uppercase mb-4">
          CONTEXT BEFORE CONVERSION
        </p>

        {/* Main Headline */}
        <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl leading-[1.15]">
          See how this applies to your own governance model.
        </h2>

        {/* Subtitle / Description */}
        <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl leading-relaxed mb-10 font-normal">
          Discuss the scope, responsibilities and evidence you need. This page
          illustrates a concept; it does not establish live product
          capability.
        </p>

        {/* Action Button */}
        <div>
          <a
            href="#context"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#D0A644] text-[#FFFFFF] text-sm font-bold hover:bg-[#C5A028] transition-colors duration-200 shadow-md"
          >
            Review evaluation context
          </a>
        </div>
      </div>
    </section>
  );
}
