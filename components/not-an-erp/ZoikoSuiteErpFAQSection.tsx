"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ZoikoSuiteErpFAQSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased text-[#1A202C] flex justify-center items-center">
      <div className="max-w-5xl w-full">
        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-2xl p-8 sm:p-12 border border-[#D0AA55] border-t-[3px] shadow-sm space-y-8"
        >
          {/* Main Title & Paragraph Block */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-[#14213D] tracking-tight">
              Is ZoikoSuite an ERP?
            </h2>

            <p className="text-[21px] text-[#334155] leading-relaxed font-normal">
              <strong className="font-bold text-[#0F172A]">
                No. ZoikoSuite is not positioned as a conventional ERP.
              </strong>{" "}
              Conventional ERP products generally organize transactional modules
              and records, while ZoikoSuite is designed to coordinate governed
              execution across functions, systems, entities, jurisdictions,
              policies, authority, evidence, and governed AI. It may integrate
              with, complement, consolidate, or replace selected processes
              depending on approved implementation scope.
            </p>
          </div>

          {/* Two-Column Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Left Card - What Conventional ERP Usually Does */}
            <div className="rounded-xl p-6 border border-[#E2E8F0] flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-[#64748B] uppercase block">
                  WHAT CONVENTIONAL ERP USUALLY DOES
                </span>
                <p className="text-sm text-[#16262F] leading-relaxed font-normal">
                  Organizes transactional modules, master data, ledgers, and
                  operational records &mdash; often the authoritative source for
                  finance and operations.
                </p>
              </div>

              <div className="pt-4 border-t border-dashed border-[#E2E8F0]">
                <p className="text-[12.5px] text-[#5A6D79] italic leading-normal">
                  Individual ERP products vary widely in governance, workflow,
                  analytics, and AI capability. Nothing here describes any
                  specific product.
                </p>
              </div>
            </div>

            {/* Right Card - What ZoikoSuite Adds */}
            <div className="bg-[#E8EFF4] rounded-xl p-6 border border-[#0F476A] flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-[#334155] uppercase block">
                  WHAT ZOIKOSUITE ADDS
                </span>
                <p className="text-sm text-[#16262F] leading-relaxed font-normal">
                  Organizes governed execution across those systems: context,
                  policy, authority, approvals, segregation, evidence,
                  exceptions, and governed AI around the action itself.
                </p>
              </div>

              <div className="pt-4 border-t border-dashed border-[#CBD5E1]">
                <p className="text-[12.5px] text-[#5A6D79] italic leading-normal">
                  Scope depends on approved implementation, customer
                  architecture, jurisdiction, and verified product availability.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
