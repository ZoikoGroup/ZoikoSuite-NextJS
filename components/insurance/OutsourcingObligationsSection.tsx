"use client";

import React from "react";
import Image from "next/image";

export default function OutsourcingObligationsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0F172A] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
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
                LEGAL, DISTRIBUTION, VENDOR AND THIRD-PARTY GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Outsourcing obligations with authority in the execution path
            </h2>
          </div>

          {/* Right Description Area */}
          <div className="lg:col-span-5 lg:pt-6 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Insurers carry heavy outsourcing and delegated-authority exposure.
              This is the contract and provider path — not producer licensing or
              distribution administration.
            </p>
          </div>
        </div>

        {/* Bottom Image Container (Explicit height, no aspect ratios) */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] rounded-2xl overflow-hidden">
          <Image
            src="/insurance/3.png"
            alt="Outsourcing obligations with authority in the execution path illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
