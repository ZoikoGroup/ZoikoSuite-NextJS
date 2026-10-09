import React from "react";
import Image from "next/image";

export default function OperatingContextSection() {
  return (
    <section className="w-full bg-[#F6F5F1] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          02 / OPERATING CONTEXT
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-10">
          Explore the responsibilities behind the decision.
        </h2>

        {/* Featured Image Container */}
        <div className="w-full relative aspect-[27/9] rounded-2xl overflow-hidden shadow-xl border border-black/5 bg-white">
          <Image
            src="/comp/c2.png"
            alt="Operating context laptop and workspace illustration"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
