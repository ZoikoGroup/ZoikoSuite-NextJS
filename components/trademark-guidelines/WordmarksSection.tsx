import React from "react";

const WORDMARK_RULES = [
  {
    rule: "Exact spelling",
    guidance:
      "Render product names from the Brand Registry — do not pluralize, hyphenate, abbreviate, or alter capitalization unless an approved form exists.",
  },
  {
    rule: "Identifier, not ownership",
    guidance:
      "A third party should not make ZoikoSuite appear to be its own company, product, publisher, or service source.",
  },
  {
    rule: "No derivative names",
    guidance:
      'Names such as "ZoikoSuite Official Partner Cloud" require explicit program/brand approval.',
  },
  {
    rule: "Compatibility references",
    guidance:
      "Where truthful and legally permitted, use only enough of the mark to identify compatibility — no endorsement language.",
  },
];

export default function WordmarksSection() {
  return (
    <section className="w-full bg-[#F6F1E6] py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          WORDMARKS, PRODUCT NAMES & WRITTEN REFERENCES
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-7">
          Accurate spelling, no derivative names implying affiliation
        </h2>

        {/* Clean Rowtable (Responsive on mobile) */}
        <div className="w-full border-t border-[#DCD6C8]">
          {/* Header Row (Desktop/Tablet) */}
          <div className="hidden sm:flex items-center gap-5 py-3.5 border-b border-[#DCD6C8]">
            <div className="w-[210px] shrink-0 font-sans font-bold text-[12.5px] leading-[20px] text-[#4B5872] uppercase tracking-[0.0528em]">
              RULE
            </div>
            <div className="flex-1 font-sans font-bold text-[12.5px] leading-[20px] text-[#4B5872] uppercase tracking-[0.0528em]">
              PUBLIC GUIDANCE
            </div>
          </div>

          {/* Data Rows */}
          {WORDMARK_RULES.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-5 py-3 sm:py-4 border-b border-[#DCD6C8]"
            >
              <div className="w-full sm:w-[210px] shrink-0 font-sans font-bold text-[12.5px] leading-[20px] text-[#16223A]">
                {item.rule}
              </div>
              <div className="flex-1 font-sans font-normal text-[12px] sm:text-[12.5px] leading-[19px] sm:leading-[20px] text-[#16223A] max-w-[740px]">
                {item.guidance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
