"use client";

import React from "react";

interface ResourceCard {
  audience: string;
  title: string;
  description: string;
}

const resources: ResourceCard[] = [
  {
    audience: "EXECUTIVES · BOARDS · PROCUREMENT",
    title: "Executive Platform Brief",
    description: "Category, governance model, and the operating case.",
  },
  {
    audience: "CFO · CIO · PROCUREMENT",
    title: "Why ZoikoSuite Is Not an ERP",
    description:
      "Clarify coexistence with systems of record and transaction platforms.",
  },
  {
    audience: "ARCHITECTURE · RISK · AUDIT",
    title: "Governance Architecture Brief",
    description:
      "Policy evaluation, authority resolution, evidence and execution path.",
  },
  {
    audience: "CISO · PRIVACY · PROCUREMENT",
    title: "Security & Trust Brief",
    description:
      "Control objectives, claim status, deployment/residency model.",
  },
];

export default function ResourceCenterSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-8">
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
              RESOURCE CENTER
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15]">
            Self-directed diligence, before any conversation.
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#C59B3F]"
            >
              <div>
                {/* Audience Tag */}
                <div className="text-[10px] font-mono font-bold tracking-wider uppercase mb-3 text-[#C59B3F]">
                  {item.audience}
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-[#08222F] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-gray-600 leading-relaxed font-mono">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
