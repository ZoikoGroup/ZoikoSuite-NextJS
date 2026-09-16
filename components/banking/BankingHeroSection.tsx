"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function BankingHeroSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans flex justify-center items-center px-6 lg:px-12">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#A07A2E]"></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase font-mono"
              style={{ color: "#A07A2E" }}
            >
              BANKING
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-tight leading-[1.1] mb-6">
            Govern the operations around banking before control breaks after the
            fact
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            ZoikoSuite connects finance, workforce, legal, third-party,
            compliance-obligation, evidence and decision workflows across
            banking entities and jurisdictions &mdash; so material internal
            actions can move with policy, authority and auditability built in.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-gray-950 transition-all hover:opacity-90 shadow-md"
              style={{
                backgroundColor: "#D0AA55",
                border: "1px solid #D0AA55",
              }}
            >
              Book enterprise demo
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:bg-white/10"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              Talk to a solutions architect
            </button>
          </div>
        </div>

        {/* Right Column: Visual Graphic Card */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-lg rounded-2xl overflow-hidden">
            <img
              src="/banking/1.png"
              alt="Banking Governance Architecture Visualization"
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
