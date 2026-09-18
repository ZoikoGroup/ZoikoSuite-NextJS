"use client";

import React from "react";
import Image from "next/image";

export default function IndustrySolutionMatrixSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
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
                INDUSTRY SOLUTION MATRIX
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Which patterns matter most, by sector
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Relevance, not availability. Every pattern is available to every
              sector — this shows where each one usually carries the most
              weight.
            </p>
          </div>
        </div>

        {/* Image Display */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl relative aspect-[16/10] overflow-hidden">
            <Image
              src="/industry-solutions/2.png"
              alt="Industry solution matrix diagram illustrating sector connections"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
