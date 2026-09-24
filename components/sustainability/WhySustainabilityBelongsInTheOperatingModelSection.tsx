import React from "react";

export default function WhySustainabilityBelongsInTheOperatingModelSection() {
  const cards = [
    {
      title: "Accountability",
      description:
        "Assign an owner, approver, entity, jurisdiction, and review cycle.",
    },
    {
      title: "Evidence",
      description:
        "Link source records, documents, decisions, and methodology to a published statement.",
    },
    {
      title: "Status",
      description:
        "Distinguish measured, targeted, policy-driven, planned, and not-yet-measured states.",
    },
    {
      title: "Change control",
      description:
        "Preserve history when a target, baseline, methodology, or statement changes.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            WHY SUSTAINABILITY BELONGS IN THE OPERATING MODEL
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Sustainability is stronger when the operating evidence already
            exists.
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            ZoikoSuite&apos;s governance model can support structured ownership,
            approvals, evidence, effective dates, and reporting context around
            sustainability-related operations — where the relevant data and
            workflows are actually implemented.
          </p>
        </div>

        {/* Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start relative"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-3">
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
