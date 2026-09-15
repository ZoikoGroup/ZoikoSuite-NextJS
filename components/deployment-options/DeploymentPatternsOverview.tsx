"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Settings, AlertCircle } from "lucide-react";

interface Pattern {
  id: string;
  number: string;
  title: string;
  description: string;
  statusText: string;
  statusType: "green" | "blue" | "orange";
}

const patterns: Pattern[] = [
  {
    id: "pattern-01",
    number: "PATTERN 01",
    title: "Regional hosting",
    description:
      "Provider-operated service in an approved region. Exact services, data classes, support paths, backup, and recovery must be verified.",
    statusText: "VERIFIED AVAILABLE",
    statusType: "green",
  },
  {
    id: "pattern-02",
    number: "PATTERN 02",
    title: "Enterprise single-tenant",
    description:
      "A customer-specific tenancy pattern. Account, network, compute, database, storage, key, operations, and support isolation must be defined.",
    statusText: "CONFIGURATION REQUIRED",
    statusType: "blue",
  },
  {
    id: "pattern-03",
    number: "PATTERN 03",
    title: "Dedicated private cloud",
    description:
      "A dedicated environment with approved infrastructure and operating responsibilities. Provider and customer boundaries vary by implementation.",
    statusText: "CONFIGURATION REQUIRED",
    statusType: "blue",
  },
  {
    id: "pattern-04",
    number: "PATTERN 04",
    title: "Sovereign deployment",
    description:
      "A requirement-led pattern addressing approved sovereignty dimensions across data, access, operations, keys, network, support, supply chain, and legal control.",
    statusText: "MARKET DEPENDENT",
    statusType: "blue",
  },
  {
    id: "pattern-05",
    number: "PATTERN 05",
    title: "On-premise deployment",
    description:
      "A customer-controlled environment with explicit platform, capacity, security, update, observability, backup, recovery, and support responsibilities.",
    statusText: "IMPLEMENTATION REVIEW REQUIRED",
    statusType: "orange",
  },
];

export default function DeploymentPatternsOverview() {
  const [selectedId, setSelectedId] = useState<string>("pattern-01");

  return (
    <div className="bg-[#FAF8F5] px-6 py-16 md:px-12 lg:px-16 text-[#1A1A1A] font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                DEPLOYMENT PATTERN OVERVIEW
              </span>
            </div>
            <h1 className="text-3xl md:text-[40px] font-bold tracking-tight text-[#1A1A1A] leading-[1.15]">
              Five canonical patterns, presented neutrally
            </h1>
          </div>
          <div className="max-w-md lg:pt-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Selecting a pattern filters the comparison below — it does not
              recommend. There is no winner badge, no default selection, and no
              checkmark implying legal or compliance suitability.
            </p>
          </div>
        </div>

        {/* Pattern Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {patterns.map((pattern) => {
            const isSelected = selectedId === pattern.id;

            let badgeBg = "#EAF5F0";
            let badgeBorder = "#1E7A5A";
            let badgeText = "#1E7A5A";

            if (pattern.statusType === "blue") {
              badgeBg = "#EAF1F9";
              badgeBorder = "#2F6FB0";
              badgeText = "#2F6FB0";
            } else if (pattern.statusType === "orange") {
              badgeBg = "#FBF2DF";
              badgeBorder = "#9C6B12";
              badgeText = "#9C6B12";
            }

            return (
              <div
                key={pattern.id}
                onClick={() => setSelectedId(pattern.id)}
                style={{
                  borderColor: isSelected ? "#0F476A" : "#DBE3E8",
                }}
                className="bg-white rounded-xl p-5 cursor-pointer transition-all duration-200 flex flex-col justify-between border-[1.5px] shadow-sm hover:shadow-md relative"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#999999] uppercase mb-2 block">
                    {pattern.number}
                  </span>
                  <h3 className="text-sm font-bold text-[#1A1A1A] mb-2 leading-snug">
                    {pattern.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-6">
                    {pattern.description}
                  </p>
                </div>

                {/* Small Status Div */}
                <div
                  style={{
                    backgroundColor: badgeBg,
                    borderColor: badgeBorder,
                    color: badgeText,
                  }}
                  className="text-[10px] font-mono font-bold px-2.5 py-1.5 rounded-[4px] border inline-flex items-center gap-1.5 w-full justify-center tracking-wide"
                >
                  {pattern.statusType === "green" && (
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  )}
                  {pattern.statusType === "blue" && (
                    <Settings className="w-3 h-3 stroke-[2.5]" />
                  )}
                  {pattern.statusType === "orange" && (
                    <AlertCircle className="w-3 h-3 stroke-[2.5]" />
                  )}
                  <span className="truncate">{pattern.statusText}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Preview Container using Next/Image */}
        <div className="w-full relative h-[420px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-[#DBE3E8] bg-white">
          <Image
            src="/deployment/5.png"
            alt="Deployment Patterns Comparison Overview"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
