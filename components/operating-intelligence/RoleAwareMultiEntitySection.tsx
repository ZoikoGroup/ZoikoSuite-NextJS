"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface RoleViewData {
  id: string;
  label: string;
  roleName: string;
  emphasis: string;
  bulletPoints: string[];
}

const roleViews: RoleViewData[] = [
  {
    id: "executive",
    label: "Executive",
    roleName: "Executive",
    emphasis:
      "Aggregated priorities, obligation outlook, exception concentration, and evidence and control outcomes.",
    bulletPoints: [
      "Sees the item within an aggregated priority rollup for Zoiko Inc",
      "Sees that evidence is incomplete, without the restricted document itself",
      "Can drill down to contributing entities with scope and denominator visible",
      "Cannot approve, route or export the record",
    ],
  },
  {
    id: "process-owner",
    label: "Process owner",
    roleName: "Process Owner",
    emphasis:
      "Operational queue, active turnaround benchmarks, and SLA compliance within specific functional bounds.",
    bulletPoints: [
      "Sees all operational items assigned to their functional department",
      "Can triage, reassign within unit, and view full non-sensitive metadata",
      "Can initiate policy dispensation workflows where permitted",
      "Cannot override global entity governance rules",
    ],
  },
  {
    id: "reviewer-approver",
    label: "Reviewer / approver",
    roleName: "Reviewer / Approver",
    emphasis:
      "Detailed evidence inspection, delegated policy thresholds, and individual accountability sign-off.",
    bulletPoints: [
      "Accesses full documentation and supporting verification evidence",
      "Executes sign-off within explicit financial and jurisdictional limits",
      "Requires explicit rationale logging for dispensations",
      "Cannot modify root vendor master data directly",
    ],
  },
  {
    id: "compliance",
    label: "Compliance / control owner",
    roleName: "Compliance / Control Owner",
    emphasis:
      "Regulatory alignment, audit trails, statutory disclosures, and policy violation registers.",
    bulletPoints: [
      "Sees all historical policy exceptions and approval reasoning",
      "Can review immutable audit stamps and system verification logs",
      "Monitors multi-jurisdiction compliance posture across all entities",
      "Cannot alter operational queue priorities",
    ],
  },
  {
    id: "auditor",
    label: "Auditor / assurance",
    roleName: "Auditor / Assurance",
    emphasis:
      "Independent verification, retrospective evidence sampling, and immutable ledger integrity checks.",
    bulletPoints: [
      "Accesses read-only verified logs across closed and historical cycles",
      "Verifies cryptographic hashes and immutable transaction logs",
      "Generates standardized assurance workpapers with provenance",
      "Cannot participate in live operational decisions",
    ],
  },
  {
    id: "platform-admin",
    label: "Platform / integration admin",
    roleName: "Platform / Integration Admin",
    emphasis:
      "Connector health, sync pipeline telemetry, schema mappings, and permission role definitions.",
    bulletPoints: [
      "Monitors connector latency, error rates, and degraded sync statuses",
      "Configures boundary masking and role-based field visibility rules",
      "Manages API credentials and integration endpoints",
      "Cannot view sensitive financial payloads without explicit governance grant",
    ],
  },
];

