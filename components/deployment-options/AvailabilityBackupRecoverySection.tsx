"use client";

import React from "react";

interface RecordField {
  title: string;
  value: string;
  isYellow?: boolean;
}

const BACKUP_FIELDS: RecordField[] = [
  { title: "Data / service", value: "What is protected" },
  { title: "Method", value: "Snapshot, log, or full" },
  { title: "Frequency", value: "Contractual value only", isYellow: true },
  { title: "Retention", value: "Contractual value only", isYellow: true },
  { title: "Encryption / key", value: "Which key protects it" },
  { title: "Location", value: "Requires verification", isYellow: true },
  { title: "Operator", value: "Who runs it" },
  { title: "Integrity check", value: "How it is validated" },
  { title: "Restore owner", value: "Who can initiate" },
  { title: "Evidence", value: "What proves it ran" },
];

const RECOVERY_FIELDS: RecordField[] = [
  { title: "Scenario", value: "What failure is assumed" },
  {
    title: "Target environment",
    value: "Requires verification",
    isYellow: true,
  },
  { title: "Dependencies", value: "Identity, keys, network, time" },
  { title: "Initiation authority", value: "Who declares it" },
  { title: "Runbook", value: "Documented and tested" },
  { title: "Test date", value: "When last exercised" },
  { title: "Result", value: "Outcome of that test" },
  { title: "Gaps", value: "Recorded openly" },
  { title: "Customer action", value: "What you must do" },
  { title: "Evidence", value: "What proves recovery works" },
];

export default function AvailabilityBackupRecoverySection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                AVAILABILITY, BACKUP, RECOVERY, AND CONTINUITY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15] text-[#0F172A]">
              Structure without invented numbers
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              This page publishes the fields a recovery model must contain. It
              does not publish targets, because a target only means something
              against a contractually approved scope.
            </p>
          </div>
        </div>

        {/* Two Tables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Backup Record Fields Table Card */}
          <div className="w-full bg-white border border-[#DBE3E8] rounded-2xl shadow-sm overflow-hidden flex flex-col">
            {/* Table Header */}
            <div className="bg-[#08222F] px-6 py-4 flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-[#D0AA55] tracking-widest uppercase">
                BACKUP RECORD FIELDS
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600/60" />
              </div>
            </div>

            {/* Table Grid / List */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BACKUP_FIELDS.map((field, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#DBE3E8] rounded-xl p-4 flex flex-col gap-1 shadow-2xs"
                >
                  <span className="text-xs font-bold text-[#0F172A]">
                    {field.title}
                  </span>
                  <span
                    className={`text-xs ${
                      field.isYellow ? "text-[#D0AA55]" : "text-[#475569]"
                    }`}
                  >
                    {field.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recovery Record Fields Table Card */}
          <div className="w-full bg-white border border-[#DBE3E8] rounded-2xl shadow-sm overflow-hidden flex flex-col">
            {/* Table Header */}
            <div className="bg-[#08222F] px-6 py-4 flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-[#D0AA55] tracking-widest uppercase">
                RECOVERY RECORD FIELDS
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600/60" />
              </div>
            </div>

            {/* Table Grid / List */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RECOVERY_FIELDS.map((field, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#DBE3E8] rounded-xl p-4 flex flex-col gap-1 shadow-2xs"
                >
                  <span className="text-xs font-bold text-[#0F172A]">
                    {field.title}
                  </span>
                  <span
                    className={`text-xs ${
                      field.isYellow ? "text-[#D0AA55]" : "text-[#475569]"
                    }`}
                  >
                    {field.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
