import React from "react";

export default function LeadershipReviewSection() {
  const items = [
    {
      number: "01",
      title: "Decision clarity",
      description: "States the question or decision frame before deep detail.",
    },
    {
      number: "02",
      title: "Source governance",
      description:
        "Claims, dates, scope, and downloadable versions come from governed records.",
    },
    {
      number: "03",
      title: "Executive usability",
      description:
        "Prioritizes summary, scannability, accessible reading, and stable current URLs.",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            02 / WHAT THIS PROVIDES
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-4">
          Concise material for informed leadership review
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
          Executive Briefs summarize a defined decision question, key
          considerations, approved evidence, and the next authoritative
          resources to review — never promotional claims presented as
          evidence.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Number Label */}
                <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
                  {item.number}
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
