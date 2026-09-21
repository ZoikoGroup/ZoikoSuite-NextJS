"use client";

import React from "react";
import { motion } from "framer-motion";

const matrixCards = [
  {
    title: "Accountability & Control",
    systemControl:
      "Dual-party multi-signature approval required for any write/remediation action.",
    evidence:
      "Cryptographic keys embedded directly into the immutable audit ledger log.",
  },
  {
    title: "Transparency & Boundaries",
    systemControl:
      "Explicit capability registration, data isolation tags, and zero-training DPA boundaries.",
    evidence:
      "Provider-certified data-deletion webhooks and registry config verification logs.",
  },
  {
    title: "Security & Privacy",
    systemControl:
      "Input scrubbing (PII filters) and continuous automated prompt-injection testing.",
    evidence:
      "Real-time sanitization logs and daily adversarial evaluation reports.",
  },
  {
    title: "Reliability & Traceability",
    systemControl:
      "Deterministic execution mapping with raw source telemetry telemetry linkage.",
    evidence:
      "Host process execution logs paired with cryptographically signed EDR telemetry.",
  },
  {
    title: "Change Governance",
    systemControl:
      "Any model version or prompt update triggers complete regression and bias testing.",
    evidence:
      "Automated regression scorecard signed by Lead Architect on rollout.",
  },
  {
    title: "Human Checkpoint Enforce",
    systemControl:
      "No AI output is authorized to trigger API calls directly. Action boundaries locked.",
    evidence:
      "Strict API session authorization tokens requiring human JWT validation.",
  },
];

export default function ResponsibleAiOperationalMatrixSection() {
  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              CONTROL SYSTEM MATRIX
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            Operational Matrix: Principles to Defensible Evidence
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            How high-level commitments translate into concrete system constraints and verifiable cryptographic evidence.
          </p>
        </div>

        {/* Grid of 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {matrixCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-white p-6 rounded-xl border border-[#123B4C]/10 shadow-sm flex flex-col justify-between gap-5 transition-all hover:shadow-md hover:border-[#123B4C]/20"
            >
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2029]">
                {card.title}
              </h3>

              {/* System Control */}
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] font-bold text-[#C44242] uppercase tracking-wider">
                  SYSTEM CONTROL
                </span>
                <p className="text-xs sm:text-sm text-[#5B6670] leading-relaxed">
                  {card.systemControl}
                </p>
              </div>

              {/* Verifiable Evidence */}
              <div className="flex flex-col gap-1.5 pt-2 border-t border-[#123B4C]/10">
                <span className="font-mono text-[11px] font-bold text-[#1F7A6C] uppercase tracking-wider">
                  VERIFIABLE EVIDENCE
                </span>
                <p className="text-xs text-[#4E668A] leading-relaxed">
                  {card.evidence}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
