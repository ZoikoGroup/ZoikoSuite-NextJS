"use client";

import React from "react";
import Image from "next/image";

export default function DataLocationDimensions() {
  return (
    <section className="w-full bg-[#08222F] py-20 px-6 lg:px-12 font-sans text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                DATA LOCATION DIMENSIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Seven dimensions that must never collapse into one
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#93A2B8] text-[15px] leading-relaxed">
              &quot;Where is our data?&quot; has seven answers, not one.
              Conflating storage with processing is the most common residency
              misunderstanding, and this matrix exists to prevent it.
            </p>
          </div>
        </div>

        {/* Image Display Section */}
        <div className="w-full">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/data/3.png"
              alt="Seven Data Location Dimensions Architecture Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
