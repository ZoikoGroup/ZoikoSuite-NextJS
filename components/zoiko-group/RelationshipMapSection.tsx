import React from "react";

export default function RelationshipMapSection() {
  const rows = [
    {
      level: "L1",
      name: "ZoikoSuite",
      description:
        "Governed Business Operations Intelligence platform; product, Trust, sales, support, and customer-facing experience.",
      note: "Not presented as a separate parent company unless verified legal structure says so.",
    },
    {
      level: "L2",
      name: "Zoiko Tech",
      description:
        "Technology company / platform developer and operator context for ZoikoSuite.",
      note: "Not implied that every Zoiko Tech product shares ZoikoSuite data or infrastructure.",
    },
    {
      level: "L3",
      name: "Zoiko Group",
      description:
        "Parent-group institutional context, governance, portfolio, capital, and long-term operating model.",
      note: "Not implied: automatic parent guarantee, shared liability, or product support.",
    },
    {
      level: "L4",
      name: "Other Group businesses",
      description:
        "Contextual portfolio of independently accountable operating businesses.",
      note: "Not implied: bundle, integration, shared customer account, or common data plane.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            RELATIONSHIP MAP
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            One platform. Clear institutional context.
          </h1>

          {/* Subheading / Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            ZoikoSuite sits within a defined corporate and operating structure —
            product brand, technology operator, parent group, and other group
            businesses are always distinguished, never inferred.
          </p>
        </div>

        {/* Rows List Section */}
        <div className="w-full flex flex-col border-t border-[#E5E0D5]">
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-[#E5E0D5] flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6"
            >
              {/* Level Tag & Name */}
              <div className="w-full md:w-3/12 flex items-baseline gap-4 pr-2">
                <span className="text-[#A8843A] font-serif font-bold text-lg min-w-[28px]">
                  {row.level}
                </span>
                <span className="text-[#0b1329] font-semibold text-base tracking-tight">
                  {row.name}
                </span>
              </div>

              {/* Description */}
              <div className="w-full md:w-5/12 text-gray-600 font-light leading-relaxed text-[15.5px] pr-4">
                {row.description}
              </div>

              {/* Italic Note */}
              <div className="w-full md:w-4/12 text-gray-500 font-light italic leading-relaxed text-[14.5px]">
                {row.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
