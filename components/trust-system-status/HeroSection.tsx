"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="w-full text-white font-sans relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0A1E2C, #0E2A3D)",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 pt-20 md:pt-24 pb-0">
        <div className="relative">
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
            className="text-4xl md:text-5xl font-bold leading-[1.14] mb-5 max-w-3xl"
            style={{ fontFamily: "'Archivo', sans-serif", color: "#E8E4DC" }}
          >
            Some ZoikoSuite services
            <br />
            are experiencing
            <br />
            degraded performance.
          </h1>

          {/* Subtext */}
          <p
            className="text-base md:text-lg font-normal leading-7 mb-6 max-w-[633px]"
            style={{ fontFamily: "'Archivo', sans-serif", color: "#A8BFCC" }}
          >
            See current service health, active incidents, scheduled maintenance,
            and historical status for the ZoikoSuite services covered by this
            public page.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-16 md:mb-24">
            <a
              href="#active-incident"
              className="inline-flex items-center justify-center px-6 h-11 rounded-full text-base font-semibold transition-all hover:opacity-90"
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
              className="inline-flex items-center justify-center px-6 h-11 rounded-full text-base font-semibold transition-all hover:border-gray-400"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#E6E2DA",
                border: "1px solid #3E5A6B",
              }}
            >
              Subscribe to updates
            </a>
          </div>

          {/* Mockup Image Container */}
          <div
            className="relative w-full rounded-2xl overflow-visible"
            style={{
              backgroundColor: "#0F1F2B",
              border: "1px solid #1C3A50",
            }}
          >
            {/* Left-aligned product mockup with shadow */}
            <div className="relative w-full md:w-[55%] h-[300px] sm:h-[400px] md:h-[549px]">
              <Image
                src="/Trust-SystemStatus/Live status product mockup_shadow.png"
                alt="System Status Live Dashboard Mockup"
                fill
                priority
                className="object-cover object-top rounded-2xl"
                style={{
                  boxShadow: "0px 30px 70px -30px rgba(0,0,0,0.60)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
