"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function TemplatesToolsHero() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-20 px-6 lg:px-14 flex justify-center items-center font-sans overflow-hidden relative">
      <div className="max-w-[1320px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <span className="w-4 h-[1.5px] bg-[#D4943A]" />
            <span
              className="text-xs font-medium uppercase tracking-widest text-[#D4943A] leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              TEMPLATES & TOOLS
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.12] mb-6"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Practical resources
            <br />
            for planning,
            <br />
            evaluating, and
            <br />
            getting work done
          </h1>

          {/* Description with exact 4 lines */}
          <p
            className="text-[#B4C7C6] text-base sm:text-lg leading-7 mb-8 max-w-[580px] font-normal"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Explore approved ZoikoSuite templates and tools for structured
            <br />
            planning, readiness, implementation, governance, adoption and other
            <br />
            supported tasks. Available types and utilities are rendered from the
            <br />
            Resource Utility Registry.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-3.5">
            {/* Primary Button */}
            <a
              href="#catalog"
              className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-[13.5px] hover:bg-[#c29c4c] transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              <span>Browse templates & tools</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Secondary Button */}
            <a
              href="#search"
              className="inline-flex shrink-0 items-center justify-center px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 border border-white/20 font-semibold text-[13.5px] text-white transition-colors whitespace-nowrap"
            >
              Search resources
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[586px] h-[340px] sm:h-[420px] lg:h-[533px] rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
            <Image
              src="/templates-tools/ki.png"
              alt="Templates and Tools Overview"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Background radial gradient */}
      <div className="absolute top-0 left-0 w-full h-[700px] bg-[radial-gradient(ellipse_at_82%_8%,rgba(15,71,106,0.85)_0%,rgba(15,71,106,0)_62%)] pointer-events-none" />
    </section>
  );
}