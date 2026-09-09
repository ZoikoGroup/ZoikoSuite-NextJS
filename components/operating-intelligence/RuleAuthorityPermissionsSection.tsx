"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RuleAuthorityPermissionsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-16 lg:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#e6e2d8]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 lg:mb-14">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                GOVERNANCE AND AUTHORITY INTELLIGENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Which rule applies, who may
              <br className="hidden sm:inline" />
              act, and what outcome is
              <br className="hidden sm:inline" />
              permitted
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Eight permitted outcomes. Visibility, preparation, review,
              approval, execution, export, administration and override are eight
              separate permissions.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP VIEW: 8-Domain Circle Image Left + AI Limits Callout  */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 8-Domain Circle Graphic (pi5.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-start"
          >
            <div className="w-full max-w-[400px] rounded-2xl overflow-hidden border border-[#e5e1d8] bg-white shadow-md">
              <Image
                src="/operating-intelligence/pi5.png"
                alt="Permitted outcomes and governance authority ring"
                width={600}
                height={600}
                className="w-full h-auto object-contain block"
              />
            </div>
          </motion.div>

          {/* Right Column: AI Limits Callout */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="rounded-r-xl border border-[#e2ddd3] border-l-4 border-l-[#0284c7] bg-white p-6 sm:p-8 shadow-sm max-w-[560px]">
              <span className="text-[11px] font-mono font-bold tracking-[0.16em] text-[#0284c7] uppercase block mb-3">
                AI LIMITS
              </span>
              <p className="text-[13px] sm:text-[13.5px] text-[#4a5e6d] leading-relaxed">
                Operating intelligence never displays &quot;AI approved&quot;, &quot;AI authorized&quot; or any
                equivalent machine authority for a material outcome. All operational correlation,
                classification, summarization and suggestion within approved scope; material authority
                remains governed separately and is recorded against a named human.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE VIEW: Complete Policy Context & Authority Terminal     */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Policy Context Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full rounded-2xl overflow-hidden border border-[#1c4055] bg-white shadow-xl flex flex-col"
          >
            {/* Dark Top Terminal Bar */}
            <div className="bg-[#0B1E2B] px-4 py-3 flex items-center justify-between text-white">
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase">
                POLICY CONTEXT · VEN-4471
              </span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
                <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
                <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
              </div>
            </div>

            {/* Inner Content Area */}
            <div className="p-4 flex flex-col space-y-4 text-[11px]">
              {/* Table Section */}
              <div>
                <span className="text-[9.5px] font-mono font-bold tracking-wider text-[#64748b] uppercase block mb-2">
                  APPLIED POLICIES WITH VERSION, SOURCE AND OUTCOME
                </span>

                <div className="overflow-x-auto border border-[#e2e8f0] rounded-lg">
                  <table className="w-full text-left border-collapse text-[11px]">
                    <thead>
                      <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[9px] font-mono text-[#64748b] uppercase whitespace-nowrap">
                        <th className="py-2 px-2.5 font-semibold">POLICY</th>
                        <th className="py-2 px-1.5 font-semibold">VERSION</th>
                        <th className="py-2 px-2 font-semibold">EFFECTIVE</th>
                        <th className="py-2 px-2 font-semibold">SOURCE</th>
                        <th className="py-2 px-2.5 font-semibold">MATCHED CONDITION</th>
                        <th className="py-2 px-2.5 font-semibold text-right">OUTCOME</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#edf2f7] text-[11px] font-sans">
                      <tr>
                        <td className="py-2 px-2.5 font-bold font-mono text-[#08222F]">EVD-AP-003</td>
                        <td className="py-2 px-1.5 font-mono text-[#64748b]">v2</td>
                        <td className="py-2 px-2 text-[10px] font-mono text-[#64748b] whitespace-nowrap">01 Apr 2024</td>
                        <td className="py-2 px-2 text-[#475569] whitespace-nowrap">AP-control standard</td>
                        <td className="py-2 px-2.5 text-[#334155]">Creditor account changed and unverified</td>
                        <td className="py-2 px-2.5 text-right whitespace-nowrap">
                          <span className="inline-block px-1.5 py-0.5 rounded border border-rose-300 text-rose-700 bg-rose-50 text-[9px] font-mono font-bold">
                            • BLOCKING
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2.5 font-bold font-mono text-[#08222F]">POL-SOD-002</td>
                        <td className="py-2 px-1.5 font-mono text-[#64748b]">v1</td>
                        <td className="py-2 px-2 text-[10px] font-mono text-[#64748b] whitespace-nowrap">01 Jan 2024</td>
                        <td className="py-2 px-2 text-[#475569] whitespace-nowrap">Internal control framework</td>
                        <td className="py-2 px-2.5 text-[#334155]">Requester is proposed approver</td>
                        <td className="py-2 px-2.5 text-right whitespace-nowrap">
                          <span className="inline-block px-1.5 py-0.5 rounded border border-rose-300 text-rose-700 bg-rose-50 text-[9px] font-mono font-bold">
                            • BLOCKING
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2.5 font-bold font-mono text-[#08222F]">POL-SPD-011</td>
                        <td className="py-2 px-1.5 font-mono text-[#64748b]">v4</td>
                        <td className="py-2 px-2 text-[10px] font-mono text-[#64748b] whitespace-nowrap">01 Apr 2024</td>
                        <td className="py-2 px-2 text-[#475569] whitespace-nowrap">Group Finance Committee</td>
                        <td className="py-2 px-2.5 text-[#334155]">Exposure above USD 100,000</td>
                        <td className="py-2 px-2.5 text-right whitespace-nowrap">
                          <span className="inline-block px-1.5 py-0.5 rounded border border-amber-300 text-amber-800 bg-amber-50 text-[9px] font-mono font-bold">
                            • APPROVAL REQUIRED
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2.5 font-bold font-mono text-[#08222F]">CD-0918</td>
                        <td className="py-2 px-1.5 font-mono text-[#64748b]">v1</td>
                        <td className="py-2 px-2 text-[10px] font-mono text-[#64748b] whitespace-nowrap">14 Feb 2024</td>
                        <td className="py-2 px-2 text-[#475569] whitespace-nowrap">Supplier contract</td>
                        <td className="py-2 px-2.5 text-[#334155]">Notice period may apply</td>
                        <td className="py-2 px-2.5 text-right whitespace-nowrap">
                          <span className="inline-block px-1.5 py-0.5 rounded border border-amber-300 text-amber-800 bg-amber-50 text-[9px] font-mono font-bold">
                            • PROFESSIONAL REVIEW
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Authority Context Section */}
              <div className="pt-2 border-t border-[#edf2f6]">
                <span className="text-[9.5px] font-mono font-bold tracking-wider text-[#64748b] uppercase block mb-2">
                  AUTHORITY CONTEXT
                </span>

                <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-3 space-y-1.5 text-[11px]">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                    <span className="w-32 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Assigned role</span>
                    <span className="font-semibold text-[#08222F]">Treasury Director</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                    <span className="w-32 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Authority source</span>
                    <span className="text-[#334155]">Board delegation schedule [3]</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                    <span className="w-32 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Scope</span>
                    <span className="text-[#334155]">Group Treasury · US/EU entities</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                    <span className="w-32 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Limit</span>
                    <span className="font-mono font-bold text-[#08222F]">USD 750,000</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                    <span className="w-32 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Effective</span>
                    <span className="font-mono text-[#334155]">to 31 Dec 2025</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                    <span className="w-32 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Delegation</span>
                    <span className="text-[#334155]">From Group CFO · cannot re-delegate further</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                    <span className="w-32 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Segregation</span>
                    <span className="inline-block px-1.5 py-0.5 rounded border border-rose-300 text-rose-700 bg-rose-50 text-[9px] font-mono font-bold">
                      • REQUESTER EXCLUDED FROM APPROVAL
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                    <span className="w-32 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Conflict</span>
                    <span className="text-[#334155]">None recorded for this operator</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                    <span className="w-32 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Escalation</span>
                    <span className="text-[#334155]">Finance Director on limit breach or deadline</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Permitted Outcomes Pills */}
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#8c9ca9] uppercase block mb-2">
              PERMITTED OUTCOMES
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                "No additional review",
                "Evidence required",
                "Review required",
                "Approval required",
                "Exception required",
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded border border-[#d6dfe6] bg-white text-[10px] font-mono text-[#475569]"
                >
                  {pill}
                </span>
              ))}
              <span className="px-2.5 py-1 rounded border border-rose-300 bg-rose-50 text-[10px] font-mono font-bold text-rose-700">
                Blocked
              </span>
              <span className="px-2.5 py-1 rounded border border-[#d6dfe6] bg-white text-[10px] font-mono text-[#475569]">
                Escalation
              </span>
              <span className="px-2.5 py-1 rounded border border-amber-300 bg-amber-50 text-[10px] font-mono font-bold text-amber-800">
                Professional review required
              </span>
            </div>
          </div>

          {/* Separation of Duties Pills */}
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#8c9ca9] uppercase block mb-2">
              SEPARATION OF DUTIES — EIGHT DISTINCT PERMISSIONS
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                "Visibility",
                "Preparation",
                "Review",
                "Approval",
                "Execution",
                "Export",
                "Administration",
                "Override",
              ].map((perm, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded border border-blue-200 bg-blue-50/70 text-[10.5px] font-mono font-medium text-blue-800"
                >
                  {perm}
                </span>
              ))}
            </div>
          </div>

          {/* AI Boundary Callout Card */}
          <div className="rounded-r-xl border border-[#e2ddd3] border-l-4 border-l-[#0284c7] bg-white p-5 shadow-xs">
            <span className="text-[10.5px] font-mono font-bold tracking-[0.16em] text-[#0284c7] uppercase block mb-1.5">
              AI BOUNDARY
            </span>
            <p className="text-xs text-[#4a5e6d] leading-relaxed">
              Operating intelligence never displays &quot;AI approved&quot;, &quot;AI authorized&quot; or any
              equivalent machine authority for a material outcome. AI can support extraction,
              classification, summarization and suggestion within approved scope; material authority
              remains governed separately and is recorded against a named human.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <Link
              href="#governance"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#08222F] text-white font-semibold text-xs hover:bg-[#12394f] transition-all shadow-sm"
            >
              <span>Explore the governance control plans</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
