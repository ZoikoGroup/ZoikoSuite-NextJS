"use client";

import React from "react";
import { motion } from "framer-motion";

interface SystemCard {
  title: string;
  systemType: string;
  status: string;
  protocol: string;
  evidence: string;
  owner: string;
}

const systemCards: SystemCard[] = [
  {
    title: "CORE ERP / GL",
    systemType: "Transaction ERP",
    status: "Recorded (GL)",
    protocol: "Immutable journal link",
    evidence: "Debit/Credit audit proof",
    owner: "Controller",
  },
  {
    title: "BANKING / TREASURY",
    systemType: "Banking interface",
    status: "Originating wire",
    protocol: "Dual-sign-off enforced",
    evidence: "Swift MT103 confirmation",
    owner: "Treasury",
  },
  {
    title: "BILLING / REVENUE OPS",
    systemType: "Billing platform",
    status: "Revenue recognized",
    protocol: "Recurring sync verification",
    evidence: "Invoice/contract match",
    owner: "RevOps / FP&A",
  },
  {
    title: "PROCUREMENT / PAYABLES",
    systemType: "Procurement workflow",
    status: "3-way match",
    protocol: "Pre-execution policy gate",
    evidence: "Signed PO & Delivery slip",
    owner: "Head of Procurement",
  },
  {
    title: "TAX / JURISDICTIONS",
    systemType: "Statutory local tax engine",
    status: "Jurisdiction filing code",
    protocol: "Nexus-bound rate check",
    evidence: "Calculation audit packet",
    owner: "Tax Leader",
  },
  {
    title: "EXTERNAL AUDITOR / REGULATOR CONSOLE",
    systemType: "Oversight portal",
    status: "Zero operational execute capability",
    protocol: "Direct cryptographic inspect",
    evidence: "Verification hash stamp",
    owner: "Audit Committee / Regulator",
  },
];

export default function KeepSystemOwnershipExplicitSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase">
                AUTHORITATIVE SOURCE OF TRUTH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Keep system ownership explicit
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              ZoikoSuite moves decision governance into finance activities, systems, and entities, while authoritative execution remains in your existing ERP, banking, billing, procurement or tax platforms. Subsystems are shown and visibly distinct.
            </p>
          </motion.div>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {systemCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:border-[#D0AA55]/60 transition-colors"
            >
              <div>
                <h3 className="text-xs sm:text-[13px] font-mono font-bold tracking-wider text-[#08222F] mb-4 pb-2 border-b border-slate-100 uppercase">
                  {card.title}
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-50 pb-1.5">
                    <span className="text-slate-400 font-mono text-[10px] uppercase">System:</span>
                    <span className="text-slate-700 font-medium">{card.systemType}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-1.5">
                    <span className="text-slate-400 font-mono text-[10px] uppercase">Status:</span>
                    <span className="text-slate-700 font-medium">{card.status}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-1.5">
                    <span className="text-slate-400 font-mono text-[10px] uppercase">Protocol:</span>
                    <span className="text-slate-700 font-medium">{card.protocol}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-1.5">
                    <span className="text-slate-400 font-mono text-[10px] uppercase">Evidence:</span>
                    <span className="text-slate-700 font-medium">{card.evidence}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-mono text-[10px] uppercase">Owner:</span>
                <span className="font-semibold text-[#08222F]">{card.owner}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
