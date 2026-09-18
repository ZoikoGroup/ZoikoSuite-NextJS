"use client";

import React from "react";

export default function TelecomScopeNoticeSection() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-5xl w-full">
        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#C59B3F] border-t-4 border-t-[#D0AA55] shadow-sm flex flex-col items-start">
          <h3 className="text-xl lg:text-[28px] font-bold text-[#0F172A] mb-3 leading-snug">
            What does ZoikoSuite govern for operators and MVNOs?
          </h3>
          <p className="text-[13px] lg:text-[18px] text-gray-700 leading-relaxed">
            Governed business operations across finance, workforce, legal and
            commercial, compliance, evidence, intelligence, entities and
            jurisdictions — with controlled integration to the systems that
            actually run telecom services. It governs decisions, approvals,
            obligations, evidence, legal entities, commercial agreements, vendor
            risk, workforce and cross-system operational context.
          </p>
        </div>
      </div>
    </section>
  );
}
