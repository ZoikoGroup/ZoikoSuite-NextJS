"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LearningEventsSection() {
  return (
    <section
      id="learning-events"
      className="w-full bg-[#F7F5F0] py-[92px] px-6 lg:px-[60px] flex justify-center"
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
              08 / LEARNING &amp; EVENTS
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E293B] leading-tight mb-4 font-['Archivo']">
            Learn at your pace or join a<br />session
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-[480px] font-['Archivo']">
            Explore Training Academy materials and Webinars &amp; Events using the<br />
            availability and dates published by their owning systems.
          </p>
        </motion.div>

        {/* Right Column: Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
            className="w-full px-6 pt-6 pb-8 bg-white rounded-2xl border border-[#0F476A] border-t-[3px] inline-flex flex-col justify-start items-start gap-2 shadow-2xs hover:shadow-md transition-all duration-200"
          >
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-[#C5A059] text-xs font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                Training Academy
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-[#1E293B] text-base font-semibold font-['Archivo'] leading-5">
                Foundations of governed workflow<br />design
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start mt-2">
              <div className="self-stretch justify-center text-[#64748B] text-xs font-normal font-['JetBrains_Mono'] leading-5">
                Self-paced
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="w-full px-6 pt-6 pb-8 bg-white rounded-2xl border border-[#C5A059] border-t-[3px] inline-flex flex-col justify-start items-start gap-2 shadow-2xs hover:shadow-md transition-all duration-200"
          >
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-[#C5A059] text-xs font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                Webinars &amp; Events
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-[#1E293B] text-base font-semibold font-['Archivo'] leading-5">
                Q4 policy governance office hours
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start mt-2">
              <div className="self-stretch justify-center text-[#64748B] text-xs font-normal font-['JetBrains_Mono'] leading-5">
                Upcoming · registration open
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
