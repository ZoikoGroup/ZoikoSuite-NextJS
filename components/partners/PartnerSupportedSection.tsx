import React from "react";

const roles = [
  {
    label: "ZOIKOSUITE",
    description:
      "Runs the governed platform, policy engine, and evidence capture directly.",
    chipClass: "bg-[#16223A] text-white",
  },
  {
    label: "CUSTOMER",
    description:
      "Initiates the workflow and confirms entity/jurisdiction context.",
    chipClass:
      "bg-[#EFE8D8] text-[#16223A] border border-[#DCD6C8]",
  },
  {
    label: "PARTNER",
    description:
      "Provides the local filing, advice, or regulated execution the workflow depends on.",
    chipClass: "bg-[#C8A24A] text-[#20170A]",
  },
  {
    label: "AUTHORITY",
    description:
      "Receives or validates the filing per jurisdiction requirements.",
    chipClass:
      "bg-white text-[#4B5872] border border-[#DCD6C8]",
  },
];

export default function PartnerSupportedSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
          PROFESSIONAL &amp; JURISDICTION SUPPORT
        </span>

        <h2 className="text-3xl md:text-[32px] font-serif font-bold text-[#16223A] leading-tight tracking-tight">
          What &quot;Partner-Supported&quot; actually means
        </h2>

        <p className="text-[#4B5872] text-base font-light leading-relaxed mt-3 max-w-3xl">
          <span className="block whitespace-normal lg:whitespace-nowrap">
            A workflow or jurisdiction depends on an approved external provider for some required
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            capability, expertise, filing, advice, or local execution &mdash; the exact dependency is always
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            stated, never inferred.
          </span>
        </p>

        <div className="w-full mt-10">
          {roles.map((role, index) => (
            <div
              key={role.label}
              className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 py-4 border-t border-[#DCD6C8] ${
                index === roles.length - 1 ? "border-b" : ""
              }`}
            >
              <div
                className={`w-36 shrink-0 px-3 pt-[5px] pb-1.5 rounded-full text-center ${role.chipClass}`}
              >
                <span className="text-xs font-extrabold uppercase leading-4 tracking-wider">
                  {role.label}
                </span>
              </div>
              <p className="flex-1 text-[#4B5872] text-sm font-normal leading-5">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
