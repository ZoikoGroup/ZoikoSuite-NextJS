"use client";

import React from "react";

interface BlueprintStep {
  number: string;
  title: string;
  description: string;
}

const blueprintSteps: BlueprintStep[] = [
  {
    number: "1",
    title: "Outcome",
    description:
      "What business condition are we trying to change? Owner roles and affected domains.",
  },
  {
    number: "2",
    title: "Context",
    description:
      "Which entity, jurisdiction, worker/transaction, effective date, and deployment context apply?",
  },
  {
    number: "3",
    title: "Governance",
    description:
      "Which policy, rule, authority, approval, segregation, or exception applies?",
  },
  {
    number: "4",
    title: "Execution",
    description:
      "What workflow/action occurs and which system owns source truth?",
  },
  {
    number: "5",
    title: "Evidence",
    description:
      "What decision, document, rule, event, and approval evidence is preserved?",
  },
  {
    number: "6",
    title: "Assurance",
    description:
      "What security, privacy, residency, coverage, and status information qualifies the solution?",
  },
  {
    number: "7",
    title: "Adoption",
    description: "How does it coexist, migrate, or scale?",
  },
  {
    number: "8",
    title: "Next step",
    description: "What should this buyer inspect next?",
  },
];

export default function SolutionBlueprintSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
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
              SOLUTION BLUEPRINT
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-4">
            From operating problem to governed proof.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base max-w-xl leading-relaxed font-mono">
            Eight layers connect the outcome you want to the assurance and
            adoption path that gets you there.
          </p>
        </div>

        {/* Steps List Container */}
        <div className="w-full flex flex-col gap-4">
          {blueprintSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-2xl p-6 sm:px-8 flex items-center gap-6 shadow-sm transition-all hover:border-[#C59B3F]"
            >
              {/* Number Badge */}
              <div className="w-9 h-9 rounded-full bg-[#C8A24A] border border-[#D4AF37] text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex flex-col w-full gap-2">
                <h3 className="text-base font-bold text-[#08222F] sm:w-1/3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-mono sm:w-2/3 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
