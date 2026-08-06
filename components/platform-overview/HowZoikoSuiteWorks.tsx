"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const layers = [
  {
    id: "layer-01",
    label: "Layer 01",
    title: "Execute",
    description:
      "Business modules initiate and complete work across finance, workforce, legal, tax, compliance, procurement, and commercial operations.",
  },
  {
    id: "layer-02",
    label: "Layer 02",
    title: "Govern",
    description:
      "Policies, jurisdiction rules, roles, approvals, delegated authority, segregation of duties, and exceptions shape what may happen and who may authorize it.",
  },
  {
    id: "layer-03",
    label: "Layer 03",
    title: "Evidence",
    description:
      "Decision records, source documents, policy reasons, approvals, timestamps, and outcomes remain attributable and reviewable.",
  },
] as const;

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  badge: string;
  highlighted?: boolean;
}

const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Vendor payment proposed",
    description:
      "A procurement owner submits a payment request against an approved purchase order.",
    badge: "EXECUTE",
  },
  {
    step: "02",
    title: "Jurisdiction and policy evaluated",
    description:
      "Entity, tax treatment, spend policy, and segregation-of-duties rules are resolved for this action.",
    badge: "GOVERN",
  },
  {
    step: "03",
    title: "Delegated approver confirms — human authorization",
    description:
      "A named approver with a verified authority limit makes the decision. The platform does not authorize material actions on its own.",
    badge: "GOVERN",
    highlighted: true,
  },
  {
    step: "04",
    title: "Evidence manifest created",
    description:
      "The decision, policy references, documents, before and after values, and timestamps are linked into one retrievable record.",
    badge: "EVIDENCE",
  },
  {
    step: "05",
    title: "Outcome and exceptions reported",
    description:
      "The action, its exceptions, and its evidence state appear in operational and governance reporting.",
    badge: "EVIDENCE",
  },
];

export default function HowZoikoSuiteWorks() {
  const [selectedLayer, setSelectedLayer] = useState<string>("layer-01");

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
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
                  How ZoikoSuite Works
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Execution, governance, and evidence work together
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Select a layer to see which part of a real business action it
                controls. All three descriptions stay on the page.
              </p>
            </motion.div>
          </div>

          {/* Interactive Layer Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {layers.map((layer) => {
              const isSelected = selectedLayer === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setSelectedLayer(layer.id)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-200 flex flex-col justify-between bg-white border ${
                    isSelected
                      ? "border-[#D0AA55] ring-2 ring-[#D0AA55]/20 shadow-md"
                      : "border-[#DBE3E8] hover:border-[#cbd5e1] shadow-sm"
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-medium tracking-[0.15em] text-[#c5a059] uppercase block mb-3">
                      {layer.label}
                    </span>
                    <h3 className="text-xl font-bold text-[#0f172a] tracking-tight mb-3">
                      {layer.title}
                    </h3>
                    <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Workflow Steps List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full bg-white border border-[#DBE3E8] rounded-3xl overflow-hidden shadow-sm mb-12"
          >
            {workflowSteps.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:px-8 gap-4 border-b border-[#E2E8F0] last:border-b-0 transition-colors ${
                  item.highlighted ? "bg-[#fdfbf7]" : "hover:bg-[#fafaf9]"
                }`}
              >
                <div className="flex items-start sm:items-center gap-6">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#c5a059] w-6 shrink-0 pt-1 sm:pt-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0f172a] tracking-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 sm:ml-4 self-end sm:self-center">
                  <span className="inline-block px-3 py-1 bg-[#F7F5F0] border border-[#DBE3E8] text-[#0F476A] text-[10px] font-semibold tracking-[1px] rounded-md">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom Action CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex items-center justify-center w-full"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-lg shadow-[#0F476A]/20"
            >
              See how ZoikoSuite works
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
