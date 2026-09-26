import React from "react";
import Image from "next/image";

export default function FounderAndInstitutionalContextSection() {
  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            FOUNDER & INSTITUTIONAL CONTEXT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-6">
            Founder-led. Institution-building.
          </h1>

          {/* Description (16.5px for lg devices) */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            Zoiko Tech&apos;s official About material identifies Lennox McLeod as its
            founder, separately published as Founder & Executive Chairman of
            Zoiko Group. No ZoikoSuite operating title, board seat, or ownership
            percentage is assigned by inference.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/tech/2.png"
              alt="Founder-led institution building context"
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
