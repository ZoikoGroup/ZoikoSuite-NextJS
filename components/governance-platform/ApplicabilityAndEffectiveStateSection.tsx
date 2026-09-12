"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface LifecycleStage {
  title: string;
  subtext: string;
}

const lifecycleStages: LifecycleStage[] = [
  { title: "Draft", subtext: "Author, scope, intent" },
  { title: "Review", subtext: "Internal / legal validation" },
  { title: "Approve", subtext: "Authorized with signature" },
  { title: "Scheduled", subtext: "Future effective start date" },
  { title: "Effective", subtext: "Audited for next version" },
  { title: "Superseded", subtext: "Archived historical" },
];

interface PolicyRow {
  policy: string;
  version: string;
  source: string;
  owner: string;
  status: string;
  statusType: "effective" | "scheduled" | "conflict" | "superseded";
  effectivePeriod: string;
  nextReview: string;
  highlight?: boolean;
}

const policyRows: PolicyRow[] = [
  {
    policy: "Supplier Master Change Control",
    version: "v3",
    source: "Group Finance Committee",
    owner: "Operations",
    status: "● EFFECTIVE",
    statusType: "effective",
    effectivePeriod: "01 Apr 2024 →",
    nextReview: "Oct 2027",
  },
  {
    policy: "Data Retention",
    version: "v2",
    source: "Internal Control Framework",
    owner: "Compliance",
    status: "● EFFECTIVE",
    statusType: "effective",
    effectivePeriod: "01 Apr 2024 →",
    nextReview: "Apr 2027",
  },
  {
    policy: "Payment Authority Thresholds",
    version: "v3",
    source: "Board delegation schedule",
    owner: "Treasury",
    status: "● SCHEDULED",
    statusType: "scheduled",
    effectivePeriod: "01 Jan 2025 →",
    nextReview: "Dec 2027",
  },
  {
    policy: "Intercompany Threshold — group",
    version: "v4",
    source: "Group Finance",
    owner: "Treasury",
    status: "▲ CONFLICT · RESOLUTION",
    statusType: "conflict",
    effectivePeriod: "01 Jan 2024 →",
    nextReview: "Current",
    highlight: true,
  },
  {
    policy: "Intercompany Threshold — local",
    version: "v2",
    source: "Local finance policy",
    owner: "Entity controller",
    status: "▲ CONFLICT · RESOLUTION",
    statusType: "conflict",
    effectivePeriod: "01 Mar 2024 →",
    nextReview: "Dec 2027",
    highlight: true,
  },
  {
    policy: "Supplier On-boarding v1",
    version: "v1",
    source: "Procurement policy",
    owner: "Procurement",
    status: "■ SUPERSEDED",
    statusType: "superseded",
    effectivePeriod: "to 31 Mar 2024",
    nextReview: "—",
  },
];

