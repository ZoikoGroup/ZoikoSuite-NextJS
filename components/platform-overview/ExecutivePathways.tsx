"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface RoleContent {
  id: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  ctaText: string;
  cardCategory: string;
  cardTitle: string;
  cardDescription: string;
  cardButton: string;
}

const rolesData: RoleContent[] = [
  {
    id: "cfo",
    label: "CFO",
    title: "Govern finance across entities",
    description:
      "Govern finance, treasury, approvals, revenue integrity, close, consolidation, controls, and evidence across entities.",
    tags: [
      "Entity scope",
      "Approval limits",
      "Policy controls",
      "Evidence health",
      "Consolidated reporting",
    ],
    ctaText: "View ZoikoSuite for CFOs",
    cardCategory: "RECOMMENDED NEXT STEP",
    cardTitle: "Financial governance",
    cardDescription:
      "Start with entity scope, approval authority, and close evidence. Bring your entity list and approval matrix to the demo.",
    cardButton: "Book enterprise demo",
  },
  {
    id: "gc",
    label: "General Counsel",
    title: "Govern legal and regulatory compliance across jurisdictions",
    description:
      "Manage legal entity compliance, corporate secretarial records, board approvals, regulatory filings, and binding obligations across global markets.",
    tags: [
      "Entity registry",
      "Binding authority",
      "Regulatory tracking",
      "Resolution history",
      "Entity registers",
    ],
    ctaText: "View ZoikoSuite for General Counsel",
    cardCategory: "RECOMMENDED NEXT STEP",
    cardTitle: "Legal entity governance",
    cardDescription:
      "Centralize corporate registry, directorships, and resolution trails. Connect legal structure directly to operational execution.",
    cardButton: "Book legal review demo",
  },
  {
    id: "cio",
    label: "CIO",
    title: "Govern IT systems, data pipelines, and architecture controls",
    description:
      "Secure integrations, maintain data residency compliance, monitor automated workflows, and enforce security architectures across multi-tenant environments.",
    tags: [
      "Data residency",
      "Integration security",
      "Access policies",
      "System audits",
      "Workflow tracing",
    ],
    ctaText: "View ZoikoSuite for CIOs",
    cardCategory: "RECOMMENDED NEXT STEP",
    cardTitle: "Sovereign platform control",
    cardDescription:
      "Align enterprise architecture with jurisdictional data requirements. Audit integration endpoints and policy execution limits.",
    cardButton: "Book architecture briefing",
  },
  {
    id: "chro",
    label: "CHRO",
    title: "Govern workforce policies, payroll rules, and cross-border HR",
    description:
      "Oversee global headcount compliance, compensation approvals, employment agreements, localized policies, and workforce authorization records.",
    tags: [
      "Workforce compliance",
      "Pay equity",
      "Local mandates",
      "Delegated hiring",
      "Document retention",
    ],
    ctaText: "View ZoikoSuite for CHROs",
    cardCategory: "RECOMMENDED NEXT STEP",
    cardTitle: "Workforce governance",
    cardDescription:
      "Harmonize global HR policies with local regulatory constraints. Maintain verified oversight on compensation and role delegations.",
    cardButton: "Book workforce demo",
  },
  {
    id: "coo",
    label: "COO",
    title: "Govern cross-functional operations and multi-entity execution",
    description:
      "Synchronize supply chain workflows, procurement approvals, operational SLAs, asset transfers, and multi-facility compliance matrices.",
    tags: [
      "Operational SLAs",
      "Procurement controls",
      "Facility oversight",
      "Process metrics",
      "SOP compliance",
    ],
    ctaText: "View ZoikoSuite for COOs",
    cardCategory: "RECOMMENDED NEXT STEP",
    cardTitle: "Operational orchestration",
    cardDescription:
      "Bring multi-site facilities, procurement workflows, and vendor performance under a unified governed system of record.",
    cardButton: "Book operational walkthrough",
  },
];

export default function ExecutivePathways() {
  const [activeTab, setActiveTab] = useState<string>("cfo");

  const currentRole = rolesData.find((r) => r.id === activeTab) || rolesData[0];

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Executive Pathways
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Find the evidence your role is accountable for
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                The platform taxonomy does not change by role. Only the examples
                and recommended resources do.
              </p>
            </motion.div>
          </div>

          {/* Role Navigation Tabs Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3 pb-8 border-b border-[#DBE3E8] mb-12"
          >
            {rolesData.map((role) => {
              const isActive = activeTab === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveTab(role.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm ${
                    isActive
                      ? "bg-[#07131d] text-white shadow-md"
                      : "bg-white border border-[#DBE3E8] text-[#64748b] hover:text-[#0f172a] hover:border-[#cbd5e1]"
                  }`}
                >
                  {role.label}
                </button>
              );
            })}
          </motion.div>

          {/* Dynamic Content Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Left Column: Role Details, Description & Tags */}
              <div className="lg:col-span-7 flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight mb-4">
                  {currentRole.title}
                </h3>
                <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                  {currentRole.description}
                </p>

                {/* Tags List */}
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {currentRole.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white border border-[#DBE3E8] rounded-md px-3 py-1.5 text-xs font-semibold text-[#0F476A] shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Primary Action Link */}
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F476A] hover:text-[#c5a059] transition-colors"
                  >
                    {currentRole.ctaText}
                    <ArrowRight className="w-4 h-4 text-[#c5a059]" />
                  </a>
                </div>
              </div>

              {/* Right Column: Recommended Next Step Card */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-[#DBE3E8] rounded-2xl p-8 shadow-sm flex flex-col justify-between relative">
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase block mb-3">
                      {currentRole.cardCategory}
                    </span>
                    <h4 className="text-xl font-bold text-[#0f172a] tracking-tight mb-3">
                      {currentRole.cardTitle}
                    </h4>
                    <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed mb-8">
                      {currentRole.cardDescription}
                    </p>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F476A] hover:text-[#c5a059] transition-colors"
                    >
                      {currentRole.cardButton}
                      <ArrowRight className="w-4 h-4 text-[#c5a059]" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
