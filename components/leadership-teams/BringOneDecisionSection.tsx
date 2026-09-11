"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BringOneDecisionSection() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#1E5B80]">
      <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#d4a853]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#d4a853] uppercase">
              PILOT TEST
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.18] mb-6">
            Bring one decision your team cannot currently evidence
          </h2>

          {/* Body Description */}
          <p className="text-sm sm:text-base text-[#D4E4ED] leading-relaxed mb-8">
            The most realistic pilot for ZoikoSuite starts from a single real-life
            decision — one where nobody would want to acknowledge who made what
            under what authority, against which policy version, with what
            supporting evidence. We will walk that decision through the journal
            record with you.
          </p>

          {/* Callout Box */}
          <div className="border-l-2 border-[#d4a853] pl-4 sm:pl-5 py-2">
            <p className="text-xs sm:text-sm text-[#D4E4ED]/90 leading-relaxed italic">
              An honest, 90-day pilot test is carefully structured with clear
              criteria and a plan for full institutional rollout.
            </p>
          </div>

          {/* Link: Explore a governance pilot overview */}
          <div className="pt-6">
            <Link
              href="/platform-tour"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D0AA55] hover:text-[#e0bc68] transition-colors"
            >
              <span>Explore a governance pilot overview</span>
              <span>→</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Column - Illustration Image (Desktop Only, hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-6 hidden lg:flex items-center justify-center"
        >
          <div className="w-full max-w-[560px] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-transparent flex items-center justify-center p-0">
            <Image
              src="/leadership-terms/lt6.png"
              alt="Leadership team evidencing complex operational decisions"
              width={600}
              height={600}
              priority
              className="w-full h-auto object-cover rounded-2xl block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
