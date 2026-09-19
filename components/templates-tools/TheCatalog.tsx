"use client";

import React from "react";

export default function TheCatalog() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full mb-12">
          {/* Text Content */}
          <div className="flex flex-col flex-1">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1.5px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-xs font-semibold tracking-widest uppercase font-mono">
                All templates & tools
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-5xl font-semibold font-['Archivo'] leading-[49.28px]">
              The catalog
            </h2>
          </div>
          
          <div className="flex-1">
            <p className="text-[#4B5563] text-xl font-normal font-['Archivo'] leading-8 max-w-xl">
              Search, filter and sort operate over the registry. With no published<br/>records, the controls render disabled rather than returning an<br/>empty result set that looks like a failed query.
            </p>
          </div>
        </div>

        {/* Catalog Image */}
        <div className="w-full rounded-2xl shadow-[0px_30px_70px_-34px_rgba(8,34,47,0.50)] border border-gray-200 overflow-hidden">
          <img
            src="/templates-tools/div.app-1.png"
            alt="The Catalog Interface"
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>
    </section>
  );
}
