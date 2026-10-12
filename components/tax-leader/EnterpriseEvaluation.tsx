import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function EnterpriseEvaluation() {
  return (
    <section className="bg-[#092632] py-24 px-6 md:px-12 lg:px-20 font-sans text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Tagline */}
        <p className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-4">
          DISCUSS ENTERPRISE EVALUATION
        </p>

        {/* Main Headline */}
        <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl leading-[1.15]">
          See how this applies to your own governance model.
        </h2>

        {/* Description */}
        <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl leading-relaxed mb-10 font-normal">
          Discuss scope, responsibilities, and evidence needs. Confirm what is
          conceptual, what is available, and what requires professional
          review.
        </p>

        {/* Action Button */}
        <div className="mb-8">
          <a
            href="#form"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#CFA844] text-[#FFFFFF] text-sm font-bold hover:bg-[#C5A028] transition-colors duration-200 space-x-2 shadow-md"
          >
            <span>Discuss evaluation context</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Footer Link */}
        <div>
          <a
            href="/sign-in"
            className="text-[#94A3B8] text-xs md:text-sm underline hover:text-white transition-colors duration-200"
          >
            Existing customer? Find the right account or support route.
          </a>
        </div>
      </div>
    </section>
  );
}
