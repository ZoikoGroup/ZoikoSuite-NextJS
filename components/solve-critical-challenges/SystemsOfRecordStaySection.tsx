"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepBox {
  number: string;
  title: string;
  description: string;
  isActive?: boolean;
}

const steps: StepBox[] = [
  {
    number: "01",
    title: "Source systems",
    description: "ERP, payroll, HRM, contracts, banks and local registers remain authoritative sources & storage for raw execution data.",
  },
  {
    number: "02",
    title: "ZoikoSuite context",
    description: "Reads authoritative sources and maps governing evidence, sovereign context, and boundary health for active workflows.",
    isActive: true,
  },
  {
    number: "03",
    title: "Human decision",
    description: "Accountable human reviews proposed actions with explicit legal, statutory and policy context before execution.",
  },
  {
    number: "04",
    title: "Execution system",
    description: "Targeted execution occurs inside authorized core systems & external regulatory bodies.",
  },
  {
    number: "05",
    title: "Evidence & reconciliation",
    description: "Immutable verification record traces execution outcome back to authorizing sources and decision actors.",
  },
];

interface RecordRow {
  object: string;
  rawSystem: string;
  governedRole: string;
  executionSystem: string;
  evidenceSystem: string;
}

const records: RecordRow[] = [
  {
    object: "Ledger and journal",
    rawSystem: "Customer ERP",
    governedRole: "Governed context and sanction",
    executionSystem: "Customer ERP",
    evidenceSystem: "ZoikoSuite",
  },
  {
    object: "Pay run",
    rawSystem: "Payroll provider",
    governedRole: "Governed context and sanction",
    executionSystem: "Payroll provider",
    evidenceSystem: "ZoikoSuite",
  },
  {
    object: "Employee record",
    rawSystem: "HRIS",
    governedRole: "Purpose-limited access",
    executionSystem: "HRIS",
    evidenceSystem: "ZoikoSuite",
  },
  {
    object: "Contract document",
    rawSystem: "Contract repository",
    governedRole: "Obligation and delegation linkage",
    executionSystem: "Repository",
    evidenceSystem: "ZoikoSuite",
  },
  {
    object: "Payment instruction",
    rawSystem: "Banking platform",
    governedRole: "Decision-sanction only",
    executionSystem: "Banking platform",
    evidenceSystem: "ZoikoSuite",
  },
  {
    object: "Policy decisions and evidence record",
    rawSystem: "ZoikoSuite",
    governedRole: "Authoritative",
    executionSystem: "ZoikoSuite",
    evidenceSystem: "ZoikoSuite",
  },
];

export default function SystemsOfRecordStaySection() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                SOURCE OF RECORD AND COEXISTENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Your systems of record stay where they are
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              This comes before any challenge detail on purpose. If the architecture assumption is wrong, none of the challenge proof matters.
            </p>
          </motion.div>
        </div>

        {/* 5-Step Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-xl p-4 sm:p-5 flex flex-col justify-between border transition-all ${
                step.isActive
                  ? "border-[#1E5B80] bg-[#F0F6FA] shadow-sm"
                  : "border-slate-200/90 bg-white"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono text-slate-400 block mb-2">
                  STEP {step.number}
                </span>
                <h4
                  className={`text-xs sm:text-[13px] font-bold mb-2 leading-snug ${
                    step.isActive ? "text-[#0F476A]" : "text-slate-900"
                  }`}
                >
                  {step.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Systems of Record Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-[#FAF8F5] text-[10.5px] font-mono uppercase text-slate-500 tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6 font-semibold">OBJECT</th>
                  <th className="py-3.5 px-4 sm:px-6 font-semibold">RAW SYSTEM OF RECORD</th>
                  <th className="py-3.5 px-4 sm:px-6 font-semibold">ZOIKOSUITE ROLE</th>
                  <th className="py-3.5 px-4 sm:px-6 font-semibold">EXECUTION SYSTEM</th>
                  <th className="py-3.5 px-4 sm:px-6 font-semibold bg-[#F0F6FA] text-[#0F476A]">
                    EVIDENCE RECORD
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {records.map((r, rIdx) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-slate-50/70 transition-colors"
                  >
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                      {r.object}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-600 font-mono text-[11px]">
                      {r.rawSystem}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-700">
                      {r.governedRole}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-600 font-mono text-[11px]">
                      {r.executionSystem}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#0F476A] bg-[#F0F6FA]/50 font-mono text-[11px]">
                      {r.evidenceSystem}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
