"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, AlertTriangle } from "lucide-react";

interface ReadinessGate {
  id: string;
  number: string;
  title: string;
  details: string;
}

interface CutoverStep {
  step: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

const readinessGates: ReadinessGate[] = [
  {
    id: "gate-01",
    number: "Gate 01",
    title: "Functional coverage",
    details:
      "All business functionality and workflows within scope are fully mapped and validated in the target system.",
  },
  {
    id: "gate-02",
    number: "Gate 02",
    title: "Data quality",
    details:
      "Historical records, master data, and attributes are verified for integrity, completeness, and accuracy.",
  },
  {
    id: "gate-03",
    number: "Gate 03",
    title: "Controls",
    details:
      "Internal financial and process controls are active and verified equivalent or superior to legacy execution.",
  },
  {
    id: "gate-04",
    number: "Gate 04",
    title: "Authority",
    details:
      "Approval matrices, delegation rights, and signing limits are mapped to responsible positions.",
  },
  {
    id: "gate-05",
    number: "Gate 05",
    title: "Evidence",
    details:
      "Audit-trail logging, record retention, and evidence manifest generation meet all policy standards.",
  },
  {
    id: "gate-06",
    number: "Gate 06",
    title: "Security",
    details:
      "Identity federation, permission scopes, encryption, and role-based access controls are active.",
  },
  {
    id: "gate-07",
    number: "Gate 07",
    title: "Privacy",
    details:
      "Jurisdiction-specific data handling, privacy compliance, and personal data boundaries are verified.",
  },
  {
    id: "gate-08",
    number: "Gate 08",
    title: "Accessibility",
    details:
      "Interface accessibility standards and localized user language requirements are met.",
  },
  {
    id: "gate-09",
    number: "Gate 09",
    title: "Integration",
    details:
      "APIs, webhooks, connectors, and batch routines pass end-to-end payload and error-handling tests.",
  },
  {
    id: "gate-10",
    number: "Gate 10",
    title: "Performance",
    details:
      "Response times, transaction throughput, and system stability satisfy operational SLA requirements.",
  },
  {
    id: "gate-11",
    number: "Gate 11",
    title: "Operational support",
    details:
      "Support escalation tiers, operational playbooks, and dedicated leads are assigned and operational.",
  },
  {
    id: "gate-12",
    number: "Gate 12",
    title: "Regulatory and professional review",
    details:
      "External audit, tax, legal, and regulatory reviews are completed and formally signed off.",
  },
  {
    id: "gate-13",
    number: "Gate 13",
    title: "Rollback",
    details:
      "Fallback protocols, dual-run data safety, and pre-cutover state restoration plans are approved.",
  },
];

const cutoverSequence: CutoverStep[] = [
  {
    step: "STEP 01",
    title: "Freeze and transition plan",
    description:
      "Change freeze window agreed with every affected function and communicated.",
  },
  {
    step: "STEP 02",
    title: "Migration",
    description:
      "Data moved or referenced according to the approved ownership decision.",
  },
  {
    step: "STEP 03",
    title: "Reconciliation",
    description:
      "Balances, counts, and control totals reconciled and signed off.",
  },
  {
    step: "STEP 04",
    title: "Shadow Mode evidence",
    description:
      "Comparison results reviewed; unresolved differences dispositioned by an authorized owner.",
    highlighted: true,
  },
  {
    step: "STEP 05",
    title: "Activation",
    description:
      "Bounded scope activated with all thirteen gates approved or formally excepted.",
  },
  {
    step: "STEP 06",
    title: "Monitoring and exception support",
    description:
      "Heightened monitoring, named support, and daily exception review during the stabilization period.",
  },
  {
    step: "STEP 07",
    title: "Rollback window",
    description:
      "Defined period during which the pre-cutover path can be restored under the approved plan.",
  },
];

export default function ScopeReplacementSection() {
  const [openGateId, setOpenGateId] = useState<string | null>(null);

  const toggleGate = (id: string) => {
    setOpenGateId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
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
                WHEN ZOIKOSUITE MAY REPLACE SELECTED SCOPE
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Replacement is a governed implementation decision
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
              A replacement unit is a clearly bounded process, module, workflow,
              record domain, integration, entity, or jurisdiction scope &mdash;
              never &quot;the stack.&quot;
            </p>
          </motion.div>
        </div>

        {/* Non-Guarantee Notice Banner */}
        <div className="w-full bg-[#FAF5E8] border border-[#E9D8B4] rounded-xl p-4 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#8C6B2D]">
          <AlertTriangle className="w-4 h-4 shrink-0 text-[#C59B27] mt-0.5 sm:mt-0" />
          <p className="leading-relaxed font-normal">
            <strong className="font-bold">Non-guarantee.</strong> Replacement
            suitability and timing require customer-specific discovery,
            validation, contracting, and implementation approval. Nothing on
            this page constitutes a commitment that any system can or should be
            replaced.
          </p>
        </div>

        {/* Two-Column Grid: Left Accordion + Right Cutover Timeline & Approval Chain */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Thirteen Readiness Gates Accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 flex flex-col space-y-4"
          >
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#64748B] uppercase block">
              THIRTEEN READINESS GATES &mdash; A FAILED GATE BLOCKS ACTIVATION
            </span>

            <div className="space-y-2">
              {readinessGates.map((gate) => {
                const isOpen = openGateId === gate.id;

                return (
                  <div
                    key={gate.id}
                    className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleGate(gate.id)}
                      className="w-full px-5 py-3.5 flex items-center justify-between text-left transition-colors hover:bg-slate-50/50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#c5a059] font-medium tracking-wide">
                          {gate.number}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-[#0F172A]">
                          {gate.title}
                        </span>
                      </div>
                      <div className="text-[#c5a059] shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-4 pt-1 text-xs text-[#64748B] border-t border-[#F1F5F9] leading-relaxed">
                            {gate.details}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Cutover Sequence Timeline & Approval Chain */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 flex flex-col space-y-8"
          >
            {/* Cutover Sequence Section */}
            <div className="space-y-6">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#64748B] uppercase block">
                CUTOVER SEQUENCE
              </span>

              <div className="relative border-l-2 border-[#CBD5E1] ml-2 space-y-6 pl-6">
                {cutoverSequence.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Circle Indicator on Vertical Line */}
                    <div
                      className={`absolute -left-[31px] top-0.5 w-3 h-3 rounded-full border-2 transition-colors ${
                        item.highlighted
                          ? "bg-[#FAF5E8] border-[#C59B27]"
                          : "bg-[#F7F5F0] border-[#64748B] group-hover:border-[#0F476A]"
                      }`}
                    />

                    {/* Step Tag */}
                    <span
                      className={`text-[10px] font-mono font-bold tracking-wider uppercase block mb-0.5 ${
                        item.highlighted ? "text-[#C59B27]" : "text-[#c5a059]"
                      }`}
                    >
                      {item.step}
                    </span>

                    {/* Step Title */}
                    <h4 className="text-sm font-bold text-[#0F172A] tracking-tight mb-0.5">
                      {item.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Approval Chain Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] space-y-3">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#64748B] uppercase block">
                APPROVAL CHAIN
              </span>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
                Business owner · system owner · control owner · security ·
                privacy · data owner · implementation lead · qualified
                professional where required. No automated readiness score
                substitutes for owner approval.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
