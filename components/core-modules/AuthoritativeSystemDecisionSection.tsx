"use client";

import React from "react";
import { motion } from "framer-motion";

interface SystemOwnershipRow {
  object: string;
  relatedModule: string;
  typicalSource: string;
  commonPosition: string;
  positionColor: "blue" | "amber" | "green" | "gray";
  whatZoikoSuiteAdds: string;
}

const tableData: SystemOwnershipRow[] = [
  {
    object: "Ledger and subledger",
    relatedModule: "Accounting & General Ledger",
    typicalSource: "ERP / finance system",
    commonPosition: "External",
    positionColor: "blue",
    whatZoikoSuiteAdds: "Governed period, authority and evidence around postings",
  },
  {
    object: "Supplier invoice",
    relatedModule: "Accounts Payable",
    typicalSource: "ERP accounts payable",
    commonPosition: "Implementation-defined",
    positionColor: "amber",
    whatZoikoSuiteAdds: "Match state, policy outcomes, approval chain, evidence",
  },
  {
    object: "Customer invoice",
    relatedModule: "Accounts Receivable",
    typicalSource: "ERP / billing",
    commonPosition: "Implementation-defined",
    positionColor: "amber",
    whatZoikoSuiteAdds: "Collection obligations, dispute evidence, authority",
  },
  {
    object: "Bank position and payment",
    relatedModule: "Treasury & Cash Position",
    typicalSource: "Banking / treasury",
    commonPosition: "External",
    positionColor: "blue",
    whatZoikoSuiteAdds: "Governed proposal, authorization, reconciliation record",
  },
  {
    object: "Employee record",
    relatedModule: "Human Resources",
    typicalSource: "HCM",
    commonPosition: "External",
    positionColor: "blue",
    whatZoikoSuiteAdds: "Purpose-limited context for governed workforce actions",
  },
  {
    object: "Pay run",
    relatedModule: "Payroll",
    typicalSource: "Payroll provider",
    commonPosition: "External",
    positionColor: "blue",
    whatZoikoSuiteAdds: "Release authority, obligation tracking, evidence",
  },
  {
    object: "Tax determination and filing",
    relatedModule: "Tax Management",
    typicalSource: "Tax engine / filing channel",
    commonPosition: "Implementation-defined",
    positionColor: "amber",
    whatZoikoSuiteAdds: "Obligation calendar, coverage status, professional review routing",
  },
  {
    object: "Contract document",
    relatedModule: "Legal & Contracts",
    typicalSource: "CLM / repository",
    commonPosition: "External",
    positionColor: "blue",
    whatZoikoSuiteAdds: "Obligation extraction, review requirement, linked evidence",
  },
  {
    object: "Obligation and control",
    relatedModule: "Compliance & Obligations",
    typicalSource: "Often spreadsheets / ad hoc",
    commonPosition: "ZoikoSuite",
    positionColor: "green",
    whatZoikoSuiteAdds: "Owner, due date, evidence, exception and escalation",
  },
  {
    object: "Purchase request and approval",
    relatedModule: "Procurement & Commercial Operations",
    typicalSource: "Procurement / sourcing",
    commonPosition: "Shared",
    positionColor: "gray",
    whatZoikoSuiteAdds: "Authority evaluation, supplier compliance evidence, AP adjacency",
  },
  {
    object: "Policy, authority, approval, evidence manifest, decision record",
    relatedModule: "All ten modules",
    typicalSource: "—",
    commonPosition: "ZoikoSuite",
    positionColor: "green",
    whatZoikoSuiteAdds: "These are the objects the platform built anew across every module",
  },
];

export default function AuthoritativeSystemDecisionSection() {
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
                COEXISTENCE AND SOURCE OWNERSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Which system stays
              <br />
              authoritative is an
              <br />
              implementation decision
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-5">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Module scope does not imply that ZoikoSuite becomes the system of record. Every object below carries an ownership position that must be agreed during implementation rather than inferred from the taxonomy.
            </p>
          </div>
        </div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full overflow-x-auto rounded-xl border border-[#e2e8f0] shadow-xs bg-white"
        >
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[10.5px] font-mono tracking-wider text-[#64748b] uppercase">
                <th className="py-3.5 px-5 font-semibold">OBJECT</th>
                <th className="py-3.5 px-5 font-semibold">RELATED MODULE</th>
                <th className="py-3.5 px-5 font-semibold">TYPICAL EXTERNAL SOURCE</th>
                <th className="py-3.5 px-5 font-semibold">COMMON POSITION</th>
                <th className="py-3.5 px-5 font-semibold">WHAT ZOIKOSUITE ADDS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#edf2f7] text-[12.5px] text-[#334155]">
              {tableData.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#f8fafc]/80 transition-colors"
                >
                  {/* OBJECT */}
                  <td className="py-4 px-5 font-medium text-[#08222F]">
                    {row.object}
                  </td>

                  {/* RELATED MODULE */}
                  <td className="py-4 px-5 text-[#475569]">
                    {row.relatedModule}
                  </td>

                  {/* TYPICAL EXTERNAL SOURCE */}
                  <td className="py-4 px-5 text-[#64748b]">
                    {row.typicalSource}
                  </td>

                  {/* COMMON POSITION BADGE */}
                  <td className="py-4 px-5 whitespace-nowrap">
                    {row.positionColor === "blue" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f0f7ff] border border-[#d0e5fc] text-[10.5px] font-mono font-medium text-[#1e40af]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                        {row.commonPosition}
                      </span>
                    )}
                    {row.positionColor === "amber" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#fffbeb] border border-[#fde68a] text-[10.5px] font-mono font-medium text-[#92400e]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                        {row.commonPosition}
                      </span>
                    )}
                    {row.positionColor === "green" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f0fdf4] border border-[#bbf7d0] text-[10.5px] font-mono font-medium text-[#166534]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                        {row.commonPosition}
                      </span>
                    )}
                    {row.positionColor === "gray" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f1f5f9] border border-[#cbd5e1] text-[10.5px] font-mono font-medium text-[#475569]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#64748b]" />
                        {row.commonPosition}
                      </span>
                    )}
                  </td>

                  {/* WHAT ZOIKOSUITE ADDS */}
                  <td className="py-4 px-5 text-[#475569] leading-relaxed">
                    {row.whatZoikoSuiteAdds}
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
