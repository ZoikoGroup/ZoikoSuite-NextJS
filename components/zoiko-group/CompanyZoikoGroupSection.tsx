import React from "react";
import Image from "next/image";

export default function CompanyZoikoGroupSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#0A1D34] to-[#0E2843] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#C8A24A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            COMPANY — ZOIKO GROUP
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-6">
            Part of a group built for long-term <br /> infrastructure.
          </h1>

          {/* Description */}
          <p className="text-gray-300 font-light leading-relaxed text-[16.5vpx] mb-8">
            ZoikoSuite is developed and operated through Zoiko Tech within Zoiko
            Group — a technology-led operating group building trusted platforms
            and businesses across multiple sectors and markets.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#explore"
              style={{ borderRadius: "8px" }}
              className="px-6 py-3 bg-[#C8A24A] hover:bg-[#967432] text-[#0A1D34] font-semibold text-sm tracking-wide transition-colors flex items-center gap-2"
            >
              Explore Zoiko Group ↗
            </a>
            <a
              href="#demo"
              style={{ borderRadius: "8px" }}
              className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-[#1B3452] font-semibold text-sm tracking-wide transition-colors"
            >
              Book enterprise demo
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-6 relative w-full aspect-[3/3] rounded-2xl overflow-hidden">
          <Image
            src="/zoiko/1.png"
            alt="Zoiko Group Long-Term Infrastructure"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
