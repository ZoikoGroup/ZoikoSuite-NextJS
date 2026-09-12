"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ZoneCard {
  number: string;
  title: string;
  subtext: string;
  isHighlight?: boolean;
}

const zoneCards: ZoneCard[] = [
  {
    number: "ZONE 01",
    title: "Users and roles",
    subtext: "Authenticated identity, scoping within context",
  },
  {
    number: "ZONE 02",
    title: "ZoikoSuite Foundation",
    subtext: "Central relationship register",
    isHighlight: true,
  },
  {
    number: "ZONE 03",
    title: "Customer system of record",
    subtext: "Host for traditional business data record",
  },
  {
    number: "ZONE 04",
    title: "Identity",
    subtext: "Federated external identity and directory",
  },
  {
    number: "ZONE 05",
    title: "Data and analytics",
    subtext: "Operational feeds and data warehouse",
  },
  {
    number: "ZONE 06",
    title: "Approved external service clients",
    subtext: "Banking, tax, regulatory",
  },
  {
    number: "ZONE 07",
    title: "Monitoring and support",
    subtext: "Audit logs and event monitors",
  },
  {
    number: "ZONE 08",
    title: "Backup and recovery",
    subtext: "Disaster recovery point in time",
  },
];

interface MobileRelationshipCard {
  source: string;
  destination: string;
  direction: string;
  authority: string;
  reconciliation: string;
  status: string;
  statusType: "active" | "audited";
  notes: string;
  badges: string[];
}

const mobileRelationshipCards: MobileRelationshipCard[] = [
  {
    source: "Finance system share",
    destination: "ZoikoSuite Foundation",
    direction: "Both realms (Two-way synchronization)",
    authority: "Enforced",
    reconciliation: "Periodic reconciliation · Scheduled daily",
    status: "ACTIVE",
    statusType: "active",
    notes: "Ledger-level parity · Tenant-partitioned audit log",
    badges: ["Channel: encrypted", "Proof state: calculated", "Residency: Primary UK", "Access restricted: Level 2"],
  },
  {
    source: "ZoikoSuite Foundation",
    destination: "Banking clearance node",
    direction: "Outbound only (Push instruction queue)",
    authority: "Confirmed",
    reconciliation: "Hardware confirmation · Real-time cryptographic receipt",
    status: "ACTIVE",
    statusType: "active",
    notes: "Deterministic failover · Multi-region idempotency key",
    badges: ["Direct API connection", "Queue mode: Streaming (p99 < 5s)", "Failover: 3x redundant", "Token validation: Strong"],
  },
  {
    source: "Contract repository share",
    destination: "ZoikoSuite Foundation",
    direction: "Inbound document publication stream",
    authority: "Enforced",
    reconciliation: "On-access verification",
    status: "AUDITED",
    statusType: "audited",
    notes: "Read-only sync · Retention schedule governed",
    badges: ["Channel: encrypted", "Event bridge: V1.4", "Checksum: SHA-256 binary", "Tenant separation: Hard ring"],
  },
  {
    source: "Identity provider class",
    destination: "ZoikoSuite Foundation",
    direction: "Federated assertion line (SAML/OIDC claim)",
    authority: "Enforced",
    reconciliation: "Ephemeral token binding",
    status: "ACTIVE",
    statusType: "active",
    notes: "Clock drift maximum 500ms · Session isolation",
    badges: ["Assertion: signed JWT", "Session gate: enforced", "Refresh cycle: 15 min", "Strict boundary: Yes"],
  },
];

