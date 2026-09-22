import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function GovernanceBoundarySection() {
  const cards = [
    {
      title: "Zoiko Group",
      description:
        "Group governance. Founder & Executive Chairman: Lennox McLeod, at Group level.",
      bgColor: "bg-white",
      textColor: "text-[#0b1329]",
      descColor: "text-gray-600",
    },
    {
      title: "Zoiko Tech",
      description: "Develops and operates the ZoikoSuite platform.",
      bgColor: "bg-[#EFE8D8]",
      textColor: "text-[#0b1329]",
      descColor: "text-gray-600",
    },
    {
      title: "ZoikoSuite",
      description:
        "The governed business operations intelligence platform — the subject of this page.",
      bgColor: "bg-[#0E2843]",
      textColor: "text-white",
      descColor: "text-gray-200",
    },
  ] as const;

  const rows = [
    {
      layer: "ZoikoSuite",
      maySay:
        "The governed business operations intelligence platform and the subject of this leadership destination.",
      mustNotImply:
        "That every Group executive is part of the ZoikoSuite operating team.",
    },
    {
      layer: "Zoiko Tech",
      maySay:
        "Current public ZoikoSuite copy states that ZoikoSuite is developed and operated by Zoiko Tech.",
      mustNotImply:
        "Any specific Zoiko Tech executive title unless separately verified.",
    },
    {
      layer: "Zoiko Group",
      maySay:
        "Current public sources identify Zoiko Group as the parent/company context and Lennox McLeod as Founder & Executive Chairman at Group level.",
      mustNotImply:
        "That the Group founder automatically holds a ZoikoSuite-specific operating title.",
    },
    {
      layer: "Board / committees",
      maySay:
        "May be referenced only where the relevant entity and committee are verified.",
      mustNotImply:
        "A board structure copied from the parent company and presented as ZoikoSuite governance.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            GOVERNANCE BOUNDARY
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Clear operating accountability. Clear governance context.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            The page must prevent visitors from confusing product leadership,
            operating-company leadership, and Group governance.
          </p>
        </div>

        {/* 3 Cards Flow Section with Right Arrows */}
        <div className="w-full flex flex-col md:flex-row items-center gap-4 mb-20">
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <div
                style={{ borderRadius: "14px" }}
                className={`w-full md:w-1/3 p-8 border border-[#DCD6C8] shadow-sm flex flex-col items-center justify-center relative ${card.bgColor}`}
              >
                <h3
                  className={`text-base md:text-lg font-semibold tracking-tight mb-2 ${card.textColor}`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm md:text-base text-center font-light leading-relaxed ${card.descColor}`}
                >
                  {card.description}
                </p>
              </div>

              {/* Arrow between cards (hidden after the last card) */}
              {index < cards.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-[#A8843A] shrink-0">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col">
          {/* Table Header */}
          <div className="w-full pb-4 border-b border-gray-300 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-3/12">LAYER</div>
            <div className="w-5/12">WHAT THE PAGE MAY SAY</div>
            <div className="w-4/12">WHAT IT MUST NOT IMPLY</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Layer */}
              <div className="w-full md:w-3/12 text-[#0b1329] text-base font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Layer
                </span>
                {row.layer}
              </div>

              {/* What The Page May Say */}
              <div className="w-full md:w-5/12 text-gray-600 text-sm md:text-base font-light leading-relaxed pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  What The Page May Say
                </span>
                {row.maySay}
              </div>

              {/* What It Must Not Imply */}
              <div className="w-full md:w-4/12 text-gray-600 text-sm md:text-base font-light leading-relaxed">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  What It Must Not Imply
                </span>
                {row.mustNotImply}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
