"use client";

import React from "react";
import { motion } from "framer-motion";

type PatternStatus = "conforms" | "partial" | "testing";

interface PatternRow {
  title: string;
  description: string;
  status: PatternStatus;
}

interface PatternGroup {
  label: string;
  rows: PatternRow[];
}

const groups: PatternGroup[] = [
  {
    label: "Keyboard and focus",
    rows: [
      { title: "Full keyboard operability", description: "Every interactive control reachable and operable by keyboard across complete workflows, not isolated components.", status: "partial" },
      { title: "Visible focus indicator", description: "A persistent, high-contrast focus outline on every focusable element. Focus is never suppressed for aesthetics.", status: "conforms" },
      { title: "Logical focus order", description: "DOM order matches visual order. Focus moves predictably and returns sensibly when a dialog closes.", status: "partial" },
      { title: "Skip link", description: "A skip-to-content link is the first focusable element on every page, visible on focus.", status: "conforms" },
      { title: "No keyboard traps", description: "Focus can always leave a component. Modal focus is contained deliberately and released on close.", status: "conforms" },
    ],
  },
  {
    label: "Screen reader and semantics",
    rows: [
      { title: "Native semantics first", description: "Semantic HTML before ARIA. Headings, landmarks, lists and tables carry real structure rather than styled substitutes.", status: "conforms" },
      { title: "Accessible names", description: "Every control has a programmatic name matching its visible label, including icon-only actions.", status: "partial" },
      { title: "Dynamic announcements", description: "Status changes, filter results and async panels announce through live regions with appropriate politeness.", status: "partial" },
      { title: "Decorative content hidden", description: "Icons and separators that carry no meaning are hidden from assistive technology rather than announced.", status: "conforms" },
    ],
  },
  {
    label: "Visual, contrast, zoom and reflow",
    rows: [
      { title: "Text contrast", description: "Body text meets 4.5:1 against its background. Measured programmatically rather than assumed from a palette.", status: "conforms" },
      { title: "Status never by colour alone", description: "Every status carries a text label. Colour reinforces but never carries the meaning by itself.", status: "conforms" },
      { title: "Reflow at 400% zoom", description: "Content reflows to a single column without horizontal scrolling at 320 CSS pixels equivalent.", status: "partial" },
      { title: "Text spacing", description: "Content remains readable when line height, letter and word spacing are increased by user stylesheet.", status: "testing" },
    ],
  },
];

function Badge({ status }: { status: PatternStatus }) {
  if (status === "conforms") {
    return (
      <span className="inline-flex items-center justify-center px-1.5 pt-0.5 pb-[3px] rounded-sm"
        style={{ backgroundColor: "#EAF3E8", outline: "1px solid #7BA05B", minWidth: "112px" }}>
        <span className="text-[8.5px] font-medium uppercase leading-3 tracking-wide whitespace-nowrap"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#19664C" }}>
          Verified — conforms
        </span>
      </span>
    );
  }
  if (status === "partial") {
    return (
      <span className="inline-flex items-center justify-center px-1.5 pt-0.5 pb-[3px] rounded-sm"
        style={{ backgroundColor: "#FAF5D8", outline: "1px solid #C8A951", minWidth: "104px" }}>
        <span className="text-[8.5px] font-medium uppercase leading-3 tracking-wide whitespace-nowrap"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#826644" }}>
          Verified — partial
        </span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center px-1.5 pt-0.5 pb-[3px] rounded-sm"
      style={{ backgroundColor: "#f6f6f6", outline: "1px solid #829ec8", minWidth: "72px" }}>
      <span className="text-[8.5px] font-medium uppercase leading-3 tracking-wide whitespace-nowrap"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#213966" }}>
        In testing
      </span>
    </span>
  );
}

export default function WhatIsBuiltAndTestedSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-28 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col gap-2.5">

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
            <span className="w-4 h-[1.5px] bg-[#A07A2E]" />
            <span className="text-xs font-medium tracking-widest text-[#A07A2E] uppercase leading-5 font-['JetBrains_Mono']">
              Operability, semantics and visual design
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#101828] leading-[49px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}>
              What is built, and where it is<br />tested
            </h2>
            <p className="text-[15px] sm:text-xl text-[#3a5277] leading-8 mt-3 lg:mt-1"
              style={{ fontFamily: "'Archivo', sans-serif" }}>
              Each pattern carries its own status. This page follows every one of<br />
              them, so you can verify the claims on the page you are reading.
            </p>
          </div>
        </motion.div>

        {/* Grouped rows */}
        {groups.map((group, gIndex) => (
          <React.Fragment key={group.label}>
            {/* Category label */}
            <div className={gIndex === 0 ? "pt-11" : "pt-2.5"}>
              <span className="text-xs font-normal uppercase leading-5 tracking-wide text-[#3a5277]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {group.label}
              </span>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-1.5">
              {group.rows.map((row, index) => (
                <motion.div
                  key={row.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (gIndex * 5 + index) * 0.03 }}
                  className="bg-white rounded-lg px-3.5 py-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-3.5"
                  style={{ outline: "1px solid #c5d4e8" }}
                >
                  {/* Title */}
                  <div className="md:w-48 shrink-0">
                    <h3 className="text-xs font-bold text-[#101828] leading-5"
                      style={{ fontFamily: "'Archivo', sans-serif" }}>
                      {row.title}
                    </h3>
                  </div>
                  {/* Description */}
                  <div className="flex-1">
                    <p className="text-xs text-[#3a5277] leading-4"
                      style={{ fontFamily: "'Archivo', sans-serif" }}>
                      {row.description}
                    </p>
                  </div>
                  {/* Badge */}
                  <div className="shrink-0 self-start md:self-center">
                    <Badge status={row.status} />
                  </div>
                </motion.div>
              ))}
            </div>
          </React.Fragment>
        ))}

      </div>
    </section>
  );
}
