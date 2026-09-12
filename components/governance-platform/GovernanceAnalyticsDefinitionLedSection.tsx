"use client";

import React from "react";
import { motion } from "framer-motion";

interface MetricCardItem {
  title: string;
  formula: string;
  unit: string;
  denominator: string;
  source: string;
  scope: string;
  isDarkCard?: boolean;
}

const mobileMetrics: MetricCardItem[] = [
  {
    title: "Approval aging",
    formula: "count of open approvals grouped by age band",
    unit: "Hours",
    denominator: "Open approvals in scope",
    source: "Workflow service",
    scope: "Threshold visits",
  },
  {
    title: "Policy exceptions",
    formula: "exceptions agreed / policy evaluations in period",
    unit: "Rate",
    denominator: "Evaluations in period",
    source: "Decision log",
    scope: "Version-specific",
  },
  {
    title: "Authority failures",
    formula: "actions blocked for insufficient authority / actions requiring authorization",
    unit: "Rate",
    denominator: "Actions requiring authorization",
    source: "Authority service",
    scope: "Compliance",
  },
  {
    title: "Segregation conflicts",
    formula: "count of SoD rule violations detected before execution",
    unit: "Count",
    denominator: "Not applicable — a count",
    source: "SoD tracker",
    scope: "Per rule or user",
  },
  {
    title: "Evidence completeness",
    formula: "items with all required evidence / items requiring evidence",
    unit: "Rate",
    denominator: "Items requiring evidence",
    source: "Restricted counts (unverified)",
    scope: "Evidence service",
  },
  {
    title: "Overdue obligations",
    formula: "obligations past due date / obligations due in period",
    unit: "Rate",
    denominator: "Obligations due in period",
    source: "Obligation register",
    scope: "Entity-scoped",
  },
  {
    title: "Recurring exceptions",
    formula: "identities repeated with >1 exception in period",
    unit: "Categories",
    denominator: "Action identities with exceptions",
    source: "Exception log",
    scope: "Auditing findings",
  },
  {
    title: "No global governance score",
    formula: "not published",
    unit: "",
    denominator: "",
    source: "",
    scope: "",
    isDarkCard: true,
  },
];

const metricEffectChips = [
  "No data",
  "Partial data",
  "Stale data",
  "Conflicting data",
  "Restricted data",
  "Definition changed",
  "Export provisions",
  "Export error",
];

interface DesktopMetric {
  title: string;
  formula: string;
  where: string;
  source: string;
  caveat: string;
  isDarkCard?: boolean;
}

const desktopMetricCards: DesktopMetric[] = [
  {
    title: "Review Aging",
    formula: "Current timestamp minus state entry timestamp",
    where: "Command Center, SLA monitors",
    source: "Audit event timestamps",
    caveat: "Excludes weekends if configured",
  },
  {
    title: "Exception Rate",
    formula: "Dispensations approved / total decisions evaluated",
    where: "Governance Analytics, audit exports",
    source: "Decision registry records",
    caveat: "Grouped by policy version",
  },
  {
    title: "Authority Overrides",
    formula: "Count of emergency or tier-escalated decisions",
    where: "CFO / General Counsel console",
    source: "Authority matrix event logs",
    caveat: "Requires dual justification",
  },
  {
    title: "Segregation Conflicts",
    formula: "Attempted self-approvals blocked by policy",
    where: "Internal Audit, SOX compliance dashboard",
    source: "Segregation gate logs",
    caveat: "Unresolved blocks escalate after 24h",
  },
  {
    title: "Connector Degraded Time",
    formula: "Minutes since last verified synchronisation status",
    where: "Source health register",
    source: "Integration heartbeat monitors",
    caveat: "Cached state used with stale warning",
  },
  {
    title: "Evidence Completeness",
    formula: "Attached mandated documents / required evidence count",
    where: "Transaction verification gate",
    source: "Evidence vault metadata",
    caveat: "Missing evidence prevents execution",
  },
  {
    title: "Jurisdiction Coverage",
    formula: "Mapped statutory rules / active operating countries",
    where: "Multi-entity compliance map",
    source: "Jurisdiction Intelligence rulebook",
    caveat: "Unmapped jurisdictions flagged as manual review",
  },
  {
    title: "Where Full Reporting Lives",
    formula: "Consolidated operational analytics",
    where: "Executive BI systems & data lake exports",
    source: "ZoikoSuite immutable audit feed",
    caveat: "ZoikoSuite produces verified operational events, not offline BI charts",
    isDarkCard: true,
  },
];

