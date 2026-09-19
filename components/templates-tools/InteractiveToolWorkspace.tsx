"use client";

import React from "react";

export default function InteractiveToolWorkspace() {
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
                Interactive tool workspace
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-5xl font-semibold font-['Archivo'] leading-[49.28px]">
              Input, validate, calculate, result,<br/>reset
            </h2>
          </div>
          
          <div className="flex-1">
            <p className="text-[#4B5563] text-xl font-normal font-['Archivo'] leading-8 max-w-xl">
              The execution surface for a registered interactive tool. It renders in<br/>a disabled state because no calculation version is currently<br/>approved.
            </p>
          </div>
        </div>

        {/* Workspace Image */}
        <div className="w-full rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <img
            src="/templates-tools/div.workspace.png"
            alt="Interactive Tool Workspace"
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>
    </section>
  );
}
