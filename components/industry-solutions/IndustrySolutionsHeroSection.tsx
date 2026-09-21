"use client";

import React from "react";
import Image from "next/image";

export default function IndustrySolutionsHeroSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy & Buttons */}
        <div className="lg:col-span-6 flex flex-col items-start">
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
              INDUSTRY SOLUTIONS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight leading-[1.1] mb-6">
            Find the governed operating solution for your industry
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-8">
            Choose your industry and the operating challenge that matters most.
            ZoikoSuite applies one evidence-led governance model across finance,
            workforce, legal, tax, compliance, approvals, integrations and
            executive intelligence — while specialist systems remain
            authoritative where appropriate.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#solutions"
              className="bg-[#D0AA55] hover:bg-[#C59B3F] text-[#08222F] font-bold py-3.5 px-6 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm text-sm"
            >
              Find my solution →
            </a>
            <a
              href="#demo"
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold py-3.5 px-6 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              Book enterprise demo
            </a>
          </div>
        </div>

        {/* Right Side: Image Card */}
        <div className="lg:col-span-6 w-full flex justify-center">
          <div className="w-full">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/industry-solutions/1.png"
                alt="Governed operating solution network illustration"
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
