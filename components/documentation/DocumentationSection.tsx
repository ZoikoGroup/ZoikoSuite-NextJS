import React from "react";
import { Search } from "lucide-react";

export default function DocumentationSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col items-start justify-center">
          {/* Subtitle / Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C29B38]" />
            <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
              RESOURCES / DOCUMENTATION
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111827] leading-[1.2] tracking-tight mb-6">
            Find the documentation you need to move forward.
          </h2>
          {/* Description Paragraph */}
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            Search and browse current ZohoSuite documentation by task, product,
            or topic. Article scope, versions, features, and availability are
            shown only from approved documentation sources.
          </p>
        </div>

        {/* Right Column: Visual Graphic */}
        <div className="relative w-full aspect-[3/3] rounded-2xl overflow-hidden shadow-xl bg-slate-900 flex items-center justify-center">
          {/* Background image representing the 3D illustration */}
          <img
            src="/doc/1.png"
            alt="Documentation 3D Illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
