"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileSourceCurrencyRollupView from "./MobileSourceCurrencyRollupView";

export default function SourceCurrencyFirstSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                MULTI-ENTITY ROLLUP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Source currency first, and no clean rollup over stale data
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Where an explicit rate is absent or a source is stale, the group figure shows a partial or unknown state rather than a tidy total.
            </p>
          </motion.div>
        </div>

        {/* Desktop View: Banner Image (strictly hidden on mobile, visible on lg) */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200/80 bg-white"
          >
            <div className="relative w-full aspect-[16/8] sm:aspect-[16/7] lg:aspect-[2.2/1]">
              <Image
                src="/cfos/cf6.png"
                alt="Source currency consolidation workflow map showing multi-jurisdiction rollup"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1240px) 100vw, 1240px"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile View: Group Finance Rollup Matrix (strictly visible on mobile, hidden on lg desktop) */}
        <div className="block lg:hidden w-full">
          <MobileSourceCurrencyRollupView />
        </div>
      </div>
    </section>
  );
}
