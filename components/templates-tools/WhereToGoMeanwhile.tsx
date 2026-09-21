"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhereToGoMeanwhile() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 lg:px-14 flex justify-center">
      <div className="max-w-[1320px] w-full flex flex-col gap-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 pt-2.5">
            <span className="w-4 h-[1.5px] bg-[#D4943A]" />
            <span
              className="text-xs font-medium tracking-widest text-[#D4943A] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Where to go meanwhile
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#101828] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Published destinations that
              <br />
              exist today
            </h2>
            <p
              className="text-[15px] sm:text-lg lg:text-xl text-[#475467] leading-8 mt-1 max-w-[690px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              With no utilities in the catalog, the useful thing this page can do is
              <br />
              route you to material that is actually published.
            </p>
          </div>
        </motion.div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col justify-between h-64">
            <div>
              <span
                className="text-xs font-normal tracking-wider text-[#C2410C] leading-4 block mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Evaluation material
              </span>
              <div className="flex flex-col gap-1">
                <Link
                  href="/executive-resources"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  Executive Resources
                </Link>
                <Link
                  href="/solution-brief"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  Solution Brief
                </Link>
                <Link
                  href="/platform-tour"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  Platform Tour
                </Link>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F0FDF4] border border-[#86EFAC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
                <span
                  className="text-xs font-medium uppercase tracking-wide text-[#166534]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Published
                </span>
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col justify-between h-64">
            <div>
              <span
                className="text-xs font-normal tracking-wider text-[#C2410C] leading-4 block mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Governance and architecture
              </span>
              <div className="flex flex-col gap-1">
                <Link
                  href="/governance-platform"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  Governance Platform
                </Link>
                <Link
                  href="/platform-foundation"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  Platform Foundation
                </Link>
                <Link
                  href="/migration-shadow-mode"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  Migration & Shadow Mode
                </Link>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F0FDF4] border border-[#86EFAC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
                <span
                  className="text-xs font-medium uppercase tracking-wide text-[#166534]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Published
                </span>
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col justify-between h-64">
            <div>
              <span
                className="text-xs font-normal tracking-wider text-[#C2410C] leading-4 block mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Trust and diligence
              </span>
              <div className="flex flex-col gap-1">
                <Link
                  href="/trust-center"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  Trust Center
                </Link>
                <Link
                  href="/security-overview"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  Security Overview
                </Link>
                <Link
                  href="/compliance-overview"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  Compliance Overview
                </Link>
                <Link
                  href="/accessibility"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  Accessibility
                </Link>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F0FDF4] border border-[#86EFAC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
                <span
                  className="text-xs font-medium uppercase tracking-wide text-[#166534]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Published
                </span>
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col justify-between h-64">
            <div>
              <span
                className="text-xs font-normal tracking-wider text-[#C2410C] leading-4 block mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Challenge and industry routes
              </span>
              <div className="flex flex-col gap-1">
                <Link
                  href="/solutions/solve-critical-challenges"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  Solve Critical Challenges
                </Link>
                <Link
                  href="/all-industries"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  All Industries
                </Link>
                <Link
                  href="/industry-solutions"
                  className="px-2 py-1 text-sm font-normal text-[#101828] leading-6 hover:underline"
                >
                  Industry Solutions
                </Link>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F0FDF4] border border-[#86EFAC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
                <span
                  className="text-xs font-medium uppercase tracking-wide text-[#166534]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Published
                </span>
              </span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#F7F5F0] rounded-2xl border border-[#E5E7EB] p-6 flex flex-col justify-between h-64">
            <div>
              <span
                className="text-xs font-normal tracking-wider text-[#C2410C] leading-4 block mb-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Templates & tools
              </span>
              <h3
                className="text-xl font-semibold text-[#54381C] leading-6 mb-2"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                Registry empty
              </h3>
              <p
                className="text-base text-[#475467] leading-6 font-normal"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                No approved utility records exist. Nothing is substituted — no
                sample spreadsheets, no placeholder calculators, no
                representative file names.
              </p>
            </div>
            <div>
              <div className="px-2.5 py-[5px] bg-[#FEF0C7] rounded-[5px] outline outline-1 outline-offset-[-1px] outline-[#D97706] inline-flex justify-start items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#D97706] rounded-[3px]" />
                <div
                  className="justify-center text-[#D97706] text-xs font-medium uppercase leading-4 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  0 published
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#F5EFE6] rounded-2xl border border-[#E5D4B8] p-6 flex flex-col justify-between h-64">
            <div>
              <span
                className="text-xs font-normal tracking-wider text-[#C2410C] leading-4 block mb-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Content boundary
              </span>
              <p
                className="text-base text-[#54381C] leading-6 font-normal"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                Utilities published here support your own planning and
                decision-making. They do not provide legal, tax, accounting, audit
                or other regulated professional advice, and no output constitutes a
                recommendation.
              </p>
            </div>
            <div>
              <div className="px-2.5 py-[5px] bg-[#F5EFE6] rounded-[5px] outline outline-1 outline-offset-[-1px] outline-[#8C7A6B] inline-flex justify-start items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#8C7A6B] rounded-[3px]" />
                <div
                  className="justify-center text-[#8C7A6B] text-xs font-medium uppercase leading-4 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Applies to all utilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}