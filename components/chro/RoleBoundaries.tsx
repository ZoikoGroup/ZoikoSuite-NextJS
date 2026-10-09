import React from "react";

interface RoleBoundary {
  role: string;
  description: string;
}

export default function RoleBoundaries() {
  const boundaries: RoleBoundary[] = [
    {
      role: "CHRO",
      description:
        "Workforce policy and accountable decisions; no blanket sensitive-record access.",
    },
    {
      role: "CIO",
      description:
        "Systems, identity, integration and technical custodian duties.",
    },
    {
      role: "COO",
      description: "Operating handoffs without employee-data entitlement.",
    },
    {
      role: "Controller / Payroll",
      description:
        "Finance/payroll authority separate from upstream HR review.",
    },
    {
      role: "Legal / Privacy",
      description:
        "Interpretation, policy rights and lawful processing boundaries.",
    },
    {
      role: "Audit / Board",
      description: "Authorized minimized oversight, not raw personnel records.",
    },
  ];

  return (
    <section className="w-full bg-[#F6F5F1] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          ROLE BOUNDARIES
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-12">
          Coordination does not erase authority.
        </h2>

        {/* Rows Container */}
        <div className="w-full flex flex-col divide-y divide-gray-200/80 border-t border-b border-gray-200/80">
          {boundaries.map((item, index) => (
            <div
              key={index}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#1F2421] tracking-tight">
                  {item.role}
                </h3>
              </div>
              <div className="md:col-span-8 lg:col-span-9">
                <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
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
