"use client";

import React from "react";

export default function FinancialServiceExplanation() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-white border border-[#D0AA55] rounded-2xl p-8 md:p-12 shadow-sm relative">
          <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-tight mb-4">
            What does ZoikoSuite do for financial services?
          </h3>
          <p className="text-sm md:text-base text-[#16262F] leading-relaxed max-w-4xl">
            ZoikoSuite governs financial operations: it evaluates material
            financial and operational actions against policy and delegated
            authority before they complete, preserves the decision basis and
            execution lineage as evidence, and holds entity, jurisdiction and
            effective-date context at the point of action. It coordinates across
            finance, tax, compliance and adjacent functions while authoritative
            records remain in the systems that already hold them.
          </p>
        </div>
      </div>
    </section>
  );
}
