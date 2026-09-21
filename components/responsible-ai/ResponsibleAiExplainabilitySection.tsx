"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const explainabilityCards = [
  {
    title: "Verifiable Source Linkage",
    description:
      "Every summarized sentence points directly to a raw EDR log or directory entry with matching cryptographic hash.",
  },
  {
    title: "Uncertainty Indicators",
    description:
      "If telemetries conflict or are incomplete, the system prints an explicit warning index and suspends suggestion actions.",
  },
  {
    title: "No Fabricated Logic Paths",
    description:
      "We skip fictional 'reasoning' paragraphs. The interface only lists the deterministic rules matched in the registry.",
  },
];

export default function ResponsibleAiExplainabilitySection() {
  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              TRANSPARENCY STANDARD
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            Explainability & Source Telemetry
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            We provide meaningful reasons behind summarized alerts without fabricating chain-of-thought rationale
            or claiming black-box compliance.
          </p>
        </div>

        {/* 2 Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {explainabilityCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-white p-5 sm:p-6 rounded-xl border border-[#123B4C]/10 shadow-sm flex flex-col gap-2 hover:shadow-md transition-all"
              >
                <h3 className="text-base sm:text-lg font-extrabold text-[#0A2029]">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6670] leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full aspect-[500/365] max-w-[500px] rounded-2xl overflow-hidden shadow-xl border border-[#123B4C]/15 bg-white">
              <Image
                src="/responsible-ai/explainability-source-telemetry.png"
                alt="Explainability & Source Telemetry"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
