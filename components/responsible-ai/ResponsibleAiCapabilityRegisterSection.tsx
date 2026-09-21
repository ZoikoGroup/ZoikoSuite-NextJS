"use client";

import React from "react";

const capabilities = [
  {
    capability: "Alert Summarizer",
    purpose: "Consolidation of heterogeneous EDR Process Execution maps",
    controlLevel: "Informational ONLY",
    modelProvider: "Azure OpenAI GPT-4o",
    limitations: "Stale context if live stream is disconnected >10m",
    metadata: "Verified Mar 1, 2026. Review due in 24 days.",
  },
  {
    capability: "Remediation Adviser",
    purpose: "Suggesting containment steps for host breaches",
    controlLevel: "Advisory: Analyst signs off",
    modelProvider: "Anthropic Claude 3.5 Sonnet",
    limitations: "Cannot directly run script, suggests raw YAML syntax",
    metadata: "Verified Feb 28, 2026. Review due in 12 days.",
  },
  {
    capability: "Policy Gap Parser",
    purpose: "Comparing Entra ID role elevation to Intune posture",
    controlLevel: "Workflow Assist (Drafting)",
    modelProvider: "Azure OpenAI GPT-4-Turbo",
    limitations: "Limited to current OIDC directory schemas, no inference",
    metadata: "Verified Mar 3, 2026. Review due in 28 days.",
  },
  {
    capability: "Evidence Audit Logger",
    purpose: "Generating verification ledger summaries for audits",
    controlLevel: "Bounded Automation (Safe)",
    modelProvider: "Internal Zoiko-T5 Small",
    limitations: "Relies entirely on validated cryptographic hashes in ledger",
    metadata: "Verified Jan 15, 2026. Review due in 45 days.",
  },
];

export default function ResponsibleAiCapabilityRegisterSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              AI INTEGRATION REGISTRY
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            Public AI Capability Register
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Transparency ledger tracking active deployment of AI helper models. We list purpose,
            human authority bounds, model state, and known constraints.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#123B4C]/10 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[980px]">
              <thead>
                <tr className="bg-[#F0EDE6] border-b border-[#123B4C]/10 text-[12px] font-mono font-bold text-[#0A2029] uppercase tracking-wider">
                  <th className="py-4 px-6 w-[180px]">CAPABILITY</th>
                  <th className="py-4 px-6 w-[220px]">EXPLICIT PURPOSE</th>
                  <th className="py-4 px-6 w-[180px]">HUMAN CONTROL LEVEL</th>
                  <th className="py-4 px-6 w-[160px]">MODEL / PROVIDER</th>
                  <th className="py-4 px-6 w-[240px]">PRIMARY LIMITATIONS</th>
                  <th className="py-4 px-6">REASSESSMENT METADATA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#123B4C]/10 text-xs">
                {capabilities.map((item) => (
                  <tr
                    key={item.capability}
                    className="hover:bg-[#F7F5F0]/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-[#0A2029] text-[13.5px]">
                      {item.capability}
                    </td>
                    <td className="py-4 px-6 text-[#5B6670] leading-relaxed">
                      {item.purpose}
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#C44242]">
                      {item.controlLevel}
                    </td>
                    <td className="py-4 px-6 font-mono text-[#5B6670]">
                      {item.modelProvider}
                    </td>
                    <td className="py-4 px-6 text-[#A43737] leading-relaxed">
                      {item.limitations}
                    </td>
                    <td className="py-4 px-6 font-mono text-[#7891B1]">
                      {item.metadata}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
