"use client";

import React from "react";
import Image from "next/image";

interface RecoveryCard {
  title: string;
  description: string;
  isWarning?: boolean;
}

const desktopRecoveryCards: RecoveryCard[] = [
  {
    title: "Rollback",
    description:
      "Direct restoration to the immediate prior state in an approved, verified sequence.",
  },
  {
    title: "Restore",
    description:
      "Reconstruct data to a dependable prior snapshot with audit integrity.",
  },
  {
    title: "Failover",
    description:
      "Direct execution to alternate path under an operational exception.",
  },
  {
    title: "Re-index/reconcile",
    description:
      "Reconcile duplicate/altered transactions against the authoritative journal.",
  },
  {
    title: "Irreversible operation",
    description:
      "An approved, documented step whose prior state cannot be restored directly. Strict sign-off and evidence trail required.",
    isWarning: true,
  },
];

const desktopAuditItems = [
  {
    num: "1",
    label: "Direct automated",
    detail: "Rollback available for Phase 1 and Phase 2 data sets",
  },
  {
    num: "2",
    label: "Snapshots taken",
    detail: "Hourly snapshot frequency during cutover sequence",
  },
  {
    num: "3",
    label: "Exception routes",
    detail: "Documented manual failover procedures verified",
  },
  {
    num: "4",
    label: "Idempotent feeds",
    detail: "Tested for duplicate and delayed ingestion scenarios",
  },
  {
    num: "5",
    label: "Irreversible",
    detail: "Account closure actions cannot be automatically restored",
  },
];

const desktopLockedScopeBullets = [
  {
    title: "Post-market reconciliation",
    detail:
      "Early detection and reconciliation of the legacy system reconciliation, including voids and refunds previously unrecorded.",
  },
  {
    title: "Retention obligations",
    detail:
      "Audit trail and SLA retention requirements are satisfied to the required standard.",
  },
  {
    title: "Evidence audit trails",
    detail: "Historical evidence remains within data warehouse.",
  },
  {
    title: "Supervised ledger approval",
    detail:
      "reconciliation is approved, authority with final owners runs to closure.",
  },
];

const mobileMechanismCards = [
  {
    title: "Rollback",
    description: "Return software or configuration state, where technically supported.",
  },
  {
    title: "Restore",
    description: "Recover state in a given system from an approved backup or snapshot.",
  },
  {
    title: "Fallback",
    description: "Revert the runtime path to the prior environment or system.",
  },
  {
    title: "Business reversal",
    description: "Provide adjustments to ledger when legally and operationally possible.",
  },
  {
    title: "Compensating action",
    description: "An approved corrective action where direct reversal is impossible. Some steps are genuinely forward-only.",
    isHighlight: true,
  },
];

const mobileRunbookRows = [
  {
    step: "Enable governed workflow for scope",
    dep: "Readiness gates",
    reversibility: "★ REVERSIBLE",
    revType: "green",
    recovery: "Rollback configuration",
    techAuth: "Platform engineer",
    bizAuth: "Maya Chen",
  },
  {
    step: "Redirect approval routing",
    dep: "Step 1",
    reversibility: "★ REVERSIBLE",
    revType: "green",
    recovery: "Fallback to prior route",
    techAuth: "Platform engineer",
    bizAuth: "Maya Chen",
  },
  {
    step: "Begin recording decision evidence",
    dep: "Step 2",
    reversibility: "▼ FORWARD-ONLY",
    revType: "amber",
    recovery: "Compensating action — records already created are retained",
    techAuth: "Platform engineer",
    bizAuth: "Compliance",
    highlighted: true,
  },
  {
    step: "Notify affected approvers",
    dep: "Step 2",
    reversibility: "■ NOT APPLICABLE",
    revType: "gray",
    recovery: "Follow-up communication",
    techAuth: "Operations",
    bizAuth: "Maya Chen",
  },
  {
    step: "Retire legacy approval path",
    dep: "Stabilization exit",
    reversibility: "■ REQUIRES REVIEW",
    revType: "rose",
    recovery: "Unknown until consumer discovery completes",
    techAuth: "Platform engineer",
    bizAuth: "Architecture board",
  },
];

const stabilizationItems = [
  {
    num: "1",
    label: "Hypercare period",
    detail: "heightened support, no fixed duration published",
  },
  {
    num: "2",
    label: "Emergent issues",
    detail: "logged, dispositioned, and closed with evidence",
  },
  {
    num: "3",
    label: "Exception reviews",
    detail: "every open exception has an owner and expiry",
  },
  {
    num: "4",
    label: "Handover evidence",
    detail: "runbooks, ownership and escalation transferred",
  },
  {
    num: "5",
    label: "Exit decision",
    detail: "recorded when criteria are met, not when a date arrives",
  },
];

