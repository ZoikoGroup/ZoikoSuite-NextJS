"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function IllustrativeChangeStepsSection() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps: Step[] = [
    {
      number: "1",
      title: "Trigger",
      description:
        "Initiation of the operational change request with initial context and scoping.",
    },
    {
      number: "2",
      title: "Validate",
      description:
        "Checking prerequisites, constraints, and policy compliance before review.",
    },
    {
      number: "3",
      title: "Assign",
      description:
        "Allocating accountable owners and reviewers for the specific request domain.",
    },
    {
      number: "4",
      title: "Approve",
      description:
        "Evaluating formal decisions, recorded rationale, and sign-offs.",
    },
    {
      number: "5",
      title: "Handoff",
      description:
        "Managing downstream transitions between teams or systems with explicit acknowledgment.",
    },
    {
      number: "6",
      title: "Record / resolve",
      description:
        "Archiving immutable audit records and addressing any remaining exceptions.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-10 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            One illustrative change, six steps.
          </h2>
          <div className="flex flex-wrap items-center gap-3 max-w-3xl">
            <p className="text-[#4B5563] text-base sm:text-lg">
              Example: A material operational change requires a recorded
              request, review, decision, downstream handoff and exception
              handling.{" "}
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#E8EEF2] text-[#1E3A4C] text-xs font-semibold tracking-wide">
                ILLUSTRATIVE
              </span>
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          {steps.map((step, index) => {
            const isSelected = selectedStep === index;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedStep(index)}
                className={`bg-white rounded-2xl border p-6 text-left flex flex-col justify-between transition-all cursor-pointer shadow-sm hover:shadow-md ${
                  isSelected
                    ? "border-[#B49347] ring-1 ring-[#B49347]"
                    : "border-black/5"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-8">
                  <span className="w-8 h-8 rounded-full bg-[#F6F5F1] text-[#1F2421] text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-black/20 hidden lg:block" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1F2421] tracking-tight">
                    {step.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <div className="w-full bg-white rounded-2xl border border-black/5 p-6 sm:p-8 shadow-sm">
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            {selectedStep !== null
              ? steps[selectedStep].description
              : "Select a step to see what must be decided, owned and documented."}
          </p>
        </div>
      </div>
    </section>
  );
}
