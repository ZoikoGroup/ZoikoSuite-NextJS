"use client";

import React from "react";
import { motion } from "framer-motion";

const decisionLevels = [
  {
    level: "L1 - Pure Read",
    title: "Informational",
    description:
      "AI merely summarizes telemetry. No action recommendations are generated.",
  },
  {
    level: "L2 - Suggestive",
    title: "Advisory",
    description:
      "AI lists potential remediation options. Human analyst evaluates and chooses.",
  },
  {
    level: "L3 - Draft Mode",
    title: "Workflow Assist",
    description:
      "AI drafts config files or scripts. Human must manually review and apply.",
  },
  {
    level: "L4 - Locked Range",
    title: "Bounded Automation",
    description:
      "Automated read-checks. Execution blocked for elevated security groups.",
  },
  {
    level: "L5 - Blocked",
    title: "Prohibited Autonomy",
    description:
      "No autonomous write action allowed under any circumstances. Bound locked.",
  },
];

const workflowSteps = [
  {
    step: "STEP 01",
    title: "Source Context",
    description: "CrowdStrike alerts and Entra directory logs collected",
  },
  {
    step: "STEP 02",
    title: "AI Analysis",
    description: "Summarization model maps process to context",
  },
  {
    step: "STEP 03",
    title: "Boundary Check",
    description: "Verification against local privacy/security rules",
  },
  {
    step: "STEP 04",
    title: "Analyst Sign-off",
    description: "Security operator validates action recommendation",
  },
  {
    step: "STEP 05",
    title: "Approved Write",
    description: "Execution under cryptographic multi-party key",
  },
  {
    step: "STEP 06",
    title: "Immutable Log",
    description: "Evidence hash written to compliance ledger",
  },
];

export default function ResponsibleAiHumanDecisionsSection() {
  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              HUMAN CHECKPOINT SYSTEMS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            Human Decision Boundaries & Workflows
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            We establish strict, verifiable thresholds where machine advice ends and human judgment must intervene.
          </p>
        </div>

        {/* 5 Levels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {decisionLevels.map((lvl, idx) => (
            <motion.div
              key={lvl.level}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white p-4 sm:p-5 rounded-lg border border-[#123B4C]/10 shadow-sm flex flex-col gap-2 hover:shadow-md transition-all"
            >
              <span className="font-mono text-xs text-[#7891B1] font-semibold">
                {lvl.level}
              </span>
              <h3 className="text-base font-extrabold text-[#0A2029]">
                {lvl.title}
              </h3>
              <p className="text-xs text-[#5B6670] leading-relaxed mt-1">
                {lvl.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sequential Security Workflow Box */}
        <div className="bg-[#0A2440] text-white p-6 sm:p-8 rounded-xl shadow-md flex flex-col gap-5">
          <div className="font-mono text-xs font-bold text-[#E0967D] uppercase tracking-wider">
            SEQUENTIAL SECURITIES WORKFLOW EXECUTION
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#0D2E49] p-4 rounded-lg flex flex-col gap-1.5 border border-white/5"
              >
                <span className="font-mono text-[11px] text-[#A6402F] font-bold text-[#9FB8D6]">
                  {step.step}
                </span>
                <span className="text-sm font-extrabold text-white">
                  {step.title}
                </span>
                <p className="text-[11px] text-[#7891B1] leading-relaxed mt-1">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
