import React from "react";
import Image from "next/image";

export default function ZoikoTechSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#0A1D34] to-[#0E2843] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          {/* Subtitle */}
          <span className="text-[#C8A24A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            ZOIKO TECH
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[38px] lg:text-[46px] font-bold text-white leading-tight tracking-tight mb-6">
            The technology company behind ZoikoSuite.
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-8">
            ZoikoSuite is a Zoiko Tech platform. Zoiko Tech builds intelligent
            infrastructure, enterprise platforms, communications systems,
            security capabilities, developer technology, and domain-specific AI
            for complex operating environments.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#C8A24A] hover:bg-[#967332] text-[#0A1D34] font-semibold px-6 py-3 rounded-xl transition-colors text-sm md:text-base">
              Talk to a solutions architect
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-semibold px-6 py-3 rounded-xl transition-colors text-sm md:text-base flex items-center gap-2">
              Visit Zoiko Tech →
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full aspect-[3/3] rounded-2xl overflow-hidden">
            <Image
              src="/tech/1.png"
              alt="Zoiko Tech campus and platform architecture"
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
