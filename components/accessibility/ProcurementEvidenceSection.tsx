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
      <span className="inline-flex items-center justify-center px-1.5 pt-0.5 pb-[3px] rounded-sm"
        style={{ backgroundColor: "#f6f6f6", outline: "1px solid #829ec8" }}>
        <span className="text-[8.5px] font-medium uppercase leading-3 tracking-wide whitespace-nowrap"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#213966" }}>
          In preparation — not yet published
        </span>
      </span>
    );
  }
  if (status === "onRequest") {
    return (
      <span className="inline-flex items-center justify-center px-1.5 pt-0.5 pb-[3px] rounded-sm"
        style={{ backgroundColor: "#FAF5D8", outline: "1px solid #C8A951" }}>
        <span className="text-[8.5px] font-medium uppercase leading-3 tracking-wide whitespace-nowrap"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#826644" }}>
          Available on request
        </span>
      </span>
    );
  }
  if (status === "partial") {
    return (
      <span className="inline-flex items-center justify-center px-1.5 pt-0.5 pb-[3px] rounded-sm"
        style={{ backgroundColor: "#f3f0fe", outline: "1px solid #a78bfa" }}>
        <span className="text-[8.5px] font-medium uppercase leading-3 tracking-wide whitespace-nowrap"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#5b21b6" }}>
          Partial — vendor dependent
        </span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center px-1.5 pt-0.5 pb-[3px] rounded-sm"
      style={{ backgroundColor: "#f4f6fa", outline: "1px solid #b0c4de" }}>
      <span className="text-[8.5px] font-medium uppercase leading-3 tracking-wide whitespace-nowrap"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2a4a7f" }}>
        Not available — none conducted
      </span>
    </span>
  );
}

export default function ProcurementEvidenceSection() {
  return (
    <section
      id="procurement-evidence"
      className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-28 flex justify-center"
    >
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
              PROCUREMENT, ACR / VPAT AND EVIDENCE
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#101828] leading-[49px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              What a buyer can obtain today
            </h2>
            <p
              className="text-[15px] sm:text-xl text-[#3a5277] leading-8 mt-3 lg:mt-1 max-w-[500px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Enterprise diligence without overclaiming. Where an artifact does<br />
              not exist, that is stated rather than promised.
            </p>
          </div>
        </motion.div>

        {/* Artifact rows */}
        <div className="pt-6 flex flex-col gap-1.5">
          {artifacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg border border-[#c5d4e8] px-3.5 py-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-3.5"
            >
              <div className="md:w-48 shrink-0">
                <h3
                  className="text-xs font-bold text-[#101828] leading-5"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {item.title}
                </h3>
              </div>
              <div className="flex-1">
                <p
                  className="text-xs text-[#3a5277] leading-4"
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
