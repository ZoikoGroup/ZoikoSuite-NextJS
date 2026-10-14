"use client";

import React from "react";
import Link from "next/link";
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
              Explore available pathways and destinations across our platform
              architecture, role views, and published operational resources.
            </p>
          </div>
        </div>

        {/* Top Row: 4 Cards (2x2 on medium, 4 columns on large) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Banking */}
          <Link
            href="/banking"
            className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0] hover:border-[#A07A2E] transition-all group"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0F476A] transition-colors">
                Banking
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed pb-3 border-b border-dashed border-[#CBD5E1]">
                Core banking, payments processing and prudential subject matter
                across institutional workflows.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0F476A] text-white text-[11px] font-semibold group-hover:bg-[#0B354F] transition-colors">
                  View Banking
                  <ArrowRight className="w-3 h-3" />
                </span>
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
          </Link>

          {/* Card 2: Insurance */}
          <Link
            href="/insurance"
            className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0] hover:border-[#A07A2E] transition-all group"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0F476A] transition-colors">
                Insurance
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed pb-3 border-b border-dashed border-[#CBD5E1]">
                Policy administration and claims processing details tailored for
                modern enterprise insurance operators.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0F476A] text-white text-[11px] font-semibold group-hover:bg-[#0B354F] transition-colors">
                  View Insurance
                  <ArrowRight className="w-3 h-3" />
                </span>
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
          </Link>

          {/* Card 3: All industries */}
          <Link
            href="/organization-type"
            className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0] hover:border-[#A07A2E] transition-all group"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0F476A] transition-colors">
                All industries
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed pb-3 border-b border-dashed border-[#CBD5E1]">
                Organization patterns and structural context across every
                sector.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0F476A] text-white text-[11px] font-semibold group-hover:bg-[#0B354F] transition-colors">
                  Organization Type
                  <ArrowRight className="w-3 h-3" />
                </span>
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
          </Link>

          {/* Card 4: Industry solutions */}
          <Link
            href="/solve-critical-challenges"
            className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0] hover:border-[#A07A2E] transition-all group"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0F476A] transition-colors">
                Industry solutions
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed pb-3 border-b border-dashed border-[#CBD5E1]">
                The ten critical operating challenges, each with its own proof
                contract.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0F476A] text-white text-[11px] font-semibold group-hover:bg-[#0B354F] transition-colors">
                  Solve Critical Challenges
                  <ArrowRight className="w-3 h-3" />
                </span>
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
          </Link>
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
                <Link
                  href="/governance-platform"
                  className="text-xs font-semibold text-[#0F172A] hover:text-[#0F476A] transition-colors"
                >
                  Governance Platform →
                </Link>
                <Link
                  href="/governed-business-operations"
                  className="text-xs text-[#0F172A] hover:text-[#0F476A] transition-colors"
                >
                  Authority and segregation →
                </Link>
                <Link
                  href="/core-modules"
                  className="text-xs text-[#0F172A] hover:text-[#0F476A] transition-colors"
                >
                  Finance modules →
                </Link>
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
                <Link
                  href="/platform-foundation"
                  className="text-xs font-semibold text-[#0F172A] hover:text-[#0F476A] transition-colors"
                >
                  Platform Foundation →
                </Link>
                <Link
                  href="/data-residency"
                  className="text-xs text-[#0F172A] hover:text-[#0F476A] transition-colors"
                >
                  Data location and lifecycle →
                </Link>
                <Link
                  href="/documentation"
                  className="text-xs text-[#0F172A] hover:text-[#0F476A] transition-colors"
                >
                  APIs and events →
                </Link>
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
                <Link
                  href="/cfos"
                  className="text-xs font-semibold text-[#0F172A] hover:text-[#0F476A] transition-colors"
                >
                  CFOs →
                </Link>
                <Link
                  href="/general-counsel"
                  className="text-xs text-[#0F172A] hover:text-[#0F476A] transition-colors"
                >
                  General Counsel →
                </Link>
                <Link
                  href="/leadership-teams"
                  className="text-xs text-[#0F172A] hover:text-[#0F476A] transition-colors"
                >
                  Leadership teams →
                </Link>
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
                <Link
                  href="/solution-brief"
                  className="text-xs font-semibold text-[#0F172A] hover:text-[#0F476A] transition-colors"
                >
                  Solution Brief →
                </Link>
                <Link
                  href="/executive-resources"
                  className="text-xs text-[#0F172A] hover:text-[#0F476A] transition-colors"
                >
                  Executive Resources →
                </Link>
                <Link
                  href="/platform-tour"
                  className="text-xs text-[#0F172A] hover:text-[#0F476A] transition-colors"
                >
                  Platform Tour →
                </Link>
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
