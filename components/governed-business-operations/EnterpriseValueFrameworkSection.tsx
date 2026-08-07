"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ValueCard {
  valueLabel: string;
  title: string;
  question: string;
  indicatorsLabel?: string;
  indicators?: string[];
  outputBody?: string;
  isDark?: boolean;
}

const valueCardsData: ValueCard[] = [
  {
    valueLabel: "VALUE 01",
    title: "Decision quality",
    question:
      "Are material actions evaluated with complete context, policy, authority, and evidence?",
    indicatorsLabel: "INDICATORS",
    indicators: [
      "Rework",
      "escalation rate",
      "missing information at decision",
      "exception cause mix",
    ],
  },
  {
    valueLabel: "VALUE 02",
    title: "Control effectiveness",
    question:
      "Are policies, approvals, segregation, and exceptions operating as designed?",
    indicatorsLabel: "INDICATORS",
    indicators: [
      "Block and override rates",
      "authority gaps",
      "overdue reviews",
      "compensating controls in force",
    ],
  },
  {
    valueLabel: "VALUE 03",
    title: "Evidence readiness",
    question:
      "Can teams retrieve attributable evidence without reconstruction?",
    indicatorsLabel: "INDICATORS",
    indicators: [
      "Manifest completeness",
      "retrieval time",
      "missing sources",
      "export readiness",
    ],
  },
  {
    valueLabel: "VALUE 04",
    title: "Operational speed",
    question: "Can approved actions move faster without bypassing controls?",
    indicatorsLabel: "INDICATORS",
    indicators: [
      "Cycle time",
      "queue aging",
      "approval latency",
      "integration failures",
    ],
  },
  {
    valueLabel: "VALUE 05",
    title: "Architecture simplification",
    question:
      "Can selected workflows, policy layers, reporting, or evidence processes be consolidated?",
    indicatorsLabel: "INDICATORS",
    indicators: [
      "Systems and hand-offs",
      "duplicate data",
      "manual reconciliation",
      "integration maintenance",
    ],
  },
  {
    valueLabel: "OUTPUT",
    title: "A value hypothesis, not a guarantee",
    question: "",
    outputBody:
      "The assessment produces a customer-specific hypothesis and a measurement plan you can test. It does not produce a guaranteed ROI claim.",
    isDark: true,
  },
];

const baselineInputs = [
  "Current processes",
  "Volumes",
  "Entities",
  "Jurisdictions",
  "Systems",
  "Roles",
  "Approval paths",
  "Evidence steps",
  "Exceptions",
  "Audit effort",
  "Constraints",
];

export default function EnterpriseValueFrameworkSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                ENTERPRISE VALUE AND EVALUATION FRAMEWORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-xl">
              Build the business case from your baseline — not from our
              percentages
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
            Five value dimensions, each with a baseline question and the
            indicators you would measure. No invented savings, ROI figures, or
            benchmarks appear anywhere on this page.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-6">
          {valueCardsData.map((card, idx) => {
            const cardBg = card.isDark
              ? "bg-[#0F476A] text-white border-[#08222F]"
              : "bg-white text-[#0f172a] border-[#DBE3E8]";

            const labelColor = card.isDark
              ? "text-[#D0AA55]"
              : "text-[#c5a059]";

            const questionColor = card.isDark
              ? "text-[#CFDEE7]"
              : "text-[#64748b]";

            return (
              <div
                key={idx}
                className={`rounded-2xl border p-6 shadow-xs flex flex-col justify-between ${cardBg}`}
              >
                <div>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-widest block mb-3 ${labelColor}`}
                  >
                    {card.valueLabel}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>

                  {card.question && (
                    <p
                      className={`text-xs italic leading-relaxed mb-4 ${questionColor}`}
                    >
                      &ldquo;{card.question}&rdquo;
                    </p>
                  )}

                  {card.outputBody && (
                    <p className={`text-xs leading-relaxed ${questionColor}`}>
                      {card.outputBody}
                    </p>
                  )}
                </div>

                {card.indicators && card.indicators.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-[#DBE3E8]/30">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#64748b] block mb-1">
                      {card.indicatorsLabel}
                    </span>
                    <p className="text-xs text-[#64748b] leading-relaxed">
                      {card.indicators.join(" · ")}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Baseline Inputs Container */}
        <div className="w-full bg-white rounded-2xl border border-[#DBE3E8] p-6 shadow-xs mb-12">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748b] block mb-4">
            BASELINE INPUTS WE WOULD ASK FOR
          </span>
          <div className="flex flex-wrap gap-2 mb-4">
            {baselineInputs.map((input, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#E8EFF4] text-[#0F476A] border border-[#DBE3E8] shadow-xs"
              >
                {input}
              </span>
            ))}
          </div>
          <p className="text-xs text-[#64748b] italic">
            No financial result is shown without your inputs and transparent
            assumptions.
          </p>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center w-full">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
          >
            Request a value assessment
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
