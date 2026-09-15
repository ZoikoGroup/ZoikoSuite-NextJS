"use client";

import React from "react";
import Image from "next/image";

export default function SovereignDeploymentSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#D0AA55]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase">
                PATTERN 04 &mdash; SOVEREIGN DEPLOYMENT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15] text-white">
              Define sovereignty requirement by requirement
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              &ldquo;Sovereign&rdquo; is not a product tier and not a legal
              conclusion. It is fifteen separable requirements, each needing an
              interpretation owner and evidence.
            </p>
          </div>
        </div>

        {/* Main Graphic / Image (No background, border, shadow or aspect size) */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl">
            <Image
              src="/deployment/9.png"
              alt="Sovereign deployment requirements analysis graphic"
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
