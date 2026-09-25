import React from "react";

const DEVELOPER_CARDS = [
  {
    title: "App / connector name",
    description:
      "Prefer third-party brand first, then an accurate compatibility descriptor from the approved pattern library.",
  },
  {
    title: "Marketplace listing",
    description:
      "Publisher identity must be clear — ZoikoSuite cannot be presented as the publisher unless it is.",
  },
  {
    title: "Deprecated integration",
    description:
      "Badge/status updates when integration certification or functionality is withdrawn.",
  },
];

export default function DeveloperIntegrationNamingSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          DEVELOPER, API, APP & INTEGRATION NAMING
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] md:text-[26px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-6">
          Third-party brand first, then an accurate compatibility descriptor
        </h2>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {DEVELOPER_CARDS.map((card, index) => (
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
