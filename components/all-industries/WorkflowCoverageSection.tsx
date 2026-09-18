"use client";

import React from "react";
import Image from "next/image";

export default function WorkflowCoverageSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
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
                ENTITY, JURISDICTION AND RESIDENCY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Coverage is stated per workflow, never as a blanket claim
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Five coverage states are published at workflow level. A sector
              page never inherits coverage from this hub, and this hub never
              asserts coverage on a sector&apos;s behalf.
            </p>
          </div>
        </div>

        {/* Image Container without max-w or background */}
        <div className="relative w-full">
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              src="/industries/2.png"
              alt="Workflow coverage illustration showing entity, jurisdiction and residency states"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
