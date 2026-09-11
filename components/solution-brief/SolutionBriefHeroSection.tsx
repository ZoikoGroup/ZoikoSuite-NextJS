"use client";

import React from "react";

export default function SolutionBriefHeroSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#D0AA55]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase">
                SOLUTION BRIEF
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[52px] font-bold text-white tracking-tight leading-[1.1] mb-6">
              A concise enterprise brief for evaluating ZoikoSuite
            </h1>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
              See how governed business operations intelligence connects
              operational context, policy, authority, human decisions,
              execution, evidence and intelligence &mdash; and how ZoikoSuite
              can be evaluated alongside the systems you already run.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#demo"
                className="py-3 px-6 rounded-full bg-[#D0AA55] hover:bg-[#B89443] text-black font-bold text-xs transition-colors shadow-sm inline-flex items-center gap-1.5"
              >
                <span>Book enterprise demo</span>
                <span>→</span>
              </a>

              <a
                href="#resources"
                className="py-3 px-6 rounded-full bg-transparent hover:bg-white/5 border border-[#2A6386] text-white font-bold text-xs transition-colors inline-flex items-center"
              >
                Explore executive resources
              </a>
            </div>
          </div>

          {/* Right Column: Image Display */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/sol-brief/hero.png"
                alt="Solution Brief Evaluation Graphic"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
