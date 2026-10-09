import React from "react";
import { ArrowRight } from "lucide-react";

export default function GovernanceModelSection() {
  return (
    <section className="w-full bg-[#09232F] py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#D9A74A] uppercase mb-4">
          CONTEXT BEFORE CONVERSION
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6 max-w-3xl">
          See how this applies to your own governance model.
        </h2>

        {/* Subtitle / Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
          Discuss the scope, responsibilities and evidence you need. This page
          illustrates a concept; it does not establish live product capability.
        </p>

        {/* CTA Button */}
        <a
          href="#context"
          className="inline-flex items-center justify-center px-7 py-4 rounded-lg bg-[#D9A74A] hover:bg-[#C8963D] text-black font-medium text-base transition-colors shadow-lg group"
        >
          <span>Review evaluation context</span>
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
