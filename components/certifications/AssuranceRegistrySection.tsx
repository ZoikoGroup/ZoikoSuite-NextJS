"use client";

import React, { useState, useMemo } from "react";
import { Search, ChevronDown, CheckCircle2, AlertCircle, Clock, ExternalLink } from "lucide-react";

interface RecordItem {
  id: string;
  name: string;
  type: string;
  status: "Readiness" | "In audit" | "Planned" | "Certified";
  domain: string;
  scope: string;
  issuer: string;
  evidence: string;
  description: string;
}

const initialRecords: RecordItem[] = [
  {
    id: "iso-27001",
    name: "ISO/IEC 27001 — Information Security Management",
    type: "Readiness /\nalignment",
    status: "Readiness",
    domain: "Security",
    scope: "ZoikoSuite platform, production environment",
    issuer: "Internal\nreadiness",
    evidence: "Readiness brief",
    description: "Active control implementation and engineering readiness for ISO/IEC 27001 across ZoikoSuite production environments.",
  },
  {
    id: "soc-2",
    name: "SOC 2 Type II — Trust Services Criteria",
    type: "Readiness /\nalignment",
    status: "Readiness",
    domain: "Security",
    scope: "ZoikoSuite platform and supporting systems",
    issuer: "Internal\nreadiness",
    evidence: "Readiness brief",
    description: "Gap assessment and continuous control tracking against Security, Availability, and Confidentiality Trust Services Criteria.",
  },
  {
    id: "wcag-22",
    name: "WCAG 2.2 AA — Accessibility",
    type: "Readiness /\nalignment",
    status: "In audit",
    domain: "Accessibility",
    scope: "ZoikoSuite web application",
    issuer: "Internal testing",
    evidence: "Internal testing\nnotes",
    description: "Systematic accessibility auditing and automated/manual keyboard, screen-reader, and contrast testing in active progress.",
  },
  {
    id: "iso-42001",
    name: "ISO/IEC 42001 — AI Management System",
    type: "Readiness /\nalignment",
    status: "Planned",
    domain: "AI Governance",
    scope: "Not yet approved",
    issuer: "Internal\nreadiness",
    evidence: "Governance policy",
    description: "Structured governance policy formulation for responsible AI models, synthetic workflows, and data protection boundaries.",
  },
];

