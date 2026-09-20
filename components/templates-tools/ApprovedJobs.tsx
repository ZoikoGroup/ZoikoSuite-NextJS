"use client";

import React from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    title: "Plan an implementation",
    description: (
      <>
        Structure scope, sequencing, dependencies and owners before
        <br />
        committing to a delivery approach.
      </>
    ),
  },
  {
    title: "Assess readiness",
    description: (
      <>
        Evaluate whether the prerequisites for a governed change are actually in
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
        Work through authority, segregation, obligations and evidence for a
        <br />
        specific workflow.
      </>
    ),
  },
  {
    title: "Prepare for diligence",
    description: (
      <>
        Organise the security, privacy and compliance questions a review will
        <br />
        raise.
      </>
    ),
  },
  {
    title: "Drive adoption",
    description: (
      <>
        Plan enablement, role readiness and change communication across
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
            <span className="w-4 h-[1.5px] bg-orange-400" />
            <span
              className="text-xs font-medium tracking-widest text-[#A07A2E] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Start with the task
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#101828] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Six approved jobs
            </h2>
            <p
              className="text-[15px] sm:text-lg lg:text-xl text-[#475467] leading-8 mt-1 max-w-[690px]"
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
              className="bg-white rounded-tr-[10px] rounded-br-[10px] border-l-[3px] border-r border-t border-b border-[#c5d4e8] p-4 flex flex-col justify-between shadow-sm min-h-[140px]"
            >
              <div className="flex flex-col gap-1">
                <h3
                  className="text-xs font-bold text-[#101828] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {job.title}
                </h3>
                <div
                  className="text-xs text-[#475467] leading-4 font-normal"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {job.description}
                </div>
              </div>
              <div className="pt-2">
                <span
                  className="text-[8.50px] font-normal uppercase leading-3 tracking-wide text-[#475467]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  0 utilities available
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
