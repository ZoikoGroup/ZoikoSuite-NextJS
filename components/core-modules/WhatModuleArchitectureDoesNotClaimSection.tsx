"use client";

import React from "react";
import { motion } from "framer-motion";

interface ArchitectureBoundaryRow {
  area: string;
  whatItDoes: string;
  whatItDoesNotClaim: string;
}

const tableRows: ArchitectureBoundaryRow[] = [
  {
    area: "Multi-entity",
    whatItDoes: "Enforces entity and obligations boundaries across every transaction and report in every module.",
    whatItDoesNotClaim: "Does not erase, redefine, or supersede consolidated corporate hierarchy or ownership rules.",
  },
  {
    area: "Jurisdiction",
    whatItDoes: "Ties each obligation and document to recognized territory, legal rule, and local tax requirement.",
    whatItDoesNotClaim: "Does not claim direct statutory legal authority or replace licensed professional tax counsel representation.",
  },
  {
    area: "Payroll and HR",
    whatItDoes: "Addresses actions, purpose, bounded access, and display state on all workforce events.",
    whatItDoesNotClaim: "Did not replace HCM/payroll computation engines or directly issue employee employment actions.",
  },
  {
    area: "Tax",
    whatItDoes: "Ties upcoming deadlines, compliance obligations, and review trails against each relevant tax filing.",
    whatItDoesNotClaim: "Did not replace corporate tax filings or licensed tax return submission authority.",
  },
  {
    area: "Legal",
    whatItDoes: "Governs internal reviews, obligations, and approval conditions to uphold commercial agreements and NDA rules.",
    whatItDoesNotClaim: "Did not legally act as corporate general counsel or substitute for verified attorney legal approvals.",
  },
  {
    area: "Compliance and audit",
    whatItDoes: "Generates tamper-proof audit trails, verifiable decision events, and immutable evidence records.",
    whatItDoesNotClaim: "Does not guarantee statutory immunity from regulatory bodies or certify external auditor findings automatically.",
  },
  {
    area: "Accounting and Treasury",
    whatItDoes: "Coordinates financial authorization, invoice reviews, subledger evidence, and treasury balance views.",
    whatItDoesNotClaim: "Not an external commercial bank or payment gateway processor; does not alter transactional bank accounts directly without approval.",
  },
  {
    area: "AI",
    whatItDoes: "Documents verified proposals with alerts and contextual cues, strictly reviewable and accountable to human oversight.",
    whatItDoesNotClaim: "No autonomous actions or self-authorizing execution rights in any module without explicit human verification.",
  },
];

export default function WhatModuleArchitectureDoesNotClaimSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#f0eee6]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                HONEST SCOPE: BOUNDARIES AND PROFESSIONAL STANDARDS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              What the module architecture
              <br />
              does not claim
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Stated cleanly per domain, because these are the limits procurement and legal reviewers ask about first.
            </p>
          </div>
        </div>

        {/* 3-Column Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full overflow-x-auto rounded-xl border border-[#e2e8f0] shadow-xs bg-white"
        >
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[10.5px] font-mono tracking-wider text-[#64748b] uppercase">
                <th className="py-3.5 px-6 font-semibold w-[220px]">AREA</th>
                <th className="py-3.5 px-6 font-semibold">WHAT IT DOES</th>
                <th className="py-3.5 px-6 font-semibold">WHAT IT DOES NOT CLAIM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#edf2f7] text-[12.5px]">
              {tableRows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#f8fafc]/80 transition-colors"
                >
                  {/* AREA */}
                  <td className="py-4 px-6 font-semibold text-[#08222F] align-top">
                    {row.area}
                  </td>

                  {/* WHAT IT DOES */}
                  <td className="py-4 px-6 text-[#334155] leading-relaxed align-top">
                    {row.whatItDoes}
                  </td>

                  {/* WHAT IT DOES NOT CLAIM */}
                  <td className="py-4 px-6 text-[#64748b] leading-relaxed align-top">
                    {row.whatItDoesNotClaim}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
