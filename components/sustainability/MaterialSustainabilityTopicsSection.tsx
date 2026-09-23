import React from "react";

export default function MaterialSustainabilityTopicsSection() {
  const cards = [
    {
      title: "Responsible digital operations",
      description:
        "Efficient, governed, resilient software and deployment choices.",
      footer:
        "Architecture + operating evidence; quantitative efficiency only if measured.",
    },
    {
      title: "Responsible AI",
      description:
        "Human authority, provenance, evaluation, privacy, and audit boundaries.",
      footer: "Responsible AI controls + evidence.",
    },
    {
      title: "Accessibility & inclusion",
      description:
        "WCAG-oriented product and content accessibility; inclusive access.",
      footer: "Accessibility evidence and issue/remediation status.",
    },
    {
      title: "Trust, privacy & security",
      description: "Durable digital trust and data stewardship.",
      footer: "Trust architecture, controls, and claim status.",
    },
    {
      title: "Supplier & technology responsibility",
      description:
        "Clear boundaries for cloud, vendors, subprocessors, and partner dependencies.",
      footer: "Supplier registry, diligence status, responsibility map.",
    },
    {
      title: "People & social context",
      description:
        "Workforce, community, and inclusion context where authoritative corporate policies exist.",
      footer: "Zoiko Tech / Group source with explicit scope.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            MATERIAL SUSTAINABILITY TOPICS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Topics ZoikoSuite can credibly address
          </h1>
        </div>

        {/* 3x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col justify-between relative min-h-[220px]"
            >
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15.5pax] mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 text-gray-500 font-light italic text-[13.5px]">
                {card.footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
