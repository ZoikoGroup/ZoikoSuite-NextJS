"use client";

import React from "react";
import Image from "next/image";

export default function SupplierGovernanceSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                SUPPLIER AND THIRD-PARTY GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xl font-bold tracking-tight leading-[1.1]">
              Dependency made visible before it becomes disruption
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Criticality, diligence state, contract obligations and dependency
              exceptions in one governed record — with authority in the
              execution path.
            </p>
          </div>
        </div>

        {/* Graphic Card / Image Container */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/manufacturing/3.png"
            alt="Dependency made visible illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
