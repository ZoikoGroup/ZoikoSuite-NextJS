import React from "react";
import { ArrowRight } from "lucide-react";

interface ProductCard {
  title: string;
}

interface IssueItem {
  title: string;
  href: string;
}

const productCards: ProductCard[] = [
  { title: "Governance & Policy" },
  { title: "Evidence & Audit" },
  { title: "Identity & Access" },
  { title: "Integrations & APIs" },
];

const issuesList: IssueItem[] = [
  { title: "Access & sign-in", href: "/sign-in" },
  { title: "Setup & configuration", href: "/deployment-options" },
  { title: "Troubleshooting", href: "/sign-in" },
  { title: "Billing & account", href: "/sign-in" },
  { title: "Security & privacy", href: "/security-overview" },
];

export default function BrowseByProductOrIssue() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A07A2E]">
            03 / BROWSE
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-8">
          Browse by product or issue type
        </h2>

        {/* Top Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-8">
          {productCards.map((item, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="group bg-white border border-[#0F476A] border-t-[4px] p-6 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all min-h-[90px]"
            >
              <span className="text-[#111827] font-semibold text-base group-hover:text-[#0F476A] transition-colors">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Issue List Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="bg-white border border-[#DBE3E8] p-6 md:p-8 w-full shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#5A6D79] block mb-6">
            BY ISSUE
          </span>
          <div className="flex flex-col divide-y divide-[#E5E7EB]">
            {issuesList.map((issue, index) => (
              <a
                key={index}
                href={issue.href}
                className="group py-4 flex items-center justify-between text-[#111827] font-medium text-base hover:text-[#0F476A] cursor-pointer transition-colors first:pt-0 last:pb-0"
              >
                <span>{issue.title}</span>
                <ArrowRight className="w-4 h-4 text-[#16262F] group-hover:text-[#0F476A] group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
