import React from "react";

export default function RelatedInsightsSection() {
  const items = [
    {
      category: "EVIDENCE & AUDIT",
      title: "The difference between a policy and a control",
      meta: "Updated Sep 3, 2026",
      isGoldBorder: false,
    },
    {
      category: "COMPLIANCE & RISK",
      title: "Reading an exception register like an auditor would",
      meta: "Published Aug 29, 2026",
      isGoldBorder: false,
    },
    {
      category: "CASE STUDIES",
      title: "Reducing audit prep time with evidence-linked workflows",
      meta: "Related resource",
      isGoldBorder: true,
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            08 / RELATED
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-10">
          Related insights
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
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
                <h3 className="text-[#111827] font-semibold text-[15px] sm:text-base leading-snug tracking-tight mb-4">
                  {item.title}
                </h3>
              </div>

              {/* Meta details */}
              <div className="text-[#6B7280] text-[11px] font-medium tracking-wider">
                {item.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
