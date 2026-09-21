"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TheCatalog() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 lg:px-14 flex justify-center">
      <div className="max-w-[1320px] w-full flex flex-col gap-10">
        {/* Header moved right by 30px */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col pl-[30px]"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 pt-2.5">
            <span className="w-4 h-[1.5px] bg-[#D4943A]" />
            <span
              className="text-xs font-medium tracking-widest text-[#D4943A] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              All templates & tools
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#08222F] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              The catalog
            </h2>
            <p
              className="text-base sm:text-xl font-normal text-[#475467] leading-8 mt-1 max-w-[690px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Search, filter and sort operate over the registry. With no published
              <br />
              records, the controls render disabled rather than returning an
              <br />
              empty result set that looks like a failed query.
            </p>
          </div>
        </motion.div>

        {/* Image starting exactly flush with heading line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full flex justify-start items-start"
        >
          <Image
            src="/templates-tools/div.app-1.png"
            alt="The Catalog"
            width={1320}
            height={612}
            className="w-full h-auto rounded-2xl block"
          />
        </motion.div>
      </div>
    </section>
  );
}