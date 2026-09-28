"use client";

import React from "react";
import Image from "next/image";

export default function PlatformArchitectureSection() {
  return (
    <section className="w-full bg-[#F6F5F0] text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-12">
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
              PLATFORM ARCHITECTURE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-6">
            How the layers relate — not just where to click.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-xl">
            Select any layer to see what it governs and how it connects to the
            layers around it. Cross-cutting context and Trust evidence apply
            where configured and supported.
          </p>
        </div>

        {/* Graphic / Image Container */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-6xl h-[400px] sm:h-[500px] lg:h-[550px] overflow-hidden">
            <Image
              src="/platform/2.png"
              alt="Platform Architecture Layers Isometric Graphic"
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
