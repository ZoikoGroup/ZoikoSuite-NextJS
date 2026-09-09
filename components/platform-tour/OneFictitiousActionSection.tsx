"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ScenarioEntityRow {
  object: string;
  type: string;
  detail: string;
  isAction?: boolean;
}

const scenarioEntities: ScenarioEntityRow[] = [
  { object: "GRP-HLD-001", type: "Organization", detail: "NorthStar Holdings" },
  { object: "ENT-UK-001", type: "Entity", detail: "NorthStar UK Ltd" },
  { object: "ENT-EU-002", type: "Entity", detail: "NorthStar EU BV" },
  { object: "SYS-ERP-001", type: "System", detail: "Accounts Payable" },
  { object: "SYS-BNK-001", type: "System", detail: "Swift Net Payments Gateway B2" },
  { object: "PL-001", type: "Project", detail: "Hybrid Operations Modernization" },
  {
    object: "ACT-001",
    type: "Action",
    detail: "Supplier bank-detail change review",
    isAction: true,
  },
  { object: "SUP-001", type: "Entity", detail: "Acme Industrial Components Ltd" },
  { object: "BNK-001", type: "Account", detail: "Standard Corporate Account" },
  { object: "USR-001", type: "Preparer", detail: "Accounts Payable Specialist" },
  { object: "USR-002", type: "Approver", detail: "Senior Director of Global Treasury" },
  { object: "PL-002", type: "Documentation", detail: "Configuration Spec" },
  { object: "REC-001", type: "Record", detail: "Compliance Register Update Investigation" },
  { object: "SYS-MIG-001", type: "Shadow", detail: "Shadow Test Network Extraction - Integration Playback" },
];

export default function OneFictitiousActionSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-14 lg:py-20 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Desktop 2-column layout (unchanged) */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center">
          {/* Left Column: Heading, intro paragraph, callout note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                SCENARIO AND SAMPLE ENVIRONMENT
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#08222F] tracking-tight leading-[1.12] mb-6">
              One fictitious action,
              <br />
              followed end to end
            </h2>

            {/* Description */}
            <p className="text-[#566573] text-[14.5px] sm:text-base leading-relaxed mb-8 max-w-[500px]">
              NorthStar Holdings is a fictitious multi-entity group. A supplier has
              requested a change to its bank details, and that request must be
              reviewed before any payment can be released. Every record you will
              inspect is synthetic.
            </p>

            {/* Subtle Gold-Bordered Callout Box */}
            <div className="w-full max-w-[480px] bg-[#fcfaf6] border border-[#d5b367] rounded-xl p-5 shadow-xs">
              <div className="text-[10.5px] font-bold tracking-[0.16em] text-[#b88c3a] uppercase mb-2">
                SAFE AND SYSTEM BOUNDARY
              </div>
              <p className="text-[#566573] text-[12.5px] sm:text-[13px] leading-relaxed">
                No live customer data, production tenant, connected ledger or real
                financial detail is used or implied. Any approval, execute,
                integration, event or receipt state you see is a reproducible
                example and does not call customer or production systems.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Isometric Stepper Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="col-span-6 flex justify-end"
          >
            <div className="w-full max-w-[540px] rounded-2xl overflow-hidden shadow-lg bg-transparent">
              <Image
                src="/platform-tour/pt2.png"
                alt="End-to-end action progression illustration"
                width={771}
                height={733}
                className="w-full h-auto object-contain rounded-2xl block"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile-only Layout matching reference */}
        <div className="lg:hidden flex flex-col items-start w-full">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#c5a059]" />
            <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
              SCENARIO AND SAMPLE ENVIRONMENT
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#08222F] tracking-tight leading-tight mb-4">
            One fictitious action, followed end to end
          </h2>

          {/* Intro Description */}
          <p className="text-[#566573] text-[13.5px] leading-relaxed mb-6 font-normal">
            NorthStar Holdings is a fictitious multi-entity group. A supplier has
            requested a change to its bank details, and that request must be reviewed
            before any payment can be released. Every record you will inspect is synthetic.
          </p>

          {/* Gold-Bordered Warning Box */}
          <div className="w-full bg-[#fdfaf4] border border-[#d8b568] rounded-xl p-4 sm:p-5 mb-5 shadow-xs">
            <div className="text-[10px] font-bold tracking-[0.16em] text-[#a87a22] uppercase mb-1.5">
              SAFE AND SYSTEM BOUNDARY
            </div>
            <p className="text-[#5a6a75] text-xs leading-relaxed">
              No live customer data, production tenant, connected ledger or real financial detail is used or implied. Any approval, execute, integration, event or receipt state you see is a reproducible example and does not call customer or production systems.
            </p>
          </div>

          {/* Enter the tour button */}
          <div className="mb-6">
            <a
              href="#guided-tour"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-xs hover:bg-[#c29c4c] transition-colors shadow-xs"
            >
              <span>Enter the tour</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Scenario Sandbox Data Terminal Card */}
          <div className="w-full rounded-2xl overflow-hidden border border-[#213f52] bg-[#0c1f2b] shadow-xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e2736] border-b border-[#1b3546]">
              <span className="text-[10px] font-mono tracking-[0.15em] text-[#557b91] uppercase">
                SCENARIO SANDBOX REGISTRY • SYNTHETIC GRAPH OF 14 ENTITY-NODES
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3d5d70]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#3d5d70]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#3d5d70]" />
              </div>
            </div>

            {/* Terminal Table Header */}
            <div className="px-4 py-2.5 bg-white border-b border-[#e5ecf0]">
              <span className="text-[10px] font-mono text-[#6c8290]">
                Synthetic Enterprise Environment For ACT-001 Graph
              </span>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto bg-white">
              <table className="w-full min-w-[500px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#e5ecf0] bg-[#fafcfe] text-[10px] font-mono uppercase text-[#738896]">
                    <th className="py-2.5 px-4 font-semibold">OBJECT ID</th>
                    <th className="py-2.5 px-4 font-semibold">TYPE</th>
                    <th className="py-2.5 px-4 font-semibold">DETAIL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#edf2f6] text-xs">
                  {scenarioEntities.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        row.isAction
                          ? "bg-[#fdfaf3] font-semibold text-[#8f681a]"
                          : "text-[#334756] hover:bg-[#f8fbfd]"
                      }
                    >
                      <td className="py-2.5 px-4 font-mono text-[11px]">
                        {row.object}
                      </td>
                      <td className="py-2.5 px-4 text-[11.5px] text-[#64748b]">
                        {row.type}
                      </td>
                      <td className="py-2.5 px-4 text-[11.5px]">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Terminal Footer */}
            <div className="p-3.5 bg-white border-t border-[#edf2f6]">
              <p className="text-[9.5px] font-mono text-[#8fa1ae] leading-relaxed">
                Synthetic enterprise ID scope: NorthStar Holdings, ENT-UK-001, ENT-EU-002, ACT-001, USR-001, USR-002, SYS-ERP-001, SYS-BNK-001, SUP-001, BNK-001, PL-001, PL-002, REC-001.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
