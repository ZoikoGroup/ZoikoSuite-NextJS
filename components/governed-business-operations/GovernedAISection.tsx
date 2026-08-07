"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface UseExample {
  id: string;
  label: string;
}

const useExamples: UseExample[] = [
  { id: "summarize", label: "Summarize records" },
  { id: "identify", label: "Identify obligations" },
  { id: "propose", label: "Propose classifications" },
  { id: "surface", label: "Surface anomalies" },
  { id: "compare", label: "Compare sources" },
  { id: "draft", label: "Draft workflow steps" },
  { id: "suggest", label: "Suggest evidence gaps" },
  { id: "prioritize", label: "Prioritize review" },
];

interface RequiredControl {
  id: string;
  label: string;
  description: string;
}

const requiredControls: RequiredControl[] = [
  {
    id: "sources",
    label: "SOURCES",
    description: "Authorized sources only, within the user's permission scope",
  },
  {
    id: "class",
    label: "CLASS",
    description: "Data classification and sensitive-domain restrictions",
  },
  {
    id: "scope",
    label: "SCOPE",
    description: "Entity and jurisdiction boundaries",
  },
  {
    id: "use",
    label: "USE",
    description: "Explicit allowed and prohibited use cases",
  },
  {
    id: "review",
    label: "REVIEW",
    description: "Configurable human-review thresholds",
  },
  {
    id: "record",
    label: "RECORD",
    description: "Retention and full event logging",
  },
];

export default function GovernedAISection() {
  const [selectedExample, setSelectedExample] = useState<string>("summarize");

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side: Content, Examples & Controls */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#c5a059]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
              GOVERNED AI
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] mb-6">
            AI can support the work without becoming the authority
          </h2>

          <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-8">
            AI is one governed capability inside the category — never the
            category itself.
          </p>

          {/* Approved Use Examples */}
          <div className="mb-8">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9ba4b5] block mb-3">
              APPROVED USE EXAMPLES
            </span>
            <div className="flex flex-wrap gap-2">
              {useExamples.map((ex) => {
                const isSelected = selectedExample === ex.id;
                return (
                  <button
                    key={ex.id}
                    onClick={() => setSelectedExample(ex.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-[#E8EFF4] text-[#64748b] border-[#CFDEE7] shadow-xs"
                        : "bg-[#E8EFF4] text-[#64748b] border-[#CFDEE7] hover:border-[#9ba4b5]"
                    }`}
                  >
                    {ex.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Required Controls */}
          <div className="space-y-3.5 mb-10">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9ba4b5] block mb-3">
              REQUIRED CONTROLS
            </span>
            {requiredControls.map((control) => (
              <div key={control.id} className="flex items-baseline gap-4">
                <span className="w-20 text-[11px] font-mono font-bold tracking-widest text-[#c5a059] shrink-0">
                  {control.label}
                </span>
                <span className="text-xs sm:text-sm text-[#0f172a] font-medium">
                  {control.description}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
            >
              Explore governed AI
              <ArrowRight className="w-4 h-4 text-[#D0AA55]" />
            </a>
          </div>
        </div>

        {/* Right Side: Image Display Container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#DBE3E8] bg-[#08222F]">
            <img
              src="/governed-business-operations/4.png"
              alt="Governed AI interface view"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
