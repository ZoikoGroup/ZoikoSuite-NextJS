"use client";

import React from "react";
import { motion } from "framer-motion";

interface DocResource {
  category: string;
  title: React.ReactNode;
  updated: string;
  borderClass: string;
}

const docResources: DocResource[] = [
  {
    category: "Documentation",
    title: (
      <>
        Configuring approval matrices by<br />policy class
      </>
    ),
    updated: "Updated Sep 8, 2026",
    borderClass: "border border-[#0F476A] border-t-[3px]",
  },
  {
    category: "Knowledge Base",
    title: (
      <>
        Troubleshooting delayed evidence<br />exports
      </>
    ),
    updated: "Updated Sep 3, 2026",
    borderClass: "border border-[#C5A059] border-t-[3px]",
  },
];

export default function DocumentationKnowledgeSection() {
  return (
    <section
      id="documentation-knowledge"
      className="w-full bg-white py-[92px] px-6 lg:px-[60px] flex justify-center"
    >
      <div className="max-w-[1320px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[1.5px] bg-[#C5A059]" />
            <div className="justify-center text-[#C5A059] text-xs font-normal font-['JetBrains_Mono'] leading-4 tracking-wider uppercase">
              07 / DOCUMENTATION &amp; KNOWLEDGE
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E293B] leading-tight mb-4 font-['Archivo']">
            Build, learn, and solve with authoritative guidance
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-[480px] font-['Archivo']">
            Go to Documentation for structured product guidance or the Knowledge<br />
            Base for practical articles and problem-solving resources where<br />
            published.
          </p>
        </motion.div>

        {/* Right Column: Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {docResources.map((resource, index) => (
            <motion.a
              key={index}
              href="#documentation-knowledge"
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