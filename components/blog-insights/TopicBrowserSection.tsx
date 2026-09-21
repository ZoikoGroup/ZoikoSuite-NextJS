import React from "react";

export default function TopicBrowserSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      {/* Header Content */}
      <div className="max-w-6xl w-full flex flex-col items-start mb-10">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            02 / TOPICS
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight">
          Browse by topic
        </h2>
      </div>

      {/* Visual Graphic Container */}
      <div className="max-w-6xl w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-white flex items-center justify-center border border-slate-100">
        <img
          src="/doc/8.png"
          alt="Browse by topic illustration"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
