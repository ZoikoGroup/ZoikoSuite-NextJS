import React from "react";

export default function HowZoikoGroupWorksSection() {
  const cards = [
    {
      title: "Scale",
      description:
        "Grow proven platforms into recognized businesses. ZoikoSuite may benefit from long-horizon company-building context — never implied as a growth guarantee.",
    },
    {
      title: "Integrate",
      description:
        "Reuse shared intelligence, infrastructure, and trust capabilities where appropriate — only where technically and contractually applicable; data and service boundaries preserved.",
    },
    {
      title: "Invent",
      description:
        "Research future control points and productize selectively. Research, prototypes, and roadmaps stay clearly separate from available ZoikoSuite product capability.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            HOW ZOIKO GROUP WORKS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Centralize what creates leverage. Keep operating accountability
            clear.
          </h1>
        </div>

        {/* 3-Column Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-center min-h-[220px] relative"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-[16px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
