"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StartFromProcessYouWouldNotRiskBreakingSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 flex justify-center">
      <div className="max-w-4xl w-full flex flex-col text-left">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#38BDF8]" />
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[#38BDF8] uppercase font-mono">
            NEXT STEP
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
          Start from the process you would not risk breaking
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6 max-w-2xl">
          The most productive first conversation is about one bounded scope: which system stays authoritative, what would have to reconcile, what evidence you would need before activation, and what your recovery position would be. Not a programme plan.
        </p>

        {/* Callout with Left Border */}
        <div className="border-l-2 border-[#38BDF8] pl-4 py-1 mb-8">
          <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-normal">
            No migration timeline, effort, cost, Shadow Mode availability or replacement outcome is committed outside an approved commercial and implementation document.
          </p>
        </div>

        {/* Tour Link */}
        <div>
          <Link
            href="/platform-tour"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#38BDF8] hover:text-white transition-colors group"
          >
            <span>Or inspect the governed model in the tour</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
