"use client";

import React from "react";

interface AdoptionCard {
  category: string;
  description: string;
  secondaryDescription?: string;
}

const ADOPTION_CARDS: AdoptionCard[] = [
  {
    category: "PRODUCT TOUR",
    description:
      "An inspectable synthetic scenario. No live tenant actions and no customer data at any point.",
  },
  {
    category: "CUSTOMER STORIES",
    description:
      "No approved story record currently exists, so none is referenced. No outcome is copied or paraphrased into this brief.",
    secondaryDescription:
      "Stories appear here only as current approved story cards.",
  },
  {
    category: "EXECUTIVE RESOURCES",
    description:
      "Role paths, the ten-step business case framework and qualitative value guidance. The library is not duplicated inside this brief.",
  },
];

export default function AdoptionAndProofSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                CHAPTER 7 • ADOPTION AND PROOF
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Eight phases, with Shadow Mode holding no production authority
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Adoption is phased and reversible by design. The detailed model
              belongs to its own destination; this is the shape of it.
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADOPTION_CARDS.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between ${
                idx === 1 ? "bg-transparent" : "bg-white"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#64748B] uppercase block mb-4">
                  {card.category}
                </span>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {card.description}
                </p>
                {card.secondaryDescription && (
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-4">
                    {card.secondaryDescription}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
