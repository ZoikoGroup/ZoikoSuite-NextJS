import React from "react";

export default function RelatedRecentSection() {
  const items = [
    {
      category: "EXECUTIVE BRIEF",
      title: "Evaluating deployment models for regulated operations",
      description: "",
      meta: "Updated Aug 30, 2026",
      isGoldBorder: false,
    },
    {
      category: "CASE STUDIES",
      title: "Reducing audit prep time with evidence-linked workflows",
      description: "",
      meta: "Related resource",
      isGoldBorder: false,
    },
    {
      category: "DOCUMENTATION",
      title: "Configuring approval matrices by policy class",
      description: "",
      meta: "Related resource",
      isGoldBorder: false,
    },
    {
      category: "RESOURCE CENTER",
      title: "Continue browsing all Resources",
      description: "Broad discovery route",
      meta: "",
      isGoldBorder: true,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            09 / RELATED & RECENT
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-10">
          Related resources & recently updated
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-sm border flex flex-col justify-between ${
                item.isGoldBorder
                  ? "border-[#C29B38] border-t-4 border-t-[#C29B38]"
                  : "border-[#0F476A] border-t-4 border-t-[#0F476A]"
              }`}
            >
              <div>
                {/* Category */}
                <span className="text-[#C29B38] text-[11px] font-bold tracking-widest uppercase block mb-2">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-[#111827] font-semibold text-[15px] leading-snug tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Description if any */}
                {item.description && (
                  <p className="text-[#6B7280] text-[12px] leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Meta details if any */}
              {item.meta && (
                <div className="text-[#6B7280] text-[11px] font-medium tracking-wider mt-4">
                  {item.meta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
