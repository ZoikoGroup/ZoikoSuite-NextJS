"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SourceRegisterItem {
  source: string;
  sourceId: string;
  lastSync: string;
  lastValidData: string;
  health: string;
  healthStatus: "healthy" | "delayed" | "degraded" | "auth_expired" | "unknown";
  isHighlighted?: boolean;
}

const sourceRegisterData: SourceRegisterItem[] = [
  {
    source: "GL ledger",
    sourceId: "GL-PROD",
    lastSync: "14:02 today",
    lastValidData: "14:02 today",
    health: "HEALTHY",
    healthStatus: "healthy",
  },
  {
    source: "Contract repository",
    sourceId: "CTR-PROD",
    lastSync: "13:48 today",
    lastValidData: "13:48 today",
    health: "DELAYED",
    healthStatus: "delayed",
  },
  {
    source: "Tax filing connector",
    sourceId: "FIL-US",
    lastSync: "2 days ago",
    lastValidData: "02 Aug 09:14",
    health: "DEGRADED",
    healthStatus: "degraded",
    isHighlighted: true,
  },
  {
    source: "Identity provider",
    sourceId: "IDP-PROD",
    lastSync: "6 hours ago",
    lastValidData: "6 hours ago",
    health: "AUTHENTICATION EXPIRED",
    healthStatus: "auth_expired",
  },
  {
    source: "Payroll",
    sourceId: "PAY-PROD",
    lastSync: "11:30 today",
    lastValidData: "11:30 today",
    health: "HEALTHY",
    healthStatus: "healthy",
  },
  {
    source: "Vendor master",
    sourceId: "VMD-PROD",
    lastSync: "14:02 today",
    lastValidData: "14:02 today",
    health: "HEALTHY",
    healthStatus: "healthy",
  },
  {
    source: "Data platform export",
    sourceId: "DWH-PROD",
    lastSync: "1 hour ago",
    lastValidData: "1 hour ago",
    health: "UNKNOWN",
    healthStatus: "unknown",
  },
];

export default function ConnectorHealthSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center border-t border-[#e2e8f0]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                SOURCE AND INTEGRATION HEALTH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Connector health and intelligence
              <br />
              impact are separate questions
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              A degraded connector does not mean every previously synchronized
              record is invalid. The affected scope and the last known valid
              state are both identified.
            </p>
          </div>
        </div>

        {/* Full-width 3D Graphic Container (pi9.png) - PRESERVED FOR DESKTOP ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full rounded-2xl overflow-hidden border border-[#e2e8f0] bg-[#f8fafc] shadow-lg"
        >
          <Image
            src="/operating-intelligence/pi9.png"
            alt="Connector health and dual sync database pipeline illustration"
            width={1240}
            height={640}
            priority
            className="w-full h-auto object-contain block"
          />
        </motion.div>

        {/* Mobile Terminal Table Container - SHOWN ON MOBILE ONLY (lg:hidden) */}
        <div className="block lg:hidden w-full space-y-4">
          <div className="rounded-xl overflow-hidden border border-[#dbe4eb] bg-white shadow-lg">
            {/* Top Bar (Dark) */}
            <div className="bg-[#081721] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[10.5px] font-mono font-bold text-white tracking-wider">
                  SOURCE REGISTER · LAST SUCCESSFUL SYNC VS LAST KNOWN VALID DATA
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            {/* Subheader (White with gray text) */}
            <div className="bg-white px-4 py-2.5 border-b border-[#edf2f7]">
              <span className="text-[9px] font-mono font-semibold text-[#64748b] tracking-wider uppercase">
                NINE FIELDS PER SOURCE, INCLUDING AFFECTED INTELLIGENCE SCOPE
              </span>
            </div>

            {/* Horizontal Scroll Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="border-b border-[#edf2f7] bg-white text-[9.5px] font-mono font-bold text-[#64748b] uppercase tracking-wider">
                    <th className="py-2.5 px-3">SOURCE / CONNECTOR</th>
                    <th className="py-2.5 px-3">OBJECT / SOURCE ID</th>
                    <th className="py-2.5 px-3">LAST SUCCESSFUL SYNC</th>
                    <th className="py-2.5 px-3">LAST KNOWN VALID DATA</th>
                    <th className="py-2.5 px-3 text-right">SOURCE HEALTH</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#edf2f7] text-[11px] font-mono">
                  {sourceRegisterData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        row.isHighlighted
                          ? "bg-[#fef7ee] border-y border-amber-200"
                          : "bg-white hover:bg-[#f8fafc] transition-colors"
                      }
                    >
                      <td className="py-3 px-3 font-semibold text-[#08222F] whitespace-nowrap">
                        {row.source}
                      </td>
                      <td
                        className={`py-3 px-3 whitespace-nowrap ${
                          row.isHighlighted ? "text-[#b45309]" : "text-[#64748b]"
                        }`}
                      >
                        {row.sourceId}
                      </td>
                      <td
                        className={`py-3 px-3 whitespace-nowrap ${
                          row.isHighlighted ? "text-[#78350f]" : "text-[#334155]"
                        }`}
                      >
                        {row.lastSync}
                      </td>
                      <td
                        className={`py-3 px-3 whitespace-nowrap ${
                          row.isHighlighted ? "text-[#78350f]" : "text-[#334155]"
                        }`}
                      >
                        {row.lastValidData}
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap">
                        {row.healthStatus === "healthy" ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-emerald-300 bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                            <span>▼</span>
                            HEALTHY
                          </span>
                        ) : row.healthStatus === "delayed" ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-amber-300 bg-amber-50 text-amber-700 text-[10px] font-bold">
                            <span>▼</span>
                            DELAYED
                          </span>
                        ) : row.healthStatus === "degraded" ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-rose-300 bg-rose-50 text-rose-700 text-[10px] font-bold">
                            <span>▼</span>
                            DEGRADED
                          </span>
                        ) : row.healthStatus === "auth_expired" ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-rose-300 bg-rose-50 text-rose-700 text-[10px] font-bold">
                            <span>▼</span>
                            AUTHENTICATION EXPIRED
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-slate-300 bg-slate-50 text-slate-700 text-[10px] font-bold">
                            <span>▼</span>
                            UNKNOWN
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note box below table inside card */}
            <div className="p-4 bg-white border-t border-[#edf2f7]">
              <p className="text-[10px] text-[#64748b] leading-relaxed">
                The highlighted row demonstrates the required treatment: a degraded connector names its affected scope precisely, exposes its last known valid timestamp, and leaves other jurisdictional registers unaffected. System identity and schema detail appear only for permitted technical users; no credentials or secrets are ever displayed.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <button className="bg-[#08222F] hover:bg-[#0e3448] text-white px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2 transition-colors shadow-sm">
              View integration architecture
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
