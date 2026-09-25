"use client";

import React, { useEffect, useMemo, useState } from "react";
import { CLAUSES, FONT_INTER } from "./data";

export default function TermsSectionsNav() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(CLAUSES[0].id);

  // Highlight the clause currently in view.
  useEffect(() => {
    const els = CLAUSES.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -60% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CLAUSES;
    return CLAUSES.filter((c) =>
      [c.title, ...c.blocks.map((b) => ("text" in b ? b.text : ""))]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <nav
      aria-label="Terms of Service sections"
      className="flex flex-col gap-[16px] pr-[20px] pb-[16px] border-b border-[#DCD6C8] lg:pb-0 lg:border-b-0 lg:border-r"
      style={{ fontFamily: FONT_INTER }}
    >
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search these Terms"
        aria-label="Search these Terms"
        className="w-full h-[32px] px-[10px] py-[8px] bg-white border border-[#DCD6C8] rounded-[5px] text-[12.5px] text-[#16223A] placeholder:text-[#757575] outline-none focus:border-[#A8843A]"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      />

      <ul className="flex flex-col gap-[2px]">
        {filtered.map((clause) => {
          const active = clause.id === activeId;
          return (
            <li key={clause.id}>
              <a
                href={`#${clause.id}`}
                aria-current={active ? "location" : undefined}
                className={`block px-[10px] py-[7px] rounded-[5px] border-l-2 text-[12.5px] leading-[20px] transition-colors ${
                  active
                    ? "bg-[#F6F1E6] border-[#A8843A] font-bold text-[#16223A]"
                    : "border-transparent font-normal text-[#4B5872] hover:bg-[#F6F1E6] hover:text-[#16223A]"
                }`}
              >
                {clause.title}
              </a>
            </li>
          );
        })}
        {filtered.length === 0 && (
          <li className="px-[10px] py-[7px] text-[12.5px] leading-[20px] text-[#8B93A8]">
            No sections match “{query}”.
          </li>
        )}
      </ul>
    </nav>
  );
}
