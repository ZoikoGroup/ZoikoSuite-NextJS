"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronDown,
  RefreshCw,
  AlertTriangle,
  FileText,
  Shield,
  Clock,
  User,
  ArrowRight,
} from "lucide-react";

export default function IntelligenceCommandCenterSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  return (
    <section className="w-full bg-[#08222F] text-white py-16 lg:py-20 px-4 sm:px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 lg:mb-12">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                PRODUCT PROOF
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.12]">
              Intelligence Command Center
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex items-center lg:pt-3">
            <p className="text-[#9ba4b5] text-[13.5px] sm:text-sm leading-relaxed max-w-[500px]">
              An operating surface, not a marketing dashboard. Deterministic
              sort, explicit refresh, and no list that reorders itself while you are
              reading it.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP VIEW: Pure High-Res Isometric Screen Graphic (pi2.png) */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full rounded-2xl overflow-hidden border border-[#1b3a4f] bg-[#0c1f2b] shadow-2xl mb-8"
        >
          <Image
            src="/operating-intelligence/pi2.png"
            alt="Intelligence Command Center central operating surface"
            width={1200}
            height={600}
            priority
            className="w-full h-auto object-contain block"
          />
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE VIEW: Full Interactive Synthetic Surface Terminal Mock */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:hidden w-full rounded-2xl overflow-hidden border border-[#1c4055] bg-white text-[#0f172a] shadow-2xl mb-8 flex flex-col"
        >
          {/* Top Window Bar */}
          <div className="bg-[#0B1E2B] px-4 py-3 flex items-center justify-between text-white border-b border-[#1c4055]">
            <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase">
              COMMAND CENTER · FULL SURFACE · SYNTHETIC DATA
            </span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
              <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
              <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
            </div>
          </div>

          <div className="p-3 sm:p-5 flex flex-col space-y-4">
            {/* Top Filter Controls */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2 py-1 flex items-center gap-1">
                  <span className="text-[#64748b]">ORG</span>
                  <span className="font-semibold text-[#08222F]">Zoiko Group Holdings</span>
                  <ChevronDown className="w-3 h-3 text-[#64748b]" />
                </div>
                <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2 py-1 flex items-center gap-1">
                  <span className="text-[#64748b]">ENTITY</span>
                  <span className="font-semibold text-[#08222F]">All · 14</span>
                  <ChevronDown className="w-3 h-3 text-[#64748b]" />
                </div>
                <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2 py-1 flex items-center gap-1">
                  <span className="text-[#64748b]">JURISDICTION</span>
                  <span className="font-semibold text-[#08222F]">All active</span>
                  <ChevronDown className="w-3 h-3 text-[#64748b]" />
                </div>
                <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2 py-1 flex items-center gap-1">
                  <span className="text-[#64748b]">RANGE</span>
                  <span className="font-semibold text-[#08222F]">Next 30 days</span>
                  <ChevronDown className="w-3 h-3 text-[#64748b]" />
                </div>
                <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2 py-1 flex items-center gap-1">
                  <span className="text-[#64748b]">SEARCH</span>
                  <ChevronDown className="w-3 h-3 text-[#64748b]" />
                </div>
              </div>

              {/* Updated items available banner */}
              <div className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50/70 px-3 py-1.5 text-[10.5px] font-mono">
                <span className="text-blue-800 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  1 UPDATED ITEMS AVAILABLE
                </span>
                <button className="px-2.5 py-0.5 rounded bg-white border border-blue-300 text-blue-700 font-bold hover:bg-blue-100 transition-colors">
                  Refresh
                </button>
              </div>
            </div>

            {/* Scope Tabs Strip */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[10.5px] font-mono no-scrollbar">
              {[
                { id: "all", label: "• All items" },
                { id: "assigned", label: "Assigned to me" },
                { id: "obligations", label: "Obligations" },
                { id: "exceptions", label: "Exceptions" },
                { id: "review", label: "Review requested" },
                { id: "governance", label: "Governance" },
                { id: "evidence", label: "Evidence health" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2.5 py-1 rounded whitespace-nowrap font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#08222F] text-white"
                      : "bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Quick Filter Badges + Instruction */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-1 text-[9.5px] font-mono">
                <span className="px-2 py-0.5 rounded border border-[#cbd5e1] bg-white text-[#475569]">
                  Financial
                </span>
                <span className="px-2 py-0.5 rounded bg-[#08222F] text-white font-bold">
                  Scope: attention
                </span>
                <span className="px-2 py-0.5 rounded border border-[#cbd5e1] bg-white text-[#475569]">
                  Priority: any
                </span>
                <span className="px-2 py-0.5 rounded border border-[#cbd5e1] bg-white text-[#475569]">
                  Status: open
                </span>
                <span className="px-2 py-0.5 rounded border border-[#cbd5e1] bg-white text-[#475569]">
                  Due: next 30 days
                </span>
                <span className="px-2 py-0.5 rounded border border-[#cbd5e1] bg-white text-[#475569]">
                  Advanced filters (6)
                </span>
              </div>
              <p className="text-[10px] text-[#64748b] leading-tight italic">
                All items below carry an owner, due date and priority posture; overdue order cannot change while you are reviewing it except on explicit Refresh.
              </p>
            </div>

            {/* 6 Metrics Grid (3 cols x 2 rows) */}
            <div className="grid grid-cols-3 gap-2 border-t border-b border-[#e2e8f0] py-2.5">
              <div className="flex flex-col">
                <span className="text-[8.5px] font-mono font-bold text-[#64748b] uppercase leading-tight">
                  REQUIRES REVIEW
                </span>
                <span className="text-lg font-bold font-mono text-amber-600 mt-0.5">23</span>
                <span className="text-[9px] text-[#94a3b8]">6 past due</span>
              </div>

              <div className="flex flex-col border-l border-[#e2e8f0] pl-2">
                <span className="text-[8.5px] font-mono font-bold text-[#64748b] uppercase leading-tight">
                  OBLIGATIONS DUE
                </span>
                <span className="text-lg font-bold font-mono text-[#08222F] mt-0.5">31</span>
                <span className="text-[9px] text-[#94a3b8]">4 overdue</span>
              </div>

              <div className="flex flex-col border-l border-[#e2e8f0] pl-2">
                <span className="text-[8.5px] font-mono font-bold text-[#64748b] uppercase leading-tight">
                  POLICY EXCEPTIONS
                </span>
                <span className="text-lg font-bold font-mono text-rose-600 mt-0.5">7</span>
                <span className="text-[9px] text-[#94a3b8]">2 recurring</span>
              </div>

              <div className="flex flex-col pt-2 border-t border-[#f1f5f9]">
                <span className="text-[8.5px] font-mono font-bold text-[#64748b] uppercase leading-tight">
                  EVIDENCE GAPS
                </span>
                <span className="text-lg font-bold font-mono text-amber-600 mt-0.5">9</span>
                <span className="text-[9px] text-[#94a3b8]">3 restricted</span>
              </div>

              <div className="flex flex-col pt-2 border-t border-[#f1f5f9] border-l border-[#e2e8f0] pl-2">
                <span className="text-[8.5px] font-mono font-bold text-[#64748b] uppercase leading-tight">
                  CONTROL OUTCOMES
                </span>
                <span className="text-lg font-bold font-mono text-[#08222F] mt-0.5">12</span>
                <span className="text-[9px] text-[#94a3b8]">Trailing 30 days</span>
              </div>

              <div className="flex flex-col pt-2 border-t border-[#f1f5f9] border-l border-[#e2e8f0] pl-2">
                <span className="text-[8.5px] font-mono font-bold text-[#64748b] uppercase leading-tight">
                  SOURCE HEALTH
                </span>
                <span className="text-lg font-bold font-mono text-amber-600 mt-0.5">5 of 7</span>
                <span className="text-[9px] text-[#94a3b8]">1 auth expired</span>
              </div>
            </div>

            {/* Attention Queue Table */}
            <div className="flex flex-col">
              <span className="text-[9px] font-mono font-bold tracking-wider text-[#64748b] uppercase mb-2">
                ATTENTION QUEUE · ORDERED BY BLOCKING STATE, THEN DUE DATE, THEN PRIORITY, THEN AGE
              </span>

              <div className="overflow-x-auto border border-[#e2e8f0] rounded-lg">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[9.5px] font-mono text-[#64748b] uppercase">
                      <th className="py-2 px-2.5 font-semibold">PRIORITY</th>
                      <th className="py-2 px-2 font-semibold">REASON</th>
                      <th className="py-2 px-2 font-semibold">OBJECT / DETAIL</th>
                      <th className="py-2 px-2 font-semibold">FUNCTION</th>
                      <th className="py-2 px-2 font-semibold">ENTITY</th>
                      <th className="py-2 px-2 font-semibold">JURISDICTION</th>
                      <th className="py-2 px-2 font-semibold">OWNER</th>
                      <th className="py-2 px-2.5 font-semibold text-right">AGE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#edf2f7] text-[11px]">
                    {/* Row 1 - Highlighted Active */}
                    <tr className="bg-[#fefcf3] font-medium">
                      <td className="py-2.5 px-2.5 align-top">
                        <span className="inline-block px-1.5 py-0.5 rounded border border-rose-300 text-rose-700 bg-rose-50 text-[9px] font-mono font-bold">
                          • CRITICAL
                        </span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-xs text-[#08222F] font-bold">
                        Blocking policy stale
                      </td>
                      <td className="py-2.5 px-2 align-top">
                        <span className="font-bold text-[#08222F] block">Bank detail change</span>
                        <span className="text-[9.5px] text-[#64748b]">VEN-4471</span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#475569]">Procurement</td>
                      <td className="py-2.5 px-2 align-top text-[#475569]">Zoiko Inc</td>
                      <td className="py-2.5 px-2 align-top">
                        <span className="text-[#08222F] block text-[10.5px]">United States</span>
                        <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200">
                          • VERIFIED
                        </span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#334155]">H. Vance</td>
                      <td className="py-2.5 px-2.5 align-top text-right text-[10px] font-mono text-[#64748b]">
                        08 Aug<br />2 d
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="bg-white">
                      <td className="py-2.5 px-2.5 align-top">
                        <span className="inline-block px-1.5 py-0.5 rounded border border-amber-300 text-amber-700 bg-amber-50 text-[9px] font-mono font-bold">
                          • HIGH
                        </span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#08222F]">
                        Deadline and approval required
                      </td>
                      <td className="py-2.5 px-2 align-top">
                        <span className="font-bold text-[#08222F] block">Payroll release</span>
                        <span className="text-[9.5px] text-[#64748b]">PYR-0081</span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#475569]">Workforce</td>
                      <td className="py-2.5 px-2 align-top text-[#475569]">Zoiko UK Ltd</td>
                      <td className="py-2.5 px-2 align-top">
                        <span className="text-[#08222F] block text-[10.5px]">United Kingdom</span>
                        <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200">
                          • VERIFIED
                        </span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#334155]">A. Whitfield</td>
                      <td className="py-2.5 px-2.5 align-top text-right text-[10px] font-mono text-[#64748b]">
                        29 Aug<br />1 d
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="bg-white">
                      <td className="py-2.5 px-2.5 align-top">
                        <span className="inline-block px-1.5 py-0.5 rounded border border-amber-300 text-amber-700 bg-amber-50 text-[9px] font-mono font-bold">
                          • HIGH
                        </span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#08222F]">
                        Professional review required
                      </td>
                      <td className="py-2.5 px-2 align-top">
                        <span className="font-bold text-[#08222F] block">Clause deviation</span>
                        <span className="text-[9.5px] text-[#64748b]">CTR-1174</span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#475569]">Legal</td>
                      <td className="py-2.5 px-2 align-top text-[#475569]">Zoiko Ireland GmbH</td>
                      <td className="py-2.5 px-2 align-top">
                        <span className="text-[#08222F] block text-[10.5px]">Ireland</span>
                        <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200">
                          • VERIFIED
                        </span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#334155]">R. Osei</td>
                      <td className="py-2.5 px-2.5 align-top text-right text-[10px] font-mono text-[#64748b]">
                        02 Sep<br />4 d
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="bg-white">
                      <td className="py-2.5 px-2.5 align-top">
                        <span className="inline-block px-1.5 py-0.5 rounded border border-blue-300 text-blue-700 bg-blue-50 text-[9px] font-mono font-bold">
                          • MEDIUM
                        </span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#08222F]">
                        Source degraded — scope affected
                      </td>
                      <td className="py-2.5 px-2 align-top">
                        <span className="font-bold text-[#08222F] block">GST return prep</span>
                        <span className="text-[9.5px] text-[#64748b]">VAT-0338</span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#475569]">Tax</td>
                      <td className="py-2.5 px-2 align-top text-[#475569]">Zoiko Pte Ltd</td>
                      <td className="py-2.5 px-2 align-top">
                        <span className="text-[#08222F] block text-[10.5px]">Singapore</span>
                        <span className="text-[9px] font-mono text-amber-700 bg-amber-50 px-1 py-0.5 rounded border border-amber-200">
                          • UNVERIFIED/DEGRADED
                        </span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#334155]">L. Tan</td>
                      <td className="py-2.5 px-2.5 align-top text-right text-[10px] font-mono text-[#64748b]">
                        30 Sep<br />6 d
                      </td>
                    </tr>

                    {/* Row 5 */}
                    <tr className="bg-white">
                      <td className="py-2.5 px-2.5 align-top">
                        <span className="inline-block px-1.5 py-0.5 rounded border border-blue-300 text-blue-700 bg-blue-50 text-[9px] font-mono font-bold">
                          • MEDIUM
                        </span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#08222F]">
                        Authority not assigned
                      </td>
                      <td className="py-2.5 px-2 align-top">
                        <span className="font-bold text-[#08222F] block">Intercompany journal</span>
                        <span className="text-[9.5px] text-[#64748b]">JNL-1401</span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#475569]">Treasury</td>
                      <td className="py-2.5 px-2 align-top text-[#475569]">Zoiko India Pvt</td>
                      <td className="py-2.5 px-2 align-top">
                        <span className="text-[#08222F] block text-[10.5px]">India</span>
                        <span className="text-[9px] font-mono text-amber-700 bg-amber-50 px-1 py-0.5 rounded border border-amber-200">
                          • REVIEW REQUIRED
                        </span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#64748b]">Unassigned</td>
                      <td className="py-2.5 px-2.5 align-top text-right text-[10px] font-mono text-[#64748b]">
                        04 Oct
                      </td>
                    </tr>

                    {/* Row 6 */}
                    <tr className="bg-white">
                      <td className="py-2.5 px-2.5 align-top">
                        <span className="inline-block px-1.5 py-0.5 rounded border border-slate-300 text-slate-700 bg-slate-100 text-[9px] font-mono font-bold">
                          • SCOPED
                        </span>
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#64748b] italic">
                        Restricted — existence only
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#64748b] text-[10px]">
                        Restricted item (count=1, no identifying metadata)
                      </td>
                      <td className="py-2.5 px-2 align-top text-[#64748b]">—</td>
                      <td className="py-2.5 px-2 align-top text-[#64748b]">—</td>
                      <td className="py-2.5 px-2 align-top text-[#64748b]">—</td>
                      <td className="py-2.5 px-2 align-top text-[#64748b]">—</td>
                      <td className="py-2.5 px-2.5 align-top text-right text-[#64748b]">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3 Summary Context Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-3 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono font-bold text-[#64748b] uppercase block mb-1">
                    OBLIGATION RETURN · DUE 08 AUG
                  </span>
                  <p className="text-xs font-semibold text-[#08222F] mb-1">
                    15 items · 1 overdue · 2 unassigned
                  </p>
                </div>
                <p className="text-[9.5px] text-[#64748b] leading-tight">
                  Due date failure triggers state advance and risk escalation in summary for the parent committee.
                </p>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-3 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono font-bold text-[#64748b] uppercase block mb-1">
                    EXCEPTION CONCENTRATION
                  </span>
                  <p className="text-xs font-semibold text-[#08222F] mb-1">
                    Missing bank verification · 3 documents
                  </p>
                </div>
                <p className="text-[9.5px] text-[#64748b] leading-tight">
                  Stakeholders aware · 2 open reviews
                </p>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-3 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono font-bold text-[#64748b] uppercase block mb-1">
                    RECENT REVIEWS &amp; DECISIONS
                  </span>
                  <p className="text-[11px] text-[#08222F] mb-0.5">
                    <span className="font-bold font-mono text-[#0284c7]">EV-81:</span> Vendor payment approved with condition · H. Vance
                  </p>
                  <p className="text-[11px] text-[#08222F]">
                    <span className="font-bold font-mono text-[#0284c7]">EV-44:</span> Contract obligation confirmed · R. Osei
                  </p>
                </div>
              </div>
            </div>

            {/* Context Drawer: VEN-4471 • CRITICAL */}
            <div className="rounded-xl border border-[#cbd5e1] bg-white p-4 shadow-sm flex flex-col space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#e2e8f0]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#08222F]">
                    Context drawer: VEN-4471
                  </span>
                  <span className="px-1.5 py-0.5 rounded border border-rose-300 text-rose-700 bg-rose-50 text-[9px] font-mono font-bold">
                    • CRITICAL
                  </span>
                </div>
              </div>

              {/* WHY THIS IS PRIORITIZED Box */}
              <div className="rounded-lg border border-[#f5dfb8] bg-[#fdf8ee] p-3 text-[11px]">
                <span className="font-mono text-[9.5px] font-bold text-[#a16207] uppercase block mb-1.5">
                  WHY THIS IS PRIORITIZED
                </span>
                <div className="space-y-1 text-[#475569]">
                  <p><span className="font-semibold text-[#08222F]">Policy outcome:</span> EVD-AP-003 enters a blocking state until callback verification is present.</p>
                  <p><span className="font-semibold text-[#08222F]">Evidence:</span> One required item missing; one restricted</p>
                  <p><span className="font-semibold text-[#08222F]">Deadline:</span> Due 08 Aug, 17:00, currently 2 days old</p>
                  <p><span className="font-semibold text-[#08222F]">Exposure:</span> USD 412,850 of open payables reference this vendor record</p>
                  <p><span className="font-semibold text-[#08222F]">History:</span> Two prior exceptions on this control this quarter</p>
                </div>
              </div>

              {/* 3 Detail Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
                <div className="rounded border border-[#e2e8f0] p-2.5 space-y-1">
                  <span className="font-mono text-[9px] font-bold text-[#64748b] uppercase block">
                    OBJECTIVE CONTEXT
                  </span>
                  <p><span className="text-[#64748b]">Object:</span> <span className="font-medium text-[#08222F]">Vendor bank detail change</span></p>
                  <p><span className="text-[#64748b]">Entity:</span> <span className="text-[#08222F]">Zoiko Inc · Z-US-04</span></p>
                  <p><span className="text-[#64748b]">Jurisdiction:</span> <span className="text-[#08222F]">United States · verified</span></p>
                  <p><span className="text-[#64748b]">Function:</span> <span className="text-[#08222F]">Procurement</span></p>
                  <p><span className="text-[#64748b]">Owner:</span> <span className="text-[#08222F]">H. Vance · Treasury Director</span></p>
                </div>

                <div className="rounded border border-[#e2e8f0] p-2.5 space-y-1">
                  <span className="font-mono text-[9px] font-bold text-[#64748b] uppercase block">
                    GOVERNANCE
                  </span>
                  <p><span className="text-[#64748b]">Policy rule:</span> <span className="font-medium text-[#08222F]">POL/SPD-11: Banking</span></p>
                  <p><span className="text-[#64748b]">Authority:</span> <span className="text-[#08222F]">Requires Vice President sign-off</span></p>
                  <p><span className="text-[#64748b]">Segregation:</span> <span className="text-[#08222F]">Preparer excluded from approval</span></p>
                  <p><span className="text-[#64748b]">Permitted:</span> <span className="text-[#08222F]">Review request; customer escalate</span></p>
                </div>

                <div className="rounded border border-[#e2e8f0] p-2.5 space-y-1">
                  <span className="font-mono text-[9px] font-bold text-[#64748b] uppercase block">
                    SIGNAL AND EVIDENCE
                  </span>
                  <p><span className="text-[#64748b]">Source:</span> <span className="font-medium text-[#08222F]">AP-ledger · inv-led-04</span></p>
                  <p><span className="text-[#64748b]">Last check:</span> <span className="text-[#08222F]">14:00 today</span></p>
                  <p><span className="text-[#64748b]">Freshness:</span> <span className="text-[#08222F]">Current</span></p>
                  <p><span className="text-[#64748b]">Evidence:</span> <span className="text-[#08222F]">2 of 3 · 1 missing · 1 restricted</span></p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                <button className="px-3 py-1.5 rounded bg-[#08222F] text-white text-[11px] font-medium hover:bg-[#12394f]">
                  Review
                </button>
                <button className="px-3 py-1.5 rounded border border-[#cbd5e1] bg-white text-[#334155] text-[11px] font-medium hover:bg-[#f8fafc]">
                  Request callback
                </button>
                <button className="px-3 py-1.5 rounded border border-[#cbd5e1] bg-white text-[#334155] text-[11px] font-medium hover:bg-[#f8fafc]">
                  Escalate
                </button>
                <button className="px-3 py-1.5 rounded border border-[#cbd5e1] bg-white text-[#334155] text-[11px] font-medium hover:bg-[#f8fafc]">
                  Open governance policy
                </button>
                <button className="px-3 py-1.5 rounded border border-[#cbd5e1] bg-white text-[#334155] text-[11px] font-medium hover:bg-[#f8fafc]">
                  View record
                </button>
              </div>

              <p className="text-[9.5px] text-[#64748b] leading-relaxed italic">
                The drawer never allows actions to execute in silence. Every step in the permitted action record bears authority, segregation and evidence confirmation.
              </p>
            </div>

            {/* NO ARBITRARY SCORE Banner */}
            <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-3 sm:p-4 text-[11.5px] text-rose-950">
              <span className="font-mono text-[10px] font-bold text-rose-700 uppercase block mb-1">
                NO ARBITRARY SCORE
              </span>
              <p className="leading-relaxed">
                Priority is a label plus contributing factors, each traceable to a source or method. ZoikoSuite does not present a single easy risk, compliance or evidence score, because a number without a governed methodology, denominator and review approval is not evidence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Two Feature Cards underneath (Shared Responsive Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl border border-[#1b3a4f] bg-[#0a1e2a] p-5 sm:p-6 shadow-sm">
            <span className="text-[10.5px] font-mono font-bold tracking-[0.14em] text-[#c5a059] uppercase block mb-2">
              REFRESH BEHAVIOR
            </span>
            <p className="text-[12.5px] sm:text-[13px] text-[#8fa7b7] leading-relaxed">
              A focused list is never reordered while you are reviewing it. New or changed items
              surface as an &quot;Updated items available&quot; indicator with an explicit Refresh control, and
              a visible &quot;Last refreshed&quot; timestamp where freshness is material.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-[#1b3a4f] bg-[#0a1e2a] p-5 sm:p-6 shadow-sm">
            <span className="text-[10.5px] font-mono font-bold tracking-[0.14em] text-[#c5a059] uppercase block mb-2">
              PARTIAL AND DEGRADED DATA
            </span>
            <p className="text-[12.5px] sm:text-[13px] text-[#8fa7b7] leading-relaxed">
              Where data is partial, stale or affected by a degraded source, the affected scope is
              identified in context — the row above showing a stale filing source is the intended
              treatment, not an error state.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
