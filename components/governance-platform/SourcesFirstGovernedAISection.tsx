"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SourcesFirstGovernedAISection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#103448]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid - UNTOUCHED FOR DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-8 sm:mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                GOVERNED AI
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.14]">
              Sources first, limitations
              <br className="hidden sm:inline" />{" "}
              second, finding third
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#9ba4b5] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              The visual order is deliberate: a reader sees what the model was allowed to look at, and what it could not resolve, before they see what it concluded.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP-ONLY STACK (100% UNTOUCHED FOR DESKTOP)               */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:block space-y-3.5 max-w-4xl mx-auto w-full mb-8">
          {/* Box 1: Evaluated Sources */}
          <div className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                01
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Evaluated Sources
              </span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-28 shrink-0 text-[9.5px] uppercase">PRIMARY SOURCE</span>
                <span className="text-[#334155]">ERP Procurement connector · Supplier master record SP-031</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-28 shrink-0 text-[9.5px] uppercase">SECONDARY SOURCE</span>
                <span className="text-[#334155]">Signed supplier contract 00192 PDF · ingested clause database</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-28 shrink-0 text-[9.5px] uppercase">FRESHNESS</span>
                <span className="text-[#334155]">Last synchronized 12 Aug 2024 14:18 UTC (connector healthy)</span>
              </div>
            </div>
          </div>

          {/* Box 2: Limitations, Bounds and Missing Information */}
          <div className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                02
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Limitations, bounds and missing information
              </span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-28 shrink-0 text-[9.5px] uppercase">LIMITATION</span>
                <span className="text-[#334155]">Model does not inspect third-party banking networks directly</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-28 shrink-0 text-[9.5px] uppercase">MISSING EVIDENCE</span>
                <span className="text-[#b91c1c] font-medium">Verified verbal call-back confirmation log is not yet uploaded</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-28 shrink-0 text-[9.5px] uppercase">CONFIDENCE</span>
                <span className="text-[#334155]">High syntactic match; medium operational assurance due to missing call-back</span>
              </div>
            </div>
          </div>

          {/* Box 3: Proposed Finding */}
          <div className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                03
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Proposed Finding
              </span>
            </div>
            <p className="text-xs text-[#334155] leading-relaxed">
              Proposed change matches prior signatory format, but bank sort code requires secondary verification under POL-002 v3 before invoice INV-4471 release.
            </p>
          </div>

          {/* Box 4: Suggested Next Action */}
          <div className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                04
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Suggested Next Action
              </span>
            </div>
            <div className="text-xs text-[#334155] leading-relaxed">
              Route to Procurement specialist Daniel Foster to attach call-back record, then escalate to Finance Controller Maya Chen for conditional sign-off.
            </div>
          </div>

          {/* Box 5: Human Decision */}
          <div className="rounded-xl border border-[#d4b465] bg-[#fffdfa] text-[#08222F] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#faeed0]">
              <span className="px-1.5 py-0.5 rounded bg-[#c5a059] text-white font-mono text-[9px] font-bold">
                05
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#92400e]">
                Human Decision
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-[#64748b] block text-[9.5px]">DECIDING PARTY</span>
                <span className="font-semibold text-[#08222F]">Maya Chen · Finance Controller</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9.5px]">OUTCOME</span>
                <span className="font-semibold text-[#15803d]">APPROVED with condition (Call-back verification attached)</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9.5px]">NOTE</span>
                <span className="text-[#475569]">Call-back confirmed with supplier CFO at 14:20 UTC</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[9.5px]">DECISION TIMESTAMP</span>
                <span className="font-mono text-[#08222F]">12 Aug 2024 14:22:08 UTC</span>
              </div>
            </div>
          </div>

          {/* Box 6: Audit Record */}
          <div className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                06
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Audit Record
              </span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-28 shrink-0 text-[9.5px] uppercase">MODEL RECORD</span>
                <span className="font-mono text-[#08222F]">Model: Claude-3.5-Sonnet · Prompt-v4.2</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-28 shrink-0 text-[9.5px] uppercase">EVIDENCE TRACE</span>
                <span className="font-mono text-[#08222F]">EVD-001 · single continuous provenance manifest</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#64748b] w-28 shrink-0 text-[9.5px] uppercase">PERMANENT SEAL</span>
                <span className="font-mono text-[#08222F]">SEAL-SHA256-4c9b88e1a8f921d7b0c...</span>
              </div>
            </div>
          </div>

          {/* Desktop 2 Callouts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="rounded-xl border border-[#1a3f55] bg-[#0c2a3c] p-5">
              <span className="text-[10.5px] font-mono font-bold tracking-[0.16em] text-[#c5a059] uppercase block mb-2">
                BOUNDARY
              </span>
              <p className="text-xs sm:text-[12.5px] text-[#9ba4b5] leading-relaxed">
                The platform never displays “AI approved” or “AI authorized”. Machine findings are permanently distinct records that require authenticated human sign-off.
              </p>
            </div>

            <div className="rounded-xl border border-[#1a3f55] bg-[#0c2a3c] p-5">
              <span className="text-[10.5px] font-mono font-bold tracking-[0.16em] text-[#c5a059] uppercase block mb-2">
                AUDIT
              </span>
              <p className="text-xs sm:text-[12.5px] text-[#9ba4b5] leading-relaxed">
                Every prompt, source extract, confidence score and human decision record is retained in an immutable audit ledger with cryptographic verification.
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY STACK (STRICTLY HIDDEN ON DESKTOP)                */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-3.5 w-full">
          {/* Mobile Box 01: Authorized sources */}
          <div className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                01
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Authorized sources
              </span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-24 shrink-0 font-mono text-[10px] uppercase">In scope:</span>
                <span className="text-slate-800 font-medium">CTR-0012 (contract record · supplier master agreement)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-24 shrink-0 font-mono text-[10px] uppercase">Source state:</span>
                <span className="text-slate-700">Unforeseen records outside user permission</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-24 shrink-0 font-mono text-[10px] uppercase">Excluded:</span>
                <span className="text-slate-700">Attaching employee files — outside ingestion permission; so excluded from summary model</span>
              </div>
            </div>
          </div>

          {/* Mobile Box 02: Limitations, conflicts and missing information */}
          <div className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                02
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Limitations, conflicts and missing information
              </span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-24 shrink-0 font-mono text-[10px] uppercase">Limitations:</span>
                <span className="text-slate-700">Model is blind to local languages, relies on summarisation</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-24 shrink-0 font-mono text-[10px] uppercase">Missing context:</span>
                <span className="text-slate-700">Cheque vs wire rule (drafted, not in scope) at ProcureGen record</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-24 shrink-0 font-mono text-[10px] uppercase">Conflict:</span>
                <span className="text-slate-700">Supplier bank record reference withheld; synchronous for invoice charge item</span>
              </div>
            </div>
          </div>

          {/* Mobile Box 03: Proposed finding */}
          <div className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                03
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Proposed finding
              </span>
            </div>
            <p className="text-[11.5px] text-slate-800 leading-relaxed font-medium">
              Clause 6.2 appears to require advance notice before a remittance change takes effect. Reference: CTR-0012, p. 7 §6.2; viewable in the record.
            </p>
            <p className="text-[10px] text-slate-500 italic mt-2">
              This is a proposal for a human reviewer. It carries no delegated or execution authority.
            </p>
          </div>

          {/* Mobile Box 04: Required reviewer */}
          <div className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                04
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Required reviewer
              </span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-28 shrink-0 font-mono text-[10px] uppercase">Role:</span>
                <span className="text-slate-800 font-medium">General Counsel or delegate</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-28 shrink-0 font-mono text-[10px] uppercase">Before boundary:</span>
                <span className="text-slate-700">Execution and payment remain prohibited. Legal interpretation of contract remains out.</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-28 shrink-0 font-mono text-[10px] uppercase">Resolution state:</span>
                <span className="text-slate-700">Professional review required before a release attempt is permitted</span>
              </div>
            </div>
          </div>

          {/* Centered AI Output Ends Here Divider */}
          <div className="flex items-center justify-center my-2">
            <div className="w-full border-t border-dashed border-[#24526d] relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#08222F] px-3 text-[9px] font-mono text-[#7ea0b5] uppercase tracking-widest whitespace-nowrap">
                AI OUTPUT ENDS HERE
              </span>
            </div>
          </div>

          {/* Mobile Box 05: Human decision (Dark Navy Bar) */}
          <div className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] overflow-hidden shadow-sm">
            <div className="bg-[#051c27] px-4 py-2.5 flex items-center gap-2 border-b border-[#12364c]">
              <span className="px-1.5 py-0.5 rounded bg-[#c5a059] text-white font-mono text-[9px] font-bold">
                05
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-white">
                Human decision
              </span>
            </div>
            <div className="p-4 space-y-1.5 text-[11px]">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-28 shrink-0 font-mono text-[10px] uppercase">Reviewer:</span>
                <span className="text-slate-900 font-semibold">Aisha Al-Mansoor · General Counsel</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-28 shrink-0 font-mono text-[10px] uppercase">Decision:</span>
                <span className="text-slate-700">Accepted in part; note added</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-28 shrink-0 font-mono text-[10px] uppercase">Reason:</span>
                <span className="text-slate-700">Withheld advance notice waived internally; supplier instructed to apply in next agreement</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-28 shrink-0 font-mono text-[10px] uppercase">Action:</span>
                <span className="text-slate-700">Approved the underlying invoice without notice; record detailed in provisioning</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-28 shrink-0 font-mono text-[10px] uppercase">Status:</span>
                <span className="text-emerald-700 font-semibold">Obligation override logged today in ACT-081</span>
              </div>
            </div>
          </div>

          {/* Mobile Box 06: Audit record */}
          <div className="rounded-xl border border-[#1b3d52] bg-white text-[#08222F] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#f1f5f9]">
              <span className="px-1.5 py-0.5 rounded bg-[#08222F] text-white font-mono text-[9px] font-bold">
                06
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#08222F]">
                Audit record
              </span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-32 shrink-0 font-mono text-[10px] uppercase">Model / service ID:</span>
                <span className="font-mono text-slate-700">Prompt-id:48 · v4:sonnet</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-32 shrink-0 font-mono text-[10px] uppercase">System context:</span>
                <span className="text-slate-700">Action: object not requesting vote</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-32 shrink-0 font-mono text-[10px] uppercase">Evaluator context:</span>
                <span className="text-slate-700">Syscontext, including all in-scope data and activity</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-32 shrink-0 font-mono text-[10px] uppercase">Sealed:</span>
                <span className="text-slate-700">Retained unaltered; exemplar demonstrator record</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-32 shrink-0 font-mono text-[10px] uppercase">Decision entry:</span>
                <span className="text-slate-700">Revision and time change, with author and time</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
                <span className="text-slate-400 w-32 shrink-0 font-mono text-[10px] uppercase">Final human decision:</span>
                <span className="text-slate-900 font-semibold">Signed and approved with authority token</span>
              </div>
            </div>
          </div>

          {/* Mobile Bottom 2 Cards (AUTHORITY & FALLBACK) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <div className="rounded-xl border border-[#1a3f55] bg-[#0c2a3c] p-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.16em] text-[#c5a059] uppercase block mb-1.5">
                AUTHORITY
              </span>
              <p className="text-[11.5px] text-[#9ba4b5] leading-relaxed">
                Governed AI holds no independent delegated authority and performs no silent tutorial execution. It cannot approve, and it cannot be configured to approve.
              </p>
            </div>

            <div className="rounded-xl border border-[#1a3f55] bg-[#0c2a3c] p-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.16em] text-[#c5a059] uppercase block mb-1.5">
                FALLBACK
              </span>
              <p className="text-[11.5px] text-[#9ba4b5] leading-relaxed">
                If the AI service is unavailable, the non-AI governance path remains usable. Policy evaluation, authority checks, evidence and human review do not depend on it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
