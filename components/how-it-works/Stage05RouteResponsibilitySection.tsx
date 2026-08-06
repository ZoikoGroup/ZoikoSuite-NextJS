"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Stage05RouteResponsibilitySection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Eyebrow Style */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A6D79] flex items-center bg-transparent rounded-[6px]">
                  <span className="bg-[#D0AA55] py-1.5 px-3 text-[#20180A] rounded-[6px]">
                    Stage 05 HUMAN
                  </span>
                  <span className="py-1.5 px-3 text-[#64748b]">
                    ROUTE RESPONSIBILITY AND AUTHORITY
                  </span>
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Route the work to the right responsibility and authority
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Responsibility, approval authority, and execution permission are
                separate things. Collapsing them into one &quot;owner&quot;
                field is how approval controls fail.
              </p>
            </motion.div>
          </div>

          {/* Workflow Image Section (No border, no shadow) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="w-full relative overflow-hidden bg-[#F7F5F0]"
          >
            <img
              src="/how-it-works/6.png"
              alt="Stage 05 route responsibility and authority illustration showing work routed to separate responsibility and authority roles"
              className="w-full h-auto object-cover block rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
