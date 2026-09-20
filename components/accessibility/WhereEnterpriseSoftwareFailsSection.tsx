"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardItem {
  heading: string;
  items: { text: string; bold?: string }[];
}

const cards: CardItem[] = [
  {
    heading: "MOTION, TIMING AND INPUT",
    items: [
      { text: "Reduced-motion preference respected; no essential information conveyed by motion" },
      { text: "No auto-playing media or carousels that move without user control" },
      { bold: "Session timeouts warn before expiry", text: " with an option to extend" },
      { text: "Pointer gestures have a single-pointer alternative" },
      { text: "Minimum 44×44 touch targets" },
    ],
  },
  {
    heading: "FORMS, ERRORS AND AUTHENTICATION",
    items: [
      { text: "Persistent visible labels, never placeholder-only" },
      { text: "Related fields grouped with a programmatic group name" },
      { text: "Errors identified in text, associated with their field, and summarised" },
      { bold: "Entered data preserved on error", text: " — never cleared" },
      { text: "No cognitive-function test required to authenticate without an alternative" },
    ],
  },
  {
    heading: "TABLES, CHARTS AND REPORTS",
    items: [
      { text: "Real table semantics with header associations and a caption" },
      { text: "Sort and filter state announced, not just visually indicated" },
      { text: "Charts paired with an accessible data table alternative" },
      { text: "Generated reports carry structure, headings and reading order" },
      { text: "Downloadable documents tagged where produced by us" },
    ],
  },
];

export default function WhereEnterpriseSoftwareFailsSection() {
  return (
    <section className="w-full bg-[#071E2A] py-16 sm:py-24 px-4 sm:px-6 lg:px-28 text-white flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-2 pt-2.5">
            <span className="w-4 h-[1.5px] bg-[#A07A2E]" />
            <span className="text-xs font-medium tracking-widest text-[#A07A2E] uppercase leading-5 font-['JetBrains_Mono']">
              MOTION, INPUT, FORMS AND DENSE DATA
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2 className="text-4xl lg:text-[48px] font-semibold tracking-tight text-white leading-[49.28px] shrink-0" style={{ fontFamily: "'Archivo', sans-serif" }}>
              Where enterprise software
              <br />
              usually fails
            </h2>
            <p className="text-base lg:text-xl font-normal leading-8 max-w-[690px] text-[#8A99AD] lg:mt-2" style={{ fontFamily: "'Archivo', sans-serif" }}>
              Timeouts, validation errors and dense tables are the three places
              <br />
              accessible design most often breaks in governance software.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white text-[#101828] rounded-2xl p-7 flex flex-col gap-5"
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#3a5277]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {card.heading}
              </span>
              <ul className="flex flex-col gap-2.5 list-disc pl-4">
                {card.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[13px] text-[#101828] leading-5 font-normal"
                    style={{ fontFamily: "'Archivo', sans-serif" }}
                  >
                    {item.bold && <strong className="font-bold">{item.bold}</strong>}
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}