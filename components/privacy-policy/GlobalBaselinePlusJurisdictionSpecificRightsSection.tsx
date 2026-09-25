import React from "react";

export default function GlobalBaselinePlusJurisdictionSpecificRightsSection() {
  const cards = [
    {
      title: "California Privacy Notice",
      description:
        "CCPA/CPRA-specific categories, rights, sale/share status, sensitive PI treatment, and direct opt-out links.",
    },
    {
      title: "UK Privacy Notice",
      description:
        "UK GDPR / Data Protection Act controller/representative/DPO, legal bases, transfers, rights, ICO complaint path.",
    },
    {
      title: "EU Privacy Notice",
      description:
        "GDPR-specific controller/representative/DPO, legal bases, transfers, rights, supervisory authority route.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            REGIONAL PRIVACY NOTICES
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Global baseline + jurisdiction-specific rights
          </h1>
        </div>

        {/* 3-Column Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start relative"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
