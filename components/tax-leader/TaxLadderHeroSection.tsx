import React from "react";
import Image from "next/image";

export default function TaxLadderHeroSection() {
  return (
    <section className="w-full bg-[#09232F] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Subtitle / Category Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-0.5 bg-[#C8963D]" />
            <span className="text-xs font-bold text-[#C8963D] tracking-wider uppercase">
              GOVERNED BUSINESS OPERATIONS &middot; TAX LADDER
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.15] mb-6">
            Bring clarity to tax responsibilities across the business.
          </h1>

          {/* Description */}
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            Explore a proposed way to organize tax obligations, decision owners,
            review checkpoints, exceptions, and supporting evidence across teams
            and entities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/book-demo"
              className="px-6 py-3.5 rounded-xl bg-[#D9A74A] hover:bg-[#C8963D] text-[#09232F] font-bold text-sm sm:text-base transition-colors shadow-sm"
            >
              Request Demo
            </a>
            <a
              href="/sign-up"
              className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-white border border-white/20 font-semibold text-sm sm:text-base transition-colors"
            >
              Create Account
            </a>
          </div>
        </div>

        {/* Right Column: Image Asset */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/tax/1.png"
              alt="Tax responsibilities and business governance illustration"
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
