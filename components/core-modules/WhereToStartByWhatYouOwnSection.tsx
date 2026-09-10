"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface EvaluationRouteCard {
  roleBadge: string;
  title: string;
  linkText: string;
  linkHref: string;
  description: string;
}

const routeCards: EvaluationRouteCard[] = [
  {
    roleBadge: "CFO / CONTROLLER",
    title: "Finance modules",
    linkText: "Finance modules, AP/AR/GL/Treasury boundaries",
    linkHref: "#finance-modules",
    description: "Read into the four finance modules, then check coexistence and source ownership and the boundary on bank release.",
  },
  {
    roleBadge: "CHRO / PEOPLE",
    title: "Workforce modules",
    linkText: "Workforce context without displacing the HCM",
    linkHref: "#workforce-modules",
    description: "Find boundary labels on the human professional flows: employee data, purpose limitation and non-production testing.",
  },
  {
    roleBadge: "GENERAL COUNSEL",
    title: "Legal & Contracts",
    linkText: "governance and evidence, not legal advice",
    linkHref: "#legal-contracts",
    description: "Note where obligations extracted from documents and professional review remains mandatory.",
  },
  {
    roleBadge: "TAX LEADER",
    title: "Tax Management",
    linkText: "source co-position and professional review boundary",
    linkHref: "#tax-management",
    description: "Check the 8 jurisdiction source register and the Command Center — evaluate tax categorization.",
  },
  {
    roleBadge: "PROCUREMENT / CPO",
    title: "Cross-module scenario",
    linkText: "one supplier update, 6 steps",
    linkHref: "#cross-module-scenario",
    description: "The supplier scenario is the clearest view of work crossing 10 modules with one evidence record.",
  },
  {
    roleBadge: "CIO / ARCHITECT",
    title: "Coexistence & Source Model",
    linkText: "platform foundation, integrations / status",
    linkHref: "#coexistence-source-model",
    description: "The source ownership table is dedicated way to see what actually changes in your stack.",
  },
];

export default function WhereToStartByWhatYouOwnSection() {
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
                ROLE PATHWAYS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Where to start, by what you own
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              These are suggested reading routes you choose yourself. Nothing on this page infers your role, and no route is personalized behind the scenes.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid: 3 columns on desktop, responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {routeCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
              className="rounded-2xl border border-[#e2ddd3] bg-white p-6 shadow-xs hover:border-[#c5a059] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#8fa4b2] uppercase block mb-2">
                  {card.roleBadge}
                </span>

                <div className="mb-3">
                  <a
                    href={card.linkHref}
                    className="group inline-flex items-baseline gap-1 text-[13.5px] font-bold text-[#08222F] hover:text-[#c5a059] transition-colors leading-snug"
                  >
                    <span>{card.title}</span>
                    <span className="font-normal text-xs text-[#64748b]">
                      → {card.linkText}
                    </span>
                  </a>
                </div>

                <p className="text-xs text-[#566573] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
