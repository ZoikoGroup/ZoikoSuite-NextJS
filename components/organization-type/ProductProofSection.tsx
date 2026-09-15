"use client";

import React from "react";
import Image from "next/image";

export default function ProductProofSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans flex justify-center items-center px-6 lg:px-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                PRODUCT PROOF
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15]">
              Decision attention within configured scope
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Permission-aware and entity-scoped. Priority always carries a text
              reason &mdash; there is no composite score anywhere in this view.
            </p>
          </div>
        </div>

        {/* Bottom Graphic / Illustration */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] rounded-2xl">
          <Image
            src="/organization/4.png"
            alt="Decision attention within configured scope interface illustration"
            fill
            priority
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
