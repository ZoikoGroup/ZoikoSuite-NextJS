"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ScenarioCard {
  id: string;
  tag: string;
  title: string;
  description: string;
}

interface StepItem {
  system: "ERP" | "ZOIKOSUITE";
  title: string;
  description: string;
}

const scenarios: ScenarioCard[] = [
  {
    id: "scenario-01",
    tag: "Scenario 01",
    title: "Ledger and subledgers",
    description:
      "The ERP stays authoritative for the general ledger, subledgers, and statutory reporting where that serves the organization.",
  },
  {
    id: "scenario-02",
    tag: "Scenario 02",
    title: "Inventory, manufacturing, order management",
    description:
      "Deeply embedded operational modules with mature configuration remain in place; ZoikoSuite governs the decisions that cross them.",
  },
  {
    id: "scenario-03",
    tag: "Scenario 03",
    title: "Recent or in-flight implementation",
    description:
      "An organization mid-program can add governed coordination without disturbing the system it has just deployed.",
  },
];

const exampleFlowSteps: StepItem[] = [
  {
    system: "ERP",
    title: "Invoice and payment record created",
    description:
      "The ERP remains authoritative. The record is created and matched in the system that owns it.",
  },
  {
    system: "ZOIKOSUITE",
    title: "Context and policy evaluated",
    description:
      "Entity, jurisdiction, contract obligation, authority limit, segregation rule, and evidence requirement resolve for this specific payment.",
  },
  {
    system: "ZOIKOSUITE",
    title: "Authorized decision recorded",
    description:
      "A named approver with a verified limit decides. The decision, the reason, and the evidence become an authoritative ZoikoSuite record.",
  },
  {
    system: "ERP",
    title: "Execution and update",
    description:
      "The write is issued to the ERP on the authorized version only, with an idempotency key. Retries cannot duplicate the payment.",
  },
  {
    system: "ZOIKOSUITE",
    title: "Evidence manifest and reporting",
    description:
      "Read-back reconciliation confirms the ERP state. Variance opens a reconciliation record rather than closing the action.",
  },
];

export default function TargetArchitectureERPSection() {
  const [selectedScenario, setSelectedScenario] =
    useState<string>("scenario-01");

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
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
                WHEN ERP REMAINS IN THE ARCHITECTURE
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Keeping your ERP can be the target architecture
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
              Retaining a system of record is a deliberate design decision, not
              an unfinished migration.
            </p>
          </motion.div>
        </div>

        {/* 3 Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map((scenario) => {
            const isSelected = selectedScenario === scenario.id;

            return (
              <div
                key={scenario.id}
                onClick={() => setSelectedScenario(scenario.id)}
                className={`bg-white rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col space-y-3 ${
                  isSelected
                    ? "border-[#E2E8F0] hover:border-[#CBD5E1]"
                    : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-[#c5a059] uppercase block">
                  {scenario.tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
                  {scenario.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                  {scenario.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Section: Left Example Flow Timeline + Right 3D Diagram Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
          {/* Left Column: Example Flow Vertical Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#64748B] uppercase block">
              EXAMPLE FLOW &mdash; ROUND TRIP WITH THE ERP
            </span>

            {/* Step-by-Step Vertical Steps */}
            <div className="relative border-l-2 border-[#CBD5E1] ml-2 space-y-7 pl-6">
              {exampleFlowSteps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Circle Indicator on Vertical Line */}
                  <div className="absolute -left-[31px] top-0.5 w-3 h-3 rounded-full bg-[#F7F5F0] border-2 border-[#64748B] group-hover:border-[#0F476A] transition-colors" />

                  {/* System Tag */}
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#c5a059] uppercase block mb-0.5">
                    {step.system}
                  </span>

                  {/* Step Title */}
                  <h4 className="text-sm font-bold text-[#0F172A] tracking-tight mb-1">
                    {step.title}
                  </h4>

                  {/* Step Description */}
                  <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] border border-[#0F476A] hover:bg-[#0c3955] hover:border-[#0c3955] text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs"
              >
                View coexistence architecture
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
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
                src="/not-an-erp/8.png"
                alt="3D central hub node connected to various enterprise system nodes showing round trip ERP flow"
                className="w-full h-auto block rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
