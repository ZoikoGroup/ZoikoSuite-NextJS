"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatDoesZoikoSuiteProvideSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#08222F] py-14 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[980px] rounded-2xl border border-[#c5a059]/80 bg-white p-7 sm:p-10 shadow-sm"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#08222F] tracking-tight mb-4">
            What does ZoikoSuite provide for General Counsel?
          </h3>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            ZoikoSuite for General Counsel connects contracts, obligations, jurisdiction context, policies, delegated authority, human decisions and evidence to governed business execution. It helps legal and business teams understand what requires review, why it matters and which approved path comes next. ZoikoSuite does not provide legal advice or replace qualified counsel.
          </p>

          {/* Mobile Only: Amber Callout Box & Direct Jump Link */}
          <div className="block lg:hidden mt-4 text-left">
            <div className="rounded-xl bg-[#FFFBEB] border border-[#FDE68A] p-3.5 sm:p-4 flex items-start gap-2.5">
              <svg
                className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-[11px] leading-relaxed text-[#78350F]">
                <strong className="font-semibold text-[#92400E]">Four claims this page will not make:</strong>{" "}
                It does not provide legal advice, does not determine legal privilege, does not claim universal jurisdiction coverage, and never concedes to a statutory admissibility test does any interface element grant autonomous authority &mdash; material decisions require an authorized human setting, anchored to a governance source.
              </p>
            </div>

            <div className="mt-3.5">
              <a
                href="#authority-model"
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0284c7] hover:text-[#0369a1] hover:underline"
              >
                <span>See the two-layer authority model &rarr;</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
