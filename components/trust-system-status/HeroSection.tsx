"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="w-full text-white font-sans relative overflow-hidden py-16 lg:py-24 px-6 md:px-14 flex justify-center"
      style={{
        background: "linear-gradient(to bottom, #0A1E2C, #0E2A3D)",
      }}
    >
      <div className="max-w-[1320px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-4 h-[1.5px] bg-[#D4943A]" />
            <span
              className="text-xs font-medium tracking-[0.15em] uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#D4943A",
              }}
            >
              SYSTEM STATUS
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.14] mb-5 text-[#E8E4DC] tracking-tight"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Some ZoikoSuite services <br />
            are experiencing <br />
            degraded performance.
          </h1>

          {/* Subtext */}
          <p
            className="text-base text-[#A8BFCC] leading-relaxed mb-8 max-w-[560px] font-normal"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            See current service health, active incidents, scheduled maintenance,
            and historical status for the ZoikoSuite services covered by this
            public page.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#active-incident"
              className="inline-flex items-center justify-center px-6 h-11 rounded-full text-sm sm:text-base font-semibold transition-all hover:opacity-90"
              style={{
                fontFamily: "'Archivo', sans-serif",
                backgroundColor: "#D4943A",
                border: "1px solid #D4943A",
                color: "#1F1408",
              }}
            >
              View active incident
              <span
                className="ml-2 text-xs font-semibold opacity-90"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                →
              </span>
            </a>
            <a
              href="#notifications"
              className="inline-flex items-center justify-center px-6 h-11 rounded-full text-sm sm:text-base font-semibold transition-all hover:border-gray-400"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#E6E2DA",
                border: "1px solid #3E5A6B",
              }}
            >
              Subscribe to updates
            </a>
          </div>
        </div>

        {/* Right Column: Graphic Mockup */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <img
            src="/Trust-SystemStatus/Live status product mockup_shadow.png"
            alt="System Status Live Dashboard Mockup"
            className="w-full max-w-[620px] h-auto object-contain block m-0 p-0"
          />
        </div>
      </div>
    </section>
  );
}
