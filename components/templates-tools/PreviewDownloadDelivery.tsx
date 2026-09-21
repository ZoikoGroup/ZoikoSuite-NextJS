"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PreviewDownloadDelivery() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-28 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
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
            <span className="w-4 h-[1.5px] bg-orange-400" />
            <span
              className="text-xs font-medium tracking-widest text-[#A07A2E] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Preview, download and file delivery
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#101828] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Preview before retrieve, and a
              <br />
              file record behind every
              <br />
              download
            </h2>
            <p
              className="text-[15px] sm:text-lg lg:text-xl text-[#475467] leading-8 mt-1 max-w-[690px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              A download link without a file record is not publishable. These
              <br />
              fields must exist before the action is enabled.
            </p>
          </div>
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 w-full items-start">
          {/* Left Cards */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            <div className="bg-white rounded-2xl border-l-[3px] border-r border-t border-b border-[#c5d4e8] p-7 flex flex-col gap-3">
              <span
                className="text-xs text-[#475467] font-normal uppercase leading-5 tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Preview comes first
              </span>
              <p
                className="text-base text-[#101828] leading-6 font-normal"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                Where a preview is safe to render, it appears before the download
                action — so a visitor can judge fit without retrieving a file they
                will not use.
              </p>
            </div>

            <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-200 p-7 flex flex-col gap-3">
              <span
                className="text-xs text-[#475467] font-normal uppercase leading-5 tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                No form wall on public assets
              </span>
              <p
                className="text-base text-[#101828] leading-6 font-normal"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                A public asset does not become gated at the moment of download.
                Where sign-in genuinely applies, that state is shown on the card{" "}
                <strong className="font-bold">before</strong> the click, and the
                user returns to the intended asset afterwards.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <img
              src="/templates-tools/div.speccard.png"
              alt="Preview specimen"
              className="w-full h-[485px] object-cover rounded-xl border border-stone-200 block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
