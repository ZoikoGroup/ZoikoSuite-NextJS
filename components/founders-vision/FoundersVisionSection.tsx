import React from "react";
import Image from "next/image";

export default function FoundersVisionSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#0A1D34] to-[#0E2843] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Text & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          {/* Subtitle */}
          <span className="text-[#C8A24A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            FOUNDER&apos;S VISION
          </span>

          {/* Main Headline (32px and bold) */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-6">
            Build the system that makes responsible execution the default.
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-8">
            ZoikoSuite is being built around a simple idea: policy, authority,
            evidence, and jurisdiction should travel with the action — so
            organizations can move with speed and remain accountable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#C8A24A] hover:bg-[#957332] text-[#0b1329] font-medium text-sm md:text-base px-6 py-3 rounded-xl transition-colors shadow-sm">
              Explore the platform
            </button>
            <button className="bg-transparent hover:bg-white/5 text-white font-medium text-sm md:text-base px-6 py-3 rounded-xl border border-white/20 transition-colors">
              Book enterprise demo
            </button>
          </div>
        </div>

        {/* Right Column: Graphic Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src="/founders/1.png"
              alt="Founder's Vision Architecture"
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
