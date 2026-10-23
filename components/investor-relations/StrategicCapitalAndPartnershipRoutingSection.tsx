import React from "react";
import Link from "next/link";

export default function StrategicCapitalAndPartnershipRoutingSection() {
  const rows = [
    {
      intent: "Institutional equity / growth capital",
      route: "Investor Relations",
      href: "/investor-relations",
    },
    {
      intent: "Sovereign / infrastructure capital",
      route: "Investor Relations + Strategic Partnerships when approved",
      href: "/investor-relations",
    },
    {
      intent: "Debt / credit relationship",
      route: "Finance / Investor Relations route",
      href: "/investor-relations",
    },
    {
      intent: "Commercial partnership only",
      route: "Partners / Strategic Partnerships",
      href: "/partners",
    },
    {
      intent: "M&A / corporate development",
      route:
        "Corporate Development route if publicly exposed; otherwise IR triage",
      href: "/corporate-enquiries",
    },
    {
      intent: "Enterprise customer",
      route: "ZoikoSuite sales",
      href: "/enterprise-sales",
    },
    {
      intent: "Media",
      route: "Newsroom / Press Office",
      href: "/media-enquiries",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            STRATEGIC CAPITAL & PARTNERSHIP ROUTING
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Route by intent, not a single generic form
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-200">
          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 bg-white"
            >
              {/* Intent Column */}
              <div className="w-full md:w-5/12 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.intent}
              </div>

              {/* Route Column */}
              <div className="w-full md:w-7/12 text-gray-600 font-light leading-relaxed text-[15.5px]">
                <Link
                  href={row.href}
                  className="hover:text-[#A8843A] hover:underline"
                >
                  {row.route}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
