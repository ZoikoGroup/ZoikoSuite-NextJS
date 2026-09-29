"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // If using Next.js. Change to standard <a> if using standard React router

interface CapabilityItem {
  label: string;
  href: string;
}

interface CapabilityGroup {
  group: string;
  title: string;
  description: string;
  items: CapabilityItem[];
  allCount: string;
  buttonText: string;
  customHref?: string; // Optional custom link if you want to override the automatic title-based link
}

const groups: CapabilityGroup[] = [
  {
    group: "Group 01",
    title: "Core Modules",
    description: "Where business work is initiated and completed.",
    items: [
      { label: "Accounting & General Ledger", href: "/modules/accounting" },
      { label: "Accounts Payable", href: "/modules/accounts-payable" },
      { label: "Accounts Receivable", href: "/modules/accounts-receivable" },
      { label: "Treasury & Cash Position", href: "/modules/treasury" },
    ],
    allCount: "ten",
    buttonText: "show all ten modules +",
    customHref: "/core-modules", // Optional: explicitly change link here if needed
  },
  {
    group: "Group 02",
    title: "Governance Platform",
    description: "What decides whether, how, and by whom work may proceed.",
    items: [
      { label: "Governance Control Plane", href: "/governance/control-plane" },
      { label: "Policy Management", href: "/governance/policy-management" },
      { label: "Jurisdiction Intelligence", href: "/governance/jurisdiction" },
      { label: "Workflow & Approvals", href: "/governance/workflow" },
    ],
    allCount: "ten",
    buttonText: "show all ten capabilities +",
    customHref:"/governance-platform"
  },
  {
    group: "Group 03",
    title: "Platform Foundation",
    description:
      "How the platform connects, scales, deploys, and preserves evidence.",
    items: [
      { label: "Platform Architecture", href: "/foundation/architecture" },
      { label: "Multi-Entity Operations", href: "/foundation/multi-entity" },
      { label: "Multi-Jurisdiction Operations", href: "/foundation/multi-jurisdiction" },
      { label: "Data Residency", href: "/foundation/data-residency" },
    ],
    allCount: "ten",
    buttonText: "show all ten foundations +",
    customHref:"/platform-foundation"
  },
];

export default function PlatformArchitecture() {
  // Helper to slugify the title or use customHref if provided
  const getGroupLink = (group: CapabilityGroup) => {
    if (group.customHref) return group.customHref;
    return `/platform/${group.title.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Platform Architecture
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Thirty capabilities, three groups, one control model
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#0f172a] font-semibold">
                  Modules execute work. Governance controls how work proceeds.
                  The foundation connects, deploys, and evidences the platform.
                </strong>{" "}
                Click items to view details or click below to see the full set.
              </p>
            </motion.div>
          </div>

          {/* Three Column Capability Group Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {groups.map((group, index) => {
              const destinationHref = getGroupLink(group);
              return (
                <div
                  key={index}
                  className={`bg-white border rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm transition-all duration-200 ${
                    index === 0
                      ? "border-[#D0AA55] ring-1 ring-[#D0AA55]/20"
                      : "border-[#DBE3E8]"
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-medium tracking-[0.15em] text-[#c5a059] uppercase block mb-2">
                      {group.group}
                    </span>
                    <h3 className="text-xl font-bold text-[#0f172a] tracking-tight mb-2">
                      {group.title}
                    </h3>
                    <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed mb-6">
                      {group.description}
                    </p>

                    <div className="space-y-3 mb-6 border-t border-[#E2E8F0] pt-6">
                      {group.items.map((item, itemIdx) => (
                        <div key={itemIdx}>
                          <Link
                            href={item.href}
                            className="text-xs sm:text-sm font-medium text-[#0f172a] hover:text-[#c5a059] transition-colors inline-block"
                          >
                            {item.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={destinationHref}
                      className="text-xs font-semibold text-[#0F476A] hover:text-[#c5a059] transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      {group.buttonText}
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Bottom Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-lg shadow-[#0F476A]/20 w-full sm:w-auto"
            >
              Explore platform capabilities
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border border-[#DBE3E8] text-[#0F476A] font-semibold text-sm hover:bg-[#f8fafc] transition-all duration-200 shadow-sm w-full sm:w-auto"
            >
              View platform architecture
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}