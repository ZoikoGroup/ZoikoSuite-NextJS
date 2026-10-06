"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function IndustriesSection() {
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
              INDUSTRIES
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-6">
            Govern complex operations in the context your industry
            demands.
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8 max-w-xl font-mono">
            ZoikoSuite connects finance, workforce, legal, tax, compliance,
            evidence, and intelligence through one governance layer — then
            applies entity, jurisdiction, policy, authority, and residency
            context to the operating realities of each industry.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <a
              href="#explore"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold font-mono text-[#20180A] transition-all hover:opacity-90 shadow-lg"
              style={{
                backgroundColor: "#D0AA55",
                border: "1px solid #D0AA55",
              }}
            >
              Explore your industry
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </a>

            {/* Secondary Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold font-mono text-white bg-[#0B2432] border border-white/10 hover:border-white/30 transition-all"
            >
              Talk to an industry specialist
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full">
          <div className="relative w-full h-[400px] lg:h-[450px] overflow-hidden">
            <Image
              src="/platform/7.png"
              alt="Govern complex operations in the context your industry demands"
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
