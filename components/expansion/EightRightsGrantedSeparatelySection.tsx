"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EightRightsGrantedSeparatelySection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#14425a]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                AUTHORITY, EVIDENCE AND SOVEREIGNTY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              Eight rights, granted separately
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-[#9ba4b5] leading-relaxed">
              Approval and execution rights reference an underlying corporate, business or legal delegation source and its effective scope. The platform reads that source; it does not create it.
            </p>
          </motion.div>
        </div>

        {/* Mobile View: Rights Separation Chips Row */}
        <div className="block lg:hidden mb-8">
          <div className="rounded-xl border border-[#14425a] bg-[#0A2A3A] p-4 flex flex-col gap-3">
            <div className="text-[10px] font-mono font-bold tracking-wider text-[#c5a059] uppercase">
              RIGHTS SEPARATION — TWO REQUISITES, ACTUAL CHART
            </div>
            {/* 8 Chips */}
            <div className="grid grid-cols-4 gap-2">
              {["View", "Prepare", "Review", "Approve", "Execute", "Reconcile", "Export", "Audit"].map((right, idx) => (
                <div
                  key={idx}
                  className="rounded-lg bg-[#08222F] border border-[#14425a] py-1.5 px-2 text-center text-[11px] font-mono text-slate-200 font-medium"
                >
                  {right}
                </div>
              ))}
            </div>
            <p className="text-[11.5px] text-slate-400 italic mt-1 leading-snug">
              Minimum qualification source and context required before any internal permission grant.
            </p>
          </div>
        </div>

        {/* Content Layout: Left 2 Dark Cards + Right Terminal Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column (5 cols): 2 Dark Accent Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-[#14425a] bg-[#0A2A3A] p-5 sm:p-6 flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono font-bold tracking-wider text-[#c5a059] uppercase mb-2">
                EVIDENCE FIRST
              </div>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                Each material decision or transition has exposure to a source, actor, time, version, account class and relationship to the action.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-[#14425a] bg-[#0A2A3A] p-5 sm:p-6 flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono font-bold tracking-wider text-[#c5a059] uppercase mb-2">
                AUDIT READINESS
              </div>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                Means verifiable records and evidence architecture only &mdash; it carries no implication of certification, admissibility at audition or regulator acceptance.
              </p>
            </motion.div>
          </div>

          {/* Right Column (7 cols): Terminal Card with Table + Blue Footer Note */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-3"
          >
            {/* White/Ivory Terminal Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-xl overflow-hidden">
              {/* Header Bar */}
              <div className="bg-[#FAF8F5] px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
                    UNASSIGNED
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    WORKSTATION · DATE ROOM
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                  Netherlands entity-readiness summary
                </h4>

                {/* Properties Table */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                    <span className="text-[10px] font-mono uppercase text-slate-400 sm:w-28 shrink-0">
                      STATUS
                    </span>
                    <span className="text-slate-700 leading-relaxed">
                      Group governance baseline v4 &mdash; review pending. No Netherlands jurisdiction record is available.
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 pt-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400 sm:w-28 shrink-0">
                      JURISDICTION / AUTHORITY / SOURCE
                    </span>
                    <span className="text-slate-800 leading-relaxed">
                      <strong className="font-semibold text-rose-600">Mandatory source missing.</strong> Without an approved corporate source, this finding is unreadiness and will remain as a manual review requirement.
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 pt-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400 sm:w-28 shrink-0">
                      POLICY / SCOPE
                    </span>
                    <span className="text-slate-700 leading-relaxed">
                      Suspended for this jurisdiction dependent policies. Only the group-baseline elements are authenticated.
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 pt-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400 sm:w-28 shrink-0">
                      AUDIT WORKSTREAM
                    </span>
                    <span className="text-slate-700 leading-relaxed">
                      External tax and legal counsel, with in-house General Counsel.
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 pt-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400 sm:w-28 shrink-0">
                      NEXT REVIEWS
                    </span>
                    <span className="text-slate-700 leading-relaxed font-mono text-[11px]">
                      Pending &mdash; recorded separately when made.
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 pt-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400 sm:w-28 shrink-0">
                      AUDIT WORK
                    </span>
                    <span className="text-slate-700 leading-relaxed font-mono text-[11px]">
                      Source, output, actor timestamp and policy context retained.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cyan/Navy Info Box */}
            <div className="rounded-xl border border-[#14425a] bg-[#0A2A3A]/90 p-4 sm:p-5 text-xs text-slate-300 leading-relaxed">
              <span className="text-[10px] font-mono text-[#D0AA55] uppercase block mb-1">
                AS STATED IN POLICY
              </span>
              <p className="text-[11.5px] text-slate-300 leading-relaxed">
                No independent reasoning legal, tax, accounting, employment, compliance, regulatory, M&amp;A or activation authority, finding or state may statutory sources suppress or downgrade the aforementioned policy, and all persist metrics related expansion gate-ready. If the 41 sources is unreadiness, the action can forward via continued redetermination.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
