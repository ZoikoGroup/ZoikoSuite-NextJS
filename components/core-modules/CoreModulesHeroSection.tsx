"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CoreModulesHeroSection() {
  return (
    <section className="w-full bg-[#08222F] text-white pt-12 lg:pt-20 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left Column: Eyebrow, Heading, Paragraph & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#c5a059] uppercase">
                CORE MODULES
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-bold text-white tracking-tight leading-[1.12] mb-6 sm:mb-7">
              Run core business operations through one governed module architecture
            </h1>

            {/* Description */}
            <p className="text-[#9ba4b5] text-[14px] sm:text-base leading-[1.65] max-w-[500px] mb-8 font-normal">
              Ten canonical business operating domains designed to share governance, evidence, entity and jurisdiction context, and enterprise platform controls — while coexisting with the systems of record you keep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/platform-tour"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-[13px] hover:bg-[#c29c4c] transition-all duration-200 shadow-sm"
              >
                <span>Book enterprise demo</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>

              <Link
                href="/platform-overview"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#0d2a3a] text-white font-medium text-[13px] border border-[#1e445b] hover:bg-[#12364a] transition-all duration-200 shadow-sm"
              >
                Talk to a solutions architect
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Desktop Graphic (cm1.png) - PRESERVED UNTOUCHED FOR DESKTOP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-6 justify-center lg:justify-end"
          >
            <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-2xl bg-transparent">
              <Image
                src="/core-modules/cm1.png"
                alt="Core modules governed architecture hub illustration"
                width={800}
                height={800}
                priority
                className="w-full h-auto object-contain rounded-2xl block"
              />
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY SECTION 1 EXTENSIONS (STRICTLY HIDDEN ON DESKTOP)  */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden mt-8 flex flex-col space-y-6">
          {/* View platform tour link */}
          <div>
            <Link
              href="/platform-tour"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D0AA55] hover:underline"
            >
              <span>View platform tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 5 Feature Badges */}
          <div className="flex flex-wrap gap-2">
            {[
              "SHARED GOVERNANCE",
              "SHARED EVIDENCE",
              "MULTI-ENTITY",
              "MULTI-JURISDICTION",
              "COEXISTENCE-READY",
            ].map((badge, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1.5 rounded border border-[#1a3a4f] bg-[#0c2433] text-[9.5px] font-mono font-bold tracking-wider text-[#7ea0b5] uppercase"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Implementation Notice Callout */}
          <div className="pl-3 py-1 border-l-2 border-[#D0AA55]">
            <p className="text-[#8ba2b2] text-[11px] leading-relaxed">
              Illustrative architecture view. Exact routes, availability, feature depth, configuration and source-of-record ownership depend on approved implementation scope, market, plan and product validation.
            </p>
          </div>

          {/* Mobile Interactive Module Architecture Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Terminal Top Bar */}
            <div className="bg-[#051620] px-4 py-3 flex items-center justify-between border-b border-[#12364c]">
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase">
                MODULE ARCHITECTURE · FOUR DOMAINS, TEN CANONICAL MODULES
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              </div>
            </div>

            {/* 4 Domain Cards Grid */}
            <div className="p-4 grid grid-cols-2 gap-2.5 bg-[#08222f]">
              {/* Domain 01: Finance */}
              <div className="rounded-xl border-2 border-[#2b6489] bg-[#0e2c3e] p-3 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#8fa4b2] uppercase block mb-0.5">
                    DOMAIN 01
                  </span>
                  <h4 className="text-xs font-bold text-white mb-0.5">Finance</h4>
                  <span className="text-[10px] text-[#7895a6] block mb-2">4 modules</span>
                  <p className="text-[10px] text-[#9bb1bf] leading-tight">
                    Accounting &amp; General Ledger · Accounts Payable · Accounts Receivable · Treasury &amp; Cash Position
                  </p>
                </div>
              </div>

              {/* Domain 02: Workforce */}
              <div className="rounded-xl border border-[#1b3d52] bg-[#0a2332] p-3 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#8fa4b2] uppercase block mb-0.5">
                    DOMAIN 02
                  </span>
                  <h4 className="text-xs font-bold text-white mb-0.5">Workforce</h4>
                  <span className="text-[10px] text-[#7895a6] block mb-2">2 modules</span>
                  <p className="text-[10px] text-[#9bb1bf] leading-tight">
                    Payroll · Human Resources
                  </p>
                </div>
              </div>

              {/* Domain 03: Tax, Legal & Compliance */}
              <div className="rounded-xl border border-[#1b3d52] bg-[#0a2332] p-3 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#8fa4b2] uppercase block mb-0.5">
                    DOMAIN 03
                  </span>
                  <h4 className="text-xs font-bold text-white mb-0.5 leading-snug">
                    Tax, Legal &amp; Compliance
                  </h4>
                  <span className="text-[10px] text-[#7895a6] block mb-2">3 modules</span>
                  <p className="text-[10px] text-[#9bb1bf] leading-tight">
                    Tax Management · Legal &amp; Contracts · Compliance &amp; Obligations
                  </p>
                </div>
              </div>

              {/* Domain 04: Commercial */}
              <div className="rounded-xl border border-[#1b3d52] bg-[#0a2332] p-3 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#8fa4b2] uppercase block mb-0.5">
                    DOMAIN 04
                  </span>
                  <h4 className="text-xs font-bold text-white mb-0.5">Commercial</h4>
                  <span className="text-[10px] text-[#7895a6] block mb-2">1 module</span>
                  <p className="text-[10px] text-[#9bb1bf] leading-tight">
                    Procurement &amp; Commercial Operations
                  </p>
                </div>
              </div>
            </div>

            {/* Selected Domain Modules Pills (Finance selected) */}
            <div className="px-4 py-3 bg-[#061823] border-t border-[#12364c] flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-md bg-[#133c56] border border-[#205b82] text-[9.5px] font-medium text-white">
                Accounting &amp; General Ledger
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#133c56] border border-[#205b82] text-[9.5px] font-medium text-white">
                Accounts Payable
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#133c56] border border-[#205b82] text-[9.5px] font-medium text-white">
                Accounts Receivable
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#133c56] border border-[#205b82] text-[9.5px] font-medium text-white">
                Treasury &amp; Cash Position
              </span>
            </div>

            {/* Applied Platform Layers Indicators */}
            <div className="px-4 pb-3 bg-[#061823] flex flex-wrap gap-2 text-[10px] text-[#7ea0b5]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#1b3d52] bg-[#0a2230]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D0AA55]" />
                Governance Platform applies
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#1b3d52] bg-[#0a2230]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                Platform Foundation applies
              </span>
            </div>

            {/* Two Governing Platform Boxes */}
            <div className="p-4 space-y-2.5 bg-[#061823] border-t border-[#12364c]">
              {/* Box 1: GOVERNANCE PLATFORM */}
              <div className="rounded-xl border border-[#1b435b] bg-[#0a293b] p-3.5">
                <span className="text-[9px] font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase block mb-1">
                  GOVERNANCE PLATFORM
                </span>
                <p className="text-[10.5px] text-[#9bb3c3] leading-relaxed">
                  Policy, jurisdiction intelligence, workflow and approvals, delegated authority segregation, evidence, audit readiness, governed AI and analytics can apply to all ten canonical modules.
                </p>
              </div>

              {/* Box 2: PLATFORM FOUNDATION */}
              <div className="rounded-xl border border-[#1b435b] bg-[#0a293b] p-3.5">
                <span className="text-[9px] font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase block mb-1">
                  PLATFORM FOUNDATION
                </span>
                <p className="text-[10.5px] text-[#9bb3c3] leading-relaxed">
                  Architecture, multi-entity and multi-jurisdiction scope, residency, APIs and integrations, developer platform, migration and Shadow Mode, and pathway, data and event architecture.
                </p>
              </div>
            </div>

            {/* Terminal Footer Note */}
            <div className="px-4 py-3 bg-[#04121a] border-t border-[#103043]">
              <p className="text-[9.5px] text-[#607b8d] leading-relaxed">
                Both layers apply across all ten modules. Detailed capability assertions belong to these deliverables, not on this page.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

