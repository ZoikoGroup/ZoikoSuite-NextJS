"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OneSupplierChangeSixModulesSection() {
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
                CROSS-MODULE SCENARIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.14]">
              One supplier change, six
              <br />
              modules, one evidence
              <br />
              manifest
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#9ba4b5] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              The scene below walks through each stage in the chain. Notice that ownership changes hands three times while the evidence record stays continuous.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP VIEW: Pure 3D Visual Diagram (cm3.png) - PRESERVED    */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full rounded-2xl overflow-hidden border border-[#1a3f55] bg-[#0c2433] shadow-2xl"
        >
          <Image
            src="/core-modules/cm3.png"
            alt="One supplier change six modules continuous evidence pipeline"
            width={1240}
            height={680}
            priority
            className="w-full h-auto object-contain block"
          />
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE VIEW: Complete Interactive Scenario Terminal            */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full rounded-2xl overflow-hidden border border-[#1c4055] bg-white text-[#0f172a] shadow-2xl flex flex-col"
          >
            {/* Top Terminal Header Bar */}
            <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between text-white border-b border-[#12364c]">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase">
                  SCENARIO 01
                </span>
                <span className="text-[#3c5d73]">·</span>
                <span className="text-[10px] font-mono text-[#cbd5e1] font-semibold uppercase">
                  SUPPLIER BANK-DETAIL CHANGE · ACT-001
                </span>
                <span className="px-2 py-0.5 rounded bg-[#c5a059]/20 text-[#D0AA55] border border-[#c5a059]/40 text-[8.5px] font-mono font-bold uppercase tracking-wider">
                  ILLUSTRATIVE · FICTITIOUS DATA
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1c4055]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#1c4055]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#1c4055]" />
              </div>
            </div>

            <div className="p-4 space-y-4">
              {/* Terminal Section Subtitle */}
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#8fa4b2] uppercase block">
                STAGE-BY-STAGE OWNERSHIP AND RESIDUAL EVIDENCE
              </span>

              {/* Responsive Scenario Table */}
              <div className="overflow-x-auto rounded-xl border border-[#e2e8f0]">
                <table className="w-full text-left border-collapse min-w-[720px]">
                  <thead>
                    <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[9.5px] font-mono tracking-wider text-[#64748b] uppercase">
                      <th className="py-2.5 px-3">STAGE</th>
                      <th className="py-2.5 px-3">MODULE</th>
                      <th className="py-2.5 px-3">OWNERSHIP</th>
                      <th className="py-2.5 px-3">RECORD</th>
                      <th className="py-2.5 px-3">DELEGATE AUTHORITY</th>
                      <th className="py-2.5 px-3">EVIDENCE / AUDIT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#edf2f7] text-[11px] text-[#334155]">
                    {/* Stage 1 */}
                    <tr className="hover:bg-[#f8fafc]/80">
                      <td className="py-3 px-3 font-semibold text-[#08222F]">
                        Procurement request
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Procurement &amp; Commercial Operations
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded border border-[#cbd5e1] bg-[#f1f5f9] text-[9px] font-mono font-medium text-[#475569]">
                          Shared
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Supplier change request: Northstar SP-031
                      </td>
                      <td className="py-3 px-3 text-[#08222F] font-medium">
                        Procurement approver
                      </td>
                      <td className="py-3 px-3 text-[#64748b]">
                        Request record · requisition log
                      </td>
                    </tr>

                    {/* Stage 2 */}
                    <tr className="hover:bg-[#f8fafc]/80">
                      <td className="py-3 px-3 font-semibold text-[#08222F]">
                        Contract review
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Legal &amp; Contracts
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded border border-[#d0e5fc] bg-[#f0f7ff] text-[9px] font-mono font-medium text-[#1e40af]">
                          • External source
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Supplier contract · clause reference
                      </td>
                      <td className="py-3 px-3 text-[#08222F] font-medium">
                        Legal review required
                      </td>
                      <td className="py-3 px-3 text-[#64748b]">
                        Contract record · reviewer sign-off
                      </td>
                    </tr>

                    {/* Stage 3 (Highlighted Alert Row) */}
                    <tr className="hover:bg-[#fefce8] bg-[#fffdf0]">
                      <td className="py-3 px-3 font-semibold text-[#08222F]">
                        Supplier control evidence
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Compliance &amp; Obligations
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded border border-[#bbf7d0] bg-[#f0fdf4] text-[9px] font-mono font-medium text-[#166534]">
                          • ZoikoSuite
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Verification control · POL-002-v3
                      </td>
                      <td className="py-3 px-3 text-[#08222F] font-medium">
                        Control owner
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded bg-[#fef2f2] border border-[#fecaca] text-[9px] font-mono font-bold text-[#b91c1c]">
                          • BANK VERIFICATION MISSING
                        </span>
                      </td>
                    </tr>

                    {/* Stage 4 */}
                    <tr className="hover:bg-[#f8fafc]/80">
                      <td className="py-3 px-3 font-semibold text-[#08222F]">
                        Vendor payables
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Accounts Payable
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded border border-[#fde68a] bg-[#fffbeb] text-[9px] font-mono font-medium text-[#92400e]">
                          • Implementation-defined
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Payable INV-4471 · matched to PO
                      </td>
                      <td className="py-3 px-3 text-[#08222F] font-medium">
                        AP approver within limit
                      </td>
                      <td className="py-3 px-3 text-[#64748b]">
                        Match result · policy state · evidence
                      </td>
                    </tr>

                    {/* Stage 5 */}
                    <tr className="hover:bg-[#f8fafc]/80">
                      <td className="py-3 px-3 font-semibold text-[#08222F]">
                        Cash and payment readiness
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Treasury &amp; Cash Position
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded border border-[#d0e5fc] bg-[#f0f7ff] text-[9px] font-mono font-medium text-[#1e40af]">
                          • External source
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Payment proposal · UK position
                      </td>
                      <td className="py-3 px-3 text-[#08222F] font-medium">
                        Treasury authority
                      </td>
                      <td className="py-3 px-3 text-[#64748b]">
                        Source health · proposal record
                      </td>
                    </tr>

                    {/* Stage 6 */}
                    <tr className="hover:bg-[#f8fafc]/80">
                      <td className="py-3 px-3 font-semibold text-[#08222F]">
                        Accounting outcome
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Accounting &amp; General Ledger
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded border border-[#d0e5fc] bg-[#f0f7ff] text-[9px] font-mono font-medium text-[#1e40af]">
                          • External source
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Ledger handoff · entity and period
                      </td>
                      <td className="py-3 px-3 text-[#08222F] font-medium">
                        Controller
                      </td>
                      <td className="py-3 px-3 text-[#64748b]">
                        Handoff reference · journal record
                      </td>
                    </tr>

                    {/* Stage 7 */}
                    <tr className="hover:bg-[#f8fafc]/80 bg-[#f8fafc]">
                      <td className="py-3 px-3 font-semibold text-[#08222F]">
                        Evidence manifest
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        Shared across all six
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded border border-[#bbf7d0] bg-[#f0fdf4] text-[9px] font-mono font-medium text-[#166534]">
                          • ZoikoSuite
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#475569]">
                        EVD-001 · single continuous record
                      </td>
                      <td className="py-3 px-3 text-[#08222F] font-medium">
                        Evidence custodian
                      </td>
                      <td className="py-3 px-3 text-[#64748b]">
                        IDs · source versions · actors · timestamps · handoffs · final seal
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Side-by-side Context Grid: What the manifest carries & Where the boundary acts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {/* Left Card: WHAT THE MANIFEST CARRIES */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-4 space-y-2">
                  <span className="text-[9.5px] font-mono font-bold tracking-wider text-[#64748b] uppercase block mb-1">
                    WHAT THE MANIFEST CARRIES
                  </span>
                  <div className="text-[10.5px] space-y-1.5">
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[#8fa4b2] w-14 shrink-0">IDs</span>
                      <span className="text-[#334155]">ACT-001 · POL-002 v3 · ALTM-001 · EVD-001 · EVT-043</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[#8fa4b2] w-14 shrink-0">Actors</span>
                      <span className="text-[#334155]">Daniel Foster (proposer) · Aisha Al-Mansoor (legal) · Maya Chen (accounting)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[#8fa4b2] w-14 shrink-0">Machine</span>
                      <span className="text-[#334155]">auto-payments-v2 · … licensed; holds no approval rights</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[#8fa4b2] w-14 shrink-0">Exception</span>
                      <span className="text-[#334155]">Missing bank verification; with command expiry</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[#8fa4b2] w-14 shrink-0">Handoffs</span>
                      <span className="text-[#334155]">Three ownership transitions, each timestamped</span>
                    </div>
                  </div>
                </div>

                {/* Right Card: WHERE THE BOUNDARY ACTS */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-4 space-y-2">
                  <span className="text-[9.5px] font-mono font-bold tracking-wider text-[#64748b] uppercase block mb-1">
                    WHERE THE BOUNDARY ACTS
                  </span>
                  <div className="text-[10.5px] space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[#b45309] font-bold shrink-0">Not executed:</span>
                      <span className="text-[#475569]">Treasury releases payment proposal only. Payment happens in the banking system.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[#b45309] font-bold shrink-0">Not authoritative:</span>
                      <span className="text-[#475569]">ZoikoSuite holds the decision, exception and manifest — not the ledger or the contract.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[#b45309] font-bold shrink-0">Not universal:</span>
                      <span className="text-[#475569]">Every deployment splits these six stages differently.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Illustrative Scenario Disclosure Box */}
              <div className="p-3.5 rounded-xl border border-[#bfdbfe] bg-[#eff6ff] text-[10.5px] text-[#1e40af] leading-relaxed flex items-start gap-2">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-[#3b82f6] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#1e3a8a]">Illustrative scenario disclosure.</strong> This scenario evaluates the bounded governance and evidence model using fictitious evaluation data. It does not assert that every state is executed inside ZoikoSuite in every deployment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

