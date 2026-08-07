"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PropertyItem {
  id: string;
  propertyNumber: string;
  title: string;
  description: string;
  proofTitle: string;
  proofDescription: string;
  details: {
    mockup: string;
    object: string;
    related: string;
    fallback: string;
  };
  linkText: string;
}

const propertiesData: PropertyItem[] = [
  {
    id: "prop-01",
    propertyNumber: "PROPERTY 01",
    title: "Context-connected",
    description:
      "Business objects, events, entities, jurisdictions, contracts, obligations, people, systems, policies, and evidence are related in one operating context.",
    proofTitle: "Context-connected",
    proofDescription:
      "The operations graph relates one vendor bank-detail change to its vendor master record, contract, entity, jurisdiction, payment policy, delegated authority, requester, approver, verification evidence, integration event, prior exceptions, and due date — before any rule is evaluated.",
    details: {
      mockup: "Business Operations Graph",
      object: "VEN-4471 • vendor bank-detail change",
      related: "12 connected nodes across 6 node types",
      fallback: "Accessible relationship table, always present",
    },
    linkText: "See the operations graph",
  },
  {
    id: "prop-02",
    propertyNumber: "PROPERTY 02",
    title: "Governance-active",
    description:
      "Policies, authority, approvals, segregation of duties, limits, and exceptions are evaluated at the point of action.",
    proofTitle: "Governance-active",
    proofDescription:
      "Policies and signing limits are automatically executed and checked against the transaction context in real time before execution.",
    details: {
      mockup: "Policy & Authority Engine",
      object: "POL-8821 • dual-authorization limit",
      related: "3 active policies evaluated simultaneously",
      fallback: "Manual override workflow with audit trail",
    },
    linkText: "See the policy engine",
  },
  {
    id: "prop-03",
    propertyNumber: "PROPERTY 03",
    title: "Human-accountable",
    description:
      "Material decisions preserve responsible humans, authorized roles, service identities, reasons, and review paths.",
    proofTitle: "Human-accountable",
    proofDescription:
      "Every material decision explicitly links the human owner, their active delegation, and the structured rationale provided at the moment of sign-off.",
    details: {
      mockup: "Accountability Ledger",
      object: "DEC-9012 • exception sign-off",
      related: "1 primary owner, 2 secondary reviewers",
      fallback: "Delegated authority fallback record",
    },
    linkText: "See accountability trails",
  },
  {
    id: "prop-04",
    propertyNumber: "PROPERTY 04",
    title: "Evidence-native",
    description:
      "Sources, policy reasons, approvals, before and after values, timestamps, and outcomes become part of the operational record.",
    proofTitle: "Evidence-native",
    proofDescription:
      "All underlying artifacts, source documents, system payloads, and approval time-stamps are permanently bound to the transaction record.",
    details: {
      mockup: "Evidence Repository",
      object: "EV-3342 • immutable audit snapshot",
      related: "5 attached verification documents",
      fallback: "Exportable compliance ledger package",
    },
    linkText: "See evidence models",
  },
  {
    id: "prop-05",
    propertyNumber: "PROPERTY 05",
    title: "Intelligence-continuous",
    description:
      "The platform supports understanding and control before, during, and after execution — not only retrospective reporting.",
    proofTitle: "Intelligence-continuous",
    proofDescription:
      "Insights and risk indicators stream continuously across the lifecycle of an operation rather than sitting inside static post-event reports.",
    details: {
      mockup: "Continuous Risk Stream",
      object: "INT-1102 • real-time anomaly score",
      related: "4 predictive telemetry checks",
      fallback: "Scheduled periodic risk assessment view",
    },
    linkText: "See continuous intelligence",
  },
  {
    id: "prop-06",
    propertyNumber: "PROPERTY 06",
    title: "AI-governed",
    description:
      "AI uses authorized sources, discloses uncertainty and gaps, respects permission and policy boundaries, and remains subject to human review.",
    proofTitle: "AI-governed",
    proofDescription:
      "Artificial intelligence assistants operate strictly within sandboxed permission boundaries, citing explicit sources and flagging uncertainty for review.",
    details: {
      mockup: "Governed AI Assistant",
      object: "AI-5520 • automated synthesis check",
      related: "Strict grounding constraint applied",
      fallback: "Direct human fallback without AI synthesis",
    },
    linkText: "See AI governance controls",
  },
];

export default function SixDefiningPropertiesSection() {
  const [selectedId, setSelectedId] = useState<string>("prop-01");

  const activeProperty =
    propertiesData.find((p) => p.id === selectedId) || propertiesData[0];

  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                SIX DEFINING PROPERTIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-xl">
              What makes the category coherent{" "}
              <span className="text-[#9ba4b5] font-light">—</span> and testable
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
            Select a property to see the product proof that supports it. All six
            descriptions stay on the page.
          </p>
        </div>

        {/* 6 Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
          {propertiesData.map((prop) => {
            const isSelected = selectedId === prop.id;
            return (
              <motion.div
                key={prop.id}
                onClick={() => setSelectedId(prop.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`cursor-pointer bg-white rounded-2xl p-6 transition-all duration-200 border ${
                  isSelected
                    ? "border-[#0F476A] shadow-md ring-1 ring-[#0F476A]"
                    : "border-[#DBE3E8] hover:border-[#9ba4b5]"
                }`}
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059] block mb-2">
                  {prop.propertyNumber}
                </span>
                <h3
                  className={`text-base sm:text-lg font-bold mb-2 ${
                    isSelected ? "text-[#0F476A]" : "text-[#0f172a]"
                  }`}
                >
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Detailed Proof Card (bg-[#0F476A]) */}
        <div className="w-full bg-[#0F476A] text-white rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-xl">
          {/* Left Side: Proof Content */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D0AA55] block mb-3">
                PROOF FOR THIS PROPERTY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {activeProperty.proofTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#CFDEE7] leading-relaxed mb-8">
                {activeProperty.proofDescription}
              </p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D0AA55] hover:text-[#f3cd70] transition-colors"
              >
                {activeProperty.linkText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Side: Where it appears in the product (border-left #D0AA55) */}
          <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#D0AA55]/40 pt-6 lg:pt-0 lg:pl-8">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D0AA55] block mb-4">
              WHERE IT APPEARS IN THE PRODUCT
            </span>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-[#9ba4b5] font-mono">Mockup</span>
                <span className="sm:col-span-2 text-white font-medium">
                  {activeProperty.details.mockup}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-[#9ba4b5] font-mono">Object</span>
                <span className="sm:col-span-2 text-white font-medium">
                  {activeProperty.details.object}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-[#9ba4b5] font-mono">Related</span>
                <span className="sm:col-span-2 text-white font-medium">
                  {activeProperty.details.related}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-[#9ba4b5] font-mono">Fallback</span>
                <span className="sm:col-span-2 text-white font-medium">
                  {activeProperty.details.fallback}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Bottom Explore Button */}
        <div className="flex justify-center w-full mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
          >
            Explore the platform architecture
            <ArrowRight className="w-4 h-4 text-[#D0AA55]" />
          </a>
        </div>
      </div>
    </section>
  );
}
