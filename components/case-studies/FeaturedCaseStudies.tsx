import React from "react";
import Image from "next/image";

export default function FeaturedCaseStudies() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A07A2E]">
            03 / FEATURED PROOF
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-10">
          Featured case studies
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {/* Card 1 */}
          <div className="bg-white border border-[#DBE3E8] border-l-4 border-l-[#DBE3E8] rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all">
            <div>
              <div className="w-10 h-10 relative mb-5 rounded-lg overflow-hidden bg-[#F3F4F6]">
                <Image
                  src="/case/icon1.png"
                  alt="Financial Services Icon"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6B7280] block mb-2">
                FINANCIAL SERVICES
              </span>
              <h3 className="text-[#16262F] font-semibold leading-snug mb-4">
                Reducing audit prep time with evidence-linked workflows
              </h3>
              <div className="inline-block bg-[#E6F4EA] text-[#137333] text-xs font-medium px-3 py-1 rounded-md mb-6">
                Faster audit evidence assembly
              </div>
            </div>
            <div className="text-[11px] font-semibold tracking-[0.15em] text-[#9CA3AF] uppercase pt-2">
              REVIEWED AUG 2026
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#DBE3E8] border-l-4 border-l-[#DBE3E8] rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all">
            <div>
              <div className="w-10 h-10 relative mb-5 rounded-lg overflow-hidden bg-[#F3F4F6]">
                <Image
                  src="/case/icon2.png"
                  alt="Insurance Icon"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6B7280] block mb-2">
                INSURANCE
              </span>
              <h3 className="text-[#16262F] font-semibold leading-snug mb-4">
                Cutting policy exception cycle time in half
              </h3>
              <div className="inline-block bg-[#E6F4EA] text-[#137333] text-xs font-medium px-3 py-1 rounded-md mb-6">
                Fewer manual exception reviews
              </div>
            </div>
            <div className="text-[11px] font-semibold tracking-[0.15em] text-[#9CA3AF] uppercase pt-2">
              REVIEWED JUL 2026
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#DBE3E8] border-l-4 border-l-[#DBE3E8] rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all">
            <div>
              <div className="w-10 h-10 relative mb-5 rounded-lg overflow-hidden bg-[#F3F4F6]">
                <Image
                  src="/case/icon3.png"
                  alt="Manufacturing Icon"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6B7280] block mb-2">
                MANUFACTURING
              </span>
              <h3 className="text-[#16262F] font-semibold leading-snug mb-4">
                Operating across five entities under one governance layer
              </h3>
              <div className="inline-block bg-[#E6F4EA] text-[#137333] text-xs font-medium px-3 py-1 rounded-md mb-6">
                Consolidated policy registry
              </div>
            </div>
            <div className="text-[11px] font-semibold tracking-[0.15em] text-[#9CA3AF] uppercase pt-2">
              REVIEWED JUN 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
