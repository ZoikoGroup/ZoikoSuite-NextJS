import React from "react";

export default function LongTermValueCreationContextSection() {
  const cards = [
    {
      title: "Operating accountability",
      description:
        "Independent operating leadership with Group-level governance and capital discipline.",
    },
    {
      title: "Technology leverage",
      description:
        "Shared technology and research where shared capability creates leverage.",
    },
    {
      title: "Governance",
      description:
        "Risk, security, Responsible AI, capital allocation, and corporate standards overseen at the appropriate level.",
    },
    {
      title: "Portfolio discipline",
      description:
        "Businesses expected to stand on their own; integration only where it creates leverage.",
    },
    {
      title: "Long horizon",
      description:
        "Investment in technology and operating companies with a long-term orientation.",
    },
    {
      title: "Sustainability",
      description:
        "Long-term value considers social/environmental responsibility where published.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            LONG-TERM VALUE CREATION CONTEXT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            How the Group thinks about value — not an investment-return promise
          </h1>
        </div>

        {/* 3x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
