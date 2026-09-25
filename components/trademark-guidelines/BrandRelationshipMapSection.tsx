import React from "react";

export default function BrandRelationshipMapSection() {
  return (
    <section className="w-full bg-[#F6F1E6] py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          BRAND RELATIONSHIP MAP
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-2">
          Context, not an ownership map
        </h2>

        {/* Description */}
        <p className="font-sans text-[#4B5872] text-[13px] sm:text-[13.5px] leading-[20px] sm:leading-[21.6px] max-w-[700px] mb-6 sm:mb-8">
          This diagram helps visitors understand the public relationship among brands — it never implies that one entity
          owns every mark or guarantees another entity&apos;s obligations.
        </p>

        {/* Relationship Diagram */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Box 1: ZoikoSuite */}
          <div className="w-full md:flex-1 bg-white border border-[#DCD6C8] rounded-[8px] p-5 sm:p-[22px] pt-7 sm:pt-[36px] pb-6 sm:pb-[28px] text-center shadow-xs">
            <h5 className="font-sans font-bold text-[13.3px] leading-[21.25px] text-[#16223A] mb-1.5 sm:mb-2">
              ZoikoSuite
            </h5>
            <p className="font-sans text-[12px] leading-[19.2px] text-[#4B5872] max-w-[280px] mx-auto">
              Platform / product brand publicly presented on zoikosuite.com.
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="text-[#16223A] text-[16px] sm:text-[18px] font-sans px-2 select-none rotate-90 md:rotate-0 my-0.5 md:my-0">
            ↔
          </div>

          {/* Box 2: Zoiko Tech */}
          <div className="w-full md:flex-1 bg-[#0E2843] border border-[#DCD6C8] rounded-[8px] p-5 sm:p-[22px] pt-7 sm:pt-[36px] pb-6 sm:pb-[28px] text-center shadow-xs">
            <h5 className="font-sans font-bold text-[13.3px] leading-[21.25px] text-white mb-1.5 sm:mb-2">
              Zoiko Tech
            </h5>
            <p className="font-sans text-[12px] leading-[19.2px] text-[#C7D2E2] max-w-[280px] mx-auto">
              Publicly described as the platform context/operator relationship.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="text-[#16223A] text-[16px] sm:text-[18px] font-sans px-2 select-none rotate-90 md:rotate-0 my-0.5 md:my-0">
            ↔
          </div>

          {/* Box 3: Zoiko Group */}
          <div className="w-full md:flex-1 bg-white border border-[#DCD6C8] rounded-[8px] p-5 sm:p-[22px] pt-7 sm:pt-[36px] pb-6 sm:pb-[28px] text-center shadow-xs">
            <h5 className="font-sans font-bold text-[13.3px] leading-[21.25px] text-[#16223A] mb-1.5 sm:mb-2">
              Zoiko Group
            </h5>
            <p className="font-sans text-[12px] leading-[19.2px] text-[#4B5872] max-w-[280px] mx-auto">
              Publicly described as the wider Group relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
