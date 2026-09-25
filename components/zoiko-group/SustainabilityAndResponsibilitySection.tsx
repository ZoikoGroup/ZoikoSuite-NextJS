import React from "react";

export default function SustainabilityAndResponsibilitySection() {
  const cards = [
    {
      title: "Sustainability & impact",
      description: "One paragraph of Group context; no invented metrics.",
    },
    {
      title: "Responsible AI",
      description: "Group policy context + product governance boundary.",
    },
    {
      title: "Accessibility & privacy",
      description: "Product-specific controls only — see Trust Center.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SUSTAINABILITY & RESPONSIBILITY
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Responsibility belongs in the operating model, not in a badge strip.
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            Zoiko Group publishes sustainability and impact commitments at the
            Group level. ZoikoSuite&apos;s product-specific environmental,
            accessibility, privacy, and responsible-AI claims remain governed by
            their relevant product sources.
          </p>
        </div>

        {/* 3-Column Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#E5E0D5] bg-white shadow-sm flex flex-col items-start justify-between min-h-[180px] relative"
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
