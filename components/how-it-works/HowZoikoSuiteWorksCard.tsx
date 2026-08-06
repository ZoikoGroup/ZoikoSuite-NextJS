"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, UserCheck, FileText } from "lucide-react";

interface FeatureBlock {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featureBlocks: FeatureBlock[] = [
  {
    icon: <Globe className="w-5 h-5 text-[#0F476A]" />,
    title: "Context before decision",
    description:
      "Entity, jurisdiction, function, object, deadline, and data classification.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#0F476A]" />,
    title: "Governance before execution",
    description:
      "Policy, authority, approvals, segregation, and evidence requirements.",
  },
  {
    icon: <UserCheck className="w-5 h-5 text-[#0F476A]" />,
    title: "Human accountability",
    description:
      "Permitted decisions, reason capture, authorization, and escalation.",
  },
  {
    icon: <FileText className="w-5 h-5 text-[#0F476A]" />,
    title: "Evidence after action",
    description:
      "Source linkage, event timeline, integrity, retention, and monitoring.",
  },
];

export default function HowZoikoSuiteWorksCard() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Container with Gold/Bronze Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-white border border-[#c5a059] border-t-3 border-t-[#c5a059] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg shadow-[#c5a059]/5 flex flex-col"
        >
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#0f172a] mb-6">
            How does ZoikoSuite work?
          </h2>

          {/* Main Description */}
          <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-12 max-w-4xl">
            ZoikoSuite works by bringing business context, policies, roles,
            approvals, evidence, integrations, and analytics into one governed
            action lifecycle. A signal is scoped to the correct entity and
            jurisdiction, evaluated against configured controls, reviewed by
            authorized people, executed through permitted identities, recorded
            with attributable evidence, and monitored for obligations,
            exceptions, and follow-up.
          </p>

          {/* 4 Feature Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-[#DBE3E8]">
            {featureBlocks.map((block, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * idx,
                  ease: "easeOut",
                }}
                className="flex flex-col"
              >
                <div className="mb-4 w-10 h-10 rounded-xl flex items-center justify-center">
                  {block.icon}
                </div>
                <h3 className="text-base font-bold text-[#0f172a] tracking-tight mb-2">
                  {block.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  {block.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
