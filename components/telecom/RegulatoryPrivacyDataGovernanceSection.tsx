"use client";

import React from "react";
import Image from "next/image";

export default function RegulatoryPrivacyDataGovernanceSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                REGULATORY, PRIVACY AND CUSTOMER-DATA GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Classification appears before the action, not after
            </h2>
          </div>

          {/* Right Description Area */}
          <div className="lg:col-span-5 flex items-start w-full">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed w-full">
              Where legal or product teams classify data as protected customer
              information, the classification and handling policy display before
              any action is offered.
            </p>
          </div>
        </div>

        {/* Graphic Card Area */}
        <div className="w-full">
          <div className="w-full max-w-6xl">
            <Image
              src="/telecom/3.png"
              alt="Classification appears before the action illustration"
              width={1200}
              height={700}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
