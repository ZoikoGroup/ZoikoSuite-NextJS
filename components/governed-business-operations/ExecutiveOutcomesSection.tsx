"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface RoleContent {
  id: string;
  name: string;
  title: string;
  description: string;
  pills: string[];
  buttonText: string;
  priorityChallenge: {
    title: string;
    proof: string;
    diligence: string;
  };
}

const rolesData: RoleContent[] = [
  {
    id: "cfo",
    name: "CFO",
    title: "Govern approvals, treasury, and close across entities",
    description:
      "Govern approvals, treasury, revenue, close, controls, multi-entity operations, and evidence.",
    pills: [
      "Authority thresholds",
      "Multi-entity close",
      "Evidence health",
      "Control effectiveness",
    ],
    buttonText: "Explore ZoikoSuite for CFOs",
    priorityChallenge: {
      title: "Authority and evidence across a multi-entity close",
      proof:
        "Proof to review: the policy decision record and the scope matrix.",
      diligence: "Diligence resource: Evidence Architecture brief.",
    },
  },
  {
    id: "general-counsel",
    name: "General Counsel",
    title: "Govern policy inheritance, jurisdiction claims, and compliance",
    description:
      "Govern regulatory alignment, global baseline policies, local exceptions, and legal entity structures.",
    pills: [
      "Jurisdiction intelligence",
      "Policy inheritance",
      "Legal entity boundaries",
      "Regulatory alignment",
    ],
    buttonText: "Explore ZoikoSuite for General Counsel",
    priorityChallenge: {
      title: "Local jurisdiction exceptions under a global compliance baseline",
      proof:
        "Proof to review: the policy override logs and jurisdiction matrix.",
      diligence: "Diligence resource: Jurisdiction Intelligence brief.",
    },
  },
  {
    id: "cio",
    name: "CIO",
    title: "Govern integrations, service identities, and system boundaries",
    description:
      "Govern integration reliability, automated actions, bounded service identities, and audit logging.",
    pills: [
      "Service identity boundaries",
      "Integration events",
      "System audit logging",
      "Data residency",
    ],
    buttonText: "Explore ZoikoSuite for CIOs",
    priorityChallenge: {
      title: "Bounded service identities across asynchronous integrations",
      proof:
        "Proof to review: the service authorization tokens and execution trace.",
      diligence: "Diligence resource: Platform Foundation architecture brief.",
    },
  },
  {
    id: "chro",
    name: "CHRO",
    title: "Govern workforce compliance, delegations, and role segregation",
    description:
      "Govern personnel authority limits, delegation workflows, segregation of duties, and HR record linkages.",
    pills: [
      "Delegated authority",
      "Segregation of duties",
      "Workforce compliance",
      "Approval routing",
    ],
    buttonText: "Explore ZoikoSuite for CHROs",
    priorityChallenge: {
      title: "Segregation of duties and delegation limits in workforce changes",
      proof: "Proof to review: the authority matrix and exception logs.",
      diligence: "Diligence resource: Workforce Compliance brief.",
    },
  },
  {
    id: "coo",
    name: "COO",
    title: "Govern operational throughput, controls, and exception handling",
    description:
      "Govern cross-functional workflows, control effectiveness, operational throughput, and exception resolution.",
    pills: [
      "Operational throughput",
      "Control effectiveness",
      "Exception handling",
      "Cross-functional workflows",
    ],
    buttonText: "Explore ZoikoSuite for COOs",
    priorityChallenge: {
      title:
        "Operational throughput without compromising control effectiveness",
      proof: "Proof to review: the decision cycle metrics and control logs.",
      diligence:
        "Diligence resource: Continuous Operational Intelligence brief.",
    },
  },
];

export default function ExecutiveOutcomesSection() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>("cfo");

  const activeRole =
    rolesData.find((r) => r.id === selectedRoleId) || rolesData[0];

  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                EXECUTIVE OUTCOMES AND BUYER PATHWAYS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-xl">
              The category does not change by role. The proof you need does.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
            Five primary decision makers, seven secondary stakeholders, one
            category definition.
          </p>
        </div>

        {/* Role Selector Pills */}
        <div className="w-full flex flex-wrap items-center gap-3 pb-8 border-b border-[#DBE3E8] mb-10">
          {rolesData.map((role) => {
            const isSelected = selectedRoleId === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRoleId(role.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#0F476A] text-white border-[#0F476A] shadow-sm"
                    : "bg-white text-[#64748b] border-[#DBE3E8] hover:border-[#9ba4b5]"
                }`}
              >
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D0AA55]" />
                )}
                {role.name}
              </button>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mb-10">
          {/* Left Side: Role Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4">
                {activeRole.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-6">
                {activeRole.description}
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activeRole.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white text-[#0f172a] border border-[#DBE3E8]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
              >
                {activeRole.buttonText}
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Right Side: Priority Challenge Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#DBE3E8] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748b] block mb-4">
                PRIORITY CHALLENGE
              </span>
              <h4 className="text-lg font-bold text-[#0f172a] mb-4">
                {activeRole.priorityChallenge.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-3">
                {activeRole.priorityChallenge.proof}
              </p>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-6">
                {activeRole.priorityChallenge.diligence}
              </p>
            </div>

            <div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F476A] hover:underline"
              >
                See the proof
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Stakeholders Footer Box */}
        <div className="w-full bg-white rounded-2xl border-l-4 border-l-[#c5a059] border border-[#DBE3E8] p-6 mb-8 shadow-xs">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748b] block mb-2">
            SECONDARY STAKEHOLDERS
          </span>
          <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
            Controllers · Tax Leaders · Compliance Leaders · Audit Committees ·
            Boards · Procurement · Regulators — each routed through the same
            category model with role-appropriate visibility and read-only
            evidence packages where relevant.
          </p>
        </div>

        {/* Disclaimer Text */}
        <div className="w-full text-left">
          <p className="text-[11px] text-[#9ba4b5] leading-relaxed border-l-2 border-[#c5a059] pl-3">
            Role selection changes examples and recommended links only. No
            personalization is inferred without consent.
          </p>
        </div>
      </div>
    </section>
  );
}
