"use client";

import React from "react";
import { Check, AlertCircle, ShieldAlert, ArrowRight } from "lucide-react";

export default function FinancialServicesPathwaysSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                FINANCIAL-SERVICES PATHWAYS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Where to go next
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Banking and Insurance are separate destinations with their own
              claim boundaries. This page deliberately does not cover their
              subject matter.
            </p>
          </div>
        </div>

        {/* Top Row: 4 Cards (2x2 on medium, 4 columns on large) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Banking */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0]">
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-[#0F172A]">Banking</h3>
              <p className="text-xs text-[#475569] leading-relaxed pb-3 border-b border-dashed border-[#CBD5E1]">
                Core banking, payments processing and prudential subject matter
                belong to that destination and are not claimed here.
              </p>
              <p className="text-[10px] text-[#475569] font-sans">
                Route pending approval
              </p>
            </div>
            <div className="mt-6">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                style={{
                  backgroundColor: "#FBF2DF",
                  border: "1px solid #9C6B12",
                  color: "#9C6B12",
                }}
              >
                <AlertCircle className="w-3 h-3" style={{ color: "#9C6B12" }} />
                NOT YET PUBLISHED
              </div>
            </div>
          </div>

          {/* Card 2: Insurance */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0]">
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-[#0F172A]">Insurance</h3>
              <p className="text-xs text-[#475569] leading-relaxed pb-3 border-b border-dashed border-[#CBD5E1]">
                Policy administration and claims processing belong to that
                destination and are not claimed here.
              </p>
              <p className="text-[10px] text-[#475569] font-sans">
                Route pending approval
              </p>
            </div>
            <div className="mt-6">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                style={{
                  backgroundColor: "#FBF2DF",
                  border: "1px solid #9C6B12",
                  color: "#9C6B12",
                }}
              >
                <AlertCircle className="w-3 h-3" style={{ color: "#9C6B12" }} />
                NOT YET PUBLISHED
              </div>
            </div>
          </div>

          {/* Card 3: All industries */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0]">
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-[#0F172A]">
                All industries
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed pb-3 border-b border-dashed border-[#CBD5E1]">
                Organization patterns and structural context across every
                sector.
              </p>
              <div className="pt-1">
                <button className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0F476A] text-white text-[11px] font-semibold hover:bg-[#0B354F] transition-colors">
                  Organization Type
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                style={{
                  backgroundColor: "#EAF5F0",
                  border: "1px solid #1E7A5A",
                  color: "#1E7A5A",
                }}
              >
                <Check className="w-3 h-3 text-[#1E7A5A]" />
                PUBLISHED
              </div>
            </div>
          </div>

          {/* Card 4: Industry solutions */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0]">
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-[#0F172A]">
                Industry solutions
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed pb-3 border-b border-dashed border-[#CBD5E1]">
                The ten critical operating challenges, each with its own proof
                contract.
              </p>
              <div className="pt-1">
                <button className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0F476A] text-white text-[11px] font-semibold hover:bg-[#0B354F] transition-colors">
                  Solve Critical Challenges
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                style={{
                  backgroundColor: "#EAF5F0",
                  border: "1px solid #1E7A5A",
                  color: "#1E7A5A",
                }}
              >
                <Check className="w-3 h-3 text-[#1E7A5A]" />
                PUBLISHED
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Cards (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 5: Governance and controls */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0]">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                Governance and controls
              </span>
              <div className="flex flex-col gap-1.5 pt-2 pb-3 border-b border-dashed border-[#CBD5E1]">
                <span className="text-xs font-semibold text-[#0F172A]">
                  Governance Platform
                </span>
                <span className="text-xs text-[#0F172A]">
                  Authority and segregation
                </span>
                <span className="text-xs text-[#0F172A]">Finance modules</span>
              </div>
            </div>
            <div className="mt-6">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                style={{
                  backgroundColor: "#EAF5F0",
                  border: "1px solid #1E7A5A",
                  color: "#1E7A5A",
                }}
              >
                <Check className="w-3 h-3 text-[#1E7A5A]" />
                PUBLISHED
              </div>
            </div>
          </div>

          {/* Card 6: Architecture and data */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0]">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                Architecture and data
              </span>
              <div className="flex flex-col gap-1.5 pt-2 pb-3 border-b border-dashed border-[#CBD5E1]">
                <span className="text-xs font-semibold text-[#0F172A]">
                  Platform Foundation
                </span>
                <span className="text-xs text-[#0F172A]">
                  Data location and lifecycle
                </span>
                <span className="text-xs text-[#0F172A]">APIs and events</span>
              </div>
            </div>
            <div className="mt-6">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                style={{
                  backgroundColor: "#EAF5F0",
                  border: "1px solid #1E7A5A",
                  color: "#1E7A5A",
                }}
              >
                <Check className="w-3 h-3 text-[#1E7A5A]" />
                PUBLISHED
              </div>
            </div>
          </div>

          {/* Card 7: Role destinations */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0]">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                Role destinations
              </span>
              <div className="flex flex-col gap-1.5 pt-2 pb-3 border-b border-dashed border-[#CBD5E1]">
                <span className="text-xs font-semibold text-[#0F172A]">
                  CFOs
                </span>
                <span className="text-xs text-[#0F172A]">General Counsel</span>
                <span className="text-xs text-[#0F172A]">Leadership teams</span>
              </div>
            </div>
            <div className="mt-6">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                style={{
                  backgroundColor: "#EAF5F0",
                  border: "1px solid #1E7A5A",
                  color: "#1E7A5A",
                }}
              >
                <Check className="w-3 h-3 text-[#1E7A5A]" />
                PUBLISHED
              </div>
            </div>
          </div>

          {/* Card 8: Evaluation resources */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0]">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                Evaluation resources
              </span>
              <div className="flex flex-col gap-1.5 pt-2 pb-3 border-b border-dashed border-[#CBD5E1]">
                <span className="text-xs font-semibold text-[#0F172A]">
                  Solution Brief
                </span>
                <span className="text-xs text-[#0F172A]">
                  Executive Resources
                </span>
                <span className="text-xs text-[#0F172A]">Platform Tour</span>
              </div>
            </div>
            <div className="mt-6">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                style={{
                  backgroundColor: "#EAF5F0",
                  border: "1px solid #1E7A5A",
                  color: "#1E7A5A",
                }}
              >
                <Check className="w-3 h-3 text-[#1E7A5A]" />
                PUBLISHED
              </div>
            </div>
          </div>

          {/* Card 9: Financial-services customer proof (bg #F7F5F0) */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E8D6AC]"
            style={{ backgroundColor: "#F7F5F0" }}
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                Financial-services customer proof
              </span>
              <h3 className="text-lg font-bold text-[#0F172A] mt-1">
                Not published
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                No approved customer story exists for this industry. No
                anonymised composite or representative outcome is substituted.
              </p>
            </div>
            <div className="mt-6">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                style={{
                  backgroundColor: "#FBF2DF",
                  border: "1px solid #9C6B12",
                  color: "#9C6B12",
                }}
              >
                <AlertCircle className="w-3 h-3" style={{ color: "#9C6B12" }} />
                NO APPROVED RECORD
              </div>
            </div>
          </div>

          {/* Card 10: Professional boundary (bg #F7F5F0) */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E8D6AC]"
            style={{ backgroundColor: "#F7F5F0" }}
          >
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                Professional boundary
              </span>
              <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed">
                No regulated legal, tax, accounting or audit advice is provided.
                No accounting treatment, tax position, prudential outcome or
                compliance certification is determined or guaranteed.
              </p>
            </div>
            <div className="mt-6">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                style={{
                  backgroundColor: "#EFF2F4",
                  border: "1px solid #5D6B75",
                  color: "#5D6B75",
                }}
              >
                <ShieldAlert className="w-3 h-3" style={{ color: "#5D6B75" }} />
                APPLIES TO THIS PAGE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
