"use client";

import React from "react";
import { motion } from "framer-motion";

interface SensitivityRow {
  badge: string;
  badgeColor: string;
  description: string;
}

const sensitivityRows: SensitivityRow[] = [
  {
    badge: "PUBLIC",
    badgeColor: "border-slate-300 bg-slate-50 text-slate-700",
    description: "Marketing, open documentation, public registry extracts.",
  },
  {
    badge: "STANDARD",
    badgeColor: "border-slate-300 bg-slate-50 text-slate-700",
    description: "Internal policy benchmarks.",
  },
  {
    badge: "RESTRICTED",
    badgeColor: "border-amber-300 bg-amber-50 text-amber-800",
    description: "Customer contract terms, commercial governance terms.",
  },
  {
    badge: "HIGHLY SENSITIVE",
    badgeColor: "border-rose-300 bg-rose-50 text-rose-800",
    description: "Material structural decisions, active review records.",
  },
  {
    badge: "SUPERVISED",
    badgeColor: "border-purple-300 bg-purple-50 text-purple-800",
    description: "Processing grounds, policy deviations.",
  },
];

export default function ClassificationSupportsPolicySection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                INTERNAL CLASSIFICATION AND PRIVILEGE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Classification supports your policy &mdash; it does not determine privilege
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end text-left"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Two separate schemas govern evidence: what may be published to a prospect, and how customer data is handled in product. Neither one makes a legal determination.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Content Grid - DESKTOP ONLY */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Internal Policy Classification & Boundary Callout */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-4 text-left"
          >
            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-2">
                INTERNAL POLICY CLASSIFICATION
              </span>
              <p className="text-xs sm:text-[12.5px] text-slate-700 leading-relaxed font-normal mb-5">
                Two internal schemas keep boundaries clear: public vs prospect access; and handling in production vs customer data. Neither determines legal privilege; that is a human legal judgment recorded separately.
              </p>
            </div>

            {/* Amber Boundary Callout Box */}
            <div className="rounded-xl border border-[#ECD9BA] bg-[#FAF3E7] p-5 text-left shadow-sm">
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#c5a059] uppercase block mb-1.5">
                BOUNDARY
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                Classification supports institutional transparency, full audit search compliance and clear customer communication context; it does not constitute and cannot by itself establish or ensure privilege preservation.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Evidence Sensitivity Schema + Audit Record */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-3 text-left"
          >
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
              EVIDENCE SENSITIVITY SCHEMA
            </span>

            {/* 5 Rows */}
            <div className="flex flex-col space-y-2">
              {sensitivityRows.map((row, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/90 bg-white p-3 sm:px-4 sm:py-2.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 shadow-sm"
                >
                  <div className="sm:w-36 shrink-0">
                    <span
                      className={`px-2.5 py-1 rounded text-[9.5px] font-mono font-bold uppercase tracking-wider border inline-block ${row.badgeColor}`}
                    >
                      {row.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">
                    {row.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[10.5px] font-mono text-slate-400 pt-1">
              * Every publication state is governed by publication registry and verified in write-once logs.
            </p>

            {/* Audit Record Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-1.5 shadow-sm mt-2">
              <span className="text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
                AUDIT RECORD
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                A cryptographically-verifiable immutable log stores: the classification applied, the user and role applying it, the reason recorded, the document hash and the policy version.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile View: Dedicated Multi-Block Privilege & Publication Schema */}
        <div className="block lg:hidden w-full flex flex-col gap-5 text-left">
          {/* Block 1: Public Evidence Publication State */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase">
              PUBLIC EVIDENCE PUBLICATION STATE
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider border border-emerald-300 bg-emerald-50 text-emerald-800">
                PUBLIC
              </span>
              <span className="px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider border border-amber-300 bg-amber-50 text-amber-800">
                EXTERN &amp; REPS
              </span>
              <span className="px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider border border-sky-300 bg-sky-50 text-sky-800">
                RESTRICTED SELECT
              </span>
              <span className="px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider border border-rose-300 bg-rose-50 text-rose-800">
                NON-PERMITTING
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
              Classification describes whether and how evidence can be shared externally. It does not replace the organization&apos;s privacy policy.
            </p>
          </div>

          {/* Block 2: In-Product Data Classification & Amber Privilege Box */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase">
              IN-PRODUCT DATA CLASSIFICATION
            </span>
            <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
              Your internal approval-led classification scheme governs access to product actions and handling. It is a corporate control from the publication states above, and ZoikoSuite does not impose your schema choice.
            </p>

            <div className="rounded-xl border border-[#ECD9BA] bg-[#FAF3E7] p-4 text-left shadow-sm">
              <span className="text-[9.5px] font-mono font-bold tracking-wider text-[#c5a059] uppercase block mb-1">
                PRIVILEGE
              </span>
              <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
                Classification supports customer handling policy; it does not determine legal privilege. Marking a record does not create, preserve or waive privilege, and no interface state should be read as a privilege determination.
              </p>
            </div>
          </div>

          {/* Block 3: Evidence Integrity Status */}
          <div className="flex flex-col gap-2">
            <span className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase">
              EVIDENCE INTEGRITY STATUS
            </span>
            <div className="flex flex-col space-y-1.5">
              {[
                {
                  badge: "VERIFIED",
                  color: "border-l-4 border-emerald-500 bg-white text-emerald-800",
                  badgeBg: "border-emerald-300 bg-emerald-50 text-emerald-800",
                  desc: "Integrity checks completed against the expressed definition",
                },
                {
                  badge: "PENDING",
                  color: "border-l-4 border-amber-500 bg-white text-amber-800",
                  badgeBg: "border-amber-300 bg-amber-50 text-amber-800",
                  desc: "Check is not yet complete",
                },
                {
                  badge: "RESTRICTED",
                  color: "border-l-4 border-sky-500 bg-white text-sky-800",
                  badgeBg: "border-sky-300 bg-sky-50 text-sky-800",
                  desc: "Exists: content not accessible in your permission",
                },
                {
                  badge: "PARTIAL / UNSUPPORTED",
                  color: "border-l-4 border-slate-400 bg-white text-slate-700",
                  badgeBg: "border-slate-300 bg-slate-100 text-slate-700",
                  desc: "Underlying source status cannot currently be resolved",
                },
                {
                  badge: "UNTRACKED",
                  color: "border-l-4 border-amber-600 bg-white text-amber-800",
                  badgeBg: "border-amber-400 bg-amber-50 text-amber-800",
                  desc: "No known approval workflow exists",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border border-slate-200 p-3 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 shadow-xs ${item.color}`}
                >
                  <span
                    className={`px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider border w-fit ${item.badgeBg}`}
                  >
                    {item.badge}
                  </span>
                  <p className="text-[11px] text-slate-700 leading-snug font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[10px] font-mono text-slate-400 pt-0.5">
              These integrity states differ from accuracy or legal status; they report only what the platform knows about the file state.
            </p>
          </div>

          {/* Block 4: Export Checks Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <span className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
              EXPORT CHECKS
            </span>
            <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
              A compiled export records its permitted source, the included fields, the requester, the stated purpose and a hash of the record. No live export is available for a public page.
            </p>
          </div>

          {/* Block 5: Red Exclusion Box */}
          <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-4 text-left">
            <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider border border-rose-300 bg-white text-rose-800 inline-block mb-2.5">
              NOT IN A FIELD
            </span>
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {["Legally admissible", "Privileged", "Certified", "Immutable", "Auditor-accepted"].map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded text-[9.5px] font-medium line-through text-rose-400 bg-white/80 border border-rose-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-rose-900 leading-relaxed font-normal">
              <strong className="font-semibold text-rose-950">Excluded method:</strong> Evidence is attributable and traceable, with an integrity history drawn from two live approved data stores. Admissibility and privilege are legal determinations that no software state can make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
