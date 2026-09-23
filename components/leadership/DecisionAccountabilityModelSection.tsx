import React from "react";
import Image from "next/image";

export default function DecisionAccountabilityModelSection() {
  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            DECISION & ACCOUNTABILITY MODEL
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Who owns which class of decision
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Buyer-relevant decision classes and accountable functions — not a
            delegation-of-authority schedule.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center">
          <div className="relative w-full aspect-[20/10] rounded-2xl overflow-hidden">
            <Image
              src="/leadership/3.png"
              alt="Decision & Accountability Model Architecture"
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
