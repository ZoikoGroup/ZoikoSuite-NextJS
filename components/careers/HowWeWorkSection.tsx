import React from "react";

const principles = [
  {
    title: "Govern before execution",
    lines: [
      "Material actions should have authority, policy,",
      "context, and evidence \u2014 not just workflow speed.",
    ],
  },
  {
    title: "Evidence over assertion",
    lines: [
      "Important claims, controls, and decisions should",
      "be explainable and reviewable.",
    ],
  },
  {
    title: "Human accountability with AI assistance",
    lines: [
      "AI can assist with analysis and workflow but does",
      "not erase accountable human ownership.",
    ],
  },
  {
    title: "Domain + engineering together",
    lines: [
      "Complex business systems require strong",
      "technical execution and real operating expertise.",
    ],
  },
  {
    title: "Progressive deployment",
    lines: [
      "Enterprise change should support staged",
      "adoption, migration, and controlled rollout.",
    ],
  },
  {
    title: "Clear ownership",
    lines: [
      "Teams should know who decides, who reviews,",
      "and who operates.",
    ],
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-10">
          <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            HOW WE WORK
          </span>

          <h2 className="text-3xl md:text-[36px] font-serif font-bold text-[#16223A] leading-tight tracking-tight max-w-3xl">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              High-accountability work needs clear operating
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              principles.
            </span>
          </h2>
        </div>

        {/* Principles Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="w-full p-6 sm:p-7 border border-[#DCD6C8] bg-white rounded-xl flex flex-col items-start justify-start hover:shadow-xs transition-shadow"
            >
              <h3 className="text-[#16223A] text-sm md:text-base font-bold leading-6 mb-2">
                {principle.title}
              </h3>
              <p className="text-[#4B5872] text-xs md:text-sm font-normal leading-5">
                {principle.lines.map((line, idx) => (
                  <span key={idx} className="block whitespace-normal lg:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
