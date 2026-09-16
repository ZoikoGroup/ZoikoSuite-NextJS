"use client";

import React from "react";

export default function LegalVendorGovernanceSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#C59B3F]"></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                LEGAL, VENDOR AND THIRD-PARTY GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Signatory authority is checked before execution, not after
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Third-party risk is a supervisory focus for banks. This is the
              contract and vendor path with authority in the execution route.
            </p>
          </div>
        </div>

        {/* Visual Graphic Card Container */}
        <div className="w-full overflow-hidden">
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src="/banking/5.png"
              alt="Legal, Vendor and Third-Party Governance Signatory Authority Visualization"
              className="w-full h-auto object-cover opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
