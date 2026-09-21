import React from "react";

export default function PracticalGuidanceSection() {
  const items = [
    {
      category: "IMPLEMENTATION",
      title: "Documentation",
      action: "Open Documentation →",
    },
    {
      category: "PRACTICAL",
      title: "Knowledge Base",
      action: "Browse Knowledge Base →",
    },
    {
      category: "ENABLEMENT",
      title: "Training Academy",
      action: "Visit Training Academy →",
    },
    {
      category: "EVIDENCE",
      title: "Case Studies",
      action: "View Case Studies →",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            05 / PRACTICAL GUIDANCE
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-3">
          Turn the idea into implementation
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
          Related resources are a task-completion layer, not a cross-sell
          carousel — each handoff maps to a documented relation.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Category */}
                <span className="text-[#C29B38] text-[11px] font-bold tracking-widest uppercase block mb-3">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-[#111827] font-semibold text-lg leading-snug tracking-tight mb-6">
                  {item.title}
                </h3>
              </div>

              {/* Action Link */}
              <a
                href="#"
                className="text-[#0F476A] hover:text-[#C29B38] text-xs font-semibold tracking-wider transition-colors inline-flex items-center gap-1"
              >
                {item.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
