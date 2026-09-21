"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const methodItems: { bold: string; text: string }[] = [
  { bold: "Automated checks", text: " in the build pipeline on every release" },
  { bold: "Manual keyboard testing", text: " across complete workflows" },
  { bold: "Screen reader testing", text: " on the combinations listed opposite" },
  { bold: "Zoom and reflow", text: " at 200% and 400%" },
  { bold: "Contrast verification", text: " measured programmatically" },
  { bold: "Regression gate", text: " before release for previously fixed issues" },
];

const cadenceItems: string[] = [
  "Automated: every build",
  "Manual keyboard: every release candidate",
  "Screen reader: quarterly, plus on changed workflows",
  "Full evaluation: annually per scope",
  "Named accessibility owner per product area",
];

export default function TestingAndAssistiveTechnologySection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 lg:px-14 flex justify-center">
      <div className="max-w-[1320px] w-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-[42px]"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 pt-2.5">
            <span className="w-4 h-[1.5px] bg-[#A07A2E]" />
            <span
              className="text-xs font-medium tracking-widest text-[#A07A2E] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              TESTING AND ASSISTIVE TECHNOLOGY
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#101828] leading-[49px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Method, cadence and what is<br />
              actually covered
            </h2>
            <p
              className="text-[15px] sm:text-xl text-[#3a5277] leading-8 mt-3 lg:mt-1 max-w-[600px] w-full"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Automated checks alone catch a minority of barriers. The
              <br />
              combinations below are what we test against, with their coverage
              <br />
              status.
            </p>
          </div>
        </motion.div>

        {/* Method and cadence cards side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[40px]">
          {/* Method card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-white rounded-2xl border border-[#c5d4e8] p-7 flex flex-col gap-3"
          >
            <span
              className="text-xs font-normal uppercase tracking-wide text-[#3a5277]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Method
            </span>
            <div className="pt-2 pb-3.5 flex flex-col justify-start items-start">
              <ul className="pl-4 flex flex-col gap-2 list-disc w-full">
                {methodItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-[#101828] leading-6 font-normal"
                    style={{ fontFamily: "'Archivo', sans-serif" }}
                  >
                    <strong className="font-bold">{item.bold}</strong>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Cadence card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-[#c5d4e8] p-7 flex flex-col gap-3"
          >
            <span
              className="text-xs font-normal uppercase tracking-wide text-[#3a5277]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Cadence and ownership
            </span>
            <div className="pt-2 pb-3.5 flex flex-col justify-start items-start">
              <ul className="pl-4 flex flex-col gap-2 list-disc w-full">
                {cadenceItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-[#101828] leading-6 font-normal"
                    style={{ fontFamily: "'Archivo', sans-serif" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* AT combinations image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-xl border border-[#c5d4e8] overflow-hidden"
        >
          <Image
            src="/accessibility/po.png"
            alt="Assistive technology and browser combinations covered by testing, with coverage status"
            width={1224}
            height={612}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}