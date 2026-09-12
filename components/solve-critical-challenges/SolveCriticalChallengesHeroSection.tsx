"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileChallengeCommandCenter from "./MobileChallengeCommandCenter";

export default function SolveCriticalChallengesHeroSection() {
  return (
    <section className="w-full bg-[#08222F] text-white pt-12 lg:pt-20 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Eyebrow Breadcrumb */}
        <div className="flex items-center gap-2 mb-4 sm:mb-5">
          <span className="w-5 h-[2px] bg-[#c5a059]" />
          <span className="text-[11px] font-semibold tracking-[0.22em] text-[#c5a059] uppercase font-mono">
            SOLUTIONS / SOLVE CRITICAL CHALLENGES
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left Column: Heading, Paragraph & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.14] mb-6 sm:mb-7">
              Solve critical challenges without separating execution from governance
            </h1>

            {/* Description */}
            <p className="text-[#9ba4b5] text-[14px] sm:text-base leading-[1.65] max-w-[520px] mb-8 font-normal">
              Recognize the operating challenge you are facing, then evaluate whether a governed operating model &mdash; with explicit sources, authority, evidence and human accountability &mdash; is relevant to your approved scope.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/platform-tour"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-[13px] hover:bg-[#c29c4c] transition-all duration-200 shadow-sm"
              >
                <span>Book enterprise demo →</span>
              </Link>
              <Link
                href="#the-ten-challenges"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-[13px] transition-all duration-200 bg-[#08222F]/60"
              >
                <span>Explore the challenges</span>
              </Link>
            </div>

            {/* Mobile-Only Elements: Command Center & Status (Strictly hidden on lg desktop) */}
            <div className="w-full block lg:hidden">
              <MobileChallengeCommandCenter />
            </div>
          </motion.div>

          {/* Right Column: Graphic (scc1.png) - Strictly Desktop Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 hidden lg:flex justify-center lg:justify-end w-full"
          >
            <div className="w-full max-w-[540px] rounded-2xl overflow-hidden shadow-2xl bg-transparent">
              <Image
                src="/solve-critical-challange/scc1.png"
                alt="Solve critical challenges without separating execution from governance"
                width={800}
                height={800}
                priority
                className="w-full h-auto object-contain rounded-2xl block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
