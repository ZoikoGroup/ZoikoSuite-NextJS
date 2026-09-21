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
    statusLabel: "REMEDIATION IN PROGRESS",
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
    statusLabel: "REMEDIATION IN PROGRESS",
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
    statusLabel: "THIRD-PARTY DEPENDENCY",
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
          className="flex flex-col mb-10"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 pt-2.5">
            <span className="w-4 h-[1.5px] bg-[#A07A2E]" />
            <span
              className="text-xs font-medium tracking-widest text-[#A07A2E] uppercase leading-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              KNOWN LIMITATIONS AND REMEDIATION
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#101828] leading-[48px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Sixteen open issues, published<br />
              with owners
            </h2>
            <p
              className="text-[15px] sm:text-base text-[#475467] leading-6 mt-1 max-w-[480px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Two high, five medium, nine low. The high-severity items are listed<br />
              in full below; the remainder are available in an accessibility<br />
              review.
            </p>
          </div>
        </motion.div>

        {/* Issue cards */}
        <div className="flex flex-col gap-4">
          {issues.map((issue, index) => (
            <motion.article
              key={issue.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`bg-white rounded-md border border-stone-200 border-l-[4px] p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start shadow-sm ${
                issue.status === "thirdParty"
                  ? "border-l-[#8b5cf6]"
                  : "border-l-[#ef4444]"
              }`}
            >
              {/* Col 1: Title & Affects */}
              <div className="md:col-span-4 flex flex-col gap-1.5">
                <span
                  className="text-[10px] font-medium uppercase leading-4 tracking-wider text-[#667085]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {issue.label}
                </span>
                <h3
                  className="text-sm font-bold text-[#101828] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {issue.title}
                </h3>
                <p
                  className="text-xs text-[#475467] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  <span className="text-[#667085]">Affects:</span> {issue.affects}
                </p>
              </div>

              {/* Col 2: User Impact & Workaround */}
              <div className="md:col-span-4 flex flex-col gap-1.5">
                <span
                  className="text-[10px] font-medium uppercase leading-4 tracking-wider text-[#667085]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  User Impact
                </span>
                <p
                  className="text-xs text-[#475467] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {issue.impact}
                </p>
                <p
                  className="text-xs text-[#475467] leading-5 mt-1"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {issue.workaroundLabel && (
                    <strong className="font-semibold text-[#344054]">{issue.workaroundLabel}</strong>
                  )}
                  {issue.workaround}
                  {issue.mitigationLabel && (
                    <strong className="font-semibold text-[#344054]">{issue.mitigationLabel}</strong>
                  )}
                  {issue.mitigation}
                </p>
              </div>

              {/* Col 3: Status & Owner */}
              <div className="md:col-span-4 flex flex-col gap-2">
                <div>
                  {issue.status === "inProgress" ? (
                    <span
                      className="inline-flex items-center justify-center px-2.5 py-1 rounded bg-[#FEF0C7] border border-[#F7D070]"
                    >
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider text-[#B54708]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {issue.statusLabel}
                      </span>
                    </span>
                  ) : (
                    <span
                      className="inline-flex items-center justify-center px-2.5 py-1 rounded bg-[#F4F3FF] border border-[#D9D6FE]"
                    >
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider text-[#5925DC]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {issue.statusLabel}
                      </span>
                    </span>
                  )}
                </div>
                <p
                  className="text-xs text-[#475467] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  <span className="text-[#667085]">Owner:</span> <strong className="font-semibold text-[#344054]">{issue.owner}</strong>
                </p>
                <p
                  className="text-xs text-[#667085] leading-5"
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
