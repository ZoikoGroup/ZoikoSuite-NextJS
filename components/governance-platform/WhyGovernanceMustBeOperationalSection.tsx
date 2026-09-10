"use client";

import React from "react";
import { motion } from "framer-motion";

interface ComparisonRow {
  dimension: string;
  asDocumentation: string;
  asOperation: string;
}

const comparisonRows: ComparisonRow[] = [
  {
    dimension: "Where the policy lives",
    asDocumentation: "A repository, reviewed periodically",
    asOperation: "Evaluated against the specific action, with its version recorded",
  },
  {
    dimension: "When it applies",
    asDocumentation: "When someone remembers to check",
    asOperation: "At the moment the action is proposed",
  },
  {
    dimension: "Who may decide",
    asDocumentation: "Assumed from job title or org chart",
    asOperation: "Evaluated against delegated authority, scope, limit and effective dates",
  },
  {
    dimension: "Conflicting duties",
    asDocumentation: "Detected during a later review, if at all",
    asOperation: "Evaluated as a segregation rule before the decision is offered",
  },
  {
    dimension: "Evidence",
    asDocumentation: "Assembled retrospectively for an audit",
    asOperation: "Required, tracked and reported as counts and states while work proceeds",
  },
  {
    dimension: "Exceptions",
    asDocumentation: "An email thread or a spreadsheet row",
    asOperation: "A record with owner, compensating control, approval, effective period and expiry",
  },
  {
    dimension: "Jurisdiction",
    asDocumentation: "A country list",
    asOperation: "Coverage state plus source, effective date and review requirement at point of use",
  },
  {
    dimension: "Proof afterwards",
    asDocumentation: "Reconstructed from systems and memory",
    asOperation: "A decision record retaining the sources and versions used at the time",
  },
];

export default function WhyGovernanceMustBeOperationalSection() {
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
                WHY GOVERNANCE MUST BE OPERATIONAL
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              A policy nobody evaluates at
              <br />
              the moment of decision is
              <br />
              documentation
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              The difference is not whether the policy exists. It is whether the policy was evaluated against this action, by this authority, with this evidence, at this moment — and whether that is provable afterwards.
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
              <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[10.5px] font-mono tracking-wider uppercase">
                <th className="py-3.5 px-6 font-semibold text-[#64748b] w-[220px]">
                  DIMENSION
                </th>
                <th className="py-3.5 px-6 font-semibold text-[#64748b]">
                  GOVERNANCE AS DOCUMENTATION
                </th>
                <th className="py-3.5 px-6 font-semibold text-[#0f476a] bg-[#f0f7ff]/60">
                  GOVERNANCE AS OPERATION
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#edf2f7] text-[12.5px]">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#f8fafc]/80 transition-colors"
                >
                  {/* DIMENSION */}
                  <td className="py-4 px-6 font-semibold text-[#08222F] align-top">
                    {row.dimension}
                  </td>

                  {/* GOVERNANCE AS DOCUMENTATION */}
                  <td className="py-4 px-6 text-[#64748b] leading-relaxed align-top">
                    {row.asDocumentation}
                  </td>

                  {/* GOVERNANCE AS OPERATION */}
                  <td className="py-4 px-6 text-[#1e293b] leading-relaxed align-top bg-[#f8fbfe]/40 font-medium">
                    {row.asOperation}
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
