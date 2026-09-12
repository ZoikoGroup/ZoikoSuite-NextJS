"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CurrentVersusProposedCauseNamedSection() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#08222F] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (hidden lg:block) - 100% UNTOUCHED DESKTOP DESIGN         */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-7 flex flex-col text-left"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#c5a059]" />
                <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                  SHADOW COMPARISON PRINCIPLES
                </span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
                Current versus proposed, with the cause named
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-5 flex flex-col justify-end text-left"
            >
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Diagnosis and disposition stay separate. Identifying why a difference occurred is not the same as deciding what to do about it.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-slate-700/80 bg-white text-slate-900 shadow-xl overflow-hidden text-left"
          >
            <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
              <div className="flex items-center gap-3">
                <span className="text-[10px] sm:text-[10.5px] font-mono font-bold text-[#c5a059] tracking-wider uppercase">
                  EVALUATION RECORD &middot; SHADOW COMPARISON &middot; AP-PAY-2024-0814
                </span>
                <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider bg-rose-950 text-rose-300 border border-rose-800">
                  DIFFERENCE DETECTED
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            <div className="p-5 bg-slate-50/70 border-b border-slate-200 grid grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                  RECORD
                </span>
                <span className="font-bold text-slate-900 text-[11.5px]">
                  Global Consulting Group Invoice INV-8492
                </span>
              </div>
              <div>
                <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                  SCOPE
                </span>
                <span className="text-slate-700 text-[11.5px]">
                  Payment authorization &amp; approval routing
                </span>
              </div>
              <div>
                <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                  CONTEXT
                </span>
                <span className="text-slate-700 text-[11.5px]">
                  US subsidiary / UK vendor / value $125,000 / multi-currency
                </span>
              </div>
              <div>
                <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                  OBSERVATION PERIOD
                </span>
                <span className="font-mono text-slate-600 text-[11px]">
                  14 Aug 2024 to 28 Aug 2024
                </span>
              </div>
              <div>
                <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                  STATUS
                </span>
                <span className="text-slate-800 font-semibold text-[11px]">
                  In evaluation
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 divide-x divide-slate-200 text-xs">
              <div className="flex flex-col">
                <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200">
                  <span className="text-[10px] font-mono font-bold text-slate-700 tracking-wider uppercase">
                    CURRENT SYSTEM OUTCOME
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-3 divide-y divide-slate-100">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      ACTION
                    </span>
                    <span className="font-bold text-slate-900 text-[12px] mt-0.5">
                      Payment approved
                    </span>
                  </div>
                  <div className="pt-2 flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      ROUTE
                    </span>
                    <span className="text-slate-700 text-[11.5px] mt-0.5">
                      Standard single-approver path (VP)
                    </span>
                  </div>
                  <div className="pt-2 flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      AUTHORITY CHECK
                    </span>
                    <span className="text-slate-600 text-[11.5px] mt-0.5">
                      Not performed &mdash; system has no delegation table
                    </span>
                  </div>
                  <div className="pt-2 flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      POLICY CHECK
                    </span>
                    <span className="text-slate-600 text-[11.5px] mt-0.5">
                      No cross-border tax check was conducted
                    </span>
                  </div>
                  <div className="pt-2 flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      EVIDENCE
                    </span>
                    <span className="text-slate-700 text-[11.5px] mt-0.5">
                      Single approval email
                    </span>
                  </div>
                  <div className="pt-2 flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      CURRENT OPERATING STATE
                    </span>
                    <span className="font-semibold text-slate-800 text-[11.5px] mt-0.5">
                      Payment queued for release
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="bg-[#08222F] px-4 py-2.5 border-b border-[#14425a]">
                  <span className="text-[10px] font-mono font-bold text-[#c5a059] tracking-wider uppercase">
                    PROPOSED SHADOW OUTCOME
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-3 divide-y divide-slate-100 bg-[#FAFDFE]">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      PROPOSED ROUTE
                    </span>
                    <span className="font-bold text-[#0F476A] text-[12px] mt-0.5">
                      Dual approval: VP Finance + Head of Tax (due to cross-border)
                    </span>
                  </div>
                  <div className="pt-2 flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      TRIGGER
                    </span>
                    <span className="text-slate-700 text-[11.5px] mt-0.5">
                      Value exceeds $100K + cross-border withholding tax implication
                    </span>
                  </div>
                  <div className="pt-2 flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      AUTHORITY CHECK
                    </span>
                    <span className="text-slate-700 text-[11.5px] mt-0.5">
                      Checked against Delegation Schedule &sect;4.2 &mdash; requires tax sign-off
                    </span>
                  </div>
                  <div className="pt-2 flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      POLICY CHECK
                    </span>
                    <span className="font-mono text-slate-700 text-[11px] mt-0.5">
                      Rule TAX-US-UK-08: mandatory documentation required
                    </span>
                  </div>
                  <div className="pt-2 flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      SHADOW RECOMMENDATION
                    </span>
                    <span className="font-semibold text-amber-800 text-[11.5px] mt-0.5">
                      Flag for review: missing tax documentation
                    </span>
                  </div>
                  <div className="pt-2 flex flex-col">
                    <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      DISPOSITION
                    </span>
                    <span className="font-semibold text-rose-800 text-[11.5px] mt-0.5">
                      Held in Shadow &mdash; difference flagged for review committee
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-[#FFFBEB] border-t border-[#FDE68A]">
              <span className="text-[10px] font-mono font-bold text-[#92400E] tracking-wider uppercase block mb-1">
                DIFFERENCE CAUSE &middot; TAX POLICY APPLICABILITY
              </span>
              <p className="text-[11.5px] text-[#78350F] leading-relaxed font-normal">
                <strong className="font-semibold text-[#92400E]">Reason and proposed disposition:</strong> Current system allows single-approver release without tax screening on cross-border payments. Proposed shadow model detects cross-border vendor, applies Rule TAX-US-UK-08, and flags for review before release. Recommendation: Review difference with Tax Counsel and determine if current practice is an accepted exception or an unmonitored risk.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (block lg:hidden) - EXACT MATCH TO USER'S MOBILE SCREENSHOT */}
        {/* ========================================================================= */}
        <div className="block lg:hidden flex flex-col text-left">
          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#c5a059]" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              SHADOW COMPARISON WORKSPACE
            </span>
          </div>

          {/* Mobile Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08222F] leading-tight mb-3">
            Current versus proposed, with the cause named
          </h2>

          {/* Mobile Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
            Diagnosis and disposition stay separate. Identifying why a difference occurred is not the same as deciding what to do about it.
          </p>

          {/* Mobile Comparison Record Card */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-white text-[#08222F]">
            {/* Top Bar */}
            <div className="bg-[#08222F] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-300">
                  COMPARISON RECORD &middot; CMP-2026-0412 &middot; SYNTHETIC FIXTURE
                </span>
                <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-rose-950 text-rose-300 border border-rose-800">
                  NO LIVE ACTION
                </span>
              </div>
              <div className="text-slate-500 font-mono tracking-widest text-xs">
                •••
              </div>
            </div>

            {/* Context Box */}
            <div className="p-4 bg-[#FAF8F5] border-b border-[#EAE4DA] text-[10px] divide-y divide-[#EAE4DA]">
              <div className="pb-1.5 text-slate-400 font-mono uppercase text-[9px] font-semibold">
                CONTEXT
              </div>
              <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-500 font-mono">Action</span>
                <span className="font-semibold text-[#0B1E28]">Supplier bank detail change &middot; ACT-001</span>
              </div>
              <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-500 font-mono">Entity</span>
                <span className="text-slate-700">Northstar UK Ltd &middot; United Kingdom</span>
              </div>
              <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-500 font-mono">Observed</span>
                <span className="text-slate-700">02 Aug 2026 14:32 &middot; replayed from approved extract</span>
              </div>
              <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-500 font-mono">Shadow contract</span>
                <span className="font-mono text-slate-700">SHC-2026-007</span>
              </div>
              <div className="pt-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-500 font-mono">Owner</span>
                <span className="text-slate-700">Priya Nair</span>
              </div>
            </div>

            {/* Block 1: Current System Outcome */}
            <div className="border-b border-[#EAE4DA]">
              <div className="bg-[#ECEEF1] px-4 py-2 text-[9.5px] font-mono font-bold uppercase tracking-wider text-slate-700">
                CURRENT SYSTEM OUTCOME
              </div>
              <div className="p-4 divide-y divide-slate-100 text-[10.5px]">
                <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400 font-mono text-[9px] uppercase">OUTCOME</span>
                  <span className="font-bold text-[#0B1E28]">Change applied</span>
                </div>
                <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400 font-mono text-[9px] uppercase">ROUTE</span>
                  <span className="text-slate-700">Procurement approval only</span>
                </div>
                <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400 font-mono text-[9px] uppercase">APPROVER</span>
                  <span className="text-slate-700">Daniel Foster &mdash; also the requester</span>
                </div>
                <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400 font-mono text-[9px] uppercase">CONTROL STATE</span>
                  <span className="text-slate-700">No independent verification recorded</span>
                </div>
                <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400 font-mono text-[9px] uppercase">EVIDENCE</span>
                  <span className="text-slate-700">Email thread</span>
                </div>
                <div className="pt-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400 font-mono text-[9px] uppercase">SOURCE VERSION</span>
                  <span className="font-mono text-slate-700">Procurement v4 &middot; 14.02</span>
                </div>
              </div>
            </div>

            {/* Block 2: Proposed ZoikoSuite Behaviour */}
            <div className="border-b border-[#EAE4DA]">
              <div className="bg-[#08222F] px-4 py-2 text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#C59A41]">
                PROPOSED ZOIKOSUITE BEHAVIOUR
              </div>
              <div className="p-4 divide-y divide-slate-100 text-[10.5px]">
                <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400 font-mono text-[9px] uppercase">GOVERNANCE RESULT</span>
                  <span className="font-bold text-rose-700">Evidence required &mdash; would not have applied</span>
                </div>
                <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400 font-mono text-[9px] uppercase">ROUTE</span>
                  <span className="text-slate-700">Procurement &rarr; treasury authorisation</span>
                </div>
                <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400 font-mono text-[9px] uppercase">AUTHORITY ROLE</span>
                  <span className="text-slate-700">Treasury Director &middot; within delegated limit</span>
                </div>
                <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400 font-mono text-[9px] uppercase">CONTROL STATE</span>
                  <span className="text-slate-700">Segregation conflict detected &mdash; requester excluded</span>
                </div>
                <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400 font-mono text-[9px] uppercase">EVIDENCE REQUIREMENT</span>
                  <span className="text-slate-700">Bank call-back verification</span>
                </div>
                <div className="pt-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400 font-mono text-[9px] uppercase">CONTRACT NOTE</span>
                  <span className="text-slate-700">Contract notice clause not evaluated &mdash; source delayed</span>
                </div>
              </div>
            </div>

            {/* Block 3: Difference Callout Box (Warm Amber) */}
            <div className="p-4 bg-[#FEF9EE] border-b border-[#E8DAB7] text-[11px] text-amber-950">
              <div className="font-mono text-[9.5px] font-bold text-[#8C6B1C] uppercase tracking-wider mb-1">
                DIFFERENCE &middot; DISPOSITION: OPEN
              </div>
              <p className="leading-relaxed">
                <strong>Route and control difference.</strong> The current path allowed the requester to approve their own change with no independent verification. The proposed path would have blocked it on two separate grounds. Dependency: the contract notice clause could not be evaluated because the contract source was delayed, so this comparison is itself incomplete and says so.
              </p>
            </div>

            {/* Block 4: Cause Classification */}
            <div className="p-4 bg-white">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                CAUSE CLASSIFICATION &mdash; ONE PRIMARY, SECONDARY ALLOWED
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2.5 py-1 rounded text-[10px] font-mono text-slate-600 bg-slate-50 border border-slate-200">
                  Expected design difference
                </span>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono text-slate-600 bg-slate-50 border border-slate-200">
                  Mapping / transformation
                </span>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono text-white bg-[#08222F] font-bold border border-[#08222F]">
                  Authority / role difference &middot; primary
                </span>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono text-slate-600 bg-slate-50 border border-slate-200">
                  Source data issue
                </span>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono text-slate-600 bg-slate-50 border border-slate-200">
                  Policy difference
                </span>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono text-[#8C6B1C] bg-[#FEF9EE] font-bold border border-[#E8DAB7]">
                  Evidence gap &middot; secondary
                </span>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono text-slate-600 bg-slate-50 border border-slate-200">
                  Integration / event issue
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 leading-relaxed border-t border-slate-100 pt-3">
                A comparison record diagnoses; it does not dispose. The disposition happens in the decision model below, by a named owner with authority over that scope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
