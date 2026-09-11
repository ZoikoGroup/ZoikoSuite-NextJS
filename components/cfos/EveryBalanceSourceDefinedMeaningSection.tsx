"use client";

import React from "react";
import { motion } from "framer-motion";
import MobileEveryBalanceView from "./MobileEveryBalanceView";

interface BalanceDetail {
  title: string;
  subtitle: string;
  amount: string;
  sourceLabel: string;
  sourceVal: string;
  entityLabel: string;
  entityVal: string;
  badgeLeft: { text: string; color: string };
  asOfLabel: string;
  asOfVal: string;
  currencyLabel: string;
  currencyVal: string;
  badgeRight?: { text: string; color: string };
  isHighlighted?: boolean;
}

const balances: BalanceDetail[] = [
  {
    title: "Book balance",
    subtitle: "NetSuite ERP GL Account 1010",
    amount: "CHF 4,180,554",
    sourceLabel: "Source",
    sourceVal: "NetSuite General Ledger (Post-Close)",
    entityLabel: "Entity",
    entityVal: "Zoiko Group AG (CHE-102.481)",
    badgeLeft: { text: "GL POSTED & LOCKED", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    asOfLabel: "As-of time",
    asOfVal: "Today 17:00 CET",
    currencyLabel: "Currency",
    currencyVal: "CHF (Swiss Franc)",
    badgeRight: { text: "SYNCED 4M AGO", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  },
  {
    title: "Bank balance",
    subtitle: "UBS Corporate Main Account ...4891",
    amount: "CHF 4,164,215",
    sourceLabel: "Source",
    sourceVal: "UBS EBICS Camt.053 Direct Feed",
    entityLabel: "Account",
    entityVal: "CH93 0023 0230 4891 0001 2",
    badgeLeft: { text: "PENDING 3 CLEARING TXNS", color: "bg-amber-50 text-amber-700 border-amber-200" },
    asOfLabel: "As-of time",
    asOfVal: "Today 16:45 CET",
    currencyLabel: "Currency",
    currencyVal: "CHF (Swiss Franc)",
    badgeRight: { text: "LIVE DIRECT FEED", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  },
  {
    title: "Available balance",
    subtitle: "Calculated via Treasury & Delegated Authority Policy",
    amount: "CHF 3,891,480",
    sourceLabel: "Source",
    sourceVal: "ZoikoSuite Unified Liquidity Policy Engine",
    entityLabel: "Committed holds",
    entityVal: "CHF 272,735 (Payroll + Batch Wires)",
    badgeLeft: { text: "GOVERNED POLICY FORMULA", color: "bg-blue-50 text-blue-700 border-blue-200" },
    asOfLabel: "As-of time",
    asOfVal: "Real-time Projected",
    currencyLabel: "Variance vs GL",
    currencyVal: "-CHF 289,074 (-6.9% Committed)",
    badgeRight: { text: "AUTHORIZED POLICY ACTIVE", color: "bg-red-50 text-red-700 border-red-200" },
    isHighlighted: true,
  },
];

export default function EveryBalanceSourceDefinedMeaningSection() {
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
                BALANCES AND CASH POSITION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Every balance keeps its source-defined meaning
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
              There is no single normalized &apos;cash&apos; figure on this page. Each balance states what kind of balance it is, which source defined it, in which currency, as of when, and whether it reconciles.
            </p>
          </motion.div>
        </div>

        {/* Desktop View: 3-Card Table (strictly hidden on mobile, visible on lg) */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 overflow-hidden divide-y divide-slate-100"
          >
            {balances.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 transition-colors ${
                  item.isHighlighted ? "bg-[#FAF8F5]/60" : "bg-white"
                }`}
              >
                {/* Row Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-slate-100">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-[#08222F] tracking-tight">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-500">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#08222F] tracking-tight">
                    {item.amount}
                  </div>
                </div>

                {/* Row Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
                  {/* Left Side */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between text-xs sm:text-sm">
                      <span className="text-slate-400 font-mono">{item.sourceLabel}:</span>
                      <span className="font-semibold text-slate-800 text-right">{item.sourceVal}</span>
                    </div>
                    <div className="flex items-baseline justify-between text-xs sm:text-sm">
                      <span className="text-slate-400 font-mono">{item.entityLabel}:</span>
                      <span className="font-semibold text-slate-800 text-right">{item.entityVal}</span>
                    </div>
                    <div className="pt-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-semibold border ${item.badgeLeft.color}`}
                      >
                        {item.badgeLeft.text}
                      </span>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between text-xs sm:text-sm">
                      <span className="text-slate-400 font-mono">{item.asOfLabel}:</span>
                      <span className="font-semibold text-slate-800 text-right">{item.asOfVal}</span>
                    </div>
                    <div className="flex items-baseline justify-between text-xs sm:text-sm">
                      <span className="text-slate-400 font-mono">{item.currencyLabel}:</span>
                      <span className="font-semibold text-slate-800 text-right">{item.currencyVal}</span>
                    </div>
                    {item.badgeRight && (
                      <div className="pt-2 flex justify-start md:justify-end">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-semibold border ${item.badgeRight.color}`}
                        >
                          {item.badgeRight.text}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile View: Dedicated Mobile Balance View with Extra Callout Cards (strictly visible on mobile, hidden on lg) */}
        <div className="block lg:hidden w-full">
          <MobileEveryBalanceView />
        </div>
      </div>
    </section>
  );
}
