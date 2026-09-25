import React from "react";
import Image from "next/image";

export default function CareersHeroSection() {
  return (
    <section className="relative w-full bg-[#081829] py-16 lg:py-20 px-6 sm:px-10 lg:px-16 overflow-hidden font-sans">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Content Section */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {/* Subtitle */}
          <span className="text-[#C8A24A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            COMPANY &middot; CAREERS
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-white leading-tight lg:leading-[1.18] tracking-tight mb-5 max-w-xl">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              Build systems that make
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              complex work accountable.
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#C7D2E2] text-sm sm:text-base font-light leading-relaxed mb-8 max-w-xl">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              Join teams shaping ZoikoSuite &mdash; a governed business operations
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              platform connecting finance, workforce, legal, compliance, evidence,
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              and operational intelligence across entities and jurisdictions.
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#open-roles"
              className="bg-[#C8A24A] hover:bg-[#B5913D] text-[#1A1408] font-bold text-sm px-6 h-[48px] rounded-lg transition-colors shadow-xs inline-flex items-center justify-center"
            >
              View open roles
            </a>
            <a
              href="#teams"
              className="bg-transparent hover:bg-white/5 text-white border border-white/30 font-bold text-sm px-6 h-[48px] rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Explore teams
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-[480px] aspect-[480/440] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A1E35]">
            <Image
              src="/careers/div.hero-visual (1).png"
              alt="Team collaborating on governed business operations platform"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
