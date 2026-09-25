"use client";

import React, { useState } from "react";

export default function PublicTrademarkRegistrySection() {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  return (
    <section className="w-full bg-white py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          PUBLIC TRADEMARK REGISTRY
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-4 sm:mb-5">
          The authoritative public status surface
        </h2>

        {/* Registry Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-5 sm:mb-6">
          {/* Search chip */}
          {isSearching ? (
            <input
              type="text"
              autoFocus
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onBlur={() => {
                if (!searchValue) setIsSearching(false);
              }}
              placeholder="Search mark / brand identifier"
              className="h-[32px] px-3.5 text-[11.5px] leading-[18.4px] font-sans text-[#16223A] bg-white border border-[#DCD6C8] rounded-[6px] focus:outline-none focus:border-[#16223A]"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsSearching(true)}
              className="h-[32px] px-3 sm:px-3.5 inline-flex items-center text-[11px] sm:text-[11.5px] leading-[18.4px] font-sans text-[#4B5872] bg-white border border-[#DCD6C8] rounded-[6px] hover:border-[#16223A]/40 transition-colors cursor-pointer"
            >
              {searchValue || "Search mark / brand identifier"}
            </button>
          )}

          {/* Type chip */}
          <button
            type="button"
            className="h-[32px] px-3 sm:px-3.5 inline-flex items-center gap-1 text-[11px] sm:text-[11.5px] leading-[18.4px] font-sans text-[#4B5872] bg-white border border-[#DCD6C8] rounded-[6px] hover:border-[#16223A]/40 transition-colors cursor-pointer"
          >
            <span>Type</span>
            <span className="text-[10px]">▾</span>
          </button>

          {/* Status chip */}
          <button
            type="button"
            className="h-[32px] px-3 sm:px-3.5 inline-flex items-center gap-1 text-[11px] sm:text-[11.5px] leading-[18.4px] font-sans text-[#4B5872] bg-white border border-[#DCD6C8] rounded-[6px] hover:border-[#16223A]/40 transition-colors cursor-pointer"
          >
            <span>Status</span>
            <span className="text-[10px]">▾</span>
          </button>

          {/* Jurisdiction chip */}
          <button
            type="button"
            className="h-[32px] px-3 sm:px-3.5 inline-flex items-center gap-1 text-[11px] sm:text-[11.5px] leading-[18.4px] font-sans text-[#4B5872] bg-white border border-[#DCD6C8] rounded-[6px] hover:border-[#16223A]/40 transition-colors cursor-pointer"
          >
            <span>Jurisdiction</span>
            <span className="text-[10px]">▾</span>
          </button>
        </div>

        {/* Registry Table (Horizontal scroll wrapper on mobile) */}
        <div className="w-full border border-[#DCD6C8] rounded-[8px] overflow-hidden bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-[#F6F1E6] border-b border-[#DCD6C8]">
                  <th className="py-2.5 px-3 sm:px-4 text-[11px] sm:text-[11.5px] font-bold text-[#4B5872] uppercase tracking-[0.035em] border-r border-[#DCD6C8] w-[28%]">
                    MARK
                  </th>
                  <th className="py-2.5 px-3 sm:px-4 text-[11px] sm:text-[11.5px] font-bold text-[#4B5872] uppercase tracking-[0.035em] border-r border-[#DCD6C8] w-[28%]">
                    TYPE
                  </th>
                  <th className="py-2.5 px-3 sm:px-4 text-[11px] sm:text-[11.5px] font-bold text-[#4B5872] uppercase tracking-[0.035em] border-r border-[#DCD6C8] w-[28%]">
                    RIGHTS HOLDER
                  </th>
                  <th className="py-2.5 px-3 sm:px-4 text-[11px] sm:text-[11.5px] font-bold text-[#4B5872] uppercase tracking-[0.035em] border-r border-[#DCD6C8] w-[8%]">
                    STATUS
                  </th>
                  <th className="py-2.5 px-3 sm:px-4 text-[11px] sm:text-[11.5px] font-bold text-[#4B5872] uppercase tracking-[0.035em] w-[8%]">
                    SYMBOL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#DCD6C8] hover:bg-[#FBFAF7]/50 transition-colors">
                  <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-[11.5px] leading-[18.4px] text-[#16223A] border-r border-[#DCD6C8] align-top">
                    [ Registry-derived mark ]
                  </td>
                  <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-[11.5px] leading-[18.4px] text-[#16223A] border-r border-[#DCD6C8] align-top">
                    Word mark / logo
                  </td>
                  <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-[11.5px] leading-[18.4px] text-[#16223A] border-r border-[#DCD6C8] align-top">
                    [ Verified entity ]
                  </td>
                  <td className="py-3.5 sm:py-4 px-3 sm:px-4 border-r border-[#DCD6C8] align-top">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#F6F1E6] border border-[#DCD6C8] text-[#4B5872]">
                      [ status ]
                    </span>
                  </td>
                  <td className="py-3.5 sm:py-4 px-3 sm:px-4 text-[11.5px] leading-[18.4px] text-[#16223A] align-top whitespace-pre-line font-normal">
                    {"[\nNone/TM/SM/\n® ]"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
