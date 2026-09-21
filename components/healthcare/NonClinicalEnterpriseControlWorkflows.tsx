"use client";

import React from "react";

const workflows = [
  {
    borderLeftColor: "border-l-[#8A3B3B]",
    col1: {
      title: "Vendor agreement renewal",
      id: "VND-2026-0412",
      line2: "Critical vendor • Hospital 02 + 3 sites",
      line3: "Data-access arrangement in scope",
    },
    col2: {
      requestedAuthority: "exceeds supply-chain delegation",
      policyBasis: "procurement authority policy v4",
      segregation: "EVALUATOR EXCLUDED FROM AWARD",
      segregationBg: "bg-[#F9EDED] text-[#5A6D79] border-[#5A6D79]",
    },
    col3: {
      statusBadge: "BLOCKED - ESCALATION REQUIRED",
      statusBadgeBg: "bg-[#F9EDED] text-[#5A6D79] border-[#5A6D79]",
      line2: "Diligence: lapsed Feb 2026",
      line3: "Execution and payment remain in the ERP",
    },
  },
  {
    borderLeftColor: "border-l-[#0F476A]",
    col1: {
      title: "Workforce credential expiry — administrative",
      id: "WF-2026-0455",
      line2: "Clinic Group • Site 04 • contracted staff",
      line3: "Administrative tracking only",
    },
    col2: {
      owner: "people operations",
      policyBasis: "HR-POL-11 v4",
      boundary:
        "clinical privileging and competency decisions remain with the credentialing body",
      boundaryHighlight: true,
    },
    col3: {
      statusBadge: "EXPIRY APPROACHING",
      statusBadgeBg: "bg-[#FBF2DF] text-[#5A6D79] border-[#5A6D79]",
      line2: "Evidence: notification and acknowledgement retained",
      line3: "Credential record stays in the HR and credentialing system",
    },
  },
  {
    borderLeftColor: "border-l-[#0F476A]",
    col1: {
      title: "Capital approval — facility equipment",
      id: "FIN-2026-018",
      line2: "Regional Health • Hospital 01",
      line3: "Multi-year budget commitment",
    },
    col2: {
      requestedAuthority: "within delegation",
      policyBasis: "capital authority policy v4",
      segregation: "SATISFIED",
      segregationBg: "bg-[#EAF5F0] text-[#5A6D79] border-[#5A6D79]",
    },
    col3: {
      statusBadge: "APPROVED",
      statusBadgeBg: "bg-[#EAF5F0] text-[#5A6D79] border-[#5A6D79]",
      line2: "Evidence: business case and prior decisions retained",
      line3: "Boundary: no clinical-need or device-suitability determination",
    },
  },
];

export default function NonClinicalEnterpriseControlWorkflows() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                WORKFORCE, LEGAL, VENDOR AND COMMERCIAL GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] max-w-[560px] font-bold tracking-tight leading-[1.1]">
              Non-clinical enterprise control workflows
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Four governed workflows around healthcare operations, each with
              authority in the execution path.
            </p>
          </div>
        </div>

        {/* Workflows List Grid/Cards */}
        <div className="flex flex-col gap-3">
          {workflows.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-5 border border-gray-200 border-l-[4px] ${item.borderLeftColor} shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-6`}
            >
              {/* Column 1: Workflow and Scope */}
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-1">
                  WORKFLOW AND SCOPE
                </span>
                <h3 className="text-[13px] font-bold text-[#08222F] mb-1">
                  {item.col1.title}{" "}
                  <span className="font-mono font-normal text-gray-500">
                    — {item.col1.id}
                  </span>
                </h3>
                <p className="text-[12px] text-gray-600 mb-0.5">
                  {item.col1.line2}
                </p>
                <p className="text-[12px] text-gray-600">{item.col1.line3}</p>
              </div>

              {/* Column 2: Authority and Basis */}
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-1">
                  AUTHORITY AND BASIS
                </span>
                {item.col2.requestedAuthority && (
                  <p className="text-[12px] text-gray-700 mb-0.5 font-mono">
                    <span className="text-gray-400">Requested authority:</span>{" "}
                    {item.col2.requestedAuthority}
                  </p>
                )}
                {item.col2.owner && (
                  <p className="text-[12px] text-gray-700 mb-0.5 font-mono">
                    <span className="text-gray-400">Owner:</span>{" "}
                    {item.col2.owner}
                  </p>
                )}
                <p className="text-[12px] text-gray-700 mb-2 font-mono">
                  <span className="text-gray-400">Policy basis:</span>{" "}
                  {item.col2.policyBasis}
                </p>
                {item.col2.segregation && (
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="text-gray-400">Segregation:</span>
                    <span
                      className={`px-2 py-0.5 rounded border font-bold ${item.col2.segregationBg}`}
                    >
                      {item.col2.segregation}
                    </span>
                  </div>
                )}
                {item.col2.boundary && (
                  <p
                    className={`text-[12px] leading-snug font-sans ${item.col2.boundaryHighlight ? "text-[#8A3B3B] font-semibold" : "text-gray-700"}`}
                  >
                    <span className="font-mono text-gray-400 text-[11px] block mb-0.5">
                      Boundary:
                    </span>{" "}
                    {item.col2.boundary}
                  </p>
                )}
              </div>

              {/* Column 3: Status and Evidence */}
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-1">
                  STATUS AND EVIDENCE
                </span>
                <div className="mb-2">
                  <span
                    className={`inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${item.col3.statusBadgeBg}`}
                  >
                    ● {item.col3.statusBadge}
                  </span>
                </div>
                <p className="text-[12px] text-gray-600 mb-0.5">
                  {item.col3.line2}
                </p>
                <p className="text-[12px] text-gray-600">{item.col3.line3}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
