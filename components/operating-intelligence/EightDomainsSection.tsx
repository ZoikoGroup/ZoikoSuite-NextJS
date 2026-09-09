"use client";

import React from "react";
import { motion } from "framer-motion";

interface DomainCard {
  domainId: string;
  title: string;
  description: string;
  proofLabel: string;
  proof: string;
  isAiDomain?: boolean;
}

const domains: DomainCard[] = [
  {
    domainId: "DOMAIN 01",
    title: "Operational intelligence",
    description: "Multi-entity ledger activity, throughput, metrics and comparative trends.",
    proofLabel: "PROOF",
    proof: "Real-time command center dashboard.",
  },
  {
    domainId: "DOMAIN 02",
    title: "Obligation intelligence",
    description: "Effective filing deadlines, tax periods, covenants and regulatory actions.",
    proofLabel: "PROOF",
    proof: "Compliance calendar & statutory filings manager.",
  },
  {
    domainId: "DOMAIN 03",
    title: "Governance intelligence",
    description: "Policy coverage, authority rules, segregated roles and approval limits.",
    proofLabel: "PROOF",
    proof: "Policy decision matrix & authority controls.",
  },
  {
    domainId: "DOMAIN 04",
    title: "Exception intelligence",
    description: "Threshold breaches, non-conforming items, variance and root-cause reasons.",
    proofLabel: "PROOF",
    proof: "Resolution tickets, root-cause tags & audit trails.",
  },
  {
    domainId: "DOMAIN 05",
    title: "Evidence intelligence",
    description: "Attribution trail, cryptographic hashing, provenance and completeness verification.",
    proofLabel: "PROOF",
    proof: "Immutable audit manifests, chain-of-custody certificates.",
  },
  {
    domainId: "DOMAIN 06",
    title: "Control intelligence",
    description: "Control performance, override governance, bypass notifications, and compensating rules.",
    proofLabel: "PROOF",
    proof: "Control coverage rates and real-time alerts.",
  },
  {
    domainId: "DOMAIN 07",
    title: "Entity & jurisdiction intelligence",
    description: "Multi-entity structure mapping, territorial rules, residency and cross-border obligations.",
    proofLabel: "PROOF",
    proof: "Registry map, jurisdiction conflict engine.",
  },
  {
    domainId: "DOMAIN 08",
    title: "Governed AI findings",
    description: "Traceable AI analysis, source grounding, confidence factors and human review boundaries.",
    proofLabel: "PROOF",
    proof: "AI finding cards, attributable human sign-off record.",
    isAiDomain: true,
  },
];

export default function EightDomainsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                INTELLIGENCE DOMAINS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.12]">
              Eight domains, each with its
              <br />
              own proof
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Governed AI is one domain among eight — deliberately not the
              organizing principle of the page.
            </p>
          </div>
        </div>

        {/* 8 Domains Grid: 4 columns x 2 rows on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {domains.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeOut" }}
              className={`rounded-2xl border p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow ${
                card.isAiDomain
                  ? "border-[#d8b568] bg-[#fdfaf3]"
                  : "border-[#d6e2e9] bg-white"
              }`}
            >
              <div>
                <span
                  className={`text-[10px] font-mono font-bold tracking-[0.14em] uppercase block mb-1.5 ${
                    card.isAiDomain ? "text-[#a06810]" : "text-[#5a8099]"
                  }`}
                >
                  {card.domainId}
                </span>
                <h3 className="text-base font-bold text-[#08222F] tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-[11.5px] text-[#64748b] leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#edf2f6]">
                <span className="text-[9px] font-mono font-bold tracking-[0.15em] text-[#8fa4b2] uppercase block mb-1">
                  {card.proofLabel}
                </span>
                <p className="text-[11px] font-mono text-[#334756] leading-snug">
                  {card.proof}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
