"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PricingCTASection() {
  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 flex items-center justify-center text-center overflow-hidden bg-[#08222F]">
      {/* Background Architectural Photo with Navy Tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pricing-page/pp11.png"
          alt="Modern enterprise architecture"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#08222F]/75" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight text-white leading-tight mb-3">
          Ready to run your business on one governed platform?
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-8 max-w-lg">
          Start with Starter or Growth for 30 days, or talk to us about Enterprise.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            href="/sign-in"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#CDA85B] hover:bg-[#d8b365] text-[#08222F] font-bold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Start free trial
          </Link>
          <Link
            href="/book-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#08222F]/80 hover:bg-white/10 border border-white/30 hover:border-white text-white font-medium text-xs sm:text-sm transition-colors"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
