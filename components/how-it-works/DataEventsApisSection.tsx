"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface IdentifierItem {
  label: string;
  value: string;
}

const coreIdentifiers: IdentifierItem[] = [
  { label: "action_id", value: "ACT-2026-11408" },
  { label: "object_id", value: "SP-40119" },
  { label: "entity_id", value: "ENT-UK-014" },
  { label: "jurisdiction_id", value: "JUR-GB" },
  { label: "evaluation_id", value: "EVL-2026-30514" },
  { label: "decision_id", value: "DEC-2026-88451" },
  { label: "execution_id", value: "EXE-2026-51002" },
  { label: "manifest_id", value: "EVM-2026-11408" },
  { label: "correlation_id", value: "COR-2026-11408" },
  { label: "idempotency_key", value: "ik-8f2c-11408" },
];

const reliabilityControls: string[] = [
  "Schema validation",
  "Version compatibility",
  "Idempotency",
  "Retry policy",
  "Dead-letter handling",
  "Replay authorization",
  "Reconciliation",
  "Observable status",
  "Audit linkage",
];

const securityControls: string[] = [
  "Least privilege",
  "Credential rotation",
  "Signed webhooks",
  "Network controls",
  "Data minimization",
  "Regional routing",
  "Payload references",
];

export default function DataEventsApisSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Old Eyebrow Style (with line) */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Data, events, APIs, and integration control
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-white">
                Carry governed context across systems and events
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed">
                Ten identifiers travel with the action. If context, identity,
                state, or attribution is lost at a system boundary, the
                governance model is lost with it.
              </p>
            </motion.div>
          </div>

          {/* Main Content Layout: Left Badges & Controls, Right Image & Disclaimer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            {/* Left Column: Identifiers & Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col space-y-8"
            >
              {/* Core Identifiers */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6D79] block mb-3">
                  Core Identifiers
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {coreIdentifiers.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#0C2A38] border border-[#1e293b] text-xs font-mono"
                    >
                      <span className="text-[#D0AA55]">{item.label}</span>
                      <span className="text-[#BFD6E3] font-medium">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reliability Controls */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6D79] block mb-3">
                  Reliability Controls
                </span>
                <div className="flex flex-wrap gap-2">
                  {reliabilityControls.map((text, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md text-xs font-medium bg-[#10303F] text-[#BFD6E3] border border-[#20465A]"
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Security Controls */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6D79] block mb-3">
                  Security Controls
                </span>
                <div className="flex flex-wrap gap-2">
                  {securityControls.map((text, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md text-xs font-medium bg-[#10303F] text-[#BFD6E3] border border-[#20465A]"
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Event Envelope Image & Disclaimer Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col space-y-6"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6D79] block mb-3">
                  Event Envelope
                </span>
                <div className="w-full relative overflow-hidden bg-[#07131d]">
                  <img
                    src="/how-it-works/13.png"
                    alt="Carry governed context across systems and events illustration showing event envelopes, secure database storage, and transmission pipelines"
                    className="w-full h-auto object-cover block rounded-2xl"
                  />
                </div>
              </div>

              {/* Notice Box */}
              <div className="p-4 border-l-4 border-l-[#D0AA55] text-xs text-[#9ba4b5] leading-relaxed">
                Sensitive payloads may be referenced rather than duplicated
                where the architecture requires it. Replays need permission and
                preserve both original and replay attribution.
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-8 border-t border-[#1e293b]"
              >
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#c5a059] text-[#0f172a] font-semibold text-sm hover:bg-[#b08d4b] transition-all duration-200 shadow-lg shadow-[#c5a059]/20"
                >
                  Talk to a solutions architect
                  <ArrowRight className="w-4 h-4 text-[#0f172a]" />
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-white font-semibold text-sm border border-[#1e293b] hover:bg-[#0f1f2e] transition-all duration-200"
                >
                  Connector health & scopes
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Action Buttons */}
        </div>
      </div>
    </section>
  );
}
