"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NextStepGovernGlobalOperationsSection() {
  return (
    <section className="w-full bg-[#0F476A] py-20 md:py-28 text-white font-sans flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="w-4 h-[2px] bg-[#D0AA55]" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase">
            NEXT STEP
          </span>
          <span className="w-4 h-[2px] bg-[#D0AA55]" />
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl max-w-xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white max-w-3xl">
          Govern your global operations with confidence
        </h2>

        {/* Description Paragraph */}
        <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
          Unify finance, workforce, legal, tax, compliance, and commercial
          operations under one governed platform.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <Link
            href="#book-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D0AA55] text-[#08222F] text-xs sm:text-sm font-bold hover:bg-[#e0bc6b] transition-colors shadow-sm group"
          >
            <span>Book enterprise demo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#talk-architect"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-transparent border border-white/20 text-white text-xs sm:text-sm font-bold hover:bg-white/5 transition-colors"
          >
            Talk to a solutions architect
          </Link>
        </div>
      </div>
    </section>
  );
}
