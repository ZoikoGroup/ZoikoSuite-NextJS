import React from "react";

export default function FeaturedBriefsSection() {
  const items = [
    {
      category: "EXECUTIVE BRIEF",
      title: "Governed Business Operations Intelligence: an executive primer",
      description:
        "Connecting policy, execution, and evidence across finance, workforce, and legal operations.",
      meta: "Updated Aug 14, 2026 · Public",
      isGoldBorder: false,
    },
    {
      category: "EXECUTIVE BRIEF",
      title: "Evaluating deployment models for regulated operations",
      description:
        "A decision framework for multi-tenant, dedicated, and sovereign deployment choices.",
      meta: "Updated Aug 30, 2026 · Public",
      isGoldBorder: true,
    },
    {
      category: "EXECUTIVE BRIEF",
      title: 'What "policy-to-evidence" governance actually requires',
      description:
        "Separating governance intent from proof of control operation for leadership review.",
      meta: "Published Aug 2, 2026 · Registration required",
      isGoldBorder: false,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            03 / FEATURED
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-10">
          Featured executive briefs
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-sm border flex flex-col justify-between ${
                item.isGoldBorder ? "border-[#C29B38] border-t-4 border-t-[#C29B38]" : "border-[#0F476A] border-t-4 border-t-[#0F476A]"
              }`}
            >
              <div>
                {/* Category */}
                <span className="text-[#C29B38] text-[11px] font-bold tracking-widest uppercase block mb-2">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-[#111827] font-semibold text-[15px] sm:text-base leading-snug tracking-tight mb-2">
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
