"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="relative w-full bg-[#F8F9FA] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8]">
      <div className="max-w-6xl mx-auto">
        {/* Toggle Bar Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#08222F] tracking-tight">
              Choose how you want to pay
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {billingCycle === "monthly"
                ? "Billed monthly · USD · plus applicable sales tax"
                : "Billed annually · USD · plus applicable sales tax"}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                billingCycle === "annual"
                  ? "bg-[#08222F] text-white shadow-xs"
                  : "bg-white border border-slate-300 text-slate-700 hover:border-slate-400"
              }`}
            >
              Annually
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#08222F] text-white shadow-xs"
                  : "bg-white border border-slate-300 text-slate-700 hover:border-slate-400"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Starter */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              {/* Header */}
              <div className="mb-4">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#B88E3E] mb-2">
                  STARTER
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed min-h-[36px]">
                  A complete, controlled foundation for running one business.
                </p>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-[44px] font-extrabold text-[#08222F] tracking-tight leading-none">
                    {billingCycle === "annual" ? "$39" : "$49"}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                  {billingCycle === "annual"
                    ? "per month · billed annually"
                    : "per month · billed monthly"}
                </p>
              </div>

              {/* Scope Badge */}
              <div className="bg-[#F4F5F7] border border-slate-100 rounded-lg py-2.5 px-3 text-center mb-6">
                <span className="text-xs font-semibold text-slate-800">
                  1 legal entity &bull; up to 5 full users
                </span>
              </div>

              {/* Feature Bullets */}
              <ul className="space-y-3 mb-8">
                {[
                  "Core accounting: GL, AR, AP & expenses",
                  "Bank reconciliation & financial statements",
                  "Tax and compliance calendar",
                  "Legal document repository",
                  "Immutable activity/audit trail",
                  "Standard dashboards & core business controls",
                  "CSV import/export + standard support",
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#0284C7] stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-[13px] text-slate-700 leading-snug">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Button & Link */}
            <div>
              <Link
                href="/sign-in"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-lg bg-[#08222F] hover:bg-[#0E3547] text-white font-semibold text-xs sm:text-sm transition-colors mb-3 shadow-xs"
              >
                Start 30-day free trial
              </Link>
              <div className="text-center">
                <Link
                  href="#features"
                  className="text-xs font-semibold text-[#08222F] hover:text-[#C59A41] transition-colors"
                >
                  View full features
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Growth (Recommended) */}
          <div className="bg-white rounded-2xl border-2 border-[#D4A853] p-6 sm:p-8 flex flex-col justify-between shadow-md relative">
            {/* Top Recommended Tag */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#D4A853] text-[#08222F] text-[10px] font-bold tracking-wider px-3.5 py-1 rounded-full uppercase shadow-xs">
                RECOMMENDED
              </span>
            </div>

            <div>
              {/* Header */}
              <div className="mb-4">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#B88E3E] mb-2">
                  GROWTH
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed min-h-[36px]">
                  Connected finance, operations, automation and control for a growing organization.
                </p>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-[44px] font-extrabold text-[#08222F] tracking-tight leading-none">
                    {billingCycle === "annual" ? "$159" : "$199"}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                  {billingCycle === "annual"
                    ? "per month · billed annually"
                    : "per month · billed monthly"}
                </p>
              </div>

              {/* Scope Badge */}
              <div className="bg-[#F4F5F7] border border-slate-100 rounded-lg py-2.5 px-3 text-center mb-6">
                <span className="text-xs font-semibold text-slate-800">
                  Up to 5 legal entities &bull; up to 25 full users
                </span>
              </div>

              {/* Feature Bullets */}
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Starter",
                  "Multi-entity operations & custom roles",
                  "Advanced close, approvals & workflows",
                  "Forecasting, budgets & management reporting",
                  "Tax, audit, legal & compliance workspaces",
                  "Workflow builder + AI standard allowance",
                  "Standard integrations, API & webhook allowance",
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#0284C7] stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-[13px] text-slate-700 leading-snug">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Button & Link */}
            <div>
              <Link
                href="/sign-in"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-lg bg-[#D4A853] hover:bg-[#c29841] text-[#08222F] font-bold text-xs sm:text-sm transition-colors mb-3 shadow-sm"
              >
                Start 30-day free trial
              </Link>
              <div className="text-center">
                <Link
                  href="#why-growth"
                  className="text-xs font-semibold text-[#08222F] hover:text-[#C59A41] transition-colors"
                >
                  See why Growth fits
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Enterprise */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              {/* Header */}
              <div className="mb-4">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#B88E3E] mb-2">
                  ENTERPRISE
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed min-h-[36px]">
                  Governed scale for complex organizations, multi-entity groups and advanced requirements.
                </p>
              </div>

              {/* Price */}
              <div className="mb-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                  FROM
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-[44px] font-extrabold text-[#08222F] tracking-tight leading-none">
                    $999
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                  per month · contracted scope
                </p>
              </div>

              {/* Scope Badge */}
              <div className="bg-[#F4F5F7] border border-slate-100 rounded-lg py-2.5 px-3 text-center mb-6">
                <span className="text-xs font-semibold text-slate-800">
                  Contracted scale
                </span>
              </div>

              {/* Feature Bullets */}
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Growth",
                  "Group consolidation & intercompany controls",
                  "Advanced segregation of duties",
                  "SSO, SCIM & enterprise security controls",
                  "Custom compliance/control frameworks",
                  "Enterprise data feeds & custom integrations",
                  "Contracted SLA, onboarding & success coverage",
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#0284C7] stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-[13px] text-slate-700 leading-snug">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Button & Link */}
            <div>
              <Link
                href="/book-demo"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-lg bg-white border border-[#08222F] hover:bg-slate-50 text-[#08222F] font-semibold text-xs sm:text-sm transition-colors mb-3"
              >
                Talk to Sales
              </Link>
              <div className="text-center">
                <Link
                  href="/book-demo"
                  className="text-xs font-semibold text-[#08222F] hover:text-[#C59A41] transition-colors"
                >
                  Book an enterprise demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Footer Note */}
        <p className="text-xs text-slate-500 max-w-2xl mx-auto text-center mt-10 leading-relaxed font-normal">
          30 days. No charge during the trial. Paid service begins only after explicit plan and billing acceptance. Prices are shown plus applicable sales tax and may vary by market.
        </p>
      </div>
    </section>
  );
}
