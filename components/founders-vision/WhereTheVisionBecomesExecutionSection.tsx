import React from "react";

export default function WhereTheVisionBecomesExecutionSection() {
  const cards = [
    {
      title: "Meet the people accountable for execution.",
      description:
        "See the leaders responsible for product, operations, governance, technology, trust, and enterprise delivery.",
    },
    {
      title: "Build with aligned institutions and ecosystems.",
      description:
        "Understand how ZoikoSuite approaches strategic, technology, implementation, and ecosystem partnerships.",
    },
    {
      title: "Build systems that matter.",
      description:
        "Join teams working on governed infrastructure for complex, multi-entity and cross-border operations.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            CONTINUE THE COMPANY STORY
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Where the vision becomes execution
          </h1>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-2xl p-8 shadow-sm flex flex-col items-start border border-gray-200/60"
            >
              {/* Title */}
              <h3 className="text-[#0b1329] text-base md:text-lg font-semibold tracking-tight mb-3">
                {card.title}
              </h3>

              {/* Description */}
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
