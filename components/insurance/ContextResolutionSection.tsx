"use client";

import React from "react";
import Image from "next/image";

export default function ContextResolutionSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px]" style={{ backgroundColor: "#A07A2E" }}></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#A07A2E" }}
              >
                ENTITY, JURISDICTION, AUTHORITY AND RESIDENCY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Context resolution with coverage-status discipline
            </h2>
          </div>

          {/* Right Description Area */}
          <div className="lg:col-span-5 lg:pt-6 flex items-start">
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              Insurance groups carry entities with different regulators, mandates
              and business lines. Coverage is stated per jurisdiction with its
              source — never as a blanket claim.
            </p>
          </div>
        </div>

        {/* Bottom Image Container (Explicit height used instead of aspect ratios) */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] rounded-2xl overflow-hidden">
          <Image
            src="/insurance/2.png"
            alt="Context resolution with coverage-status discipline illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}