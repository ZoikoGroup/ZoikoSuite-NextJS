"use client";

import React from "react";

interface ResourceCard {
  eyebrow: string;
  title: string;
  description: string;
}

const resourceCards: ResourceCard[] = [
  {
    eyebrow: "ARCHITECTURE BRIEF",
    title: "System boundaries & data flow",
    description:
      "Identity, integration, evidence, and deployment — preferably ungated for enterprise diligence.",
  },
  {
    eyebrow: "TRUST / SECURITY BRIEF",
    title: "Control objectives & claim status",
    description:
      "Residency/deployment scope — never gated behind a sales form.",
  },
  {
    eyebrow: "CASE STUDY",
    title: "Verified customer proof",
    description:
      "Challenge, deployment scope, evidence, and verified outcome — published only with authorization.",
  },
  {
    eyebrow: "DOCUMENTATION",
    title: "Implementation & coverage docs",
    description:
      "Existing-customer authentication may be required; access requirements clearly labeled.",
  },
];

export default function IndustryResourcesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-8">
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
              INDUSTRY RESOURCES
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15]">
            Self-directed diligence material, by type.
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourceCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all hover:border-[#08222F]"
            >
              <div>
                {/* Card Eyebrow */}
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#08222F] uppercase mb-3 block">
                  {card.eyebrow}
                </span>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#08222F] mb-4">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-mono">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
