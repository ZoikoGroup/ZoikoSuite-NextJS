"use client";

import React from "react";
import Image from "next/image";

export default function IntegrityControlsSection() {
  return (
    <section className="w-full bg-[#08222F] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                INTEGRITY CONTROLS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Seven states, and what each one must not be taken to mean
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[#93A2B8] text-[15px] leading-relaxed">
              Integrity vocabulary is where evidence claims most often
              overreach. Each state below carries an explicit limit.
            </p>
          </div>
        </div>

        {/* Illustration Container */}
        <div className="w-full">
          <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] overflow-hidden">
            <Image
              src="/evidence/3.png"
              alt="Seven states and what each one must not be taken to mean integrity controls illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
