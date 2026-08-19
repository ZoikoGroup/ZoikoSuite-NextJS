"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BeforeItem {
  text: string;
}

interface AfterItem {
  text: string;
}

interface CriterionItem {
  label: string;
  description: string;
}

const beforeList: BeforeItem[] = [
  { text: "Manual approvals across email and chat" },
  { text: "Obligation tracking in spreadsheets" },
  { text: "Policy exceptions agreed verbally, recorded inconsistently" },
  { text: "Evidence assembled at audit time from four systems" },
  { text: "Cross-functional cases coordinated in tickets" },
  { text: "Two overlapping workflow tools" },
  { text: "Local spreadsheets holding approval limits" },
];

const afterList: AfterItem[] = [
  { text: "Configured governed workflow with named owners" },
  { text: "Source-system links replacing re-keyed data" },
  { text: "Authority and approval controls enforced at the decision" },
  { text: "Evidence manifest built during the work" },
  { text: "Explicit exception states with expiry and review" },
  { text: "One reporting surface across the consolidated scope" },
  { text: "Approval limits held in the authority model" },
];

const consolidationCriteria: CriterionItem[] = [
  {
    label: "OWNER",
    description: "A clear process owner is named and accountable",
  },
  {
    label: "SOURCES",
    description: "Authoritative sources are defined and agreed",
  },
  { label: "POLICIES", description: "Policies are approved and versioned" },
  { label: "AUTHORITY", description: "Roles and authority limits are mapped" },
  {
    label: "INTEGRATION",
    description: "Integrations are validated in the target environment",
  },
  {
    label: "EVIDENCE",
    description: "Evidence and retention requirements are defined",
  },
  {
    label: "SUPPORT",
    description: "Operational support is ready for the new path",
  },
];

export default function ProcessConsolidationSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {/* Header Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Eyebrow + Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col space-y-3"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
                WHEN ZOIKOSUITE CONSOLIDATES SELECTED PROCESSES
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Consolidating workflows and controls &mdash; not master data
            </h2>
          </motion.div>

          {/* Right Column: Paragraph */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              This is workflow and control consolidation. It is not
              transaction-system or master-data consolidation, and it does not
              delete legacy records.
            </p>
          </motion.div>
        </div>

        {/* Before / After Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] flex flex-col space-y-4"
          >
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-[#94A3B8] uppercase block">
              BEFORE &mdash; CANDIDATE SCOPE
            </span>
            <ul className="space-y-3 text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
              {beforeList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] shrink-0 mt-2" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow Divider */}
          <div className="md:col-span-[0.5] flex justify-center py-2 md:py-0">
            <ArrowRight className="w-5 h-5 text-[#c5a059] hidden md:block" />
            <ArrowRight className="w-5 h-5 text-[#c5a059] rotate-90 md:hidden" />
          </div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#3B82F6]/30 ring-1 ring-[#3B82F6]/20 flex flex-col space-y-4"
          >
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-[#334155] uppercase block">
              AFTER &mdash; GOVERNED CONFIGURATION
            </span>
            <ul className="space-y-3 text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
              {afterList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0 mt-2" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Consolidation Criteria & Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
          {/* Left Column: Consolidation Criteria List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#64748B] uppercase block">
              CONSOLIDATION CRITERIA &mdash; ALL REQUIRED BEFORE SCOPE MOVES
            </span>

            <div className="space-y-3.5 md:ml-10">
              {consolidationCriteria.map((item) => (
                <div
                  key={item.label}
                  className="text-xs sm:text-sm leading-relaxed"
                >
                  <span className="font-mono font-bold text-[#c5a059] uppercase mr-2 tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-[#334155] font-normal">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#94A3B8] font-normal leading-normal italic pt-1">
              This checklist is not a self-certification. Each criterion
              requires an accountable owner&apos;s confirmation.
            </p>
          </motion.div>

          {/* Right Column: 3D Visualization Image with NO outer div styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex justify-center"
          >
            <div>
              <img
                src="/not-an-erp/9.png"
                alt="3D diagram showing consolidated workflow nodes streaming into connected enterprise database storage silos"
                className="w-full h-auto block rounded-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] border border-[#0F476A] hover:bg-[#0c3955] hover:border-[#0c3955] text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs"
          >
            Discuss process consolidation
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
