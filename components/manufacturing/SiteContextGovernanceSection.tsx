"use client";

import React from "react";
import Image from "next/image";

export default function SiteContextGovernanceSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
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
                ENTITY, PLANT, SITE AND JURISDICTION GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Site context resolves before authority
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-300 leading-relaxed">
              A plant is not just a location. It carries its own jurisdiction,
              authority scheme, obligation set and residency position.
            </p>
          </div>
        </div>

        {/* Graphic Card / Image Container */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/manufacturing/2.png"
            alt="Site context resolves before authority illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
