"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CorrectingDataSeparateAuthoritySection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#08222F] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (hidden lg:block) - 100% UNTOUCHED DESKTOP DESIGN         */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-7 flex flex-col text-left"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#c5a059]" />
                <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                  MAPPING, EXTRACTION AND TRANSFORMATION
                </span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
                Correcting data is a separate authority from moving it
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-5 flex flex-col justify-end text-left"
            >
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                A mapping can transform a value. Only the data owner can authorize a correction in the authoritative source &mdash; and migration access is temporary, scoped and expiring.
              </p>
            </motion.div>
          </div>

          {/* 2 Columns: msm3.png on Left, Mapping Manifest Terminal Card on Right */}
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left Column: Graphic (msm3.png) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="col-span-5 flex justify-center w-full"
            >
              <div className="w-full max-w-[500px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
                <Image
                  src="/migration-shadow-mode/msm3.png"
                  alt="Correcting data is a separate authority from moving it illustration"
                  width={700}
                  height={700}
                  className="w-full h-auto object-cover block"
                />
              </div>
            </motion.div>

            {/* Right Column: Mapping Manifest Terminal Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="col-span-7 w-full text-left"
            >
              <div className="rounded-2xl border border-slate-700/80 bg-white text-slate-900 shadow-xl overflow-hidden">
                <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
                  <span className="text-[10.5px] font-mono font-bold text-[#c5a059] tracking-wider uppercase">
                    MAPPING MANIFEST &middot; ETL-2024-0801
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  </div>
                </div>

                <div className="divide-y divide-slate-100 p-5 text-xs">
                  <div className="py-2 flex items-center justify-between gap-4">
                    <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider min-w-[140px] shrink-0">
                      RECORD IDENTIFIER
                    </span>
                    <span className="font-mono font-bold text-slate-900 text-[11px]">
                      EMP-GLOBAL-0918-GB-ENG-0041
                    </span>
                  </div>

                  <div className="py-2 flex items-center justify-between gap-4">
                    <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider min-w-[140px] shrink-0">
                      SOURCE FIELD
                    </span>
                    <span className="font-mono text-slate-700 text-[11px]">
                      home_country &rarr; ISO country code
                    </span>
                  </div>

                  <div className="py-2 flex items-center justify-between gap-4">
                    <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider min-w-[140px] shrink-0">
                      TRANSFORMATION
                    </span>
                    <span className="text-slate-800 text-[11.5px] font-medium">
                      Convert &ldquo;UK&rdquo; &rarr; &ldquo;GB&rdquo; (per ISO 3166-1 standard)
                    </span>
                  </div>

                  <div className="py-2 flex items-center justify-between gap-4">
                    <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider min-w-[140px] shrink-0">
                      SOURCE VALUE
                    </span>
                    <span className="text-slate-600 text-[11px]">
                      Current value in source: &ldquo;United Kingdom&rdquo;
                    </span>
                  </div>

                  <div className="py-2 flex items-center justify-between gap-4">
                    <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider min-w-[140px] shrink-0">
                      TRANSFORMED VALUE
                    </span>
                    <span className="font-semibold text-emerald-700 text-[11px]">
                      Proposed output value: &ldquo;GB&rdquo;
                    </span>
                  </div>

                  <div className="py-2 flex items-center justify-between gap-4">
                    <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider min-w-[140px] shrink-0">
                      INTEGRITY CHECK
                    </span>
                    <span className="text-slate-700 text-[11px]">
                      Country code lookup: verified against ISO reference
                    </span>
                  </div>

                  <div className="py-2 flex items-center justify-between gap-4">
                    <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider min-w-[140px] shrink-0">
                      SOURCE RECORD HASH
                    </span>
                    <span className="font-mono text-slate-500 text-[10px]">
                      SHA256: 4f8a92c... (exact hash calculated at extraction)
                    </span>
                  </div>

                  <div className="py-2 flex items-center justify-between gap-4">
                    <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider min-w-[140px] shrink-0">
                      AUTHORIZED BY
                    </span>
                    <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider border border-amber-300 bg-amber-50 text-amber-800 w-fit">
                      Data owner approval pending / not yet authorized
                    </span>
                  </div>

                  <div className="py-2 flex items-center justify-between gap-4">
                    <span className="text-[9.5px] font-mono font-semibold text-slate-500 uppercase tracking-wider min-w-[140px] shrink-0">
                      ACTION
                    </span>
                    <span className="text-rose-700 font-semibold text-[11px]">
                      Transformation blocked until authorized by data owner
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    <strong className="text-slate-900 font-semibold">Authority separation:</strong> Migration tooling can transform values for ingestion but cannot overwrite the source record without explicit data owner authorization. Audit record created for all transformations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (block lg:hidden) - EXACT MATCH TO USER'S MOBILE SCREENSHOT */}
        {/* ========================================================================= */}
        <div className="block lg:hidden flex flex-col text-left">
          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#c5a059]" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              MAPPING, INTERFACES AND MIGRATION ACCESS
            </span>
          </div>

          {/* Mobile Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08222F] leading-tight mb-3">
            Correcting data is a separate authority from moving it
          </h2>

          {/* Mobile Subtitle */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
            A mapping can transform a value. Only the data owner can authorize a correction to the authoritative source &mdash; and migration access is temporary, scoped and expiring.
          </p>

          {/* Card 1: Mapping Manifest Card */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-white text-[#08222F] mb-8">
            <div className="bg-[#08222F] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-300">
                MAPPING MANIFEST &middot; SYNTHETIC FIXTURE
              </div>
              <div className="text-slate-500 font-mono tracking-widest text-xs">
                •••
              </div>
            </div>

            <div className="px-4 py-2.5 bg-[#F6F4EE] border-b border-[#E8E2D6] text-[9px] font-mono text-slate-600 font-semibold tracking-wide">
              FIELD MAPPINGS WITH TRANSFORMATION, CORRECTION AUTHORITY AND EVIDENCE
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px] border-collapse min-w-[580px]">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-[#EAE4DA] text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-2 px-3">SOURCE FIELD</th>
                    <th className="py-2 px-3">TARGET FIELD</th>
                    <th className="py-2 px-3">TRANSFORMATION</th>
                    <th className="py-2 px-3">CORRECTION AUTHORITY</th>
                    <th className="py-2 px-3">STATUS</th>
                    <th className="py-2 px-3 text-right">EVIDENCE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4DA] text-[10px]">
                  {/* Row 1 */}
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                      Supplier identifier
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      Supplier reference
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      Direct
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      Procurement &mdash; data owner
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-300">
                        ■ APPROVED
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500">
                      Mapping record
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                      Payment terms
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      Obligation term
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      Normalized to day count
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      Procurement &mdash; data owner
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-300">
                        ■ APPROVED
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500">
                      Regulatory mapping standard
                    </td>
                  </tr>

                  {/* Row 3 - Highlighted Gold */}
                  <tr className="bg-[#FFFBF2]">
                    <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                      Supplier status
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      Lifecycle state
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      Value list diffs &mdash; 6 source values, 4 target
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-400 whitespace-nowrap">
                        ■ REQUIRED DATA-OWNER DECISION
                      </span>
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-300">
                        ■ IN REVIEW
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500">
                      Proposed mapping
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                      Bank account reference
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      Creditor reference
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      Direct &middot; masked in all non-production use
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      Treasury &mdash; data owner
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-300">
                        ■ APPROVED
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500">
                      Masking verified record
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                      Legacy tracking notes
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      Not mapped
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      Exclusion from scope
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      All
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-300">
                        ■ EXCLUDED &mdash; RECORDED
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500">
                      Exclusion rationale
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="px-4 py-3 bg-[#FAF8F5] border-t border-[#EAE4DA] text-[10px] font-mono text-slate-500 leading-relaxed">
              An excluded field is recorded with the rationale rather than silently dropped. Migration never writes a correction back to an authoritative source without the data owner&apos;s recorded authorization.
            </div>
          </div>

          {/* Card 2: Migration Access Record */}
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
              MIGRATION ACCESS &mdash; TEMPORARY BY DESIGN
            </p>

            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-white text-[#08222F]">
              <div className="bg-[#08222F] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
                <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-300">
                  ACCESS RECORD &middot; MIG-ACC-204
                </div>
                <div className="text-slate-500 font-mono tracking-widest text-xs">
                  •••
                </div>
              </div>

              <div className="p-4 divide-y divide-[#EAE4DA] text-[10.5px]">
                <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-mono text-[9.5px]">Service Identity</span>
                  <span className="font-mono text-slate-800">svc-mig-04 &middot; migration wave1 scope</span>
                </div>
                <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-mono text-[9.5px]">Granted for</span>
                  <span className="text-slate-800">Wave 1: supplier and payables cutover</span>
                </div>
                <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-mono text-[9.5px]">Permission scope</span>
                  <span className="text-slate-800">Read-only &middot; named objects &middot; no write to source</span>
                </div>
                <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-mono text-[9.5px]">Environment</span>
                  <span className="text-slate-800">Illustrative Evaluation</span>
                </div>
                <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-mono text-[9.5px]">Approved by</span>
                  <span className="text-slate-800">Security architect &middot; with data owner</span>
                </div>
                <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-mono text-[9.5px]">Effective</span>
                  <span className="text-slate-800">Bounded to the wave, with automated expiry</span>
                </div>
                <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-mono text-[9.5px]">Expiry behaviour</span>
                  <span className="text-slate-800">Revokes write automatically; renewal requires the same approval path</span>
                </div>
                <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-mono text-[9.5px]">Credential values</span>
                  <span className="font-bold text-[#0B1E28]">Never displayed &mdash; in product or on this page</span>
                </div>
                <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-mono text-[9.5px]">Audit</span>
                  <span className="text-slate-800">Every use attributable to the identity and the wave</span>
                </div>
              </div>

              <div className="px-4 py-3 bg-[#FAF8F5] border-t border-[#EAE4DA] text-[10px] font-mono text-slate-500 leading-relaxed">
                Migration access is not a standing integration. It is granted for a bounded scope, expires by default, and is separately approved from the runtime interfaces the platform uses in normal operation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
