"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface HorizonItem {
  id: string;
  horizonNumber: string;
  title: string;
  description: string;
  category: string;
}

const horizonsData: HorizonItem[] = [
  {
    id: "horizon-01",
    horizonNumber: "HORIZON 01",
    title: "What happened?",
    description:
      "Actions, events, changes, obligations, approvals, evidence, and outcomes.",
    category: "DESCRIPTIVE",
  },
  {
    id: "horizon-02",
    horizonNumber: "HORIZON 02",
    title: "Why did it happen?",
    description:
      "Policy outcomes, authority paths, missing evidence, integration failures, exception causes, and control gaps.",
    category: "DIAGNOSTIC",
  },
  {
    id: "horizon-03",
    horizonNumber: "HORIZON 03",
    title: "What needs attention next?",
    description:
      "Upcoming obligations, expiring authority, overdue reviews, evidence gaps, coverage changes, and pending decisions.",
    category: "PROSPECTIVE",
  },
  {
    id: "horizon-04",
    horizonNumber: "HORIZON 04",
    title: "What action may be appropriate?",
    description:
      "Source-grounded options subject to policy, permission, authority, evidence, and human review.",
    category: "GOVERNED DECISION SUPPORT",
  },
];

const metricFamilies = [
  "Operational throughput",
  "Decision cycle",
  "Obligation status",
  "Policy outcomes",
  "Approval paths",
  "Exceptions",
  "Evidence health",
  "Integration health",
  "Control effectiveness",
  "Adoption",
];

export default function ContinuousOperationalIntelligenceSection() {
  const [selectedHorizon, setSelectedHorizon] = useState<string>("horizon-01");

  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                CONTINUOUS OPERATIONAL INTELLIGENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-xl">
              Understand what needs attention before it becomes a control
              failure
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
            Four horizons. Only the first is what most dashboards deliver — the
            category requires all four.
          </p>
        </div>

        {/* 4 Horizon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-6">
          {horizonsData.map((horizon) => {
            const isSelected = selectedHorizon === horizon.id;
            return (
              <div
                key={horizon.id}
                onClick={() => setSelectedHorizon(horizon.id)}
                className={`cursor-pointer bg-white rounded-2xl p-6 transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? "border-[#c5a059] shadow-md ring-1 ring-[#c5a059]"
                    : "border-[#DBE3E8] hover:border-[#9ba4b5]"
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059] block mb-2">
                    {horizon.horizonNumber}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                    {horizon.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    {horizon.description}
                  </p>
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#64748b]">
                  {horizon.category}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom Two Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-12">
          {/* Metric Families Box */}
          <div className="bg-white rounded-2xl border border-[#DBE3E8] p-6 sm:p-8 shadow-xs">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748b] block mb-4">
              METRIC FAMILIES
            </span>
            <div className="flex flex-wrap gap-2">
              {metricFamilies.map((metric, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#E8EFF4] text-[#0f172a] border border-[#DBE3E8]"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>

          {/* Boundary Box */}
          <div className="bg-[#FAF5E6] rounded-2xl border border-[#EEDFB3] p-6 sm:p-8 shadow-xs flex flex-col justify-center">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#8C6D2E] block mb-3">
              BOUNDARY
            </span>
            <p className="text-xs sm:text-sm text-[#59441B] leading-relaxed">
              Every metric is defined, scoped, sourced, and time-bounded. None
              of them measure individuals. There is no productivity score, no
              behavior-policing metric, and no hidden monitoring anywhere in the
              model.
            </p>
          </div>
        </div>

        {/* Bottom Rounded Button */}
        <div className="flex justify-center w-full">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
          >
            Explore analytics & reporting
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
