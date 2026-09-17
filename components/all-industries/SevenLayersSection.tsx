"use client";

import React from "react";

interface LayerItem {
  title: string;
  description: string;
  tag: string;
}

const LAYERS: LayerItem[] = [
  {
    title: "Entity context",
    description:
      "Know which legal entity, business unit, fund, site, branch, facility or operating unit owns the action.",
    tag: "ENTITY TREE • CONTEXT CHIP",
  },
  {
    title: "Jurisdiction context",
    description:
      "Resolve country, state or province, regulator, filing authority, labor, tax, privacy or residency context at runtime.",
    tag: "JURISDICTION CHIP • EFFECTIVE DATE",
  },
  {
    title: "Authority & policy",
    description:
      "Evaluate role, delegation, segregation of duties, signatory authority, approval rule and policy before material execution.",
    tag: "DECISION PANEL",
  },
  {
    title: "Obligations",
    description:
      "Know what is due, why it is due, who owns it, and what evidence exists.",
    tag: "OBLIGATION REGISTER",
  },
  {
    title: "Evidence",
    description:
      "Preserve decision basis, workflow, documents, events and evidence manifests.",
    tag: "EVIDENCE DRAWER",
  },
  {
    title: "Integrations",
    description:
      "Keep source truth in the appropriate system and propagate governed events through explicit contracts.",
    tag: "INTEGRATION STATUS CARDS",
  },
  {
    title: "Governed intelligence",
    description:
      "Assist with anomaly detection, forecasting, extraction, prioritization and decision support within human and policy boundaries.",
    tag: "AI BOUNDARY PANEL",
  },
];

export default function SevenLayersSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
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
                WHAT STAYS GOVERNED EVERYWHERE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Seven layers, identical in every sector
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              These are the layers each industry page proves in its own context.
              The mechanism does not change.
            </p>
          </div>
        </div>

        {/* Layers List */}
        <div className="flex flex-col gap-3">
          {LAYERS.map((layer, index) => (
            <div
              key={index}
              className="bg-white text-[#08222F] rounded-lg p-5 lg:px-6 lg:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-[#DBE3E8]"
              style={{
                borderLeft: "3px solid #2A6386",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 lg:gap-12 w-full">
                {/* Title */}
                <h3 className="text-sm lg:text-base font-bold text-[#08222F] sm:w-48 shrink-0">
                  {layer.title}
                </h3>

                {/* Description */}
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed flex-1">
                  {layer.description}
                </p>
              </div>

              {/* Tag */}
              <div className="shrink-0 self-start sm:self-center">
                <span className="text-[10px] lg:text-xs font-mono font-bold tracking-wider text-[#A07A2E]">
                  {layer.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
