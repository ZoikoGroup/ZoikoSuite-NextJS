"use client";

import React from "react";

const providers = [
  {
    provider: "Microsoft Azure OpenAI",
    purpose: "Text Summary & Parsing",
    categories: "Scrubbed EDR alerts, user serials",
    prohibition: "Prohibited (DPA Bound)",
    retentionResidency: "Zero-retention, US East",
    review: "Feb 15, 2026. Next due: Aug 2026",
  },
  {
    provider: "Anthropic PBC",
    purpose: "Advisory Remediation",
    categories: "Suggested YAML config syntax",
    prohibition: "Prohibited (DPA Bound)",
    retentionResidency: "Zero-retention, US East",
    review: "Jan 10, 2026. Next due: Jul 2026",
  },
];

export default function ResponsibleAiSubprocessorsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              SUBPROCESSOR REGISTRY
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            Third-Party AI Service Providers
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Transparency ledger of external subprocessors. We maintain direct, legally binding DPA agreements to ensure absolute data isolation.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#123B4C]/10 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[980px]">
              <thead>
                <tr className="bg-[#F0EDE6] border-b border-[#123B4C]/10 text-[12px] font-mono font-bold text-[#0A2029] uppercase tracking-wider">
                  <th className="py-4 px-6 w-[180px]">PROVIDER</th>
                  <th className="py-4 px-6 w-[180px]">PURPOSE</th>
                  <th className="py-4 px-6 w-[240px]">DATA CONTEXT CATEGORIES</th>
                  <th className="py-4 px-6 w-[200px]">TRAINING PROHIBITION</th>
                  <th className="py-4 px-6 w-[200px]">RETENTION & RESIDENCY</th>
                  <th className="py-4 px-6">LAST SECURITY REVIEW</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#123B4C]/10 text-xs">
                {providers.map((item) => (
                  <tr
                    key={item.provider}
                    className="hover:bg-[#F7F5F0]/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-[#0A2029] text-[13.5px]">
                      {item.provider}
                    </td>
                    <td className="py-4 px-6 text-[#5B6670]">
                      {item.purpose}
                    </td>
                    <td className="py-4 px-6 text-[#5B6670] leading-relaxed">
                      {item.categories}
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#1F7A6C]">
                      {item.prohibition}
                    </td>
                    <td className="py-4 px-6 text-[#5B6670]">
                      {item.retentionResidency}
                    </td>
                    <td className="py-4 px-6 font-mono text-[#7891B1]">
                      {item.review}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
