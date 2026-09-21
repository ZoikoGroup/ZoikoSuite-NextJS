"use client";

import React from "react";
import { motion } from "framer-motion";

type ArtifactStatus = "preparation" | "onRequest" | "partial" | "unavailable";

interface Artifact {
  title: string;
  description: string;
  status: ArtifactStatus;
}

const artifacts: Artifact[] = [
  {
    title: "Accessibility Conformance Report",
    description:
      "An ACR following the VPAT format, covering the evaluated scope with criterion-level findings and remarks.",
    status: "preparation",
  },
  {
    title: "Test evidence summary",
    description:
      "Method, cadence, AT combinations covered, and the current issue register by severity.",
    status: "onRequest",
  },
  {
    title: "Known issues register",
    description:
      "Full list with severity, user impact, workaround, owner and status — including items not listed publicly.",
    status: "onRequest",
  },
  {
    title: "Remediation roadmap",
    description:
      "Prioritisation approach and current work in progress. No committed dates for unapproved fixes.",
    status: "onRequest",
  },
  {
    title: "Third-party component evidence",
    description:
      "Vendor accessibility statements for embedded components, where the vendor has supplied them.",
    status: "partial",
  },
  {
    title: "Independent audit report",
    description:
      "A third-party assessment naming assessor, scope, date, method and artifact.",
    status: "unavailable",
  },
];

function ArtifactBadge({ status }: { status: ArtifactStatus }) {
  if (status === "preparation") {
    return (
      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded bg-[#F2F4F7] border border-[#D0D5DD]">
        <span
          className="text-[10px] font-bold uppercase tracking-wider text-[#344054] whitespace-nowrap"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          IN PREPARATION — NOT YET PUBLISHED
        </span>
      </span>
    );
  }
  if (status === "onRequest") {
    return (
      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded bg-[#FEF0C7] border border-[#F7D070]">
        <span
          className="text-[10px] font-bold uppercase tracking-wider text-[#B54708] whitespace-nowrap"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          AVAILABLE ON REQUEST
        </span>
      </span>
    );
  }
  if (status === "partial") {
    return (
      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded bg-[#F4F3FF] border border-[#D9D6FE]">
        <span
          className="text-[10px] font-bold uppercase tracking-wider text-[#5925DC] whitespace-nowrap"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          PARTIAL — VENDOR DEPENDENT
        </span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded bg-[#F2F4F7] border border-[#D0D5DD]">
      <span
        className="text-[10px] font-bold uppercase tracking-wider text-[#344054] whitespace-nowrap"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        NOT AVAILABLE — NONE CONDUCTED
      </span>
    </span>
  );
}

export default function ProcurementEvidenceSection() {
  return (
    <section
      id="procurement-evidence"
      className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-6 lg:px-14 flex justify-center"
    >
      <div className="max-w-[1320px] w-full flex flex-col">
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
              className="text-xs font-medium tracking-widest text-[#A07A2E] uppercase leading-5 font-['JetBrains_Mono']"
            >
              PROCUREMENT, ACR / VPAT AND EVIDENCE
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#101828] leading-[48px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              What a buyer can obtain today
            </h2>
            <p
              className="text-[15px] sm:text-base text-[#475467] leading-6 mt-1 max-w-[480px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Enterprise diligence without overclaiming. Where an artifact does<br />
              not exist, that is stated rather than promised.
            </p>
          </div>
        </motion.div>

        {/* Artifact rows */}
        <div className="flex flex-col gap-3">
          {artifacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-md border border-stone-200 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
            >
              <div className="md:w-56 shrink-0">
                <h3
                  className="text-xs font-bold text-[#101828] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {item.title}
                </h3>
              </div>
              <div className="flex-1 max-w-[620px]">
                <p
                  className="text-xs text-[#475467] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
              <div className="shrink-0 self-start md:self-center">
                <ArtifactBadge status={item.status} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
