"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, UserCheck, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function FindingAndDecisionSeparationSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center border-t border-[#e2e8f0]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                GOVERNED AI FINDINGS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              The finding and the decision are
              <br />
              two separate records
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              These two blocks are visually and structurally distinct by design. They must never merge into a single unit that implies machine authority.
            </p>
          </div>
        </div>

        {/* Desktop View: Side by Side (hidden lg:grid) */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-stretch mb-8 relative">
          {/* Left Card: AI Finding */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-6 rounded-2xl border border-[#e5d4aa] bg-[#fffdf9] p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#f0e4c8] mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#d97706] text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                  <Cpu className="w-3 h-3" />
                  AI-ASSISTED FINDING
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-amber-300 text-amber-900 bg-amber-50 text-[10px] font-mono font-semibold">
                  <AlertTriangle className="w-3 h-3 text-amber-600" />
                  NOT APPROVED · FOR REVIEW
                </span>
              </div>

              <h3 className="text-base font-bold text-[#08222F] mb-4">
                Obligation check · AIR-2024-0813
              </h3>

              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#f5ede0]">
                  <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[10px]">
                    TASK
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed">
                    Examine whether the supplier contract constrains a change to remittance details.
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#f5ede0]">
                  <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[10px]">
                    REFERENCED SOURCES
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed">
                    CTR-0918 (contract repository) · Supplier notification email · 2 of 4 records in-scope for this user
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#f5ede0]">
                  <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[10px]">
                    FINDING
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed">
                    Clause 14.2 appears to require 30 days&apos; notice before a remittance change takes effect.
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#f5ede0]">
                  <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[10px]">
                    PASSAGE
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed font-mono text-[11px]">
                    CTR-0918 p.7 §14.2 — passage viewable in the record
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#f5ede0]">
                  <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[10px]">
                    UNCERTAINTY
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed">
                    Medium confidence: The clause references Schedule 3, which is not present in the sources available.
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#f5ede0]">
                  <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[10px]">
                    CONFLICTING INFORMATION
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed">
                    The supplier portal terms reference a 15-day period for the same change type.
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#f5ede0]">
                  <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[10px]">
                    POLICY BOUNDARY
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed">
                    POL-M-003 permits extraction and summarization. Legal interpretation of contract terms is not permitted.
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#f5ede0]">
                  <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[10px]">
                    REQUIRED REVIEWER
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed">
                    General Counsel or delegate
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5">
                  <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[10px]">
                    PERMITTED ACTIONS
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed">
                    Accept as context · Edit · Request evidence · Escalate · Reject · Defer for professional review
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Human Decision Record */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-6 rounded-2xl border border-[#cbd5e1] bg-[#fafcfe] p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#e2e8f0] mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#08222F] text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                  <UserCheck className="w-3 h-3 text-[#c5a059]" />
                  HUMAN DECISION RECORD
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-emerald-300 text-emerald-800 bg-emerald-50 text-[10px] font-mono font-bold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  ACCOUNTABLE
                </span>
              </div>

              <h3 className="text-base font-bold text-[#08222F] mb-4">
                Review outcome · DEC-2024-88432
              </h3>

              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#edf2f7]">
                  <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[10px]">
                    REVIEWER
                  </span>
                  <span className="col-span-8 text-[#08222F] font-semibold leading-relaxed">
                    R. Osei · General Counsel
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#edf2f7]">
                  <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[10px]">
                    AUTHORITY BINDING
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed">
                    Role-based legal review authority · standing
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#edf2f7]">
                  <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[10px]">
                    DECISION
                  </span>
                  <span className="col-span-8 text-[#08222F] font-semibold leading-relaxed">
                    Accept as context, with edits. Notice period confirmed as 30 days for this supplier.
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#edf2f7]">
                  <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[10px]">
                    REASON
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed">
                    Schedule 3 retrieved from the contract repository and reviewed directly. The portal terms do not apply to this agreement.
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#edf2f7]">
                  <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[10px]">
                    EDITS TO FINDING
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed">
                    Removed the conflicting-sources qualification; recorded Schedule 3 as the governing document.
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#edf2f7]">
                  <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[10px]">
                    TIMESTAMP
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed font-mono text-[11px]">
                    2024-08-04 15:04:19 UTC
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5 border-b border-[#edf2f7]">
                  <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[10px]">
                    RESULT
                  </span>
                  <span className="col-span-8 text-emerald-700 font-semibold">
                    Obligation record created against CTR-0918 and linked to VEN-4471.
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 py-1.5">
                  <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[10px]">
                    RECORD ID
                  </span>
                  <span className="col-span-8 text-[#334155] leading-relaxed">
                    A decision record distinct from AIR-2024-0813, which is retained unaltered.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile View: Stacked with Separator (lg:hidden) */}
        <div className="block lg:hidden w-full space-y-4 mb-6">
          {/* Card 1: AI-Assisted Finding */}
          <div className="rounded-xl border border-[#e5d4aa] bg-[#fffdf9] p-4 sm:p-5 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#f0e4c8] mb-3">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#d97706] text-white text-[9.5px] font-mono font-bold uppercase">
                AI-ASSISTED FINDING
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-amber-300 text-amber-900 bg-amber-50 text-[9.5px] font-mono font-semibold">
                ▲ NOT APPROVED · FOR REVIEW
              </span>
            </div>

            <h3 className="text-sm font-bold text-[#08222F] mb-3">
              Obligation check · AIR-2024-0813
            </h3>

            <div className="space-y-2 text-[11px]">
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#f5ede0] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[9px] tracking-wider">
                  TASK
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed">
                  Examine whether the supplier contract constrains a change to remittance details.
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#f5ede0] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[9px] tracking-wider">
                  REFERENCED SOURCES
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed">
                  CTR-0918 (contract repository) · Supplier notification email · 2 of 4 records in-scope for this user
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#f5ede0] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[9px] tracking-wider">
                  FINDING
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed">
                  Clause 14.2 appears to require 30 days&apos; notice before a remittance change takes effect.
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#f5ede0] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[9px] tracking-wider">
                  PASSAGE
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed font-mono text-[10.5px]">
                  CTR-0918 p.7 §14.2 — passage viewable in the record
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#f5ede0] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[9px] tracking-wider">
                  UNCERTAINTY
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed">
                  Medium confidence: The clause references Schedule 3, which is not present in the sources available.
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#f5ede0] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[9px] tracking-wider">
                  CONFLICTING INFORMATION
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed">
                  The supplier portal terms reference a 15-day period for the same change type.
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#f5ede0] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[9px] tracking-wider">
                  POLICY BOUNDARY
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed">
                  POL-M-003 permits extraction and summarization. Legal interpretation of contract terms is not permitted.
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#f5ede0] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[9px] tracking-wider">
                  REQUIRED REVIEWER
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed">
                  General Counsel or delegate
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pt-0.5 items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#8c6b2d] uppercase text-[9px] tracking-wider">
                  PERMITTED ACTIONS
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed">
                  Accept as context · Edit · Request evidence · Escalate · Reject · Defer for professional review
                </span>
              </div>
            </div>
          </div>

          {/* Dotted Separator Pill */}
          <div className="relative flex items-center justify-center my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dotted border-[#cbd5e1]" />
            </div>
            <span className="relative px-3 py-0.5 bg-white border border-[#cbd5e1] rounded text-[8.5px] font-mono text-[#64748b] tracking-wider uppercase shadow-2xs">
              SEPARATE RECORD
            </span>
          </div>

          {/* Card 2: Human Decision Record */}
          <div className="rounded-xl border border-[#cbd5e1] bg-[#fafcfe] p-4 sm:p-5 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#e2e8f0] mb-3">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#08222F] text-white text-[9.5px] font-mono font-bold uppercase">
                HUMAN DECISION RECORD
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-emerald-300 text-emerald-800 bg-emerald-50 text-[9.5px] font-mono font-bold">
                • ACCOUNTABLE
              </span>
            </div>

            <h3 className="text-sm font-bold text-[#08222F] mb-3">
              Review outcome · DEC-2024-88432
            </h3>

            <div className="space-y-2 text-[11px]">
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#edf2f7] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[9px] tracking-wider">
                  REVIEWER
                </span>
                <span className="col-span-8 text-[#08222F] font-semibold leading-relaxed">
                  R. Osei · General Counsel
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#edf2f7] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[9px] tracking-wider">
                  AUTHORITY BINDING
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed">
                  Role-based legal review authority · standing
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#edf2f7] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[9px] tracking-wider">
                  DECISION
                </span>
                <span className="col-span-8 text-[#08222F] font-semibold leading-relaxed">
                  Accept as context, with edits. Notice period confirmed as 30 days for this supplier.
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#edf2f7] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[9px] tracking-wider">
                  REASON
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed">
                  Schedule 3 retrieved from the contract repository and reviewed directly. The portal terms do not apply to this agreement.
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#edf2f7] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[9px] tracking-wider">
                  EDITS TO FINDING
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed">
                  Removed the conflicting-sources qualification; recorded Schedule 3 as the governing document.
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#edf2f7] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[9px] tracking-wider">
                  TIMESTAMP
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed font-mono text-[10.5px]">
                  2024-08-04 15:04:19 UTC
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pb-1.5 border-b border-[#edf2f7] items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[9px] tracking-wider">
                  RESULT
                </span>
                <span className="col-span-8 text-emerald-700 font-semibold leading-relaxed">
                  Obligation record created against CTR-0918 and linked to VEN-4471.
                </span>
              </div>
              <div className="grid grid-cols-12 gap-2 pt-0.5 items-baseline">
                <span className="col-span-4 font-mono font-bold text-[#475569] uppercase text-[9px] tracking-wider">
                  RECORD ID
                </span>
                <span className="col-span-8 text-[#334155] leading-relaxed">
                  A decision record distinct from AIR-2024-0813, which is retained unaltered.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Boundary Rule Callout */}
        <div className="rounded-xl border border-[#cbd5e1] border-l-4 border-l-[#0284c7] bg-[#f8fafc] p-4 sm:p-5 shadow-xs mb-6">
          <span className="text-[10px] font-mono font-bold tracking-wider text-[#0284c7] uppercase block mb-1.5">
            AI BOUNDARY RULE
          </span>
          <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
            The AI finding block never visually merges with the accountable human decision record. AI may support extraction, classification, summarization or suggestion within approved scope; material authority remains governed separately. The original finding is retained unaltered even after a human edits or rejects it, so a reviewer can always see what the model proposed and what a person decided.
          </p>
        </div>

        {/* Explore Governed AI Button */}
        <div>
          <button className="bg-[#08222F] hover:bg-[#0e3448] text-white px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2 transition-colors shadow-sm">
            Explore governed AI
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
