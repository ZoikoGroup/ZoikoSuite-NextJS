"use client";

import React from "react";
import Image from "next/image";

export default function ResourceLibrarySection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                CURRENT EXECUTIVE RESOURCES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Resource library
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Registry-driven. This section renders whatever the Resource
              Registry currently reports as published &mdash; which today is
              nothing.
            </p>
          </div>
        </div>

        {/* Image Display Container */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[16/9] max-h-[500px]">
          <Image
            src="/executive-resources/2.png"
            alt="Resource Library Registry Dashboard"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
