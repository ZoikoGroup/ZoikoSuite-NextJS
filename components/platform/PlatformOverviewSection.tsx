"use client";

import React from "react";

interface PlatformItem {
  number: string;
  category: string;
  title: string;
  description: string;
}

const platformItems: PlatformItem[] = [
  {
    number: "01",
    category: "FOUNDATION",
    title: "Platform Foundation",
    description:
      "Shared architecture, capabilities, services, and operating layers beneath ZoikoSuite.",
  },
  {
    number: "02",
    category: "GOVERNANCE",
    title: "Governance Platform",
    description:
      "Policies, approvals, permissions, controls, exceptions, and evidence that govern work.",
  },
  {
    number: "03",
    category: "MODULES",
    title: "Core Modules",
    description:
      "Modular product capabilities surfaced from the approved module registry.",
  },
  {
    number: "04",
    category: "INSIGHT",
    title: "Operating Intelligence",
    description:
      "Contextual visibility across work, controls, evidence, status, and exceptions.",
  },
];

export default function PlatformOverviewSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header / Intro text */}
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
              PLATFORM OVERVIEW
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-6">
            One governed layer across fragmented business operations.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-4xl">
            Enterprises already have systems for records, workflows,
            collaboration, finance, identity, and reporting. ZoikoSuite is
            designed to coordinate governance, evidence, modular capability, and
            operating insight across that estate — so decisions can carry the
            context and controls that matter without requiring every system to
            be replaced.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#C59B3F]"
            >
              <div>
                {/* Card Eyebrow */}
                <div
                  className="text-[11px] font-mono font-bold tracking-wider mb-3"
                  style={{ color: "#C59B3F" }}
                >
                  {item.number} · {item.category}
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-[#08222F] mb-3 leading-snug">
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
