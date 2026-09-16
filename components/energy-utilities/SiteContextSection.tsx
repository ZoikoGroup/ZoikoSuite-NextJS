"use client";

import React from "react";
import Image from "next/image";

export default function SiteContextSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                ENTITY, SITE, ASSET-CONTEXT AND JURISDICTION
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Site context without asset-control claims
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              A site carries its own regulator, authority scheme, obligation set
              and residency position. Asset context means governance reference,
              not asset control.
            </p>
          </div>
        </div>

        {/* Single Big Image Showcase */}
        <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/10] lg:aspect-[17/9]">
          <Image
            src="/energy/3.png"
            alt="Site context and jurisdiction illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
