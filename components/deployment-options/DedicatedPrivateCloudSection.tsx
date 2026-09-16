"use client";

import React from "react";
import Image from "next/image";

export default function DedicatedPrivateCloudSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: 3D Graphic / Image */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="w-full relative">
            <Image
              src="/deployment/8.png"
              alt="Dedicated private cloud operating boundary graphic"
              width={800}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Column: Content & Description */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#A07A2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
              PATTERN 03 &mdash; DEDICATED PRIVATE CLOUD
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15] text-[#0F172A]">
            Use a dedicated environment with an explicit operating boundary
          </h2>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            The phrase carries almost no information on its own. What makes it
            evaluable is naming the operator for every layer and every action.
          </p>
        </div>
      </div>
    </section>
  );
}
