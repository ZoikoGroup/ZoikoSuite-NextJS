"use client";

import React from "react";
import Image from "next/image";

export default function MigrationEvidenceManifestSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                MIGRATION EVIDENCE MANIFEST
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Ten artifact classes, each with{" "}
              <br className="hidden sm:inline" />
              minimum metadata
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              The manifest is what makes an activation decision reviewable
              afterwards. An incomplete class blocks the evidence gate rather
              than being quietly omitted.
            </p>
          </div>
        </div>

        {/* Featured Image Graphic Container */}
        <div className="w-full relative rounded-2xl overflow-hidden">
          <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[550px]">
            <Image
              src="/modernize/3.png"
              alt="Migration evidence manifest ten artifact classes interface illustration"
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
