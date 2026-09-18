"use client";

import React from "react";

interface IntegrationItem {
  title: string;
  description: string;
  badge: string;
  badgeType?: "default" | "orange" | "yellow";
}

const integrationItems: IntegrationItem[] = [
  {
    title: "Ingested evidence",
    description:
      "Captured from a source system with source metadata and provenance recorded at ingestion.",
    badge: "SOURCE-RECORDED",
    badgeType: "default",
  },
  {
    title: "Referenced evidence",
    description:
      "Pointer to a record held elsewhere. Custody, retention and deletion remain with the source system.",
    badge: "EXTERNAL / REFERENCED",
    badgeType: "orange",
  },
  {
    title: "Provenance metadata",
    description:
      "Source service, ingestion time, transformation applied and correlation reference.",
    badge: "ARCHITECTURE REQUIREMENT",
    badgeType: "default",
  },
  {
    title: "API and webhook access",
    description:
      "Programmatic retrieval of evidence objects, subject to the same access and classification rules.",
    badge: "PHASED DELIVERY",
    badgeType: "yellow",
  },
];

export default function AuditPackagesSection() {
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
                AUDIT PACKAGES, RETENTION AND RESIDENCY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Export is a governed action with its own evidence
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Assembling a diligence package is itself an event: who exported
              what, for what purpose, to where, under which approval.
            </p>
          </div>
        </div>

        {/* Top 2 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Package Assembly and Export Card */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#9CA3AF] uppercase block mb-6">
                PACKAGE ASSEMBLY AND EXPORT
              </span>
              <ul className="space-y-3 text-[14px] text-[#4B5563] mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] mt-1">•</span>
                  <span>Scenario template defines the required items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] mt-1">•</span>
                  <span>Completeness computed and stated before export</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] mt-1">•</span>
                  <span>
                    Export requires approval where restricted content is in
                    scope
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] mt-1">•</span>
                  <span>
                    Export event records actor, purpose, destination and
                    approval
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] mt-1">•</span>
                  <span>
                    Restricted exclusions stated in the package, not applied
                    silently
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <span className="inline-block w-full px-3 py-1 rounded text-[10px] font-mono font-bold tracking-wider bg-[#FEFCE8] text-[#854D0E] border border-[#FEF08A]">
                PHASED DELIVERY
              </span>
            </div>
          </div>

          {/* Retention, Holds and Residency Card */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#9CA3AF] uppercase block mb-6">
                RETENTION, HOLDS AND RESIDENCY
              </span>
              <ul className="space-y-3 text-[14px] text-[#4B5563]">
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] mt-1">•</span>
                  <span>Evidence follows its own retention reference</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] mt-1">•</span>
                  <span>An active legal hold blocks evidence deletion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] mt-1">•</span>
                  <span>
                    Evidence residency follows the governed-records position
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] mt-1">•</span>
                  <span>
                    External references follow their source system&apos;s rules
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* External Evidence and Integrations Section */}
        <div className="mt-16">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#9CA3AF] uppercase block mb-6">
            EXTERNAL EVIDENCE AND INTEGRATIONS
          </span>
          <div className="space-y-4">
            {integrationItems.map((item, index) => {
              let badgeStyle = "bg-[#F3F4F6] text-[#374151] border-[#E5E7EB]";
              if (item.badgeType === "orange") {
                badgeStyle = "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]";
              } else if (item.badgeType === "yellow") {
                badgeStyle = "bg-[#FEFCE8] text-[#854D0E] border-[#FEF08A]";
              }

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border-l-4 border-l-[#0F476A] border border-[#E5E7EB] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="max-w-md">
                    <h3 className="text-base font-bold text-[#111827] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#4B5563]">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider border ${badgeStyle}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
