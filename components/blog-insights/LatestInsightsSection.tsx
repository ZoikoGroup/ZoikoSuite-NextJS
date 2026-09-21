import React from "react";

export default function LatestInsightsSection() {
  const items = [
    {
      category: "GOVERNANCE & POLICY",
      title: "Why scope belongs in the policy record, not a footnote",
      description:
        "Applicability decisions quietly determine whether governance holds.",
      meta: "Updated Sep 6, 2026 · ~5 min read",
      isGoldBorder: false,
    },
    {
      category: "EVIDENCE & AUDIT",
      title: "The difference between a policy and a control",
      description:
        "A published rule and an operating control are not the same proof.",
      meta: "Updated Sep 3, 2026 · ~4 min read",
      isGoldBorder: true,
    },
    {
      category: "COMPLIANCE & RISK",
      title: "Reading an exception register like an auditor would",
      description:
        "What a well-governed exception record actually needs to show.",
      meta: "Published Aug 29, 2026 · ~6 min read",
      isGoldBorder: false,
    },
    {
      category: "RESPONSIBLE AI",
      title: "Human oversight is a workflow decision, not a slogan",
      description:
        "Turning an AI governance principle into an actual approval step.",
      meta: "Published Aug 21, 2026 · ~5 min read",
      isGoldBorder: false,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            03 / DISCOVERY
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-10">
          Latest insights
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

                {/* Description */}
                <p className="text-[#4B5563] text-[13px] leading-relaxed mb-6">
                  {item.description}
                </p>
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
