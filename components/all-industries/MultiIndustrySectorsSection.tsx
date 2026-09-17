"use client";

import React from "react";

interface SectorCard {
  eyebrow: string;
  description: string;
}

const CARDS: SectorCard[] = [
  {
    eyebrow: "DIVERSIFIED GROUPS",
    description:
      "A group operating across two or more of the nine sectors carries different obligations and authority models per entity. The organization-pattern view handles that better than any single industry page.",
  },
  {
    eyebrow: "SECTORS NOT LISTED",
    description:
      "The governance model is not sector-specific. If your sector is not among the nine, the operating challenge is usually the better entry point than the industry label.",
  },
  {
    eyebrow: "NO SECTOR CLAIM BY EXTENSION",
    description:
      "An unlisted sector is not implicitly covered. No capability, obligation coverage or regulatory applicability transfers from a published industry page to a sector that has none.",
  },
];

export default function MultiIndustrySectorsSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                MULTI-INDUSTRY AND OTHER SECTORS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              If none of the nine fits, that is a real answer
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Conglomerates span several sectors at once, and many organizations
              sit outside the current nine entirely. Neither is a poor fit for a
              governance layer — but neither is served by pretending a sector
              page covers them.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, index) => {
            const isLast = index === CARDS.length - 1;

            return (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-sm flex flex-col justify-between ${
                  isLast
                    ? "bg-[#F6EDD9] border border-[#E8D6AC]"
                    : "bg-white border border-[#E2E8F0]"
                }`}
              >
                <div>
                  {/* Card Eyebrow */}
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#785C1D] block mb-3">
                    {card.eyebrow}
                  </span>

                  {/* Description */}
                  <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
