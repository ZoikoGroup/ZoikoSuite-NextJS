"use client";

import React from "react";
import { motion } from "framer-motion";
import MobileFourAudiencesView from "./MobileFourAudiencesView";

interface AudienceRow {
  audience: string;
  access: string;
  boundary: string;
}

const audiences: AudienceRow[] = [
  {
    audience: "Audit Committee",
    access: "Read-only access to closure milestones, material disputes, governance exception logs, and statutory audit trail evidence pack.",
    boundary: "No operational access to initiate, execute or modify entries.",
  },
  {
    audience: "Board of Directors",
    access: "High-level consolidated dashboard view with risk metrics and quarterly sign-off summaries.",
    boundary: "Zero operational editing capability; notification alerts only.",
  },
  {
    audience: "Internal / External Auditor",
    access: "Read-only access to immutable audit log, evidence links, and cryptographic proof hashes.",
    boundary: "Strict isolation from operational systems; read-only console with hash verification.",
  },
  {
    audience: "CFO & Executive Staff",
    access: "Operational execution control within defined authority limit and segregation matrix.",
    boundary: "Full insight & oversight; restricted by dual-control segregation rules.",
  },
];

export default function FourAudiencesFourBoundariesSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
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
                AUDIENCE PROFILES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Four audiences, four different boundaries
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
              Continuous availability is not public accessibility, and an oversight view is not a substitute for operational workflow.
            </p>
          </motion.div>
        </div>

        {/* Desktop View: Table Container (strictly hidden on mobile, visible on lg) */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/40 overflow-hidden"
          >
            {/* Desktop Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#F8FAFC] border-b border-slate-200 text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
              <div className="col-span-3">Audience</div>
              <div className="col-span-6">Default / Privilege Access</div>
              <div className="col-span-3">Boundary</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100">
              {audiences.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 gap-4 p-5 sm:p-6 hover:bg-slate-50/70 transition-colors"
                >
                  <div className="col-span-3">
                    <h3 className="text-[15px] font-bold text-[#08222F]">
                      {row.audience}
                    </h3>
                  </div>

                  <div className="col-span-6">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {row.access}
                    </p>
                  </div>

                  <div className="col-span-3">
                    <div className="text-xs font-mono text-slate-500 leading-relaxed">
                      {row.boundary}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile View: Dedicated Mobile Table + Handling Pack (strictly visible on mobile, hidden on lg desktop) */}
        <div className="block lg:hidden w-full">
          <MobileFourAudiencesView />
        </div>
      </div>
    </section>
  );
}
