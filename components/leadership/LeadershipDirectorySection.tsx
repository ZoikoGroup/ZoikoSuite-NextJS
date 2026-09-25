import React from "react";
import Image from "next/image";

export default function LeadershipDirectorySection() {
  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            LEADERSHIP DIRECTORY
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Verified profiles, grouped by accountability
          </h1>
        </div>

        {/* Image Container */}
        <div className="w-full flex justify-center">
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
            <Image
              src="/leadership/2.png"
              alt="Verified profiles grouped by accountability across various organizational units"
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
