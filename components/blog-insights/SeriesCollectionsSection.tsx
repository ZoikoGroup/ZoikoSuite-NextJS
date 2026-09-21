import React from "react";

export default function SeriesCollectionsSection() {
  const items = [
    {
      category: "SERIES · 4 ARTICLES",
      title: "From policy to evidence: a governance reading path",
      description:
        "A four-part series connecting policy authorship, control mapping, evidence generation, and audit-ready reporting.",
    },
    {
      category: "SERIES · 3 ARTICLES",
      title: "Operating across borders without losing control",
      description:
        "A practical series on jurisdiction-aware scope, deployment models, and cross-entity governance.",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            04 / SERIES
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-3">
          Series & collections
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
          Coherent multi-article learning paths, ordered by editorial registry —
          not an algorithm.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 border-l-[4px] border-l-[#C29B38] flex flex-col justify-between"
            >
              <div>
                {/* Category */}
                <span className="text-[#C29B38] text-[11px] font-bold tracking-widest uppercase block mb-2">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-[#111827] font-semibold text-lg leading-snug tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
