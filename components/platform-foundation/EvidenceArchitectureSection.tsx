"use client";

import React from "react";
import { motion } from "framer-motion";

interface ContextCriterion {
  label: string;
  detail: string;
}

const contextCriteria: ContextCriterion[] = [
  {
    label: "Source",
    detail: "Originating authority or system of record",
  },
  {
    label: "Actor",
    detail: "Direct identity or cryptographic delegate",
  },
  {
    label: "Time & Action Reference",
    detail: "Immutable timestamp and transaction ID",
  },
  {
    label: "Authority & Constraints",
    detail: "Policy envelope under which action was permitted",
  },
  {
    label: "Veracity",
    detail: "Integrity check and tamper-evident hash validation",
  },
  {
    label: "Context & Exposure",
    detail: "Operational context and classification tier",
  },
  {
    label: "Preservation & State",
    detail: "Retention schedule and current ledger state",
  },
];

interface PublicationClass {
  name: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
}

const publicationClasses: PublicationClass[] = [
  {
    name: "PUBLIC",
    badgeBg: "bg-emerald-50",
    badgeBorder: "border-emerald-200",
    badgeText: "text-emerald-700",
  },
  {
    name: "AUDITOR",
    badgeBg: "bg-blue-50",
    badgeBorder: "border-blue-200",
    badgeText: "text-blue-700",
  },
  {
    name: "INTERNAL ONLY",
    badgeBg: "bg-slate-100",
    badgeBorder: "border-slate-200",
    badgeText: "text-slate-700",
  },
  {
    name: "RESTRICTED",
    badgeBg: "bg-rose-50",
    badgeBorder: "border-rose-200",
    badgeText: "text-rose-700",
  },
];

interface EvidenceStatusCard {
  title: string;
  statusText: string;
  statusColor: string;
  statusBg: string;
  detail: string;
}

const statusCards: EvidenceStatusCard[] = [
  {
    title: "State log",
    statusText: "Active",
    statusColor: "text-emerald-600",
    statusBg: "bg-emerald-500",
    detail: "Continuous append-only record",
  },
  {
    title: "Revisions",
    statusText: "Recorded",
    statusColor: "text-amber-600",
    statusBg: "bg-amber-500",
    detail: "Explicit non-destructive deltas",
  },
  {
    title: "Superseded",
    statusText: "Explicit line",
    statusColor: "text-slate-500",
    statusBg: "bg-slate-400",
    detail: "Prior states retained for lineage",
  },
  {
    title: "Access restriction",
    statusText: "Enforced at query time",
    statusColor: "text-slate-600",
    statusBg: "",
    detail: "Publication class policy applies",
  },
  {
    title: "Tenant separation",
    statusText: "Hard cryptosegregated",
    statusColor: "text-slate-600",
    statusBg: "",
    detail: "Keys partitioned per tenant realm",
  },
  {
    title: "Crypto verification",
    statusText: "Independent audit line",
    statusColor: "text-slate-600",
    statusBg: "",
    detail: "Zero-knowledge and Merkle proofs",
  },
];

