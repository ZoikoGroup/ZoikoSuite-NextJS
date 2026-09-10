"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProofArea {
  category: string;
  title: string;
  description: string;
  links: string[];
  tag: string;
  tagIcon: "dot" | "triangle" | "square";
  tagColor: string;
}

const proofAreas: ProofArea[] = [
  {
    category: "Permission-aware",
    title: "Visibility and actions are scoped",
    description:
      "Roles, data classification and delegated authority determine what is visible and what can be done. Five disclosure levels apply per object and data class.",
    links: ["Disclosure levels", "Separation of duties"],
    tag: "SECURITY / TRUST",
    tagIcon: "dot",
    tagColor: "border-slate-400 text-[#08222F] bg-slate-50",
  },
  {
    category: "Source-aware",
    title: "Freshness and affected scope",
    description:
      "High-impact intelligence exposes its source, freshness state and the scope affected by a degraded connection.",
    links: ["Source register", "Integration architecture"],
    tag: "ARCHITECTURE / INTEGRATIONS",
    tagIcon: "triangle",
    tagColor: "border-emerald-300 text-emerald-800 bg-emerald-50/60",
  },
  {
    category: "Evidence-backed",
    title: "Provenance and verification state",
    description:
      "Supporting evidence is represented with its source, owner, verification state and freshness, using counts rather than a score.",
    links: ["Evidence health", "Evidence architecture"],
    tag: "EVIDENCE ARCHITECTURE",
    tagIcon: "square",
    tagColor: "border-slate-300 text-slate-700 bg-slate-50",
  },
  {
    category: "Human-accountable",
    title: "Authority separate from AI",
    description:
      "Material review and decision authority remains governed and structurally separate from AI findings.",
    links: ["Governed AI findings", "Responsible AI"],
    tag: "RESPONSIBLE AI / GOVERNANCE",
    tagIcon: "triangle",
    tagColor: "border-slate-400 text-slate-800 bg-slate-50",
  },
  {
    category: "Multi-entity / jurisdiction",
    title: "Scope and coverage are explicit",
    description:
      "Entity hierarchy and jurisdiction coverage are stated per record. No world-map proof claim is made anywhere on this page.",
    links: ["Coverage treatment", "Entity hierarchy"],
    tag: "MULTI-ENTITY / JURISDICTION",
    tagIcon: "square",
    tagColor: "border-blue-300 text-blue-800 bg-blue-50/60",
  },
  {
    category: "Deployment / availability",
    title: "Constraints are qualified",
    description:
      "Market, plan, integration and implementation constraints are qualified rather than assumed.",
    links: ["Deployment options", "Talk to an architect"],
    tag: "DEPLOYMENT OPTIONS",
    tagIcon: "triangle",
    tagColor: "border-amber-300 text-amber-800 bg-amber-50/60",
  },
];

export default function SevenProofAreasSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center border-t border-[#e6e2d8]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                TRUST, PROCUREMENT AND ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Seven proof areas with their
              <br />
              diligence route
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Each claim on this page has a place to be checked. Status terms
              distinguish verified capability from design intent.
            </p>
          </div>
        </div>

        {/* 6 Proof Cards (2 cols on sm/md/lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {proofAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04, ease: "easeOut" }}
              className="rounded-xl border border-[#dce5ec] bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#c5a059] font-bold tracking-wider block mb-2">
                  {area.category}
                </span>
                <h3 className="text-[15px] sm:text-base font-bold text-[#08222F] mb-2 leading-snug">
                  {area.title}
                </h3>
                <p className="text-xs text-[#566874] leading-relaxed mb-4">
                  {area.description}
                </p>

                {/* Sub links list */}
                <div className="space-y-1 mb-6 text-xs text-[#08222F] font-medium underline underline-offset-2 decoration-[#cbd5e1] hover:decoration-[#08222F] cursor-pointer">
                  {area.links.map((link, lIdx) => (
                    <div key={lIdx} className="hover:text-[#c5a059] transition-colors">
                      {link}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Pill at bottom */}
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-[9.5px] font-mono font-bold tracking-wider uppercase ${area.tagColor}`}
                >
                  {area.tagIcon === "dot" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  )}
                  {area.tagIcon === "triangle" && <span>▲</span>}
                  {area.tagIcon === "square" && <span>■</span>}
                  {area.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Trust Box */}
        <div className="rounded-xl border border-[#dce5ec] bg-white p-6 sm:p-7 shadow-xs mb-8">
          <span className="text-[10px] font-mono font-bold tracking-[0.16em] text-[#8c9ca9] uppercase block mb-1.5">
            OPERATIONAL TRUST
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#08222F] mb-1.5">
            Already a customer?
          </h3>
          <p className="text-xs sm:text-[13px] text-[#566874] leading-relaxed mb-5">
            Reach operational resources directly. No form and no lead submission required.
          </p>

          <div className="flex flex-wrap items-center gap-2.5">
            {["Documentation", "Support", "System status", "Release notes"].map(
              (btn, bIdx) => (
                <button
                  key={bIdx}
                  className="px-4 py-2 rounded-full border border-[#cbd5e1] bg-[#f8fafc] hover:bg-[#eef2f6] text-xs font-medium text-[#08222F] transition-colors"
                >
                  {btn}
                </button>
              )
            )}
          </div>
        </div>

        {/* Footer Audit Note */}
        <div className="pt-2">
          <p className="text-[11px] text-[#788e9d] leading-relaxed">
            Status last reviewed 31 July 2026. No certification mark is displayed until independently verified and approved.
          </p>
        </div>
      </div>
    </section>
  );
}
