"use client";

import React from "react";
import Image from "next/image";

export default function HybridIntegrationArchitectureSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                HYBRID AND CONTROLLED INTEGRATION ARCHITECTURE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15] text-[#0F172A]">
              Where the boundary sits when systems span environments
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Most real deployments are hybrid. What matters is that each
              crossing is named, directional, authenticated, and monitored.
            </p>
          </div>
        </div>

        {/* Main Graphic / Image (No background, border, shadow or aspect size) */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl">
            <Image
              src="/deployment/10.png"
              alt="Hybrid and controlled integration architecture graphic"
              width={1200}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
