"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileEntityDrilldownCard from "./MobileEntityDrilldownCard";

export default function AggregateContextSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase">
                MULTI-ENTITY LEDGER/TREE VIEW
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Aggregate → entity → object → source
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
              Every aggregate states its scope and denominator and drills to the records behind it, within permission. There is no opaque group-level record at any level.
            </p>
          </motion.div>
        </div>

        {/* Mobile View: Entity Drilldown Table Card (Strictly hidden on desktop) */}
        <div className="w-full block lg:hidden">
          <MobileEntityDrilldownCard />
        </div>

        {/* Desktop View: Visual Illustration (Strictly desktop only) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-white p-2 sm:p-4 hidden lg:flex items-center justify-center"
        >
          <Image
            src="/leadership-terms/lt6.png"
            alt="Aggregate cross-functional operational context illustration"
            width={1240}
            height={680}
            priority
            className="w-full h-auto object-contain rounded-xl block max-h-[580px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
