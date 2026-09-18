"use client";

import React from "react";
import Image from "next/image";

export default function EvidenceControlPlaneSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-xl">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                EVIDENCE CONTROL PLANE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              The registry, with its integrity state per object
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Every evidence object carries its layer, source, integrity state
              and last verification. Synthetic data throughout.
            </p>
          </div>
        </div>

        {/* Illustration Container */}
        <div className="w-full">
          <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] overflow-hidden">
            <Image
              src="/evidence/2.png"
              alt="The registry with its integrity state per object compliance illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
