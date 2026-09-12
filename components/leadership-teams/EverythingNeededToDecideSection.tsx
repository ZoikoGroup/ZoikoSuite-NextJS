"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileDecisionPacketRecord from "./MobileDecisionPacketRecord";

export default function EverythingNeededToDecideSection() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#1E5B80]">
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
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                DECISION RECORD
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              Everything needed to decide, in one record
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-[#9ba4b5] leading-relaxed">
              This is the differentiating artifact. Not a notification and not a dashboard tile — a complete, attributable decision context that leaves no loose ends.
            </p>
          </motion.div>
        </div>

        {/* Mobile View: Interactive Decision Packet Record (Hidden on lg desktop) */}
        <div className="w-full block lg:hidden">
          <MobileDecisionPacketRecord />
        </div>

        {/* Desktop View: Visual Illustration lt2.png (Hidden on mobile, strictly flex on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full rounded-2xl overflow-hidden shadow-2xl bg-transparent hidden lg:flex items-center justify-center"
        >
          <Image
            src="/leadership-terms/lt2.png"
            alt="Everything needed to decide in one record illustration"
            width={1240}
            height={680}
            priority
            className="w-full h-auto object-contain rounded-2xl block"
          />
        </motion.div>
      </div>
    </section>
  );
}
