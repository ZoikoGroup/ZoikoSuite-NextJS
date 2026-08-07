"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface FunctionItem {
  id: string;
  name: string;
  description: string;
}

const functionsData: FunctionItem[] = [
  {
    id: "finance",
    name: "Finance",
    description:
      "Accounting; general ledger; AP; AR; treasury; reconciliation; close; consolidation; revenue integrity.",
  },
  {
    id: "workforce",
    name: "Workforce",
    description:
      "Human resources; payroll; compensation; benefits; leave; workforce compliance; employment contracts; offboarding.",
  },
  {
    id: "legal-commercial",
    name: "Legal & Commercial",
    description:
      "Contracts; clauses; obligations; board resolutions; corporate actions; procurement; vendor management; spend controls.",
  },
  {
    id: "tax-compliance",
    name: "Tax & Compliance",
    description:
      "Tax determination; VAT/GST; withholding; filing management; obligations; regulatory reporting; exceptions.",
  },
  {
    id: "governance-ai",
    name: "Governance & AI",
    description:
      "Policies; jurisdiction intelligence; approvals; delegated authority; segregation; evidence; governed AI; analytics.",
  },
  {
    id: "platform-foundation",
    name: "Platform Foundation",
    description:
      "Multi-entity; multi-jurisdiction; data residency; APIs; integrations; developer platform; migration; events.",
  },
];

const twelveObjects = [
  { id: "entity", name: "Entity", highlighted: true },
  { id: "jurisdiction", name: "Jurisdiction", highlighted: false },
  { id: "business-object", name: "Business object", highlighted: true },
  { id: "event", name: "Event", highlighted: false },
  { id: "policy", name: "Policy", highlighted: true },
  { id: "obligation", name: "Obligation", highlighted: false },
  { id: "authority", name: "Authority", highlighted: true },
  { id: "approval", name: "Approval", highlighted: true },
  { id: "evidence", name: "Evidence", highlighted: true },
  { id: "exception", name: "Exception", highlighted: false },
  { id: "analytics", name: "Analytics", highlighted: false },
  { id: "ai-review", name: "AI review", highlighted: false },
];

export default function CrossFunctionalCoverageSection() {
  const [selectedFunction, setSelectedFunction] = useState<string>("finance");

  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                CROSS-FUNCTIONAL OPERATING COVERAGE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-xl">
              Cross-functional because functions share one model — not because
              the list is long
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
            Select a function to see which shared core objects it uses. The core
            does not change; the workflow does.
          </p>
        </div>

        {/* Main Grid: Left Shared Operating Core Card & Right Function Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mb-12">
          {/* Left Side: Shared Operating Core Card */}
          <div className="lg:col-span-4 bg-[#0F476A] rounded-2xl p-6 sm:p-8 text-[#F7F5F0] flex flex-col gap-2 shadow-lg border border-[#1a3848]">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-[2px] bg-[#c5a059]" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059]">
                  SHARED OPERATING CORE
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Twelve objects every function uses
              </h3>
              <p className="text-xs sm:text-sm text-[#9ba4b5] leading-relaxed mb-6">
                A finance approval and a payroll release resolve the same entity
                model, the same authority model, and the same evidence model.
                That is what makes the coverage cross-functional rather than
                merely broad.
              </p>
            </div>

            {/* Twelve Objects Pills */}
            <div className="flex flex-wrap gap-2">
              {twelveObjects.map((obj) => (
                <span
                  key={obj.id}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border ${
                    obj.highlighted
                      ? "bg-[#D0AA55] text-[#08222F] border-[#D0AA55] font-semibold"
                      : "text-[#CFDEE7] border-[#1a3848]"
                  }`}
                >
                  {obj.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: 6 Function Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-2">
            {functionsData.map((fn) => {
              const isSelected = selectedFunction === fn.id;
              return (
                <div
                  key={fn.id}
                  onClick={() => setSelectedFunction(fn.id)}
                  className={`cursor-pointer bg-white rounded-2xl p-6 transition-all duration-200 border flex flex-col justify-between ${
                    isSelected
                      ? "border-[#c5a059] shadow-md ring-1 ring-[#c5a059]"
                      : "border-[#DBE3E8] hover:border-[#9ba4b5]"
                  }`}
                >
                  <div>
                    <h4 className="text-base font-bold text-[#0f172a] mb-2">
                      {fn.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                      {fn.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-start w-full">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
          >
            Explore platform capabilities
            <ArrowRight className="w-4 h-4 text-[#D0AA55]" />
          </a>
        </div>
      </div>
    </section>
  );
}
