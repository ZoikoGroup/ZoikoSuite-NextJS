"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface PublicationStateRow {
  tag: string;
  tagClass: string;
  description: string;
}

const publicationStates: PublicationStateRow[] = [
  {
    tag: "PUBLIC",
    tagClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
    description: "Documentation is published and open to all outside.",
  },
  {
    tag: "GATED",
    tagClass: "bg-amber-50 text-amber-800 border-amber-200",
    description: "Available under agreement or NDA, not on the open web.",
  },
  {
    tag: "CONTRACTED SCOPE",
    tagClass: "bg-sky-50 text-sky-800 border-sky-200",
    description: "Accessible by authorized users within approved implementation scope.",
  },
  {
    tag: "NOT PUBLISHED",
    tagClass: "bg-slate-100 text-slate-700 border-slate-300",
    description: "Internal or unconfirmed state. Nobody outside sees this surface.",
  },
];

interface MobileApiRow {
  surface: string;
  publicationState: string;
  stateType: "contracted" | "gated" | "restricted" | "not_published";
  audience: string;
  scope: string;
  documentation: string;
  monitoring: string;
}

const mobileApiRows: MobileApiRow[] = [
  {
    surface: "Command action interface",
    publicationState: "CONTRACTED ONLY",
    stateType: "contracted",
    audience: "Restricted to authorized scope",
    scope: "Customer context",
    documentation: "Provided upon grant",
    monitoring: "Current",
  },
  {
    surface: "Enterprise outbound event stream",
    publicationState: "GATED",
    stateType: "gated",
    audience: "Approved customer contracts",
    scope: "Under agreement",
    documentation: "Prior",
    monitoring: "Audited",
  },
  {
    surface: "Core subscription interface",
    publicationState: "RESTRICTED SCOPE",
    stateType: "restricted",
    audience: "Primary approved systems",
    scope: "PER-TENANT ALLOCATION",
    documentation: "Requires certification",
    monitoring: "Strictly isolated",
  },
  {
    surface: "Administrative interface",
    publicationState: "INTERNAL ONLY · NOT FOR CLIENT EXPOSURE",
    stateType: "not_published",
    audience: "Privileged sub-tier",
    scope: "—",
    documentation: "—",
    monitoring: "—",
  },
];

