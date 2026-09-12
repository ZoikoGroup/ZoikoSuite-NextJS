"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ModuleCommandCenterSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#f0eee6]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                PRODUCT PROOF
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Module Command Center
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              One shared UI across all ten modules. Work from several modules appears in a single governed queue with its policy outcome, evidence state and source health.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP VIEW: Pure High-Res Screen Graphic (cm2.png) - PRESERVED */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full rounded-2xl overflow-hidden border border-[#e2e8f0] bg-[#f8fafc] shadow-lg"
        >
          <Image
            src="/core-modules/cm2.png"
            alt="Module Command Center unified interface illustration"
            width={1240}
            height={680}
            priority
            className="w-full h-auto object-contain block"
          />
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE VIEW: Full Interactive Module Command Center Terminal   */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full rounded-2xl overflow-hidden border border-[#1c4055] bg-white text-[#0f172a] shadow-xl flex flex-col"
          >
            {/* Dark Top Terminal Bar */}
            <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between text-white border-b border-[#12364c]">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#8fa4b2] uppercase">
                  MODULE COMMAND CENTER
                </span>
                <span className="px-2 py-0.5 rounded bg-[#c5a059]/20 text-[#D0AA55] border border-[#c5a059]/40 text-[9px] font-mono font-bold uppercase tracking-wider">
                  ILLUSTRATIVE PRODUCT VIEW
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1c4055]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#1c4055]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#1c4055]" />
              </div>
            </div>

            <div className="p-4 space-y-4">
              {/* Filter Hierarchy Bar */}
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2 py-1 flex items-center gap-1">
                  <span className="text-[#64748b]">MODULE:</span>
                  <span className="font-semibold text-[#08222F]">All (10)</span>
                  <span className="text-[#64748b] text-[8px]">▼</span>
                </div>
                <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2 py-1 flex items-center gap-1">
                  <span className="text-[#64748b]">ORG:</span>
                  <span className="font-semibold text-[#08222F]">Northstar Holdings</span>
                  <span className="text-[#64748b] text-[8px]">▼</span>
                </div>
                <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2 py-1 flex items-center gap-1">
                  <span className="text-[#64748b]">ENTITY:</span>
                  <span className="font-semibold text-[#08222F]">All (4)</span>
                  <span className="text-[#64748b] text-[8px]">▼</span>
                </div>
                <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2 py-1 flex items-center gap-1">
                  <span className="text-[#64748b]">PERIOD:</span>
                  <span className="font-semibold text-[#08222F]">Q3 2024</span>
                  <span className="text-[#64748b] text-[8px]">▼</span>
                </div>
                <div className="ml-auto rounded border border-[#08222F] bg-[#08222F] text-white px-2.5 py-1 flex items-center gap-1 font-semibold text-[9.5px]">
                  <span>●</span>
                  <span>Export Event Audit Log</span>
                </div>
              </div>

              {/* Source-degraded Alert Callout */}
              <div className="p-3.5 rounded-xl border border-[#fde68a] bg-[#fffbeb] text-xs text-[#92400e] leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="font-bold shrink-0">⚠</span>
                  <div>
                    <strong>Source degraded — Tax filing connector:</strong> Last successful run was 2 days ago; last known valid state 02 Aug 09:14. Affects 4 Singapore tax obligations only; other jurisdictions and modules are unaffected. Recovery route: reconciliation required.
                  </div>
                </div>
              </div>

              {/* 6 Metrics / KPI Grid */}
              <div className="grid grid-cols-3 gap-2.5 text-left">
                {/* Metric 1 */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#64748b] uppercase block mb-0.5">
                    ITEMS REQUIRING ATTENTION
                  </span>
                  <div className="text-xl font-bold text-[#b45309] leading-tight">18</div>
                  <span className="text-[10px] text-[#64748b] block mt-0.5">across 6 modules</span>
                </div>

                {/* Metric 2 */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#64748b] uppercase block mb-0.5">
                    DUE THIS CALENDAR
                  </span>
                  <div className="text-xl font-bold text-[#08222F] leading-tight">31</div>
                  <span className="text-[10px] text-[#64748b] block mt-0.5">2 overdue</span>
                </div>

                {/* Metric 3 */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#64748b] uppercase block mb-0.5">
                    POLICY EXCEPTIONS
                  </span>
                  <div className="text-xl font-bold text-[#b45309] leading-tight">5</div>
                  <span className="text-[10px] text-[#64748b] block mt-0.5">3 escalating</span>
                </div>

                {/* Metric 4 */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#64748b] uppercase block mb-0.5">
                    EVIDENCE COMPLETENESS
                  </span>
                  <div className="text-xl font-bold text-[#08222F] leading-tight">6 of 9</div>
                  <span className="text-[10px] text-[#64748b] block mt-0.5">mandated · 2 missing</span>
                </div>

                {/* Metric 5 */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#64748b] uppercase block mb-0.5">
                    SOURCE HEALTH
                  </span>
                  <div className="text-xl font-bold text-[#08222F] leading-tight">5 of 6</div>
                  <span className="text-[10px] text-[#b45309] block mt-0.5">1 degraded</span>
                </div>

                {/* Metric 6 */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#64748b] uppercase block mb-0.5">
                    PENDING APPROVAL
                  </span>
                  <div className="text-xl font-bold text-[#08222F] leading-tight">4</div>
                  <span className="text-[10px] text-[#64748b] block mt-0.5">awaiting signer ▼</span>
                </div>
              </div>

              {/* Cross-Module Work Queue Header */}
              <div className="pt-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#8fa4b2] uppercase block mb-2">
                  CROSS-MODULE WORK QUEUE — FICTITIOUS EVALUATION DATA
                </span>

                {/* Work Queue Table Container */}
                <div className="overflow-x-auto rounded-xl border border-[#e2e8f0]">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[9.5px] font-mono tracking-wider text-[#64748b] uppercase">
                        <th className="py-2.5 px-3">OBJECT</th>
                        <th className="py-2.5 px-3">MODULE</th>
                        <th className="py-2.5 px-3">ENTITY</th>
                        <th className="py-2.5 px-3">STAGE</th>
                        <th className="py-2.5 px-3">OWNER</th>
                        <th className="py-2.5 px-3">DUE</th>
                        <th className="py-2.5 px-3">POLICY OUTCOME</th>
                        <th className="py-2.5 px-3">EVIDENCE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#edf2f7] text-[11px] text-[#334155]">
                      {/* Row 1 */}
                      <tr className="hover:bg-[#f8fafc]/80 bg-[#fefce8]/40">
                        <td className="py-3 px-3">
                          <div className="font-semibold text-[#08222F]">Supplier bank-detail change</div>
                          <div className="text-[9px] text-[#64748b]">SUP-003</div>
                        </td>
                        <td className="py-3 px-3 text-[#475569]">Procurement</td>
                        <td className="py-3 px-3 text-[#475569]">Northstar UK Ltd.</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#eff6ff] border border-[#dbeafe] text-[9px] font-mono font-bold text-[#1d4ed8]">
                            • 04 EXECUTE
                          </span>
                        </td>
                        <td className="py-3 px-3 text-[#08222F] font-medium">Daniel Foster</td>
                        <td className="py-3 px-3 text-[#64748b]">12 Aug</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#fef2f2] border border-[#fecaca] text-[9px] font-mono font-bold text-[#b91c1c]">
                            • BLOCKED — 3-WAY MATCH FAIL
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#fef2f2] text-[9px] font-mono font-bold text-[#b91c1c]">
                            • 1 MISSING
                          </span>
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="hover:bg-[#f8fafc]/80">
                        <td className="py-3 px-3">
                          <div className="font-semibold text-[#08222F]">Invoice INV-4471</div>
                          <div className="text-[9px] text-[#64748b]">Redundant logistics</div>
                        </td>
                        <td className="py-3 px-3 text-[#475569]">Accounts Payable</td>
                        <td className="py-3 px-3 text-[#475569]">Northstar UK Ltd.</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#fef3c7] border border-[#fde68a] text-[9px] font-mono font-bold text-[#92400e]">
                            • 04 / 28C
                          </span>
                        </td>
                        <td className="py-3 px-3 text-[#08222F] font-medium">Priya Nair</td>
                        <td className="py-3 px-3 text-[#64748b]">14 Aug</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#fffbeb] border border-[#fef3c7] text-[9px] font-mono font-bold text-[#b45309]">
                            • APPROVAL OVERDUE
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#f0fdf4] text-[9px] font-mono font-bold text-[#15803d]">
                            • CURRENT
                          </span>
                        </td>
                      </tr>

                      {/* Row 3 */}
                      <tr className="hover:bg-[#f8fafc]/80">
                        <td className="py-3 px-3">
                          <div className="font-semibold text-[#08222F]">August pay run</div>
                          <div className="text-[9px] text-[#64748b]">Munich team (GmbH)</div>
                        </td>
                        <td className="py-3 px-3 text-[#475569]">Payroll</td>
                        <td className="py-3 px-3 text-[#475569]">Northstar GmbH</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#eff6ff] border border-[#dbeafe] text-[9px] font-mono font-bold text-[#1d4ed8]">
                            • 03 RELEASE PREP
                          </span>
                        </td>
                        <td className="py-3 px-3 text-[#08222F] font-medium">Elena Richter</td>
                        <td className="py-3 px-3 text-[#64748b]">24 Aug</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#eff6ff] text-[9px] font-mono font-bold text-[#1d4ed8]">
                            • WAITING ON FILING
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#f8fafc] text-[9px] font-mono font-bold text-[#64748b]">
                            • STABLE
                          </span>
                        </td>
                      </tr>

                      {/* Row 4 */}
                      <tr className="hover:bg-[#f8fafc]/80 bg-[#fffbeb]/40">
                        <td className="py-3 px-3">
                          <div className="font-semibold text-[#08222F]">GST F5 obligation</div>
                          <div className="text-[9px] text-[#b45309]">Affected by degraded source</div>
                        </td>
                        <td className="py-3 px-3 text-[#475569]">Tax Management</td>
                        <td className="py-3 px-3 text-[#475569]">Northstar Singapore Pte. Ltd.</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#fef3c7] border border-[#fde68a] text-[9px] font-mono font-bold text-[#92400e]">
                            • WAITING
                          </span>
                        </td>
                        <td className="py-3 px-3 text-[#08222F] font-medium">Lukas Meier</td>
                        <td className="py-3 px-3 text-[#64748b]">15 Sep</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[9px] font-mono font-bold text-[#475569]">
                            • PROFESSIONAL REVIEW
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#fffbeb] text-[9px] font-mono font-bold text-[#b45309]">
                            • 2 STALE
                          </span>
                        </td>
                      </tr>

                      {/* Row 5 */}
                      <tr className="hover:bg-[#f8fafc]/80">
                        <td className="py-3 px-3">
                          <div className="font-semibold text-[#08222F]">Supplier contract 00192</div>
                          <div className="text-[9px] text-[#64748b]">With indemnity</div>
                        </td>
                        <td className="py-3 px-3 text-[#475569]">Legal &amp; Contracts</td>
                        <td className="py-3 px-3 text-[#475569]">Northstar UK Ltd.</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#fef3c7] border border-[#fde68a] text-[9px] font-mono font-bold text-[#92400e]">
                            • PENDING SIG
                          </span>
                        </td>
                        <td className="py-3 px-3 text-[#08222F] font-medium">Aisha Al-Mansoor</td>
                        <td className="py-3 px-3 text-[#64748b]">18 Aug</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#fffbeb] border border-[#fde68a] text-[9px] font-mono font-bold text-[#92400e]">
                            • LEGAL REVIEW
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#f0fdf4] text-[9px] font-mono font-bold text-[#15803d]">
                            • COMPLETE
                          </span>
                        </td>
                      </tr>

                      {/* Row 6 */}
                      <tr className="hover:bg-[#f8fafc]/80">
                        <td className="py-3 px-3">
                          <div className="font-semibold text-[#08222F]">Period close checklist</div>
                        </td>
                        <td className="py-3 px-3 text-[#475569]">Accounting &amp; GL</td>
                        <td className="py-3 px-3 text-[#475569]">Northstar UK Ltd.</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#f1f5f9] border border-[#cbd5e1] text-[9px] font-mono font-bold text-[#475569]">
                            • PREP
                          </span>
                        </td>
                        <td className="py-3 px-3 text-[#08222F] font-medium">Maya Chen</td>
                        <td className="py-3 px-3 text-[#64748b]">05 Aug</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#f0fdf4] border border-[#bbf7d0] text-[9px] font-mono font-bold text-[#15803d]">
                            • PERMITTED
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#f0fdf4] text-[9px] font-mono font-bold text-[#15803d]">
                            • CONFIRMED
                          </span>
                        </td>
                      </tr>

                      {/* Row 7 */}
                      <tr className="hover:bg-[#f8fafc]/80 bg-[#f1f5f9]/30">
                        <td className="py-3 px-3">
                          <div className="font-semibold text-[#08222F]">Restricted item</div>
                        </td>
                        <td className="py-3 px-3 text-[#94a3b8] text-[10px]">Restricted by role view</td>
                        <td className="py-3 px-3 text-[#94a3b8]">—</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#f1f5f9] text-[9px] font-mono font-bold text-[#94a3b8]">
                            • RESTRICTED
                          </span>
                        </td>
                        <td className="py-3 px-3 text-[#94a3b8]">—</td>
                        <td className="py-3 px-3 text-[#94a3b8]">—</td>
                        <td className="py-3 px-3 text-[#94a3b8]">—</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-[#f1f5f9] text-[9px] font-mono font-bold text-[#94a3b8]">
                            • RESTRICTED
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Disclaimer Footnotes */}
              <div className="pt-2 text-[9.5px] font-mono text-[#64748b] leading-relaxed space-y-1">
                <p>
                  All names, entities, amounts and operational records in this view are fictitious evaluation data. No real action can be executed from a public page.
                </p>
                <p>
                  No obscured performance benchmark, resolution percentage or uptime readiness score appears in this shell. The command-and-control surface prioritizes operational transparency through honest source tracking and separate identifying variables.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Inspect In Interactive Tour Button */}
          <div className="w-full">
            <Link
              href="/platform-tour"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#08222F] text-white font-semibold text-xs hover:bg-[#0c2f42] transition-colors shadow-sm"
            >
              <span>Inspect this in the interactive tour</span>
              <span className="text-xs">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

