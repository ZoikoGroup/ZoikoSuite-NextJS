"use client";

import React from "react";
import Image from "next/image";

export default function PartnerDirectorySection() {
  return (
    <section
      id="partner-directory"
      className="w-full bg-white py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans border-b border-[#DCD6C8]/40"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
          PARTNER DIRECTORY
        </span>

        <h2 className="text-3xl md:text-[32px] font-serif font-bold text-[#16223A] leading-tight tracking-tight">
          Verified listings only &mdash; no placeholders
        </h2>

        <p className="text-[#4B5872] text-base font-light leading-relaxed mt-3 max-w-3xl">
          The directory is optional at launch. If no partner records have
          completed verification and publication approval, the correct state is
          a transparent no-public-listings experience.
        </p>

        <div className="w-full mt-8 md:mt-10 rounded-2xl overflow-hidden shadow-xs border border-[#DCD6C8]/60 relative aspect-[1180/559] bg-white">
          <Image
            src="/partners/jo.png"
            alt="Partner Directory - Verified listings only"
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
