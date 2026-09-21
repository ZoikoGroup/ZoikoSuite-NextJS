"use client";

import React from "react";
import { motion } from "framer-motion";

type IssueStatus = "inProgress" | "thirdParty";

interface Issue {
  label: string;
  title: string;
  affects: string;
  impact: string;
  workaroundLabel?: string;
  workaround?: string;
  mitigationLabel?: string;
  mitigation?: string;
  statusLabel: string;
  status: IssueStatus;
  owner: string;
  note: string;
}

const issues: Issue[] = [
  {
    label: "High severity · A11Y-2026-0412",
    title: "Chart visualisations lack an accessible data alternative",
    affects: "dense analytics views in the web app",
    impact:
      "Screen reader and keyboard users cannot access the underlying values for several chart types.",
    workaroundLabel: "Workaround: ",
    workaround:
      "the same data is available in the adjacent registry table for most views.",
    statusLabel: "Remediation in progress",
    status: "inProgress",
    owner: "Design system lead",
    note: "No completion date published until the fix is approved for release.",
  },
  {
    label: "High severity · A11Y-2026-0455",
    title: "Focus not returned after closing certain drawers",
    affects: "evidence and detail drawers in three workflows",
    impact:
      "Keyboard focus moves to the document start, forcing users to re-traverse the page.",
    workaroundLabel: "Workaround: ",
    workaround: "none currently available.",
    statusLabel: "Remediation in progress",
    status: "inProgress",
    owner: "Web app engineering",
    note: "Regression gate added so the fix cannot silently revert.",
  },
  {
    label: "Third-party dependency · A11Y-2026-0388",
    title: "Embedded vendor component keyboard behaviour",
    affects: "one embedded surface in the web app",
    impact:
      "Some controls within the embedded component are not keyboard reachable.",
    mitigationLabel: "Mitigation: ",
    mitigation:
      "an equivalent non-embedded path is provided for the same task.",
    statusLabel: "Third-party dependency",
    status: "thirdParty",
    owner: "Vendor management — raised with supplier",
    note: "Vendor accessibility evidence requested; response pending.",
  },
];

export default function KnownLimitationsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-28 px-6 lg:px-14 flex justify-center">
      <div className="max-w-[1320px] w-full flex flex-col gap-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-4"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 pt-2.5">
            <span className="w-4 h-[1.5px] bg-[#D4943A]" />
            <span
              className="text-xs font-medium tracking-widest text-[#D4943A] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Known limitations and remediation
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0D2636] leading-[49.28px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Sixteen open issues, published<br />
              with owners
            </h2>
            <p
              className="text-base sm:text-xl text-[#3E5A6B] leading-8 mt-1 max-w-[690px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Two high, five medium, nine low. The high-severity items are listed<br />
              in full below; the remainder are available in an accessibility review.
            </p>
          </div>
        </motion.div>

        {/* Issue cards */}
        <div className="flex flex-col gap-1.5 pt-4">
          {issues.map((issue, index) => (
            <motion.article
              key={issue.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`bg-white rounded-tr-lg rounded-br-lg border border-stone-200 border-l-[3px] p-3.5 grid grid-cols-1 md:grid-cols-12 gap-6 items-start shadow-sm ${
                issue.status === "thirdParty"
                  ? "border-l-[#8b5cf6]"
                  : "border-l-[#ef4444]"
              }`}
            >
              {/* Col 1: Title & Affects */}
              <div className="md:col-span-4 flex flex-col gap-0.5">
                <span
                  className="text-[8px] sm:text-[10px] font-normal uppercase leading-3 tracking-wide text-[#3E5A6B]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {issue.label}
                </span>
                <h3
                  className="text-xs font-bold text-[#0D2636] leading-5 pt-px"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {issue.title}
                </h3>
                <p
                  className="text-xs text-[#3E5A6B] leading-5 font-normal"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Affects: {issue.affects}
                </p>
              </div>

              {/* Col 2: User Impact & Workaround */}
              <div className="md:col-span-4 flex flex-col gap-0.5">
                <span
                  className="text-[8px] sm:text-[10px] font-normal uppercase leading-3 tracking-wide text-[#3E5A6B]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  User impact
                </span>
                <p
                  className="text-xs text-[#3E5A6B] leading-5 font-normal"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {issue.impact}
                </p>
                <p
                  className="text-xs text-[#3E5A6B] leading-5 pt-px font-normal"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {issue.workaroundLabel && (
                    <strong className="font-bold text-[#3E5A6B]">{issue.workaroundLabel}</strong>
                  )}
                  {issue.workaround}
                  {issue.mitigationLabel && (
                    <strong className="font-bold text-[#3E5A6B]">{issue.mitigationLabel}</strong>
                  )}
                  {issue.mitigation}
                </p>
              </div>

              {/* Col 3: Status & Owner */}
              <div className="md:col-span-4 flex flex-col gap-0.5">
                <span
                  className="text-[8px] sm:text-[10px] font-normal uppercase leading-3 tracking-wide text-[#3E5A6B]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Status
                </span>
                <div className="pt-px">
                  {issue.status === "inProgress" ? (
                    <span
                      className="inline-flex items-center justify-center px-2.5 py-[3px] rounded-sm bg-[#FEF0C7] border border-[#F7D070] shadow-[inset_3px_0px_0px_1px_rgba(184,145,47,1.00)]"
                    >
                      <span
                        className="text-xs font-medium uppercase tracking-wide text-[#B8912F]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {issue.statusLabel}
                      </span>
                    </span>
                  ) : (
                    <span
                      className="inline-flex items-center justify-center px-2 py-[3px] rounded-sm bg-[#F4F3FF] border border-[#D9D6FE]"
                    >
                      <span
                        className="text-xs font-medium uppercase tracking-wide text-[#5925DC]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {issue.statusLabel}
                      </span>
                    </span>
                  )}
                </div>
                <p
                  className="text-xs text-[#3E5A6B] leading-5 pt-px font-normal"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  <strong className="font-bold text-[#3E5A6B]">Owner:</strong> {issue.owner}
                </p>
                <p
                  className="text-xs text-[#3E5A6B] leading-5 font-normal"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {issue.note}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
