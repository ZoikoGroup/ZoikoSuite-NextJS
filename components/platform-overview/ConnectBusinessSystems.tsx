"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface IntegrationGroup {
  id: string;
  label: string;
}

const integrationGroups: IntegrationGroup[] = [
  { id: "finance", label: "Finance & banking" },
  { id: "payroll", label: "Payroll & HR" },
  { id: "identity", label: "Identity" },
  { id: "legal", label: "Legal & contract systems" },
  { id: "tax", label: "Tax & filing systems" },
  { id: "procurement", label: "Procurement" },
  { id: "data", label: "Data platforms" },
  { id: "apis", label: "APIs & webhooks" },
  { id: "zoiko", label: "Zoiko ecosystem" },
];

export default function ConnectBusinessSystems() {
  const [activeTab, setActiveTab] = useState<string>("");

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Integrations • APIs • Data & Events
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Connect business systems through a controlled integration layer
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Nine integration groups, declared scopes, attributable service
                identities, and typed events — with connection health visible
                rather than assumed.
              </p>
            </motion.div>
          </div>

          {/* Integration Group Navigation / Data Layer List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex max-w-6xl items-center gap-2.5 mb-10"
          >
            {integrationGroups.map((group) => {
              const isActive = activeTab === group.id;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveTab(group.id)}
                  style={{
                    backgroundColor: isActive ? "#07131d" : "#E8EFF4",
                    borderColor: isActive ? "#07131d" : "#CFDEE7",
                    color: isActive ? "#ffffff" : "#0F476A",
                  }}
                  className="px-4 py-2 rounded-full text-[10px] tracking-[.5px] font-semibold border transition-all duration-200 cursor-pointer shadow-sm hover:opacity-90"
                >
                  {group.label}
                </button>
              );
            })}
          </motion.div>

          {/* Holographic Integration Architecture Showcase Image (No Border Added) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative w-full rounded-xl mb-10 overflow-hidden shadow-2xl"
          >
            <img
              src="/platform-overview/7.png"
              alt="Integration layer network diagram showing secure APIs, data bridges, and event streams"
              className="w-full h-auto object-cover block rounded-xl"
            />
          </motion.div>

          {/* Bottom Action CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex items-center justify-center w-full"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-md shadow-[#0F476A]/20"
            >
              Talk to a solutions architect
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
