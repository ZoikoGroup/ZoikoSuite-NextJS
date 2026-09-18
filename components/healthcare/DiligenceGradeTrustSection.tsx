"use client";

import React from "react";

const mainControls = [
  {
    title: "Identity & access",
    badge: "ARCHITECTURE REQUIREMENT",
    badgeBg: "bg-[#EAF1F9] text-[#2F6FB0] border-[#2F6FB0]",
    description:
      "SSO, MFA, workload identity, role/attribute/entity/facility authorization.",
  },
  {
    title: "Segregation of duties",
    badge: "ARCHITECTURE REQUIREMENT",
    badgeBg: "bg-[#EAF1F9] text-[#2F6FB0] border-[#2F6FB0]",
    description:
      "Preparer, reviewer, approver and executor independently permissioned.",
  },
  {
    title: "Audit & access evidence",
    badge: "IMPLEMENTED",
    badgeBg: "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]",
    description:
      "Governance and access events linked to actor, source, object and decision.",
  },
  {
    title: "Encryption",
    badge: "IMPLEMENTED",
    badgeBg: "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]",
    description:
      "At rest and in transit, stated per deployment rather than universally.",
  },
  {
    title: "Data sensitivity classification",
    badge: "IMPLEMENTED",
    badgeBg: "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]",
    description:
      "Public, internal, confidential and restricted classes with policy-aware access.",
  },
  {
    title: "PHI / ePHI handling",
    badge: "REQUIRES VALIDATION",
    badgeBg: "bg-[#FAF0F0] text-[#8A3B3B] border-[#8A3B3B]",
    description:
      "Scope, deployment and controls require explicit validation for the proposed use case.",
  },
  {
    title: "BAA availability",
    badge: "REQUIRES VALIDATION",
    badgeBg: "bg-[#FAF0F0] text-[#8A3B3B] border-[#8A3B3B]",
    description:
      "Not asserted here. Availability is confirmed only through product, privacy and legal review.",
  },
  {
    title: "Residency & regulated hosting",
    badge: "DEPLOYMENT-DEPENDENT",
    badgeBg: "bg-[#FBF2DF] text-[#9C6B12] border-[#9C6B12]",
    description:
      "Region, storage, processing, backup and key custody vary by deployment option.",
  },
  {
    title: "Healthcare certification",
    badge: "NOT VALIDATED",
    badgeBg: "bg-[#FAF0F0] text-[#8A3B3B] border-[#8A3B3B]",
    description:
      "No HITRUST, SOC, ISO or equivalent certification claim is made.",
  },
];

const highImpactSafeguards = [
  {
    title: "Step-up authorization",
    description:
      "Re-authentication required before a high-impact action is authorized, not merely before viewing.",
  },
  {
    title: "Segregation enforced before the offer",
    description:
      "If segregation would be violated, the action is not presented — rather than presented and then rejected.",
  },
  {
    title: "Irreversible actions gated",
    description:
      "Any action that cannot be undone requires named approval and produces its own evidence record.",
  },
  {
    title: "Restricted scope stays restricted",
    description:
      "Data excluded by classification or access scope stays excluded, with the exclusion stated rather than silently dropped.",
  },
  {
    title: "Export always audited",
    description:
      "Every permitted export records actor, purpose, destination and policy basis.",
  },
  {
    title: "Purpose recorded before access",
    description:
      "Where sensitive data is in scope, the recorded purpose precedes access and forms part of the evidence.",
  },
];

export default function DiligenceGradeTrustSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                SECURITY, SEGREGATION OF DUTIES, SENSITIVITY AND DEPLOYMENT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Diligence-grade trust with exact claim status
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Every control carries its status. Nothing is averaged into a
              posture score and no certification badge appears.
            </p>
          </div>
        </div>

        {/* Main Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {mainControls.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[14px] font-bold text-[#08222F]">
                    {item.title}
                  </h3>
                </div>
                <div className="mb-3">
                  <span
                    className={`inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${item.badgeBg}`}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="text-[12px] text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Sub-heading */}
        <div className="mb-6">
          <span className="text-[11px] font-mono font-bold tracking-widest text-gray-500 uppercase">
            HIGH-IMPACT ACTION SAFEGUARDS
          </span>
        </div>

        {/* High-Impact Action Safeguards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highImpactSafeguards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-gray-200 border-l-[3px] border-l-[#C59B3F] shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[14px] font-bold text-[#08222F] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[12px] text-gray-600 leading-relaxed">
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
