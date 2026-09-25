import React from "react";

export default function TrademarkHeroSection() {
  return (
    <section className="w-full bg-[#FBFAF7] pt-12 pb-8 sm:pt-20 sm:pb-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2.5 sm:mb-3">
          TRADEMARK GUIDELINES
        </p>

        {/* Headline */}
        <h1 className="font-serif font-bold text-[#16223A] text-[24px] sm:text-[30px] md:text-[36px] leading-[1.3] tracking-[-0.01em] max-w-[920px] mb-3 sm:mb-4">
          Use ZoikoSuite marks accurately, clearly, and with permission where required.
        </h1>

        {/* Subtitle */}
        <div className="max-w-[720px]">
          <p className="font-sans text-[#4B5872] text-[13.5px] sm:text-[14.5px] leading-[22px] sm:leading-[23.2px]">
            Guidance for customers, partners, media, developers, and other third parties on referring to ZoikoSuite and
            using approved brand assets without creating confusion about ownership, endorsement, affiliation, or source.
          </p>
        </div>
      </div>
    </section>
  );
}
