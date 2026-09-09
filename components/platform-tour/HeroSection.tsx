"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* Mobile-only Breadcrumb Bar */}
      <div className="lg:hidden w-full bg-[#f8fafc] border-b border-[#e2e8f0] px-6 py-2.5 text-xs text-[#64748b]">
        <div className="flex items-center gap-1.5 font-medium">
          <Link href="/" className="hover:text-[#08222F]">
            Home
          </Link>
          <span>/</span>
          <Link href="/platform-overview" className="hover:text-[#08222F]">
            Platform
          </Link>
          <span>/</span>
          <span className="text-[#08222F] font-semibold">Platform Tour</span>
        </div>
      </div>

      <section className="w-full bg-[#08222F] text-white pt-12 lg:pt-20 pb-20 lg:pb-28 px-6 lg:px-20 flex justify-center">
        <div className="max-w-[1240px] w-full flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Heading, Subtitle & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-5 h-[2px] bg-[#c5a059]" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-[#c5a059] uppercase">
                  PLATFORM TOUR
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08] mb-7">
                See governed
                <br />
                business
                <br />
                operations in
                <br />
                context.
              </h1>

              {/* Description */}
              <p className="text-[#9ba4b5] text-[15px] sm:text-base leading-[1.65] max-w-[500px] mb-8 lg:mb-10 font-normal">
                Follow one fictitious business action across systems, entities,
                jurisdictions, policies, delegated authority, human review, evidence,
                governed AI, controlled execution and assurance — without
                connecting to customer systems or performing live actions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <a
                  href="#choose-tour-path"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-[13px] hover:bg-[#c29c4c] transition-all duration-200 shadow-sm"
                >
                  <span>Start guided tour</span>
                  {/* ArrowRight on mobile to match mobile reference, Plus on desktop */}
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] lg:hidden" />
                  <Plus className="w-3.5 h-3.5 stroke-[2.5] hidden lg:block" />
                </a>

                <a
                  href="#choose-tour-path"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0d2a3a] text-white font-medium text-[13px] border border-[#1e445b] hover:bg-[#12364a] transition-all duration-200 shadow-sm"
                >
                  Choose a tour path
                </a>
              </div>

              {/* Mobile-only secondary text link */}
              <div className="lg:hidden mb-7">
                <a
                  href="/platform/deployment"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D0AA55] hover:underline"
                >
                  <span>Talk to a solutions architect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Mobile-only Pill and Subtext */}
              <div className="lg:hidden flex flex-col items-start gap-3 mb-8 w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#bfa054]/50 bg-[#162934] text-[10.5px] font-mono tracking-[0.14em] text-[#e8c679] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e8c679]" />
                  <span>FICTITIOUS EVALUATION ENVIRONMENT</span>
                </div>
                <p className="text-[11.5px] font-mono text-[#758e9f] leading-relaxed">
                  Example interaction only. No live customer data or business action.
                </p>
              </div>

              {/* Mobile-only Preview Terminal Card (GOVERNED ACTION REVIEW) */}
              <div className="lg:hidden w-full rounded-2xl overflow-hidden border border-[#213f52] bg-[#0c1f2b] shadow-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e2736] border-b border-[#1b3546]">
                  <span className="text-[10px] font-mono tracking-[0.15em] text-[#557b91] uppercase">
                    GOVERNED ACTION REVIEW • ACT-001 • EXAMPLE PREVIEW
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3d5d70]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3d5d70]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3d5d70]" />
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="bg-white text-[#0f172a] p-4 sm:p-5">
                  {/* Top Row: Title + Scope + Awaiting review tag */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-[#edf1f4] mb-4">
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#08222F]">
                        Supplier bank-detail change review
                      </h4>
                      <p className="text-[10.5px] text-[#64748b]">
                        Alderson Components Ltd • NorthStar UK Ltd • United Kingdom
                      </p>
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-[#d6b772] bg-[#fbf5e8] text-[9.5px] font-mono font-bold text-[#a67a24] uppercase">
                        <span className="w-1 h-1 rounded-full bg-[#a67a24]" />
                        AWAITING REVIEW
                      </span>
                    </div>
                  </div>

                  {/* 4 Proof Subcards (2x2 grid) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {/* Proof 01 */}
                    <div className="rounded-xl border border-[#e2eaf0] bg-[#fafcfe] p-3">
                      <span className="text-[9px] font-mono font-bold tracking-[0.15em] text-[#8ea4b2] uppercase block mb-1">
                        PROOF 01
                      </span>
                      <h5 className="text-[11.5px] font-bold text-[#08222F] mb-1">
                        Context
                      </h5>
                      <p className="text-[10px] text-[#64748b] leading-relaxed">
                        Object, entity jurisdiction and supplier resolved before evaluation.
                      </p>
                    </div>

                    {/* Proof 02 */}
                    <div className="rounded-xl border border-[#e2eaf0] bg-[#fafcfe] p-3">
                      <span className="text-[9px] font-mono font-bold tracking-[0.15em] text-[#8ea4b2] uppercase block mb-1">
                        PROOF 02
                      </span>
                      <h5 className="text-[11.5px] font-bold text-[#08222F] mb-1">
                        Policy & authority
                      </h5>
                      <p className="text-[10px] text-[#64748b] leading-relaxed">
                        POL-001 v3 matched • AUTH-003 approval matrix applied.
                      </p>
                    </div>

                    {/* Proof 03 */}
                    <div className="rounded-xl border border-[#e2eaf0] bg-[#fafcfe] p-3">
                      <span className="text-[9px] font-mono font-bold tracking-[0.15em] text-[#8ea4b2] uppercase block mb-1">
                        PROOF 03
                      </span>
                      <h5 className="text-[11.5px] font-bold text-[#08222F] mb-1">
                        Evidence
                      </h5>
                      <p className="text-[10px] text-[#64748b] leading-relaxed">
                        Required, received and missing items shown as counts.
                      </p>
                    </div>

                    {/* Proof 04 */}
                    <div className="rounded-xl border border-[#e2eaf0] bg-[#fafcfe] p-3">
                      <span className="text-[9px] font-mono font-bold tracking-[0.15em] text-[#8ea4b2] uppercase block mb-1">
                        PROOF 04
                      </span>
                      <h5 className="text-[11.5px] font-bold text-[#08222F] mb-1">
                        Decision state
                      </h5>
                      <p className="text-[10px] text-[#64748b] leading-relaxed">
                        Human review pending. No approval has occurred.
                      </p>
                    </div>
                  </div>

                  {/* Terminal Footer Caption */}
                  <p className="text-[9.5px] font-mono text-[#8fa1ae] leading-relaxed">
                    Static preview. No lurker tracking, autoplay or timed animation is used anywhere in this tour.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Isometric 3D Platform Diagram (Desktop Only, matching mobile design reference where preview terminal replaces it on mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="hidden lg:flex lg:col-span-6 justify-center lg:justify-end"
            >
              <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-2xl bg-transparent">
                <Image
                  src="/platform-tour/pt1.png"
                  alt="Governed business operations 3D isometric overview"
                  width={680}
                  height={667}
                  priority
                  className="w-full h-auto object-contain rounded-2xl block"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
