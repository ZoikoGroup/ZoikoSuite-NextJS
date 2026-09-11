"use client";

import React from "react";

export default function ArchitectureLayersSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                CHAPTER 4 • ARCHITECTURE AND COEXISTENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Three layers, and one ownership matrix
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              The layers describe what the platform is. The matrix describes
              what changes in your estate &mdash; which is the question
              procurement actually asks.
            </p>
          </div>
        </div>

        {/* Graphic Showcase Container */}
        <div className="relative rounded-3xl overflow-hidden border border-[#CBD5E1] shadow-xl bg-[#06181E]">
          <div className="aspect-[16/9] relative flex items-center justify-center p-6 bg-gradient-to-br from-[#0A2530] to-[#041014]">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2A6386_1px,transparent_1px)] [background-size:20px_20px]"></div>

            {/* Image display representing the layers & matrix graphic */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img
                src="/sol-brief/big.png"
                alt="Three layers and one ownership matrix graphic"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
