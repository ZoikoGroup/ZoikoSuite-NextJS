"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatDoesSolveMeanSection() {
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
            What does &ldquo;solve&rdquo; mean on this page?
          </h3>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            It means governed evaluation and operating support &mdash; helping authorized teams see what requires attention, which sources and policies apply, who may decide, what evidence exists and what the permitted next step is. It does not mean a guaranteed outcome, a professional conclusion, or the automatic resolution of the underlying business problem. Every challenge below carries its own boundary statement.
          </p>

          {/* Mobile-Only Elements (Strictly hidden on lg desktop) */}
          <div className="block lg:hidden mt-5 space-y-4">
            <div className="rounded-xl bg-[#FBF5EC] border border-[#ECD9BA] p-4 flex items-start gap-3 text-left">
              <div className="w-5 h-5 rounded-full border border-[#c5a059] flex items-center justify-center shrink-0 text-[#c5a059] text-[11px] font-bold mt-0.5">
                !
              </div>
              <p className="text-[12px] sm:text-xs text-slate-700 leading-relaxed">
                <strong className="font-semibold text-slate-900">This hub is not ten product pages.</strong> All ten challenges share one proof contract with the same ten fields, so you can compare them on equal terms rather than reading ten differently-shaped pitches. Detail belongs to the child destinations, which are linked only where a registry authorizes them.
              </p>
            </div>

            <div>
              <a
                href="#the-ten-challenges"
                className="text-xs sm:text-[13px] font-semibold text-[#08222F] hover:text-[#0F476A] hover:underline inline-flex items-center gap-1.5"
              >
                Explore the ten challenges &rarr;
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
