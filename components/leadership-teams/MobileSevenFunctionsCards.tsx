"use client";

import React from "react";
import { FileText, Shield, Briefcase, Landmark, Calculator, Cpu } from "lucide-react";

interface FunctionCard {
  title: string;
  badge1: { text: string; iconColor?: string; badgeColor?: string };
  badge2: { text: string; iconColor?: string; badgeColor?: string };
  terminalBox?: {
    id: string;
    fields: { label: string; value: string; action?: string }[];
  };
  subtext?: string;
}

const functionCards: FunctionCard[] = [
  {
    title: "Finance",
    badge1: { text: "UK-Operating Subsidiary", iconColor: "text-amber-500" },
    badge2: { text: "Authoritative source: ERP / Treasury", iconColor: "text-rose-500" },
    terminalBox: {
      id: "DEF-01: EXPENDITURE",
      fields: [
        { label: "POLICY", value: "Tier-2 Capital Allocation Policy (London)" },
        { label: "EVIDENCE", value: "Bank Swift Trace" },
        { label: "STATUS", value: "Waiting on sign-off", action: "Sign-off" },
      ],
    },
  },
  {
    title: "Workforce / People Ops",
    badge1: { text: "Key Person Employment / Transfer", iconColor: "text-blue-500" },
    badge2: { text: "Termination / Severance", iconColor: "text-slate-500", badgeColor: "border border-slate-300 bg-slate-50 text-slate-700" },
    subtext: "Employment contracts, IP assignment verification and cross-border right-to-work evidence recorded per jurisdictional node.",
  },
  {
    title: "Legal & Governance",
    badge1: { text: "Corporate Resolution Registry", iconColor: "text-amber-500" },
    badge2: { text: "Jurisdiction matrix", badgeColor: "border border-amber-300 bg-amber-50 text-amber-800", iconColor: "text-amber-600" },
    subtext: "Entity records, Board resolutions, Articles of Association and statutory filings linked to operational decisions.",
  },
  {
    title: "Tax",
    badge1: { text: "Transfer Pricing Policy", iconColor: "text-blue-500" },
    badge2: { text: "VAT Return / Filing", badgeColor: "border border-rose-300 bg-rose-50 text-rose-700 font-bold", iconColor: "text-rose-500" },
    subtext: "Clear attribution of tax nexus for intercompany charges, permanent establishment monitoring, and local statutory filings.",
  },
  {
    title: "Compliance",
    badge1: { text: "Regulatory Inquiry Tracker", iconColor: "text-rose-500" },
    badge2: { text: "Reporting obligations", iconColor: "text-amber-500" },
    terminalBox: {
      id: "COMP-02: AUDIT NOTICE",
      fields: [
        { label: "REGIME", value: "Information Commissioner's Office UK GDPR" },
        { label: "DEADLINE", value: "Within 48 hours" },
        { label: "OWNER", value: "Chief Privacy Officer" },
        { label: "STATUS", value: "Drafting" },
      ],
    },
  },
  {
    title: "Procurement & Commercial",
    badge1: { text: "Supplier Due Diligence / KYC Proof", iconColor: "text-blue-500" },
    badge2: { text: "Tier-1 Vendor Contracts", iconColor: "text-rose-500" },
    subtext: "Counterparty risk screening, MSA and DPA coverage, and invoice approval thresholds tied directly to legal terms.",
  },
  {
    title: "Technology",
    badge1: { text: "Access Control Audit", badgeColor: "border border-amber-300 bg-amber-50 text-amber-800 font-bold", iconColor: "text-amber-500" },
    badge2: { text: "Cloud Infrastructure", badgeColor: "border border-amber-200 bg-amber-50/70 text-amber-700", iconColor: "text-amber-500" },
    subtext: "Access rights, tenant data boundaries, software license compliance, and cryptographic integrity verification records.",
  },
];

export default function MobileSevenFunctionsCards() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {functionCards.map((card, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-[#D0AA55]/60 transition-colors"
        >
          <div>
            {/* Title */}
            <h3 className="text-sm sm:text-base font-bold text-[#08222F] mb-3">
              {card.title}
            </h3>

            {/* Badges */}
            <div className="flex flex-col gap-2 mb-3">
              <div className="flex items-center justify-between p-2 rounded-lg border border-slate-100 bg-slate-50/60 text-[11px] font-medium text-slate-700">
                <span>{card.badge1.text}</span>
                <FileText className={`w-3.5 h-3.5 ${card.badge1.iconColor || "text-slate-400"}`} />
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg border border-slate-100 bg-slate-50/60 text-[11px] font-medium text-slate-700">
                <span>{card.badge2.text}</span>
                {card.badge2.badgeColor ? (
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${card.badge2.badgeColor}`}>
                    ACTIVE
                  </span>
                ) : (
                  <Shield className={`w-3.5 h-3.5 ${card.badge2.iconColor || "text-slate-400"}`} />
                )}
              </div>
            </div>

            {/* Terminal box if present */}
            {card.terminalBox && (
              <div className="mt-2 mb-2 rounded-lg border border-slate-200 bg-[#FAF8F5] p-3 text-[10.5px] font-mono">
                <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1.5">
                  {card.terminalBox.id}
                </span>
                <div className="flex flex-col space-y-1 text-slate-700">
                  {card.terminalBox.fields.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-slate-500 font-bold mr-1">{f.label}:</span>
                        <span>{f.value}</span>
                      </div>
                      {f.action && (
                        <span className="shrink-0 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-sans font-bold text-[9.5px]">
                          {f.action}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Subtext description */}
          {card.subtext && (
            <p className="text-[11px] text-slate-500 leading-relaxed mt-2 pt-2 border-t border-slate-100">
              {card.subtext}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
