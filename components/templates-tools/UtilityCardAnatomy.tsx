"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UtilityCardAnatomy() {
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
              Utility card anatomy
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#101828] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Nine fields, every one sourced
            </h2>
            <p
              className="text-[15px] sm:text-lg lg:text-xl text-[#475467] leading-8 mt-1 max-w-[690px]"
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

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 w-full items-start">
          {/* Left Cards */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            <div className="bg-white rounded-2xl border-l-[3px] border-r border-t border-b border-[#c5d4e8] p-7 flex flex-col gap-3">
              <span
                className="text-xs text-[#475467] font-normal uppercase leading-5 tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Card consistency rule
              </span>
              <p
                className="text-base text-[#101828] leading-6 font-normal"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                The card action describes the{" "}
                <strong className="font-bold">utility action first</strong>.
                Marketing CTAs are not mixed into every card — commercial
                conversion belongs at detail or result level, where relevance has
                actually been established.
              </p>
            </div>

            <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-200 p-7 flex flex-col gap-3">
              <span
                className="text-xs text-[#475467] font-normal uppercase leading-5 tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Access state is visible before the click
              </span>
              <p
                className="text-base text-[#101828] leading-6 font-normal"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                A visitor sees whether an asset is public, needs sign-in, or is
                unavailable <strong className="font-bold">before</strong>{" "}
                committing to the action. No surprise gating after a click.
              </p>
              <p
                className="text-xs text-[#475467] leading-5 font-normal"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                Entitlement states are sourced from the approved plan authority.
                No tier names are invented.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <img
              src="/templates-tools/div.speccard-1.png"
              alt="Specimen card"
              className="w-full h-[466px] object-cover rounded-xl border border-stone-200 block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