export default function ApplicabilityAndEffectiveStateSection() {
  const getStatusBadge = (type: PolicyRow["statusType"], label: string) => {
    switch (type) {
      case "effective":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "scheduled":
        return "bg-sky-50 text-sky-800 border-sky-200";
      case "conflict":
        return "bg-rose-50 text-rose-800 border-rose-200 font-bold";
      case "superseded":
        return "bg-slate-100 text-slate-700 border-slate-300";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid - UNTOUCHED FOR DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-8 sm:mb-10">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                POLICY MANAGEMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Applicability and effective state,
              <br className="hidden sm:inline" />{" "}
              before document library
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              The useful question is not where the policy is stored. It is which
              version applied to this action, and whether two policies
              disagreed.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP-ONLY 3D VISUAL (gp2.png) - 100% UNTOUCHED FOR DESKTOP */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full rounded-2xl overflow-hidden border border-[#e2e8f0] bg-[#07131b] shadow-xl"
        >
          <Image
            src="/governance-platform/gp2.png"
            alt="Policy applicability and effective state evaluation illustration"
            width={1240}
            height={680}
            priority
            className="w-full h-auto object-contain block"
          />
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY SECTION EXTENSIONS (STRICTLY HIDDEN ON DESKTOP)   */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Policy Lifecycle Stack */}
          <div className="flex flex-col space-y-2.5">
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
              POLICY LIFECYCLE
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {lifecycleStages.map((stage, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/80 p-3.5 flex flex-col items-center justify-center text-center shadow-xs"
                >
                  <span className="text-sm font-bold text-[#0f172a]">
                    {stage.title}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5">
                    {stage.subtext}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Change Callout */}
          <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 flex flex-col gap-1">
            <span className="text-xs font-bold text-rose-950">
              Emergency change — separately labeled
            </span>
            <p className="text-[11.5px] text-rose-900/80 leading-relaxed">
              Neither silence nor authority bypassed. Fast-track emergency
              changes require retroactive review, full audit trail preservation,
              and the control status that will transition to authorized state.
            </p>
          </div>

          {/* Policy Registry Window Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Terminal Top Bar */}
            <div className="bg-[#051620] px-3.5 py-2.5 flex items-center justify-between border-b border-[#12364c]">
              <span className="text-[9.5px] sm:text-[10px] font-mono font-bold tracking-[0.12em] text-[#7ea0b5] uppercase">
                POLICY REGISTRY — TWELVE ACTIVE POLICIES
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            {/* Inner White Table Card */}
            <div className="bg-white text-slate-900 p-4 sm:p-5 flex flex-col">
              <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                POLICIES WITH SOURCE, OWNER, EFFECTIVE PERIOD AND CURRENT STATE
              </span>

              {/* Scrollable Table Container */}
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[620px] text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      <th className="py-2.5 pr-3 font-semibold">Policy</th>
                      <th className="py-2.5 px-2 font-semibold">Version</th>
                      <th className="py-2.5 px-2 font-semibold">Source</th>
                      <th className="py-2.5 px-2 font-semibold">Owner</th>
                      <th className="py-2.5 px-2 font-semibold">Status</th>
                      <th className="py-2.5 px-2 font-semibold">Effective Period</th>
                      <th className="py-2.5 pl-2 font-semibold">Next Review</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[11.5px]">
                    {policyRows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={row.highlight ? "bg-[#FEF9EE]" : "hover:bg-slate-50/50"}
                      >
                        <td className="py-2.5 pr-3 font-semibold text-slate-900">
                          {row.policy}
                        </td>
                        <td className="py-2.5 px-2 font-mono text-slate-500">
                          {row.version}
                        </td>
                        <td className="py-2.5 px-2 text-slate-600 max-w-[130px] leading-tight">
                          {row.source}
                        </td>
                        <td className="py-2.5 px-2 text-slate-600">
                          {row.owner}
                        </td>
                        <td className="py-2.5 px-2 whitespace-nowrap">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono font-semibold border ${getStatusBadge(
                              row.statusType,
                              row.status
                            )}`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-2 font-mono text-slate-600 whitespace-nowrap">
                          {row.effectivePeriod}
                        </td>
                        <td className="py-2.5 pl-2 text-slate-600 whitespace-nowrap">
                          {row.nextReview}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Warning Callout Box */}
              <div className="bg-[#FEF9EE] border border-[#F3DFB5] rounded-lg p-3 flex items-start gap-2.5 text-[11px] text-amber-900 leading-snug mt-4">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Conflicting policies remain an explicit unresolved state.</strong> The two intercompany thresholds now disagree. The platform refuses to silently pick the stricter or newer one—it marks the action outline with an authorized decision record for source, version and reason for the evaluation.
                </span>
              </div>

              {/* Subtext Note */}
              <p className="text-[10.5px] text-slate-500 mt-3 leading-relaxed">
                A source-governed policy is evaluated against every action, because decisions take place in real time against the versions that actually governed them at call time (which cannot change after a fact), and not legacy or retroactively adjusted specifications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
