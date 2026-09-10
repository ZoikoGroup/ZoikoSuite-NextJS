"use client";

import React from "react";
import { motion } from "framer-motion";

interface ArchitectureRow {
  claim: string;
  claimColor: "red" | "blue" | "dark";
  reality: string;
}

const architectureTable: ArchitectureRow[] = [
  {
    claim: "NO SILENT ALLOW",
    claimColor: "red",
    reality: "If a required connector is degraded, the affected controls are flagged for review and not silently bypassed as pass-through.",
  },
  {
    claim: "NEVER SELF-EVALUATING",
    claimColor: "blue",
    reality: "Every control evaluation requires documented authorization outside the module being evaluated.",
  },
  {
    claim: "SEGREGATION OF DUTIES",
    claimColor: "dark",
    reality: "An override require distinct authority and distinct justification; it is never a permission rolled into general administrative root. There is a permanent audit trail.",
  },
  {
    claim: "HISTORICAL INTEGRITY",
    claimColor: "blue",
    reality: "A decision record retains policy versions and source states evaluated at the time, even after later revisions.",
  },
];

export default function GovernanceControlPlaneOrchestratorSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#f0eee6]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, Description & Box */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                GOVERNANCE CONTROL PLANE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14] mb-6">
              An orchestrator, not a
              <br />
              second copy of every
              <br />
              control
            </h2>

            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed mb-6 font-normal">
              The control plane composes outputs from policy, jurisdiction, workflow, authority, segregation, evidence and professional-review controls into one decision context and one auditable record. Being explicit about what it does not own is what keeps the architecture honest.
            </p>

            {/* What It Does Not Own Box */}
            <div className="rounded-2xl border border-[#e2ddd3] bg-[#faf8f5] p-5">
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#8fa4b2] uppercase block mb-3">
                WHAT IT DOES NOT OWN
              </span>
              <ul className="space-y-2 text-xs text-[#475569] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#c5a059]">•</span>
                  <span><strong>Authoring policy lifecycle</strong> — owned by Policy Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5a059]">•</span>
                  <span><strong>Jurisdiction source library</strong> — owned by Jurisdiction Intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5a059]">•</span>
                  <span><strong>Evidence vault ingestion</strong> — owned by Evidence Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5a059]">•</span>
                  <span><strong>Analytics data lake &amp; reporting data aggregation</strong> — owned by Governance Analytics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Architectural Invariants Table */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-[10.5px] font-mono font-bold tracking-[0.16em] text-[#8fa4b2] uppercase block mb-3">
              ARCHITECTURAL INVARIANTS
            </span>

            <div className="rounded-xl border border-[#e2e8f0] bg-white overflow-hidden shadow-xs divide-y divide-[#edf2f7]">
              {architectureTable.map((row, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start gap-3 hover:bg-[#f8fafc] transition-colors">
                  <div className="w-48 shrink-0">
                    {row.claimColor === "red" && (
                      <span className="px-2 py-0.5 rounded bg-[#fef2f2] border border-[#fecaca] text-[9.5px] font-mono font-bold text-[#b91c1c] uppercase tracking-wider inline-block">
                        {row.claim}
                      </span>
                    )}
                    {row.claimColor === "blue" && (
                      <span className="px-2 py-0.5 rounded bg-[#eff6ff] border border-[#dbeafe] text-[9.5px] font-mono font-bold text-[#1d4ed8] uppercase tracking-wider inline-block">
                        {row.claim}
                      </span>
                    )}
                    {row.claimColor === "dark" && (
                      <span className="px-2 py-0.5 rounded bg-[#f1f5f9] border border-[#cbd5e1] text-[9.5px] font-mono font-bold text-[#334155] uppercase tracking-wider inline-block">
                        {row.claim}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {row.reality}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
