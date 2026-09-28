"use client";

import React from "react";

interface StepCard {
  eyebrow: string;
  title: string;
  description: string;
}

const stepCards: StepCard[] = [
  {
    eyebrow: "DISCOVER",
    title: "Is my industry represented?",
    description: "Explore your industry / directory.",
  },
  {
    eyebrow: "UNDERSTAND",
    title: "What matters operationally?",
    description: "Open child page / compare context.",
  },
  {
    eyebrow: "VALIDATE",
    title: "Will this work with our systems?",
    description: "Platform · Trust · Evidence · Integration.",
  },
  {
    eyebrow: "EVALUATE",
    title: "Show me how this would work.",
    description: "Talk to a specialist / Book demo.",
  },
  {
    eyebrow: "PROCURE",
    title: "Give our diligence team materials.",
    description: "Security/Trust brief · architecture · legal routes.",
  },
  {
    eyebrow: "ADOPT / EXPAND",
    title: "We're already a customer.",
    description: "Docs · Support · Customer Success.",
  },
];

export default function YourNextStepSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-8">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-4 h-[1px]"
              style={{ backgroundColor: "#C59B3F" }}
            ></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase font-mono"
              style={{ color: "#C59B3F" }}
            >
              YOUR NEXT STEP
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15]">
            From discovery to adoption — at your pace.
          </h2>
        </div>

        {/* 3-Column Grid (6 Cards Total) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stepCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all hover:border-[#08222F]"
            >
              <div>
                {/* Card Eyebrow */}
                <span
                  className="text-[10px] font-mono font-bold tracking-widest uppercase mb-3 block"
                  style={{ color: "#C59B3F" }}
                >
                  {card.eyebrow}
                </span>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#08222F] mb-3">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-mono">
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
