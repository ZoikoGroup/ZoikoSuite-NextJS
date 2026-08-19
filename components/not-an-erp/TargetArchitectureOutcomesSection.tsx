"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface OutcomeItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  detailTitle: string;
  detailDescription: string;
  criteria: string[];
}

const outcomes: OutcomeItem[] = [
  {
    id: "outcome-01",
    tag: "OUTCOME 01",
    title: "Complement",
    description:
      "Keep existing systems and add governed workflows, authority, evidence, exceptions, and cross-functional intelligence around selected actions.",
    detailTitle: "Complement",
    detailDescription:
      "The ERP remains authoritative for the invoice, the ledger, and the payment record. ZoikoSuite adds the authority check, the jurisdiction rule, the segregation control, the evidence requirement, and the decision record around the release — and writes nothing back until a decision permits it.",
    criteria: [
      "Which actions currently lack a complete authority context",
      "Where evidence is assembled manually after the fact",
      "Which cross-functional consequences are handled by email",
      "Whether any system of record needs to change at all",
    ],
  },
  {
    id: "outcome-02",
    tag: "OUTCOME 02",
    title: "Coordinate",
    description:
      "Orchestrate processes and decisions across multiple authoritative systems through controlled integration and event handling.",
    detailTitle: "Coordinate",
    detailDescription:
      "Multiple core platforms operate independently across operations, workforce, legal, and finance. ZoikoSuite links cross-system dependencies, enforcing delegated authority and routing approvals seamlessly before downstream records are committed.",
    criteria: [
      "Which processes span more than two core enterprise systems",
      "Where handoffs cause delays, errors, or authorization blind spots",
      "How cross-departmental policy triggers are verified in real time",
      "What event triggers require synchronous approval across systems",
    ],
  },
  {
    id: "outcome-03",
    tag: "OUTCOME 03",
    title: "Consolidate selected processes",
    description:
      "Move overlapping workflows, policy controls, approvals, evidence, and reporting into ZoikoSuite while retaining required systems of record.",
    detailTitle: "Consolidate selected processes",
    detailDescription:
      "Overlapping tools and custom tickets create fragmented policy execution. ZoikoSuite unifies approval paths, audit trail generation, and compliance checks into a single governed execution plane without displacing underlying ledgers.",
    criteria: [
      "Which custom or peripheral workflow tools can be retired",
      "Where redundant review steps exist across business units",
      "How policy governance can be standardized across jurisdictions",
      "What compliance reporting overhead can be centralized",
    ],
  },
  {
    id: "outcome-04",
    tag: "OUTCOME 04",
    title: "Replace selected scope",
    description:
      "Replace a bounded process, module, or system only when functional, data, control, integration, evidence, security, operational, and rollback criteria are approved.",
    detailTitle: "Replace selected scope",
    detailDescription:
      "Legacy modules that no longer satisfy governance or operational requirements are systematically decommissioned. ZoikoSuite assumes full functional execution for the defined scope once validation and rollback tests are satisfied.",
    criteria: [
      "Which legacy modules present high maintenance or risk burdens",
      "Whether full data migration and lineage continuity are assured",
      "What operational rollback criteria are required for go-live",
      "How security and permission scope align with enterprise policy",
    ],
  },
];

export default function TargetArchitectureOutcomesSection() {
  const [selectedId, setSelectedId] = useState<string>("outcome-01");

  const activeOutcome =
    outcomes.find((o) => o.id === selectedId) || outcomes[0];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-10">
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
                FOUR TARGET-ARCHITECTURE OUTCOMES
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] max-w-xl font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              All four are legitimate. None is the mature endpoint.
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
              The appropriate outcome may differ by function, entity,
              jurisdiction, process, and implementation phase &mdash; and one
              organization can hold all four at once.
            </p>
          </motion.div>
        </div>

        {/* 4 Outcome Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {outcomes.map((item) => {
            const isSelected = selectedId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? "bg-white border-[#1C2C5E] shadow-md ring-1 ring-[#1C2C5E]"
                    : "bg-white border-[#1C2C5E] hover:border-[#CBD5E1] hover:bg-white"
                }`}
              >
                <div className="space-y-2">
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase block ${
                      isSelected ? "text-[#c5a059]" : "text-[#c5a059]"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Detail Panel */}
        <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] border-l-[4px] border-l-[#1C2C5E] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Detail Left Column: What This Looks Like */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-[#64748B] uppercase block">
              WHAT THIS LOOKS LIKE
            </span>
            <h4 className="text-lg font-bold text-[#0F172A] tracking-tight">
              {activeOutcome.detailTitle}
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
              {activeOutcome.detailDescription}
            </p>
          </div>

          {/* Detail Right Column: Decision Criteria To Discuss */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-[#64748B] uppercase block">
              DECISION CRITERIA TO DISCUSS
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
              {activeOutcome.criteria.map((criterion, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0 mt-2" />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] border border-[#0F476A] hover:bg-[#0c3955] hover:border-[#0c3955] text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs"
          >
            Assess your target architecture
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
