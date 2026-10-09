import React from "react";

interface PropertyCard {
  propertyNumber: string;
  title: string;
  description: string;
}

export default function GovernedOperationsPropertiesSection() {
  const cards: PropertyCard[] = [
    {
      propertyNumber: "PROPERTY 01",
      title: "Accountable ownership",
      description:
        "Show who initiates, reviews, approves and owns exceptions, so responsibility is legible before work begins.",
    },
    {
      propertyNumber: "PROPERTY 02",
      title: "Policy-bound decisions",
      description:
        "Explain how policy may constrain requests, approvals and outcomes, with a named reference and approver for each decision.",
    },
    {
      propertyNumber: "PROPERTY 03",
      title: "Controlled handoffs",
      description:
        "Make transitions between teams or systems explicit, with a named source, recipient and acknowledgment.",
    },
    {
      propertyNumber: "PROPERTY 04",
      title: "Evidence and traceability",
      description:
        "Explain how buyers can evaluate records, decisions and changes, from record ID to retention owner.",
    },
    {
      propertyNumber: "PROPERTY 05",
      title: "Exception transparency",
      description:
        "Clarify how blocked, overdue or mismatched cases may be surfaced, owned and resolved with a recorded reason.",
    },
    {
      propertyNumber: "PROPERTY 06",
      title: "Management oversight",
      description:
        "Distinguish executive visibility from operational ownership, including coverage, exposure, unresolved items and review cadence.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-12 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            What defines governed operations?
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg">
            Six review lenses organize this explanation; definitive names
            require approval.
          </p>
        </div>

        {/* Cards Grid: 3 columns, 2 rows */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-black/5 p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                <span className="text-xs font-bold text-[#B49347] tracking-wider mb-3 block">
                  {card.propertyNumber}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F2421] tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
