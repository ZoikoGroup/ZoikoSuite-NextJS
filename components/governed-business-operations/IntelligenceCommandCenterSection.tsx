"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function IntelligenceCommandCenterSection() {
  return (
    <section className="w-full bg-[#08222F] text-[#F7F5F0] py-20 px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                PRODUCT PROOF
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-white max-w-xl">
              Intelligence Command Center
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9ba4b5] max-w-md leading-relaxed">
            Attention, context, governance, evidence, and next action in one
            role-aware surface.
          </p>
        </div>

        {/* Image Display Container */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a3848] bg-[#0c2735] mb-12">
          <img
            src="/governed-business-operations/6.png"
            alt="Intelligence Command Center interface view"
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* Bottom Rounded Button */}
        <div className="flex justify-center w-full">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#D0AA55] text-[#08222F] hover:bg-[#c29c4d] transition-colors shadow-sm"
          >
            View the platform tour
            <ArrowRight className="w-4 h-4 text-[#08222F]" />
          </a>
        </div>
      </div>
    </section>
  );
}
