"use client";

import React from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    title: "Plan an implementation",
    description: (
      <>
        <span className="whitespace-nowrap">Structure scope, sequencing, dependencies and owners before</span>
        <br />
        committing to a delivery approach.
      </>
    ),
  },
  {
    title: "Assess readiness",
    description: (
      <>
        <span className="whitespace-nowrap">Evaluate whether the prerequisites for a governed change are actually in</span>
        <br />
        place.
      </>
    ),
  },
  {
    title: "Build a business case",
    description: (
      <>
        Assemble the qualitative and structural basis for an investment decision.
      </>
    ),
  },
  {
    title: "Design governance",
    description: (
      <>
        <span className="whitespace-nowrap">Work through authority, segregation, obligations and evidence for a</span>
        <br />
        specific workflow.
      </>
    ),
  },
  {
    title: "Prepare for diligence",
    description: (
      <>
        <span className="whitespace-nowrap">Organise the security, privacy and compliance questions a review will</span>
        <br />
        raise.
      </>
    ),
  },
  {
    title: "Drive adoption",
    description: (
      <>
        <span className="whitespace-nowrap">Plan enablement, role readiness and change communication across</span>
        <br />
        affected teams.
      </>
    ),
  },
];

export default function ApprovedJobs() {
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
            <span className="w-4 h-[1.5px] bg-[#D4943A]" />
            <span
              className="text-xs font-medium tracking-widest text-[#D4943A] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Start with the task
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#08222F] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Six approved jobs
            </h2>
            <p
              className="text-xl font-normal text-[#64748B] leading-8 mt-1 max-w-[690px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Task taxonomy is approved and published. Utility counts are
              <br />
              drawn from the registry, so each currently reads zero rather than a
              <br />
              placeholder number.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="self-stretch px-3 py-3 bg-white rounded-tr-[10px] rounded-br-[10px] border-l-[3px] border-l-[#08222F] border-r border-t border-b border-[#2A6386]/35 inline-flex flex-col justify-start items-start gap-[3.30px] shadow-sm min-h-[104px]"
            >
              <div className="self-stretch pb-1.5 flex flex-col justify-start items-start">
                <h3
                  className="self-stretch justify-center text-[#08222F] text-xs font-bold leading-5 whitespace-nowrap"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {job.title}
                </h3>
              </div>
              <div className="self-stretch pb-1.5 flex flex-col justify-start items-start">
                <div
                  className="self-stretch justify-center text-[#475467] text-xs font-normal leading-4"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {job.description}
                </div>
              </div>
              <div className="self-stretch pt-0.5 flex flex-col justify-start items-start">
                <div className="self-stretch pb-1.5 flex flex-col justify-start items-start">
                  <span
                    className="self-stretch justify-center text-[#475467] text-[8.50px] font-normal uppercase leading-3 tracking-wide"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    0 utilities available
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}