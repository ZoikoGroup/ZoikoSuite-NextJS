"use client";

import React from "react";
import { motion } from "framer-motion";

const lifecycleSteps = [
  {
    stage: "GOVERN",
    details:
      "Establish policy constraints, register organizational roles, and lock down compliance requirements.",
    owner: "OWNER: Security Committee / CISO",
    artifact: "ARTIFACT: Responsible AI Policy (v2.4), Threat Model Scope",
    status: "APPROVED",
    statusVariant: "green",
  },
  {
    stage: "MAP",
    details:
      "Identify data flow pathways, map external model boundaries, and define deterministic input/output scopes.",
    owner: "OWNER: Principal Security Architect",
    artifact: "ARTIFACT: Data Flow Diagram, Model Schema Registry",
    status: "VERIFIED",
    statusVariant: "green",
  },
  {
    stage: "MEASURE",
    details:
      "Run continuous adversarial testing, evaluate bias drift, and measure performance threshold margins daily.",
    owner: "OWNER: Lead QA Engineer / AI Red Team",
    artifact: "ARTIFACT: Adversarial Test Suite, Metric Scorecard",
    status: "ACTIVE TESTING",
    statusVariant: "blue",
  },
  {
    stage: "MANAGE",
    details:
      "Monitor live operations, track failure fallback loops, and govern multi-party approval keys.",
    owner: "OWNER: SecOps Incident Lead",
    artifact: "ARTIFACT: Dual-Auth Session Logs, Incident Playbook",
    status: "MONITORED",
    statusVariant: "green",
  },
];

const riskTiers = [
  {
    level: "Low Risk",
    treatment: "Continuous Log",
    description: "Passive logging. Zero action blocking. Standard audit path.",
  },
  {
    level: "Moderate Risk",
    treatment: "Analyst Sign-off",
    description: "Requires human-in-the-loop validation before suggesting policy updates.",
  },
  {
    level: "High Risk",
    treatment: "Dual-Auth Block",
    description: "Remediation blocked until two separate authorized security roles sign.",
  },
  {
    level: "Unacceptable Risk",
    treatment: "Hard Prohibited",
    description: "No AI usage allowed. Automated execution boundary blocks all requests.",
  },
];

export default function ResponsibleAiLifecycleSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              OPERATIONAL LIFECYCLE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            The NIST-Aligned Governance Lifecycle
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Governing AI deployment continuously without completion theater. Stages track required artifacts,
            ownership, and direct evidence access.
          </p>
        </div>

        {/* Lifecycle Steps */}
        <div className="flex flex-col gap-4">
          {lifecycleSteps.map((step, idx) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="bg-white p-5 sm:p-6 rounded-xl border border-[#123B4C]/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 hover:border-[#123B4C]/25 transition-all"
            >
              {/* Badge */}
              <div className="w-28 sm:w-32 shrink-0">
                <span className="font-mono text-lg font-extrabold text-[#C44242] tracking-wider">
                  {step.stage}
                </span>
              </div>

              {/* Details & Meta */}
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-xs sm:text-sm text-[#5B6670] leading-relaxed">
                  {step.details}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-[#7891B1]">
                  <span>{step.owner}</span>
                  <span className="hidden sm:inline">·</span>
                  <span>{step.artifact}</span>
                </div>
              </div>

              {/* Status Pill */}
              <div className="shrink-0">
                <span
                  className={`inline-block font-mono text-[11px] font-bold px-3 py-1 rounded-full ${
                    step.statusVariant === "green"
                      ? "bg-[#E4F0EC] text-[#1F7A6C]"
                      : "bg-[#DDEAF9] text-[#4E668A]"
                  }`}
                >
                  {step.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Risk Treatment Policy Dark Box */}
        <div className="bg-[#0A2440] text-white p-6 sm:p-8 rounded-xl shadow-md flex flex-col gap-5">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#E0967D] uppercase tracking-wider">
            <span>RISK TREATMENT POLICY (NO COMPLEXITY THEATER)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {riskTiers.map((tier) => (
              <div
                key={tier.level}
                className="bg-[#0D2E49] p-4 rounded-lg flex flex-col gap-2 border border-white/5"
              >
                <span className="text-base font-extrabold text-white">
                  {tier.level}
                </span>
                <span className="font-mono text-xs text-[#E0967D]">
                  {tier.treatment}
                </span>
                <p className="text-xs text-[#9FB8D6] leading-relaxed mt-1">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
