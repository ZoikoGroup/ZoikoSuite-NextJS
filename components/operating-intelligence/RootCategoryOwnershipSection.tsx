"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ExceptionRecord {
  name: string;
  object: string;
  entity: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  severityDetail: string;
  owner: string;
  age: string;
  due: string;
  isOverdue?: boolean;
  escalation: string;
  escalationRole?: string;
  escalationStatus: "pending" | "none" | "immediate" | "escalated";
}

const exceptionRecords: ExceptionRecord[] = [
  {
    name: "Unverified creditor account",
    object: "VEN-4471",
    entity: "Zoiko Inc · US",
    severity: "CRITICAL",
    severityDetail: "Dual-payment breach",
    owner: "H. Vance",
    age: "2 d",
    due: "08 Aug",
    escalation: "PENDING",
    escalationRole: "Finance Director",
    escalationStatus: "pending",
  },
  {
    name: "Preparer proposed as approver",
    object: "VEN-4471",
    entity: "Zoiko Inc · US",
    severity: "CRITICAL",
    severityDetail: "Segregation conflict",
    owner: "Compliance",
    age: "2 d",
    due: "08 Aug",
    escalation: "NONE",
    escalationStatus: "none",
  },
  {
    name: "Reinsurance past review date",
    object: "JNL-1401",
    entity: "Zoiko India · IN",
    severity: "HIGH",
    severityDetail: "Stale source 6 months",
    owner: "Unassigned",
    age: "181 d",
    due: "Overdue",
    isOverdue: true,
    escalation: "IMMEDIATE ACTION",
    escalationRole: "General Counsel",
    escalationStatus: "immediate",
  },
  {
    name: "Filing channel not configured",
    object: "VAT-0338",
    entity: "Zoiko Pte · SG",
    severity: "MEDIUM",
    severityDetail: "No gateway interface",
    owner: "P. Shum",
    age: "6 d",
    due: "30 Sep",
    escalation: "NONE",
    escalationStatus: "none",
  },
  {
    name: "Intercompany threshold mismatch",
    object: "JNL-9901",
    entity: "Group",
    severity: "HIGH",
    severityDetail: "Policy context: balance group threshold",
    owner: "Controller",
    age: "9 d",
    due: "Overdue",
    isOverdue: true,
    escalation: "ESCALATED",
    escalationRole: "Finance Director",
    escalationStatus: "escalated",
  },
];

const categoryHistograms = [
  { category: "Evidence", count: 14, percent: 80 },
  { category: "Source", count: 8, percent: 45 },
  { category: "Authority", count: 17, percent: 95 },
  { category: "Execution", count: 12, percent: 65 },
  { category: "Policy", count: 9, percent: 50 },
  { category: "Reconciliation", count: 6, percent: 35 },
];

const rootCategoryPills = [
  "Policy",
  "Evidence",
  "Authority",
  "Source",
  "Execution",
  "Obligation",
  "Reconciliation",
];

