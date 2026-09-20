"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export default function TemplatesToolsHero() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans overflow-hidden relative">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start z-10">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1.5px] bg-[#D0AA55]"></span>
            <span className="text-xs font-medium uppercase tracking-widest font-sans text-[#D0AA55] leading-5">
              TEMPLATES & TOOLS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold font-['Archivo'] leading-[67.20px] mb-6">
            Practical resources<br />
            for planning,<br />
            evaluating, and<br />
            getting work done
          </h1>

          {/* Description - constrained to 4 lines */}
          <p className="text-gray-300 text-lg font-normal font-sans leading-7 mb-8 max-w-[530px]">
            Explore approved ZoikoSuite templates and tools for structured planning, readiness, implementation, governance, adoption and other supported tasks. Available types and utilities are rendered from the Resource Utility Registry.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold font-sans leading-6 text-[#20180A] transition-all hover:opacity-90 shadow-lg gap-2"
              style={{
                backgroundColor: "#D0AA55",
                border: "1px solid #D0AA55",
              }}
            >
              Browse templates & tools
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Secondary Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold font-sans leading-6 text-gray-300 bg-transparent border border-gray-600 hover:border-gray-400 transition-all"
            >
              Search resources
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-[586px] h-[300px] sm:h-[400px] lg:h-[533px]">
            <img
              src="/templates-tools/ki.png"
              alt="Templates and Tools Overview"
              className="object-cover rounded-[16px] shadow-2xl border border-gray-700/50 w-full h-full"
            />
          </div>
        </div>
      </div>
      
      {/* Background radial gradient */}
      <div className="absolute top-0 left-0 w-full h-[700px] bg-[radial-gradient(ellipse_at_82%_8%,rgba(15,71,106,0.85)_0%,rgba(15,71,106,0)_62%)] pointer-events-none" />
    </section>
  );
}