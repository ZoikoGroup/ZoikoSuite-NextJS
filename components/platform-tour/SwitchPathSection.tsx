"use client";

import React from "react";
import { motion } from "framer-motion";

interface PathComparisonRow {
  path: string;
  stops: string;
  focus: string;
  audience: string;
}

const tableRows: PathComparisonRow[] = [
  {
    path: "Full platform tour",
    stops: "12 stops in order",
    focus: "All twelve stops; all eight layers evaluated",
    audience: "Everyone/any",
  },
  {
    path: "Quick executive proof",
    stops: "1, 3, 4, 7, 12",
    focus: "High-value proof in fewer scenes",
    audience: "Executive/direct",
  },
  {
    path: "Executive overview",
    stops: "1, 3, 5, 7, 11",
    focus: "Executive governance, context, assurance",
    audience: "Executive/direct",
  },
  {
    path: "Finance & controls",
    stops: "1, 3, 5, 7, 9, 11",
    focus: "Controls, authority, multi-entity scope, evidence",
    audience: "Finance/control",
  },
  {
    path: "Legal & compliance",
    stops: "2, 4, 6, 7, 8",
    focus: "Policy, jurisdiction, authority, evidence, AI",
    audience: "Trust & compliance",
  },
  {
    path: "Architecture & deployment",
    stops: "2, 10, 12",
    focus: "Systems, events, deployment, Shadow Mode",
    audience: "Trust & architecture",
  },
];

export default function SwitchPathSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                FLEXIBLE EVALUATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.15]">
              Switch path without losing
              <br />
              progress
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Completed stops stay marked. Changing a path just filter which
              short stops are emphasised, not what you already saw here.
            </p>
          </div>
        </div>

        {/* Responsive Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full overflow-x-auto rounded-xl border border-[#d6e2e9] shadow-xs"
        >
          <table className="w-full min-w-[720px] text-left border-collapse">
            <thead>
              <tr className="bg-[#edf3f7] border-b border-[#d6e2e9]">
                <th className="py-3.5 px-5 text-[11px] font-mono font-semibold uppercase tracking-[0.14em] text-[#4d6a7d]">
                  PATH
                </th>
                <th className="py-3.5 px-5 text-[11px] font-mono font-semibold uppercase tracking-[0.14em] text-[#4d6a7d]">
                  STOPS
                </th>
                <th className="py-3.5 px-5 text-[11px] font-mono font-semibold uppercase tracking-[0.14em] text-[#4d6a7d]">
                  FOCUS
                </th>
                <th className="py-3.5 px-5 text-[11px] font-mono font-semibold uppercase tracking-[0.14em] text-[#4d6a7d]">
                  AUDIENCE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e4edf2] bg-white text-[13px]">
              {tableRows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#f8fbfd] transition-colors"
                >
                  <td className="py-4 px-5 font-semibold text-[#08222F]">
                    {row.path}
                  </td>
                  <td className="py-4 px-5 font-mono text-[#526a79] text-xs">
                    {row.stops}
                  </td>
                  <td className="py-4 px-5 text-[#566573]">
                    {row.focus}
                  </td>
                  <td className="py-4 px-5 font-mono text-xs text-[#526a79]">
                    {row.audience}
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
