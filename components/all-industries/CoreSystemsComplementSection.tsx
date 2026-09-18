"use client";

import React from "react";
import Image from "next/image";

export default function CoreSystemsComplementSection() {
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
                INTEGRATIONS AND SYSTEM COEXISTENCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight leading-[1.15]">
              Complement to core systems, in every sector
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              The pattern is identical across industries: specialist systems
              stay authoritative for their own domain, and ZoikoSuite is
              authoritative for exactly one object.
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-full h-[500px] sm:h-[550px] lg:h-[650px]">
            <Image
              src="/industries/3.png"
              alt="Complement to core systems illustration showing multi-industry connections"
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
