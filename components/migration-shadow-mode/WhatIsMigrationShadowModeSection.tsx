"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatIsMigrationShadowModeSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#08222F] py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[980px] rounded-2xl border border-[#c5a059]/80 bg-white p-6 sm:p-8 lg:p-10 shadow-sm text-left"
        >
          {/* Heading */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#08222F] tracking-tight mb-4">
            What is ZoikoSuite Migration &amp; Shadow Mode?
          </h3>

          {/* Paragraph */}
          <p className="text-xs sm:text-sm lg:text-[15px] text-slate-700 leading-relaxed font-normal mb-5">
            ZoikoSuite Migration &amp; Shadow Mode is a controlled adoption approach for mapping current systems and responsibilities, validating data, controls, integrations and evidence, and comparing proposed ZoikoSuite behaviour with current operation before production activation. Shadow Mode does not itself authorize live actions. Activation, recovery, timelines and replacement scope require customer-specific validation, accountable approval and implementation planning.
          </p>

          {/* Extra Alert Box - MOBILE ONLY (lg:hidden) */}
          <div className="block lg:hidden border border-rose-300 bg-rose-50/40 rounded-xl p-4 mb-5">
            <div className="flex items-center gap-2 mb-2 text-rose-800">
              <span className="text-sm">⚠</span>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase">
                WHAT THIS PAGE IS NOT
              </span>
            </div>
            <p className="text-xs text-rose-950/80 leading-relaxed">
              This is not a file uploader, an ETL wizard, a progress bar or a generic implementation brochure. Migration here is a governed operating transition, and every product view on this page runs on bundled synthetic fixtures with no live action available.
            </p>
          </div>

          {/* Extra Explore Link - MOBILE ONLY (lg:hidden) */}
          <div className="block lg:hidden">
            <Link
              href="#adoption-model"
              className="inline-flex items-center text-xs font-semibold text-[#08222F] hover:text-[#c5a059] transition-colors"
            >
              Explore the adoption model &rarr;
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
