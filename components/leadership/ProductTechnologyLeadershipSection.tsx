import React from "react";

export default function ProductTechnologyLeadershipSection() {
  const cards = [
    {
      title: "Platform & Product",
      description:
        "Ownership of category definition, product strategy, roadmap discipline, domain coherence, and customer problem framing.",
    },
    {
      title: "Architecture & Engineering",
      description:
        "Ownership of architecture, reliability, service boundaries, technical standards, and delivery quality.",
    },
    {
      title: "Data & Intelligence",
      description:
        "Ownership of governed intelligence, data quality, provenance, evaluation, and source-truth protection.",
    },
    {
      title: "Developer ecosystem",
      description:
        "Where applicable: accountability for APIs, integrations, tooling, and partner/developer experience.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            PRODUCT & TECHNOLOGY LEADERSHIP
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Platform direction and technical execution, accountably owned
          </h1>
        </div>

        {/* 2x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-center min-h-[180px] relative"
            >
              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#0b1329] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
