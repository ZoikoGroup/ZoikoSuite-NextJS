"use client";

import React from "react";
import { motion } from "framer-motion";

interface DetailBlock {
  title: string;
  description: string;
  badge: string;
}

const blocks: DetailBlock[] = [
  {
    title: "Intended use",
    description:
      "The task this asset supports, and just as importantly the situations it is not built for.",
    badge: "Required block",
  },
  {
    title: "Prerequisites",
    description:
      "What you need before starting — inputs, access, roles involved, or prior work.",
    badge: "Required block",
  },
  {
    title: "Owner and currentness",
    description:
      "Named owner, version or last-reviewed date, and review cadence.",
    badge: "Required block",
  },
  {
    title: "Access and format",
    description:
      "Access state, execution mode, and the file record where a download exists.",
    badge: "Required block",
  },
  {
    title: "Methodology and limitations",
    description:
      "For anything that calculates: assumptions, units, boundaries and what the output does not tell you.",
    badge: "Required where applicable",
  },
  {
    title: "Data handling",
    description:
      "What happens to anything you enter — where it goes, whether it is retained, and who can see it.",
    badge: "Required for interactive",
  },
];

export default function AssetDetailContract() {
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
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Asset detail contract
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#101828] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              What a detail page must answer
              <br />
              before you act
            </h2>
            <p
              className="text-[15px] sm:text-lg lg:text-xl text-[#646E75] leading-8 mt-1 lg:whitespace-nowrap"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Fit and prerequisites come before the action. A visitor should be
              <br />
              able to decide the asset is wrong for them without downloading it.
            </p>
          </div>
        </motion.div>

        {/* Rows */}
        <div className="flex flex-col gap-2">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-tr-lg rounded-br-lg border-l-[3px] border-l-[#2A6386] border-r border-t border-b border-[#c5d4e8] px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="w-44 shrink-0">
                <h3
                  className="text-sm font-bold text-[#101828] leading-5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {block.title}
                </h3>
              </div>
              <div className="flex-1">
                <p
                  className="text-xs text-[#475467] leading-5 font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {block.description}
                </p>
              </div>
              <div className="shrink-0">
                <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-sm bg-[#ECF8E8] border border-[#9AC2B8]">
                  <span
                    className="text-[8.50px] font-medium uppercase leading-3 tracking-wide text-[#126B40] whitespace-nowrap"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {block.badge}
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
