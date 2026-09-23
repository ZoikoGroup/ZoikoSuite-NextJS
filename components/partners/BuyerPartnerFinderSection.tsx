"use client";

import React from "react";
import Image from "next/image";

export default function BuyerPartnerFinderSection() {
  return (
    <section className="w-full bg-[#EFE8D8] py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <span className="text-[#A8843A] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
          BUYER PARTNER FINDER
        </span>

        <h2 className="text-3xl md:text-[32px] font-serif font-bold text-[#16223A] leading-tight tracking-tight max-w-3xl">
          Find help by what you need &mdash; not by our internal program names
        </h2>

        <div className="w-full mt-8 md:mt-10 rounded-2xl overflow-hidden shadow-xs border border-[#DCD6C8]/60 relative aspect-[1116/539] bg-white">
          <Image
            src="/partners/po.png"
            alt="Buyer Partner Finder - ZoikoSuite"
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
