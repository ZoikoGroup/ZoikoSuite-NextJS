import React from "react";

const LOGO_SPECIFICATIONS = [
  {
    requirement: "Asset source",
    specification:
      "Only files issued by the approved Brand Asset Library — never recreate a logo from screenshots or search results.",
  },
  {
    requirement: "Clear space / minimum size",
    specification:
      "Asset-specific and channel-specific, from the Brand Asset record — no numeric value is published if none exists.",
  },
  {
    requirement: "Alteration",
    specification:
      "No recoloring, distortion, rotation, cropping, outline effects, shadows, animation, or component rearrangement unless an approved variant explicitly permits it.",
  },
  {
    requirement: "Lockups",
    specification:
      "Company/product/partner lockups must be supplied as approved assets — designers may not assemble them ad hoc.",
  },
];

export default function LogosVisualMarksSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          LOGOS, ICONS & VISUAL MARKS
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-7">
          Only approved assets — never recreated from a screenshot
        </h2>

        {/* Clean Rowtable (Responsive on mobile) */}
        <div className="w-full border-t border-[#DCD6C8]">
          {/* Header Row (Desktop/Tablet) */}
          <div className="hidden sm:flex items-center gap-5 py-3.5 border-b border-[#DCD6C8]">
            <div className="w-[210px] shrink-0 font-sans font-bold text-[12.5px] leading-[20px] text-[#4B5872] uppercase tracking-[0.0528em]">
              REQUIREMENT
            </div>
            <div className="flex-1 font-sans font-bold text-[12.5px] leading-[20px] text-[#4B5872] uppercase tracking-[0.0528em]">
              SPECIFICATION
            </div>
          </div>

          {/* Data Rows */}
          {LOGO_SPECIFICATIONS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-5 py-3 sm:py-4 border-b border-[#DCD6C8]"
            >
              <div className="w-full sm:w-[210px] shrink-0 font-sans font-bold text-[12.5px] leading-[20px] text-[#16223A]">
                {item.requirement}
              </div>
              <div className="flex-1 font-sans font-normal text-[12px] sm:text-[12.5px] leading-[19px] sm:leading-[20px] text-[#16223A] max-w-[740px]">
                {item.specification}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
