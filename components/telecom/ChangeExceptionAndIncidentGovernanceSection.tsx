"use client";

import React, { useState } from "react";
import Image from "next/image";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const CHANGE_STEPS: StepItem[] = [
  {
    number: "STEP 01",
    title: "Change or follow-up raised",
    description:
      "Type, affected markets, partners, agreements and obligations identified.",
  },
  {
    number: "STEP 02",
    title: "Impact resolved",
    description:
      "Linked obligations, partner commitments and customer-data exposure surfaced.",
  },
  {
    number: "STEP 03",
    title: "Authority checked",
    description:
      "Delegation, limit and segregation evaluated before a decision is offered.",
  },
  {
    number: "STEP 04",
    title: "Human decision",
    description:
      "Approve, reject, defer or approve with conditions — by a named accountable person.",
  },
  {
    number: "STEP 05",
    title: "Exception recorded",
    description:
      "Owner, compensating control and expiry date required. No open-ended exception.",
  },
  {
    number: "STEP 06",
    title: "Evidence and handoff",
    description:
      "Decision preserved; execution passes to the operational system of record.",
  },
];

export default function ChangeExceptionAndIncidentGovernanceSection() {
  const [activeStep, setActiveStep] = useState(3); // Default index 3 (Step 04) active

  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
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
                CHANGE, INCIDENT AND EXCEPTION GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Business follow-up around an operational event
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              The network incident is managed in operational systems. What
              ZoikoSuite governs is the business decision trail that follows it.
            </p>
          </div>
        </div>

        {/* Main Content Grid: Left Steps, Right Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Six-Step Change Flow */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Subheader */}
            <div className="mb-4">
              <span className="text-[11px] font-semibold tracking-widest uppercase font-mono text-gray-500">
                SIX-STEP CHANGE FLOW
              </span>
            </div>

            {/* Steps List */}
            <div className="flex flex-col gap-3">
              {CHANGE_STEPS.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStep(index)}
                    className={`bg-white rounded-xl p-4 shadow-sm border transition-all cursor-pointer flex flex-col ${
                      isActive
                        ? "border-[#0F476A] ring-1 ring-[#0F476A]"
                        : "border-[#DBE3E8] hover:border-gray-400"
                    }`}
                  >
                    <span className="text-[8.5px] font-mono tracking-wider text-[#A07A2E] uppercase mb-1">
                      {step.number}
                    </span>
                    <h3 className="text-[12.5px] font-bold text-[#16262F] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-[#5A6D79] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Big Image Showcase */}
          <div className="lg:col-span-7 sticky top-8">
            <div className="relative w-full overflow-hidden aspect-[11/10]">
              <Image
                src="/telecom/4.png"
                alt="Change, incident and exception governance control room"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
