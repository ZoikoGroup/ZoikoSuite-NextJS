import React from "react";
import Image from "next/image";

export default function CategoryDefinitionSection() {
  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            CATEGORY DEFINITION
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-[32px] font-serif font-bold text-[#0b1329] leading-[1.15] tracking-tight mb-6">
            Governed Business Operations Intelligence
          </h1>

          {/* Description Paragraph */}
          <p className="text-gray-600 text-base md:text-[18px] font-light leading-relaxed">
            A governance-first operating platform that connects financial,
            workforce, legal, tax, compliance, evidence, and intelligence
            domains through one policy-aware, entity-aware, and
            jurisdiction-aware control model. The category is defined by how
            work is governed and evidenced — not by how many modules exist.
          </p>
        </div>

        {/* Visual Graphic Section */}
        <div className="w-full flex justify-center">
          <div className="relative w-full aspect-[21/10] max-w-6xl rounded-2xl overflow-hidden">
            <Image
              src="/about/2.png"
              alt="Governed Business Operations Intelligence Architecture"
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
