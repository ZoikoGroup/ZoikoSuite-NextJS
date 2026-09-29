"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface TrustRow {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const trustRows: TrustRow[] = [
  {
    title: "Security",
    description: "Concise scope/status text; no unsupported guarantees.",
    linkText: "Trust Center",
    href: "/trust-center",
  },
  {
    title: "Compliance",
    description:
      "Current published standards/certifications with explicit scope/status.",
    linkText: "Compliance Overview",
    href: "/compliance-overview",
  },
  {
    title: "Privacy",
    description:
      'Privacy architecture and legal notices; no vague "privacy-first" claim.',
    linkText: "Privacy Architecture",
    href: "/privacy-architecture",
  },
  {
    title: "Data Residency",
    description: "Deployment-aware status and documented options only.",
    linkText: "Data Residency",
    href: "/data-residency",
  },
  {
    title: "Responsible AI",
    description: "Governance principles + product controls + evidence.",
    linkText: "Responsible AI",
    href: "/responsible-ai",
  },
  {
    title: "Accessibility",
    description: "Current conformance/evaluation status, not a vague badge.",
    linkText: "Accessibility",
    href: "/accessibility",
  },
  {
    title: "System Status",
    description: "Live operational state.",
    linkText: "System Status",
    href: "/trust-system-status",
  },
];

export default function EnterpriseTrustAndReadinessSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
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
              ENTERPRISE TRUST & READINESS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-6">
            Text-first assurance, routed to the source of truth.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed">
            Each proof area routes to its canonical Trust destination rather
            than duplicating claims here. No badge implies universal compliance.
          </p>
        </div>

        {/* Big Container Card with Rows */}
        <div className="w-full bg-white border border-[#D9D3C7] rounded-3xl overflow-hidden shadow-sm">
          {trustRows.map((row, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 lg:px-8 gap-4 ${
                index !== trustRows.length - 1
                  ? "border-b border-[#EBE5DA]"
                  : ""
              } transition-colors hover:bg-[#FAF9F5]`}
            >
              {/* Left: Title & Description */}
              <div className="flex flex-col max-w-xl">
                <h3 className="text-base font-bold text-[#08222F] mb-1">
                  {row.title}
                </h3>
                <p className="text-xs text-gray-600 font-mono leading-relaxed">
                  {row.description}
                </p>
              </div>

              {/* Right: Route Link */}
              <div className="flex items-center">
                <a
                  href={row.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#08222F] hover:text-[#C59B3F] transition-colors group"
                >
                  <span>{row.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
