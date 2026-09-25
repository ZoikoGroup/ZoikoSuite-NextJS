import React from "react";

export default function ReportsAndResourcesSection() {
  const cards = [
    {
      title: "Sustainability overview / methodology",
      description: "Public if approved; versioned with effective date.",
    },
    {
      title: "ZoikoGroup sustainability report",
      description: "External authoritative link, labeled as Group-level.",
    },
    {
      title: "Historical reports",
      description:
        "Archived with a superseded label — never silently replaced.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            REPORTS & RESOURCES
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Versioned, dated, and never silently replaced
          </h1>
        </div>

        {/* 3-Column Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start relative"
            >
              <h3 className="text-base font-semibold tracking-tight text-[#0b1329] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
