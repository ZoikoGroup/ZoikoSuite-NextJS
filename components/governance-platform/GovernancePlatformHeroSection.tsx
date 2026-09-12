"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function GovernancePlatformHeroSection() {
  return (
    <section className="w-full bg-[#08222F] text-white pt-10 sm:pt-12 lg:pt-20 pb-16 lg:pb-28 px-4 sm:px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Mobile-Only Breadcrumbs */}
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
          <span className="text-white font-medium">Governance Platform</span>
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
                GOVERNANCE PLATFORM
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-bold text-white tracking-tight leading-[1.12] mb-6 sm:mb-7">
              Put governance inside every material business action
            </h1>

            {/* Description */}
            <p className="text-[#9ba4b5] text-[14px] sm:text-base leading-[1.65] max-w-[500px] mb-8 font-normal">
              Policy, jurisdiction context, approvals, delegated authority,
              segregation of duties, evidence, audit readiness, governed AI and
              analytics — evaluated around the action itself, not filed away as
              documents.
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

          {/* Right Column: Desktop Graphic (gp1.png) - PRESERVED UNTOUCHED FOR DESKTOP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-6 justify-center lg:justify-end"
          >
            <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-2xl bg-transparent">
              <Image
                src="/governance-platform/gp1.png"
                alt="Governance platform operational controls hub illustration"
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

          {/* 4 Feature Badges */}
          <div className="flex flex-wrap gap-2">
            {[
              "POLICY-AWARE",
              "HUMAN-ACCOUNTABLE",
              "RECORD-EVIDENT",
              "SOURCE-QUALIFIED",
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
            <p className="text-[#8ba2b2] text-[11.5px] leading-relaxed">
              Exact capability availability, jurisdiction coverage and
              implementation behavior depend on approved product and deployment
              status. No certification, guaranteed compliance or regulated-outcome
              claim is made on this page.
            </p>
          </div>

          {/* Mobile Interactive Decision Workspace Mockup Card */}
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
                GOVERNANCE DECISION WORKSPACE
              </span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold tracking-wider bg-[#FDF2D6] text-amber-900 border border-[#E8C882]">
                  ILLUSTRATIVE — FICTITIOUS DATA
                </span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                </div>
              </div>
            </div>

            {/* Inner White Decision Card */}
            <div className="bg-white text-slate-900 p-4 sm:p-5 flex flex-col">
              {/* Header Title */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 border-b border-slate-100 gap-1">
                <h3 className="text-[15px] font-bold text-[#0f172a]">
                  Supplier bank-detail change
                </h3>
                <span className="text-[11px] font-mono text-slate-500">
                  ACT-081 · Northstar UK Ltd · United Kingdom
                </span>
              </div>

              {/* 4 Status Quadrants */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
                {/* Quadrant 1: SOURCE STATUS */}
                <div className="p-3 rounded-lg border border-slate-200/80 bg-slate-50/50 flex flex-col gap-1">
                  <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    SOURCE STATUS
                  </span>
                  <div className="text-[11px] text-slate-700">
                    <span className="text-slate-500">Trigger:</span> Supplier master change request
                  </div>
                  <div className="text-[11px] text-slate-700 flex items-center gap-1.5">
                    <span className="text-slate-500">Source:</span> Procurement · V3 ·
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[8.5px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      ● CURRENT
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-700">
                    <span className="text-slate-500">Requested:</span> Creditor account change
                  </div>
                </div>

                {/* Quadrant 2: POLICY RESULT */}
                <div className="p-3 rounded-lg border border-slate-200/80 bg-slate-50/50 flex flex-col gap-1">
                  <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    POLICY RESULT
                  </span>
                  <div className="text-[11px] text-slate-700 flex items-center justify-between">
                    <span>POL-081-32</span>
                    <span className="px-1.5 py-0.2 rounded text-[8.5px] font-mono font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                      ■ BLOCKING
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-700 flex items-center justify-between">
                    <span>SoD Rule</span>
                    <span className="px-1.5 py-0.2 rounded text-[8.5px] font-mono font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                      ■ CONFLICT
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-700 flex items-center justify-between">
                    <span>Jurisdiction</span>
                    <span className="px-1.5 py-0.2 rounded text-[8.5px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      ● COVERED - UK
                    </span>
                  </div>
                </div>

                {/* Quadrant 3: AUTHORITY AND DELEGATION */}
                <div className="p-3 rounded-lg border border-slate-200/80 bg-slate-50/50 flex flex-col gap-1">
                  <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    AUTHORITY AND DELEGATION
                  </span>
                  <div className="text-[11px] text-slate-700">
                    <span className="text-slate-500">Approver:</span> Treasury authority &gt; $50k reqd
                  </div>
                  <div className="text-[11px] text-slate-700 flex items-center justify-between mt-0.5">
                    <span className="text-slate-500">Segregation:</span>
                    <span className="px-1.5 py-0.2 rounded text-[8.5px] font-mono font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                      ! REQUESTER EXCLUDED
                    </span>
                  </div>
                </div>

                {/* Quadrant 4: EVIDENCE */}
                <div className="p-3 rounded-lg border border-slate-200/80 bg-slate-50/50 flex flex-col gap-1">
                  <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    EVIDENCE
                  </span>
                  <div className="text-[11px] text-slate-700 flex items-center justify-between">
                    <span className="text-slate-500">Received:</span>
                    <span className="font-semibold text-slate-800">4 of 5</span>
                  </div>
                  <div className="text-[11px] text-slate-700 flex items-center justify-between">
                    <span className="text-slate-500">Missing:</span>
                    <span className="px-1.5 py-0.2 rounded text-[8.5px] font-mono font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                      ! BANK VERIFICATION
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-700">
                    <span className="text-slate-500">Restricted:</span> 3 days
                  </div>
                </div>
              </div>

              {/* Warning Banner */}
              <div className="bg-[#FEF9EE] border border-[#F3DFB5] rounded-lg p-2.5 flex items-start gap-2 text-[11px] text-amber-900 leading-snug my-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Control outcome: evidence required.</strong> Two independent reasons block progression. This is a machine-evaluated outcome, not an authorization.
                </span>
              </div>

              {/* Human Decision Box */}
              <div className="border border-[#93c5fd]/70 bg-[#eff6ff]/30 rounded-lg p-3 my-1.5 flex flex-col gap-1">
                <span className="text-[9.5px] font-mono font-bold text-blue-900 uppercase tracking-wider mb-0.5">
                  HUMAN DECISION — SEPARATE AND ATTRIBUTABLE
                </span>
                <div className="text-[11px] text-slate-700">
                  <span className="text-slate-500">Status:</span> Awaiting authorized reviewer
                </div>
                <div className="text-[11px] text-slate-700">
                  <span className="text-slate-500">Assigned:</span> Maya Chen · Treasury Director
                </div>
                <div className="text-[11px] text-slate-600">
                  <span className="text-slate-500">Permitted:</span> Request evidence · escalate · reject · record exception
                </div>
              </div>

              {/* Footer Note */}
              <p className="text-[10px] text-slate-400 mt-2 italic leading-relaxed">
                The control outcome and the human decision are stored as separate records. A control outcome never constitutes authorization on its own.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
