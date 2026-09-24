import React from "react";
import Image from "next/image";

export default function SustainabilitySection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#0A1D34] to-[#0E2843] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-start max-w-xl">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#C8A24A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SUSTAINABILITY
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-6">
            Operate with <br />accountability. <br />
            Measure what matters.
          </h1>

          {/* Description */}
          <p className="text-gray-300 font-light leading-relaxed text-[16.5px] mb-10 max-w-lg">
            ZoikoSuite connects governed operations with clearer evidence,
            responsible technology practices, and transparent sustainability
            status — without turning unverified ambition into fact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#review-evidence"
              style={{ borderRadius: "8px" }}
              className="px-6 py-3 bg-[#C8A24A] text-black text-sm font-semibold tracking-wide hover:bg-[#927230] transition-colors shadow-sm"
            >
              Review sustainability evidence
            </a>
            <a
              href="#talk-to-architect"
              style={{ borderRadius: "8px" }}
              className="px-6 py-3 bg-transparent border border-[#1B3452] text-white text-sm font-semibold tracking-wide hover:bg-white/5 transition-colors"
            >
              Talk to a solutions architect
            </a>
          </div>
        </div>

        {/* Right Column: Illustration */}
        <div className="relative w-full lg:w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
          <Image
            src="/zoiko/9.png"
            alt="Sustainability and Accountability Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
