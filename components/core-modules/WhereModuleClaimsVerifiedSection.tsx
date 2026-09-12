"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhereModuleClaimsVerifiedSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                TRUST AND PROCUREMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Where module claims are
              <br />
              actually verified
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              A high-fidelity mockup is not evidence that a capability is live. These are the routes where availability, controls and evidence get checked.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid: 3 columns x 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Module availability */}
          <div className="rounded-2xl border border-[#e2ddd3] bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#d97706] uppercase block mb-2">
                Module availability
              </span>
              <h3 className="text-[14px] font-bold text-[#08222F] mb-2 leading-snug">
                Registry governed, not inferred
              </h3>
              <p className="text-xs text-[#566573] leading-relaxed mb-4">
                Public route availability language, claim review and review date sourced from the Module Publication Registry. A blocked or pending record cannot render a public capability claim.
              </p>
            </div>
          </div>

          {/* Card 2: Governance Platform */}
          <div className="rounded-2xl border border-[#e2ddd3] bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#d97706] uppercase block mb-2">
                Governance Platform
              </span>
              <h3 className="text-[14px] font-bold text-[#08222F] mb-2 leading-snug">
                Shared controls across modules
              </h3>
              <p className="text-xs text-[#566573] leading-relaxed mb-4">
                Policy, jurisdiction intelligence, approvals, delegated authority segregation, evidence, audit readiness, governed AI and analytics.
              </p>
            </div>
            <div className="space-y-1.5 pt-3 border-t border-[#f1f5f9] text-xs">
              <Link href="/governance/control-plane" className="block text-[#08222F] font-semibold hover:text-[#c5a059] transition-colors">
                Governance Control plane
              </Link>
              <Link href="/governance/lifecycle" className="block text-[#08222F] font-semibold hover:text-[#c5a059] transition-colors">
                Governed lifecycle
              </Link>
            </div>
          </div>

          {/* Card 3: Platform Foundation */}
          <div className="rounded-2xl border border-[#e2ddd3] bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#d97706] uppercase block mb-2">
                Platform Foundation
              </span>
              <h3 className="text-[14px] font-bold text-[#08222F] mb-2 leading-snug">
                Architecture and integration
              </h3>
              <p className="text-xs text-[#566573] leading-relaxed mb-4">
                Multi-entity and multi-jurisdiction scope, residency, APIs and integrations, migration and Shadow Mode, evidence and event architecture.
              </p>
            </div>
            <div className="space-y-1.5 pt-3 border-t border-[#f1f5f9] text-xs">
              <Link href="/platform/deployment" className="block text-[#08222F] font-semibold hover:text-[#c5a059] transition-colors">
                Deployment options
              </Link>
              <Link href="/platform/integrations" className="block text-[#08222F] font-semibold hover:text-[#c5a059] transition-colors">
                Integrations architecture
              </Link>
            </div>
          </div>

          {/* Card 4: Security and privacy */}
          <div className="rounded-2xl border border-[#e2ddd3] bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#d97706] uppercase block mb-3">
                Security and privacy
              </span>
              <div className="space-y-2 text-xs">
                <Link href="/trust/security-overview" className="block text-[#08222F] font-semibold hover:text-[#c5a059] transition-colors">
                  Security overview
                </Link>
                <Link href="/trust/data-processing-agreement" className="block text-[#08222F] font-semibold hover:text-[#c5a059] transition-colors">
                  Data Processing Agreement (DPA preview)
                </Link>
                <Link href="/trust/subprocessors" className="block text-[#08222F] font-semibold hover:text-[#c5a059] transition-colors">
                  Subprocessors
                </Link>
                <Link href="/trust/responsible-ai" className="block text-[#08222F] font-semibold hover:text-[#c5a059] transition-colors">
                  Responsible AI
                </Link>
                <Link href="/trust/accessibility" className="block text-[#08222F] font-semibold hover:text-[#c5a059] transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5: Evidence and assurance */}
          <div className="rounded-2xl border border-[#e2ddd3] bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#d97706] uppercase block mb-3">
                Evidence and assurance
              </span>
              <div className="space-y-2 text-xs">
                <Link href="/trust/evidence-architecture" className="block text-[#08222F] font-semibold hover:text-[#c5a059] transition-colors">
                  Evidence architecture
                </Link>
                <Link href="/platform/cross-module-manifest" className="block text-[#08222F] font-semibold hover:text-[#c5a059] transition-colors">
                  Cross-module manifest
                </Link>
                <Link href="/trust/evidence-health-model" className="block text-[#08222F] font-semibold hover:text-[#c5a059] transition-colors">
                  Evidence health model
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6: Professional boundary (Warm Amber Callout Box) */}
          <div className="rounded-2xl border border-[#eedfc0] bg-[#fdfaf2] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#92400e] uppercase block mb-2">
                Professional boundary
              </span>
              <p className="text-xs text-[#785929] leading-relaxed">
                No module provides legal, tax, accounting, audit, investment or employment advice. Qualified professionals remain responsible for regulated judgment and use, and no certification mark is displayed until independently verified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
