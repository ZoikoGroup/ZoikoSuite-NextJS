"use client";

import React from "react";
import { motion } from "framer-motion";

interface RoleCard {
  role: string;
  description: string;
  actionId: string;
  actionText: string;
}

const roleCards: RoleCard[] = [
  {
    role: "CFO / FINANCE LEADER",
    description:
      "Portfolio value, authority thresholds, approvals, cash impact, control exceptions, evidence health.",
    actionId: "ON ACT-2026-11408",
    actionText:
      "Sees full financial context. Can approve within £500,000 as escalation owner. Cannot alter the contract record.",
  },
  {
    role: "GENERAL COUNSEL",
    description:
      "Contract source, obligations, jurisdiction, delegated authority, legal review, evidence, and professional boundaries.",
    actionId: "ON ACT-2026-11408",
    actionText:
      "Resolves the governing-law conflict and confirms CO-2214. Cannot approve the payment amount.",
  },
  {
    role: "CIO / PLATFORM ADMINISTRATOR",
    description:
      "Integration, service identity, scopes, execution health, environment, security, deployment, data and event status.",
    actionId: "ON ACT-2026-11408",
    actionText:
      "Sees svc-bank-02 scopes and the retry. Cannot approve a business action without delegated authority.",
  },
  {
    role: "CHRO / WORKFORCE LEADER",
    description:
      "Payroll and HR actions, purpose-limited data, policy, approvals, evidence, workforce compliance, privacy.",
    actionId: "ON ACT-2026-11408",
    actionText:
      "No visibility — this action is outside the workforce purpose limitation. Purpose limitation is enforced, not advisory.",
  },
  {
    role: "COO",
    description:
      "Cross-functional queue, ownership, deadlines, bottlenecks, exceptions, recovery, operational outcomes.",
    actionId: "ON ACT-2026-11408",
    actionText:
      "Sees the deadline risk and escalation path. Can reassign within permission; cannot authorize.",
  },
  {
    role: "COMPLIANCE LEADER",
    description:
      "Policies, obligations, conflicts, exceptions, evidence, review dates, exports.",
    actionId: "ON ACT-2026-11408",
    actionText:
      "Sees the SoD conflict and the recurring bank-change exception. Can propose configuration change; cannot approve it alone.",
  },
  {
    role: "AUDITOR / AUDIT COMMITTEE",
    description:
      "Read-only decision records, controls, exceptions, evidence packages, integrity, and reports.",
    actionId: "ON ACT-2026-11408",
    actionText:
      "Full read access to decisions and evidence. Export excludes one restricted source and says so. No operational actions available.",
  },
  {
    role: "INTEGRATION SERVICE IDENTITY",
    description:
      "System-to-system actions within declared scopes, attributable and logged.",
    actionId: "ON ACT-2026-11408",
    actionText:
      "svc-bank-02 may initiate one payment instruction against the authorized version. It holds no decision rights.",
  },
];

export default function RoleBasedViewsSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Old Eyebrow Style (with line) */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Role-based views and workspaces
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                One action. Seven views. The facts do not change.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Each role sees the same action ID, source, context, and event
                history. Visibility and permitted decisions are what differ —
                and the platform explains why.
              </p>
            </motion.div>
          </div>

          {/* Role Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {roleCards.map((card, idx) => {
              const isSecondLast = idx === roleCards.length - 2;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.05,
                    ease: "easeOut",
                  }}
                  className={`border border-[#CFDEE7] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow ${
                    isSecondLast ? "bg-[#F7F5F0]" : "bg-white"
                  }`}
                >
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-[#0F476A] mb-3">
                      {card.role}
                    </h3>
                    <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  <div className="border-t border-[#E8EFF4] pt-4 mt-auto">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#c5a059] block mb-1.5">
                      {card.actionId}
                    </span>
                    <p className="text-[#0f172a] text-xs sm:text-sm leading-relaxed">
                      {card.actionText}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Unique Box Style with #F7F5F0 background and #CFDEE7 borders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="border border-[#CFDEE7] rounded-2xl p-8 mb-8 shadow-sm"
          >
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#0F476A] mb-3">
              Why can or can't I do this?
            </h4>
            <p className="text-[#0f172a] text-sm sm:text-base leading-relaxed">
              Every unavailable control states the rule, the missing condition,
              and the route to resolve it — for example: "Approve is
              unavailable: EVD-AP-003 requires a call-back verification record
              for creditor-account changes. Request evidence, or return for
              correction."
            </p>
          </motion.div>

          {/* Bottom Disclaimer Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 p-4 border-l-3 border-l-[#D0AA55] text-[15px] max-w-xl text-[#64748b]"
          >
            <p>
              Role selection changes presentation and permitted actions only,
              never the underlying facts. No personalization is inferred without
              consent.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
