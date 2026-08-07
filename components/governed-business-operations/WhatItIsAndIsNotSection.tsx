"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ComparisonRow {
  dimension: string;
  erp: string;
  bi: string;
  grc: string;
  workflow: string;
  ai: string;
  zoiko: string;
}

const tableData: ComparisonRow[] = [
  {
    dimension: "Primary organizing principle",
    erp: "Transactions, master data, functional processes",
    bi: "Data models, reports, visualizations",
    grc: "Risk, controls, policies, assessments",
    workflow: "Tasks, steps, routing rules",
    ai: "Prompts, content, analysis",
    zoiko: "Contextual, policy-aware, authorized, evidence-backed operations",
  },
  {
    dimension: "Point of intervention",
    erp: "At the transaction",
    bi: "After the event",
    grc: "Around the process",
    workflow: "Between steps",
    ai: "At the user's request",
    zoiko: "At the material decision",
  },
  {
    dimension: "Governance placement",
    erp: "Configured around the module",
    bi: "Generally outside scope",
    grc: "Managed as a separate discipline",
    workflow: "Encoded in routing depth that varies",
    ai: "Varies by deployment",
    zoiko: "Evaluated inside the action, before execution",
  },
  {
    dimension: "Evidence model",
    erp: "Transaction records and system logs",
    bi: "Query results and snapshots",
    grc: "Control test records and assessments",
    workflow: "Task history",
    ai: "Chat or output history",
    zoiko:
      "Manifests linking sources, policies, decisions, execution, and outcomes",
  },
  {
    dimension: "Cross-functional context",
    erp: "Often module-bounded",
    bi: "Depends on the data model",
    grc: "Control-domain bounded",
    workflow: "Process bounded",
    ai: "Session bounded",
    zoiko: "Shared objects, events, entities, and authority across functions",
  },
  {
    dimension: "Jurisdiction context",
    erp: "Localization packs and country versions",
    bi: "A reporting dimension",
    grc: "A compliance register",
    workflow: "Usually configured per workflow",
    ai: "Not inherent",
    zoiko: "Resolved per action with published coverage status and source",
  },
  {
    dimension: "Intelligence timing",
    erp: "Operational reporting",
    bi: "Commonly retrospective",
    grc: "Periodic assessment",
    workflow: "Process metrics",
    ai: "On demand",
    zoiko: "Before, during, and after execution",
  },
  {
    dimension: "AI boundary",
    erp: "Varies by product",
    bi: "Varies by product",
    grc: "Varies by product",
    workflow: "Varies by product",
    ai: "Authority and evidence boundaries vary",
    zoiko:
      "Source-grounded, permission-aware, uncertainty-disclosing, human-reviewed",
  },
];

export default function WhatItIsAndIsNotSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                CATEGORY BOUNDARY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
              What it is <span className="text-[#9ba4b5] font-light">—</span>{" "}
              and what it is not
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
            Eight dimensions, five adjacent categories, one neutral comparison.
            Individual products in every column vary widely; nothing here
            asserts superiority over a named product.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full bg-white rounded-2xl border border-[#DBE3E8] shadow-xs overflow-x-auto mb-10">
          <table className="w-full text-left border-collapse min-w-[900px] table-fixed">
            <colgroup>
              <col className="w-[220px]" />
              <col className="w-[125px]" />
              <col className="w-[125px]" />
              <col className="w-[125px]" />
              <col className="w-[125px]" />
              <col className="w-[125px]" />
              <col className="w-[155px]" />
            </colgroup>
            <thead>
              <tr className="border-b border-[#DBE3E8]">
                <th className="py-4 px-5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748b] bg-[#F4F7F9] border-r border-[#DBE3E8]">
                  Dimension
                </th>
                <th className="py-4 px-5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748b] bg-[#F4F7F9] border-r border-[#DBE3E8]">
                  ERP
                </th>
                <th className="py-4 px-5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748b] bg-[#F4F7F9] border-r border-[#DBE3E8]">
                  Business Intelligence
                </th>
                <th className="py-4 px-5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748b] bg-[#F4F7F9] border-r border-[#DBE3E8]">
                  GRC
                </th>
                <th className="py-4 px-5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748b] bg-[#F4F7F9] border-r border-[#DBE3E8]">
                  Workflow Automation
                </th>
                <th className="py-4 px-5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748b] bg-[#F4F7F9] border-r border-[#DBE3E8]">
                  AI Copilot
                </th>
                <th className="py-4 px-5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#0F476A] bg-[#E8EFF4]">
                  ZOIKO
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => {
                const isLastRow = index === tableData.length - 1;
                return (
                  <tr
                    key={index}
                    className={`border-b border-[#DBE3E8] ${
                      isLastRow ? "border-b-0" : ""
                    }`}
                  >
                    <td className="py-4 px-5 text-xs font-semibold text-[#0f172a] bg-white border-r border-[#DBE3E8]">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-5 text-xs text-[#64748b] bg-white border-r border-[#DBE3E8]">
                      {row.erp}
                    </td>
                    <td className="py-4 px-5 text-xs text-[#64748b] bg-white border-r border-[#DBE3E8]">
                      {row.bi}
                    </td>
                    <td className="py-4 px-5 text-xs text-[#64748b] bg-white border-r border-[#DBE3E8]">
                      {row.grc}
                    </td>
                    <td className="py-4 px-5 text-xs text-[#64748b] bg-white border-r border-[#DBE3E8]">
                      {row.workflow}
                    </td>
                    <td className="py-4 px-5 text-xs text-[#64748b] bg-white border-r border-[#DBE3E8]">
                      {row.ai}
                    </td>
                    <td className="py-4 px-5 text-xs font-medium text-[#0f172a] bg-[#FBFCFD]">
                      {row.zoiko}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center w-full">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
          >
            Read why ZoikoSuite is not an ERP
            <ArrowRight className="w-4 h-4 text-[#D0AA55]" />
          </a>
        </div>
      </div>
    </section>
  );
}
