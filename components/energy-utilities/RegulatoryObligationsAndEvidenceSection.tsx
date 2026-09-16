"use client";

import React from "react";

interface ObligationItem {
  id: string;
  obligationAndBasis: {
    title: string;
    code: string;
    description: string;
  };
  ownershipAndScope: {
    owner: string;
    details: string;
    escalation: string;
  };
  statusAndEvidence: {
    statusBadge: string;
    badgeVariant: "yellow" | "blue";
    dueDate?: string;
    evidenceText: string;
    subText: string;
  };
  borderColor?: string;
}

interface EvidenceLayer {
  number: string;
  title: string;
  description: string;
  badge: string;
}

const OBLIGATIONS: ObligationItem[] = [
  {
    id: "01",
    obligationAndBasis: {
      title: "Environmental discharge report",
      code: "OBL-2028-0412",
      description:
        "Site permit condition 7.3 · reporting cycle · effective Jan 2026",
    },
    ownershipAndScope: {
      owner: "Site compliance lead — named, not a team alias",
      details: "Treatment works 03 · Germany · Water Services GmbH",
      escalation: "Escalation: Site → group compliance → COO",
    },
    statusAndEvidence: {
      statusBadge: "DUE SOON",
      badgeVariant: "yellow",
      dueDate: "28 Aug 2028",
      evidenceText: "Evidence: 3 of 5 · 1 restricted",
      subText:
        "ZoikoSuite tracks the deadline and evidence — it does not file or submit",
    },
    borderColor: "#8A3B3B",
  },
  {
    id: "02",
    obligationAndBasis: {
      title: "Licence condition — connections reporting",
      code: "OBL-2026-0455",
      description: "Network licence condition · annual · effective Apr 2026",
    },
    ownershipAndScope: {
      owner: "Regulatory affairs lead",
      details: "Network region North · United Kingdom",
      escalation: "Escalation: Regulatory affairs → CRO",
    },
    statusAndEvidence: {
      statusBadge: "SCHEDULED",
      badgeVariant: "blue",
      evidenceText:
        "Evidence: source data drawn from operational systems of record",
      subText: "No compliance determination is made by the platform",
    },
    borderColor: "#2A6386",
  },
];

const EVIDENCE_LAYERS: EvidenceLayer[] = [
  {
    number: "01",
    title: "Governance decision",
    description:
      "Actor, entity, site, policy or rule basis, authorization outcome, timestamp.",
    badge: "DECISION CARD · REFERENCE ID",
  },
  {
    number: "02",
    title: "Workflow history",
    description:
      "Every transition, approver, delegation, rejection, escalation and rationale.",
    badge: "CHRONOLOGICAL TIMELINE",
  },
  {
    number: "03",
    title: "Document lineage",
    description:
      "Version, integrity hash, access history, signature status, retention.",
    badge: "DOCUMENT EVIDENCE DRAWER",
  },
  {
    number: "04",
    title: "Operational event",
    description:
      "Typed event, source service, object, actor or principal, correlation.",
    badge: "EVENT DETAIL PANEL",
  },
  {
    number: "05",
    title: "Evidence manifest",
    description: "Scenario-specific package with controlled export.",
    badge: "PACKAGE INDEX · EXPORT CONTROL",
  },
  {
    number: "06",
    title: "Integrity controls",
    description:
      "Append-only records and tamper-evident chains, with cryptographic validation where implemented.",
    badge: "INTEGRITY STATUS · VALIDATION",
  },
];

export default function RegulatoryObligationsAndEvidenceSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                REGULATORY OBLIGATIONS AND EVIDENCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Obligation, provenance, due date, evidence
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-6 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Every obligation carries its source and effective date. ZoikoSuite
              tracks and evidences — it does not file, submit or determine
              compliance.
            </p>
          </div>
        </div>

        {/* Top Obligation Cards */}
        <div className="flex flex-col gap-4 mb-16">
          {OBLIGATIONS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 lg:p-6 shadow-sm border border-[#DBE3E8] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              style={{
                borderLeft: `4px solid ${item.borderColor}`,
              }}
            >
              {/* Col 1: Obligation and Provenance */}
              <div className="flex flex-col lg:w-1/3">
                <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                  OBLIGATION AND PROVENANCE
                </span>
                <h3 className="text-sm lg:text-base font-bold text-[#0F172A] mb-1">
                  {item.obligationAndBasis.title} ·{" "}
                  <span className="font-mono font-normal text-xs text-gray-500">
                    {item.obligationAndBasis.code}
                  </span>
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.obligationAndBasis.description}
                </p>
              </div>

              {/* Col 2: Ownership and Scope */}
              <div className="flex flex-col lg:w-1/3">
                <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                  OWNERSHIP AND SCOPE
                </span>
                <p className="text-xs text-gray-800 font-medium mb-0.5">
                  Owner: {item.ownershipAndScope.owner}
                </p>
                <p className="text-xs text-gray-600 mb-1">
                  {item.ownershipAndScope.details}
                </p>
                <p className="text-xs text-gray-600">
                  {item.ownershipAndScope.escalation}
                </p>
              </div>

              {/* Col 3: Status and Evidence */}
              <div className="flex flex-col lg:w-1/3">
                <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                  STATUS AND EVIDENCE
                </span>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-1 rounded border ${
                      item.statusAndEvidence.badgeVariant === "yellow"
                        ? "bg-[#FBF2DF] text-[#5A6D79] border-[#5A6D79]"
                        : "bg-[#EAF5F0] text-[#5A6D79] border-[#5A6D79]"
                    }`}
                  >
                    ● {item.statusAndEvidence.statusBadge}
                  </span>
                  {item.statusAndEvidence.dueDate && (
                    <span className="text-xs font-mono text-gray-500">
                      {item.statusAndEvidence.dueDate}
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold text-[#0F172A] mb-0.5">
                  {item.statusAndEvidence.evidenceText}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.statusAndEvidence.subText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Subheader */}
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase font-mono text-gray-500">
            SIX EVIDENCE LAYERS
          </span>
        </div>

        {/* Bottom Six Evidence Layers List */}
        <div className="flex flex-col gap-4">
          {EVIDENCE_LAYERS.map((layer) => (
            <div
              key={layer.number}
              className="bg-white rounded-xl p-5 lg:p-6 shadow-sm border border-[#DBE3E8] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              {/* Left: Number + Title + Description */}
              <div className="flex items-start sm:items-center gap-4 lg:w-2/3">
                <span
                  className="px-2.5 py-1 text-xs font-mono font-bold text-white rounded-[5px] shrink-0"
                  style={{ backgroundColor: "#0F476A" }}
                >
                  {layer.number}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <h3 className="text-sm lg:text-base font-bold text-[#0F172A] shrink-0">
                    {layer.title}
                  </h3>
                  <span className="hidden sm:inline text-gray-300">·</span>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>

              {/* Right: Badge */}
              <div className="shrink-0 self-start sm:self-center">
                <span className="inline-block px-3 py-1.5 bg-white border border-[#DBE3E8] rounded-lg text-[10px] font-mono font-semibold text-[#A07A2E] tracking-wider">
                  {layer.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
