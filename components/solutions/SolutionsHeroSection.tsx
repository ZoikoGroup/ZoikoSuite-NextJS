"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SolutionsHeroSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start">
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
              SOLUTIONS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-6">
            Solve operational complexity without fragmenting governance.
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
            Explore how ZoikoSuite connects finance, workforce, legal, tax,
            compliance, evidence, and intelligence around the operating
            challenges and decision roles that matter to your organization.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-[#20180A] transition-all hover:opacity-90 shadow-lg"
              style={{
                backgroundColor: "#D0AA55",
                border: "1px solid #D0AA55",
              }}
            >
              Explore solutions by challenge
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>

            {/* Secondary Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-transparent border border-gray-700 hover:border-gray-500 transition-all"
            >
              Talk to a solutions architect
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full">
          <div className="relative w-full h-[400px] lg:h-[450px] overflow-hidden">
            <Image
              src="/platform/6.png"
              alt="Solutions Platform Architecture Illustration"
              fill
              priority
              className="object-cover rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
