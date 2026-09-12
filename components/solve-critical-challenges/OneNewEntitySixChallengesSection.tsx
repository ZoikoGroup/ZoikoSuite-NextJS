"use client";

import React from "react";
import { motion } from "framer-motion";
import MobileOneNewEntityView from "./MobileOneNewEntityView";

interface StepCard {
  step: string;
  name: string;
  scope: string;
  body: string;
  badge?: { text: string; color: string };
  isAttention?: boolean;
}

const steps: StepCard[] = [
  {
    step: "01",
    name: "New entity context",
    scope: "Entity · Jurisdiction",
    body: "Entity and jurisdiction pre-set defined. Authority delegations and registered corporate records are verified, authenticated, and signed by accountable legal counsel.",
    badge: { text: "NO APPROVED SOURCE", color: "border-rose-300 bg-rose-50 text-rose-700" },
  },
  {
    step: "02",
    name: "Payroll readiness",
    scope: "Payroll · Provider · Certification",
    body: "Payroll setup baseline established with provider integration. Reconciliation and calculation models prepared for local statutory rules.",
    badge: { text: "IN REVIEW", color: "border-amber-300 bg-amber-50 text-amber-800" },
  },
  {
    step: "03",
    name: "Compliance obligations",
    scope: "Registry · Scope · Authority",
    body: "Statutory calendar populated from live source data. Mandatory filing frequencies and filing dates identified. Missing authoritative source flags an applicability warning.",
    badge: { text: "BLOCKED: STALE SOURCE", color: "border-rose-300 bg-rose-50 text-rose-700" },
  },
  {
    step: "04",
    name: "Workforce policy",
    scope: "Employee · Independent",
    body: "Cross-border employment policies verified against local labor legislation. Worker classifications and agreements stored with effective dates.",
  },
  {
    step: "05",
    name: "Authority and segregation",
    scope: "Dual admin · SOD checks",
    body: "Required reviews, approvals, and execution boundaries mapped. Separation of duties validated against policy delegations.",
    badge: { text: "SOD EXCEPTION DETECTED", color: "border-rose-300 bg-rose-50 text-rose-700" },
  },
  {
    step: "06",
    name: "Regulatory reporting",
    scope: "Statutory filing · Submission",
    body: "Local regulatory filing formats and calendar generated. Verification links retained for audit inspection. No filing support or legal conclusion is implied.",
  },
  {
    step: "07",
    name: "Human decision",
    scope: "Accountable review · Decision",
    body: "Accountable human reviews all upstream findings, exceptions, and unresolved warnings. Explicit authorization required before proceeding.",
    isAttention: true,
  },
  {
    step: "08",
    name: "Evidence and baseline",
    scope: "Audit · Sanitization",
    body: "Execution context, decision actor, time stamp, and policy rationale recorded into immutable ledger for permanent audit readiness.",
  },
];

export default function OneNewEntitySixChallengesSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#14425a]">
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
                CROSS-CHALLENGE SCENARIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              One new entity, six challenges, eight steps
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-[#9ba4b5] leading-relaxed font-normal">
              This is the category proof. A single payroll run in a new jurisdiction touches payroll, compliance, workforce, authority, reporting and audit readiness at once.
            </p>
          </motion.div>
        </div>

        {/* Desktop View: 8 Stacked Cards (Strictly lg:flex) */}
        <div className="hidden lg:flex flex-col space-y-3">
          {steps.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className={`rounded-xl border p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                st.isAttention
                  ? "bg-white text-slate-900 border-[#c5a059]"
                  : "bg-white text-slate-900 border-slate-200"
              }`}
            >
              {/* Left identifier & scope */}
              <div className="flex items-center gap-4 sm:w-64 shrink-0">
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                    st.isAttention
                      ? "bg-[#D0AA55] text-[#08222F]"
                      : "bg-[#08222F] text-white"
                  }`}
                >
                  {st.step}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {st.name}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    {st.scope}
                  </span>
                </div>
              </div>

              {/* Middle Description */}
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                {st.body}
              </p>

              {/* Right Badge (if present) */}
              {st.badge && (
                <div className="shrink-0 flex justify-end">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded text-[9.5px] font-mono font-bold border tracking-wider uppercase ${st.badge.color}`}
                  >
                    {st.badge.text}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Dedicated Mobile 8-step cards with warning banner and note */}
        <div className="block lg:hidden">
          <MobileOneNewEntityView />
        </div>
      </div>
    </section>
  );
}