export default function GovernanceAnalyticsDefinitionLedSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#f0eee6]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid - 100% UNTOUCHED FOR DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-8 sm:mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                GOVERNANCE ANALYTICS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Definition-led, never score-led
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Each metric publishes its formula, denominator, source and scope. Every figure drills through to the contributing records within your permission.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP-ONLY GRID & BOTTOM BAR (100% UNTOUCHED FOR DESKTOP)   */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-4 mb-8">
            {desktopMetricCards.map((card, idx) => {
              if (card.isDarkCard) {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeOut" }}
                    className="rounded-2xl border border-[#1b3d52] bg-[#0c2433] text-white p-5 flex flex-col justify-between shadow-md"
                  >
                    <div>
                      <span className="text-[9.5px] font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase block mb-1">
                        ANALYTICS EXPORT
                      </span>
                      <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#9bb3c3] leading-relaxed mb-4">
                        {card.caveat}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#1b3d52] text-[10px] font-mono text-[#7ea0b5]">
                      {card.source}
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeOut" }}
                  className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5 flex flex-col justify-between shadow-xs hover:border-[#c5a059] transition-all"
                >
                  <div>
                    <h3 className="text-sm font-bold text-[#08222F] mb-2 leading-tight">
                      {card.title}
                    </h3>
                    <div className="p-2.5 rounded-lg bg-white border border-[#e2e8f0] mb-3">
                      <span className="text-[9.5px] font-mono font-semibold text-[#8fa4b2] uppercase block mb-0.5">
                        FORMULA
                      </span>
                      <p className="text-[11px] font-mono text-[#08222F] leading-tight">
                        {card.formula}
                      </p>
                    </div>
                    <div className="space-y-1 text-[10.5px]">
                      <div className="flex items-start gap-1.5">
                        <span className="text-[#8fa4b2] w-14 shrink-0 font-mono">WHERE:</span>
                        <span className="text-[#475569]">{card.where}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-[#8fa4b2] w-14 shrink-0 font-mono">SOURCE:</span>
                        <span className="text-[#475569]">{card.source}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#edf2f7] text-[10px] text-[#64748b]">
                    {card.caveat}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Filter Bar */}
          <div className="p-4 sm:p-5 rounded-2xl border border-[#e2e8f0] bg-[#faf8f5] flex flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-[#64748b] mr-1 uppercase">SCOPE FILTERS:</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[#e2e8f0] text-[#08222F] font-semibold">
                All Units
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[#e2e8f0] text-[#08222F] font-semibold">
                Period: Q3 2024
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[#e2e8f0] text-[#08222F] font-semibold">
                Source: ERP / HCM
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[#e2e8f0] text-[#08222F] font-semibold">
                Jurisdiction: All
              </span>
            </div>

            <p className="text-xs text-[#64748b] leading-tight max-w-sm">
              Underlying records and formulas drill down directly from each metric. A score cannot hide behind an opaque calculation.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY SECTION EXTENSIONS (STRICTLY HIDDEN ON DESKTOP)   */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Mobile 8 Metric Cards (2 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {mobileMetrics.map((card, idx) => {
              if (card.isDarkCard) {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-[#1b3d52] bg-[#0c2433] text-white p-4 sm:p-5 flex flex-col justify-between shadow-md"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                        {card.title}
                      </h3>
                      <div className="p-2 rounded bg-[#061824] border border-[#1b3d52] text-xs font-mono text-[#c5a059] mb-3">
                        {card.formula}
                      </div>
                      <p className="text-[11.5px] text-[#9bb3c3] leading-relaxed">
                        A single governance score would obscure how much of the metric above produced it. Nothing publishes without a governed definition, denominator and source.
                      </p>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-[#e2e8f0] bg-white p-4 sm:p-5 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <h3 className="text-sm font-bold text-[#08222F] mb-2 leading-tight">
                      {card.title}
                    </h3>
                    <div className="p-2.5 rounded-lg bg-sky-50/60 border border-sky-100 mb-2.5">
                      <p className="text-[11px] font-mono text-[#08222F] leading-tight">
                        {card.formula}
                      </p>
                    </div>
                    <div className="space-y-1 text-[10.5px]">
                      <div className="flex items-start gap-1">
                        <span className="text-slate-400 font-mono w-24 shrink-0 uppercase">Unit:</span>
                        <span className="text-slate-700">{card.unit}</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-slate-400 font-mono w-24 shrink-0 uppercase">Denominator:</span>
                        <span className="text-slate-700">{card.denominator}</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-slate-400 font-mono w-24 shrink-0 uppercase">Source:</span>
                        <span className="text-slate-700">{card.source}</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-slate-400 font-mono w-24 shrink-0 uppercase">Scope:</span>
                        <span className="text-slate-700">{card.scope}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Mobile Card: What affects a metric once we start to work */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs flex flex-col gap-3">
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
              WHAT AFFECTS A METRIC ONCE WE START TO WORK
            </span>

            <div className="flex flex-wrap gap-2">
              {metricEffectChips.map((chip, cIdx) => (
                <span
                  key={cIdx}
                  className="px-2.5 py-1 rounded border border-sky-200 bg-sky-50/50 text-sky-800 text-[10.5px] font-mono font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>

            <p className="text-[11px] text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
              Every cited claims a text summary and a drill-down method, with keyboard-operable drill-down. A metric whose definition changed shows that fact rather than silently comparing two different measures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
