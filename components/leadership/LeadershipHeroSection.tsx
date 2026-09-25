import React from "react";
import Image from "next/image";

export default function LeadershipHeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#0A1D34] to-[#0E2843] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content Section */}
        <div className="w-full lg:w-6/12 flex flex-col items-start">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            COMPANY - LEADERSHIP
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[38px] lg:text-[46px] font-bold text-white leading-tight tracking-tight mb-6">
            Leadership built for accountable execution.
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-8">
            ZoikoSuite is built and operated through defined accountability
            across product, engineering, trust, customer outcomes, and
            enterprise operations — with governance boundaries designed to
            remain clear as the platform scales.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#leadership"
              className="bg-[#C8A24A] hover:bg-[#967332] text-black font-medium text-sm px-6 py-3 rounded-lg transition-colors shadow-sm"
            >
              Meet the leadership
            </a>
            <a
              href="#govern"
              className="bg-transparent hover:bg-white/5 text-white border border-white/20 font-medium text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Explore how we govern
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-6/12 flex justify-center">
          <div className="relative w-full aspect-[3/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/leadership/1.png"
              alt="Leadership team discussing enterprise architecture"
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
