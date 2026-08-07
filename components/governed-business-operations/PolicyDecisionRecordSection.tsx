"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function PolicyDecisionRecordSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-12 flex items-center justify-center">
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
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-xl">
              Policy Decision Record
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-md leading-relaxed">
            Input facts, machine evaluation, human outcome, exception, and audit
            metadata — kept separate so a reviewer can see exactly where the
            machine ended and the person began.
          </p>
        </div>

        {/* Image Display Container */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#DBE3E8] bg-[#08222F] mb-12">
          <img
            src="/governed-business-operations/8.png"
            alt="Policy Decision Record interface view"
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* Bottom Rounded Button */}
        <div className="flex justify-center w-full">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
          >
            Explore policy management
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
