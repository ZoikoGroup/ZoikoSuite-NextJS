"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

interface DutyCard {
  number: string;
  name: string;
  desc: string;
  mobileDesc: string;
}

const duties: DutyCard[] = [
  {
    number: "DUTY 01",
    name: "Propose",
    desc: "Initiate a record, amendment or workflow transition with purpose and origin metadata.",
    mobileDesc: "Create or submit the proposal; prepare initial approval/action data.",
  },
  {
    number: "DUTY 02",
    name: "Review",
    desc: "Evaluate statutory, policy, contractual and jurisdictional compliance without execution authority.",
    mobileDesc: "Examine the action, its evidence and its control outcome.",
  },
  {
    number: "DUTY 03",
    name: "Authorize",
    desc: "Commit delegated entity approval within established thresholds and scope boundaries.",
    mobileDesc: "Authorize within delegated scope, limit and effective dates.",
  },
  {
    number: "DUTY 04",
    name: "Execute",
    desc: "Apply the permitted transition, trigger external connectors, and seal the audit evidence.",
    mobileDesc: "Carry out the authorized action; trigger external system.",
  },
];

export default function FourDutiesFourPermissionsSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid - 100% UNTOUCHED FOR DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-8 sm:mb-10">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                WORKFLOW, DELEGATED AUTHORITY AND SEGREGATION OF DUTIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Four duties, four independent
              <br className="hidden sm:inline" />{" "}
              permissions
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Propose, review, approve and execute are permissioned separately. Holding one grants nothing about the others.
            </p>
          </div>
        </div>

        {/* 4 Duty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {duties.map((duty, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
              className="rounded-2xl border border-[#e2ddd3] bg-white p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[9.5px] font-mono font-bold tracking-[0.14em] text-[#d97706] uppercase block mb-1">
                  {duty.number}
                </span>
                <h3 className="text-base font-bold text-[#08222F] tracking-tight mb-2">
                  {duty.name}
                </h3>
                {/* Desktop description */}
                <p className="hidden lg:block text-xs text-[#566573] leading-relaxed">
                  {duty.desc}
                </p>
                {/* Mobile description */}
                <p className="lg:hidden text-xs text-[#566573] leading-relaxed mb-3">
                  {duty.mobileDesc}
                </p>
              </div>

              {/* Mobile-only independently permissioned link */}
              <div className="lg:hidden pt-2 border-t border-slate-100">
                <span className="text-[10px] font-mono font-bold text-sky-700">
                  Independently permissioned
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP-ONLY VISUAL & POLICY MATRIX (gp4.png & MATRIX)        */}
        {/* 100% UNTOUCHED FOR DESKTOP                                    */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 3D Visual (gp4.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#e2ddd3] bg-[#07131b] shadow-md flex items-center justify-center"
          >
            <Image
              src="/governance-platform/gp4.png"
              alt="Four duties segregation of duties workflow illustration"
              width={600}
              height={600}
              priority
              className="w-full h-auto object-contain block"
            />
          </motion.div>

          {/* Right Column: Interactive Segregation of Duties Console */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 rounded-2xl border border-[#e2ddd3] bg-white p-6 shadow-md flex flex-col justify-between"
          >
            <div>
              {/* Console Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9] mb-4">
                <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#08222F] uppercase">
                  SEGREGATION RULE MATRIX · ACT-001 EVALUATION
                </span>
                <span className="px-2 py-0.5 rounded bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0] text-[9px] font-mono font-bold uppercase">
                  PASS · COMPLIANT
                </span>
              </div>

              {/* Rule Key-Values */}
              <div className="space-y-2 text-xs mb-6">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[#8fa4b2] w-28 shrink-0">POLICY ENFORCED</span>
                  <span className="font-semibold text-[#08222F]">POL-002 v3 — High-value expenditure segregation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[#8fa4b2] w-28 shrink-0">CONFLICT CHECK</span>
                  <span className="text-[#334155]">Proposer (Daniel Foster) ≠ Approver (Maya Chen)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[#8fa4b2] w-28 shrink-0">JURISDICTION LIMIT</span>
                  <span className="text-[#334155]">UK Tier 2 delegated approval ceiling: £50,000</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[#8fa4b2] w-28 shrink-0">CURRENT AMOUNT</span>
                  <span className="font-mono font-semibold text-[#08222F]">£47,500.00 GBP</span>
                </div>
              </div>

              {/* 4 Check Steps */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#15803d]">
                  <span className="w-4 h-4 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Propose duty: origin authenticated via Procurement connector</span>
                </div>
                <div className="flex items-center gap-2 text-[#15803d]">
                  <span className="w-4 h-4 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Review duty: legal compliance review logged by Aisha Al-Mansoor</span>
                </div>
                <div className="flex items-center gap-2 text-[#15803d]">
                  <span className="w-4 h-4 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Authorize duty: authorized within limits by Finance Controller Maya Chen</span>
                </div>
                <div className="flex items-center gap-2 text-[#15803d]">
                  <span className="w-4 h-4 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Execute duty: release package handed off to external banking connector</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#f1f5f9]">
              <p className="text-[10px] font-mono text-[#64748b] leading-relaxed">
                Segregation rules evaluate dynamically on every state transition. An administrative superuser credential cannot bypass separation of duties.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY EXTENSIONS (STRICTLY HIDDEN ON DESKTOP)           */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Mobile Card 1: DELEGATED AUTHORITY PROFILE */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Top Bar */}
            <div className="bg-[#051620] px-3.5 py-2.5 flex items-center justify-between border-b border-[#12364c]">
              <span className="text-[9.5px] sm:text-[10px] font-mono font-bold tracking-[0.12em] text-[#7ea0b5] uppercase">
                DELEGATED AUTHORITY PROFILE — CLAIRE CHEN
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            {/* Inner Content */}
            <div className="bg-white text-slate-900 p-4 sm:p-5 flex flex-col gap-3">
              <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                AUTHORITY PROFILE
              </span>

              <div className="space-y-2 text-[11px]">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[140px]">Role / Position:</span>
                  <span className="font-semibold text-slate-900">Treasury Director · Maya Chen</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[140px]">Delegated scope:</span>
                  <span className="text-slate-700">Treasury payments under £100,000</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[140px]">Entity / Jurisdiction:</span>
                  <span className="text-slate-700">UK01 (London)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[140px]">Policy source:</span>
                  <span className="text-slate-700">Treasury delegated authority regulation schedule</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[140px]">Effective period:</span>
                  <span className="font-mono text-slate-700">01 Jan 2024 to 31 Dec 2024</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[140px]">Segregation constraint:</span>
                  <span className="text-amber-800 font-semibold">Cannot approve own proposals</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[140px]">Status date:</span>
                  <span className="text-slate-700">Valid delegation through current cycle</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[140px]">Revocation:</span>
                  <span className="text-slate-700">Automatic on role change or manual intervention</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
                  <span className="font-mono text-slate-500 min-w-[140px]">Verified by:</span>
                  <span className="text-slate-700">Audited and sealed by HR / Legal</span>
                </div>
              </div>

              {/* Blue Info Callout */}
              <div className="bg-sky-50/70 border border-sky-200 rounded-lg p-3 flex items-start gap-2 text-[11px] text-sky-950 leading-snug mt-2">
                <Info className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Boundary:</strong> Configured authority in software does not create legal or corporate authority; it mirrors an underlying authorization that must exist in legal or governing documentation.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Mobile Card 2: SEGREGATION RULE */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Top Bar */}
            <div className="bg-[#051620] px-3.5 py-2.5 flex items-center justify-between border-b border-[#12364c]">
              <span className="text-[9.5px] sm:text-[10px] font-mono font-bold tracking-[0.12em] text-[#7ea0b5] uppercase">
                SEGREGATION RULE: SOD-TREASURY-001
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            {/* Inner Content */}
            <div className="bg-white text-slate-900 p-4 sm:p-5 flex flex-col gap-3">
              <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                SOD RECORD
              </span>

              <div className="space-y-2 text-[11px]">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[150px]">Propose/review vs Execute:</span>
                  <span className="text-slate-700">Disallow and stop release if proposer/reviewer matches the execution agent</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[150px]">Enforcement mode:</span>
                  <span className="font-semibold text-rose-800">Hard boundary — system blocked until exception / overrides resolved</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[150px]">Materiality context:</span>
                  <span className="text-slate-700">Any transaction over £10,000 or high-risk vendor</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[150px]">Compensating control:</span>
                  <span className="text-slate-700">None accepted</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[150px]">Owner:</span>
                  <span className="text-slate-700">Compliance</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 border-b border-slate-100 pb-1.5">
                  <span className="font-mono text-slate-500 min-w-[150px]">Changed on:</span>
                  <span className="font-mono text-slate-700">01 Jul 2024 →</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
                  <span className="font-mono text-slate-500 min-w-[150px]">Exception:</span>
                  <span className="text-slate-700">Requires board executive waiver</span>
                </div>
              </div>

              {/* Lifecycle Steps List */}
              <div className="mt-2 pt-3 border-t border-slate-100 flex flex-col gap-1.5">
                <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                  LIFECYCLE STEPS AND THEIR CURRENT SEPARATION STATUS
                </span>
                <div className="text-[11px] text-slate-700 flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">●</span>
                  <span><strong>Propose:</strong> [Maya Chen] (Cannot also execute, rule active)</span>
                </div>
                <div className="text-[11px] text-slate-700 flex items-start gap-1.5">
                  <span className="text-sky-600 font-bold">●</span>
                  <span><strong>Review:</strong> [David Ross] (Cannot also execute)</span>
                </div>
                <div className="text-[11px] text-slate-700 flex items-start gap-1.5">
                  <span className="text-blue-600 font-bold">●</span>
                  <span><strong>Approve:</strong> [Dr. Sarah Thorne] (Director review logged)</span>
                </div>
                <div className="text-[11px] text-slate-700 flex items-start gap-1.5">
                  <span className="text-rose-600 font-bold">●</span>
                  <span><strong>Execute attempt:</strong> Request blocked</span>
                </div>
                <div className="text-[11px] text-slate-700 flex items-start gap-1.5">
                  <span className="text-amber-600 font-bold">●</span>
                  <span><strong>Effective and applied status:</strong> All conditions met except execution attempt</span>
                </div>
                <div className="text-[11px] text-slate-700 flex items-start gap-1.5">
                  <span className="text-slate-600 font-bold">●</span>
                  <span><strong>Closure:</strong> Fully audited; record immutably kept for audit trail</span>
                </div>
              </div>

              {/* Footnote */}
              <p className="text-[10px] text-slate-500 italic mt-2 leading-relaxed">
                Rule is deliberately separated from user identities, stored in definitive ledger. Even an owner cannot perform all functions in the chain.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
