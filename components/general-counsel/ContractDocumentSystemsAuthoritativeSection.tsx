"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const authoritativeLayers = [
  {
    layer: "Contract / legal record",
    source: "Approved source of record — CLM or repository",
    role: "Indirect co-content and workflow linkage where configured",
  },
  {
    layer: "Obligation",
    source: "Approved source, or explicitly configured ZoikoSuite authority",
    role: "Context, status, routing and evidence",
  },
  {
    layer: "Corporate / legal authority",
    source: "Approved governance source — board or delegation schedule",
    role: "Evaluate source and scope only",
  },
  {
    layer: "Product permission",
    source: "ZoikoSuite role and permission configuration",
    role: "Control interface and action access",
  },
  {
    layer: "Execution",
    source: "Approved business system, or a bounded service identity",
    role: "Read or execute only where approved integration and authority exist",
  },
  {
    layer: "Evidence",
    source: "Source systems plus the evidence architecture",
    role: "Link and record the manifest where configured",
  },
];

export default function ContractDocumentSystemsAuthoritativeSection() {
  return (
    <section id="source-of-record" className="w-full bg-[#FAF8F5] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                SOURCE OF RECORD
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Your contract and document systems can stay authoritative
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end text-left"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Six layers, each with a displayed owner and an explicit ZoikoSuite role. Only two are ever ZoikoSuite-owned.
            </p>
          </motion.div>
        </div>

        {/* Visual Architecture Banner (gc2.png) - DESKTOP ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200/80 bg-white"
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-[2.1/1]">
            <Image
              src="/general-counsel/gc2.png"
              alt="Your contract and document systems can stay authoritative"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1240px) 100vw, 1240px"
              priority
            />
          </div>
        </motion.div>

        {/* Mobile View: Dedicated Six-Layer Authoritative Table & Action Button */}
        <div className="block lg:hidden w-full text-left">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[520px]">
                <thead>
                  <tr className="bg-slate-50/90 border-b border-slate-200">
                    <th className="py-3 px-3.5 text-[9.5px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      LAYER
                    </th>
                    <th className="py-3 px-3.5 text-[9.5px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      DISPLAYED OWNER / SOURCE
                    </th>
                    <th className="py-3 px-3.5 text-[9.5px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      AUTHORITY ROLE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {authoritativeLayers.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900 text-[11.5px] align-top">
                        {row.layer}
                      </td>
                      <td className="py-3 px-3.5 text-slate-600 text-[11px] leading-relaxed align-top">
                        {row.source}
                      </td>
                      <td className="py-3 px-3.5 text-slate-700 text-[11px] leading-relaxed align-top">
                        {row.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Bottom Notice */}
          <div className="border-l-2 border-[#c5a059] bg-slate-50/80 p-3.5 rounded-r-lg mt-5 text-left">
            <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
              Existing contract, document, ERP, procurement and identity systems can remain authoritative as your implementation requires. Co-existence is the design assumption, not a fallback.
            </p>
          </div>

          {/* Direct CTA Link Button */}
          <div className="mt-4 flex justify-start">
            <Link
              href="#authority-model"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#08222F] hover:bg-[#0c3143] text-white text-[12px] font-semibold transition-colors shadow-sm"
            >
              <span>See the source-of-record model &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
