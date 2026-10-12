import React from "react";

interface BoundaryItem {
  role: string;
  description: string;
}

const boundariesData: BoundaryItem[] = [
  {
    role: "COO",
    description:
      "Operating decisions and cross-team accountability; no blanket HR/payroll access.",
  },
  {
    role: "CIO",
    description: "Systems and technical governance remain IT-owned.",
  },
  {
    role: "CHRO",
    description: "Sensitive employee and workforce policy remain HR-owned.",
  },
  {
    role: "Controller / CFO",
    description: "Finance segregation cannot be overridden by operations.",
  },
  {
    role: "Tax / Compliance",
    description:
      "Regulatory interpretation and filing scope remain specialized.",
  },
  {
    role: "Audit / Board",
    description: "Governed oversight, not public access to private workpapers.",
  },
];

export default function RoleBoundaries() {
  return (
    <section className="bg-[#F6F5F1] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            ROLE BOUNDARIES
          </p>
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight">
            Coordination does not erase authority.
          </h2>
        </div>

        {/* Boundaries Table List */}
        <div className="border-t border-[#E2E8F0]">
          {boundariesData.map((item, index) => (
            <div
              key={index}
              className="py-6 border-b border-[#E2E8F0] grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-4">
                <h3 className="text-[#1E293B] text-base md:text-lg font-bold">
                  {item.role}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-[#64748B] text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
