"use client";

import React from "react";
import { motion } from "framer-motion";

const evidenceRegistry = [
  {
    title: "Responsible AI Overview",
    description:
      "High-level control mapping, NIST AI RMF framework alignment, and principle checklist.",
    status: "Publicly Available",
    variant: "green",
  },
  {
    title: "Capability Register Ledger",
    description:
      "Active models, explicit purposes, limitations, and owner metadata lists.",
    status: "Publicly Available",
    variant: "green",
  },
  {
    title: "Risk Assessment Report",
    description:
      "Threat vectors, attack surface boundaries, and mitigation scorecard artifacts.",
    status: "Controlled Access",
    variant: "amber",
  },
  {
    title: "Daily Evaluation Suite Run",
    description:
      "Detailed adversarial test results, bias margins, and sanitization verification outputs.",
    status: "Available on Request",
    variant: "blue",
  },
  {
    title: "Third-Party DPA Agreements",
    description:
      "OpenAI and Anthropic isolated data residency and zero-training legal commitments.",
    status: "Internal Only",
    variant: "red",
  },
  {
    title: "Change Log History",
    description:
      "Full material rollout scorecards, rollback triggers, and audit manifests.",
    status: "Controlled Access",
    variant: "amber",
  },
];

export default function ResponsibleAiEvidenceProcurementSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              COMPLIANCE EVIDENCE RECONCILIATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            Evidence & Procurement Registry
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Verifiable compliance artifacts matching organizational audit guidelines. Access states are locked to authorized workspace tenants.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {evidenceRegistry.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="bg-white p-6 rounded-xl border border-[#123B4C]/10 shadow-sm flex flex-col justify-between gap-4 hover:shadow-md transition-all"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0A2029]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6670] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div>
                <span
                  className={`inline-block font-mono text-[11px] font-bold px-3 py-1 rounded-full ${
                    item.variant === "green"
                      ? "bg-[#E4F0EC] text-[#1F7A6C]"
                      : item.variant === "amber"
                      ? "bg-[#FEF3C7] text-[#B45309]"
                      : item.variant === "blue"
                      ? "bg-[#DDEAF9] text-[#4E668A]"
                      : "bg-[#FBEFEF] text-[#A43737]"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
