import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function IndependentValidationSection() {
  const validations = [
    {
      type: "Penetration testing",
      detail: "No independently approved summary published yet.",
      linkText: "Security Overview",
      href: "/security-overview",
    },
    {
      type: "Vulnerability program review",
      detail: "No independent assessment published yet.",
      linkText: "Security Overview",
      href: "/security-overview",
    },
    {
      type: "Accessibility assessment",
      detail: "Internal testing in progress; see readiness above.",
      linkText: "Accessibility",
      href: "/accessibility",
    },
    {
      type: "Privacy assessment",
      detail: "No independent assessment published yet.",
      linkText: "Privacy Architecture",
      href: "/privacy-architecture",
    },
    {
      type: "AI governance assessment",
      detail: "No independent assessment published yet.",
      linkText: "Responsible AI",
      href: "/responsible-ai",
    },
    {
      type: "Business continuity / resilience",
      detail: "No independent assessment published yet.",
      linkText: "Security · System Status",
      href: "/trust-system-status",
    },
  ];

  return (
    <section className="w-full bg-color-white-solid py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-6 sm:px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-color-orange-48" />
            <span className="text-color-orange-48 text-xs font-semibold font-['Inter'] tracking-wider uppercase">
              INDEPENDENT TESTING &amp; VALIDATION
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-color-azure-12-4 text-2xl sm:text-3xl font-bold font-['Inter'] leading-tight">
              Proofs that are not certifications, stated plainly.
            </h2>
          </div>
        </div>

        {/* Validation Table */}
        <div className="self-stretch w-full overflow-x-auto rounded-xl border border-color-orange-87 bg-color-white-solid shadow-xs">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-color-orange-87 bg-color-grey-95-12">
                <th className="w-80 p-3.5 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                  Validation type
                </th>
                <th className="p-3.5 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                  Public detail
                </th>
                <th className="w-72 p-3.5 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                  Related trust destination
                </th>
              </tr>
            </thead>
            <tbody>
              {validations.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-color-orange-87 last:border-b-0 hover:bg-amber-50/10 transition-colors"
                >
                  <td className="p-3.5 align-middle font-bold text-xs text-color-azure-12-4">
                    {item.type}
                  </td>
                  <td className="p-3.5 align-middle text-xs text-color-azure-12-4 font-normal">
                    {item.detail}
                  </td>
                  <td className="p-3.5 align-middle text-xs font-normal">
                    <Link
                      href={item.href}
                      className="text-color-azure-24 hover:text-color-orange-48 font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      <span>{item.linkText}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
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