export default function AssuranceRegistrySection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [activeModalRecord, setActiveModalRecord] = useState<RecordItem | null>(null);

  const filteredRecords = useMemo(() => {
    return initialRecords.filter((rec) => {
      const matchesSearch =
        rec.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rec.scope.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rec.evidence.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        selectedType === "all" ||
        rec.type.toLowerCase().includes(selectedType.toLowerCase());

      const matchesStatus =
        selectedStatus === "all" ||
        rec.status.toLowerCase() === selectedStatus.toLowerCase();

      const matchesDomain =
        selectedDomain === "all" ||
        rec.domain.toLowerCase() === selectedDomain.toLowerCase();

      return matchesSearch && matchesType && matchesStatus && matchesDomain;
    });
  }, [searchQuery, selectedType, selectedStatus, selectedDomain]);

  return (
    <section id="assurance-registry" className="w-full bg-color-grey-95-12 py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-6 sm:px-8 flex flex-col justify-start items-start gap-7">
        {/* Section Header */}
        <div className="self-stretch flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-color-orange-48" />
              <span className="text-color-orange-48 text-xs font-semibold font-['Inter'] tracking-wider uppercase">
                ASSURANCE REGISTRY
              </span>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="text-color-azure-12-4 text-2xl sm:text-3xl font-bold font-['Inter'] leading-tight">
                The canonical public proof surface.
              </h2>
            </div>
          </div>
          <div className="max-w-md pt-2">
            <p className="text-color-grey-44 text-sm sm:text-base font-normal font-['Inter'] leading-6">
              Empty and readiness states are valid and preferable to unsupported
              claims — records are never invented to fill the table.
            </p>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="self-stretch pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap">
          {/* Filter: Assurance Type */}
          <div className="relative min-w-[170px]">
            <select
              aria-label="Filter by assurance type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full appearance-none pl-4 pr-9 py-2.5 bg-color-white-solid rounded-lg border border-color-orange-87 text-color-azure-25-3 text-xs font-medium font-['Inter'] focus:outline-none focus:ring-1 focus:ring-color-orange-48 cursor-pointer"
            >
              <option value="all">All assurance types</option>
              <option value="readiness">Readiness / alignment</option>
              <option value="attestation">Attestation / audit</option>
              <option value="certification">Independent certification</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-color-grey-44 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Filter: Status */}
          <div className="relative min-w-[140px]">
            <select
              aria-label="Filter by assurance status"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full appearance-none pl-4 pr-9 py-2.5 bg-color-white-solid rounded-lg border border-color-orange-87 text-color-azure-25-3 text-xs font-medium font-['Inter'] focus:outline-none focus:ring-1 focus:ring-color-orange-48 cursor-pointer"
            >
              <option value="all">All statuses</option>
              <option value="readiness">Readiness</option>
              <option value="in audit">In audit</option>
              <option value="planned">Planned</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-color-grey-44 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Filter: Domains */}
          <div className="relative min-w-[140px]">
            <select
              aria-label="Filter by assurance domain"
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full appearance-none pl-4 pr-9 py-2.5 bg-color-white-solid rounded-lg border border-color-orange-87 text-color-azure-25-3 text-xs font-medium font-['Inter'] focus:outline-none focus:ring-1 focus:ring-color-orange-48 cursor-pointer"
            >
              <option value="all">All domains</option>
              <option value="security">Security</option>
              <option value="accessibility">Accessibility</option>
              <option value="ai governance">AI Governance</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-color-grey-44 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Search Input */}
          <div className="flex-1 min-w-[220px] relative">
            <input
              type="text"
              placeholder="Search assurance name…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-color-white-solid rounded-lg border border-color-orange-87 text-color-azure-12-4 placeholder:text-color-grey-46 text-xs font-normal font-['Inter'] focus:outline-none focus:ring-1 focus:ring-color-orange-48"
            />
            <Search className="w-3.5 h-3.5 text-color-grey-46 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Counter */}
        <div className="self-stretch">
          <span className="text-color-grey-44 text-xs font-normal font-['Inter']">
            {filteredRecords.length} {filteredRecords.length === 1 ? "record" : "records"}
          </span>
        </div>

        {/* Table Container */}
        <div className="self-stretch w-full overflow-x-auto rounded-xl border border-color-orange-87 bg-color-white-solid shadow-xs">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-color-orange-87 bg-color-grey-95-12">
                <th className="w-72 p-3 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                  Assurance
                </th>
                <th className="w-36 p-3 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                  Type
                </th>
                <th className="w-28 p-3 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                  Status
                </th>
                <th className="w-56 p-3 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                  Scope
                </th>
                <th className="w-32 p-3 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                  Issuer / assessor
                </th>
                <th className="w-36 p-3 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                  Evidence
                </th>
                <th className="w-24 p-3 text-center text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-color-grey-44 text-sm">
                    No matching assurance records found.
                  </td>
                </tr>
              ) : (
                filteredRecords.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="border-b border-color-orange-87 hover:bg-amber-50/10 transition-colors"
                  >
                    {/* Assurance Name */}
                    <td className="p-3 align-top font-bold text-xs text-color-azure-12-4 leading-snug">
                      {item.name}
                    </td>

                    {/* Type */}
                    <td className="p-3 align-top text-xs text-color-azure-12-4 whitespace-pre-line leading-snug">
                      {item.type}
                    </td>

                    {/* Status Badge */}
                    <td className="p-3 align-top">
                      {item.status === "In audit" ? (
                        <span className="inline-flex items-center px-2.5 py-1 bg-[#E8F0F5] border border-[#BFD0DB] rounded-md text-[#1E4E6E] text-xs font-bold uppercase tracking-tight font-['Inter']">
                          In audit
                        </span>
                      ) : item.status === "Planned" ? (
                        <span className="inline-flex items-center px-2.5 py-1 bg-[#F4F1EA] border border-[#DED8C6] rounded-md text-color-grey-44 text-xs font-bold uppercase tracking-tight font-['Inter']">
                          Planned
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 bg-[#F4F1EA] border border-[#DED8C6] rounded-md text-color-grey-44 text-xs font-bold uppercase tracking-tight font-['Inter']">
                          Readiness
                        </span>
                      )}
                    </td>

                    {/* Scope */}
                    <td className="p-3 align-top text-xs text-color-grey-44 leading-relaxed">
                      {item.scope}
                    </td>

                    {/* Issuer / Assessor */}
                    <td className="p-3 align-top text-xs text-color-azure-12-4 whitespace-pre-line leading-snug">
                      {item.issuer}
                    </td>

                    {/* Evidence */}
                    <td className="p-3 align-top text-xs text-color-azure-12-4 whitespace-pre-line leading-snug">
                      {item.evidence}
                    </td>

                    {/* Actions */}
                    <td className="p-3 align-top text-center">
                      <button
                        type="button"
                        onClick={() => setActiveModalRecord(item)}
                        className="inline-flex items-center justify-center text-xs font-semibold text-color-azure-24 hover:text-color-orange-48 transition-colors cursor-pointer"
                      >
                        <span>View details</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details Modal */}
      {activeModalRecord && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModalRecord(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-color-orange-87 flex flex-col gap-5 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-color-grey-95-12 border border-color-orange-87 text-color-grey-44 mb-2">
                  {activeModalRecord.domain} · {activeModalRecord.status}
                </span>
                <h3 className="text-xl font-bold text-color-azure-12-4">
                  {activeModalRecord.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalRecord(null)}
                className="text-color-grey-44 hover:text-color-azure-12-4 p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-color-grey-44 leading-relaxed">
              {activeModalRecord.description}
            </p>

            <div className="bg-color-grey-95-12 rounded-xl p-4 flex flex-col gap-3 text-xs">
              <div className="flex justify-between">
                <span className="font-semibold text-color-grey-44 uppercase">Scope:</span>
                <span className="text-color-azure-12-4 font-medium text-right max-w-[280px]">
                  {activeModalRecord.scope}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-color-grey-44 uppercase">Issuer / Assessor:</span>
                <span className="text-color-azure-12-4 font-medium">
                  {activeModalRecord.issuer.replace("\n", " ")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-color-grey-44 uppercase">Available Evidence:</span>
                <span className="text-color-azure-12-4 font-medium">
                  {activeModalRecord.evidence.replace("\n", " ")}
                </span>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveModalRecord(null)}
                className="px-4 py-2 rounded-lg border border-color-orange-87 text-xs font-semibold text-color-azure-12-4 hover:bg-neutral-50 cursor-pointer"
              >
                Close
              </button>
              <a
                href="#request-evidence"
                onClick={() => setActiveModalRecord(null)}
                className="px-4 py-2 rounded-lg bg-color-orange-58-2 text-color-azure-11 text-xs font-semibold hover:bg-[#ba964c] transition-colors cursor-pointer"
              >
                Request Evidence Artifact
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
