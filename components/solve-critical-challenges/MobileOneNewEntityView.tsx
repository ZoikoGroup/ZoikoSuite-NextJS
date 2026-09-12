"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

export default function MobileOneNewEntityView() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* 1. Synthetic Warning Box */}
      <div className="rounded-xl bg-[#261014] border border-rose-900/60 p-4 flex items-start gap-3 text-left">
        <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold tracking-wider text-rose-300 uppercase">
            SYNTHETIC EVALUATION SCENARIO — NO LIVE ACTION
          </span>
          <p className="text-[11px] text-rose-200/80 leading-relaxed font-normal">
            Jurisdiction coverage shown here is illustrative; verify current supported scope. All entities, names, records and dates are fictitious evaluation data.
          </p>
        </div>
      </div>

      {/* 2. Eight Step Cards */}
      <div className="flex flex-col gap-3">
        {/* Step 01 */}
        <div className="rounded-xl overflow-hidden border border-[#14425a] bg-[#0c2e3f]">
          <div className="bg-[#0F476A] py-1 text-center">
            <span className="text-[11px] font-mono font-bold text-slate-200">01</span>
          </div>
          <div className="p-4 flex flex-col gap-1.5 text-left">
            <h4 className="text-sm font-bold text-white">New entity context</h4>
            <span className="text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              ENTITY · JURISDICTION
            </span>
            <p className="text-[11.5px] text-slate-300 leading-relaxed pt-1">
              Entity and jurisdiction are established. Netherlands entity exists; jurisdiction source exists{" "}
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-rose-300 border border-rose-600/80 bg-rose-950/60 inline-block">
                NO APPROVED SOURCE
              </span>{" "}
              review required and recognised.
            </p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="rounded-xl overflow-hidden border border-[#14425a] bg-[#0c2e3f]">
          <div className="bg-[#0F476A] py-1 text-center">
            <span className="text-[11px] font-mono font-bold text-slate-200">02</span>
          </div>
          <div className="p-4 flex flex-col gap-1.5 text-left">
            <h4 className="text-sm font-bold text-white">Payroll readiness</h4>
            <span className="text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              GLOBAL PAYROLL GOVERNANCE
            </span>
            <p className="text-[11.5px] text-slate-300 leading-relaxed pt-1">
              Payroll setup verification{" "}
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-amber-300 border border-amber-500/70 bg-amber-950/60 inline-block">
                IN CERTIFICATE
              </span>{" "}
              &mdash; provider inputs received for 6 of 8 required categories. Responsible owner: Aisha Rahman.
            </p>
          </div>
        </div>

        {/* Step 03 */}
        <div className="rounded-xl overflow-hidden border border-[#14425a] bg-[#0c2e3f]">
          <div className="bg-[#0F476A] py-1 text-center">
            <span className="text-[11px] font-mono font-bold text-slate-200">03</span>
          </div>
          <div className="p-4 flex flex-col gap-1.5 text-left">
            <h4 className="text-sm font-bold text-white">Compliance obligations</h4>
            <span className="text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              CROSS-BORDER COMPLIANCE
            </span>
            <p className="text-[11.5px] text-slate-300 leading-relaxed pt-1">
              Two obligations surfaced with this source. Effective dates prevent framework reliance{" "}
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-rose-300 border border-rose-600/80 bg-rose-950/60 inline-block">
                REVISION PENDING
              </span>{" "}
              until applicability source confirmed.
            </p>
          </div>
        </div>

        {/* Step 04 */}
        <div className="rounded-xl overflow-hidden border border-[#14425a] bg-[#0c2e3f]">
          <div className="bg-[#0F476A] py-1 text-center">
            <span className="text-[11px] font-mono font-bold text-slate-200">04</span>
          </div>
          <div className="p-4 flex flex-col gap-1.5 text-left">
            <h4 className="text-sm font-bold text-white">Workforce policy</h4>
            <span className="text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              WORKFORCE COMPLIANCE
            </span>
            <p className="text-[11.5px] text-slate-300 leading-relaxed pt-1">
              Cross-border everyday applies with zero recorded local exception. Carving uncovered compensating permissions/many rules.
            </p>
          </div>
        </div>

        {/* Step 05 */}
        <div className="rounded-xl overflow-hidden border border-[#14425a] bg-[#0c2e3f]">
          <div className="bg-[#0F476A] py-1 text-center">
            <span className="text-[11px] font-mono font-bold text-slate-200">05</span>
          </div>
          <div className="p-4 flex flex-col gap-1.5 text-left">
            <h4 className="text-sm font-bold text-white">Authority and segregation</h4>
            <span className="text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              AUTHORITY · GOVERNANCE
            </span>
            <p className="text-[11.5px] text-slate-300 leading-relaxed pt-1">
              Prepare, reviewer, approver and execution are each checked.{" "}
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-rose-300 border border-rose-600/80 bg-rose-950/60 inline-block">
                SEGREGATION SOW CONFLICT
              </span>{" "}
              &mdash; presumed approver also prepared the run.
            </p>
          </div>
        </div>

        {/* Step 06 */}
        <div className="rounded-xl overflow-hidden border border-[#14425a] bg-[#0c2e3f]">
          <div className="bg-[#0F476A] py-1 text-center">
            <span className="text-[11px] font-mono font-bold text-slate-200">06</span>
          </div>
          <div className="p-4 flex flex-col gap-1.5 text-left">
            <h4 className="text-sm font-bold text-white">Regulatory reporting</h4>
            <span className="text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              REGULATORY REPORTING
            </span>
            <p className="text-[11.5px] text-slate-300 leading-relaxed pt-1">
              A report is registered and its handoff sequence visible. The record flagged as a scheduled external channel &mdash;{" "}
              <strong className="text-white font-semibold">no filing support is implied or provided</strong>.
            </p>
          </div>
        </div>

        {/* Step 07 - Gold Accent Header */}
        <div className="rounded-xl overflow-hidden border border-[#c5a059]/60 bg-[#0c2e3f]">
          <div className="bg-[#c5a059] py-1 text-center">
            <span className="text-[11px] font-mono font-bold text-[#08222F]">07</span>
          </div>
          <div className="p-4 flex flex-col gap-1.5 text-left">
            <h4 className="text-sm font-bold text-[#c5a059]">Human decision</h4>
            <span className="text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              ACCOUNTABLE REVIEW
            </span>
            <p className="text-[11.5px] text-slate-300 leading-relaxed pt-1">
              Within delegated scope the authorized person may approve, defer or escalate. Here:{" "}
              <strong className="text-white font-semibold">
                deferred &mdash; pending prediction review and resolution of the segregation conflict
              </strong>
              .
            </p>
          </div>
        </div>

        {/* Step 08 */}
        <div className="rounded-xl overflow-hidden border border-[#14425a] bg-[#0c2e3f]">
          <div className="bg-[#0F476A] py-1 text-center">
            <span className="text-[11px] font-mono font-bold text-slate-200">08</span>
          </div>
          <div className="p-4 flex flex-col gap-1.5 text-left">
            <h4 className="text-sm font-bold text-white">Evidence and monitor</h4>
            <span className="text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              AUDIT READINESS
            </span>
            <p className="text-[11.5px] text-slate-300 leading-relaxed pt-1">
              Decision context and reason recorded to immutable reconciliation. Two unresolved exceptions remain open and continue to appear in Operating Intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Footer Callout with Gold Left Border */}
      <div className="border-l-2 border-[#c5a059] pl-3 py-1.5 text-left mt-1">
        <p className="text-[11.5px] text-slate-300 leading-relaxed font-normal">
          The scenario ends in a deferral, not an execution. That is the honest outcome when a jurisdiction source is missing and a segregation control is conflicted &mdash; until demonstrated, the governance model works by pausing rather than sweeping past.
        </p>
      </div>
    </div>
  );
}
