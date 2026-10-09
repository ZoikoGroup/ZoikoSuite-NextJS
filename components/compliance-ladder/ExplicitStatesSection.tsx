import React from "react";

interface StateCard {
  number: string;
  title: string;
  description: string;
}

export default function ExplicitStatesSection() {
  const cards: StateCard[] = [
    {
      number: "01",
      title: "Not assessed / In review",
      description:
        "Neutral task/review status, no certification implication.",
    },
    {
      number: "02",
      title: "Awaiting owner / Action required",
      description: "Responsible next step, not regulatory conclusion.",
    },
    {
      number: "03",
      title: "Stale / Source unavailable",
      description:
        "Date/version warning; no current or compliant fallback.",
    },
    {
      number: "04",
      title: "Restricted / Out of scope",
      description:
        "Minimum disclosure and source-approved rationale; no hidden record leakage.",
    },
  ];

  return (
    <section className="w-full bg-[#F6F5F1] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          EXPLICIT STATES
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-12">
          Unknown stays unknown.
        </h2>

        {/* Cards Grid: 3 columns on desktop, 4th card wraps nicely */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-black/5 p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                <span className="text-xs font-bold text-[#B49347] tracking-wider mb-3 block">
                  {card.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F2421] tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
