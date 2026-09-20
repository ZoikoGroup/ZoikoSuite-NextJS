"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";

interface LibraryCard {
  category: string;
  title: string;
  updated: string;
  cta: string;
}

const libraryCards: LibraryCard[] = [
  {
    category: "Knowledge Base",
    title: "Mapping approval authority to workflow steps",
    updated: "Updated Sep 9, 2026",
    cta: "Read article",
  },
  {
    category: "Templates & Tools",
    title: "Policy exception request template",
    updated: "Updated Aug 22, 2026",
    cta: "Use resource",
  },
  {
    category: "Blog & Insights",
    title: "Why scope belongs in the policy record",
    updated: "Updated Sep 5, 2026",
    cta: "Read insight",
  },
  {
    category: "Webinars & Events",
    title: "Live session: evidence architecture walkthrough",
    updated: "Sep 24, 2026 · Upcoming",
    cta: "View event",
  },
];

const filterOptions = [
  "All types",
  "Executive Briefs",
  "Documentation",
  "Knowledge Base",
  "Training Academy",
  "Webinars & Events",
  "Case Studies",
  "Blog & Insights",
  "Templates & Tools",
];

export default function ResourceLibrarySection() {
  const [activeFilter, setActiveFilter] = useState("All types");
  const [query, setQuery] = useState("");

  const visibleCards = useMemo(() => {
    const q = query.trim().toLowerCase();
    return libraryCards.filter((card) => {
      const matchesFilter =
        activeFilter === "All types" || card.category === activeFilter;
      const matchesQuery =
        q === "" ||
        `${card.title} ${card.category}`.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <section
      id="library"
      className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-14 flex justify-center"
    >
      <div className="max-w-[1320px] w-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[1.5px] bg-[#A07A2E]" />
            <span className="text-[11px] font-medium tracking-[0.2em] text-[#A07A2E] uppercase font-mono">
              05 / LIBRARY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E293B] leading-tight">
            Browse all resources
          </h2>
        </motion.div>

        {/* Search + filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-5 mb-10"
        >
          <div className="flex items-center w-full bg-[#F7F5F0]/60 rounded-full border border-stone-200/80 p-1 pl-4 focus-within:border-[#0F476A] focus-within:ring-1 focus-within:ring-[#0F476A] transition-colors">
            <Search className="w-4 h-4 text-[#64748B] shrink-0 mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by topic, resource, or question"
              suppressHydrationWarning
              className="flex-1 bg-transparent text-[13px] text-[#1E293B] placeholder:text-[#64748B] focus:outline-none"
            />
            <button
              type="button"
              suppressHydrationWarning
              className="h-10 px-6 rounded-full bg-[#0F476A] text-white text-[13px] font-semibold hover:bg-[#0d3c5a] transition-colors cursor-pointer shrink-0"
            >
              Search
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => {
              const isActive = option === activeFilter;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setActiveFilter(option)}
                  suppressHydrationWarning
                  className={`h-9 px-4 rounded-full border text-[11px] font-mono transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#0F476A] border-[#0F476A] text-white"
                      : "bg-[#F7F5F0] border-transparent text-[#0F476A] hover:border-[#0F476A]"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Cards */}
        {visibleCards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {visibleCards.map((card, index) => {
              const isHighlight = card.category === "Templates & Tools";
              return (
                <motion.a
                  key={card.title}
                  href="#library"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group flex flex-col bg-white rounded-xl border border-t-[3px] border-stone-200 ${
                    isHighlight ? "border-t-[#C5A059]" : "border-t-[#0F476A]"
                  } p-5 shadow-2xs hover:shadow-md transition-all duration-200`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#A07A2E] mb-3">
                    {card.category}
                  </span>
                  <h3 className="text-[14px] font-semibold text-[#1E293B] leading-snug mb-3 flex-1">
                    {card.title}
                  </h3>
                  <span className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
                    <span className="text-[10px] font-mono text-[#64748B]">
                      {card.updated}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#0F476A] group-hover:gap-2 transition-all duration-200">
                      {card.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </span>
                </motion.a>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-stone-300 bg-[#F7F5F0]/50 py-14 text-center">
            <p className="text-[13px] text-[#475569]">
              No resources match your search or filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveFilter("All types");
              }}
              className="mt-3 text-[12px] font-semibold text-[#0F476A] underline underline-offset-2 hover:text-[#08222F] cursor-pointer"
            >
              Clear search and filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
