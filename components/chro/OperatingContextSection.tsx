import React from "react";
import Image from "next/image";

export default function OperatingContextSection() {
  return (
    <section className="w-full bg-[#F6F5F1] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag / Category */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          02 / OPERATING CONTEXT
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-10">
          Explore the responsibilities behind the decision.
        </h2>

        {/* Image Container */}
        <div className="w-full relative aspect-[16/9] max-h-[540px] rounded-2xl overflow-hidden shadow-lg border border-black/5 bg-[#EAE8E1]">
          <Image
            src="/chro/2.png"
            alt="Explore the responsibilities behind the decision team meeting"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
