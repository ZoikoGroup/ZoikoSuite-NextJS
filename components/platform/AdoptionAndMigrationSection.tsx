"use client";

import React from "react";

interface AdoptionStage {
  stage: string;
  title: string;
  description: string;
}

const adoptionStages: AdoptionStage[] = [
  {
    stage: "STAGE 1",
    title: "Discover",
    description:
      "Map systems, data sources, controls, owners, and target outcomes.",
  },
  {
    stage: "STAGE 2",
    title: "Connect",
    description:
      "Establish approved integrations / data exchange for selected scope.",
  },
  {
    stage: "STAGE 3",
    title: "Shadow / observe",
    description:
      "Compare platform-derived context alongside existing operations where supported.",
  },
  {
    stage: "STAGE 4",
    title: "Govern / activate",
    description:
      "Introduce approved governance, evidence, and module workflows in controlled scope.",
  },
  {
    stage: "STAGE 5",
    title: "Expand / optimize",
    description:
      "Extend modules, entities, contexts, and operating intelligence based on validated needs.",
  },
];

export default function AdoptionAndMigrationSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
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
              ADOPTION & MIGRATION
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-6">
            Adopt the platform without forcing an all-at-once replacement.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed">
            Connect existing systems, observe and map current operating signals,
            introduce governance and evidence, enable modules in scope, then
            expand when the organization is ready. Exact migration plans remain
            deployment-specific.
          </p>
        </div>

        {/* Stages Grid (5 columns on desktop) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          {adoptionStages.map((item, index) => (
            <div key={index} className="relative flex items-center h-full">
              {/* Stage Card */}
              <div className="w-full bg-white border border-[#D9D3C7] rounded-2xl p-5 flex flex-col justify-between shadow-sm transition-all hover:border-[#C59B3F] h-full">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
