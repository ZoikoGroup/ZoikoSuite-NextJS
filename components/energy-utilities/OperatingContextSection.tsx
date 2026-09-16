"use client";

import React from "react";
import Image from "next/image";

export default function OperatingContextSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
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
                OPERATING CONTEXT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] text-[#16262F] font-bold tracking-tight leading-[1.15]">
              Five contexts, each with its own boundary
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              Selecting a context changes the examples shown. It does not imply
              separate products, and each carries the operational claim it
              explicitly does not make.
            </p>
          </div>
        </div>

        {/* Single Big Image Showcase */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] lg:aspect-[16/9] bg-[#08222F]">
          <Image
            src="/energy/2.png"
            alt="Five contexts operating showcase illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
