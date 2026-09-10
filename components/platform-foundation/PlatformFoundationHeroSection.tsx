"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PlatformFoundationHeroSection() {
  return (
    <section className="w-full bg-[#08222F] text-white pt-10 sm:pt-12 lg:pt-20 pb-16 lg:pb-28 px-4 sm:px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Mobile-Only Breadcrumbs (lg:hidden) */}
        <div className="lg:hidden flex items-center gap-1.5 text-xs text-[#9ba4b5] mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/platform-overview"
            className="hover:text-white transition-colors"
          >
            Platform
          </Link>
          <span>/</span>
          <span className="text-white font-medium">Platform Foundation</span>
        </div>

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
                PLATFORM FOUNDATION
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.12] mb-6 sm:mb-7">
              Build governed operations on a foundation that keeps scope, data, integrations and evidence visible
            </h1>

            {/* Description */}
            <p className="text-[#9ba4b5] text-[14px] sm:text-base leading-[1.65] max-w-[520px] mb-8 font-normal">
              Connect organization and jurisdiction context with architecture, data location, APIs, integrations, developer capabilities, evidence, data and events, and controlled adoption — subject to approved product and deployment scope.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/platform-overview"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-[13px] hover:bg-[#c29c4c] transition-all duration-200 shadow-sm"
              >
                <span>Talk to a solutions architect</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>

              <Link
                href="/platform-tour"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#0d2a3a] text-white font-medium text-[13px] border border-[#1e445b] hover:bg-[#12364a] transition-all duration-200 shadow-sm"
              >
                Book enterprise demo
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Desktop Graphic (pf1.png) - PRESERVED UNTOUCHED FOR DESKTOP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-6 justify-center lg:justify-end"
          >
            <div className="w-full max-w-[540px] rounded-2xl overflow-hidden shadow-2xl bg-transparent">
              <Image
                src="/platform-foundation/pf1.png"
                alt="Platform foundation architecture hub illustration"
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

          {/* Qualified notice callout */}
          <div className="pl-3 py-1 border-l-2 border-[#D0AA55]">
            <p className="text-[#8ba2b2] text-[11.5px] leading-relaxed">
              A public region, baseline developer resource, publication or integration availability depends on approved customer/partner agreement and deployment scope.
            </p>
          </div>

          {/* Mobile Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Terminal Top Bar */}
            <div className="bg-[#051620] px-3.5 py-2.5 flex items-center justify-between border-b border-[#12364c]">
              <span className="text-[9.5px] font-mono font-bold tracking-[0.12em] text-[#7ea0b5] uppercase">
                ADAPTATION MAP SUMMARY · SMT-744-001
              </span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-700">
                  REALM STATE: ACTIVE
                </span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                </div>
              </div>
            </div>

            {/* Inner White Table Card */}
            <div className="bg-white text-slate-900 p-4 flex flex-col space-y-3.5">
              {/* Row 1: Top Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-3 border-b border-slate-100 text-[11px]">
                <div>
                  <span className="font-mono text-slate-400 text-[9.5px] uppercase block">CAPABILITY ID</span>
                  <span className="font-mono font-bold text-slate-800">Primary/Zone-02</span>
                </div>
                <div>
                  <span className="font-mono text-slate-400 text-[9.5px] uppercase block">PROVEN DATE</span>
                  <span className="font-mono text-slate-800">01 Jul 2024</span>
                </div>
                <div>
                  <span className="font-mono text-slate-400 text-[9.5px] uppercase block">HOST REALM</span>
                  <span className="font-mono text-slate-800">Northstar-Jurisdiction</span>
                </div>
                <div className="flex flex-col sm:items-end">
                  <span className="font-mono text-slate-400 text-[9.5px] uppercase block">LINE OF DEFENCE</span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8.5px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit">
                    ● 1ST LINE
                  </span>
                </div>
              </div>

              {/* Row 2: Category Pills */}
              <div className="flex flex-col space-y-1.5">
                <span className="font-mono text-slate-400 text-[9.5px] uppercase font-semibold">
                  LAYER 1 — SCOPE
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Enterprise scope", "Entity tree", "Jurisdiction home", "Tenant model", "Bank and data residency"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded text-[9.5px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Row 3: Sub-table / Mini Grid */}
              <div className="flex flex-col space-y-1.5">
                <span className="font-mono text-slate-400 text-[9.5px] uppercase font-semibold">
                  LAYER 2 — CAPABILITIES
                </span>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[10.5px]">
                    <thead>
                      <tr className="border-b border-slate-200 text-[9px] font-mono text-slate-400 uppercase">
                        <th className="pb-1.5 font-semibold">INVENTORY NAME</th>
                        <th className="pb-1.5 font-semibold">ECOSYSTEM</th>
                        <th className="pb-1.5 font-semibold">LEGAL HOME</th>
                        <th className="pb-1.5 font-semibold">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono">
                      <tr>
                        <td className="py-1.5 font-medium text-slate-900">Resource access matrix</td>
                        <td className="py-1.5 text-slate-600">Both realms</td>
                        <td className="py-1.5 text-slate-600">North London District</td>
                        <td className="py-1.5">
                          <span className="px-1.5 py-0.2 rounded text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            ● ACTIVE
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-medium text-slate-900">Identity assertions store</td>
                        <td className="py-1.5 text-slate-600">Primary</td>
                        <td className="py-1.5 text-slate-600">North London District</td>
                        <td className="py-1.5">
                          <span className="px-1.5 py-0.2 rounded text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            ● ACTIVE
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-medium text-slate-900">Standard repository index</td>
                        <td className="py-1.5 text-slate-600">Primary</td>
                        <td className="py-1.5 text-slate-600">North London District</td>
                        <td className="py-1.5">
                          <span className="px-1.5 py-0.2 rounded text-[8px] bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                            ● AUDITED
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-medium text-slate-900">Runtime capabilities ledger</td>
                        <td className="py-1.5 text-slate-600">Authorized</td>
                        <td className="py-1.5 text-slate-600">Dublin Republic</td>
                        <td className="py-1.5">
                          <span className="px-1.5 py-0.2 rounded text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            ● ACTIVE
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Row 4: Layer 3 - Alignment */}
              <div className="flex flex-col space-y-1.5 pt-1 border-t border-slate-100">
                <span className="font-mono text-slate-400 text-[9.5px] uppercase font-semibold">
                  LAYER 3 — ALIGNMENT
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Bank-standard segregation", "Technical certificate", "Inspect interfaces", "Account and resource", "Publication class"].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded text-[9.5px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <p className="text-[10px] font-mono text-slate-400 pt-1 leading-snug">
                Adoption path qualifies according to registration environment, operational readiness, customer banking alignment and technical access agreement under single tenant or SaaS scope.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
