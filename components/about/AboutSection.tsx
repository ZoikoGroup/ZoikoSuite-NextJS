import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#0A1D34] to-[#0E2843] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Text Content */}
        <div className="flex-1 max-w-2xl flex flex-col items-start">
          {/* Subtitle */}
          <span className="text-[#C8A24A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            ABOUT ZOIKOSUITE
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-[42px] font-serif font-bold text-white leading-[1.15] tracking-tight mb-6">
            One governed operating model for{" "}
            <span className="text-[#C8A24A]">
              the business behind the systems.
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#C7D2E2] text-base font-light leading-relaxed mb-8">
            ZoikoSuite connects finance, workforce, legal, tax, compliance,
            evidence, and intelligence so material actions can execute with
            policy, authority, jurisdiction, and auditability built in.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-[#C8A24A] hover:bg-[#c5a880] text-[#20170A] font-bold text-sm md:text-base transition-colors duration-200 shadow-lg"
          >
            Book enterprise demo
          </a>
        </div>

        {/* Right Column: Visual Graphic */}
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/about/1.png"
              alt="ZoikoSuite Governed Operating Model Architecture"
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
