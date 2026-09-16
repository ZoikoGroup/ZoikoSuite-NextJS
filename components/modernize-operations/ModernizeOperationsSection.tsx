"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function ModernizeOperationsSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans flex justify-center items-center px-6 lg:px-12">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content & Buttons */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#A07A2E]"></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#A07A2E" }}
            >
              MODERNIZE OPERATIONS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-[60px] font-bold tracking-tight leading-[1.15] mb-6">
            Modernize operations without losing control of the business
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
            Move current systems and manual processes toward a governed target
            operating model with explicit source ownership, coexistence,
            migration, Shadow Mode, readiness, evidence, human authority and
            recovery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-gray-950 transition-all hover:opacity-90 shadow-md"
              style={{
                backgroundColor: "#D0AA55",
                border: "1px solid #D0AA55",
              }}
            >
              <span>Book enterprise demo</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:bg-white/10"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #4A7893",
              }}
            >
              Talk to a solutions architect
            </button>
          </div>
        </div>

        {/* Right Column: Illustration Graphic */}
        <div className="lg:col-span-6">
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[530px] rounded-2xl overflow-hidden">
            <Image
              src="/modernize/1.png"
              alt="Modernize operations interface illustration"
              fill
              priority
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
