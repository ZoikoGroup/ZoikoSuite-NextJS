"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PreviewDownloadDelivery() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-6 lg:px-14 flex justify-center">
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
            <span className="w-4 h-[1.5px] bg-[#D4943A]" />
            <span
              className="text-xs font-medium tracking-widest text-[#D4943A] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Preview, download and file delivery
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 w-full">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#0D2636] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Preview before retrieve, and a
              <br />
              file record behind every
              <br />
              download
            </h2>
            <p
              className="text-xl text-[#3E5A6B] leading-8 mt-1 max-w-[690px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              A download link without a file record is not publishable. These
              <br />
              fields must exist before the action is enabled.
            </p>
          </div>
        </motion.div>

        {/* Content Layout — Image on Left (485px), Cards on Right */}
        <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start w-full gap-10 lg:gap-[45px] mt-2">
          {/* Left Image (485px) */}
          <div className="w-full lg:w-[485px] shrink-0 flex justify-center lg:justify-start">
            <img
              src="/templates-tools/div.speccard.png"
              alt="Preview specimen"
              className="w-full lg:w-[485px] h-[485px] object-cover rounded-2xl block"
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-2.5 flex-1 w-full max-w-[740px]">
            {/* Card 1 */}
            <div className="w-full min-h-[172px] px-7 py-7 bg-white rounded-2xl border-l-[3px] border-l-[#2d4e88] flex flex-col justify-start items-start gap-3 shadow-sm">
              <div className="self-stretch flex flex-col justify-start items-start">
                <span
                  className="self-stretch text-[#3E5A6B] text-xs font-normal uppercase leading-5 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Preview comes first
                </span>
              </div>
              <div className="self-stretch pt-1 flex flex-col justify-start items-start">
                <p
                  className="self-stretch text-[#0D2636] text-base font-normal leading-6 whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Where a preview is safe to render, it appears before the download action — so a visitor can judge
                  <br />
                  fit without retrieving a file they will not use.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full min-h-[172px] px-7 py-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-200 flex flex-col justify-start items-start gap-3 shadow-sm">
              <div className="self-stretch flex flex-col justify-start items-start">
                <span
                  className="self-stretch text-[#3E5A6B] text-xs font-normal uppercase leading-5 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  No form wall on public assets
                </span>
              </div>
              <div className="self-stretch pt-1 flex flex-col justify-start items-start">
                <p
                  className="self-stretch text-[#0D2636] text-base font-normal leading-6 whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  A public asset does not become gated at the moment of download. Where sign-in genuinely
                  <br />
                  applies, that state is shown on the card <strong className="font-bold">before</strong> the click, and the user returns to the intended
                  <br />
                  asset afterwards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
