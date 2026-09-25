import React from "react";

const AI_BRAND_CARDS = [
  {
    title: "AI-generated logos / variants",
    description:
      "Never publish synthetic/modified ZoikoSuite logos as authentic marks — only official assets qualify.",
  },
  {
    title: "AI-generated screenshots",
    description:
      "Must be labeled as illustrative if approved — never presented as current product proof.",
  },
  {
    title: "Automated marketing generation",
    description:
      "Generated materials still pass trademark, asset-version, relationship-status, and claim checks.",
  },
  {
    title: "Synthetic spokesperson / voice",
    description:
      "Must not imply an official ZoikoSuite representative or endorsement without explicit authorization.",
  },
];

export default function AiGeneratedBrandUseSection() {
  return (
    <section className="w-full bg-[#F6F1E6] py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          AI-GENERATED, SYNTHETIC & AUTOMATED BRAND USE
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] md:text-[26px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-6">
          Synthetic marks are never authentic marks
        </h2>

        {/* 2x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {AI_BRAND_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#DCD6C8] rounded-[8px] p-4 sm:p-[18px] flex flex-col justify-between shadow-xs hover:border-[#16223A]/30 transition-colors"
            >
              <h5 className="font-sans font-bold text-[13px] sm:text-[13.5px] leading-[20px] sm:leading-[21.6px] text-[#16223A] mb-1.5 sm:mb-2">
                {card.title}
              </h5>
              <p className="font-sans text-[11.5px] sm:text-[12px] leading-[18px] sm:leading-[19.2px] text-[#4B5872]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
