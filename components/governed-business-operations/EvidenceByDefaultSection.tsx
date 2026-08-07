"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface EvidenceDimension {
  id: string;
  name: string;
  description: string;
}

const evidenceDimensions: EvidenceDimension[] = [
  {
    id: "completeness",
    name: "Completeness",
    description:
      "All required payload fields, timestamps, and artifacts are fully accounted for without gaps.",
  },
  {
    id: "source-accessibility",
    name: "Source accessibility",
    description:
      "Original source documents and system logs remain retrievable and cryptographically linked.",
  },
  {
    id: "attribution",
    name: "Attribution",
    description:
      "Every action is explicitly bound to a verified user or bounded service identity.",
  },
  {
    id: "approval-coverage",
    name: "Approval coverage",
    description:
      "All decision thresholds and policy sign-offs are documented with valid authority tokens.",
  },
  {
    id: "policy-linkage",
    name: "Policy linkage",
    description:
      "The exact rule version and jurisdiction context evaluated during the action are preserved.",
  },
  {
    id: "integrity-verification",
    name: "Integrity verification",
    description:
      "Cryptographic checksums ensure records have not been altered post-execution.",
  },
  {
    id: "retention",
    name: "Retention / legal hold",
    description:
      "Records comply with regulatory lifecycles and active legal preservation holds.",
  },
  {
    id: "export-readiness",
    name: "Export readiness",
    description:
      "Evidence packages can be instantly bundled into standardized audit-ready formats.",
  },
];

export default function EvidenceByDefaultSection() {
  const [selectedDimension, setSelectedDimension] =
    useState<string>("completeness");

  const activeDim =
    evidenceDimensions.find((d) => d.id === selectedDimension) ||
    evidenceDimensions[0];

  return (
    <section className="w-full bg-[#08222F] text-[#F7F5F0] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side: Content & Dimensions */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#c5a059]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
              EVIDENCE BY DEFAULT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-white mb-6">
            Create the evidence while the work happens
          </h2>

          <p className="text-xs sm:text-sm text-[#9ba4b5] leading-relaxed mb-8">
            Evidence is an operational output of the action, not an export
            produced later. Eight health dimensions describe whether it can
            actually be relied on.
          </p>

          {/* Evidence Health Dimensions Label */}
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9ba4b5] block mb-3">
            EVIDENCE HEALTH DIMENSIONS
          </span>

          {/* Dimensions Pills Grid */}
          <div className="flex flex-wrap gap-2.5 max-w-120 mb-8">
            {evidenceDimensions.map((dim) => {
              const isSelected = selectedDimension === dim.id;
              return (
                <button
                  key={dim.id}
                  onClick={() => setSelectedDimension(dim.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs tracking-[1px] font-medium transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-[#10303F] text-[#F7F5F0] border-[#1a3848] hover:border-[#9ba4b5]"
                      : "bg-[#10303F] text-[#F7F5F0] border-[#1a3848] hover:border-[#9ba4b5]"
                  }`}
                >
                  {dim.name}
                </button>
              );
            })}
          </div>

          {/* Bottom Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#D0AA55] text-[#08222F] hover:bg-[#b89547] transition-colors shadow-md"
            >
              Explore evidence architecture
              <ArrowRight className="w-4 h-4 text-[#08222F]" />
            </a>
          </div>
        </div>

        {/* Right Side: Image Display Container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full rounded-2xl overflow-hidden border border-white">
            <img
              src="/governed-business-operations/3.png"
              alt="Evidence By Default interface view"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
