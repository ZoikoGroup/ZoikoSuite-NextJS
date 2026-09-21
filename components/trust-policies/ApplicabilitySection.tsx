import React from "react";

const dims = [
  {
    label: "Product / service",
    desc: "Platform-wide or a named service/module.",
  },
  {
    label: "Legal entity",
    desc: "Entity or entities subject to the policy.",
  },
  {
    label: "Deployment",
    desc: (
      <>
        Multi-tenant SaaS, dedicated, or sovereign/customer-
        <br />
        controlled.
      </>
    ),
  },
  {
    label: "Jurisdiction / region",
    desc: "Only where the policy differs by law, market, or location.",
  },
  {
    label: "Audience",
    desc: (
      <>
        Employees, contractors, administrators, customers,
        <br />
        partners.
      </>
    ),
  },
  {
    label: "Exclusions",
    desc: (
      <>
        Explicit exclusions or local addenda, stated — not
        <br />
        implied.
      </>
    ),
  },
];

export default function ApplicabilitySection() {
  return (
    <section className="w-full bg-white font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] md:px-12 flex flex-col gap-12">
        {/* Header — left eyebrow/title, right-aligned description */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
          <div className="flex flex-col gap-3.5 pt-1.5">
            <span
              className="text-[#A7852B] text-xs font-normal leading-4 tracking-wider"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              06 / APPLICABILITY
            </span>
            <h2
              className="text-[#0D2636] text-3xl md:text-4xl font-semibold leading-10"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Scope before certainty
            </h2>
          </div>
          <div className="max-w-[633px]">
            <p
              className="text-[#3E5A6B] text-base md:text-lg font-normal leading-7 lg:text-right"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              A policy can be approved and still not apply to every entity,
              deployment,<br />
              region, customer, employee, or workflow. Applicability is part of the policy<br />
              record, not a footnote.
            </p>
          </div>
        </div>

        {/* Grid of six applicability dimensions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:h-72">
          {dims.map((dim) => (
            <div
              key={dim.label}
              className="self-stretch px-7 py-7 bg-white rounded-2xl border border-[#D6DEE3] flex flex-col items-start gap-2.5"
            >
              <span
                className="text-[#3E5A6B] text-xs font-normal uppercase leading-4 tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {dim.label}
              </span>
              <p
                className="text-[#0D2636] text-sm font-normal leading-6"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                {dim.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}