export default function RelationshipRegisterSection() {
  const [activeTab, setActiveTab] = useState("All relationships");
  const tabs = ["All relationships", "By zone", "By jurisdiction", "Serial transit", "Assurance flow", "Failure line"];

  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#12364c]">
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
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                PLATFORM ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              The relationship register is the semantic authority
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-[#9ba4b5] leading-relaxed">
              A diagram can orient you. Only the register can tell you who owns
              the sources, who executes, who reconciles and what happens when it
              fails.
            </p>
          </motion.div>
        </div>

        {/* Eight Shared Zones Cards */}
        <div className="flex flex-col space-y-2.5 mb-8">
          <span className="text-[10px] font-mono tracking-wider text-[#7ea0b5] uppercase font-semibold">
            EIGHT SHARED ZONES
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {zoneCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className={`rounded-xl p-3.5 flex flex-col justify-between transition-shadow ${
                  card.isHighlight
                    ? "bg-[#0B354C] border border-[#1e506e] shadow-md"
                    : "bg-white text-slate-900 border border-slate-200/80 shadow-xs"
                }`}
              >
                <div>
                  <span
                    className={`text-[9px] font-mono font-bold tracking-wider uppercase block mb-1 ${
                      card.isHighlight ? "text-sky-300" : "text-slate-400"
                    }`}
                  >
                    {card.number}
                  </span>
                  <h3
                    className={`text-xs sm:text-[13px] font-bold leading-tight mb-1 ${
                      card.isHighlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-[11px] leading-snug ${
                      card.isHighlight ? "text-sky-200" : "text-slate-500"
                    }`}
                  >
                    {card.subtext}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP-ONLY 3D VISUAL (pf2.png) - PRESERVED 100% UNTOUCHED   */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 items-center justify-center p-2 sm:p-4"
        >
          <Image
            src="/platform-foundation/pf2.png"
            alt="Platform architecture relationship register illustration"
            width={1240}
            height={680}
            priority
            className="w-full h-auto rounded-xl object-contain block"
          />
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY TERMINAL CARD (STRICTLY HIDDEN ON DESKTOP VIA lg:hidden) */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:hidden w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Terminal Header */}
          <div className="bg-[#051620] px-3.5 py-2.5 flex items-center justify-between border-b border-[#12364c]">
            <span className="text-[9.5px] font-mono font-bold tracking-[0.12em] text-[#7ea0b5] uppercase">
              RELATIONSHIP REGISTER · MAP · SMT-744-002
            </span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-700">
                ACTIVE
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>
          </div>

          {/* Sub-header Navigation Tabs */}
          <div className="bg-[#08222F] px-3 py-2 border-b border-[#12364c] overflow-x-auto flex items-center gap-1.5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "bg-[#0d3448] text-white font-semibold border border-sky-600/50"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Inner White Container */}
          <div className="bg-white text-slate-900 p-3.5 sm:p-4 flex flex-col space-y-3">
            {mobileRelationshipCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-white p-3.5 flex flex-col space-y-2 shadow-2xs"
              >
                {/* Pathway Header */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#08222F] pb-2 border-b border-slate-100 flex-wrap">
                  <span>{card.source}</span>
                  <span className="text-[#C5A059] font-bold">»</span>
                  <span className="text-slate-700">{card.destination}</span>
                </div>

                {/* Key Attributes */}
                <div className="grid grid-cols-1 gap-1 text-[11px] font-mono">
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-400 text-[10px] w-28 shrink-0">DIRECTION:</span>
                    <span className="text-slate-800">{card.direction}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-400 text-[10px] w-28 shrink-0">AUTHORITY:</span>
                    <span className="text-slate-800">{card.authority}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-400 text-[10px] w-28 shrink-0">RECONCILIATION:</span>
                    <span className="text-slate-800">{card.reconciliation}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-[10px] w-28 shrink-0">STATUS:</span>
                    <span
                      className={`px-1.5 py-0.2 rounded text-[8.5px] font-semibold ${
                        card.statusType === "active"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-amber-50 text-amber-800 border border-amber-200"
                      }`}
                    >
                      ● {card.status}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-400 text-[10px] w-28 shrink-0">NOTES:</span>
                    <span className="text-slate-600 font-sans">{card.notes}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-100">
                  {card.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2 py-0.5 rounded text-[9px] font-mono bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Terminal Footnote */}
            <p className="text-[10px] font-mono text-slate-400 pt-1 leading-snug">
              Every cross-zone relationship establishes schema, authority, reconciliation interval, failure routing, retention boundary, and evidence path. No relationship operates as an unmetered raw network link.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
