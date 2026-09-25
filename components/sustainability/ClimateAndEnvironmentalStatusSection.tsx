import React from "react";
import Image from "next/image";

export default function ClimateAndEnvironmentalStatusSection() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            CLIMATE & ENVIRONMENTAL STATUS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Useful even when product-specific emissions data is unavailable
          </h1>
        </div>

        {/* Main Illustration Container */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/zoiko/10.png"
            alt="Climate and Environmental Status Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
