"use client";

import React, { useEffect, useState } from "react";
import { FONT_INTER, SECTIONS, type SectionId } from "./data";

export default function CpnSectionsNav() {
  const [activeId, setActiveId] = useState<SectionId>(SECTIONS[0].id);

  // Highlight the section currently in view.
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id as SectionId);
      },
      { rootMargin: "-120px 0px -60% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="California Privacy Notice sections"
      className="flex flex-col gap-0.5 pr-5 pb-4 border-b border-[#DCD6C8] lg:border-b-0 lg:border-r lg:border-[#DCD6C8] lg:pb-0"
      style={{ fontFamily: FONT_INTER }}
    >
      <ul className="flex flex-col gap-0.5">
        {SECTIONS.map((section) => {
          const active = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={active ? "location" : undefined}
                className={`block px-2.5 pt-[5px] pb-1.5 rounded-[5px] border-l-2 text-xs leading-5 transition-colors ${
                  active
                    ? "bg-[#F6F1E6] border-[#A8843A] font-bold text-[#16223A]"
                    : "border-transparent font-normal text-[#4B5872] hover:bg-[#F6F1E6] hover:text-[#16223A]"
                }`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
