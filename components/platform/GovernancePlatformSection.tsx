"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface StageItem {
  stage: string;
  title: string;
  description: string;
}

const stages: StageItem[] = [
  {
    stage: "STAGE 1",
    title: "Context",
    description: "Entity, jurisdiction, and scope (illustrative)",
  },
  {
    stage: "STAGE 2",
    title: "Policy / requirement",
    description: "Source, owner, status (specimen)",
  },
  {
    stage: "STAGE 3",
    title: "Decision / approval",
    description: "Required, optional, or blocked",
  },
  {
    stage: "STAGE 4",
    title: "Action",
    description: "Executed within permission model",
  },
  {
    stage: "STAGE 5",
    title: "Evidence",
    description: "Source, timestamp, reference",
  },
  {
    stage: "STAGE 6",
    title: "Review / exception",
    description: "Owner, expiry, approval state",
  },
];

export default function GovernancePlatformSection() {
  return (
    <section className="w-full bg-[#F6F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
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
              GOVERNANCE PLATFORM
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-6">
            Put governance in the path of work — before exceptions become
            outcomes.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed">
            Connect policies, permissions, approvals, obligations, exceptions,
            and evidence to the operational context they govern. Controlled
            workflows and accountable review — without claiming that software
            replaces legal, compliance, or management judgment.
          </p>
        </div>

        {/* Stages Flow / Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-center">
          {stages.map((item, index) => (
            <div key={index} className="relative flex items-center h-full">
              {/* Stage Card */}
              <div className="w-full bg-white border border-[#D9D3C7] rounded-2xl p-5 flex flex-col justify-between shadow-sm transition-all hover:border-[#C59B3F] h-full min-h-[140px]">
                <div>
                  <div className="text-[10px] font-mono font-bold tracking-wider mb-2 text-[#C59B3F]">
                    {item.stage}
                  </div>
                  <h3 className="text-sm font-bold text-[#08222F] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-600 leading-relaxed font-mono">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Connecting arrow indicator for large screens between items */}
              {index < stages.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#F7F5F0] border border-[#D9D3C7] items-center justify-center text-gray-400">
                  <ChevronRight className="w-3 h-3" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
