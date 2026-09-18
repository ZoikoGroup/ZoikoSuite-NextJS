"use client";

import React from "react";

export default function RetailCommerceScopeNoticeSection() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-5xl w-full">
        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#C59B3F] shadow-sm flex flex-col items-start">
          <h3 className="text-xl lg:text-[28px] font-bold text-[#0F172A] mb-3 leading-snug">
            What does ZoikoSuite govern in retail and commerce?
          </h3>
          <p className="text-[13px] lg:text-[18px] text-gray-700 leading-relaxed">
            The enterprise actions{" "}
            <span className="font-semibold text-[#0F172A]">around</span> the
            commerce stack: who is authorized, which entity and jurisdiction
            apply, which policy or obligation controls the action, what evidence
            is preserved, and where exceptions require human review. Commerce
            engines keep checkout, POS, catalog, order orchestration, inventory,
            fulfillment and payment execution.
          </p>
        </div>
      </div>
    </section>
  );
}
