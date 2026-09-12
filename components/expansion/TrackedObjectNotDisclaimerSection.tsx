"use client";

import React from "react";
import { motion } from "framer-motion";

interface ReviewCard {
  id: string;
  status: string;
  statusColor: string;
  type: string;
  scope: string;
  responsibleReview: string;
  reviewStatus: string;
  completionDate: string;
  source: string;
  limitationsScope: string;
}

const reviews: ReviewCard[] = [
  {
    id: "REVIEW-01",
    status: "BLOCKING",
    statusColor: "text-rose-600 bg-rose-50 border-rose-200",
    type: "Entity and tax registration framework",
    scope: "New Netherlands entity — payroll & corporate",
    responsibleReview: "External counsel (tax advisor) with in-house review",
    reviewStatus: "Not started",
    completionDate: "Not applicable until instruction exists",
    source: "NL tax/employment qualification matrix",
    limitationsScope: "None",
  },
  {
    id: "REVIEW-02",
    status: "IN PROGRESS",
    statusColor: "text-amber-700 bg-amber-50 border-amber-200",
    type: "Payroll & compensation local regulations handbook",
    scope: "Northstar GmbH · Germany",
    responsibleReview: "In-house payroll leads with in-house review",
    reviewStatus: "In progress — due 18 May 2026",
    completionDate: "Interim summary v1 · effective Jan 2026",
    source: "Workers council / union agreements portfolio",
    limitationsScope: "Interim — subject to Works Council final consultation",
  },
  {
    id: "REVIEW-03",
    status: "COMPLETE",
    statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    type: "Cyber and data residency compliance",
    scope: "France · all consumer cloud tenant",
    responsibleReview: "Head of Privacy / Legal Counsel (SecOps)",
    reviewStatus: "Completed · 28 Jan 2026",
    completionDate: "CNIL certification dossier #2026/014",
    source: "Internal cloud infrastructure baseline",
    limitationsScope: "Restricted to EU data residency and transit corridors",
  },
  {
    id: "REVIEW-04",
    status: "BLOCKING",
    statusColor: "text-rose-600 bg-rose-50 border-rose-200",
    type: "Cross-border tax & transfer pricing",
    scope: "Singapore & Hong Kong Hubs",
    responsibleReview: "Unassigned",
    reviewStatus: "Blocked — No qualifying source connected",
    completionDate: "Blocked: unassigned reviewer in operational system",
    source: "None",
    limitationsScope: "Open",
  },
];

export default function TrackedObjectNotDisclaimerSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-14 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12">
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
                PROFESSIONAL REVIEW
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              A tracked object, not a disclaimer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Each review carries a type, a responsible reviewer, a scope, a status, a source and a completion record. An unassigned review is a visible blocker rather than an implied assumption.
            </p>
          </motion.div>
        </div>

        {/* 4 Tracked Object Cards Grid (2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Top ID & Status Badge */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-slate-500 uppercase">
                    {rev.id}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border ${rev.statusColor}`}
                  >
                    {rev.status}
                  </span>
                </div>

                {/* Properties List */}
                <div className="space-y-2 text-xs">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-slate-400 font-mono text-[10px] uppercase sm:w-1/3">
                      Type
                    </span>
                    <span className="font-medium text-slate-800 sm:w-2/3">
                      {rev.type}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-slate-400 font-mono text-[10px] uppercase sm:w-1/3">
                      Scope
                    </span>
                    <span className="font-medium text-slate-800 sm:w-2/3">
                      {rev.scope}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-slate-400 font-mono text-[10px] uppercase sm:w-1/3">
                      Responsible review
                    </span>
                    <span className="font-medium text-slate-800 sm:w-2/3">
                      {rev.responsibleReview}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-slate-400 font-mono text-[10px] uppercase sm:w-1/3">
                      Review status
                    </span>
                    <span
                      className={`font-semibold sm:w-2/3 ${
                        rev.reviewStatus.includes("Blocked")
                          ? "text-rose-600"
                          : rev.reviewStatus.includes("progress")
                          ? "text-amber-700"
                          : rev.reviewStatus.includes("Completed")
                          ? "text-emerald-700"
                          : "text-slate-800"
                      }`}
                    >
                      {rev.reviewStatus}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-slate-400 font-mono text-[10px] uppercase sm:w-1/3">
                      Completion record
                    </span>
                    <span className="font-mono text-slate-700 sm:w-2/3 text-[11px]">
                      {rev.completionDate}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-slate-400 font-mono text-[10px] uppercase sm:w-1/3">
                      Source
                    </span>
                    <span className="font-mono text-slate-700 sm:w-2/3 text-[11px]">
                      {rev.source}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pt-1">
                    <span className="text-slate-400 font-mono text-[10px] uppercase sm:w-1/3">
                      Limitations / Scope
                    </span>
                    <span className="text-slate-600 sm:w-2/3 text-[11.5px]">
                      {rev.limitationsScope}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
