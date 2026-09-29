import React from "react";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="relative w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a] mb-4">
            Choose how you want to pay
          </h2>

          {/* Toggle Pills */}
          <div className="inline-flex items-center bg-[#f1f5f9] p-1 rounded-full border border-[#e2e8f0]">
            <button
              type="button"
              className="px-5 py-1.5 rounded-full bg-[#0f172a] text-white font-medium text-sm shadow-sm transition-all"
            >
              Monthly
            </button>
            <button
              type="button"
              className="px-5 py-1.5 rounded-full text-[#64748b] font-medium text-sm hover:text-[#0f172a] transition-all"
            >
              Annual
            </button>
          </div>

          {/* Subtitle note */}
          <p className="text-xs sm:text-sm text-[#64748b] mt-4">
            Annual billing will appear here once an approved annual rate is live
            in your market &mdash; no invented &quot;save %&quot; claims.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {/* Starter Card */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 flex flex-col justify-between shadow-sm relative">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                  Starter
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed min-h-[40px]">
                  For small businesses that need a complete, controlled
                  financial foundation.
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-[#0f172a]">
                  $49
                </span>
                <span className="text-sm text-[#64748b] ml-1">/mo</span>
              </div>
              <p className="text-xs text-[#64748b] mb-6 -mt-4">
                per month, billed monthly
              </p>

              {/* Highlight badge/pill */}
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-3 py-2 text-xs font-semibold text-[#0f172a] mb-8 text-center">
                1 legal entity &bull; up to 5 full platform users
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 mb-8 text-sm text-[#334155]">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Core accounting: GL, AR, AP &amp; expenses</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Bank reconciliation &amp; financial statements</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Tax and compliance calendar</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Legal document repository</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Immutable activity/audit trail</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Standard dashboards &amp; core business controls</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>CSV import/export + standard support</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href="#"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-[#0a192f] text-white font-medium text-sm hover:bg-[#112240] transition-colors mb-4"
              >
                Start 30-day free trial
              </a>
              <div className="text-center">
                <a
                  href="#"
                  className="text-xs font-medium text-[#0f172a] hover:underline inline-flex items-center"
                >
                  View full features &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Growth Card (Recommended) */}
          <div className="bg-white rounded-2xl border-2 border-[#dfb36a] p-8 flex flex-col justify-between shadow-xl relative -mt-2 mb-2">
            {/* Recommended Tag */}
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#dfb36a] text-[#0f172a] text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase shadow-sm">
                Recommended
              </span>
            </div>

            <div>
              <div className="mb-6 mt-1">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                  Growth
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed min-h-[40px]">
                  For growing businesses that need connected finance, operations
                  and automation.
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-[#0f172a]">
                  $199
                </span>
                <span className="text-sm text-[#64748b] ml-1">/mo</span>
              </div>
              <p className="text-xs text-[#64748b] mb-6 -mt-4">
                per month, billed monthly
              </p>

              {/* Highlight badge/pill */}
              <div className="bg-[#fef9ec] border border-[#fde6b3] rounded-lg px-3 py-2 text-xs font-semibold text-[#0f172a] mb-8 text-center">
                Up to 5 legal entities &bull; up to 25 full users
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 mb-8 text-sm text-[#334155]">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Multi-entity operations &amp; custom roles</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Advanced close, approvals &amp; workflows</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Forecasting, budgets &amp; management reporting</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Tax, audit, legal &amp; compliance workspaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Workflow builder + AI standard allowance</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>
                    Standard integrations, API &amp; webhook allowance
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href="#"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-[#dfb36a] text-[#0f172a] font-medium text-sm hover:bg-[#d4a85c] transition-colors mb-4 shadow-sm"
              >
                Start 30-day free trial
              </a>
              <div className="text-center">
                <a
                  href="#"
                  className="text-xs font-medium text-[#0f172a] hover:underline inline-flex items-center"
                >
                  See why Growth fits &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 flex flex-col justify-between shadow-sm relative">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                  Enterprise
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed min-h-[40px]">
                  For complex organizations that need governed scale, security
                  and control.
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-[#0f172a]">
                  $999
                </span>
                <span className="text-sm text-[#64748b] ml-1">+/mo</span>
              </div>
              <p className="text-xs text-[#64748b] mb-6 -mt-4">
                From, subject to Price Book approval
              </p>

              {/* Highlight badge/pill */}
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-3 py-2 text-xs font-semibold text-[#0f172a] mb-8 text-center">
                Contracted entities, users, scale &amp; controls
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 mb-8 text-sm text-[#334155]">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Everything in Growth</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Group consolidation &amp; intercompany controls</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Advanced segregation of duties</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>SSO, SCIM &amp; enterprise security controls</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Custom compliance/control frameworks</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Enterprise data feeds &amp; custom integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>Contracted SLA, onboarding &amp; success coverage</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href="#"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-[#0a192f] text-white font-medium text-sm hover:bg-[#112240] transition-colors mb-4"
              >
                Talk to Sales
              </a>
              <div className="text-center">
                <a
                  href="#"
                  className="text-xs font-medium text-[#0f172a] hover:underline inline-flex items-center"
                >
                  Book an enterprise demo &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
