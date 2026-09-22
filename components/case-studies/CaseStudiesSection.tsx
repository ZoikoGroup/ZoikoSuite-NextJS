"use client";

import React from "react";
import Image from "next/image";

export default function CaseStudiesSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-6">
              See how organizations put ZoikoSuite to work.
            </h2>
            <p className="text-[#4B5563] text-[15px] leading-relaxed mb-6">
              Explore source-approved customer stories that connect operating
              challenges, ZoikoSuite capabilities, implementation context, and
              verified outcomes.
            </p>
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Customer identities, quotes, metrics, and assets appear only when
              approved for public use.
            </p>
          </div>

          {/* Right Column: Illustration / Image */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/4] rounded-2xl overflow-hidden">
              <Image
                src="/case/1.png"
                alt="Case Studies Illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
