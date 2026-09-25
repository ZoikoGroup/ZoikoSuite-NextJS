import React from "react";
import Image from "next/image";

export default function AdoptionWithoutBigBangRiskSection() {
  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            ADOPTION WITHOUT BIG-BANG RISK
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            A durable vision must survive contact with the systems you already
            run.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Evidence-led coexistence: map data, integrate controlled actions,
            run selected capabilities in parallel, validate equivalence and
            integrity, then expand where the evidence supports it.
          </p>
        </div>

        {/* Graphic Image Section */}
        <div className="w-full flex justify-center">
          <div className="relative w-full aspect-[18/9] rounded-2xl overflow-hidden">
            <Image
              src="/founders/3.png"
              alt="Adoption Without Big-Bang Risk Architecture"
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
