"use client";

import React from "react";
import Image from "next/image";

export default function OperatingIntelligenceSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-12">
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
              OPERATING INTELLIGENCE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-6">
            See what is changing, what needs attention, and what evidence sits
            behind it.
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm lg:text-base max-w-xl leading-relaxed">
            Operating Intelligence brings approved operational signals, status,
            exceptions, dependencies, and evidence into context across the
            platform — to help users understand and investigate, not to make
            unreviewable decisions for them.
          </p>
        </div>

        {/* Graphic / Image Container */}
        <div className="relative w-full">
          <div className="relative w-full max-w-6xl h-[400px] sm:h-[500px] lg:h-[550px] overflow-hidden">
            <Image
              src="/platform/3.png"
              alt="Operating Intelligence Dashboard Isometric Graphic"
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
