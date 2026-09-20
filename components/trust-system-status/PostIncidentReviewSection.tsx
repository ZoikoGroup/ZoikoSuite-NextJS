"use client";

import React from "react";
import Image from "next/image";

export default function PostIncidentReviewSection() {
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
              09 / POST-INCIDENT REVIEW
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold leading-10"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#0D2636",
              }}
            >
              Post-incident review
            </h2>
            <p
              className="text-base md:text-lg font-normal leading-7 max-w-[633px]"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#3E5A6B",
              }}
            >
              An accountability artifact, not a forensic dump — explains impact
              and corrective learning without exposing exploitable detail.
            </p>
          </div>

          {/* Image */}
          <div
            className="relative w-full rounded-2xl overflow-hidden p-7"
            style={{ border: "1px solid #D6DEE3" }}
          >
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[560px]">
              <Image
                src="/Trust-SystemStatus/div.card (3).png"
                alt="Post-Incident Review Template"
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
