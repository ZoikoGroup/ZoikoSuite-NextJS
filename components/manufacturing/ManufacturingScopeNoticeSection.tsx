"use client";

import React from "react";

export default function ManufacturingScopeNoticeSection() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-5xl w-full">
        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#C59B3F] border-t-3 border-t-[#C59B3F] shadow-sm flex flex-col items-start">
          <h3 className="text-xl lg:text-[28px] font-bold text-[#0F172A] mb-3 leading-snug">
            What does ZoikoSuite govern in manufacturing?
          </h3>
          <p className="text-[13px] lg:text-[21px] text-gray-700 leading-relaxed">
            The cross-functional business layer around plants: business
            decisions, approvals, delegated authority, obligations, contracts,
            suppliers, evidence, workforce, finance, entity and site context,
            and cross-system workflows. Specialist manufacturing systems keep
            their jobs. ZoikoSuite governs the enterprise <br /> decisions that
            surround production, not production itself.
          </p>
        </div>
      </div>
    </section>
  );
}