export default function ApiPlatformPublicationStateSection() {
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
                API PLATFORM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-tight">
              Publication state is the first field,
              <br className="hidden sm:inline" />{" "}
              not the last
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
              Before any technical detail, each surface declares whether it is
              published at all. Everything else follows from that.
            </p>
          </motion.div>
        </div>

        {/* Four Publication States List (Preserved for both desktop and mobile) */}
        <div className="grid grid-cols-1 gap-2.5 mb-4">
          {publicationStates.map((state, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-slate-200/80 bg-white p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 shadow-xs"
            >
              <span
                className={`px-3 py-1 rounded text-[10px] sm:text-[11px] font-mono font-bold tracking-wider border uppercase shrink-0 w-fit ${state.tagClass}`}
              >
                {state.tag}
              </span>
              <span className="text-xs sm:text-[13px] text-slate-700">
                {state.description}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Privacy and Testing Scope Callout Banner */}
        <div className="rounded-xl border border-[#e2ddd3] bg-[#f8f6f0] p-3.5 sm:p-4 mb-8">
          <p className="text-xs sm:text-[12.5px] text-slate-700 font-mono">
            <strong className="text-slate-900 uppercase">PRIVACY AND TESTING SCOPE:</strong>{" "}
            Should be separated objectively; configuration is on record, verified, and audited.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP-ONLY 2-COLUMN VIEW (pf5.png) - PRESERVED 100% UNTOUCHED */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual (pf5.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-white p-3 sm:p-4 flex items-center justify-center"
          >
            <Image
              src="/platform-foundation/pf5.png"
              alt="API platform publication state evaluation illustration"
              width={500}
              height={500}
              priority
              className="w-full h-auto object-contain rounded-xl block"
            />
          </motion.div>

          {/* Right Column: Public Examples Box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="border border-slate-200 bg-white rounded-2xl p-6 sm:p-8 shadow-xs">
              <span className="text-[10.5px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-3">
                PUBLIC EXAMPLES
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Any example on a public page uses synthetic placeholder values only —
                never tokens, tenant identifiers, salt-id, secrets or production
                data.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY EXTENSIONS (STRICTLY HIDDEN ON DESKTOP VIA lg:hidden) */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-5">
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
                API PUBLICATION REGISTRY · SMT-744-005
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
                REGISTER RECORDS: PUBLICATION STATE, ENVIRONMENT AVAILABILITY, GRACE AND HEALTH STATUS
              </span>

              <div className="overflow-x-auto -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[580px] text-left border-collapse text-[10.5px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                      <th className="py-2 pr-2 font-semibold">SURFACE</th>
                      <th className="py-2 px-2 font-semibold">PUBLICATION STATE</th>
                      <th className="py-2 px-2 font-semibold">AUDIENCE</th>
                      <th className="py-2 px-2 font-semibold">SCOPE</th>
                      <th className="py-2 px-2 font-semibold">DOCUMENTATION</th>
                      <th className="py-2 pl-2 font-semibold">MONITORING</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {mobileApiRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="py-2 pr-2 font-semibold text-slate-900 whitespace-nowrap font-sans">
                          {row.surface}
                        </td>
                        <td className="py-2 px-2 whitespace-nowrap">
                          {row.stateType === "contracted" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-sky-50 text-sky-800 border border-sky-200 font-semibold">
                              ● CONTRACTED ONLY
                            </span>
                          )}
                          {row.stateType === "gated" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                              ● GATED
                            </span>
                          )}
                          {row.stateType === "restricted" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-sky-50 text-sky-800 border border-sky-200 font-semibold">
                              ● RESTRICTED SCOPE
                            </span>
                          )}
                          {row.stateType === "not_published" && (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-rose-50 text-rose-700 border border-rose-200 font-semibold">
                              ● INTERNAL ONLY · NOT FOR CLIENT EXPOSURE
                            </span>
                          )}
                        </td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap font-sans">
                          {row.audience}
                        </td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap">
                          {row.scope === "PER-TENANT ALLOCATION" ? (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-[#FFF9EB] text-amber-900 border border-[#E8C882]">
                              ● PER-TENANT ALLOCATION
                            </span>
                          ) : (
                            row.scope
                          )}
                        </td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap font-sans">{row.documentation}</td>
                        <td className="py-2 pl-2 text-slate-600 whitespace-nowrap font-sans">{row.monitoring}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footnote */}
              <p className="text-[9.5px] font-mono text-slate-400 pt-3 border-t border-slate-100 mt-2 leading-snug">
                Defines surface exposure and license: administrative vs contracted vs public, instant timeouts, quotas, deprecation policies and secrets. Tokens and tenant identifiers are strictly barred.
              </p>
            </div>
          </motion.div>

          {/* Red-Bordered What This Page Does Not Do Callout */}
          <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-4 flex flex-col space-y-2.5">
            <span className="text-[10px] font-mono font-bold tracking-wider text-rose-800 uppercase">
              WHAT THIS PAGE DOES NOT DO: NO LOGO WALL
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                "REST",
                "GraphQL",
                "SOAP",
                "gRPC",
                "Webhooks",
                "Publication",
                "Self-service key",
                "Public documentation",
                "Audit protocol",
                "Park NDA",
                "Any SLA",
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[9.5px] font-mono font-medium bg-white text-rose-900 border border-rose-200 shadow-2xs"
                >
                  {pill}
                </span>
              ))}
            </div>
            <p className="text-xs text-rose-900/90 leading-relaxed pt-1">
              Named software is implied by the existential relationship platform: idempotency, retry behaviour, rate controls, event wrappers and deprecation policy are evaluated by reference to API govern tiers approved for a specific claim.
            </p>
          </div>

          {/* Public Examples Box */}
          <div className="border border-slate-200 bg-white rounded-xl p-4 shadow-xs">
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1.5">
              PUBLIC EXAMPLES
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Any example on a public page uses synthetic placeholder values only — never tokens, tenant identifiers, salt-id, secrets or production data.
            </p>
          </div>

          {/* Mobile CTA Button */}
          <div className="pt-1">
            <Link
              href="/platform-overview"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#08222F] text-white text-xs font-semibold hover:bg-[#0c2f42] transition-colors shadow-sm"
            >
              <span>Talk to a solutions architect</span>
              <span className="text-[#C5A059]">»</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
