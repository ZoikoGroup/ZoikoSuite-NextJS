"use client";

import React from "react";

export default function ModernizingOperationsExplanation() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white border-t-4 border-t-[#D0AA55] border border-[#D0AA55] rounded-2xl p-8 md:p-12 shadow-sm relative">
          <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-tight mb-4">
            What does modernizing operations with ZoikoSuite mean?
          </h3>
          <p className="text-sm md:text-base text-[#16262F] leading-relaxed max-w-4xl">
            It means moving current systems and manual processes toward a
            governed target operating model through an explicit sequence:
            establish who owns each source, decide a target outcome per scope,
            migrate and reconcile, compare proposed behaviour against current
            operation in Shadow Mode, pass readiness gates, activate on a named
            human decision, and keep a defined recovery position. ZoikoSuite may
            coexist with, coordinate, consolidate or replace selected scope
            depending on approved architecture and readiness.
          </p>
        </div>
      </div>
    </section>
  );
}
