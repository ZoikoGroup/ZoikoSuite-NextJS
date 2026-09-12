"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface MobilePathwayItem {
  title: string;
  badge: { text: string; color: string };
  desc: string;
  calloutTitle: string;
  calloutDesc: string;
  ctaText: string;
  ctaSubtext: string;
  isGoldBorder?: boolean;
}

const mobilePathways: MobilePathwayItem[] = [
  {
    title: "Prepare for international expansion",
    badge: { text: "PATHWAY ACTIVE", color: "bg-amber-100 text-amber-800 border-amber-300" },
    desc: "The primary readiness pathway: scope, operating divisions, authoritative sources, jurisdiction status, named owners, blockers, evidence and transition dependencies.",
    calloutTitle: "MANDATORY BOUNDARY",
    calloutDesc: "No jurisdiction coverage, registration, filing or employee-level statutory payroll advice is committed outside an approved commercial document.",
    ctaText: "Request transition review",
    ctaSubtext: "Estimated 2 hours initial scope",
    isGoldBorder: true,
  },
  {
    title: "Global compliance readiness",
    badge: { text: "GATE IN REVIEW", color: "bg-amber-100 text-amber-800 border-amber-300" },
    desc: "Continuous obligations, controls, sources, evidence, exceptions and specialist review readiness across the entities in scope.",
    calloutTitle: "MANDATORY BOUNDARY",
    calloutDesc: "Continuously monitoring status is not statutory legal counsel or regulatory audit defense. Records are verifiable evidence only.",
    ctaText: "Inspect criteria",
    ctaSubtext: "46 jurisdictional rules active",
  },
  {
    title: "Adapt to regulatory change",
    badge: { text: "ACTIVE DETECTIONS", color: "bg-amber-100 text-amber-800 border-amber-300" },
    desc: "A heuristics-qualified change queue showing the impacted scope, assigned review, implementation status and resulting evidence.",
    calloutTitle: "MANDATORY BOUNDARY",
    calloutDesc: "Regulatory change detection reports delta events across legal sources. Implementation and signing remain a human policy decision.",
    ctaText: "Review change queue",
    ctaSubtext: "12 in scope",
  },
  {
    title: "Support M&A and divestitures",
    badge: { text: "ROOM ACTIVE", color: "bg-sky-100 text-sky-800 border-sky-300" },
    desc: "Operating integration and separation baseline workstreams — systems, sources, obligations, authority and evidence across the affected entities.",
    calloutTitle: "MANDATORY BOUNDARY",
    calloutDesc: "Separation and integration baselines map operational dependencies. Valuations, legal drafting and deal terms remain with deal principals.",
    ctaText: "Explore baseline",
    ctaSubtext: "Day 1 / Day 100 separation plans",
  },
  {
    title: "Enable scalable governance",
    badge: { text: "OPERATING BASELINE", color: "bg-emerald-100 text-emerald-800 border-emerald-300" },
    desc: "A global baseline plus entity and jurisdiction variance, with the authority, evidence, and exception model that makes local differences manageable.",
    calloutTitle: "MANDATORY BOUNDARY",
    calloutDesc: "Entity variations are explicit exceptions. Standard policy operates as default unless an approved statutory override is filed.",
    ctaText: "See Governance Platform",
    ctaSubtext: "Universal rule engine",
  },
  {
    title: "Drive sustainable growth",
    badge: { text: "SCALE RESILIENT", color: "bg-rose-100 text-rose-800 border-rose-300" },
    desc: "Operational readability, control resilience, evidence and source honesty as the operating entity grows.",
    calloutTitle: "MANDATORY BOUNDARY",
    calloutDesc: "Sustainable growth refers strictly to operational system health, control resilience, and evidence integrity, not ESG or statutory reporting.",
    ctaText: "Engage advisory",
    ctaSubtext: "Governance roadmap and architecture",
  },
];

export default function MobileSixPathwaysView() {
  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="grid grid-cols-1 gap-4">
        {mobilePathways.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl bg-white p-4 sm:p-5 flex flex-col justify-between shadow-md transition-all duration-200 ${
              item.isGoldBorder
                ? "border-2 border-[#D0AA55]"
                : "border border-slate-200/90"
            }`}
          >
            <div>
              {/* Title & Badge */}
              <h3 className="text-sm sm:text-base font-bold text-[#08222F] mb-1.5 leading-snug">
                {item.title}
              </h3>
              <div className="mb-3">
                <span
                  className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold border uppercase tracking-wider ${item.badge.color}`}
                >
                  {item.badge.text}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Mandatory Boundary Box */}
              <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-3 mb-4">
                <span className="text-[9px] font-mono font-bold text-rose-700 tracking-wider uppercase block mb-1">
                  {item.calloutTitle}
                </span>
                <p className="text-[11px] text-slate-700 leading-relaxed">
                  {item.calloutDesc}
                </p>
              </div>
            </div>

            {/* Bottom Button + Subtext */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1">
              <button
                type="button"
                className="px-3.5 py-2 rounded-lg bg-[#0F476A] hover:bg-[#08222F] text-white font-semibold text-xs transition-colors text-center"
              >
                {item.ctaText}
              </button>
              <span className="text-[10.5px] font-mono text-slate-500">
                {item.ctaSubtext}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Warning Quote Box at Bottom */}
      <div className="rounded-xl border border-[#f0d38d] bg-[#FDF6E7] p-4 text-xs text-slate-800 leading-relaxed">
        <span className="text-[9.5px] font-mono font-bold text-[#b3821a] uppercase tracking-wider block mb-1.5">
          HOW EACH STATUS AFFECTS AN OPEN REVIEW
        </span>
        <p className="text-[11.5px] text-slate-700 leading-relaxed font-normal">
          Each pathway requires verifiable capability and sovereign authority before an approved, classified gate is unlocked. An expired statutory review state automatically downgrades a workflow into a blocked status report, which is why all pathways above require documented evidence and human signing as a condition of growth outcome.
        </p>
      </div>
    </div>
  );
}
