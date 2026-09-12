"use client";

import React from "react";
import { AlertTriangle, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function MobileDetectedChangeCardsView() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* CARD 1: CHG-0012 */}
      <div className="rounded-xl border border-slate-200 bg-[#FAF8F5] p-4 text-[#08222F] shadow-sm flex flex-col gap-3">
        {/* Top meta row */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
          <span className="font-mono text-[11px] font-semibold text-slate-500 tracking-wider">
            CHANGE ID: CHG-0012
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Clock className="w-3 h-3" />
            UNDER APPLICABILITY REVIEW
          </span>
        </div>

        {/* Change Title */}
        <div>
          <h4 className="text-sm font-bold text-[#08222F] leading-snug">
            Northstar transfer-pricing ruleset v2 superseded v1
          </h4>
          <p className="text-[11px] text-slate-500 mt-1 font-mono">
            Entity/source: Corporate / Inbound · detected 03 Aug 2026 · effective 01 Sep 2026
          </p>
        </div>

        {/* Impacted scope box */}
        <div className="bg-white rounded-lg p-3 border border-slate-200/80 space-y-1.5 text-xs">
          <div className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            IMPACTED SCOPE
          </div>
          <p className="text-slate-800 font-medium text-xs leading-relaxed">
            Northstar GmbH · supplements · 2 filing obligations · 1 reporting requirement
          </p>
          <div className="pt-1 flex items-center justify-between text-[11px] border-t border-slate-100 mt-2">
            <span className="text-slate-500">Reviewer:</span>
            <span className="font-semibold text-slate-700">Tax advisor · in progress</span>
          </div>
        </div>

        {/* Dependencies & Evidence */}
        <div className="space-y-1.5 text-[11px] pt-1">
          <div className="flex items-start gap-2">
            <span className="text-slate-400 font-mono shrink-0">Configured dependencies:</span>
            <span className="text-slate-700 font-medium">2 &mdash; unassigned reporting review</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-slate-400 font-mono shrink-0">Evidence:</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
              <CheckCircle2 className="w-3 h-3" />
              recommendation recorded
            </span>
          </div>
        </div>
      </div>

      {/* CARD 2: CHG-0015 */}
      <div className="rounded-xl border border-rose-200 bg-[#FFF9F9] p-4 text-[#08222F] shadow-sm flex flex-col gap-3">
        {/* Top meta row */}
        <div className="flex items-center justify-between border-b border-rose-200/80 pb-2">
          <span className="font-mono text-[11px] font-semibold text-slate-500 tracking-wider">
            CHANGE ID: CHG-0015
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-300">
            <AlertTriangle className="w-3 h-3" />
            BLOCKED — SOURCE STALE
          </span>
        </div>

        {/* Change Title */}
        <div>
          <h4 className="text-sm font-bold text-[#08222F] leading-snug">
            Singapore filing approval requirement
          </h4>
          <p className="text-[11px] text-slate-500 mt-1 font-mono">
            Source: ACRA / Gov feed · detected 28 Jul 2026 · effective immediate
          </p>
        </div>

        {/* Impacted scope box */}
        <div className="bg-white rounded-lg p-3 border border-rose-100 space-y-1.5 text-xs">
          <div className="text-[10px] font-mono font-bold tracking-wider text-rose-400 uppercase">
            STATUS: BLOCKED (NO AUTO ASSIGN)
          </div>
          <p className="text-slate-800 font-medium text-xs leading-relaxed">
            Northstar Singapore · tax obligations
          </p>
          <div className="pt-1 flex items-center justify-between text-[11px] border-t border-slate-100 mt-2">
            <span className="text-slate-500">Reviewer:</span>
            <span className="font-semibold text-slate-700">Sentinel · not started</span>
          </div>
        </div>

        {/* Blocking Notice */}
        <div className="text-[11.5px] text-rose-700 bg-rose-50 border border-rose-200 rounded p-2.5 leading-relaxed">
          Impacted scope cannot be fully determined until live source is refreshed.
        </div>

        <div className="flex items-start gap-2 text-[11px]">
          <span className="text-slate-400 font-mono shrink-0">Evidence:</span>
          <span className="text-rose-600 font-semibold">Incomplete</span>
        </div>
      </div>

      {/* CALLOUT FOOTER BOX */}
      <div className="rounded-xl border border-[#c5a059]/40 bg-[#08222F] p-4 text-white shadow-sm flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#c5a059] font-bold">
            NO AUTONOMOUS INTERVENTION
          </span>
          <p className="text-xs text-slate-300 leading-relaxed">
            A model can identify a change and describe potential consequences, but an execution permission is never granted autonomously. Absence of a human-signed review will hold each registered change inside the queue.
          </p>
        </div>
      </div>
    </div>
  );
}
