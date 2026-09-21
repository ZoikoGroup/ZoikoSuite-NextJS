"use client";

import React from "react";

export default function ResidencyEvidenceSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                RESIDENCY EVIDENCE, EXCEPTIONS AND DRIFT
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Configuration is evidenced, and deviations are visible
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              A residency claim is only as good as the evidence that the
              configuration is actually in force, and the record of when it was
              not.
            </p>
          </div>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Residency Evidence Contents */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#9CA3AF] uppercase block mb-6">
                RESIDENCY EVIDENCE CONTENTS
              </span>
              <ul className="space-y-3 mb-8 text-[13px] text-[#4B5563]">
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>Configured policy with scope and effective date</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>Verification result and verification date</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>Change history with actor and approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>Open exceptions with owner and expiry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>Drift events with detection time and resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>Named owner for the whole record</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="w-full rounded-[4px] border border-[#E2C67F] bg-[#FBF2DF] px-3">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#6B4E0F]">
                  PHASED DELIVERY
                </span>
              </div>
            </div>
          </div>

          {/* Right Card: What Evidence Does Not Establish */}
          <div
            className="rounded-3xl p-6 md:p-8 border border-[#E5E7EB] shadow-sm flex flex-col justify-between"
            style={{ backgroundColor: "#F6EDD9" }}
          >
            <div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#6A5620] uppercase block mb-6">
                WHAT EVIDENCE DOES NOT ESTABLISH
              </span>
              <ul className="space-y-3 mb-6 text-[13px] text-[#4B5563]">
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>That the configuration satisfies applicable law</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>That a transfer has a valid legal basis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>That a regulator would accept the arrangement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>
                    That no drift occurred between verification points
                  </span>
                </li>
              </ul>
              <div className="border-t border-dashed border-[#E5E7EB] pt-4 mb-6">
                <p className="text-[13px] text-[#4B5563] leading-relaxed">
                  Residency configuration does not by itself establish legal
                  compliance.
                </p>
              </div>
            </div>
            <div>
              <div className="w-full rounded-[4px] border border-[#DBE3E8] bg-[#F1F3F4] px-2">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#5A6D79]">
                  NOT CLAIMED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
