import React from "react";

export default function EnterpriseDiligenceResourcesSection() {
  const cards = [
    {
      category: "EXECUTIVE SUITE · BOARDS · INVESTORS",
      title: "Executive Platform Brief",
      description:
        "Category, control model, and operating case in concise form.",
    },
    {
      category: "CFO · CIO · PROCUREMENT",
      title: "Why ZoikoSuite Is Not an ERP",
      description:
        "Where the governance layer sits relative to existing transaction systems.",
    },
    {
      category: "ARCHITECTURE · RISK · AUDIT",
      title: "Governance Architecture Brief",
      description:
        "Policy evaluation, authority resolution, governed execution path.",
    },
    {
      category: "CISO · PRIVACY · PROCUREMENT",
      title: "Security & Trust Brief",
      description:
        "Control objectives, claim status, deployment and residency model.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            ENTERPRISE DILIGENCE RESOURCES
          </span>

          {/* Main Headline (32px and bold) */}
          <h1 className="text-3xl md:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            The enterprise diligence path
          </h1>
        </div>

        {/* Cards Grid (2x2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <span className="text-[#A8843A] text-xs font-semibold tracking-wider uppercase block mb-3">
                  {card.category}
                </span>

                {/* Title */}
                <h3 className="text-[#0b1329] text-base md:text-lg font-semibold tracking-tight mb-3">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
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
