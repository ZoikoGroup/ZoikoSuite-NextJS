"use client";

import React from "react";
import { motion } from "framer-motion";

const adminControls = [
  {
    title: "Sovereign Killswitch",
    description:
      "Workspace admins can disable all AI features with a single, globally-propagated toggle. Falling back instantly to manual rule-matching.",
    status: "Admin Managed",
  },
  {
    title: "Scope Exclusions",
    description:
      "Explicitly exclude specific production tenants, OIDs, or host groups from ever transmitting data to external model subprocessors.",
    status: "Admin Managed",
  },
  {
    title: "Role-Bound Auth",
    description:
      "Remediation commands require explicit 'SecOps Admin' or 'Incident Response Lead' JWT scopes, fully independent of AI advice.",
    status: "Admin Managed",
  },
];

export default function ResponsibleAiWorkspaceControlsSection() {
  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              ADMINISTRATIVE DEPLOYMENT CONTROLS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            Granular Workspace Controls
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Workspace administrators maintain absolute sovereign authority over which models are active,
            what directories are mapped, and who has execution permission.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {adminControls.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white p-6 rounded-xl border border-[#123B4C]/10 shadow-sm flex flex-col justify-between gap-4 hover:shadow-md transition-all"
            >
              <div className="flex flex-col gap-2.5">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0A2029]">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6670] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div>
                <span className="inline-block bg-[#DDEAF9] text-[#4E668A] font-mono text-[11px] font-bold px-3 py-1 rounded-full">
                  {card.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
