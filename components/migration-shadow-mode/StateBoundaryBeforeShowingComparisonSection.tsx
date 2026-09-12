"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StateBoundaryBeforeShowingComparisonSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#14425a]">
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
                  SHADOW BOUNDARY AND SCOPE ENVELOPE
                </span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
                State the boundary before showing any comparison
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-5 flex flex-col justify-end text-left"
            >
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                A reviewer should be able to see exactly what Shadow Mode observes, where, with what data and identity, whether writes are possible, and who owns the boundary.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 bg-[#061822]"
          >
            <div className="relative w-full aspect-[2.1/1]">
              <Image
                src="/migration-shadow-mode/msm4.png"
                alt="State the boundary before showing any comparison architecture illustration"
                fill
                className="object-cover object-center"
                priority
              />
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
              SHADOW ENVIRONMENT AND ACTION CONTRACT
            </span>
          </div>

          {/* Mobile Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight mb-3">
            State the boundary before showing any comparison
          </h2>

          {/* Mobile Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
            A reviewer should be able to say exactly what Shadow Mode observes, where, with what data and identity, whether writes are possible, and who owns the boundary.
          </p>

          {/* Shadow Contract Card */}
          <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-white text-[#08222F] mb-6">
            {/* Dark Top Bar */}
            <div className="bg-[#0C2D3E] px-4 py-3 border-b border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold text-white">
                  Shadow contract &middot; SHC-2026-007
                </span>
                <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold bg-rose-950 text-rose-300 border border-rose-800">
                  WRITE CAPABILITY: NO
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-300">
                Status: Approved for evaluation
              </span>
            </div>

            {/* Key-Value Metadata List */}
            <div className="p-4 divide-y divide-slate-100 text-[10.5px]">
              <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider">
                  ENVIRONMENT
                </span>
                <span className="text-slate-700 font-medium">
                  Illustrative Evaluation &mdash; not a production environment
                </span>
              </div>

              <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider">
                  OBSERVATION METHOD
                </span>
                <span className="text-slate-700 font-medium">
                  Representative signals replayed from an approved extract
                </span>
              </div>

              <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider">
                  DATA CLASS
                </span>
                <span className="text-slate-700 font-medium">
                  Synthetic evaluation data only
                </span>
              </div>

              <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider">
                  IDENTITY CLASS
                </span>
                <span className="font-mono text-slate-700">
                  svc-shadow-02 &middot; read scope &middot; no credential value displayed
                </span>
              </div>

              <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider">
                  WRITE CAPABILITY
                </span>
                <span className="text-slate-700">
                  <strong className="text-rose-600 font-bold">No</strong> &mdash; and no toggle on this page can enable it
                </span>
              </div>

              <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider">
                  EXECUTION BOUNDARY
                </span>
                <span className="text-slate-700 font-medium">
                  Shadow Mode cannot authorize production actions
                </span>
              </div>

              <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider">
                  RETENTION
                </span>
                <span className="text-slate-700 font-medium">
                  No customer operational data stored
                </span>
              </div>

              <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider">
                  OWNER / REVIEWER
                </span>
                <span className="text-slate-700 font-medium">
                  Migration architect &middot; reviewed 21 Jul 2026
                </span>
              </div>
            </div>

            {/* Two Inner Boxes (Included / Excluded) */}
            <div className="p-4 space-y-3 bg-[#FAF8F5] border-t border-[#EAE4DA]">
              {/* Box 1: Included */}
              <div className="border border-emerald-300 bg-emerald-50/40 rounded-xl p-3 text-[10.5px]">
                <div className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  INCLUDED IN THIS CONTRACT
                </div>
                <ul className="space-y-1 text-slate-700">
                  <li>&bull; Northstar UK Ltd - supplier and payables process</li>
                  <li>&bull; Supplier bank detail change action type</li>
                  <li>&bull; Invoice approval action type</li>
                  <li>&bull; Finance system class interface &mdash; read</li>
                </ul>
              </div>

              {/* Box 2: Excluded */}
              <div className="border border-rose-300 bg-rose-50/40 rounded-xl p-3 text-[10.5px]">
                <div className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-rose-800 mb-2">
                  EXPLICITLY EXCLUDED &mdash; NOT OBSERVED
                </div>
                <ul className="space-y-1 text-slate-700">
                  <li>&bull; Northstar GmbH and Singapore entities</li>
                  <li>&bull; Payroll and workforce processes</li>
                  <li>&bull; Tax obligations &mdash; source stale, excluded pending review</li>
                  <li>&bull; Any banking or payment execution path</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Red Alert Execution Boundary Box */}
          <div className="border border-rose-900/60 bg-rose-950/40 rounded-xl p-4 mb-5">
            <div className="flex items-center gap-2 mb-2 text-rose-400">
              <span className="text-sm">&Delta;</span>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase">
                EXECUTION BOUNDARY
              </span>
            </div>
            <p className="text-[11px] text-rose-200 leading-relaxed">
              Shadow Mode observes and compares. It does not authorize production actions. Any live execution capability sits outside this contract and requires separate controlled-activation approval. Changing the scope or the write capability invalidates the related evidence and reopens approval.
            </p>
          </div>

          {/* Blue/Cyan Left-Border Callout */}
          <div className="border-l-2 border-sky-400 pl-3 py-1">
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Excluded scope is not implied to be safe. It is listed because a comparison that silently omits a process would misrepresent its own coverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