export default function RootCategoryOwnershipSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center border-t border-[#e6e2d8]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                EXCEPTION INTELLIGENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Root category, ownership, age
              <br />
              and escalation
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Severity carries a text reason. Trends appear only with a definition,
              a denominator, a scope, a timeframe, a source and drill-down.
            </p>
          </div>
        </div>

        {/* Full-width 3D Graphic Container (pi8.png) - PRESERVED FOR DESKTOP ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full rounded-2xl overflow-hidden border border-[#e2ddd3] bg-white shadow-lg"
        >
          <Image
            src="/operating-intelligence/pi8.png"
            alt="Root category, priority metrics and escalation trend illustration"
            width={1240}
            height={640}
            priority
            className="w-full h-auto object-contain block"
          />
        </motion.div>

        {/* Mobile Terminal & Categories Container - SHOWN ON MOBILE ONLY (lg:hidden) */}
        <div className="block lg:hidden w-full space-y-6">
          {/* Exception Register Terminal */}
          <div className="rounded-xl overflow-hidden border border-[#1e3a4e] bg-[#0c1e28] shadow-xl">
            {/* Top Bar */}
            <div className="bg-[#081721] px-4 py-3 border-b border-[#183446] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-white tracking-wider">
                  EXCEPTION REGISTER · TWELVE FIELDS PER RECORD
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            {/* Subheader */}
            <div className="bg-[#0b212f] px-4 py-2 border-b border-[#183446]">
              <span className="text-[9.5px] font-mono font-semibold text-[#8ca8ba] tracking-wider uppercase">
                OPEN EXCEPTIONS IN THE SELECTED SCOPE
              </span>
            </div>

            {/* Horizontal Scroll Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[780px]">
                <thead>
                  <tr className="border-b border-[#183446] bg-[#081c29] text-[9.5px] font-mono font-bold text-[#648498] uppercase tracking-wider">
                    <th className="py-2.5 px-3">EXCEPTION</th>
                    <th className="py-2.5 px-3">OBJECT</th>
                    <th className="py-2.5 px-3">ENTITY / JURISDICTION</th>
                    <th className="py-2.5 px-3">SEVERITY</th>
                    <th className="py-2.5 px-3">OWNER</th>
                    <th className="py-2.5 px-3">AGE</th>
                    <th className="py-2.5 px-3">DUE</th>
                    <th className="py-2.5 px-3 text-right">ESCALATION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#132c3c] text-[11px] font-mono">
                  {exceptionRecords.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#0f2838] transition-colors">
                      <td className="py-3 px-3 font-medium text-white whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="py-3 px-3 text-[#38bdf8] whitespace-nowrap">
                        {row.object}
                      </td>
                      <td className="py-3 px-3 text-[#cbd5e1] whitespace-nowrap">
                        {row.entity}
                      </td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span
                            className={`inline-flex items-center gap-1 font-bold ${
                              row.severity === "CRITICAL"
                                ? "text-rose-400"
                                : row.severity === "HIGH"
                                ? "text-orange-400"
                                : "text-amber-400"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                row.severity === "CRITICAL"
                                  ? "bg-rose-400"
                                  : row.severity === "HIGH"
                                  ? "bg-orange-400"
                                  : "bg-amber-400"
                              }`}
                            />
                            {row.severity}
                          </span>
                          <span className="text-[10px] text-[#94a3b8]">
                            {row.severityDetail}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-[#94a3b8] whitespace-nowrap">
                        {row.owner}
                      </td>
                      <td className="py-3 px-3 text-[#cbd5e1] whitespace-nowrap">
                        {row.age}
                      </td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        <span
                          className={
                            row.isOverdue ? "text-rose-400 font-bold" : "text-[#94a3b8]"
                          }
                        >
                          {row.due}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap">
                        <div className="flex flex-col items-end">
                          <span
                            className={`inline-flex items-center gap-1 font-bold text-[10px] ${
                              row.escalationStatus === "immediate" ||
                              row.escalationStatus === "escalated"
                                ? "text-rose-400"
                                : row.escalationStatus === "pending"
                                ? "text-amber-400"
                                : "text-slate-400"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                row.escalationStatus === "immediate" ||
                                row.escalationStatus === "escalated"
                                  ? "bg-rose-400"
                                  : row.escalationStatus === "pending"
                                  ? "bg-amber-400"
                                  : "bg-slate-400"
                              }`}
                            />
                            {row.escalation}
                          </span>
                          {row.escalationRole && (
                            <span className="text-[9.5px] text-[#8ca8ba]">
                              {row.escalationRole}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2 Bottom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1: Exception Categories Trailing 90 Days */}
            <div className="rounded-xl border border-[#dbe4eb] bg-white p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#7896a9] uppercase block mb-4">
                  EXCEPTION CATEGORIES · TRAILING 90 DAYS
                </span>

                <div className="space-y-3">
                  {categoryHistograms.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-mono">
                      <span className="w-28 text-[#08222F] font-semibold truncate">
                        {item.category}
                      </span>
                      <div className="flex-1 h-2 rounded-full bg-[#f1f5f9] overflow-hidden">
                        <div
                          className="h-full bg-[#08222F] rounded-full"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                      <span className="w-6 text-right font-bold text-[#08222F]">
                        {item.count < 10 ? `0${item.count}` : item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#eef2f6]">
                <p className="text-[10.5px] text-[#64748b] leading-relaxed">
                  <span className="font-semibold text-[#08222F]">Definition:</span> Exceptions categorized by primary root cause. Scope: Group. Trailing 90 days. Source: Governance archive.
                </p>
              </div>
            </div>

            {/* Card 2: Root Categories */}
            <div className="rounded-xl border border-[#dbe4eb] bg-white p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#7896a9] uppercase block mb-4">
                  ROOT CATEGORIES
                </span>

                <div className="flex flex-wrap gap-2">
                  {rootCategoryPills.map((pill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] text-xs font-medium text-[#08222F]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#eef2f6]">
                <p className="text-[10.5px] text-[#64748b] leading-relaxed">
                  <span className="font-semibold text-[#08222F]">Escalation state:</span> Active escalation paths follow defined delegation matrices rather than automatic managerial alerts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
