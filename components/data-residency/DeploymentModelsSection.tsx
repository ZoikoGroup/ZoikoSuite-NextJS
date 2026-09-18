"use client";

import React from "react";

interface DeploymentModel {
  title: string;
  storage: string;
  processing: string;
  backup: string;
  replication: string;
  keyCustody: string;
  supportAccess: string;
  description: string;
  statusText: string;
  isLast?: boolean;
}

const models: DeploymentModel[] = [
  {
    title: "Multi-tenant SaaS",
    storage: "Storage: region-selectable",
    processing: "Processing: region-aligned",
    backup: "Backup: region target",
    replication: "Replication: platform-managed",
    keyCustody: "Key custody: provider-managed",
    supportAccess: "Support access: per support model",
    description:
      "Lowest configurability. Suitable where storage-region constraint is the requirement.",
    statusText: "AVAILABLE",
  },
  {
    title: "Dedicated environment",
    storage: "Storage: region-selectable",
    processing: "Processing: region-aligned",
    backup: "Backup: configurable target",
    replication: "Replication: configurable",
    keyCustody: "Key custody: provider or customer",
    supportAccess: "Support access: scoped per engagement",
    description:
      "Most residency constraints achievable here. Availability by region.",
    statusText: "BY DEPLOYMENT",
  },
  {
    title: "Single-tenant enterprise",
    storage: "Storage: region-selectable",
    processing: "Processing: isolated, region-aligned",
    backup: "Backup: configurable target",
    replication: "Replication: configurable or disabled",
    keyCustody: "Key custody: customer options",
    supportAccess: "Support access: scoped and logged",
    description:
      "Highest isolation short of sovereign. Eligibility confirmed per engagement.",
    statusText: "BY DEPLOYMENT",
  },
  {
    title: "Sovereign / customer-controlled",
    storage: "Storage: sovereign region",
    processing: "Processing: sovereign boundary",
    backup: "Backup: within boundary",
    replication: "Replication: within boundary",
    keyCustody: "Key custody: subject to requirements",
    supportAccess: "Support access: subject to requirements",
    description:
      "Not currently available. Subject to legal, operational, technical and commercial feasibility.",
    statusText: "FEASIBILITY-GATED",
    isLast: true,
  },
];

export default function DeploymentModelsSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                DEPLOYMENT MODELS AND RESIDENCY IMPLICATIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              What is achievable depends on how you deploy
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Four models. The residency constraints each can satisfy differ
              materially, and the sovereign option is feasibility-gated rather
              than simply available at a price.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {models.map((model, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #0F476A",
                borderTop: "3px solid #0F476A",
                backgroundColor: model.isLast ? "#F7F5F0" : "white",
              }}
              className="rounded-2xl p-4 flex flex-col justify-between shadow-sm"
            >
              <div>
                <h3 className="text-sm font-bold text-[#16262F] mb-1">
                  {model.title}
                </h3>
                <div className="space-y-1.5 text-[9px] font-mono text-[#5A6D79] mb-2">
                  <p>{model.storage}</p>
                  <p>{model.processing}</p>
                  <p>{model.backup}</p>
                  <p>{model.replication}</p>
                  <p>{model.keyCustody}</p>
                  <p>{model.supportAccess}</p>
                </div>
              </div>

              <div>
                <div className="border-t border-dashed border-[#DBE3E8] mb-2">
                  <p className="text-[11px] text-[#6B2626] leading-relaxed">
                    {model.description}
                  </p>
                </div>
                <div className="w-full rounded-lg border border-[#E5E7EB] text-center bg-white/50">
                  <span className="text-[8.5px] font-mono font-bold tracking-wider text-[#0F476A]">
                    {model.statusText}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
