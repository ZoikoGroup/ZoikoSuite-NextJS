"use client";

import React, { useState } from "react";
import Image from "next/image";

interface WorkflowTab {
  id: string;
  label: string;
}

export default function GovernanceWorkflowSection() {
  const [activeTab, setActiveTab] = useState<string>("review");

  const tabs: WorkflowTab[] = [
    { id: "review", label: "Review an obligation" },
    { id: "correction", label: "Request a correction" },
    { id: "escalation", label: "Escalate an exception" },
    { id: "oversight", label: "Executive oversight" },
  ] as const;

  return (
    <section className="w-full bg-[#F6F5F0] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-10 flex flex-col items-start max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            A governance workflow, step by step.
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
            Four conceptual paths show how responsibility moves, and what
            happens when something is missing.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer shadow-sm border ${
                  isActive
                    ? "bg-[#08222F] text-white border-transparent"
                    : "bg-[#FFFFFF] text-[#1F2421] border-[#CFCABB] hover:border-[#1F2421]/30"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Featured Workflow Illustration Box */}
        <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-[#CFCABB] bg-[#08222F]">
          <Image
            src="/tax/3.png"
            alt="A governance workflow step by step conceptual illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
