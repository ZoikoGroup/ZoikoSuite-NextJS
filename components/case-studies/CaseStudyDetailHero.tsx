import React from "react";
import Image from "next/image";

export default function CaseStudyDetailHero() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A07A2E]">
            05 / DETAIL HERO & AT-A-GLANCE
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-8">
          Case study detail template
        </h2>

        {/* Hero Image Showcase */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-[#F3F4F6]">
          <Image
            src="/case/3.png"
            alt="Case study detail template showcasing futuristic enterprise dashboard, analytics, and workflow components"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
