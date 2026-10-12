import React from "react";
import Image from "next/image";

export default function TaxResponsibilitiesContextSection() {
  return (
    <section className="w-full bg-[#F6F5F1] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Header Content */}
        <div className="mb-10 flex flex-col items-start max-w-2xl">
          {/* Subtitle / Category Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-0.5 bg-[#C8963D]" />
            <span className="text-xs font-bold text-[#C8963D] tracking-wider uppercase">
              RESPONSIBILITIES IN CONTEXT
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2]">
            Explore the responsibilities behind the decision.
          </h2>
        </div>

        {/* Featured Image Asset */}
        <div className="w-full relative aspect-[16/9] sm:aspect-[31/9] overflow-hidden">
          <Image
            src="/tax/sec.png"
            alt="Laptop displaying dashboard for exploring tax responsibilities"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
