"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface JurisdictionRule {
  jurisdiction: string;
  rule: string;
  status: string;
  statusType: "covered" | "partial" | "stale" | "config" | "outofscope";
  statutorySource: string;
  sourceDate: string;
  lastVerified: string;
  highlight?: boolean;
}

const jurisdictionRules: JurisdictionRule[] = [
  {
    jurisdiction: "United Kingdom",
    rule: "Payment authorization records",
    status: "● COVERED",
    statusType: "covered",
    statutorySource: "Statutory book standard",
    sourceDate: "Apr 2024",
    lastVerified: "01 Jan 2024",
  },
  {
    jurisdiction: "Germany",
    rule: "Pension funds administration",
    status: "● PARTIAL",
    statusType: "partial",
    statutorySource: "Commercial code §1",
    sourceDate: "Feb 2023",
    lastVerified: "23 Jul 2024",
  },
  {
    jurisdiction: "India",
    rule: "Withholding tax and filing",
    status: "▲ SOURCE STALE",
    statusType: "stale",
    statutorySource: "Corporate Income Tax Act",
    sourceDate: "Nov 2022",
    lastVerified: "14 Feb 2024!",
    highlight: true,
  },
  {
    jurisdiction: "Singapore",
    rule: "Filing parent submission",
    status: "● CONFIGURATION REQUIRED",
    statusType: "config",
    statutorySource: "Companies Act",
    sourceDate: "Feb 2024",
    lastVerified: "03 Jul 2024",
  },
  {
    jurisdiction: "Brazil",
    rule: "—",
    status: "■ OUT OF SCOPE",
    statusType: "outofscope",
    statutorySource: "—",
    sourceDate: "—",
    lastVerified: "—",
  },
];

const coverageStates = [
  { label: "Covered", dotColor: "bg-emerald-500", textTone: "text-emerald-700 bg-emerald-50 border-emerald-200" },
  { label: "Partial", dotColor: "bg-sky-500", textTone: "text-sky-700 bg-sky-50 border-sky-200" },
  { label: "Review required", dotColor: "bg-amber-500", textTone: "text-amber-800 bg-amber-50 border-amber-200" },
  { label: "Source stale", dotColor: "bg-orange-500", textTone: "text-amber-900 bg-amber-100 border-amber-300" },
  { label: "Configuration required", dotColor: "bg-slate-500", textTone: "text-slate-700 bg-slate-100 border-slate-300" },
  { label: "Out of Scope", dotColor: "bg-rose-500", textTone: "text-rose-700 bg-rose-50 border-rose-200" },
];

export default function CoverageStateSourceDateSection() {
  const getStatusBadge = (type: JurisdictionRule["statusType"]) => {
    switch (type) {
      case "covered":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "partial":
        return "bg-sky-50 text-sky-800 border-sky-200";
      case "stale":
        return "bg-amber-100 text-amber-950 border-amber-300 font-bold";
      case "config":
        return "bg-slate-100 text-slate-700 border-slate-300";
      case "outofscope":
        return "bg-rose-50 text-rose-800 border-rose-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid - 100% UNTOUCHED FOR DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-8 sm:mb-10">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                JURISDICTION INTELLIGENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Coverage state, source date
              <br className="hidden sm:inline" />{" "}
              and review requirement travel
              <br className="hidden sm:inline" />{" "}
              together
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              A country list is not coverage. Every jurisdictional rule carries
              where it came from, when it was last verified, and whether
              qualified review is still required.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP-ONLY 3D VISUAL (gp3.png) - 100% UNTOUCHED FOR DESKTOP */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full rounded-2xl overflow-hidden border border-[#e2e8f0] bg-[#07131b] shadow-xl"
        >
          <Image
            src="/governance-platform/gp3.png"
            alt="Jurisdiction coverage source date and professional review requirement illustration"
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
          {/* Six Coverage States Legend */}
          <div className="flex flex-col space-y-2">
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
              SIX COVERAGE STATES
            </span>
            <div className="flex flex-wrap gap-2">
              {coverageStates.map((item, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border ${item.textTone}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Jurisdiction Registry Window Card */}
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
                JURISDICTION REGISTRY — SCOPE AND POLICY STATE PER RULE
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
                JURISDICTION RULES WITH AUTHORITY REFERENCE, VERIFICATION DATE AND OPERATIONAL CONTEXT
              </span>

              {/* Scrollable Table */}
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[620px] text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      <th className="py-2.5 pr-3 font-semibold">Jurisdiction</th>
                      <th className="py-2.5 px-2 font-semibold">Rule / Regulation</th>
                      <th className="py-2.5 px-2 font-semibold">Status</th>
                      <th className="py-2.5 px-2 font-semibold">Statutory Source</th>
                      <th className="py-2.5 px-2 font-semibold">Source Date</th>
                      <th className="py-2.5 pl-2 font-semibold">Last Verified</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[11.5px]">
                    {jurisdictionRules.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={row.highlight ? "bg-[#FEF9EE]" : "hover:bg-slate-50/50"}
                      >
                        <td className="py-2.5 pr-3 font-semibold text-slate-900">
                          {row.jurisdiction}
                        </td>
                        <td className="py-2.5 px-2 text-slate-700 max-w-[150px] leading-tight">
                          {row.rule}
                        </td>
                        <td className="py-2.5 px-2 whitespace-nowrap">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono font-semibold border ${getStatusBadge(
                              row.statusType
                            )}`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-2 text-slate-600 max-w-[140px] leading-tight">
                          {row.statutorySource}
                        </td>
                        <td className="py-2.5 px-2 font-mono text-slate-600 whitespace-nowrap">
                          {row.sourceDate}
                        </td>
                        <td className="py-2.5 pl-2 font-mono text-slate-600 whitespace-nowrap">
                          {row.lastVerified}
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
                  <strong>Stale source, affected scope highlighted.</strong> The India rule is past its review date and unverified. Controls depending on it are warned and the governance outcome reflects this rather than passing through as compliant.
                </span>
              </div>

              {/* Subtext Note */}
              <p className="text-[10.5px] text-slate-500 mt-3 leading-relaxed">
                Coverage describes software configuration and source currency. It is not legal advice, and it does not assume that a jurisdiction's requirements are fully met—a good decision retains the source version used at the time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
