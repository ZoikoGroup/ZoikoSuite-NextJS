"use client";

import React from "react";

export default function GovernmentPublicSectorScopeNoticeSection() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-5xl w-full">
        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#C59B3F] border-t-4 border-t-[#D0AA55] shadow-sm flex flex-col items-start">
          <h3 className="text-xl lg:text-[28px] font-bold text-[#0F172A] mb-3 leading-snug">
            What does ZoikoSuite govern in the public sector?
          </h3>
          <p className="text-[13px] lg:text-[18px] text-gray-700 leading-relaxed">
            The administrative business layer{" "}
            <span className="font-semibold text-[#0F172A]">around</span>{" "}
            public-sector operations: finance and tax context where applicable,
            workforce and payroll, legal and commercial obligations, supplier
            and contract governance, policy and control evidence, cross-entity
            authority, and governed intelligence. Mission-specific systems keep
            constituent casework, eligibility, permits, public safety, justice,
            elections and revenue collection.
          </p>
        </div>
      </div>
    </section>
  );
}
