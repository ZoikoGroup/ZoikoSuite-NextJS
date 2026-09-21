import React from "react";

export default function RoleBrowserSection() {
  const roles = [
    "Executive Leadership",
    "Technology / IT",
    "Security / Risk",
    "Legal / Compliance",
    "Finance / Procurement",
    "Operations / Transformation",
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      {/* Header Content */}
      <div className="max-w-6xl w-full flex flex-col items-start mb-12">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            05 / BY ROLE
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-8">
          Browse by leadership role
        </h2>

        {/* Filter Pills / Tags */}
        <div className="flex flex-wrap gap-3">
          {roles.map((role, index) => (
            <a
              key={index}
              href="#"
              className={`px-4 py-1.5 rounded-full border text-xs font-medium 
                transition-colors bg-[#E8EFF4] border-[#CFDEE7] text-[#0F476A]`}
            >
              {role}
            </a>
          ))}
        </div>
      </div>

      {/* Visual Graphic Container */}
      <div className="max-w-6xl w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-xl bg-[#F7F5F0] flex items-center justify-center border border-slate-100">
        <img
          src="/doc/4.png"
          alt="Leadership Role Browser Illustration"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
