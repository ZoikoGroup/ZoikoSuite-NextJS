import React from "react";

export default function ContinuityAndSuccessionSection() {
  const cards = [
    {
      title: "Role-based accountability",
      description:
        "Critical responsibilities are attached to functions and governance, not personal charisma.",
    },
    {
      title: "Documented decision lineage",
      description:
        "Material decisions and approvals are preserved through evidence and governance systems.",
    },
    {
      title: "Delegation & escalation",
      description:
        "High-impact decisions use defined authority and escalation paths.",
    },
    {
      title: "Leadership transitions",
      description:
        "Profiles can be archived/superseded while responsibility remains visible through role continuity.",
    },
    {
      title: "Operating cadence",
      description:
        "Cross-functional executive forums review risk, delivery, customer outcomes, and strategic priorities.",
    },
    {
      title: "Succession discipline",
      description:
        "Leadership continuity and succession are managed as institutional responsibilities; confidential details remain non-public.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            CONTINUITY & SUCCESSION
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[38px] lg:text-[46px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Built to outlast any individual role.
          </h1>
        </div>

        {/* 3x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