export default function EvidenceArchitectureSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-slate-200">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#c5a059]">
                EVIDENCE ARCHITECTURE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#0f172a] leading-tight">
              Attributable and reviewable — and what that does not mean
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
              Evidence links a source to an object, an actor, a time and a version. Publication class governs who may see it.
            </p>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP-ONLY VIEW - PRESERVED 100% UNTOUCHED                 */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {/* Criteria List */}
            <div className="flex flex-col">
              <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-500 uppercase mb-4">
                FIVE CONTEXT CRITERIA
              </span>
              <div className="flex flex-col space-y-3">
                {contextCriteria.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug">
                    <span className="w-2 h-2 rounded-full bg-[#f59e0b] shrink-0 mt-1" />
                    <div className="text-slate-700">
                      <span className="font-semibold text-slate-900">{item.label}:</span>{" "}
                      <span className="text-slate-600">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publication Classes */}
            <div className="flex flex-col pt-2 border-t border-slate-100">
              <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-500 uppercase mb-3">
                FOUR PUBLICATION CLASSES
              </span>
              <div className="flex flex-wrap gap-2 mb-3">
                {publicationClasses.map((pub, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider border ${pub.badgeBg} ${pub.badgeBorder} ${pub.badgeText}`}
                  >
                    {pub.name}
                  </span>
                ))}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                Evidence classified by publication class determines visibility and delivery scopes. External auditors receive explicit, gated scopes.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Status Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statusCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-xl border border-slate-200/90 bg-white p-4 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="text-xs font-semibold text-slate-700 mb-2">
                    {card.title}
                  </div>
                  <div className="flex items-center gap-1.5 mb-3">
                    {card.statusBg && (
                      <span className={`w-1.5 h-1.5 rounded-full ${card.statusBg}`} />
                    )}
                    <span className={`text-[11px] font-medium ${card.statusColor}`}>
                      {card.statusText}
                    </span>
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 leading-relaxed border-t border-slate-100 pt-2.5">
                  {card.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY EXTENSIONS (STRICTLY HIDDEN ON DESKTOP VIA lg:hidden) */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Mobile Evidence Criteria List */}
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase mb-3">
              THE EVIDENCE CHAIN
            </span>
            <div className="flex flex-col space-y-2.5">
              {contextCriteria.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs leading-snug">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0 mt-1" />
                  <div className="text-slate-700">
                    <span className="font-semibold text-slate-900">{item.label}:</span>{" "}
                    <span className="text-slate-600">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publication Classes Pills */}
          <div className="flex flex-col space-y-2">
            <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
              FOUR PUBLICATION CLASSES
            </span>
            <div className="flex flex-wrap gap-1.5">
              {publicationClasses.map((pub, idx) => (
                <span
                  key={idx}
                  className={`px-2.5 py-1 rounded text-[9.5px] font-mono font-bold tracking-wider border ${pub.badgeBg} ${pub.badgeBorder} ${pub.badgeText}`}
                >
                  {pub.name}
                </span>
              ))}
            </div>
            <p className="text-[10.5px] text-slate-500 leading-relaxed pt-1">
              Publication class governs who may see it: Public, Auditor, Internal only or Restricted scope.
            </p>
          </div>

          {/* Red Alert Callout: What is Claimed vs Not Claimed */}
          <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-4 flex flex-col space-y-2.5">
            <span className="text-[10px] font-mono font-bold tracking-wider text-rose-800 uppercase">
              IS TRANSACTION-BOUND EVIDENCE SAME AS &quot;PROOF&quot;?
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Immutable",
                "Legally admissible",
                "Regulator-accepted",
                "Quorum-verified",
                "Disclosed to requestor",
                "Audited",
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[9.5px] font-mono font-medium bg-white text-rose-900 border border-rose-200 shadow-2xs"
                >
                  {pill}
                </span>
              ))}
            </div>
            <p className="text-xs text-rose-900/90 leading-relaxed pt-1">
              <strong className="font-bold text-rose-950">What is claimed:</strong> Evidence is attributable to a source, an actor and a time, and is reviewable within permission. Each of the notions above is an explicit legal or technical property that must separately be true, validated, and never is assumed true.
            </p>
          </div>

          {/* 6 Status Cards on Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {statusCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-white p-3.5 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="text-xs font-semibold text-slate-800 mb-1.5">
                    {card.title}
                  </div>
                  <div className="flex items-center gap-1.5 mb-2">
                    {card.statusBg && (
                      <span className={`w-1.5 h-1.5 rounded-full ${card.statusBg}`} />
                    )}
                    <span className={`text-[10.5px] font-medium ${card.statusColor}`}>
                      {card.statusText}
                    </span>
                  </div>
                </div>
                <div className="text-[10.5px] text-slate-500 leading-relaxed border-t border-slate-100 pt-2">
                  {card.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p className="text-[10px] font-mono text-slate-400 leading-snug">
            A audit log retains delivery and verification parameters — timestamps, ledger proof, actor context, crypto signatures, publication class boundaries, and retention lifecycle rules. Preserved data can never be altered.
          </p>
        </div>
      </div>
    </section>
  );
}
