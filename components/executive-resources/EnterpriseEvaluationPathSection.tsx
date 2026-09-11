"use client";

import React from "react";

interface EvaluationStage {
  stageNumber: string;
  title: string;
  description: string;
  linkText: string;
}

const EVALUATION_STAGES: EvaluationStage[] = [
  {
    stageNumber: "STAGE 01",
    title: "Product",
    description: "What the platform is and where its boundaries sit.",
    linkText: "Platform overview →",
  },
  {
    stageNumber: "STAGE 02",
    title: "Governance",
    description: "Policy, authority, segregation, evidence and governed AI.",
    linkText: "Governance Platform →",
  },
  {
    stageNumber: "STAGE 03",
    title: "Architecture",
    description: "Scope, data location, interfaces, events and coexistence.",
    linkText: "Platform Foundation →",
  },
  {
    stageNumber: "STAGE 04",
    title: "Trust",
    description: "Deployment, residency, security posture and boundaries.",
    linkText: "Deployment options →",
  },
  {
    stageNumber: "STAGE 05",
    title: "Implementation",
    description: "Migration, Shadow Mode, readiness gates and activation.",
    linkText: "Migration & Shadow Mode →",
  },
];

export default function EnterpriseEvaluationPathSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                ENTERPRISE EVALUATION PATH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Five stages, all published
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Unlike the resource library, every destination in this sequence
              exists today. This is the route an evaluation team can follow now.
            </p>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {EVALUATION_STAGES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between transition-all"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase block mb-3">
                  {item.stageNumber}
                </span>
                <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-dashed border-[#E2E8F0]">
                <a
                  href="#link"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs font-bold text-[#0F476A] hover:underline inline-flex items-center gap-1"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
