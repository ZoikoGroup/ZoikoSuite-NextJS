"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ControlDomain {
  id: string;
  label: string;
  description: string;
}

const controlDomains: ControlDomain[] = [
  {
    id: "policy",
    label: "POLICY",
    description: "Author, version, and effective-date the rules",
  },
  {
    id: "jurisdiction",
    label: "JURISDICTION",
    description: "Resolve rules by entity, market, and transaction",
  },
  {
    id: "workflow",
    label: "WORKFLOW",
    description: "Route work with deadlines and escalation",
  },
  {
    id: "authority",
    label: "AUTHORITY",
    description: "Model who may decide what, within which limits",
  },
  {
    id: "segregation",
    label: "SEGREGATION",
    description: "Detect conflicting roles at the decision",
  },
  {
    id: "evidence",
    label: "EVIDENCE",
    description: "Require, attach, and preserve supporting records",
  },
  {
    id: "audit",
    label: "AUDIT",
    description: "Keep reasons and outcomes retrievable",
  },
];

const decisionOutcomes = [
  { id: "permit", label: "Permit", type: "default" },
  { id: "require-approval", label: "Require approval", type: "default" },
  { id: "request-evidence", label: "Request evidence", type: "default" },
  { id: "escalate", label: "Escalate", type: "default" },
  { id: "block", label: "Block", type: "danger" },
  { id: "defer", label: "Defer pending professional review", type: "selected" },
];

export default function GovernanceControlPlaneSection() {
  const [activeDomain, setActiveDomain] = useState<string>("policy");
  const [activeOutcome, setActiveOutcome] = useState<string>("defer");

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side: Content & Domains */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#c5a059]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
              GOVERNANCE CONTROL PLANE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] mb-6">
            Governance is evaluated inside the action
          </h2>

          <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-8">
            Seven control domains operate as active logic, not as a policy
            library sitting beside the work.
          </p>

          {/* Control Domains List */}
          <div className="space-y-3.5 mb-10">
            {controlDomains.map((domain) => {
              const isSelected = activeDomain === domain.id;
              return (
                <div
                  key={domain.id}
                  onClick={() => setActiveDomain(domain.id)}
                  className={`cursor-pointer flex items-baseline gap-4 transition-all ${
                    isSelected ? "opacity-100" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  <span className="w-28 text-[11px] font-mono font-bold tracking-widest text-[#c5a059] shrink-0">
                    {domain.label}
                  </span>
                  <span className="text-xs sm:text-sm text-[#0f172a] font-medium">
                    {domain.description}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Decision Outcomes */}
          <div className="mb-10">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9ba4b5] block mb-3">
              DECISION OUTCOMES
            </span>
            <div className="flex flex-wrap gap-2">
              {decisionOutcomes.map((outcome) => {
                const isSelected = activeOutcome === outcome.id;
                return (
                  <button
                    key={outcome.id}
                    onClick={() => setActiveOutcome(outcome.id)}
                    className={`px-3.5 py-1.5 rounded-lg bg-white text-xs font-medium transition-all cursor-pointer border ${
                      isSelected
                        ? "text-[#c5a059] border-[#c5a059] shadow-xs ring-1 ring-[#c5a059]"
                        : outcome.type === "danger"
                          ? "bg-[#F9EDED] text-[#b91c1c] border-[#fca5a5] hover:bg-red-50"
                          : "bg-[#F6EDD9] text-[#64748b] border-[#DBE3E8] hover:border-[#9ba4b5]"
                    }`}
                  >
                    {outcome.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
            >
              Explore the governance control plane
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Right Side: Image Display Container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#DBE3E8] bg-[#08222F]">
            <img
              src="/governed-business-operations/1.png"
              alt="Governance Control Plane interface view"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
