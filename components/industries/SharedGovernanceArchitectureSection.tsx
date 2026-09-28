"use client";

import React from "react";
import Image from "next/image";

export default function SharedGovernanceArchitectureSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-12">
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
              SHARED GOVERNANCE ARCHITECTURE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15] mb-4">
            Industry context changes inputs and constraints — not the core
            principles.
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-mono">
            One Governance Core, six shared domains, and industry-specific
            context injected at the edge.
          </p>
        </div>

        {/* Image Card Container */}
        <div className="relative w-full">
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[520px] overflow-hidden">
            <Image
              src="/platform/8.png"
              alt="Industry context changes inputs and constraints — not the core principles"
              fill
              priority
              className="object-cover rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
