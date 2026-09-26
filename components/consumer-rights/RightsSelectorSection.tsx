"use client"
import React, { useState } from "react";

export default function RightsSelectorSection() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const rights = [
    {
      title: "Access / know",
      description: "See personal information and how it is used or disclosed.",
    },
    {
      title: "Delete",
      description: "Ask for eligible personal information to be deleted.",
    },
    {
      title: "Correct",
      description: "Ask to correct inaccurate personal information.",
    },
    {
      title: "Get a copy / portability",
      description:
        "Receive eligible information in an appropriate portable format.",
    },
    {
      title: "Object or restrict",
      description:
        "Ask to stop or restrict certain processing where the right applies.",
    },
    {
      title: "Limit sensitive information",
      description: "Limit certain uses/disclosures where applicable.",
    },
    {
      title: "Opt out of sale or sharing",
      description: "Stop covered sale/sharing activity.",
    },
    {
      title: "Automated decision rights",
      description:
        "Request information or exercise rights related to covered automated decisions where applicable.",
    },
    {
      title: "Other privacy request",
      description: "Describe the outcome you want.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            RIGHTS SELECTOR
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Outcome-based labels — never a statute the visitor has to identify
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {rights.map((right, index) => {
            const isSelected = selectedCard === right.title;
            return (
              <div
                key={index}
                onClick={() => setSelectedCard(right.title)}
                style={{ borderRadius: "12px" }}
                className={`bg-white border p-6 flex flex-col justify-between shadow-sm cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-[#0b1329] ring-1 ring-[#0b1329]"
                    : "border-[#DCD6C8] hover:border-[#A8843A]"
                }`}
              >
                <div>
                  <h2 className="text-base font-semibold text-[#0b1329] tracking-tight mb-2">
                    {right.title}
                  </h2>
                  <p className="text-gray-600 font-light leading-relaxed text-[14px]">
                    {right.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
