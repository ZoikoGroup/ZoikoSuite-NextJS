"use client";

import React from "react";
import Image from "next/image";

const timelineEntries = [
  {
    time: "09:12 UTC",
    status: "Investigating",
    description:
      "Confirmed elevated export processing time for evidence manifests in the EU region. Investigating root cause.",
  },
  {
    time: "08:58 UTC",
    status: "Investigating",
    description:
      "Monitoring reported delayed evidence export completion for a subset of EU-region requests.",
  },
];

export default function ActiveIncidentSection() {
  return (
    <section
      id="active-incident"
      className="w-full bg-white font-sans py-16 md:py-20 px-6 md:px-14"
    >
      <div className="max-w-[1320px] mx-auto px-0 md:px-12">
        <div className="flex flex-col gap-1.5">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <span
              className="text-xs font-normal tracking-wider"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#D4943A",
              }}
            >
              05 / ACTIVE INCIDENT
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold leading-10"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#0D2636",
              }}
            >
              Evidence export delays in EU region
            </h2>
            <p
              className="text-base md:text-lg font-normal leading-7 max-w-[633px]"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#3E5A6B",
              }}
            >
              Public incident ID INC-2026-0914-03 · Impact: Degraded
              performance · Started 08:58 UTC
            </p>
          </div>

          {/* Content Grid */}
          <div className="mt-11 grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
            {/* Left: Image */}
            <div
              className="relative w-full h-[300px] sm:h-[351px] rounded-2xl overflow-hidden border border-[#D6DEE3]"
            >
              <Image
                src="/Trust-SystemStatus/io.png"
                alt="Active Incident Details"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Right: Timeline */}
            <div className="self-stretch px-7 py-7 bg-white rounded-2xl border border-[#D6DEE3] flex flex-col justify-start items-start h-full">
              <div className="self-stretch pb-7 flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-[#3E5A6B] text-xs font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                  Timeline (newest first)
                </div>
              </div>

              {timelineEntries.map((entry, idx) => (
                <div
                  key={idx}
                  className={`self-stretch pt-3.5 pb-4 inline-flex justify-start items-start gap-4 ${
                    idx < timelineEntries.length - 1
                      ? "border-b border-[#D6DEE3]"
                      : ""
                  }`}
                >
                  <div className="w-32 shrink-0 inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-[#3E5A6B] text-xs font-normal font-['JetBrains_Mono'] leading-5">
                      {entry.time}
                    </div>
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <div className="self-stretch justify-center text-[#173D52] text-xs font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                        {entry.status}
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <div className="self-stretch justify-center text-[#0D2636] text-sm font-normal font-['Archivo'] leading-6">
                        {entry.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
