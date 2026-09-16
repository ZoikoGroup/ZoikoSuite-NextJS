"use client";

import React from "react";
import Image from "next/image";

export default function HumanAuthoritySection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                GOVERNANCE, EVIDENCE AND AI
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Human authority holds across every pattern
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Oversight expectations differ by pattern. The authority model does
              not.
            </p>
          </div>
        </div>

        {/* Content Layout: Left Image, Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/organization/6.png"
                alt="Human authority holds across every pattern visual interface illustration"
                fill
                priority
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Card 1 */}
            <div
              className="bg-white p-6 rounded-xl shadow-sm"
              style={{
                border: "1px solid #DBE3E8",
              }}
            >
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#94A3B8] uppercase block mb-2">
                OVERSIGHT DIFFERS, AUTHORITY DOES NOT
              </span>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A public company carries different oversight expectations from a
                nonprofit, and a professional partnership delegates differently
                from a mid-market enterprise. What stays constant is that
                material authorization rests with a named person acting within a
                valid delegation source &mdash; never with a permission, a
                score, a dashboard or an AI output.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white p-6 shadow-sm"
              style={{
                border: "1px solid #DBE3E8",
                borderLeftWidth: "3px",
                borderLeftColor: "#0F476A",
              }}
            >
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#0F476A] uppercase block mb-2">
                AI BOUNDARY
              </span>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                No autonomous material action in any pattern. Where a required
                record is missing &mdash; as with the shared-services scope
                above &mdash; the finding states the gap rather than inferring
                past it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
