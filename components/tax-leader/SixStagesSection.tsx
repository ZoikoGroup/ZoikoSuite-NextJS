"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

interface StageData {
  id: string;
  stageNum: string;
  title: string;
  description: string;
  badge?: string;
  imageSrc: string;
}

export default function SixStagesSection() {
  const [activeStage, setActiveStage] = useState<string>("01");

  const stages: StageData[] = [
    {
      id: "01",
      stageNum: "STAGE 01 \u00b7 ORGANIZE",
      title: "Scope & Tax Responsibilities",
      description:
        "Which entity, jurisdiction, period and category a responsibility belongs to.",
      badge: "CURRENT SELECTION",
      imageSrc: "/tax/2.png",
    },
    {
      id: "02",
      stageNum: "STAGE 02 \u00b7 ASSIGN",
      title: "Accountability & Assignment",
      description: "Who prepares, reviews, approves or escalates.",
      imageSrc: "/tax/2.png",
    },
    {
      id: "03",
      stageNum: "STAGE 03 \u00b7 REVIEW",
      title: "Obligations & Review Milestones",
      description:
        "How externally sourced obligations become governed checkpoints.",
      imageSrc: "/tax/2.png",
    },
    {
      id: "04",
      stageNum: "STAGE 04 \u00b7 ESCALATE",
      title: "Exceptions & Escalation",
      description:
        "Who owns gaps, missing documents, timing conflicts and open decisions.",
      imageSrc: "/tax/2.png",
    },
    {
      id: "05",
      stageNum: "STAGE 05 \u00b7 DOCUMENT",
      title: "Evidence & Review Trail",
      description:
        "Which artifacts support a review, and what is still missing.",
      imageSrc: "/tax/2.png",
    },
    {
      id: "06",
      stageNum: "STAGE 06 \u00b7 OVERSEE",
      title: "Leadership Oversight & Handoffs",
      description: "Leadership-level questions and follow-up actions.",
      imageSrc: "/tax/2.png",
    },
  ] as const;

  const currentData = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <section className="w-full bg-[#F6F5F1] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-10 flex flex-col items-start max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            Six stages, one at a time.
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
            Choose a stage to see how it would work and what state its evidence
            is in. Every example is a conceptual illustration with fictional,
            masked data.
          </p>
        </div>

        {/* Stages Grid (2x3 or flex wrap) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {stages.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(stage.id)}
                className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between shadow-sm ${
                  isActive
                    ? "bg-[#08222F] border-transparent text-white shadow-md"
                    : "bg-white border-black/10 text-[#1F2421] hover:border-black/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-bold tracking-wider ${isActive ? "text-[#C8963D]" : "text-[#C8963D]"}`}
                    >
                      {stage.stageNum}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center ${isActive ? "bg-white/10 text-white" : "bg-[#F6F5F1] text-[#1F2421]"}`}
                    >
                      {isActive ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  <h3
                    className={`text-lg font-bold tracking-tight mb-2 ${isActive ? "text-white" : "text-[#1F2421]"}`}
                  >
                    {stage.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${isActive ? "text-white/70" : "text-[#4B5563]"}`}
                  >
                    {stage.description}
                  </p>
                </div>

                {stage.badge && isActive && (
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8963D]">
                      {stage.badge}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Illustration Box */}
        <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-black/10 bg-[#08222F]">
          <Image
            src={currentData.imageSrc}
            alt={currentData.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
