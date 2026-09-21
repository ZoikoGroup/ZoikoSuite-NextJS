import React from "react";

export default function AllDocumentationSection() {
  const items = [
    {
      category: "REFERENCE",
      title: "Policy object model field reference",
      description:
        "Every field in the policy record, with type and governance rule.",
      meta: "GOVERNANCE & POLICY · UPDATED AUG 30",
    },
    {
      category: "CONCEPT",
      title: "How scope and applicability interact",
      description:
        "Understanding why a policy can be approved but not universally applicable.",
      meta: "GOVERNANCE & POLICY · UPDATED AUG 24",
    },
    {
      category: "HOW-TO",
      title: "Requesting a policy exception",
      description:
        "Step-by-step: scope, risk review, approval, compensating controls, expiry.",
      meta: "GOVERNANCE & POLICY · UPDATED SEP 5",
    },
    {
      category: "CHANGE NOTICE",
      title: "Evidence manifest export format update",
      description:
        "What changed in the manifest export schema and how to adapt.",
      meta: "EVIDENCE & AUDIT · UPDATED SEP 9",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            05 / LIBRARY
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-10">
          All documentation
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#0F476A] border-t-[3px] flex flex-col justify-between"
            >
              <div>
                {/* Category */}
                <span className="text-[#6B7280] text-[11px] font-bold tracking-widest uppercase block mb-2">
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
              <div className="text-[#6B7280] text-[11px] font-medium tracking-wider uppercase">
                {item.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
