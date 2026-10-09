import React from "react";
import Image from "next/image";

interface GovernanceCard {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export default function GovernanceProgressionCards() {
  const steps = [
    {
      number: "01",
      title: "Define Scope & Applicability",
    },
    {
      number: "02",
      title: "Assign Owners & Accountability",
    },
    {
      number: "03",
      title: "Review Controls & Policies",
    },
    {
      number: "04",
      title: "Manage Exceptions & Remediation",
    },
    {
      number: "05",
      title: "Preserve Evidence & Review History",
    },
    {
      number: "06",
      title: "Report Oversight & Escalation",
    },
  ];

  const cards: GovernanceCard[] = [
    {
      number: "01",
      title: "Understand the scope",
      description:
        "Source version, entity and jurisdiction before interpreting applicability.",
      imageSrc: "/comp/c3.png",
    },
    {
      number: "02",
      title: "Coordinate accountability",
      description:
        "Owners and reviewers remain separate, with clear next actions.",
      imageSrc: "/comp/c4.png",
    },
    {
      number: "03",
      title: "Prepare oversight",
      description:
        "Dated evidence and unresolved decisions, without false all-clear signals.",
      imageSrc: "/comp/c5.png",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          SIX-STEP GOVERNANCE MODEL
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-1">
          A progression of responsibilities.
        </h2>
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-10">
          Not a compliance score.
        </h2>

        {/* Six Steps Header Grid / Bar */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-2 border-t-4 border-[#CDA85B]">
              <span className="text-xs font-bold text-[#B49347] tracking-wider mt-2">
                {step.number}
              </span>
              <span className="text-sm font-semibold text-[#1F2421] line-clamp-2">
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Three Columns Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm flex flex-col"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] bg-[#F3F1EC] overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F2421] tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
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
