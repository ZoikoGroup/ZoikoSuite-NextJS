"use client";

import React from "react";

export default function MobileTheSamePatternView() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* 1. AI Synthetic Proposal Card (Dashed Border) */}
      <div className="rounded-2xl border-2 border-dashed border-[#ECD9BA] bg-[#FCFBF8] p-4 sm:p-5 flex flex-col gap-3.5 text-left shadow-sm">
        {/* Top Badges */}
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-bold uppercase tracking-wider bg-[#c5a059] text-[#08222F]">
            AI SYNTHETIC
          </span>
          <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-semibold tracking-wider text-slate-500 border border-slate-300 bg-white">
            0 NO APPROVAL AUTHORITY
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug">
          Payroll obligation summary &middot; new Netherlands entity
        </h3>

        {/* 6 Structured Rows */}
        <div className="flex flex-col gap-3 text-xs pt-1">
          {/* Row 1: AUTHORITATIVE SOURCES */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 pb-2 border-b border-slate-200/60">
            <span className="sm:col-span-4 text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              AUTHORITATIVE SOURCES
            </span>
            <span className="sm:col-span-8 text-[11.5px] text-slate-700 leading-relaxed font-normal">
              Group workforce policy v4 &middot; entity register &middot; payroll input record. No Netherlands jurisdiction source is available.
            </span>
          </div>

          {/* Row 2: LIMITATIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 pb-2 border-b border-slate-200/60">
            <span className="sm:col-span-4 text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              LIMITATIONS
            </span>
            <span className="sm:col-span-8 text-[11.5px] text-slate-700 leading-relaxed font-normal">
              <strong className="font-semibold text-slate-900">Mandatory source missing.</strong> The jurisdiction-dependent portion is suppressed. This finding cannot support a readiness assessment.
            </span>
          </div>

          {/* Row 3: CONFLICTS */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 pb-2 border-b border-slate-200/60">
            <span className="sm:col-span-4 text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              CONFLICTS
            </span>
            <span className="sm:col-span-8 text-[11.5px] text-slate-700 leading-relaxed font-normal">
              Group policy and the recorded local exception differ on one control. Both references shown; no resolution selected.
            </span>
          </div>

          {/* Row 4: PROPOSED FINDING */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 pb-2 border-b border-slate-200/60">
            <span className="sm:col-span-4 text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              PROPOSED FINDING
            </span>
            <span className="sm:col-span-8 text-[11.5px] text-slate-700 leading-relaxed font-normal">
              Group-level obligations are summarized. Jurisdiction-specific obligations cannot be determined. AI: assisted; not a conclusion.
            </span>
          </div>

          {/* Row 5: REQUIRED REVIEWER */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 pb-2 border-b border-slate-200/60">
            <span className="sm:col-span-4 text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              REQUIRED REVIEWER
            </span>
            <span className="sm:col-span-8 text-[11.5px] text-slate-700 leading-relaxed font-normal">
              External payroll and tax advisor, with in-house counsel
            </span>
          </div>

          {/* Row 6: HUMAN DECISION */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
            <span className="sm:col-span-4 text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
              HUMAN DECISION
            </span>
            <span className="sm:col-span-8 text-[11.5px] text-slate-700 leading-relaxed font-normal">
              Deferred &mdash; recorded separately with actor, reason and time
            </span>
          </div>
        </div>
      </div>

      {/* 2. Audit Record Card */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-2 text-left shadow-sm">
        <span className="text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
          AUDIT RECORD
        </span>
        <p className="text-[11.5px] text-slate-700 leading-relaxed font-normal">
          Sources used and excluded, model or service version where approved, the output retained unaltered, any reviewer edits stored as a distinct change, the final human decision, timestamp and policy context.
        </p>
      </div>

      {/* 3. Authority Boundary Card (with left blue accent border) */}
      <div className="relative rounded-xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-2 text-left shadow-sm overflow-hidden pl-5">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1E5B80]" />
        <span className="text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
          AUTHORITY BOUNDARY
        </span>
        <p className="text-[11.5px] text-slate-700 leading-relaxed font-normal">
          Governed AI holds no independent material authority in any of the ten challenges. It cannot approve, cannot execute, and cannot mark a gate ready. Where a mandatory source is missing or stale, the affected finding is suppressed or downgraded rather than completed from inference.
        </p>
      </div>

      {/* 4. Availability Card */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-2 text-left shadow-sm">
        <span className="text-[9.5px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
          AVAILABILITY
        </span>
        <p className="text-[11.5px] text-slate-700 leading-relaxed font-normal">
          If the AI service is unavailable, the non-AI governance path remains fully usable. Every figure an AI summary references is directly viewable in the underlying registers.
        </p>
      </div>
    </div>
  );
}
