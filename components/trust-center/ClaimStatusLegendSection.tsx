"use client";

import React from "react";
import Image from "next/image";

export default function ClaimStatusLegendSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          {/* Left Column: Eyebrow and Heading */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#A07A2E" }}
              ></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#A07A2E" }}
              >
                CLAIM STATUS LEGEND AND TRUST METHODOLOGY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] text-black font-bold tracking-tight leading-[1.15]">
              Nine statuses, because not every claim is equally certain
            </h2>
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-[#5A6D79] text-sm lg:text-base leading-relaxed">
              A trust center loses credibility when everything looks equally
              verified. Status is text-first; colour reinforces but never
              carries the meaning alone.
            </p>
          </div>
        </div>

        {/* Bottom Graphic / Image Container */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-6xl h-[400px] sm:h-[500px] lg:h-[550px]">
            <Image
              src="/trust/2.png"
              alt="Claim Status Legend and Trust Methodology UI"
              fill
              priority
              className="object-cover rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
