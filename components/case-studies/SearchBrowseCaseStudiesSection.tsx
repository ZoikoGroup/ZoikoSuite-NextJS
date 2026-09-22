"use client";

import React from "react";
import Image from "next/image";

export default function SearchBrowseCaseStudiesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-4 h-[1px]"
              style={{ backgroundColor: "#C9B07A" }}
            ></span>
            <span
              className="text-[11px] font-semibold tracking-widest uppercase font-mono"
              style={{ color: "#C9B07A" }}
            >
              02 / DISCOVERY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
            Search & browse case studies
          </h2>
        </div>

        {/* Image Showcase Container */}
        <div className="relative overflow-hidden">
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/case/2.png"
              alt="Search & Browse Case Studies Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
