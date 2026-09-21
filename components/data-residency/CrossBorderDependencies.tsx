"use client";

import React from "react";
import Image from "next/image";

export default function CrossBorderDependencies() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                CROSS-BORDER DEPENDENCIES, KEY CUSTODY AND RECOVERY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Three things people assume are settled by a region setting
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              None of them is. Each is a separate control with its own
              availability and its own consequences.
            </p>
          </div>
        </div>

        {/* Two Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Key Custody */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E5E7EB] border-l-3 border-l-[#DBE3E8] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#5A6D79] uppercase block mb-4">
                KEY CUSTODY
              </span>
              <ul className="space-y-2 mb-6 text-[13px] text-[#4B5563]">
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>
                    <strong>Provider-managed:</strong> available across
                    deployments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>
                    <strong>Customer-managed:</strong> eligibility by deployment
                    and region
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>
                    Key location is a separate question from data location
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>
                    Revocation has operational consequences for service
                    availability
                  </span>
                </li>
              </ul>
              <div className="border-t border-dashed border-[#6B2626] pt-4 mb-6">
                <p className="text-[13px] text-[#6B2626] leading-relaxed">
                  <strong>Revocation is not a soft control.</strong> Withdrawing
                  key access renders the environment inoperable until restored,
                  and that consequence is discussed during assessment rather
                  than discovered later.
                </p>
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-[#F4EFF7] w-full border border-[#C9B0DC]">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#5B3B7A]">
                  AVAILABILITY STATUS: REQUIRED
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Cross-Border Dependencies */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#DBE3E8] border-l-3 border-l-[#A07A2E] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#6A5620] uppercase block mb-4">
                CROSS-BORDER DEPENDENCIES
              </span>
              <ul className="space-y-2 mb-6 text-[13px] text-[#4B5563]">
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>Subprocessors with their processing locations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>Telemetry collection paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>Support access origin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111827] font-bold">•</span>
                  <span>Optional AI provider paths where enabled</span>
                </li>
              </ul>
              <div className="border-t border-dashed border-[#E5E7EB] pt-4 mb-6">
                <p className="text-[13px] text-[#4B5563] leading-relaxed">
                  Transfer governance — whether a movement is permitted and on
                  what basis — belongs to Privacy Architecture. This page covers
                  where things physically are.
                </p>
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 w-full rounded-md bg-[#F6EDD9] border border-[#C9B07A]">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#6A5620]">
                  IN VALIDATION
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Display Section */}
        <div className="w-full">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/data/4.png"
              alt="Cross-Border Dependencies and Key Custody Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
