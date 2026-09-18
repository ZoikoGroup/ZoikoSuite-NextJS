"use client";

import React, { useState } from "react";
import Image from "next/image";

const stages = [
  {
    stage: "STAGE 01",
    title: "Context resolved",
    description:
      "Entity, facility, jurisdiction, workforce scope and source provenance.",
  },
  {
    stage: "STAGE 02",
    title: "Authority checked",
    description:
      "Role, delegation, limit and segregation evaluated before a decision is offered.",
  },
  {
    stage: "STAGE 03",
    title: "Policy applied",
    description:
      "Applicable rule with version and effective date, plus data classification.",
  },
  {
    stage: "STAGE 04",
    title: "Human decision",
    description:
      "Material authorization by a named accountable person. Never automated.",
  },
  {
    stage: "STAGE 05",
    title: "Execution or handoff",
    description:
      "Performed in the approved system of record - commonly not ZolloSuite.",
  },
  {
    stage: "STAGE 06",
    title: "Evidence preserved",
    description:
      "Decision basis, approvals and access events retained as work happens.",
  },
];

export default function GovernedHealthcareModel() {
  const [activeStage, setActiveStage] = useState(3);

  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                GOVERNED HEALTHCARE OPERATING MODEL
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] max-w-[560px] font-bold tracking-tight leading-[1.1]">
              Six stages, with the clinical boundary at every one
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              The model resolves context, checks authority, applies policy,
              takes a human decision, hands off execution and preserves evidence
              - around the systems of record, never inside them.
            </p>
          </div>
        </div>

        {/* Stages Navigation Cards / Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {stages.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveStage(index)}
              className={`text-left bg-white rounded-lg p-3.5 border transition-all flex flex-col justify-between ${
                activeStage === index
                  ? "border-[#0F476A] ring-1 ring-[#0F476A] shadow-sm"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#8C4A4A] mb-1.5 block">
                  {item.stage}
                </span>
                <h3 className="text-[13px] font-bold text-[#08222F] mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-600 leading-normal line-clamp-3">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Main Graphic / Image Container */}
        <div className="w-full bg-white rounded-xl border border-[#8A3B3B] shadow-sm overflow-hidden relative">
          <div className="relative w-full aspect-[16/9] min-h-[400px]">
            <Image
              src="/healthcare/2.png"
              alt="Governed Healthcare Operating Model Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
