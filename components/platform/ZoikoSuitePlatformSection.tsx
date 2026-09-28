"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ZoikoSuitePlatformSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start">
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
              ZOIKOSUITE PLATFORM
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-6">
            Govern business operations with evidence, context, and
            control.
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
            Bring shared platform services, governance, modular capabilities,
            and operating intelligence into one enterprise layer — while
            preserving the systems and workflows your teams already rely
            on.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-[#20180A] transition-all hover:opacity-90 shadow-lg"
              style={{
                backgroundColor: "#D0AA55",
                border: "1px solid #D0AA55",
              }}
            >
              Take the Platform Tour
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>

            {/* Secondary Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-transparent border border-gray-700 hover:border-gray-500 transition-all"
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full">
          <div className="relative w-full h-[400px] lg:h-[450px] overflow-hidden">
            <Image
              src="/platform/1.png"
              alt="ZoikoSuite Platform Isometric Architecture"
              fill
              priority
              className="object-cover rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
