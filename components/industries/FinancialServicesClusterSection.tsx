"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ClusterCard {
  title: string;
  description: string;
  linkText: string;
}

const clusterCards: ClusterCard[] = [
  {
    title: "Financial Service",
    description:
      "Multi-entity finance/tax, workforce, legal/commercial, compliance obligations, approvals, evidence, and cross-border governance.",
    linkText: "Explore Financial Service",
  },
  {
    title: "Banking",
    description:
      "Entity/branch governance, finance, workforce, procurement/contracts, obligations, authority/SoD, evidence, data/security context.",
    linkText: "Explore Banking",
  },
  {
    title: "Insurance",
    description:
      "Finance, workforce, vendor/contracts, legal obligations, authority, evidence, data/privacy and enterprise controls.",
    linkText: "Explore Insurance",
  },
];

export default function FinancialServicesClusterSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-12">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-4 h-[1px]"
              style={{ backgroundColor: "#C59B3F" }}
            ></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase font-mono"
              style={{ color: "#C59B3F" }}
            >
              FINANCIAL SERVICES CLUSTER
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15]">
            Choose the context closest to your operating model.
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {clusterCards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all hover:border-[#C59B3F]"
            >
              <div>
                {/* Title */}
                <h3 className="text-lg font-bold text-[#08222F] mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-mono mb-8">
                  {item.description}
                </p>
              </div>

              {/* Pill Button Action */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center justify-between px-5 py-3 rounded-full text-xs font-bold font-mono text-[#08222F] border border-[#D9D3C7] hover:border-[#08222F] transition-all w-full group"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#08222F] transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
