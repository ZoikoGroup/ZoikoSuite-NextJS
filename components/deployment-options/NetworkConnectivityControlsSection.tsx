"use client";

import React from "react";
import Image from "next/image";

export default function NetworkConnectivityControlsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content / Text (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                NETWORK, CONNECTIVITY, AND BOUNDARY CONTROLS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15] text-[#0F172A]">
              Name every path, its direction, and what happens when it fails
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Connectivity patterns are listed in the hybrid section&apos;s flow
              register. What belongs here is the dependency question: which
              outbound paths must remain reachable for the deployment to
              function at all.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <span className="text-[10px] font-mono font-bold text-[#64748B] tracking-wider uppercase">
                MANDATORY DEPENDENCIES
              </span>
            </div>
          </div>

          {/* Right Graphic / Image (col-span-7) */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <div className="w-full">
              <Image
                src="/deployment/14.png"
                alt="Network connectivity and boundary controls architecture graphic"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
