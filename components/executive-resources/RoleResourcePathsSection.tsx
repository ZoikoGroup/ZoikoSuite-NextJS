"use client";

import React from "react";

interface RolePath {
  role: string;
  statusText: React.ReactNode;
  description: string;
  linkText: string;
  highlighted?: boolean;
}

const ROLE_PATHS: RolePath[] = [
  {
    role: "CFO",
    statusText: (
      <>
        Resource hub{" "}
        <span className="font-semibold text-[#0F476A]">not published</span>{" "}
        &rarr; published solution page
      </>
    ),
    description:
      "Finance governance, close, treasury definitions, payables and receivables control, and the business-case model.",
    linkText: "Go to CFOs →",
  },
  {
    role: "GENERAL COUNSEL",
    statusText: (
      <>
        Resource hub{" "}
        <span className="font-semibold text-[#0F476A]">not published</span>{" "}
        &rarr; published solution page
      </>
    ),
    description:
      "Obligations, two-layer authority, jurisdiction change review, evidence classification and privilege boundaries.",
    linkText: "Go to General Counsel →",
  },
  {
    role: "CHRO",
    statusText: (
      <>
        Resource hub{" "}
        <span className="font-semibold text-[#0F476A]">not published</span>{" "}
        &middot; no role destination published
      </>
    ),
    description:
      "Workforce and payroll governance material has no published destination. The closest published context is the workforce boundary model in Leadership Teams.",
    linkText: "Workforce boundaries →",
  },
  {
    role: "CIO",
    statusText: (
      <>
        Resource hub{" "}
        <span className="font-semibold text-[#0F476A]">not published</span>{" "}
        &rarr; published architecture pages
      </>
    ),
    description:
      "Architecture, source ownership, data location and lifecycle, APIs, integrations, events and evidence architecture.",
    linkText: "Go to Platform Foundation →",
  },
  {
    role: "BOARD / AUDIT COMMITTEE",
    statusText: (
      <>
        Resource hub{" "}
        <span className="font-semibold text-[#0F476A]">not published</span>{" "}
        &rarr; published oversight sections
      </>
    ),
    description:
      "Read-only oversight mode, material exceptions, evidence state and audit-readiness boundaries.",
    linkText: "Oversight mode →",
  },
  {
    role: "OTHER LEADERSHIP",
    statusText: (
      <>
        Leadership Teams bridge{" "}
        <span className="font-semibold text-[#0F476A]">published</span>
      </>
    ),
    description:
      "Cross-functional decision context, the decision packet model, and the multi-entity leadership view.",
    linkText: "Go to Leadership Teams →",
    highlighted: true,
  },
];

export default function RoleResourcePathsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                ROLE RESOURCE PATHS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Where each role can go today
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              No role resource hub is published yet. Rather than link to a page
              that does not exist, each path routes to the published destination
              that currently carries that material.
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROLE_PATHS.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 border flex flex-col justify-between transition-all ${
                item.highlighted
                  ? "bg-[#F7F5F0] border-[#E2E8F0] shadow-sm"
                  : "bg-white border-[#E2E8F0] shadow-sm"
              }`}
            >
              <div>
                <h3 className="text-[11px] font-mono font-bold tracking-widest text-[#0F476A] uppercase mb-2">
                  {item.role}
                </h3>
                <p className="text-xs text-[#475569] mb-4">{item.statusText}</p>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-dashed border-[#E2E8F0]">
                <a
                  href="#link"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs sm:text-sm font-bold text-[#0F476A] hover:underline inline-flex items-center gap-1"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