const legacyExitBullets = [
  {
    title: "Consumer discovery",
    detail: "every downstream consumer of the legacy system is identified, including reports and interfaces nobody remembered",
  },
  {
    title: "Retention obligations",
    detail: "legal, tax and audit retention requirements are satisfied by the retained records",
  },
  {
    title: "Evidence continuity",
    detail: "historical evidence remains retrievable after retirement",
  },
  {
    title: "Decommission approval",
    detail: "recorded by a named authority with the discovery results attached",
  },
];

export default function ReversibilityStatedTruthfullySection() {
  return (
    <section className="bg-[#FFFFFF] py-14 sm:py-20 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (hidden lg:block) - 100% UNTOUCHED DESKTOP DESIGN         */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59A41] mb-2">
                — REVERSIBLE OPERATIONS · RECOVERY AND CANCELLATION
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1E28] tracking-tight">
                Reversibility is stated truthfully,
                <br /> including when it is unknown
              </h2>
            </div>
            <p className="text-sm text-[#5A6D77] max-w-md leading-relaxed pt-6">
              Five recovery mechanisms, each meaning something different. A step
              that cannot be directly reversed is labelled as such rather than
              described as safe.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-12">
            {desktopRecoveryCards.map((card, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-5 border transition-all ${
                  card.isWarning
                    ? "bg-[#FAF4E8] border-[#DEC28A] text-[#715012] shadow-sm"
                    : "bg-white border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1]"
                }`}
              >
                <h3
                  className={`text-sm font-semibold mb-2 ${
                    card.isWarning ? "text-[#6E4D0C]" : "text-[#0B1E28]"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    card.isWarning ? "text-[#7B5B1E]" : "text-[#5A6D77]"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-5 relative rounded-2xl overflow-hidden border border-[#0E2E3E] bg-[#05141E] shadow-xl aspect-square flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <Image
                  src="/migration-shadow-mode/msm6.png"
                  alt="Reversibility Architecture Platforms"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="col-span-7 flex flex-col justify-between">
              <div className="mb-8">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-4">
                  RECOVERY MECHANISM AUDIT · ASSESSMENT SUMMARY
                </p>
                <div className="space-y-3">
                  {desktopAuditItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 text-xs text-[#2A3D47]"
                    >
                      <span className="w-5 h-5 rounded-full border border-amber-500/40 text-amber-700 bg-amber-50 flex items-center justify-center text-[11px] font-mono shrink-0 font-semibold mt-0.5">
                        {item.num}
                      </span>
                      <div>
                        <span className="font-semibold text-[#0B1E28]">
                          {item.label}
                        </span>{" "}
                        — <span className="text-[#5A6D77]">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAF8F5] border border-[#E2DDD5] rounded-xl p-6 shadow-sm">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  LOCKED SCOPE NOTE
                </p>
                <p className="text-xs text-[#3A4D57] leading-relaxed mb-4">
                  One reconciliation per line item: Once the shadow drift reaches
                  the gap metric, that is calculated directly for each line item
                  individually:
                </p>
                <ul className="space-y-2.5 text-xs">
                  {desktopLockedScopeBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#5A6D77]">
                      <span className="text-[#C59A41] font-bold leading-none mt-1">•</span>
                      <span>
                        <strong className="text-[#0B1E28] font-medium">
                          {bullet.title}
                        </strong>{" "}
                        — {bullet.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (block lg:hidden) - EXACT MATCH TO USER'S MOBILE SCREENSHOT */}
        {/* ========================================================================= */}
        <div className="block lg:hidden flex flex-col text-left">
          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#c5a059]" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              CONTROLLED ACTIVATION, RECOVERY AND LEGACY EXIT
            </span>
          </div>

          {/* Mobile Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08222F] leading-tight mb-3">
            Reversibility is stated truthfully, including when it is unknown
          </h2>

          {/* Mobile Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
            Five recovery mechanisms, each meaning something different. A step that cannot be directly reversed is labelled as such rather than described as safe.
          </p>

          {/* 5 Stacked Mechanism Cards */}
          <div className="space-y-3 mb-8">
            {mobileMechanismCards.map((card, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-4 border transition-all ${
                  card.isHighlight
                    ? "bg-[#FEF9EE] border-[#DEC28A] text-amber-950 shadow-sm"
                    : "bg-white border-[#E2DDD5] shadow-sm"
                }`}
              >
                <h4
                  className={`text-xs font-bold mb-1.5 ${
                    card.isHighlight ? "text-[#78540E]" : "text-[#0B1E28]"
                  }`}
                >
                  {card.title}
                </h4>
                <p
                  className={`text-[11px] leading-relaxed ${
                    card.isHighlight ? "text-amber-900/90" : "text-slate-600"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Activation Runbook Card */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-white text-[#08222F] mb-8">
            {/* Top Bar */}
            <div className="bg-[#08222F] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-300">
                ACTIVATION RUNBOOK &middot; WAVE 1 &middot; SYNTHETIC FIXTURE
              </div>
              <div className="text-slate-500 font-mono tracking-widest text-xs">
                •••
              </div>
            </div>

            {/* Sub-banner */}
            <div className="px-4 py-2 bg-[#F6F4EE] border-b border-[#E8E2D6] text-[9px] font-mono text-slate-600 font-semibold tracking-wide">
              EACH STEP WITH ITS DEPENDENCY, RECOVERY MECHANISM AND AUTHORITY
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px] border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-[#EAE4DA] text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-2 px-3">STEP</th>
                    <th className="py-2 px-3">DEPENDENCY</th>
                    <th className="py-2 px-3">REVERSIBILITY</th>
                    <th className="py-2 px-3">RECOVERY MECHANISM</th>
                    <th className="py-2 px-3">TECHNICAL AUTHORITY</th>
                    <th className="py-2 px-3 text-right">BUSINESS AUTHORITY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4DA] text-[10px]">
                  {mobileRunbookRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={row.highlighted ? "bg-[#FFFBF2]" : "bg-white"}
                    >
                      <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                        {row.step}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">
                        {row.dep}
                      </td>
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <span
                          className={`inline-block px-1.5 py-0.5 rounded text-[8.5px] font-mono font-bold ${
                            row.revType === "green"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-300"
                              : row.revType === "amber"
                              ? "bg-amber-50 text-amber-800 border border-amber-400"
                              : row.revType === "rose"
                              ? "bg-rose-50 text-rose-700 border border-rose-300"
                              : "bg-slate-100 text-slate-700 border border-slate-300"
                          }`}
                        >
                          {row.reversibility}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-slate-700">
                        {row.recovery}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">
                        {row.techAuth}
                      </td>
                      <td className="py-2.5 px-3 text-right text-slate-700 font-medium">
                        {row.bizAuth}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Caption */}
            <div className="px-4 py-3 bg-[#FAF8F5] border-t border-[#EAE4DA] text-[10px] font-mono text-slate-500 leading-relaxed">
              Technical recovery authority and business reversal authority are deliberately different columns. The person who can roll back a configuration is often not the person who can authorise reversing a business outcome.
            </div>
          </div>

          {/* Stabilization Exit Section */}
          <div className="mb-6">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
              STABILIZATION EXIT &mdash; EVIDENCE-BASED
            </p>
            <div className="space-y-2.5 text-xs text-[#2A3D47]">
              {stabilizationItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full border border-amber-500/40 text-amber-700 bg-amber-50 flex items-center justify-center text-[10.5px] font-mono shrink-0 font-semibold mt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <strong className="text-[#0B1E28] font-bold">
                      {item.label}
                    </strong>{" "}
                    &mdash; <span className="text-slate-600">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legacy Exit Gate Card */}
          <div className="mb-6">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
              LEGACY EXIT GATE
            </p>
            <div className="bg-[#FAF8F5] border border-[#E2DDD5] rounded-xl p-5 shadow-sm">
              <p className="text-xs font-bold text-[#0B1E28] leading-relaxed mb-3">
                Decommissioning is the last step and the easiest to get wrong. Before any legacy scope is retired:
              </p>
              <ul className="space-y-2 text-xs">
                {legacyExitBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600">
                    <span className="text-[#C59A41] font-bold leading-none mt-1">&bull;</span>
                    <span>
                      <strong className="text-[#0B1E28] font-semibold">
                        {bullet.title}
                      </strong>{" "}
                      &mdash; {bullet.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Not Published Alert Card */}
          <div className="bg-[#FEF9EE] border border-[#E8DAB7] rounded-xl p-4 shadow-sm">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C6B1C] mb-1.5">
              NOT PUBLISHED
            </div>
            <p className="text-xs text-amber-950/80 leading-relaxed font-normal">
              No migration duration, cutover date, effort estimate, volume figure, success rate or replacement guarantee appears anywhere on this page. Those are outputs of your specific implementation planning, not properties of the method.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
