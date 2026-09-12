"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileTenChallengesView from "./MobileTenChallengesView";

interface ChallengeItem {
  id: string;
  title: string;
  description: string;
}

const challenges: ChallengeItem[] = [
  {
    id: "01",
    title: "Financial Governance",
    description: "Multi-entity ledger context, approval trails, audit-ready balance state, and internal control sanction.",
  },
  {
    id: "02",
    title: "Global Payroll Governance",
    description: "Disparate payroll providers, calculation reconciliation, and compliance across varied jurisdictions.",
  },
  {
    id: "03",
    title: "Cross-border Compliance",
    description: "Statutory jurisdiction changes, tax filing dates, nexus triggers, and localized policies.",
  },
  {
    id: "04",
    title: "Contract Governance",
    description: "Contractual sanction, obligations, authority boundaries, execution reconciliation, and audits.",
  },
  {
    id: "05",
    title: "Audit Readiness",
    description: "Dual-administration checks, separation of duties, source verification, exceptions, and audit trails.",
  },
  {
    id: "06",
    title: "Entity Management",
    description: "Parent-subsidiary governance, intercompany agreements, corporate registrations, and filings.",
  },
  {
    id: "07",
    title: "Regulatory Reporting",
    description: "Statutory qualified reporting, explicit and traceable evidence, and permission sign-off.",
  },
  {
    id: "08",
    title: "Workforce Compliance",
    description: "Cross-border employment policies, contractor vs employee status, and worker regulations.",
  },
  {
    id: "09",
    title: "Revenue Integrity",
    description: "Recognized revenue compliance, multi-currency ledger reconciliation, and contract governance.",
  },
  {
    id: "10",
    title: "Operational Risk Management",
    description: "Live detection of policy breaches, unauthorized actions, system overrides, and shadow risks.",
  },
];

export default function TheTenChallengesSection() {
  const [selectedId, setSelectedId] = useState<string>("01");

  return (
    <section
      id="the-ten-challenges"
      className="w-full bg-[#FAF8F5] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]"
    >
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                THE TEN CHALLENGES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Select one &mdash; the proof framework below updates
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Nothing is preselected from your identity, role or browsing. Choose a challenge yourself, or read the static list of all ten below.
            </p>
          </motion.div>
        </div>

        {/* Desktop View: 10 Challenge Cards Grid + scc2.png banner (Strictly lg:block/lg:grid) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-3.5 mb-10">
            {challenges.map((c) => {
              const isSelected = selectedId === c.id;

              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedId(c.id)}
                  className={`text-left rounded-xl p-5 flex flex-col justify-between transition-all duration-200 border ${
                    isSelected
                      ? "border-[#1E5B80] bg-[#F0F6FA] shadow-sm ring-1 ring-[#1E5B80]"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#c5a059] block mb-2 font-semibold">
                      {c.id}
                    </span>
                    <h4
                      className={`text-[13px] font-bold mb-2 leading-snug ${
                        isSelected ? "text-[#0F476A]" : "text-slate-900"
                      }`}
                    >
                      {c.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {c.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Challenge Visual Banner (scc2.png) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200/80 bg-white"
          >
            <div className="relative w-full aspect-[2.2/1]">
              <Image
                src="/solve-critical-challange/scc2.png"
                alt="Interactive challenge visual presentation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1240px) 100vw, 1240px"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile View: Dedicated Mobile 2-column cards, interactive proof framework & note */}
        <div className="block lg:hidden">
          <MobileTenChallengesView />
        </div>
      </div>
    </section>
  );
}
