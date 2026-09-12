"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SystemOfRecordRow {
  whatFailsToday: string;
  howSolved: string;
}

const tableRows: SystemOfRecordRow[] = [
  {
    whatFailsToday: "Data in the report is from 4 different systems, no common timestamp or meaning",
    howSolved: "Shared identity, provenance, and canonical schema",
  },
  {
    whatFailsToday: "Nobody can see who is permitted to approve a specific action",
    howSolved: "Delegated authority with scope, limit and delegation source",
  },
  {
    whatFailsToday: "The report shows a sum, not an approval, and no trace of evidence",
    howSolved: "Separation evaluated before the decision is committed",
  },
  {
    whatFailsToday: "Evidence is assembled in spreadsheets and emails when the audit arrives",
    howSolved: "Evidence reconstructed and locked while work proceeded",
  },
  {
    whatFailsToday: "Actions happen in upstream systems without check",
    howSolved: "Forward policy gate placed on every item",
  },
  {
    whatFailsToday: "Exceptions approved on email leave no audit trace",
    howSolved: "Exception recorded with compensating control and expiry",
  },
];

export default function YourSystemsOfRecordStayAuthoritativeSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading, Subtitle & Callout Cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase">
                COEXISTENCE WITH EXISTING SYSTEMS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#08222F] leading-tight mb-4">
              Your systems of record stay authoritative
            </h2>

            {/* Subtext */}
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
              Leadership teams rarely have the appetite to replace core systems in order to fix coordination. The decision packet above referenced four source systems and owned none of them.
            </p>

            {/* Top Box: WHAT ZOIKOSUITE OWNS VS NOT OWNS */}
            <div className="rounded-xl border border-slate-200 bg-[#FAF8F5] p-4 sm:p-5 mb-4 shadow-2xs">
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase block mb-2">
                WHAT ZOIKOSUITE OWNS IN THAT PACKET:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-[#C5A059] font-bold">―</span>
                  <span>The policy evaluated and its evaluated outcome</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5A059] font-bold">―</span>
                  <span>The authority and segregation check</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5A059] font-bold">―</span>
                  <span>The evidence requirement and its proof</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5A059] font-bold">―</span>
                  <span>The decision state and its evidence manifest</span>
                </li>
              </ul>
            </div>

            {/* Bottom Box: WHAT REMAINS IN SOURCE */}
            <div className="rounded-xl border border-slate-200 bg-[#FAF8F5] p-4 shadow-2xs mb-5">
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase block mb-1.5">
                WHAT REMAINS IN SOURCE:
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                The supplier record, the invoice, the contract document and the payment execution path — each remained owned by its existing system.
              </p>
            </div>

            {/* Action Button */}
            <div className="mb-6 lg:mb-0">
              <Link
                href="/platform-overview"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] hover:bg-[#0c3a57] text-white text-xs sm:text-[13px] font-semibold transition-all duration-200 shadow-sm"
              >
                <span>See the system of record model</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Comparative Table */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-3">
              TEN COORDINATION PROBLEMS AND HOW THEY RESOLVE
            </span>

            <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs bg-white">
              <table className="w-full text-left border-collapse text-[11.5px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4 font-semibold w-1/2">WHAT FAILS TODAY</th>
                    <th className="py-3 px-4 font-semibold w-1/2">HOW RESOLVED</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tableRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 text-slate-600 leading-relaxed align-top">
                        {row.whatFailsToday}
                      </td>
                      <td className="py-3 px-4 text-[#08222F] font-medium leading-relaxed align-top">
                        {row.howSolved}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
