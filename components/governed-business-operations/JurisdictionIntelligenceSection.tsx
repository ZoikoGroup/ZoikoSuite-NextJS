"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function JurisdictionIntelligenceSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                JURISDICTION INTELLIGENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-xl">
              Make jurisdiction context visible at the point of work
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-md leading-relaxed">
            Coverage status, source authority, ruleset version, and last review
            date travel with every jurisdiction claim. Unverified coverage never
            appears as active.
          </p>
        </div>

        {/* Image Display Container */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#DBE3E8] bg-[#08222F] mb-12">
          <img
            src="/governed-business-operations/2.png"
            alt="Jurisdiction Intelligence interface view"
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* Bottom Rounded Button */}
        <div className="flex justify-center w-full">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
          >
            Explore jurisdiction intelligence
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
