"use client";

import React from "react";
import Image from "next/image";

export default function TransparentCostsSection() {
  return (
    <section className="relative w-full bg-[#FBF9F4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#CDA85B]" />
              <span className="text-[10.5px] font-mono font-semibold uppercase tracking-[0.2em] text-[#CDA85B]">
                TRANSPARENT VARIABLE COSTS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#08222F] tracking-tight mb-4 leading-tight">
              Some services scale with usage. You stay in control.
            </h2>

            {/* Subtitle / Body text */}
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xl">
              Workforce/payroll services may be priced per active employee; AI, API, filing/provider transactions and selected third-party services may use included allowances or separately authorized charges. Your exact rate and allowance are shown before activation or checkout.
            </p>
          </div>

          {/* Right Column: Tax/Financial Image (pp7.png) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg w-full aspect-[4/3] sm:aspect-[16/11] border border-slate-200">
              <Image
                src="/pricing-page/pp7.png"
                alt="Some services scale with usage. You stay in control."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
