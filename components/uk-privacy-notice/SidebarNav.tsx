"use client";

import React, { useEffect, useState, useRef } from "react";

export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "controller", label: "Who We Are / Controller" },
  { id: "scope", label: "Scope & Applicability" },
  { id: "categories", label: "Data Categories & Sources" },
  { id: "purposes", label: "Purposes & Legal Bases" },
  { id: "legit", label: "Legitimate Interests" },
  { id: "special", label: "Special-Category Data" },
  { id: "recipients", label: "Recipients & Disclosures" },
  { id: "transfers", label: "International Transfers" },
  { id: "retention", label: "Retention" },
  { id: "adm", label: "Automated Decision-Making" },
  { id: "rights", label: "UK Privacy Rights" },
  { id: "requests", label: "How to Submit a Request" },
  { id: "complaints", label: "Complaints / Regulator" },
  { id: "other", label: "Children, Cookies, Security/AI" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

export default function SidebarNav() {
  const [activeId, setActiveId] = useState<string>("controller");
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            return;
          }
        }
      }
      setActiveId(navItems[0].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll active pill into view on mobile
  useEffect(() => {
    if (pillsRef.current) {
      const activePill = pillsRef.current.querySelector<HTMLElement>(`[data-id="${activeId}"]`);
      if (activePill) {
        const container = pillsRef.current;
        const pillLeft = activePill.offsetLeft;
        const pillWidth = activePill.offsetWidth;
        const containerWidth = container.offsetWidth;
        container.scrollTo({
          left: pillLeft - containerWidth / 2 + pillWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeId]);

  const scrollToId = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 110;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToId(id);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    scrollToId(e.target.value);
  };

  return (
    <>
      {/* Mobile Sticky Section Navigation */}
      <div className="lg:hidden w-full sticky top-[68px] z-20 bg-[#FBFAF7]/95 backdrop-blur-md border-b border-[#DCD6C8] py-2.5 mb-4 shadow-2xs">
        {/* Quick Jump Dropdown */}
        <div className="flex items-center justify-between gap-2 px-1 mb-2">
          <label htmlFor="mobile-section-select" className="text-[11px] font-bold text-[#A8843A] uppercase tracking-wider shrink-0">
            Jump to Section:
          </label>
          <div className="relative flex-1 max-w-[260px]">
            <select
              id="mobile-section-select"
              aria-label="Jump to privacy notice section"
              value={activeId}
              onChange={handleSelectChange}
              className="w-full bg-white border border-[#DCD6C8] rounded-[6px] px-2.5 py-1 text-[12px] font-medium text-[#16223A] focus:outline-none focus:border-[#A8843A] cursor-pointer"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Horizontal Swipeable Pills */}
        <div
          ref={pillsRef}
          className="w-full overflow-x-auto pb-1 scrollbar-none flex items-center gap-1.5 px-1 scroll-smooth"
        >
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                data-id={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`px-3 py-1.5 rounded-[5px] text-[11.5px] transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-[#F6F1E6] text-[#16223A] font-bold border-l-2 border-[#A8843A] shadow-2xs"
                    : "text-[#4B5872] hover:text-[#16223A] hover:bg-[#F6F1E6]/60 font-normal"
                }`}
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  lineHeight: "18.4px",
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Desktop Sticky Vertical Nav */}
      <nav
        aria-label="UK Privacy Notice Sections"
        className="hidden lg:block w-[230px] shrink-0 sticky top-24 pr-[18px] border-r border-[#DCD6C8]"
      >
        <ul className="flex flex-col gap-[2px]">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`block px-[10px] py-[5.5px] pb-[5.9px] rounded-[5px] text-[11.5px] transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#F6F1E6] text-[#16223A] font-bold border-l-2 border-[#A8843A]"
                      : "text-[#4B5872] hover:text-[#16223A] hover:bg-[#F6F1E6]/50 font-normal border-l-2 border-transparent"
                  }`}
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    lineHeight: "18.4px",
                  }}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
