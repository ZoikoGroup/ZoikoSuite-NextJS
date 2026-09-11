"use client";

import React from "react";
import { motion } from "framer-motion";

interface AccountableRole {
  role: string;
  description: string;
  callout?: string;
}

const executiveRoles: AccountableRole[] = [
  {
    role: "CFO",
    description: "Balance sheet integrity, approval authority, backward payment context, no alter-native routes.",
  },
  {
    role: "General Counsel",
    description: "Contract obligations, legal review tracking, privilege boundaries, jurisdictional exposure.",
  },
  {
    role: "CHRO",
    description: "Workforce data borders, purpose-limited access, payroll release governance, no surveillance.",
  },
  {
    role: "CIO",
    description: "System ownership, integration health, coexistence with existing systems, deployment scope.",
  },
  {
    role: "COO",
    description: "Cross-functional throughput, bottlenecks, owner accountability, exception frequency.",
  },
];

const controlRoles: AccountableRole[] = [
  {
    role: "Controller",
    description: "Period-end and journal authority, reconciliation state, and evidence completeness.",
  },
  {
    role: "Tax Leader",
    description: "Obligation calendar, coverage status with source tables, and professional review routing.",
  },
  {
    role: "Compliance Leader",
    description: "Control outcomes, exception ownership, and auditor and regulator-ready evidence.",
  },
];

const oversightRoles: AccountableRole[] = [
  {
    role: "Audit Committee",
    description: "Material exceptions, control provenance gaps, and traceability without operational access.",
    callout: "Oversight roles have no operational approval authority by default; approval and execute controls are not present unless a protocol state separately authorizes them.",
  },
  {
    role: "Board of Directors",
    description: "Strategy and risk context, assurance posture, and entity-level exception concentration.",
    callout: "Oversight roles have no operational approval authority by default; approval and execute controls are not present unless a protocol state separately authorizes them.",
  },
];

export default function ThreeGroupsWhatAccountableForSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase">
                LEADERSHIP RESPONSIBILITY GROUPS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Three groups, by what you are accountable for
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
              No role is preselected. Nothing on this page infers your function from tracking or profile data — you choose where to start.
            </p>
          </motion.div>
        </div>

        {/* Group 1: Executive Operators */}
        <div className="flex flex-col space-y-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold tracking-wider text-amber-700 uppercase">
              GROUP 01
            </span>
            <span className="text-sm font-bold text-slate-800">Executive operators</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {executiveRoles.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-xl border border-slate-200/90 bg-white p-4 flex flex-col justify-between shadow-2xs hover:border-[#D0AA55]/60 transition-colors"
              >
                <div>
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#08222F] mb-1.5">
                    {item.role}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>
                <span className="text-[9.5px] font-mono font-semibold text-slate-400 pt-2 border-t border-slate-100 block hover:text-[#0F476A] transition-colors cursor-pointer">
                  VIEW TYPICAL APPROVAL →
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Group 2: Control & Assurance Leaders */}
        <div className="flex flex-col space-y-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold tracking-wider text-amber-700 uppercase">
              GROUP 02
            </span>
            <span className="text-sm font-bold text-slate-800">Control & assurance leaders</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {controlRoles.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-xl border border-slate-200/90 bg-white p-4 flex flex-col justify-between shadow-2xs hover:border-[#D0AA55]/60 transition-colors"
              >
                <div>
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#08222F] mb-1.5">
                    {item.role}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>
                <span className="text-[9.5px] font-mono font-semibold text-slate-400 pt-2 border-t border-slate-100 block hover:text-[#0F476A] transition-colors cursor-pointer">
                  VIEW TYPICAL APPROVAL →
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Group 3: Oversight */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold tracking-wider text-amber-700 uppercase">
              GROUP 03
            </span>
            <span className="text-sm font-bold text-slate-800">Oversight</span>
            <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-bold text-amber-400 bg-[#072437] border border-[#1c5577]">
              READ ONLY BY DEFAULT
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {oversightRoles.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 flex flex-col justify-between shadow-2xs hover:border-[#D0AA55]/60 transition-colors"
              >
                <div>
                  <h3 className="text-xs sm:text-[14px] font-bold text-[#08222F] mb-1.5">
                    {item.role}
                  </h3>
                  <p className="text-[11.5px] text-slate-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  {item.callout && (
                    <div className="rounded-lg border border-rose-200 bg-rose-50/60 p-2.5 mb-3 text-[10.5px] text-rose-800 leading-relaxed">
                      {item.callout}
                    </div>
                  )}
                </div>
                <span className="text-[9.5px] font-mono font-semibold text-slate-400 pt-2 border-t border-slate-100 block hover:text-[#0F476A] transition-colors cursor-pointer">
                  VIEW TYPICAL APPROVAL →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
