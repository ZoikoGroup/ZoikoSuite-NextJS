"use client";

import React from "react";
import { MoreHorizontal, Lock, Download, AlertCircle, PlusCircle } from "lucide-react";

export default function MobileOversightModeCard() {
  return (
    <div className="w-full flex flex-col pt-2">
      <div className="w-full rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-xl overflow-hidden">
        {/* Dark Header */}
        <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#1c5577]">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              OVERSIGHT VIEW
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-bold text-amber-400 border border-amber-400/40 bg-amber-400/10 uppercase">
              READ ONLY · NO OPERATIONAL EXECUTE CONTROLS
            </span>
            <MoreHorizontal className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-5 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {/* Left Column: Decision List */}
          <div className="md:col-span-6 flex flex-col space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              AUDITED DECISION OBJECTS
            </span>
            <div className="flex flex-col space-y-2 text-xs">
              <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 font-medium text-slate-800 flex items-center justify-between">
                <span>UK-Operating subsidiary capital allocation</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 font-medium text-slate-800 flex items-center justify-between">
                <span>Contract revision proposal: Northstar Global</span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 font-medium text-slate-800 flex items-center justify-between">
                <span>Tax treaty detail check: unassigned reminder</span>
                <span className="w-2 h-2 rounded-full bg-slate-400" />
              </div>
            </div>
            <div className="mt-2 p-2.5 rounded-lg border border-slate-100 bg-[#FAF8F5] text-[11px] text-slate-600 leading-relaxed italic">
              An oversight role can view all decision trees. There is no edit capability in this permission state.
            </div>
          </div>

          {/* Right Column: Policy & Restrictions */}
          <div className="md:col-span-6 flex flex-col space-y-2.5 md:pl-5 pt-4 md:pt-0 text-xs">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              OVERSIGHT TELEMETRY
            </span>
            <div className="space-y-1.5 text-slate-700 text-[11.5px]">
              <div><span className="font-semibold text-slate-900">STATUS:</span> Policy regime recorded and in-force</div>
              <div><span className="font-semibold text-slate-900">REORGANIZATION:</span> 1 review required across active paths</div>
              <div><span className="font-semibold text-slate-900">EVIDENCE:</span> 3 path · 1 threshold · 1 verification missing</div>
              <div><span className="font-semibold text-slate-900">THRESHOLD LIMIT:</span> Directive requests review on any decision exceeding threshold limit</div>
            </div>

            {/* Alert banner */}
            <div className="mt-2 p-3 rounded-lg border border-rose-200 bg-rose-50 text-rose-800 text-[11px] font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>APPROVAL EXPERT ONLY — NOT AVAILABLE FOR A STRICT ROLE</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium text-[11px]">
              <Download className="w-3 h-3" />
              <span>Download audit record</span>
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium text-[11px]">
              <span>Request external verification</span>
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium text-[11px]">
              <PlusCircle className="w-3 h-3" />
              <span>Add inquiry</span>
            </button>
          </div>
          <span className="text-[10px] text-slate-500">
            All inspections leave an immutable access trail in the governance audit ledger.
          </span>
        </div>
      </div>
    </div>
  );
}
