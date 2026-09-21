"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MethodologyDataHandling() {
  return (
    <section className="w-full bg-[#F8F6F1] py-16 sm:py-24 px-6 lg:px-14 flex justify-center">
      <div className="max-w-[1320px] w-full flex flex-col gap-14">
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
            <span className="w-4 h-[1.5px] bg-[#A7882C]" />
            <span
              className="text-xs font-medium tracking-widest text-[#A7882C] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Methodology, data handling and privacy
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 w-full">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#0D2636] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Where your inputs go
            </h2>
            <p
              className="text-[15px] sm:text-lg lg:text-xl text-[#3E5A6B] leading-8 mt-1 max-w-[690px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Anything that accepts input must declare its data flow before you
              <br />
              use it, not after.
            </p>
          </div>
        </motion.div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex-1 px-7 py-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-200 flex flex-col justify-between gap-4"
          >
            <div className="flex flex-col gap-3">
              <span
                className="text-xs font-normal uppercase leading-5 tracking-wide text-[#3E5A6B]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Methodology disclosure
              </span>
              <ul className="flex flex-col gap-3 list-disc pl-5 pt-2 marker:text-[#0D2636]">
                <li
                  className="text-sm text-[#0D2636] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Formula or logic described in plain terms
                </li>
                <li
                  className="text-sm text-[#0D2636] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Every assumption stated explicitly
                </li>
                <li
                  className="text-sm text-[#0D2636] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Units and boundaries defined
                </li>
                <li
                  className="text-sm text-[#0D2636] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Known limitations published with the tool
                </li>
                <li
                  className="text-sm text-[#0D2636] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Calculation version shown on every result
                </li>
              </ul>
            </div>
            <div className="pt-3">
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-sm bg-[#F0FDF4] outline outline-1 outline-offset-[-1px] outline-[#86EFAC]">
                <span
                  className="text-[8.50px] font-medium uppercase leading-3 tracking-wide text-[#166534]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Required for interactive
                </span>
              </span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 px-7 py-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-200 flex flex-col justify-between gap-4"
          >
            <div className="flex flex-col gap-3">
              <span
                className="text-xs font-normal uppercase leading-5 tracking-wide text-[#3E5A6B]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Data handling
              </span>
              <ul className="flex flex-col gap-3 list-disc pl-5 pt-2 marker:text-[#0D2636]">
                <li
                  className="text-sm text-[#0D2636] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Whether inputs are processed in the browser or
                  <br />
                  sent to a server
                </li>
                <li
                  className="text-sm text-[#0D2636] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Whether anything is retained, and for how long
                </li>
                <li
                  className="text-sm text-[#0D2636] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Whether results are stored or shared
                </li>
                <li
                  className="text-sm text-[#0D2636] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  What is included if you export a result
                </li>
                <li
                  className="text-sm text-[#0D2636] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Saving and reuse only with explicit opt-in
                </li>
              </ul>
            </div>
            <div className="pt-3">
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-sm bg-[#F0FDF4] outline outline-1 outline-offset-[-1px] outline-[#86EFAC]">
                <span
                  className="text-[8.50px] font-medium uppercase leading-3 tracking-wide text-[#166534]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Required before input
                </span>
              </span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex-1 px-7 py-7 bg-[#F5EFE6] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#EADAB8] flex flex-col justify-between gap-4"
          >
            <div className="flex flex-col gap-3">
              <span
                className="text-xs font-normal uppercase leading-5 tracking-wide text-[#C2410C]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Not claimed anywhere
              </span>
              <ul className="flex flex-col gap-3 list-disc pl-5 pt-2 marker:text-[#9A3412]">
                <li
                  className="text-sm text-[#9A3412] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Benchmark or industry-average figures
                </li>
                <li
                  className="text-sm text-[#9A3412] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  ROI, savings or payback estimates
                </li>
                <li
                  className="text-sm text-[#9A3412] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Maturity or readiness scores
                </li>
                <li
                  className="text-sm text-[#9A3412] leading-6 font-normal pl-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Compatibility with a product or version not sourced
                  <br />
                  from the registry
                </li>
              </ul>
              <p
                className="text-xs text-[#9A3412] leading-5 font-normal pt-2"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                None has approved evidence behind it.
              </p>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-sm bg-[#F2F4F7] outline outline-1 outline-offset-[-1px] outline-[#D0D5DD]">
                <span
                  className="text-[8.50px] font-medium uppercase leading-3 tracking-wide text-[#344054]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Not published
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
