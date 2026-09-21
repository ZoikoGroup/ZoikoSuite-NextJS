import React from "react";
import { ArrowRight } from "lucide-react";

interface StepItem {
  step: string;
  title: string;
  description: string;
  isActive?: boolean;
}

const steps: StepItem[] = [
  {
    step: "STEP 01",
    title: "Obligation identified",
    description: "Source, basis and effective date recorded with provenance.",
  },
  {
    step: "STEP 02",
    title: "Applicability resolved",
    description:
      "Entity, jurisdiction and workflow scope determine whether it applies.",
  },
  {
    step: "STEP 03",
    title: "Owner assigned",
    description: "A named person, never a team alias, with an escalation path.",
  },
  {
    step: "STEP 04",
    title: "Policy applied",
    description: "Controlling rule with version and effective date attached.",
  },
  {
    step: "STEP 05",
    title: "Human decision",
    description:
      "Approve, defer or raise an exception — by an accountable person.",
    isActive: true,
  },
  {
    step: "STEP 06",
    title: "Execution or filing",
    description:
      "Performed in the approved system of record, commonly not ZoikoSuite.",
  },
  {
    step: "STEP 07",
    title: "Evidence preserved",
    description: "Decision basis and lineage retained as the work happens.",
  },
];

export default function ComplianceOperatingModel() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                COMPLIANCE OPERATING MODEL
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.15]">
              From obligation to evidence, in seven steps
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Know what is due, why it is due, who owns it, and what evidence
              exists — with the decision governed before execution rather than
              documented afterwards.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 relative">
          {steps.map((item, index) => {
            return (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-4 flex flex-col transition-all ${
                  item.isActive
                    ? "border-2 border-[#0F476A]"
                    : "border border-[#E5E7EB] shadow-sm hover:border-[#C9B07A]"
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#C9B07A] block mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-[13px] font-bold text-[#111827] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
