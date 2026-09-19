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
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-28 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-9"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 pt-2.5">
            <span className="w-4 h-[1.5px] bg-orange-400" />
            <span
              className="text-xs font-medium tracking-widest text-orange-400 uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              KNOWN LIMITATIONS AND REMEDIATION
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#101828] leading-[49px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Sixteen open issues, published<br />
              with owners
            </h2>
            <p
              className="text-[15px] sm:text-xl text-[#3a5277] leading-8 mt-3 lg:mt-1 max-w-[500px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Two high, five medium, nine low. The high-severity items are listed<br />
              in full below; the remainder are available in an accessibility<br />
              review.
            </p>
          </div>
        </motion.div>

        {/* Issue cards */}
        <div className="pt-6 flex flex-col gap-1.5">
          {issues.map((issue, index) => (
            <motion.article
              key={issue.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`bg-white rounded-tr-lg rounded-br-lg border-l-[3px] border-y border-r border-[#c5d4e8] px-3.5 py-3 flex flex-col ${
                issue.status === "thirdParty"
                  ? "border-l-[#a78bfa]"
                  : "border-l-[#dc2626]"
              }`}
            >
              {/* Label + title + affects */}
              <div className="flex flex-col gap-0.5">
                <span
                  className="text-[8px] font-medium uppercase leading-3 tracking-wide text-[#3a5277]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {issue.label}
                </span>
                <h3
                  className="text-xs font-bold text-[#101828] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {issue.title}
                </h3>
                <p
                  className="text-xs text-[#3a5277] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Affects: {issue.affects}
                </p>
              </div>

              {/* User impact + workaround/mitigation */}
              <div className="mt-2 flex flex-col gap-0.5">
                <span
                  className="text-[8px] font-medium uppercase leading-3 tracking-wide text-[#3a5277]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  User impact
                </span>
                <p
                  className="text-xs text-[#3a5277] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {issue.impact}
                </p>
                <p
                  className="text-xs text-[#3a5277] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {issue.workaroundLabel && (
                    <strong className="font-bold">{issue.workaroundLabel}</strong>
                  )}
                  {issue.workaround}
                  {issue.mitigationLabel && (
                    <strong className="font-bold">{issue.mitigationLabel}</strong>
                  )}
                  {issue.mitigation}
                </p>
              </div>

              {/* Status */}
              <div className="mt-2 flex flex-col gap-0.5">
                <span
                  className="text-[8px] font-medium uppercase leading-3 tracking-wide text-[#3a5277]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Status
                </span>
                <div className="mt-0.5">
                  {issue.status === "inProgress" ? (
                    <span
                      className="inline-flex items-center justify-center px-2.5 py-[3px] rounded-sm"
                      style={{
                        backgroundColor: "#FAF5D8",
                        outline: "1px solid #C8A951",
                        borderLeft: "3px solid #C8A951",
                      }}
                    >
                      <span
                        className="text-[8.5px] font-medium uppercase leading-3 tracking-wide"
                        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#826644" }}
                      >
                        {issue.statusLabel}
                      </span>
                    </span>
                  ) : (
                    <span
                      className="inline-flex items-center justify-center px-1.5 py-[3px] rounded-sm"
                      style={{
                        backgroundColor: "#f3f0fe",
                        outline: "1px solid #a78bfa",
                      }}
                    >
                      <span
                        className="text-[8.5px] font-medium uppercase leading-3 tracking-wide"
                        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#5b21b6" }}
                      >
                        {issue.statusLabel}
                      </span>
                    </span>
                  )}
                </div>
                <p
                  className="mt-1 text-xs text-[#3a5277] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  <strong className="font-bold text-[#101828]">Owner:</strong> {issue.owner}
                </p>
                <p
                  className="text-xs text-[#3a5277] leading-5"
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
