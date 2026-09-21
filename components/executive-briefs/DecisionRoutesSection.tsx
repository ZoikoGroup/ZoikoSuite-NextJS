import React from "react";

export default function DecisionRoutesSection() {
  const items = [
    {
      title: "Evaluate platform / solution fit",
      count: "7 briefs",
    },
    {
      title: "Assess governance / risk",
      count: "5 briefs",
    },
    {
      title: "Plan implementation / change",
      count: "4 briefs",
    },
    {
      title: "Prepare procurement / leadership review",
      count: "3 briefs",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            04 / DECISION ROUTES
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-3">
          Start with the decision
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
          Navigation archetypes, not guaranteed content categories — each route
          renders only when the approved taxonomy maps at least one eligible
          brief.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 border-l-[4px] border-l-[#0F476A] gap-2 flex flex-col"
            >
              <div>
                {/* Title */}
                <h3 className="text-[#111827] font-semibold text-[15px] sm:text-base leading-snug tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Count details */}
              <div className="text-[#6B7280] text-[11px] font-medium tracking-wider uppercase">
                {item.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
