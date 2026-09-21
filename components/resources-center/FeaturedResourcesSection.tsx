"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeaturedResource {
  category: string;
  title: React.ReactNode;
  description: React.ReactNode;
  updated: string;
  cta: string;
  href: string;
  isHighlighted?: boolean;
}

const featuredResources: FeaturedResource[] = [
  {
    category: "Executive Briefs",
    title: (
      <>
        Governed Business Operations <br className="hidden sm:inline" /> Intelligence: an executive primer
      </>
    ),
    description: (
      <>
        A concise briefing on connecting policy, execution, and <br className="hidden sm:inline" /> evidence across finance, workforce, and legal operations.
      </>
    ),
    updated: "Updated Aug 14, 2026",
    cta: "Read brief",
    href: "#executive-evaluation",
  },
  {
    category: "Case Studies",
    title: (
      <>
        Reducing audit prep time with evidence-<br className="hidden sm:inline" />linked workflows
      </>
    ),
    description: (
      <>
        An approved customer story on consolidating <br className="hidden sm:inline" /> compliance evidence into a single governed record.
      </>
    ),
    updated: "Updated Jul 30, 2026",
    cta: "Read case study",
    href: "#executive-evaluation",
    isHighlighted: true,
  },
  {
    category: "Documentation",
    title: (
      <>
        Getting started with governed workflow <br className="hidden sm:inline" /> configuration
      </>
    ),
    description: (
      <>
        Structured setup guidance for connecting policy, <br className="hidden sm:inline" /> authority, and jurisdiction to execution.
      </>
    ),
    updated: "Updated Sep 2, 2026",
    cta: "View documentation",
    href: "#documentation-knowledge",
  },
];

export default function FeaturedResourcesSection() {
  return (
    <section
      id="featured"
      className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-14 flex justify-center"
    >
      <div className="max-w-[1320px] w-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[1.5px] bg-[#C5A059]" />
            <span className="text-xs font-normal font-['JetBrains_Mono'] leading-4 tracking-wider text-[#C5A059] uppercase">
              03 / FEATURED
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E293B] leading-tight font-['Archivo']">
            Featured resources
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredResources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.href}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group flex flex-col bg-white rounded-xl border border-t-[3px] p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-250 ${
                resource.isHighlighted
                  ? "border-stone-200 border-t-[#C5A059]"
                  : "border-stone-200 border-t-[#0F476A]"
              }`}
            >
              <div className="w-full inline-flex flex-col justify-start items-start mb-3">
                <div className="justify-center text-[#C5A059] text-xs font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                  {resource.category}
                </div>
              </div>
              <h3 className="text-[17px] font-semibold text-[#1E293B] leading-snug mb-3 font-['Archivo']">
                {resource.title}
              </h3>
              <p className="text-[13px] text-[#475569] leading-6 flex-1 font-['Archivo']">
                {resource.description}
              </p>
              <span className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#64748B]">
                  {resource.updated}
                </span>
                <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#0F476A] group-hover:gap-2 transition-all duration-200">
                  {resource.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}