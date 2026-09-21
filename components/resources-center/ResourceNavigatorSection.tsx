"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ResourceCard {
  number: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

const resourceCards: ResourceCard[] = [
  {
    number: "01",
    title: "Executive Briefs",
    description:
      "Concise decision-oriented materials for evaluation and leadership review.",
    cta: "Explore Executive Briefs",
    href: "#executive-evaluation",
  },
  {
    number: "02",
    title: "Documentation",
    description:
      "Structured product and implementation documentation published by the owning team.",
    cta: "Open Documentation",
    href: "#documentation-knowledge",
  },
  {
    number: "03",
    title: "Knowledge Base",
    description:
      "Practical articles, how-to guidance, and problem-solving resources where published.",
    cta: "Browse Knowledge Base",
    href: "#documentation-knowledge",
  },
  {
    number: "04",
    title: "Training Academy",
    description:
      "Learning and enablement resources provided through the Training Academy.",
    cta: "Visit Training Academy",
    href: "#learning-events",
  },
  {
    number: "05",
    title: "Webinars & Events",
    description: "Live or on-demand event resources where published.",
    cta: "Explore Webinars & Events",
    href: "#learning-events",
  },
  {
    number: "06",
    title: "Case Studies",
    description:
      "Customer or implementation stories that have been approved for publication.",
    cta: "View Case Studies",
    href: "#executive-evaluation",
  },
  {
    number: "07",
    title: "Blog & Insights",
    description: "Published perspectives, updates, and insights.",
    cta: "Read Blog & Insights",
    href: "#insights-tools",
  },
  {
    number: "08",
    title: "Templates & Tools",
    description: "Reusable resources and tools approved for public use.",
    cta: "Browse Templates & Tools",
    href: "#insights-tools",
  },
  {
    number: "09",
    title: "Support Center",
    description: "Help and support pathways for visitors who need assistance.",
    cta: "Go to Support Center",
    href: "#faq",
  },
];

export default function ResourceNavigatorSection() {
  return (
    <section
      id="navigator"
      className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-14 flex justify-center"
    >
      <div className="max-w-[1320px] w-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-10 sm:mb-14 max-w-[720px]"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[1.5px] bg-[#C5A059]" />
            <span className="text-[11px] font-normal tracking-[0.2em] text-[#C5A059] uppercase font-mono">
              02 / NAVIGATOR
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E293B] leading-tight mb-4 font-['Archivo']">
            Explore every Resource path
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-['Archivo'] leading-7">
            Choose the destination that best matches the kind of guidance you need. <br />
            Each destination remains the canonical owner of its content.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resourceCards.map((card, index) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={card.href}
                className="group flex flex-col h-full bg-white rounded-xl border-l-[3px] border-y border-r border-y-stone-200 border-r-stone-200 border-l-[#D0AA55] p-5 sm:p-6 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[11px] font-mono text-[#D0AA55] tracking-wider">
                    {card.number}
                  </span>
                  <h3 className="text-[15px] font-semibold text-[#1E293B]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[13px] text-[#475569] leading-6 flex-1">
                  {card.description}
                </p>
                <span className="mt-4 pt-3 border-t border-stone-100 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0F476A] group-hover:gap-2.5 transition-all duration-200">
                  {card.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}