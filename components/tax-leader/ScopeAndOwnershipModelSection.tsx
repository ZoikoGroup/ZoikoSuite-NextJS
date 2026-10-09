import React from "react";

interface ScopeRow {
  role: string;
  read: string;
  editAssign: string;
  approve: string;
  export: string;
}

export default function ScopeAndOwnershipModelSection() {
  const rows: ScopeRow[] = [
    {
      role: "Public prospect",
      read: "Public education only",
      editAssign: "No",
      approve: "No",
      export: "No",
    },
    {
      role: "Tax Operations Owner",
      read: "Permitted entity scopes",
      editAssign: "Scoped tasks and ownership",
      approve: "No self-approval on own preparation",
      export: "Policy gated",
    },
    {
      role: "Tax Reviewer",
      read: "Assigned scopes",
      editAssign: "Review commentary",
      approve: "Review only, unless policy delegates",
      export: "Restricted",
    },
    {
      role: "Tax Approver",
      read: "Assigned approval queue",
      editAssign: "Decision notes",
      approve: "Yes, if distinct from the preparer",
      export: "Restricted",
    },
    {
      role: "Compliance Partner",
      read: "Policy and evidence summaries",
      editAssign: "Policy exceptions by authority",
      approve: "Not tax-preparation approval by default",
      export: "Policy gated",
    },
    {
      role: "IT / Integration Admin",
      read: "Connector health and technical metadata",
      editAssign: "Connector settings, if integrated",
      approve: "No tax sign-off",
      export: "No tax evidence export by default",
    },
    {
      role: "Controller",
      read: "Financial reconciliation and assigned summaries",
      editAssign: "Financial-context annotations",
      approve: "Only specifically delegated",
      export: "Policy gated",
    },
    {
      role: "Executive / Auditor",
      read: "Aggregate, read-only, authorized drill-down",
      editAssign: "No",
      approve: "No",
      export: "Only with an explicit grant",
    },
  ] as const;

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-10 flex flex-col items-start max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            Scope and ownership model
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
            Scope narrows from the organization down to an owned obligation
            category. Decision rights keep the person who prepares apart from
            the person who approves.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[768px]">
            <thead>
              <tr className="bg-[#F6F5F0] border-b border-black/10">
                <th className="py-4 px-6 text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                  ROLE
                </th>
                <th className="py-4 px-6 text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                  READ
                </th>
                <th className="py-4 px-6 text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                  EDIT / ASSIGN
                </th>
                <th className="py-4 px-6 text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                  APPROVE
                </th>
                <th className="py-4 px-6 text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                  EXPORT
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 bg-white text-sm">
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-black/[0.01] transition-colors"
                >
                  <td className="py-4 px-6 font-bold text-[#1F2421]">
                    {row.role}
                  </td>
                  <td className="py-4 px-6 text-[#4B5563]">{row.read}</td>
                  <td className="py-4 px-6 text-[#4B5563]">{row.editAssign}</td>
                  <td className="py-4 px-6 text-[#4B5563]">{row.approve}</td>
                  <td className="py-4 px-6 text-[#4B5563]">{row.export}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
