"use client";

import React from "react";

interface IntelligenceCard {
  title: string;
  description: string;
}

const intelligenceCards: IntelligenceCard[] = [
  {
    title: "Human authority",
    description:
      "Reviewer or approver boundary shown wherever a decision requires human ownership.",
  },
  {
    title: "Source visibility",
    description:
      "Inspectable sources for claims or summaries where supported; no fabricated citations.",
  },
  {
    title: "Permission boundary",
    description: "AI cannot reveal content a user could not otherwise access.",
  },
];

export default function GovernedIntelligenceSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-4 h-[1px]"
              style={{ backgroundColor: "#57408A" }}
            ></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase font-mono"
              style={{ color: "#57408A" }}
            >
              GOVERNED INTELLIGENCE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-6">
            Use intelligent assistance without losing source, scope, or human
            authority.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed">
            Where ZoikoSuite uses AI-assisted or automated capabilities, outputs
            remain bounded by permissions, policy, source visibility, and human
            review. AI is not positioned as an autonomous legal, financial,
            compliance, or management decision-maker.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {intelligenceCards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#57408A]"
            >
              <div>
                <h3 className="text-base font-bold text-[#08222F] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed font-mono">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
