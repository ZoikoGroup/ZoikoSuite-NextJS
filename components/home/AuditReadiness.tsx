"use client";

import React from "react";
import { motion } from "framer-motion";

const layersData = [
  {
    layer: "LAYER 01",
    title: "Governance decision",
    description:
      "Actor, entity, jurisdiction, policy or rule basis, authorization outcome, and timestamp.",
  },
  {
    layer: "LAYER 02",
    title: "Workflow history",
    description:
      "Every state transition, approver, delegation, rejection, escalation, and rationale.",
  },
  {
    layer: "LAYER 03",
    title: "Document lineage",
    description:
      "Version, integrity hash, access history, signature status, retention, and residency policy.",
  },
  {
    layer: "LAYER 04",
    title: "Operational event",
    description:
      "Typed event, source service, object, actor or system principal, correlation, and causation.",
  },
  {
    layer: "LAYER 05",
    title: "Evidence manifest",
    description:
      "A scenario-specific package linking the relevant decisions, documents, workflows, and source records.",
  },
  {
    layer: "LAYER 06",
    title: "Integrity controls",
    description:
      "Append-only records, tamper-evident chains, and cryptographic validation where implemented.",
  },
] as const;

export default function AuditReadiness() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-3xl">
            {/* Subtitle with line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                Evidence & Audit Readiness
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-white">
              Prove the control operated
            </h2>
          </div>

          {/* Right Subtitle Description */}
          <div className="max-w-[440px]">
            <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed">
              Evidence is a primary product capability, not a footer-level
              compliance claim. Six layers are captured as work happens.
            </p>
          </div>
        </motion.div>

        {/* 6 Cards Grid (3x2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {layersData.map((item, index) => (
            <div
              key={index}
              className="bg-[#0C2A38] border border-[#1C4055] rounded-2xl p-8 flex flex-col justify-between shadow-xl backdrop-blur-md"
            >
              <div>
                <span className="text-[11px] font-medium tracking-[0.15em] text-[#c5a059] uppercase block mb-3">
                  {item.layer}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-[#9ba4b5] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Image Showcase with Left Golden Accent Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="relative w-full rounded-r-2xl rounded-[14px] border-l-4 border-l-[#D0AA55] overflow-hidden"
        >
          <img
            src="/home/im.png"
            alt="Team reviewing audit evidence trails and holographic analytics dashboards"
            className="w-full h-auto object-cover block"
          />
        </motion.div>
      </div>
    </section>
  );
}
