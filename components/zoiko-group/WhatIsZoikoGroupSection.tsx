import React from "react";

export default function WhatIsZoikoGroupSection() {
  const cards = [
    {
      title: "Operating model",
      description: "Independent businesses with shared standards where useful.",
    },
    {
      title: "Technology layer",
      description:
        "Zoiko Tech acts as a technology engine within the wider Group.",
    },
    {
      title: "Governance",
      description:
        "Group-level oversight themes include governance, risk, security, responsible AI, and corporate standards.",
    },
    {
      title: "Global footprint",
      description:
        "Group operates through verified teams and hubs across multiple markets.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            WHAT IS ZOIKO GROUP?
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            A technology-led operating group built around long-term company
            building.
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            Zoiko Group brings together operating businesses across technology,
            connectivity, financial services, healthcare, mobility, real estate,
            commerce, media, and global trade. Its public operating model
            combines independent business leadership with shared technology,
            governance, and capital discipline where shared capability creates
            leverage.
          </p>
        </div>

        {/* 2x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-center min-h-[160px] relative"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
