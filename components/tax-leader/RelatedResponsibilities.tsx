import React from "react";
import Image from "next/image";

interface RelatedCard {
  title: string;
  description: string;
  imageSrc: string;
}

const relatedData: RelatedCard[] = [
  {
    title: "Tax Ladder",
    description: "Tax-specific responsibility, ownership, review, exceptions, and evidence concepts.",
    imageSrc: "/tax/8.png",
  },
  {
    title: "Controller",
    description: "Financial reconciliation and internal controls; general ledger and close remain separate.",
    imageSrc: "/tax/7.png",
  },
  {
    title: "Compliance Ladder",
    description: "Broader enterprise compliance governance; shared contracts require Product approval.",
    imageSrc: "/tax/9.png",
  },
  {
    title: "CIO / CHRO / COO",
    description: "System lineage, lawful workforce context, and operating-process responsibilities.",
    imageSrc: "/tax/10.png",
  },
  {
    title: "Audit Committee / Board",
    description: "Authorized evidence questions and aggregate oversight, without routine task assignment.",
    imageSrc: "/tax/11.png",
  },
  {
    title: "Defining Properties",
    description: "Map responsibilities to approved defining properties only after taxonomy validation.",
    imageSrc: "/tax/12.png",
  },
];

export default function RelatedResponsibilities() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            RELATED RESPONSIBILITIES
          </p>
          <h2 className="text-[#1E293B] text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.15]">
            One responsibility, one authoritative owner.
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed font-normal">
            Keep tax responsibility distinct from financial controls, enterprise compliance, systems administration, and executive oversight.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-48 bg-[#F1F5F9]">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#1E293B] text-lg font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}