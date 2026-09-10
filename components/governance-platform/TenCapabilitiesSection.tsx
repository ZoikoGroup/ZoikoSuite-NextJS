"use client";

import React from "react";
import { motion } from "framer-motion";

interface CapabilityCard {
  number: string;
  name: string;
  desc: string;
  question: string;
}

const capabilities: CapabilityCard[] = [
  {
    number: "CAPABILITY 01",
    name: "Governance Control Plane",
    desc: "Coordinates the posture of every other control into one common status and immutable audit record.",
    question: "“What is our operational posture right this second across all functions?”",
  },
  {
    number: "CAPABILITY 02",
    name: "Policy Management",
    desc: "Presents policy text, bounds, review cadence and historical changes to policies, and the specific decisions where each policy applied.",
    question: "“Which policy version applied, and when was it last revised?”",
  },
  {
    number: "CAPABILITY 03",
    name: "Jurisdiction Intelligence",
    desc: "Binds operational controls with coverage status, source authority, effective date and review requirement at point of use.",
    question: "“Is this action covered by an approved policy in this jurisdiction?”",
  },
  {
    number: "CAPABILITY 04",
    name: "Workflow & Approvals",
    desc: "Explicit review stages, deadlines, escalation pathways, and the segregation of duties applied to each decision.",
    question: "“Who must review, who must authorize, and whose review has timed out?”",
  },
  {
    number: "CAPABILITY 05",
    name: "Delegated Authority",
    desc: "Role, scope, limits and delegation window that state what authority the person acts under for each decision.",
    question: "“Did this person have authority to make this decision at the moment they decided?”",
  },
  {
    number: "CAPABILITY 06",
    name: "Segregation of Duties",
    desc: "Enforces incompatible role and action boundaries, with compensating controls when an unavoidable conflict occurs.",
    question: "“Can this person propose and also approve this decision?”",
  },
  {
    number: "CAPABILITY 07",
    name: "Evidence Management",
    desc: "Pre-execution gathering of supporting context, receipts, confirmations, and reports that document the decision.",
    question: "“What is the evidence pack, and who is its custodian?”",
  },
  {
    number: "CAPABILITY 08",
    name: "Audit Readiness",
    desc: "Proof of any decision, boundary change or exception in an export-ready format suitable for external review.",
    question: "“Can an auditor trace this decision without contacting us?”",
  },
  {
    number: "CAPABILITY 09",
    name: "Governed AI",
    desc: "Guards against machine authority: ensures that models only advise, never self-authorize, and that human review is stamped on all actions.",
    question: "“Did machine intelligence act within its governed boundary?”",
  },
  {
    number: "CAPABILITY 10",
    name: "Governance Analytics",
    desc: "Identifies systemic failure patterns, repeated exceptions, review-chain bottlenecks, and long-tail governance drift.",
    question: "“Where in our operation are reviews timing out, and why?”",
  },
];

export default function TenCapabilitiesSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                CANONICAL GOVERNANCE CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Ten capabilities, each
              <br />
              answering one question
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              These labels and their order are canonical. Each carries the question it answers during a decision, plus its current publication state.
            </p>
          </div>
        </div>

        {/* 10 Capabilities Grid (2 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeOut" }}
              className="rounded-2xl border border-[#e2ddd3] bg-white p-6 shadow-xs hover:border-[#c5a059] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[9.5px] font-mono font-bold tracking-[0.14em] text-[#d97706] uppercase block mb-1.5">
                  {cap.number}
                </span>
                <h3 className="text-base font-bold text-[#08222F] tracking-tight mb-2">
                  {cap.name}
                </h3>
                <p className="text-xs text-[#566573] leading-relaxed mb-4">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#f1f5f9]">
                <p className="text-[11.5px] font-medium text-[#08222F] italic leading-snug">
                  {cap.question}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
