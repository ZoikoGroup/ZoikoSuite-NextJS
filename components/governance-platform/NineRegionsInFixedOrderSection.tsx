"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NineRegionsInFixedOrderSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#103448]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                GOVERNANCE SURFACE PATTERN
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.14]">
              Nine regions, in a fixed order
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#9ba4b5] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Fields and layouts scale to fit the action context. The control outcome and the human decision occupy separate containers and are never merged.
            </p>
          </div>
        </div>

        {/* 9 Regions Container Stack */}
        <div className="space-y-3.5 max-w-4xl mx-auto w-full">
          {/* Region 01: Entity Key */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                01
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Entity Key
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
              <div>
                <span className="text-[#64748b] block text-[9.5px]">OPERATING ENTITY</span>
                <span className="font-semibold text-[#08222F]">Northstar UK Ltd.</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9.5px]">PARENT</span>
                <span className="font-semibold text-[#08222F]">Northstar Holdings Inc.</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9.5px]">JURISDICTION</span>
                <span className="font-semibold text-[#08222F]">United Kingdom (GB)</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9.5px]">ACCOUNT CODE</span>
                <span className="font-mono text-[#08222F]">AC-20491-UK</span>
              </div>
            </div>
          </motion.div>

          {/* Region 02: Why This Action and From Where */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                02
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Why this action and from where
              </span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-24 shrink-0 text-[9.5px] uppercase">TRIGGER</span>
                <span className="text-[#334155]">Supplier change request submitted via Procurement connector</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-24 shrink-0 text-[9.5px] uppercase">SOURCE ID</span>
                <span className="font-mono text-[#08222F]">REQ-SUP-2024-003</span>
                <span className="px-1.5 py-0.2 rounded bg-[#f0fdf4] text-[#15803d] text-[9px] font-mono font-bold">
                  VERIFIED FEED
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-24 shrink-0 text-[9.5px] uppercase">INTENT</span>
                <span className="text-[#334155]">Bank detail amendment prior to scheduled payment execution</span>
              </div>
            </div>
          </motion.div>

          {/* Region 03: Policy and Jurisdiction */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                03
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Policy and jurisdiction
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px]">
                <thead>
                  <tr className="text-[#64748b] text-[9px] font-mono uppercase border-b border-[#f1f5f9]">
                    <th className="pb-1">POLICY ID</th>
                    <th className="pb-1">VERSION</th>
                    <th className="pb-1">EFFECTIVE</th>
                    <th className="pb-1">POLICY NAME</th>
                    <th className="pb-1">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f8fafc]">
                  <tr>
                    <td className="py-1 font-mono text-[#08222F]">POL-002-Supplier Bank Change Control</td>
                    <td className="py-1 text-[#64748b]">v3.2</td>
                    <td className="py-1 text-[#64748b]">01 Jan 2024</td>
                    <td className="py-1 text-[#334155]">Dual-party verify threshold &gt; £10k</td>
                    <td className="py-1">
                      <span className="px-1.5 py-0.5 rounded bg-[#fef2f2] text-[#b91c1c] text-[9px] font-mono font-bold">
                        • ACTIVE
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 font-mono text-[#08222F]">POL-018-Dual Signoff Threshold</td>
                    <td className="py-1 text-[#64748b]">v2.0</td>
                    <td className="py-1 text-[#64748b]">15 Mar 2023</td>
                    <td className="py-1 text-[#334155]">Mandatory CFO signoff above £25k</td>
                    <td className="py-1">
                      <span className="px-1.5 py-0.5 rounded bg-[#fef2f2] text-[#b91c1c] text-[9px] font-mono font-bold">
                        • ACTIVE
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 font-mono text-[#08222F]">JUR-GB-Statutory Obligation</td>
                    <td className="py-1 text-[#64748b]">v1.0</td>
                    <td className="py-1 text-[#64748b]">14 Feb 2024</td>
                    <td className="py-1 text-[#334155]">UK statutory payment register compliance</td>
                    <td className="py-1">
                      <span className="px-1.5 py-0.5 rounded bg-[#fffbeb] text-[#b45309] text-[9px] font-mono font-bold">
                        • PROFESSIONAL REVIEW
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-2 pt-2 border-t border-[#f1f5f9] flex items-center gap-2 text-[10px] text-[#15803d]">
              <span className="px-1.5 py-0.5 rounded bg-[#f0fdf4] font-mono font-bold">
                COVERED
              </span>
              <span>Jurisdiction coverage status: United Kingdom (GB) — 3 active policies, 0 gaps detected.</span>
            </div>
          </motion.div>

          {/* Region 04: Authority and Segregation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                04
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Authority and segregation
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div>
                <span className="text-[#64748b] block text-[9.5px]">ROLE &amp; SCOPE</span>
                <span className="font-semibold text-[#08222F]">Treasury Authority — UK Entity Tier 2</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9.5px]">LIMIT</span>
                <span className="font-semibold text-[#08222F]">£50,000 per transaction; £250,000 daily</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9.5px]">EFFECTIVE DATES</span>
                <span className="font-mono text-[#08222F]">01 Jan 2024 — 31 Dec 2024</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9.5px]">SEGREGATION RULE</span>
                <span className="px-1.5 py-0.5 rounded bg-[#fef2f2] text-[#b91c1c] text-[9.5px] font-mono font-bold inline-block">
                  CANNOT APPROVE OWN INITIATED REQUISITIONS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Region 05: Evidence */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                05
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Evidence
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[10.5px]">
              <span className="px-2 py-0.5 rounded bg-[#f8fafc] border border-[#e2e8f0] font-mono text-[#475569]">
                Evidence pack: 4 items
              </span>
              <span className="px-2 py-0.5 rounded bg-[#f0fdf4] border border-[#bbf7d0] font-mono font-bold text-[#15803d]">
                • Bank verification receipt: VERIFIED
              </span>
              <span className="px-2 py-0.5 rounded bg-[#f0fdf4] border border-[#bbf7d0] font-mono font-bold text-[#15803d]">
                • Supplier sign-off: ATTACHED
              </span>
              <span className="px-2 py-0.5 rounded bg-[#fef2f2] border border-[#fecaca] font-mono font-bold text-[#b91c1c]">
                • Call-back audit log: PENDING
              </span>
            </div>
          </motion.div>

          {/* Region 06: Responsibility */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                06
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Responsibility
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
              <div>
                <span className="text-[#64748b] block text-[9px] uppercase">PROPOSER</span>
                <span className="font-semibold text-[#08222F]">Daniel Foster</span>
                <span className="text-[9.5px] text-[#64748b] block">Procurement Specialist</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9px] uppercase">REVIEWER</span>
                <span className="font-semibold text-[#08222F]">Aisha Al-Mansoor</span>
                <span className="text-[9.5px] text-[#64748b] block">Legal Counsel</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9px] uppercase">APPROVER</span>
                <span className="font-semibold text-[#08222F]">Maya Chen</span>
                <span className="text-[9.5px] text-[#64748b] block">Finance Controller</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9px] uppercase">AUDIT CUSTODIAN</span>
                <span className="font-semibold text-[#08222F]">auto-payments-v2</span>
                <span className="text-[9.5px] text-[#64748b] block">Machine identity</span>
              </div>
            </div>
          </motion.div>

          {/* Region 07: Control Outcome (Six Defined Outcomes) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#d4b465] bg-[#fffdfa] text-[#08222F] p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#faeed0]">
              <span className="px-1.5 py-0.5 rounded bg-[#c5a059] text-white font-mono text-[9px] font-bold">
                07
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#92400e]">
                Control Outcome
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              <span className="px-2 py-0.5 rounded bg-[#f0fdf4] border border-[#bbf7d0] text-[9.5px] font-mono font-bold text-[#166534]">
                • Eligible for approval decision
              </span>
              <span className="px-2 py-0.5 rounded bg-[#f8fafc] border border-[#e2e8f0] text-[9.5px] font-mono font-medium text-[#475569]">
                • Actions required
              </span>
              <span className="px-2 py-0.5 rounded bg-[#f8fafc] border border-[#e2e8f0] text-[9.5px] font-mono font-medium text-[#475569]">
                • Evidence approval... current
              </span>
              <span className="px-2 py-0.5 rounded bg-[#f8fafc] border border-[#e2e8f0] text-[9.5px] font-mono font-medium text-[#475569]">
                • Escalated
              </span>
              <span className="px-2 py-0.5 rounded bg-[#fef2f2] border border-[#fecaca] text-[9.5px] font-mono font-bold text-[#b91c1c]">
                • Blocked
              </span>
              <span className="px-2 py-0.5 rounded bg-[#fffbeb] border border-[#fde68a] text-[9.5px] font-mono font-bold text-[#92400e]">
                • Professional Review
              </span>
            </div>
            <p className="text-[11px] text-[#785929] leading-relaxed italic">
              Six defined outcomes. There is deliberately no ambiguous “Pending” state, because a control outcome is never itself a final authorization.
            </p>
          </motion.div>

          {/* Region 08: Human Decision */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                08
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Human Decision
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-[#64748b] block text-[9.5px]">DECISION RECORD</span>
                <span className="font-semibold text-[#08222F]">DEC-2024-SUP-0019</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9.5px]">DECIDING PARTY</span>
                <span className="font-semibold text-[#08222F]">Maya Chen · Finance Controller</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9.5px]">DECISION</span>
                <span className="font-semibold text-[#15803d]">APPROVED with condition: call-back completed before payment run</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9.5px]">EXECUTION TIMESTAMP</span>
                <span className="font-mono text-[#08222F]">12 Aug 2024 14:22:08 UTC</span>
              </div>
            </div>
          </motion.div>

          {/* Region 09: Audit Record */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                09
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Audit Record
              </span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-28 shrink-0 text-[9.5px] uppercase">EVIDENCE SEAL</span>
                <span className="font-mono text-[#08222F]">SEAL-SHA256-4c9b88e1a8f921...</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-28 shrink-0 text-[9.5px] uppercase">SOURCES RECORDED</span>
                <span className="text-[#334155]">Procurement feed, CLM clause extract, bank API verification receipt</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-28 shrink-0 text-[9.5px] uppercase">RETENTION POLICY</span>
                <span className="text-[#334155]">7 years statutory UK commercial records retention</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
