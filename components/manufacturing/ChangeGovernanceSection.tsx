"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface ChangeStep {
  step: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const CHANGE_STEPS: ChangeStep[] = [
  {
    step: "STEP 01",
    title: "Change raised",
    description:
      "Type, affected sites, suppliers, contracts and obligations identified.",
  },
  {
    step: "STEP 02",
    title: "Impact resolved",
    description:
      "Linked obligations, customer commitments and dependency exposure surfaced.",
  },
  {
    step: "STEP 03",
    title: "Authority checked",
    description:
      "Delegation, limit and segregation evaluated before a decision is offered.",
  },
  {
    step: "STEP 04",
    title: "Human decision",
    description:
      "Approve, reject, defer or approve with conditions — by a named accountable person.",
    isHighlighted: true,
  },
  {
    step: "STEP 05",
    title: "Exception recorded",
    description:
      "If proceeding outside policy: owner, compensating control and expiry date required.",
  },
  {
    step: "STEP 06",
    title: "Evidence and handoff",
    description:
      "Decision preserved; execution passes to ERP, MES, PLM or QMS as applicable.",
  },
];

export default function ChangeGovernanceSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
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
                CHANGE AND EXCEPTION GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Business approval for change that starts operationally
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Supplier substitution, site transfer and specification change are
              business decisions with operational consequences. Engineering
              change itself stays in PLM.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 items-stretch">
          {CHANGE_STEPS.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-4 shadow-sm border flex flex-col justify-between relative ${
                item.isHighlighted ? "border-[#0F476A]" : "border-[#DBE3E8]"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#C59B3F] block mb-1">
                  {item.step}
                </span>
                <h3 className="text-[14px] font-bold text-[#0F172A] mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#5A6D79] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Optional tiny arrow indicator between cards on desktop */}
              {index < CHANGE_STEPS.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/4 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center text-[#A07A2E]">
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
