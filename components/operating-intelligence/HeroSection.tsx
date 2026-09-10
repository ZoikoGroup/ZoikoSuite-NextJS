"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, User } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#08222F] text-white pt-12 lg:pt-20 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Mobile-Only Breadcrumb Navigation */}
        <div className="lg:hidden flex items-center gap-2 text-xs font-sans text-[#7896a9] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-[#3c5d73]">/</span>
          <Link href="/platform/tour" className="hover:text-white transition-colors">
            Platform
          </Link>
          <span className="text-[#3c5d73]">/</span>
          <span className="text-white font-medium">Operating Intelligence</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left Column: Heading, Subtitle & CTAs */}
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
                OPERATING INTELLIGENCE
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.1] mb-6 sm:mb-7">
              Know what needs attention. Understand why. Act through the right controls.
            </h1>

            {/* Description */}
            <p className="text-[#9ba4b5] text-[14px] sm:text-base leading-[1.65] max-w-[500px] mb-8 font-normal">
              ZoikoSuite connects operational signals with business context, obligations,
              policies, authority, evidence, exceptions and governed AI so authorized teams
              can prioritize the right work and understand the permitted next step.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6 w-full sm:w-auto">
              <a
                href="#book-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-[13px] hover:bg-[#c29c4c] transition-all duration-200 shadow-sm"
              >
                <span>Book enterprise demo</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <a
                href="#talk-to-architect"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#0d2a3a] text-white font-medium text-[13px] border border-[#1e445b] hover:bg-[#12364a] transition-all duration-200 shadow-sm"
              >
                Talk to a solutions architect
              </a>
            </div>

            {/* Mobile-Only Text Link: View platform tour */}
            <div className="lg:hidden mb-6">
              <Link
                href="/platform-tour"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D0AA55] hover:underline"
              >
                <span>View platform tour</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile-Only 6 Tag Pills */}
            <div className="lg:hidden grid grid-cols-2 gap-2 w-full max-w-[360px] mb-6">
              {[
                "ROLE-AWARE",
                "SOURCE-AWARE",
                "EVIDENCE-BACKED",
                "MULTI-ENTITY",
                "MULTI-JURISDICTION",
                "HUMAN-ACCOUNTABLE",
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className="rounded border border-[#1a3a4f] bg-[#0c2433] px-2.5 py-1.5 text-center text-[10px] font-mono font-bold tracking-wider text-[#7ea0b5]"
                >
                  {pill}
                </div>
              ))}
            </div>

            {/* Mobile-Only Extra Description */}
            <p className="lg:hidden text-xs text-[#8ea4b3] leading-relaxed mb-6 max-w-[480px]">
              Designed for finance, legal, workforce, tax, compliance, procurement and cross-functional enterprise operations.
            </p>

            {/* Disclaimer Callout Note (Desktop & Mobile) */}
            <div className="pl-3 py-1 border-l-2 border-[#D0AA55] max-w-[480px]">
              <p className="text-[#7e99ab] text-xs leading-relaxed">
                Capabilities, integrations, jurisdiction coverage, update frequency and intelligence availability may vary by market, subscription, configuration and implementation status.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Desktop Graphic (pi1.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-6 justify-center lg:justify-end"
          >
            <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-2xl bg-transparent">
              <Image
                src="/operating-intelligence/pi1.png"
                alt="Operating intelligence central hub and diagnostic controls illustration"
                width={800}
                height={800}
                priority
                className="w-full h-auto object-contain rounded-2xl block"
              />
            </div>
          </motion.div>

          {/* Mobile-Only: Rich Intelligence Command Center Mock Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:hidden w-full flex flex-col rounded-2xl overflow-hidden border border-[#1c4055] bg-white text-[#0f172a] shadow-2xl"
          >
            {/* Top Terminal Bar */}
            <div className="bg-[#0B1E2B] px-4 py-3 flex items-center justify-between text-white border-b border-[#1c4055]">
              <span className="text-[10.5px] font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase">
                INTELLIGENCE COMMAND CENTER · SYNTHETIC DATA
              </span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
                <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
                <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
              </div>
            </div>

            {/* Inner Content Area */}
            <div className="p-4 sm:p-5 flex flex-col space-y-4">
              {/* Filter Controls Row */}
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2.5 py-1.5 flex items-center justify-between">
                    <span className="text-[#64748b]">ORG</span>
                    <span className="font-semibold text-[#08222F] truncate">Zoiko Group Holdings</span>
                    <ChevronDown className="w-3 h-3 text-[#64748b] shrink-0" />
                  </div>
                  <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2.5 py-1.5 flex items-center justify-between">
                    <span className="text-[#64748b]">ENTITY</span>
                    <span className="font-semibold text-[#08222F]">All · 14</span>
                    <ChevronDown className="w-3 h-3 text-[#64748b] shrink-0" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2.5 py-1.5 flex items-center justify-between">
                    <span className="text-[#64748b]">JURISDICTION</span>
                    <span className="font-semibold text-[#08222F]">All active</span>
                    <ChevronDown className="w-3 h-3 text-[#64748b] shrink-0" />
                  </div>
                  <div className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2.5 py-1.5 flex items-center justify-between">
                    <span className="text-[#64748b]">RANGE</span>
                    <span className="font-semibold text-[#08222F]">Next 30 days</span>
                    <ChevronDown className="w-3 h-3 text-[#64748b] shrink-0" />
                  </div>
                </div>

                {/* Controller Badge on Right */}
                <div className="flex justify-end pt-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#cbd5e1] bg-[#f1f5f9] text-[11px] font-medium text-[#334155]">
                    <div className="w-4 h-4 rounded-full bg-[#1e40af] text-white flex items-center justify-center text-[9px] font-bold">
                      NU
                    </div>
                    <span>Controller</span>
                  </div>
                </div>
              </div>

              {/* 6 Key Operational Metrics (3 cols x 2 rows) */}
              <div className="grid grid-cols-3 gap-2 border-t border-b border-[#e2e8f0] py-3">
                <div className="flex flex-col">
                  <span className="text-[8.5px] font-mono font-bold text-[#64748b] uppercase leading-tight">
                    REQUIRES DECISION OR REVIEW
                  </span>
                  <span className="text-lg font-bold font-mono text-amber-600 mt-0.5">23</span>
                  <span className="text-[9px] text-[#94a3b8]">6 past due</span>
                </div>

                <div className="flex flex-col border-l border-[#e2e8f0] pl-2">
                  <span className="text-[8.5px] font-mono font-bold text-[#64748b] uppercase leading-tight">
                    OBLIGATIONS DUE
                  </span>
                  <span className="text-lg font-bold font-mono text-[#08222F] mt-0.5">31</span>
                  <span className="text-[9px] text-[#94a3b8]">4 overdue</span>
                </div>

                <div className="flex flex-col border-l border-[#e2e8f0] pl-2">
                  <span className="text-[8.5px] font-mono font-bold text-[#64748b] uppercase leading-tight">
                    POLICY EXCEPTIONS
                  </span>
                  <span className="text-lg font-bold font-mono text-rose-600 mt-0.5">7</span>
                  <span className="text-[9px] text-[#94a3b8]">2 recurring</span>
                </div>

                <div className="flex flex-col pt-2 border-t border-[#f1f5f9]">
                  <span className="text-[8.5px] font-mono font-bold text-[#64748b] uppercase leading-tight">
                    EVIDENCE GAPS
                  </span>
                  <span className="text-lg font-bold font-mono text-amber-600 mt-0.5">9</span>
                  <span className="text-[9px] text-[#94a3b8]">3 restricted</span>
                </div>

                <div className="flex flex-col pt-2 border-t border-[#f1f5f9] border-l border-[#e2e8f0] pl-2">
                  <span className="text-[8.5px] font-mono font-bold text-[#64748b] uppercase leading-tight">
                    CONTROL OUTCOMES TO REVIEW
                  </span>
                  <span className="text-lg font-bold font-mono text-[#08222F] mt-0.5">12</span>
                  <span className="text-[9px] text-[#94a3b8]">Trailing 30 days</span>
                </div>

                <div className="flex flex-col pt-2 border-t border-[#f1f5f9] border-l border-[#e2e8f0] pl-2">
                  <span className="text-[8.5px] font-mono font-bold text-[#64748b] uppercase leading-tight">
                    SOURCE HEALTH
                  </span>
                  <span className="text-lg font-bold font-mono text-amber-600 mt-0.5">5 of 7</span>
                  <span className="text-[9px] text-[#94a3b8]">1 auth expired</span>
                </div>
              </div>

              {/* Attention Queue Table */}
              <div className="flex flex-col">
                <span className="text-[9px] font-mono font-bold tracking-wider text-[#64748b] uppercase mb-2">
                  ATTENTION QUEUE — PRIORITY ALWAYS CARRIES A TEXT REASON
                </span>

                <div className="overflow-x-auto border border-[#e2e8f0] rounded-lg">
                  <table className="w-full text-left border-collapse text-[11px]">
                    <thead>
                      <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[9.5px] font-mono text-[#64748b] uppercase">
                        <th className="py-2 px-2.5 font-semibold">PRIORITY</th>
                        <th className="py-2 px-2 font-semibold">OBJECT / ENTITY</th>
                        <th className="py-2 px-2 font-semibold">OWNER</th>
                        <th className="py-2 px-2 font-semibold">DUE</th>
                        <th className="py-2 px-2.5 font-semibold text-right">EVIDENCE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#edf2f7] text-[11px]">
                      {/* Row 1 - Highlighted Active */}
                      <tr className="bg-[#fefcf3] font-medium">
                        <td className="py-2.5 px-2.5 align-top">
                          <span className="inline-block px-1.5 py-0.5 rounded border border-rose-300 text-rose-700 bg-rose-50 text-[9px] font-mono font-bold">
                            • CRITICAL
                          </span>
                          <span className="block text-[9.5px] text-[#64748b] mt-0.5">Blocking policy stale</span>
                        </td>
                        <td className="py-2.5 px-2 align-top">
                          <span className="font-bold text-[#08222F] block">Vendor bank detail change</span>
                          <span className="text-[9.5px] text-[#64748b]">VEN-4471 · Zoiko Inc · US</span>
                        </td>
                        <td className="py-2.5 px-2 align-top text-[#334155]">H. Vance</td>
                        <td className="py-2.5 px-2 align-top text-[10px] font-mono text-[#64748b]">
                          08 Aug<br />Age 2 d
                        </td>
                        <td className="py-2.5 px-2.5 align-top text-right">
                          <span className="inline-block px-1.5 py-0.5 rounded border border-rose-300 text-rose-700 bg-rose-50 text-[9px] font-mono font-bold">
                            • MISSING
                          </span>
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="bg-white">
                        <td className="py-2.5 px-2.5 align-top">
                          <span className="inline-block px-1.5 py-0.5 rounded border border-amber-300 text-amber-700 bg-amber-50 text-[9px] font-mono font-bold">
                            • HIGH
                          </span>
                          <span className="block text-[9.5px] text-[#64748b] mt-0.5">Deadline + approval</span>
                        </td>
                        <td className="py-2.5 px-2 align-top">
                          <span className="font-bold text-[#08222F] block">Payroll release</span>
                          <span className="text-[9.5px] text-[#64748b]">PYR-0081 · Zoiko UK · UK</span>
                        </td>
                        <td className="py-2.5 px-2 align-top text-[#334155]">A. Whitfield</td>
                        <td className="py-2.5 px-2 align-top text-[10px] font-mono text-[#64748b]">
                          29 Aug<br />Age 1 d
                        </td>
                        <td className="py-2.5 px-2.5 align-top text-right">
                          <span className="inline-block px-1.5 py-0.5 rounded border border-emerald-300 text-emerald-700 bg-emerald-50 text-[9px] font-mono font-bold">
                            • COMPLETE
                          </span>
                        </td>
                      </tr>

                      {/* Row 3 */}
                      <tr className="bg-white">
                        <td className="py-2.5 px-2.5 align-top">
                          <span className="inline-block px-1.5 py-0.5 rounded border border-amber-300 text-amber-700 bg-amber-50 text-[9px] font-mono font-bold">
                            • HIGH
                          </span>
                          <span className="block text-[9.5px] text-[#64748b] mt-0.5">Professional review</span>
                        </td>
                        <td className="py-2.5 px-2 align-top">
                          <span className="font-bold text-[#08222F] block">Clause deviation</span>
                          <span className="text-[9.5px] text-[#64748b]">CTR-1174 · Zoiko Ireland · IE</span>
                        </td>
                        <td className="py-2.5 px-2 align-top text-[#334155]">R. Osei</td>
                        <td className="py-2.5 px-2 align-top text-[10px] font-mono text-[#64748b]">
                          02 Sep<br />Age 4 d
                        </td>
                        <td className="py-2.5 px-2.5 align-top text-right">
                          <span className="inline-block px-1.5 py-0.5 rounded border border-emerald-300 text-emerald-700 bg-emerald-50 text-[9px] font-mono font-bold">
                            • COMPLETE
                          </span>
                        </td>
                      </tr>

                      {/* Row 4 */}
                      <tr className="bg-white">
                        <td className="py-2.5 px-2.5 align-top">
                          <span className="inline-block px-1.5 py-0.5 rounded border border-blue-300 text-blue-700 bg-blue-50 text-[9px] font-mono font-bold">
                            • MEDIUM
                          </span>
                          <span className="block text-[9.5px] text-[#64748b] mt-0.5">Source degraded</span>
                        </td>
                        <td className="py-2.5 px-2 align-top">
                          <span className="font-bold text-[#08222F] block">GST return preparation</span>
                          <span className="text-[9.5px] text-[#64748b]">VAT-0338 · Zoiko Pte · SG</span>
                        </td>
                        <td className="py-2.5 px-2 align-top text-[#334155]">L. Tan</td>
                        <td className="py-2.5 px-2 align-top text-[10px] font-mono text-[#64748b]">
                          30 Sep<br />Age 6 d
                        </td>
                        <td className="py-2.5 px-2.5 align-top text-right">
                          <span className="inline-block px-1.5 py-0.5 rounded border border-amber-300 text-amber-700 bg-amber-50 text-[9px] font-mono font-bold">
                            • 1 ATTACHED
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Terminal Footnote */}
              <div className="pt-2 text-[10px] font-mono text-[#64748b] leading-relaxed">
                Status is text plus icon, never color alone. No composite risk, evidence or control score appears anywhere in this view.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
