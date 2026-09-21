"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AccessibilityStatusScopeSection() {
  return (
    <section
      id="current-status"
      className="w-full bg-white py-16 sm:py-24 px-6 lg:px-14 flex justify-center"
    >
      <div className="max-w-[1320px] w-full flex flex-col gap-4">
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
            <span className="w-5 h-[1.5px] bg-[#A07A2E]" />
            <span className="text-xs font-medium tracking-widest text-[#A07A2E] uppercase leading-5 font-['JetBrains_Mono']">
              CURRENT STATUS AND SCOPE
            </span>
          </div>
          {/* Heading left — WCAG text right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight shrink-0" style={{ fontFamily: 'Inter, sans-serif' }}>
              Seven statuses, because<br />conformance is not binary
            </h2>
            <p className="text-[15px] sm:text-xl text-[#3a5277] leading-8 mt-3 lg:mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              WCAG is a technical standard, not a certification programme.<br />
              Conformance claims are the responsibility of the content provider,<br />
              so each scope carries its own evaluated status.
            </p>
          </div>
        </motion.div>

        {/* Status legend image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden mt-4"
        >
          <Image
            src="/accessibility/oi.png"
            alt="Legend of the seven evaluated conformance statuses and their scopes"
            width={1224}
            height={612}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
