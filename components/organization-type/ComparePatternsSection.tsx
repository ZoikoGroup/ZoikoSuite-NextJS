"use client";

import React from "react";
import Image from "next/image";

export default function ComparePatternsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-6 lg:px-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                COMPARE PATTERNS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Up to three, side by side
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Comparison shows the same contract fields for each pattern. It
              produces no ranking, no recommendation and no score.
            </p>
          </div>
        </div>

        {/* Bottom Graphic / Illustration */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] rounded-2xl">
          <Image
            src="/organization/5.png"
            alt="Up to three, side by side pattern comparison interface illustration"
            fill
            priority
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