const disclosureLevels = [
  {
    level: "HIDDEN",
    desc: "The user cannot see that the item exists at all.",
    border: "border-l-rose-500",
    badge: "text-rose-700 bg-rose-50 border-rose-200",
  },
  {
    level: "EXISTENCE-ONLY",
    desc: "A restricted placeholder or count is visible, but no identifying metadata.",
    border: "border-l-amber-500",
    badge: "text-amber-700 bg-amber-50 border-amber-200",
  },
  {
    level: "METADATA-LIMITED",
    desc: "Approved non-sensitive metadata only.",
    border: "border-l-blue-500",
    badge: "text-blue-700 bg-blue-50 border-blue-200",
  },
  {
    level: "READ-ONLY",
    desc: "Permitted content is visible but cannot be modified or routed.",
    border: "border-l-teal-500",
    badge: "text-teal-700 bg-teal-50 border-teal-200",
  },
  {
    level: "FULL WITHIN SCOPE",
    desc: "The user sees the record and performs only the separately authorized actions for that object.",
    border: "border-l-emerald-500",
    badge: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
];

const hierarchyLevels = [
  {
    type: "Organization",
    value: "Zoiko Group Holdings",
    detail: "Top-level scope · All down-level entities",
  },
  {
    type: "Group",
    value: "EMEA · Americas · APAC",
    detail: "Regional roll-up with scoped rights",
  },
  {
    type: "Legal entity",
    value: "14 entities",
    detail: "Examples: Zoiko UK Ltd · Zoiko Credit · others",
  },
  {
    type: "Operating unit",
    value: "shared services · local operations",
    detail: "Operational execution boundaries",
  },
  {
    type: "Function / process",
    value: "treasury · workforce · legal · tax · compliance · procurement",
    detail: "Day-to-day workflow routing",
  },
];

export default function RoleAwareMultiEntitySection() {
  const [selectedRole, setSelectedRole] = useState<string>("executive");
  const activeRoleData = roleViews.find((r) => r.id === selectedRole) || roleViews[0];

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center border-t border-[#e6e2d8]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                ROLE-AWARE AND MULTI-ENTITY VIEWS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              One governed record, scoped
              <br />
              presentation
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              The underlying record does not change by role. Presentation and
              available actions are scoped by permission.
            </p>
          </div>
        </div>

        {/* Role Selector Tabs */}
        <div className="mb-6">
          <div className="text-[10px] font-mono font-bold tracking-[0.16em] text-[#8c9ca9] uppercase mb-3">
            VIEW BY RESPONSIBILITY
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {roleViews.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedRole === role.id
                    ? "bg-[#08222F] text-white shadow-sm"
                    : "bg-white border border-[#d6dfe6] text-[#475569] hover:bg-[#f1f5f9]"
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Role Card */}
        <motion.div
          key={selectedRole}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-2xl border border-[#dce5ec] bg-white p-5 sm:p-7 shadow-xs mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Role Emphasis */}
            <div className="lg:col-span-6 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-slate-200 pb-5 lg:pb-0">
              <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#c5a059] uppercase block mb-1.5">
                EMPHASIS FOR THIS RESPONSIBILITY
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#08222F] mb-2 sm:mb-3">
                {activeRoleData.roleName}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#566874] leading-relaxed">
                {activeRoleData.emphasis}
              </p>
            </div>

            {/* Right Column: Scoped Presentation on VEN-4471 */}
            <div className="lg:col-span-6">
              <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#c5a059] uppercase block mb-2.5">
                WHAT THIS VIEW SEES ON VEN-4471
              </span>
              <ul className="space-y-2 text-xs text-[#334155]">
                {activeRoleData.bulletPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Lower Row: Disclosure Levels + Multi-Entity Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Permission and Disclosure Levels */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#8c9ca9] uppercase block mb-3">
              PERMISSION AND DISCLOSURE LEVELS
            </span>
            <div className="space-y-2 mb-3">
              {disclosureLevels.map((lvl, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg border border-[#e2e8f0] border-l-[3px] ${lvl.border} bg-white p-3 flex items-center gap-3 shadow-2xs`}
                >
                  <span
                    className={`font-mono text-[9.5px] font-bold px-2 py-0.5 rounded border uppercase shrink-0 ${lvl.badge}`}
                  >
                    {lvl.level}
                  </span>
                  <p className="text-xs text-[#566874] text-left flex-1 leading-snug">
                    {lvl.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#8c9ca9] leading-relaxed">
              Disclosure level is determined by item classification and role. Even for Platform Admin, security and privacy policies limit view to operation-critical technical data only — administrative credentials or raw commercial terms are never visible in the Command Center.
            </p>
          </div>

          {/* Right Column: Multi-Entity Hierarchy & Drill-Down Rule */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#8c9ca9] uppercase block mb-3">
              MULTI-ENTITY HIERARCHY
            </span>
            <div className="space-y-2.5 mb-6 py-1">
              {hierarchyLevels.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full border-2 border-[#c5a059] mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 leading-snug">
                      <span className="font-bold text-xs text-[#08222F]">
                        {item.type}:
                      </span>
                      <span className="text-xs text-[#334155] font-medium">
                        {item.value}
                      </span>
                    </div>
                    {item.detail && (
                      <div className="text-[10.5px] text-[#788e9d] leading-normal">
                        {item.detail}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Drill-Down Rule Box */}
            <div className="rounded-xl border border-[#dce5ec] bg-white p-5 shadow-xs">
              <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#475569] uppercase block mb-1.5">
                DRILL-DOWN RULE
              </span>
              <p className="text-xs text-[#475569] leading-relaxed">
                Every aggregate metric allows permitted drill-down to the contributing entities and records, with scope and denominator visible. There is no opaque &quot;enterprise score&quot; at any level of the hierarchy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
