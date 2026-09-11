"use client";

import React from "react";
import Image from "next/image";

export default function ExecutiveResourcesHero() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                EXECUTIVE RESOURCES
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[52px] font-bold text-white tracking-tight mb-6 leading-[1.1]">
              Build the enterprise case with evidence, not assumptions.
            </h1>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
              Decision-ready resources for executives evaluating governed
              operations, modernization, architecture, risk and enterprise
              value.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="px-6 py-3 rounded-full bg-[#D0AA55] hover:bg-[#B89648] text-[#06181E] text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#D0AA55]/20 cursor-pointer"
              >
                Book enterprise demo &rarr;
              </button>

              <button
                className="px-6 py-3 rounded-full border border-white/20 hover:border-white text-white text-xs sm:text-sm font-semibold transition-all bg-transparent cursor-pointer"
              >
                Find the right evidence
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/3]">
              <Image
                src="/executive-resources/1.png"
                alt="Executive Resources Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
