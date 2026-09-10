"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ResourceRow {
  name: string;
  status: string;
  statusClass: string;
}

const resources: ResourceRow[] = [
  {
    name: "API DOCUMENTATION",
    status: "Contracted only",
    statusClass: "bg-sky-50 text-sky-800 border-sky-200",
  },
  {
    name: "SANDBOX ENVIRONMENT",
    status: "Contracted only",
    statusClass: "bg-sky-50 text-sky-800 border-sky-200",
  },
  {
    name: "SCHEMAS / REPOSITORIES",
    status: "Restricted to contract scope",
    statusClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    name: "CLIENT / SDK LIBRARIES",
    status: "Gated — under agreement",
    statusClass: "bg-[#FDF2D6] text-amber-900 border-[#E8C882]",
  },
  {
    name: "WEBHOOK CONSUMPTION",
    status: "Not published",
    statusClass: "bg-slate-100 text-slate-700 border-slate-300",
  },
  {
    name: "EXAMPLES",
    status: "Contracted only",
    statusClass: "bg-sky-50 text-sky-800 border-sky-200",
  },
  {
    name: "PUBLIC SPECS",
    status: "Public",
    statusClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
];

interface MobileConnectorRow {
  connectorClass: string;
  status: string;
  statusType: "active" | "audited" | "gated" | "not_published" | "contracted";
  direction: string;
  identityBasis: string;
  latency: string;
  auditTrail: string;
  governance: string;
  isHighlighted?: boolean;
}

const mobileConnectorRows: MobileConnectorRow[] = [
  {
    connectorClass: "Finance system class",
    status: "● OPERATED",
    statusType: "active",
    direction: "Bidirectional",
    identityBasis: "Customer authorization",
    latency: "Real-time, incremental push",
    auditTrail: "01 Jul 2024",
    governance: "Verified",
  },
  {
    connectorClass: "Identity provider class",
    status: "● OPERATED",
    statusType: "active",
    direction: "Inbound",
    identityBasis: "Customer authorization",
    latency: "Authoritative assertion",
    auditTrail: "01 Jul 2024",
    governance: "Encapsulated",
  },
  {
    connectorClass: "Contract repository class",
    status: "● AUDITED",
    statusType: "audited",
    direction: "Inbound",
    identityBasis: "Customer authorization",
    latency: "Fixed",
    auditTrail: "24 Jul 2024 / Q3",
    governance: "Immutable",
    isHighlighted: true,
  },
  {
    connectorClass: "Payment system class",
    status: "RESTRICTED CONTRACT SCOPE",
    statusType: "gated",
    direction: "Outbound",
    identityBasis: "Customer authorization",
    latency: "Fixed",
    auditTrail: "21 Sep 2024",
    governance: "Strictly isolated",
  },
  {
    connectorClass: "Data platform class",
    status: "PROVISIONAL STATUS",
    statusType: "not_published",
    direction: "Outbound",
    identityBasis: "Internal audit connector",
    latency: "Not configured",
    auditTrail: "—",
    governance: "—",
  },
  {
    connectorClass: "Procurement system class",
    status: "APPROACHING RELEASE SEQUENCE",
    statusType: "contracted",
    direction: "—",
    identityBasis: "—",
    latency: "—",
    auditTrail: "—",
    governance: "—",
  },
];

export default function SystemClassesNotLogoWallSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase">
                INTEGRATION AND DEVELOPER PLATFORM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-tight">
              System classes, not a logo wall
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              No connector is named on this page. Named connectors and logos
              appear only where the Integration Registry has authorized public
              status, and none currently is.
            </p>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP-ONLY 2-COLUMN VIEW (pf6.png) - PRESERVED 100% UNTOUCHED */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual (pf6.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-white p-3 sm:p-5 flex items-center justify-center"
          >
            <Image
              src="/platform-foundation/pf6.png"
              alt="Integration and developer platform system classes illustration"
              width={500}
              height={500}
              priority
              className="w-full h-auto object-contain rounded-xl block"
            />
          </motion.div>

          {/* Right Column: Published Capability Registry List */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1.5">
              PUBLISHED CAPABILITY REGISTRY
            </span>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Each resource carries its own publication and release state.
              Employing one state implies nothing about the others.
            </p>

            <div className="flex flex-col gap-2">
              {resources.map((res, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 bg-white p-3 sm:p-3.5 flex items-center justify-between shadow-xs"
                >
                  <span className="font-mono font-semibold text-xs sm:text-[13px] text-slate-900">
                    {res.name}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold border whitespace-nowrap ${res.statusClass}`}
                  >
                    {res.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY EXTENSIONS (STRICTLY HIDDEN ON DESKTOP VIA lg:hidden) */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Mobile Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Terminal Top Bar */}
            <div className="bg-[#051620] px-3.5 py-2.5 flex items-center justify-between border-b border-[#12364c]">
              <span className="text-[9.5px] font-mono font-bold tracking-[0.12em] text-[#7ea0b5] uppercase">
                CONNECTOR REGISTRY · CLASSES OR SYSTEM ROLES
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            {/* Inner White Table Container */}
            <div className="bg-white text-slate-900 p-3.5 sm:p-4 flex flex-col">
              <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                CONNECTOR CLASSES: RECORD FOR SCOPE, STATUS, AND DATA FLOW BEHAVIOUR
              </span>

              <div className="overflow-x-auto -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[580px] text-left border-collapse text-[10.5px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                      <th className="py-2 pr-2 font-semibold">SYSTEM CLASS</th>
                      <th className="py-2 px-2 font-semibold">STATUS</th>
                      <th className="py-2 px-2 font-semibold">DIRECTION</th>
                      <th className="py-2 px-2 font-semibold">IDENTITY BASIS</th>
                      <th className="py-2 px-2 font-semibold">LATENCY</th>
                      <th className="py-2 px-2 font-semibold">AUDIT TRAIL</th>
                      <th className="py-2 pl-2 font-semibold">GOVERNANCE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {mobileConnectorRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className={row.isHighlighted ? "bg-[#FFF9EB]" : "hover:bg-slate-50"}
                      >
                        <td className="py-2 pr-2 font-semibold text-slate-900 whitespace-nowrap font-sans">
                          {row.connectorClass}
                        </td>
                        <td className="py-2 px-2 whitespace-nowrap">
                          {row.statusType === "active" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                              {row.status}
                            </span>
                          )}
                          {row.statusType === "audited" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                              {row.status}
                            </span>
                          )}
                          {row.statusType === "gated" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-rose-50 text-rose-700 border border-rose-200 font-semibold">
                              {row.status}
                            </span>
                          )}
                          {row.statusType === "not_published" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-slate-100 text-slate-600 border border-slate-200">
                              {row.status}
                            </span>
                          )}
                          {row.statusType === "contracted" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-slate-100 text-slate-600 border border-slate-200">
                              {row.status}
                            </span>
                          )}
                        </td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap">{row.direction}</td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap font-sans">{row.identityBasis}</td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap font-sans">{row.latency}</td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap">{row.auditTrail}</td>
                        <td className="py-2 pl-2 text-slate-600 whitespace-nowrap font-sans">{row.governance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footnote */}
              <p className="text-[9.5px] font-mono text-slate-400 pt-3 border-t border-slate-100 mt-2 leading-snug">
                Each named connector line requires registration, continuous review, consensus, keys and cryptographic validation, access control, audit readiness, SLA parameters, tenant and jurisdiction checks. A connector is named only on specific authorized contract or scope for the relevant entity.
              </p>
            </div>
          </motion.div>

          {/* Published Capability Registry List (Mobile) */}
          <div className="flex flex-col space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
              DEVELOPER CAPABILITY REGISTRY
            </span>
            <p className="text-xs text-slate-600 leading-relaxed mb-1">
              Each resource carries its own publication and release state. Employing one state implies nothing about the others.
            </p>
            <div className="flex flex-col gap-2">
              {resources.map((res, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 bg-white p-3 flex items-center justify-between shadow-2xs"
                >
                  <span className="font-mono font-semibold text-xs text-slate-900">
                    {res.name}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[9.5px] font-mono font-semibold border whitespace-nowrap ${res.statusClass}`}
                  >
                    {res.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Qualified Note Box */}
          <div className="border border-slate-200 bg-white rounded-xl p-4 shadow-xs">
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
              LEARN MORE / SCOPE NOTE
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Once an enterprise customer register establishes baseline configuration, Change management, Validation and Reconciliation are evaluated dynamically on live surfaces rather than manual offline reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
