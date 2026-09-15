"use client";

import React from "react";
import Image from "next/image";

interface CustomerDecision {
  label: string;
  description: string;
}

const CUSTOMER_DECISIONS: CustomerDecision[] = [
  {
    label: "REGIONS",
    description: "Which regions are permitted for your entities",
  },
  {
    label: "MAPPING",
    description: "Entity and jurisdiction to region mapping",
  },
  { label: "CLASSES", description: "Data classification and handling rules" },
  {
    label: "ENDPOINTS",
    description: "Integration endpoints and their locations",
  },
  { label: "RETENTION", description: "Retention and deletion requirements" },
  { label: "KEYS", description: "Key management choice, where options exist" },
  { label: "SUPPORT", description: "Support access restrictions you require" },
  { label: "RECOVERY", description: "Recovery location acceptance" },
];

export default function RegionalServiceBoundariesSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Content & Decisions List */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#A07A2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
              PATTERN 01 &mdash; REGIONAL HOSTING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15] text-[#0F172A]">
            Evaluate regional service boundaries &mdash; not only a map pin
          </h2>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            No region is named on this page until it is verified and approved
            for publication. What matters more than the pin is what crosses the
            boundary.
          </p>

          <div className="flex flex-col gap-4 pt-4 border-t border-[#DBE3E8]">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#475569] uppercase">
              CUSTOMER DECISIONS IN THIS PATTERN
            </span>

            <div className="flex flex-col gap-3">
              {CUSTOMER_DECISIONS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-baseline gap-3 text-xs sm:text-sm"
                >
                  <span className="font-mono font-bold text-[#A07A2E] w-24 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-[#475569]">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Diagram and Image Stack */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Top Service Boundary Diagram Boxes */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#475569] uppercase">
              SERVICE BOUNDARY &mdash; WHAT TO TRACE
            </span>

            <div className="grid grid-cols-5 gap-3 items-stretch">
              {/* Box 1: #E8EFF4 with #2A6386 border */}
              <div className="bg-[#E8EFF4] border border-[#2A6386] rounded-2xl p-4 flex flex-col shadow-sm">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono font-bold text-[#2A6386]">
                    ZONE 01
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                    Customer systems
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 mt-6">
                  <span className="bg-white border border-[#DBE3E8] rounded-md px-2 py-1 text-[10px] font-medium text-[#475569] shadow-2xs">
                    Users
                  </span>
                  <span className="bg-white border border-[#DBE3E8] rounded-md px-2 py-1 text-[10px] font-medium text-[#475569] shadow-2xs">
                    Source systems
                  </span>
                  <span className="bg-white border border-[#DBE3E8] rounded-md px-2 py-1 text-[10px] font-medium text-[#475569] shadow-2xs">
                    Identity
                  </span>
                </div>
              </div>

              {/* Box 2: #0F476A with #0F476A border (Text is white) */}
              <div className="bg-[#0F476A] border border-[#0F476A] rounded-2xl p-4 flex flex-col justify-between text-white shadow-md">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono font-bold text-[#D0AA55]">
                    ZONE 02
                  </span>
                  <span className="text-sm sm:text-[13px] font-bold text-white leading-snug">
                    Regional service boundary
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 mt-6">
                  <span className="bg-[#1A5478] border border-white/20 rounded-md px-2 py-1 text-[10px] font-medium text-white shadow-2xs">
                    Compute
                  </span>
                  <span className="bg-[#1A5478] border border-white/20 rounded-md px-2 py-1 text-[10px] font-medium text-white shadow-2xs">
                    Database
                  </span>
                  <span className="bg-[#1A5478] border border-white/20 rounded-md px-2 py-1 text-[10px] font-medium text-white shadow-2xs">
                    Storage
                  </span>
                  <span className="bg-[#1A5478] border border-white/20 rounded-md px-2 py-1 text-[10px] font-medium text-white shadow-2xs">
                    Search index
                  </span>
                </div>
              </div>

              {/* Box 3: White */}
              <div className="bg-white border border-[#DBE3E8] rounded-2xl p-4 flex flex-col shadow-sm">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono font-bold text-[#475569]">
                    ZONE 03
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                    Approved shared services
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 mt-6">
                  <span className="bg-[#F7F5F0] border border-[#DBE3E8] rounded-md px-2 py-1 text-[10px] font-medium text-[#475569] shadow-2xs">
                    Key service
                  </span>
                  <span className="bg-[#F7F5F0] border border-[#DBE3E8] rounded-md px-2 py-1 text-[10px] font-medium text-[#475569] shadow-2xs">
                    Monitoring
                  </span>
                  <span className="bg-[#F7F5F0] border border-[#DBE3E8] rounded-md px-2 py-1 text-[10px] font-medium text-[#475569] shadow-2xs">
                    Artifact source
                  </span>
                </div>
              </div>

              {/* Box 4: White */}
              <div className="bg-white border border-[#DBE3E8] rounded-2xl p-4 flex flex-col shadow-sm">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono font-bold text-[#475569]">
                    ZONE 04
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                    Support and operations
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 mt-6">
                  <span className="bg-[#F7F5F0] border border-[#DBE3E8] rounded-md px-2 py-1 text-[10px] font-medium text-[#475569] shadow-2xs">
                    Support tooling
                  </span>
                  <span className="bg-[#F7F5F0] border border-[#DBE3E8] rounded-md px-2 py-1 text-[10px] font-medium text-[#475569] shadow-2xs">
                    Diagnostics
                  </span>
                  <span className="bg-[#F7F5F0] border border-[#DBE3E8] rounded-md px-2 py-1 text-[10px] font-medium text-[#475569] shadow-2xs">
                    Ticketing
                  </span>
                </div>
              </div>

              {/* Box 5: White */}
              <div className="bg-white border border-[#DBE3E8] rounded-2xl p-4 flex flex-col shadow-sm">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono font-bold text-[#475569]">
                    ZONE 05
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                    Backup and recovery
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 mt-6">
                  <span className="bg-[#F7F5F0] border border-[#DBE3E8] rounded-md px-2 py-1 text-[10px] font-medium text-[#475569] shadow-2xs">
                    Backup target
                  </span>
                  <span className="bg-[#F7F5F0] border border-[#DBE3E8] rounded-md px-2 py-1 text-[10px] font-medium text-[#475569] shadow-2xs">
                    Recovery environment
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Visual Image Component */}
          <div className="w-full h-[400px] sm:h-[500px] relative rounded-2xl overflow-hidden">
            <Image
              src="/deployment/6.png"
              alt="Regional hosting boundaries analysis dashboard"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
