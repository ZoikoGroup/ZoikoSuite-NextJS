"use client";

import React from "react";
import Image from "next/image";

export default function MetricDisclosurePatternSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans flex justify-center items-center px-6 lg:px-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span
                className="text-[11px] font-mono font-bold tracking-widest uppercase"
                style={{ color: "#A07A2E" }}
              >
                METRIC DISCLOSURE PATTERN
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl max-w-xl md:text-[40px] font-bold tracking-tight leading-[1.15]">
              Twelve fields around every number
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              A number without its definition, period, method, scope and
              exclusions is not evidence. This is the block that will wrap any
              quantitative claim.
            </p>
          </div>
        </div>

        {/* Bottom Graphic / Illustration */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] rounded-2xl">
          <Image
            src="/customer/4.png"
            alt="Twelve fields around every number interface illustration"
            fill
            priority
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
