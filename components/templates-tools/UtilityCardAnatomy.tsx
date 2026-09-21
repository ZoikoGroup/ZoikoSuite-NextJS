"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UtilityCardAnatomy() {
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
              Utility card anatomy
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 w-full">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#0D2636] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Nine fields, every one sourced
            </h2>
            <p
              className="text-base sm:text-xl text-[#3E5A6B] leading-8 mt-1 max-w-[690px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              This is the card contract a published utility will render against.
              <br />
              Every value below is a marked specimen field, not a product
              <br />
              claim.
            </p>
          </div>
        </motion.div>

        {/* Content Layout — Image on Left (485px), Cards on Right */}
        <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start w-full gap-10 lg:gap-10 mt-2">
          {/* Left Image (485px) */}
          <div className="w-full lg:w-[485px] shrink-0 flex justify-center lg:justify-start">
            <img
              src="/templates-tools/div.speccard-1.png"
              alt="Specimen card"
              className="w-full h-[466px] object-cover rounded-2xl block"
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-2.5 flex-1 w-full max-w-[740px]">
            {/* Card 1 */}
            <div className="w-full min-h-[172px] px-7 py-7 bg-white rounded-2xl border-l-[3px] border-l-[#2d4e88] flex flex-col justify-start items-start gap-3 shadow-sm">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div
                  className="self-stretch text-[#3E5A6B] text-xs font-normal uppercase leading-5 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Card consistency rule
                </div>
              </div>
              <div className="self-stretch pt-1 flex flex-col justify-start items-start">
                <p
                  className="self-stretch text-[#0D2636] text-base font-normal leading-6 whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  The card action describes the{" "}
                  <strong className="font-bold">utility action first</strong>. Marketing CTAs are not mixed into every card
                  <br />
                  — commercial conversion belongs at detail or result level, where relevance has actually been
                  <br />
                  established.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full min-h-[172px] px-7 py-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-200 flex flex-col justify-start items-start gap-3 shadow-sm">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div
                  className="self-stretch text-[#3E5A6B] text-xs font-normal uppercase leading-5 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Access state is visible before the click
                </div>
              </div>
              <div className="self-stretch pt-1 flex flex-col justify-start items-start">
                <p
                  className="self-stretch text-[#0D2636] text-base font-normal leading-6 whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  A visitor sees whether an asset is public, needs sign-in, or is unavailable{" "}
                  <strong className="font-bold">before</strong> committing to
                  <br />
                  the action. No surprise gating after a click.
                </p>
              </div>
              <div className="self-stretch pt-1 flex flex-col justify-start items-start">
                <p
                  className="self-stretch text-[#3E5A6B] text-xs font-normal leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Entitlement states are sourced from the approved plan authority. No tier names are invented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
