import React from "react";

export default function TaskAndTypeSection() {
  const items = [
    {
      category: "GUIDE",
      title: "Getting started with governed workflow configuration",
      meta: "GOVERNANCE & POLICY · UPDATED SEP 2",
    },
    {
      category: "HOW-TO",
      title: "Configuring approval matrices by policy class",
      meta: "GOVERNANCE & POLICY · UPDATED SEP 8",
    },
    {
      category: "TROUBLESHOOTING",
      title: "Resolving delayed evidence exports",
      meta: "EVIDENCE & AUDIT · UPDATED SEP 3",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            04 / TASK & TYPE
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-10">
          Browse by task or content type
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
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
                <h3 className="text-[#111827] font-semibold text-[15px] leading-snug tracking-tight mb-6">
                  {item.title}
                </h3>
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
