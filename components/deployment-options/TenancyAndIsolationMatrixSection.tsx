"use client";

import React from "react";

interface MatrixRow {
  dimension: string;
  regional: string;
  singleTenant: string;
  privateCloud: string;
  sovereign: string;
  onPremise: string;
}

const MATRIX_DATA: MatrixRow[] = [
  {
    dimension: "Commercial",
    regional: "Shared controlled service",
    singleTenant: "Dedicated",
    privateCloud: "Dedicated",
    sovereign: "Requires verification",
    onPremise: "Dedicated",
  },
  {
    dimension: "Account / project",
    regional: "Shared controlled service",
    singleTenant: "Dedicated",
    privateCloud: "Dedicated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Network",
    regional: "Logically isolated",
    singleTenant: "Dedicated",
    privateCloud: "Dedicated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Compute",
    regional: "Logically isolated",
    singleTenant: "Dedicated",
    privateCloud: "Dedicated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Orchestration",
    regional: "Shared controlled service",
    singleTenant: "Requires verification",
    privateCloud: "Dedicated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Database",
    regional: "Logically isolated",
    singleTenant: "Dedicated",
    privateCloud: "Dedicated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Storage",
    regional: "Logically isolated",
    singleTenant: "Dedicated",
    privateCloud: "Dedicated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Cache / queue",
    regional: "Shared controlled service",
    singleTenant: "Requires verification",
    privateCloud: "Dedicated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Backup",
    regional: "Logically isolated",
    singleTenant: "Dedicated",
    privateCloud: "Dedicated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Logs",
    regional: "Logically isolated",
    singleTenant: "Logically isolated",
    privateCloud: "Dedicated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Keys",
    regional: "Shared controlled service",
    singleTenant: "Requires verification",
    privateCloud: "Requires verification",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Identity",
    regional: "Federated",
    singleTenant: "Federated",
    privateCloud: "Federated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Management plane",
    regional: "Shared controlled service",
    singleTenant: "Shared controlled service",
    privateCloud: "Jointly operated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Observability",
    regional: "Logically isolated",
    singleTenant: "Logically isolated",
    privateCloud: "Jointly operated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Support tooling",
    regional: "Shared controlled service",
    singleTenant: "Shared controlled service",
    privateCloud: "Shared controlled service",
    sovereign: "Requires verification",
    onPremise: "Customer-approved access",
  },
  {
    dimension: "Release channel",
    regional: "Shared controlled service",
    singleTenant: "Requires verification",
    privateCloud: "Jointly operated",
    sovereign: "Requires verification",
    onPremise: "Customer-executed",
  },
  {
    dimension: "Data plane",
    regional: "Logically isolated",
    singleTenant: "Dedicated",
    privateCloud: "Dedicated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
  {
    dimension: "Control plane",
    regional: "Shared controlled service",
    singleTenant: "Shared controlled service",
    privateCloud: "Jointly operated",
    sovereign: "Requires verification",
    onPremise: "Customer-operated",
  },
];

export default function TenancyAndIsolationMatrixSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                TENANCY AND ISOLATION MATRIX
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15] text-[#0F172A]">
              Eighteen dimensions across the <br /> five patterns
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              This matrix is descriptive. It does not rank patterns and it does
              not declare a best security or compliance option.
            </p>
          </div>
        </div>

        {/* Matrix Table */}
        <div className="w-full overflow-x-auto bg-white border border-[#DBE3E8] rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[#F4F7F9] text-[#475569] text-[11px] font-mono uppercase tracking-wider border-b border-[#DBE3E8]">
                <th className="py-4 px-6 font-bold">Dimension</th>
                <th className="py-4 px-6 font-bold">Regional</th>
                <th className="py-4 px-6 font-bold">Single-Tenant</th>
                <th className="py-4 px-6 font-bold">Private Cloud</th>
                <th className="py-4 px-6 font-bold">Sovereign</th>
                <th className="py-4 px-6 font-bold bg-[#E8EFF4] text-[#0F476A]">
                  On-Premise
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DBE3E8] text-xs sm:text-sm">
              {MATRIX_DATA.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#FAF8F5]/50 transition-colors"
                >
                  <td className="py-4 px-6 font-semibold text-[#0F172A]">
                    {row.dimension}
                  </td>
                  <td className="py-4 px-6 text-[#475569]">{row.regional}</td>
                  <td className="py-4 px-6 text-[#475569]">
                    {row.singleTenant}
                  </td>
                  <td className="py-4 px-6 text-[#475569]">
                    {row.privateCloud}
                  </td>
                  <td className="py-4 px-6 text-[#475569]">{row.sovereign}</td>
                  <td className="py-4 px-6 text-[#0F172A] font-medium bg-[#FBFCFD]">
                    {row.onPremise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
