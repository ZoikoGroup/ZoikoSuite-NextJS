"use client";

import React from "react";

export default function ContextResolutionSection() {
  return (
    <section className="w-full bg-[#0B2538] py-20 px-6 lg:px-12 flex justify-center items-center font-sans text-white">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#D0AA55]"></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#D0AA55" }}
              >
                ENTITY, JURISDICTION, AUTHORITY AND RESIDENCY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Context resolves before a decision is offered
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              A banking group&apos;s entities differ in jurisdiction, authority
              scheme and residency position. Each is resolved per action rather
              than assumed from a group default.
            </p>
          </div>
        </div>

        {/* Visual Graphic Card Container */}
        <div className="w-full overflow-hidden">
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src="/banking/3.png"
              alt="Entity, Jurisdiction, Authority and Residency Context Resolution Visualization"
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
