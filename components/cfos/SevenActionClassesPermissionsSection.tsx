"use client";

import React from "react";
import { motion } from "framer-motion";

interface ActionClassCard {
  title: string;
  description: string;
  subtext: string;
  isRedTitle?: boolean;
  isDarkCard?: boolean;
}

const actionClasses: ActionClassCard[] = [
  {
    title: "Prepare",
    description: "Originates proposed financial decision object and bundles initial documentation.",
    subtext: "Role: Initiator / Finance Analyst",
  },
  {
    title: "Review",
    description: "Assesses proposed allocation across applicable tax, legal, and operational policies.",
    subtext: "Role: Reviewer / Legal Specialist",
  },
  {
    title: "Technical Verify",
    description: "Verifies system parameters, connectivity, and data integrity with connected ledgers.",
    subtext: "Role: Controller / Tech Admin",
  },
  {
    title: "Ensure",
    description: "Validates compliance with statutory limits, audit trails, and anti-fraud protocols.",
    subtext: "Role: Compliance Officer",
  },
  {
    title: "Authorize",
    description: "Confirms dual-sign-off thresholds and delegated authority boundaries.",
    subtext: "Role: CFO / Authorized Signatory",
    isRedTitle: true,
  },
  {
    title: "Commit",
    description: "Locks the immutable journal record into the ZoikoSuite ledger before push.",
    subtext: "Role: System / Protocol Core",
  },
  {
    title: "Release",
    description: "Permits execution of external bank wire, ERP commit, or contract sign.",
    subtext: "Role: Treasury / Bank Signer",
  },
  {
    title: "Exception",
    description: "Documents explicit policy override with compensating controls and expiration.",
    subtext: "Role: Board / Audit Committee",
    isDarkCard: true,
  },
];

export default function SevenActionClassesPermissionsSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#12364c]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-14">
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
                SEPARATION / PRIMARY PROTOCOL POLICY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              Seven action classes, seven separate permissions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-[#D4E4ED] leading-relaxed">
              Approvers and limits depend on the risk that matters most, and they can never be the same actors.
            </p>
          </motion.div>
        </div>

        {/* 8 Cards Grid (4 columns x 2 rows on lg, 2 cols on sm, 1 col on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {actionClasses.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all ${
                item.isDarkCard
                  ? "bg-[#061923] border border-[#133c54] text-white shadow-md shadow-black/30"
                  : "bg-white border border-slate-100 text-slate-900 shadow-md shadow-black/10"
              }`}
            >
              <div>
                <h3
                  className={`text-base font-bold mb-3 ${
                    item.isDarkCard
                      ? "text-white"
                      : item.isRedTitle
                      ? "text-[#D94F4F]"
                      : "text-[#08222F]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed mb-6 font-normal ${
                    item.isDarkCard ? "text-[#C2D7E5]" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
              <div
                className={`pt-3 border-t text-[11px] font-mono ${
                  item.isDarkCard
                    ? "border-[#133c54] text-slate-400"
                    : "border-slate-100 text-slate-500"
                }`}
              >
                {item.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
