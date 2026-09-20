"use client";

import React from "react";
import { motion } from "framer-motion";

interface EvaluativeResource {
  category: string;
  title: React.ReactNode;
  updated: string;
  href: string;
  borderClass: string;
}

const evaluativeResources: EvaluativeResource[] = [
  {
    category: "Executive Briefs",
    title: (
      <>
        Buyer-readable assurance, honestly<br />labeled
      </>
    ),
    updated: "Updated Sep 1, 2026",
    href: "#executive-evaluation",
    borderClass: "border border-[#0F476A] border-t-[3px]",
  },
  {
    category: "Case Studies",
    title: (
      <>
        Operating across borders without<br />losing control
      </>
    ),
    updated: "Updated Aug 18, 2026",
    href: "#executive-evaluation",
    borderClass: "border border-[#C5A059] border-t-[3px]",
  },
];

export default function ExecutiveEvaluationSection() {
  return (
    <section
      id="executive-evaluation"
      className="w-full bg-[#F7F5F0] py-[92px] px-6 lg:px-[60px] flex justify-center"
    >
      <div className="max-w-[1320px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Header & Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[1.5px] bg-[#C5A059]" />
            <div className="self-stretch justify-center text-[#C5A059] text-xs font-normal font-['JetBrains_Mono'] leading-4 tracking-wider uppercase">
              06 / EXECUTIVE &amp; EVALUATION
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E293B] leading-tight mb-4 font-['Archivo']">
            Evaluate with concise evidence <br className="hidden sm:inline" /> and real-world context
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-[480px] font-['Archivo']">
            Use Executive Briefs for focused decision material and Case Studies for approved customer or implementation stories.
          </p>
        </motion.div>

        {/* Right Column: Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {evaluativeResources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.href}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`w-full px-6 pt-6 pb-8 bg-white rounded-2xl ${resource.borderClass} inline-flex flex-col justify-start items-start gap-2 shadow-2xs hover:shadow-md transition-all duration-200 group`}
            >
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-[#C5A059] text-xs font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                  {resource.category}
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-[#1E293B] text-base font-semibold font-['Archivo'] leading-5">
                  {resource.title}
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start mt-2">
                <div className="self-stretch justify-center text-[#64748B] text-xs font-normal font-['JetBrains_Mono'] leading-5">
                  {resource.updated}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}