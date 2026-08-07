"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface StageItem {
  id: string;
  name: string;
}

interface ZoneItem {
  id: string;
  zoneNumber: string;
  title: string;
  description: string;
  badge?: string;
  stages: StageItem[];
  lifecycleText: string;
  humanAuthText: string;
  serviceIdentityText: string;
}

const zonesData: ZoneItem[] = [
  {
    id: "zone-01",
    zoneNumber: "ZONE 01",
    title: "Understand",
    description:
      "Capture the signal; establish business, entity, jurisdiction, policy, obligation, and evidence context.",
    stages: [
      { id: "s1", name: "Stage 01 • Capture the signal" },
      { id: "s2", name: "Stage 02 • Establish context" },
    ],
    lifecycleText:
      "A cross-border vendor payment change begins as an integration event and a contract amendment. The platform links both sources by correlation ID, resolves the entity and jurisdiction, and attaches the evidence requirements before any rule is evaluated.",
    humanAuthText:
      "Zone 01 focuses entirely on grounding signals into context. No action is authorized here; all data ingestion, entity mapping, and policy checks occur purely to build the verifiable operating foundation.",
    serviceIdentityText:
      "Ingestion and signal parsing are performed by secure system connectors operating under strict read-only integration identities.",
  },
  {
    id: "zone-02",
    zoneNumber: "ZONE 02",
    title: "Determine",
    description:
      "Evaluate policy, authority, segregation, limits, conflicts, missing information, and required reviewers.",
    stages: [
      { id: "s3", name: "Stage 03 • Evaluate policies" },
      { id: "s4", name: "Stage 04 • Check authority & limits" },
    ],
    lifecycleText:
      "The system runs parallel evaluation routines against active financial thresholds, segregation-of-duty matrices, and compliance registers to determine if the proposed operation can proceed or requires intervention.",
    humanAuthText:
      "Determinations are computed automatically, but they carry no execution weight until reviewed and signed off by authorized personnel.",
    serviceIdentityText:
      "Policy calculation routines execute within isolated evaluation sandboxes with cryptographic proof of rule versions.",
  },
  {
    id: "zone-03",
    zoneNumber: "ZONE 03",
    title: "Authorize & execute",
    description:
      "Build the proposed action; route responsibility; obtain qualified human authorization; execute through controlled service identities.",
    badge: "KEYMAN",
    stages: [
      { id: "s5", name: "Stage 05 • Route responsibility" },
      { id: "s6", name: "Stage 06 • Obtain authorization" },
      { id: "s7", name: "Stage 07 • Execute action" },
    ],
    lifecycleText:
      "Once qualified human authorization is secured, the platform triggers downstream system writes through tightly scoped micro-integrations, maintaining unbroken linkage between approval and execution.",
    humanAuthText:
      "Zone 03 is the only zone where a material action can be authorized, and only by a named person with verified authority. No zone permits the platform to authorize on its own.",
    serviceIdentityText:
      "Execution inside Zone 03 may be performed by a bounded service identity acting on the authorized version — attributable to both the service and the triggering business context.",
  },
  {
    id: "zone-04",
    zoneNumber: "ZONE 04",
    title: "Evidence & improve",
    description:
      "Create evidence; monitor obligations and outcomes; route exceptions; measure control performance.",
    stages: [
      { id: "s8", name: "Stage 08 • Monitor outcomes" },
      { id: "s9", name: "Stage 09 • Measure performance" },
    ],
    lifecycleText:
      "Post-execution telemetry captures actual results, updates compliance ledgers, archives immutable audit evidence packages, and feeds continuous performance metrics back into the policy library.",
    humanAuthText:
      "Reviewers inspect exception handling logs and audit trails to ensure post-execution states match compliance mandates.",
    serviceIdentityText:
      "Continuous monitoring agents track ongoing obligations using non-invasive observer identities.",
  },
];

export default function GovernedExecutionSection() {
  const [selectedZoneId, setSelectedZoneId] = useState<string>("zone-01");

  const activeZone =
    zonesData.find((z) => z.id === selectedZoneId) || zonesData[0];

  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                GOVERNED EXECUTION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-xl">
              Intelligence matters when it changes how the next action is
              governed
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
            Four control zones summarize the nine-stage governed-action
            lifecycle. Select a zone to see which stages it covers.
          </p>
        </div>

        {/* 4 Zone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-6">
          {zonesData.map((zone) => {
            const isSelected = selectedZoneId === zone.id;
            return (
              <motion.div
                key={zone.id}
                onClick={() => setSelectedZoneId(zone.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border relative flex flex-col justify-between ${
                  isSelected
                    ? "border-[#c5a059] bg-[#FEFCF7] shadow-md ring-1 ring-[#c5a059]"
                    : "border-[#DBE3E8] hover:border-[#9ba4b5]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059]">
                      {zone.zoneNumber}
                    </span>
                    {zone.badge && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#F7F5F0] text-[#c5a059] border border-[#DBE3E8]">
                        {zone.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mb-2">
                    {zone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    {zone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lifecycle Stages Banner Box (Left vertical accent border style or clean container) */}
        <div className="w-full bg-white rounded-2xl border-l-4 border-l-[#0F476A] border border-[#DBE3E8] p-6 sm:p-8 mb-6 shadow-xs">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748b] block mb-4">
            LIFECYCLE STAGES IN THIS ZONE
          </span>
          <div className="flex flex-wrap gap-2 mb-4">
            {activeZone.stages.map((stage) => (
              <span
                key={stage.id}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#F4F7F9] text-[#0f172a] border border-[#DBE3E8]"
              >
                {stage.name}
              </span>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
            {activeZone.lifecycleText}
          </p>
        </div>

        {/* Bottom Two Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-12">
          {/* Human Authorization Marker */}
          <div className="bg-white rounded-2xl border border-[#DBE3E8] p-6 sm:p-8 shadow-xs">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748b] block mb-3">
              HUMAN AUTHORIZATION MARKER
            </span>
            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
              {activeZone.humanAuthText}
            </p>
          </div>

          {/* Service Identity Marker */}
          <div className="bg-white rounded-2xl border border-[#DBE3E8] p-6 sm:p-8 shadow-xs">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748b] block mb-3">
              SERVICE IDENTITY MARKER
            </span>
            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
              {activeZone.serviceIdentityText}
            </p>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center w-full">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
          >
            See how ZoikoSuite works
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
