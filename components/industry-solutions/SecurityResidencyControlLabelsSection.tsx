"use client";

import React from "react";

interface ControlLabelItem {
  title: string;
  badge: string;
  badgeVariant: "blue" | "green" | "yellow" | "gray" | "red";
  description: string;
}

const CONTROL_ITEMS: ControlLabelItem[] = [
  {
    title: "Zero-trust access",
    badge: "ARCHITECTURE REQUIREMENT",
    badgeVariant: "blue",
    description: "Identity-verified access with no implicit network trust.",
  },
  {
    title: "Segregation of duties",
    badge: "ARCHITECTURE REQUIREMENT",
    badgeVariant: "blue",
    description:
      "Preparer, reviewer, approver and executor independently permissioned.",
  },
  {
    title: "Workload identity",
    badge: "ARCHITECTURE REQUIREMENT",
    badgeVariant: "blue",
    description: "Service principals are named actors in the evidence record.",
  },
  {
    title: "Encryption in transit and at rest",
    badge: "IMPLEMENTED",
    badgeVariant: "green",
    description: "Stated per deployment rather than as a universal claim.",
  },
  {
    title: "Audit and evidence telemetry",
    badge: "IMPLEMENTED",
    badgeVariant: "green",
    description:
      "Governance decisions linked to actor, source, object and evidence.",
  },
  {
    title: "Customer-managed keys",
    badge: "DEPLOYMENT-DEPENDENT",
    badgeVariant: "yellow",
    description:
      "Availability varies by deployment option and approved region.",
  },
  {
    title: "Region-aware residency",
    badge: "DEPLOYMENT-DEPENDENT",
    badgeVariant: "yellow",
    description:
      "A primary storage region does not imply every lifecycle stage stays in region.",
  },
  {
    title: "Sovereign operations",
    badge: "ROADMAP",
    badgeVariant: "gray",
    description:
      "Not currently available. Requirements can be discussed with an architect.",
  },
  {
    title: "Independent certification",
    badge: "NOT VALIDATED",
    badgeVariant: "red",
    description:
      "No certified, compliant, authorized or attested claim is made.",
  },
];

export default function SecurityResidencyControlLabelsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid: Second element (subtitle) has full width support / alignment inside its grid cell */}
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
                SECURITY, RESIDENCY AND SOVEREIGN OPERATIONS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Four control labels, applied per item
            </h2>
          </div>

          {/* Right Subtitle Area: Full width across its container span */}
          <div className="lg:col-span-5 flex items-start w-full">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed w-full">
              Architecture requirement, implemented, roadmap, or
              deployment-dependent. Nothing is averaged into a posture score,
              and no certification is claimed.
            </p>
          </div>
        </div>

        {/* 3x3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONTROL_ITEMS.map((item, index) => {
            let badgeClass = "bg-[#EFF3F8] text-[#3B648C] border-[#CBD8E6]";
            if (item.badgeVariant === "green") {
              badgeClass = "bg-[#EFF8F4] text-[#1E7A5A] border-[#B6D8C7]";
            } else if (item.badgeVariant === "yellow") {
              badgeClass = "bg-[#F6EDD9] text-[#A07A2E] border-[#C9B07A]";
            } else if (item.badgeVariant === "gray") {
              badgeClass = "bg-[#EEF2F5] text-[#5A6D79] border-[#DBE3E8]";
            } else if (item.badgeVariant === "red") {
              badgeClass = "bg-[#FDF2F2] text-[#9B3B3B] border-[#E8BCBC]";
            }

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-[#DBE3E8] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-3">
                    {item.title}
                  </h3>

                  <div className="mb-4">
                    <p
                      className={`inline-block px-2 py-1 rounded text-[10px] font-mono font-bold tracking-wider border ${badgeClass}`}
                    >
                      {item.badge}
                    </p>
                  </div>

                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
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
