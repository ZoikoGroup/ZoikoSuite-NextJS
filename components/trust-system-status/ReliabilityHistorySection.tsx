"use client";

import React from "react";
import Image from "next/image";

export default function ReliabilityHistorySection() {
  return (
    <section className="w-full bg-white font-sans py-16 md:py-20 px-6 md:px-14">
      <div className="max-w-[1320px] mx-auto px-0 md:px-12">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <span
              className="text-xs font-normal tracking-wider"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#D4943A",
              }}
            >
              07 / RELIABILITY
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold leading-10"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#0D2636",
              }}
            >
              Availability &amp; reliability history
            </h2>
            <p
              className="text-base md:text-lg font-normal leading-7 max-w-[633px]"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#3E5A6B",
              }}
            >
              Published only when service boundary, observation points,
              measurement period, and data completeness are approved and
              reproducible. No invented uptime percentages.
            </p>
          </div>

          {/* Image */}
          <div
            className="relative w-full rounded-2xl overflow-hidden p-7"
            style={{ border: "1px solid #D6DEE3" }}
          >
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[570px]">
              <Image
                src="/Trust-SystemStatus/div.card (2).png"
                alt="Availability and Reliability History Chart"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
