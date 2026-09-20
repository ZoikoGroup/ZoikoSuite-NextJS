"use client";

import React from "react";
import Image from "next/image";

export default function IncidentHistorySection() {
  return (
    <section className="w-full bg-[#F2F0EB] font-sans py-20 md:py-24 px-6 md:px-14">
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
              08 / HISTORY
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold leading-10"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#0D2636",
              }}
            >
              Incident history
            </h2>
            <p
              className="text-base md:text-lg font-normal leading-7 max-w-[633px]"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#3E5A6B",
              }}
            >
              A durable trust record — not curated to show only favorable
              outcomes.
            </p>
          </div>

          {/* Table / History Container */}
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ border: "1px solid #D6DEE3" }}
          >
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[598px]">
              <Image
                src="/Trust-SystemStatus/div.reg-scroll.png"
                alt="Incident History Table"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
