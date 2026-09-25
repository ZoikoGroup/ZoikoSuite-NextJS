import React from "react";

export default function ResearchAndFrontiersSection() {
  const cards = [
    {
      title: "Zoiko Research",
      description:
        "Research, benchmarks, datasets, collaboration, technical output — cross-linked as institutional context, never cited as a ZoikoSuite feature unless adopted into product.",
    },
    {
      title: "Frontier Labs",
      description:
        'Exploration, prototyping, design-partner evidence, future control points — labeled "exploration" or "prototype," never "available" unless the product source confirms it.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            RESEARCH & FRONTIERS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Research stays separate from current product claims
          </h1>
        </div>

        {/* 2-Column Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-between min-h-[180px] relative"
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
