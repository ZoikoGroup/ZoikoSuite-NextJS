"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const dataBoundaries = [
  {
    title: "Data Subprocessor",
    details: "Microsoft Azure OpenAI (US East) / Anthropic (US East)",
    status: "Policy Bound",
  },
  {
    title: "Training Opt-Out",
    details: "Enforced via DPA. No model training or retention on client context.",
    status: "Policy Bound",
  },
  {
    title: "Sensitive Data Control",
    details: "PII and local access key scrubbing executed before model call.",
    status: "Policy Bound",
  },
  {
    title: "Retention Window",
    details: "Zero-retention model policy. Transient processing only.",
    status: "Policy Bound",
  },
  {
    title: "Data Residency",
    details: "US East region locked. No international cross-border data transfer.",
    status: "Policy Bound",
  },
];

export default function ResponsibleAiDataBoundariesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              DATA FLOW & MODEL ISOLATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            Verifiable Data & Model Boundaries
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Clear limits governing subprocessor data exposure. We enforce isolated environments and prohibit training on tenant data.
          </p>
        </div>

        {/* 2 Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Spec List */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {dataBoundaries.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white p-4 sm:p-5 rounded-lg border border-[#123B4C]/10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#123B4C]/25 transition-all"
              >
                <span className="w-48 shrink-0 font-extrabold text-sm text-[#0A2029]">
                  {item.title}
                </span>
                <span className="flex-1 text-xs sm:text-[13px] text-[#5B6670] leading-relaxed">
                  {item.details}
                </span>
                <span className="shrink-0 inline-block bg-[#E4F0EC] text-[#1F7A6C] font-mono text-[11px] font-bold px-3 py-1 rounded-full w-fit">
                  {item.status}
                </span>
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
            <div className="relative w-full aspect-[500/414] max-w-[500px] rounded-2xl overflow-hidden shadow-xl border border-[#123B4C]/15 bg-white">
              <Image
                src="/responsible-ai/verifiable-data-boundaries.png"
                alt="Verifiable Data & Model Boundaries"
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
