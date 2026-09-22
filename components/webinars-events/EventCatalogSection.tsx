import React from "react";
import Link from "next/link";

interface CatalogItem {
  type: string;
  title: string;
  meta: string;
  chip: string;
  linkText: string;
  linkHref: string;
  borderColor: string;
}

const catalogItems: CatalogItem[] = [
  {
    type: "Webinar",
    title: "Q4 policy governance office hours",
    meta: "Sep 24, 2026 · 10:00 AM PT · Virtual",
    chip: "Governance & Policy",
    linkText: "Register →",
    linkHref: "#registration",
    borderColor: "border-[#0f476a]",
  },
  {
    type: "Webinar",
    title: "Evidence architecture walkthrough",
    meta: "Oct 8, 2026 · 9:00 AM PT · Virtual",
    chip: "Evidence & Audit",
    linkText: "Register →",
    linkHref: "#registration",
    borderColor: "border-[#a07a2e]",
  },
  {
    type: "Event",
    title: "Enterprise trust roundtable",
    meta: "Registration closed",
    chip: "In-person",
    linkText: "View details →",
    linkHref: "#event-detail",
    borderColor: "border-[#0f476a]",
  },
];

export default function EventCatalogSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16" id="catalog">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <span className="font-mono text-[11px] font-normal tracking-[0.1em] text-[#a07a2e] block mb-2">
            03 / CATALOG
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[33px] font-semibold text-[#16262f] tracking-tight">
            Upcoming webinars &amp; events
          </h2>
        </div>

        {/* 3 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {catalogItems.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white border ${item.borderColor} rounded-lg p-6 flex flex-col justify-between hover:shadow-md transition-shadow`}
            >
              <div>
                <span className="font-mono text-[10.5px] text-[#a07a2e] block mb-3 font-medium">
                  {item.type}
                </span>

                <h3 className="text-[16px] font-semibold text-[#16262f] leading-snug mb-2.5">
                  {item.title}
                </h3>

                <span className="font-mono text-[11.5px] text-[#5a6d79] block mb-4">
                  {item.meta}
                </span>

                <div className="inline-block px-2.5 py-1 rounded bg-[#e8eff4] border border-[#cfdee7]">
                  <span className="font-mono text-[11px] text-[#0f476a] font-medium">
                    {item.chip}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#f0f4f7]">
                <Link
                  href={item.linkHref}
                  className="inline-flex items-center text-[14.5px] font-semibold text-[#0f476a] hover:text-[#0a324b] transition-colors"
                >
                  {item.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
