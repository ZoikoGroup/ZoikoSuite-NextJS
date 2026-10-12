"use client";

import React, { useState } from "react";
import Image from "next/image";

interface StepItem {
  id: string;
  number: string;
  title: string;
  heading: string;
  description: string;
  imageSrc: string;
}

const stepsData: StepItem[] = [
  {
    id: "01",
    number: "01",
    title: "Define the scope",
    heading: "Understand the scope",
    description:
      "Define the entity, period, and jurisdiction before assigning responsibility.",
    imageSrc: "/tax/8.png",
  },
  {
    id: "02",
    number: "02",
    title: "Assign accountability",
    heading: "Coordinate accountability",
    description:
      "Connect preparers, reviewers, and decision owners through clear responsibilities.",
    imageSrc: "/tax/10.png",
  },
  {
    id: "03",
    number: "03",
    title: "Review checkpoints",
    heading: "Prepare for oversight",
    description:
      "Keep supporting evidence, gaps, and review context visible to authorized readers.",
    imageSrc: "/tax/12.png",
  },
  {
    id: "04",
    number: "04",
    title: "Resolve exceptions",
    heading: "Resolve exceptions",
    description:
      "Identify discrepancies, document resolution rationales, and secure sign-offs.",
    imageSrc: "/tax/10.png",
  },
  {
    id: "05",
    number: "05",
    title: "Preserve evidence",
    heading: "Preserve evidence",
    description:
      "Maintain immutable audit trails and securely archive supporting documentation.",
    imageSrc: "/tax/12.png",
  },
  {
    id: "06",
    number: "06",
    title: "Report oversight",
    heading: "Report oversight",
    description:
      "Deliver transparent compliance summaries to internal and external stakeholders.",
    imageSrc: "/tax/6.png",
  },
];

export default function TaxLadder() {
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            WHAT THE TAX LADDER MEANS
          </p>
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-4 max-w-4xl leading-[1.15]">
            A progression of responsibilities.
            <br />
            Not a compliance score.
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed font-normal">
            Tax Ladder describes proposed internal governance stages. It is not
            a statutory tax hierarchy, filing engine, or alternative to
            qualified tax advice.
          </p>
        </div>

        {/* 6-Step Navigation Bar with top border indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {stepsData.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className="text-left group focus:outline-none transition-all duration-200"
              >
                <div
                  className={`h-[3px] w-full mb-3 transition-colors duration-200 ${
                    isActive ? "bg-[#217B7E]" : "bg-[#CFA844]"
                  }`}
                />
                <span
                  className={`text-xs font-semibold block mb-1 ${
                    isActive ? "text-[#386665]" : "text-[#9CA3IP]"
                  }`}
                >
                  {step.number}
                </span>
                <span
                  className={`text-sm font-semibold block truncate ${
                    isActive
                      ? "text-[#217B7E]"
                      : "text-[#354D57] group-hover:text-[#1E293B]"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[stepsData[0], stepsData[1], stepsData[2]].map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-56 bg-[#F1F5F9]">
                <Image
                  src={card.imageSrc}
                  alt={card.heading}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-[#1E293B] text-lg font-bold mb-2">
                    {card.heading}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                  <a
                    href="/sign-in"
                    className="text-xs font-semibold text-[#386665] hover:underline"
                  >
                    Learn more &rarr;
                  </a>
                  <span className="text-xs text-[#9CA3AF] font-medium">
                    Stage {card.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
