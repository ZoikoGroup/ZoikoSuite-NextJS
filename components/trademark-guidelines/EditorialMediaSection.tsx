import React from "react";

const EDITORIAL_CARDS = [
  {
    title: "News reporting / commentary",
    description:
      'Accurate textual reference is permitted without requiring a misleading "approval" badge — ZoikoSuite does not imply it has reviewed or endorsed independent coverage.',
  },
  {
    title: "Reviews / rankings / comparisons",
    description:
      "Truthful identification is allowed; fake endorsement, deceptive logo prominence, or manipulated quotes are prohibited.",
  },
  {
    title: "Screenshots in reporting",
    description:
      "Current product screenshots only where rights/privacy/security conditions are met — sensitive customer data never appears.",
  },
];

export default function EditorialMediaSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          EDITORIAL, MEDIA, COMMENTARY & COMPARATIVE REFERENCES
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-6">
          Accurate reference is never a ban on legitimate criticism
        </h2>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mb-5 sm:mb-6">
          {EDITORIAL_CARDS.map((card, index) => (
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

        {/* Callout Box */}
        <div className="w-full bg-[#F6F1E6] border-l-[3px] border-l-[#A8843A] border-y border-r border-[#DCD6C8]/60 rounded-[4px] px-3.5 sm:px-[18px] py-3 sm:py-[14px]">
          <p className="font-sans text-[12px] sm:text-[12.5px] leading-[19px] sm:leading-[20px] text-[#4B5872]">
            Fair-reference safeguard: this page focuses on misleading source, ownership, affiliation, endorsement,
            alteration, and unauthorized commercial use — not on banning legitimate reference.
          </p>
        </div>
      </div>
    </section>
  );
}
