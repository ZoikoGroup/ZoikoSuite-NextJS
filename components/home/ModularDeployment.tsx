"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const deploymentModes = [
  {
    title: "Multi-tenant SaaS",
    description: "Standard logical isolation.",
  },
  {
    title: "Dedicated environment",
    description: "Enhanced tenant isolation and operational controls.",
  },
  {
    title: "Single-tenant enterprise",
    description: "Dedicated workload and data infrastructure.",
  },
  {
    title: "Sovereign / customer-controlled",
    description: "Subject to legal, operational, and commercial feasibility.",
  },
] as const;

export default function ModularDeployment() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
          >
            <div className="max-w-3xl">
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Modular Deployment
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Start at the right scope
              </h2>
            </div>

            {/* Right Subtitle Description */}
            <div className="max-w-[420px]">
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Modules activate capability. Identity, entity, policy,
                jurisdiction, evidence, and security stay unified in every
                configuration.
              </p>
            </div>
          </motion.div>

          {/* Top Image Showcase with Left Golden Accent Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative w-full overflow-hidden rounded-xl mb-12"
          >
            <img
              src="/home/image.png"
              alt="Modular architecture deployment visualization showing unified capabilities"
              className="w-full h-auto object-cover block"
            />
          </motion.div>

          {/* Subtitle Tag for Deployment Modes */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-[2px] bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
              Deployment Modes
            </span>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {deploymentModes.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-[#DBE3E8] rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#124d73] transition-all duration-200 shadow-lg shadow-[#0F476A]/20"
            >
              Configure ZoikoSuite
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
