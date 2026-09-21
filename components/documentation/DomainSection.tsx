import React from "react";

export default function DomainSection() {
  const domains = [
    {
      title: "Governance & Policy",
      articles: "32 ARTICLES",
    },
    {
      title: "Evidence & Audit",
      articles: "21 ARTICLES",
    },
    {
      title: "Finance & Tax",
      articles: "18 ARTICLES",
    },
    {
      title: "Workforce & Payroll",
      articles: "15 ARTICLES",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            03 / BY DOMAIN
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-10">
          Browse documentation by product or domain
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#0F476A] border-t-[3px] flex flex-col"
            >
              {/* Domain Title */}
              <h3 className="text-[#111827] font-semibold text-[15px] leading-snug tracking-tight">
                {domain.title}
              </h3>

              {/* Articles Count */}
              <p className="text-[#6B7280] text-[13px] font-medium tracking-wider uppercase mt-1">
                {domain.articles}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
