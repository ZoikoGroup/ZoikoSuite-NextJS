"use client";

import React from "react";

export default function TwoSeparateAxesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                TWO SEPARATE AXES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Organization type is not industry
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              The same organization may match more than one organization pattern
              and one industry context. Collapsing them into a single
              classification loses information both axes carry.
            </p>
          </div>
        </div>

        {/* Two Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Organization type */}
          <div
            className="bg-white rounded-xl p-6 shadow-sm"
            style={{
              border: "1px solid #2A6386",
              borderTopWidth: "4px",
              borderTopColor: "#2A6386",
            }}
          >
            <h3 className="text-base font-bold text-[#0F172A] mb-2">
              Organization type
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Describes{" "}
              <strong className="font-semibold text-[#0F172A]">
                how an organization is structured and governed
              </strong>{" "}
              — delegation of authority, where accountability sits, entity and
              jurisdiction scope, and what oversight applies.
            </p>
          </div>

          {/* Card 2: Industry */}
          <div
            className="bg-white rounded-xl p-6 shadow-sm"
            style={{
              border: "1px solid #D0AA55",
              borderTopWidth: "4px",
              borderTopColor: "#D0AA55",
            }}
          >
            <h3 className="text-base font-bold text-[#0F172A] mb-2">
              Industry
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Describes{" "}
              <strong className="font-semibold text-[#0F172A]">
                the sector in which it operates
              </strong>{" "}
              — the market, the products or services, and the sector-specific
              obligations that follow from them.
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="w-full overflow-hidden rounded-2xl border border-[#DBE3E8] shadow-sm bg-white">
          <table className="w-full border-collapse text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#DBE3E8]">
                <th className="py-4 px-6 font-mono font-bold text-[11px] tracking-widest text-[#64748B] uppercase bg-[#F4F7F9] border-r border-[#DBE3E8]">
                  ILLUSTRATIVE
                </th>
                <th className="py-4 px-6 font-mono font-bold text-[11px] tracking-widest text-[#64748B] uppercase bg-[#F4F7F9] border-r border-[#DBE3E8]">
                  ORGANIZATION PATTERN
                </th>
                <th className="py-4 px-6 font-mono font-bold text-[11px] tracking-widest text-[#64748B] uppercase bg-[#F4F7F9] border-r border-[#DBE3E8]">
                  INDUSTRY CONTEXT
                </th>
                <th className="py-4 px-6 font-mono font-bold text-[11px] tracking-widest text-[#64748B] uppercase bg-[#E8EFF4]">
                  RULE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DBE3E8] text-[#0F172A]">
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 font-semibold border-r border-[#DBE3E8]">
                  A
                </td>
                <td className="py-4 px-6 border-r border-[#DBE3E8] text-[#475569]">
                  Nonprofit Organization
                </td>
                <td className="py-4 px-6 border-r border-[#DBE3E8] text-[#475569]">
                  Healthcare
                </td>
                <td className="py-4 px-6 bg-[#FBFCFD] text-[#475569]">
                  Both may apply. Neither implies product entitlement or legal
                  status validation.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 font-semibold border-r border-[#DBE3E8]">
                  B
                </td>
                <td className="py-4 px-6 border-r border-[#DBE3E8] text-[#475569]">
                  Public Company
                </td>
                <td className="py-4 px-6 border-r border-[#DBE3E8] text-[#475569]">
                  Technology &amp; SaaS
                </td>
                <td className="py-4 px-6 bg-[#FBFCFD] text-[#475569]">
                  Public-company oversight and technology-industry context are
                  separate concerns.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 font-semibold border-r border-[#DBE3E8]">
                  C
                </td>
                <td className="py-4 px-6 border-r border-[#DBE3E8] text-[#475569]">
                  Multi-Entity Group
                </td>
                <td className="py-4 px-6 border-r border-[#DBE3E8] text-[#475569]">
                  Manufacturing
                </td>
                <td className="py-4 px-6 bg-[#FBFCFD] text-[#475569]">
                  Entity structure does not determine industry.
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 font-semibold border-r border-[#DBE3E8]">
                  D
                </td>
                <td className="py-4 px-6 border-r border-[#DBE3E8] text-[#475569]">
                  Public-Sector Organization
                </td>
                <td className="py-4 px-6 border-r border-[#DBE3E8] text-[#475569]">
                  Government / public sector
                </td>
                <td className="py-4 px-6 bg-[#FBFCFD] text-[#475569]">
                  Here the two axes may align, but the source taxonomies remain
                  distinct.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
