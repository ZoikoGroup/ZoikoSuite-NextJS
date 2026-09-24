"use client";
import React, { useState } from "react";

export default function NewsroomHeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search action
  };

  return (
    <section className="relative w-full bg-gradient-to-r from-[#0A1D34] to-[#0E2843] py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-sans text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtitle (Eye tag size: xs) */}
        <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
          NEWSROOM
        </span>

        {/* Main Headline (32px for lg devices) */}
        <h1 className="text-3xl md:text-[42px] lg:text-[48px] font-bold text-white leading-tight tracking-tight mb-6">
          News and updates from ZoikoSuite.
        </h1>

        {/* Description (16.5px for lg devices) */}
        <p className="text-gray-300 font-light leading-relaxed text-[16.5px] max-w-2xl mb-10">
          Verified announcements on the platform, company, trust architecture,
          partnerships, research, and enterprise operations — published with
          clear dates, sources, and update history.
        </p>

        {/* Search Bar Form */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search announcements, topics, products, or dates"
            style={{ borderRadius: "8px" }}
            className="w-full px-4 py-3.5 bg-[#FFFFFF0F] border border-[#FFFFFF33] text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#A8843A]"
          />
          <button
            type="submit"
            style={{ borderRadius: "8px" }}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#C8A24A] hover:bg-[#967332] text-[#0A1D34] font-semibold text-sm tracking-wide transition-colors shrink-0"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
