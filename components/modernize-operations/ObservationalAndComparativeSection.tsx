"use client";

import React from "react";
import Image from "next/image";

export default function ObservationalAndComparativeSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                SHADOW MODE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15]">
              Observational and comparative <br className="hidden sm:inline" />
              &mdash; nothing more
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              A comparison shows what would have happened differently. It does
              not make it happen.
            </p>
          </div>
        </div>

        {/* Featured Image Graphic Container */}
        <div className="w-full relative rounded-2xl overflow-hidden">
          <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[600px]">
            <Image
              src="/modernize/2.png"
              alt="Observational and comparative shadow mode interface illustration"
              fill
              priority
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
