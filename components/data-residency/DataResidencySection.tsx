"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DataResidencySection() {
  return (
    <section className="w-full bg-[#08222F] py-20 px-6 lg:px-16 font-sans text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                DATA RESIDENCY
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] mb-6">
              Keep data location explicit. Keep deployment choices governed.
            </h2>

            {/* Description */}
            <p className="text-[#93A2B8] text-[15px] leading-relaxed mb-8 max-w-xl">
              ZolkoSuite is architected to make storage, processing, backup,
              replication, recovery, key custody and sovereign deployment
              constraints visible by jurisdiction, workload, data class and
              deployment. Availability varies by deployment and jurisdiction.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="h-12 px-6 flex items-center gap-2 bg-[#D0AA55] hover:bg-[#C59B3F] text-[#111827] font-semibold rounded-full text-[13px] transition-colors shadow-sm cursor-pointer"
              >
                <span>Request a residency assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                className="h-12 px-6 flex items-center justify-center bg-transparent hover:bg-white/5 text-white font-medium rounded-full text-[13px] border border-white/20 transition-colors cursor-pointer"
              >
                <span>Review Security Overview</span>
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full">
              <div className="relative w-full aspect-[3/3] overflow-hidden">
                <Image
                  src="/data/1.png"
                  alt="Data Residency and Global Globe Illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
