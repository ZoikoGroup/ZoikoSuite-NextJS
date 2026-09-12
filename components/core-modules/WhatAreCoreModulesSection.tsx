"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatAreCoreModulesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-16 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[880px] bg-white border border-[#D0AA55] rounded-2xl p-8 sm:p-10 shadow-xs"
        >
          {/* Box Title */}
          <h2 className="text-xl sm:text-[22px] font-bold text-[#08222F] tracking-tight mb-4">
            What are ZoikoSuite Core Modules?
          </h2>

          {/* Box Description */}
          <p className="text-[#3b4953] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
            ZoikoSuite Core Modules are ten canonical business operating domains designed to work with shared governance, evidence and enterprise platform controls. The taxonomy includes Accounting &amp; General Ledger, Accounts Payable, Accounts Receivable, Treasury &amp; Cash Position, Payroll, Human Resources, Tax Management, Legal &amp; Contracts, Compliance &amp; Obligations, and Procurement &amp; Commercial Operations; exact routes, availability and source-of-record roles depend on approved implementation scope.
          </p>

          {/* Mobile-Only Taxonomy is not availability Callout Box (Strictly hidden on desktop) */}
          <div className="lg:hidden mt-5 p-4 rounded-xl border border-[#f3dfb4] bg-[#fbf5e8]">
            <div className="flex items-start gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#b45309] shrink-0 mt-0.5" />
              <p className="text-xs text-[#785929] leading-relaxed">
                <strong className="text-[#92400e]">Taxonomy is not availability.</strong> The ten names above are the canonical taxonomy. A module appearing on this page is not evidence that it is available in your market, plan or configuration, and no route is public feature until formally approved.
              </p>
            </div>
          </div>

          {/* Mobile-Only Link: See the ten modules (Strictly hidden on desktop) */}
          <div className="lg:hidden mt-5">
            <a
              href="#canonical-modules"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#08222F] hover:text-[#c5a059] transition-colors"
            >
              <span>See the ten modules</span>
              <span className="text-xs">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

