"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface RoleCard {
  role: string;
  title: string;
  description: string;
  links: string[];
}

const roleCards: RoleCard[] = [
  {
    role: "OPERATIONS",
    title: "Coordinate work without losing evidence",
    description:
      "See how controls, exceptions, and operating signals come together.",
    links: ["Governance Platform", "Operating Intelligence", "Platform Tour"],
  },
  {
    role: "LEGAL / COMPLIANCE",
    title: "Keep policy and evidence visible",
    description:
      "Scope, review, exceptions, and evidence stay visible around governed work.",
    links: ["Governance Platform", "Trust / Evidence", "Book demo"],
  },
  {
    role: "FINANCE / CFO",
    title: "Evaluate control and implementation risk",
    description:
      "Operating control, evidence, and modular scope, evaluated on your terms.",
    links: ["Platform Tour", "Operating Intelligence", "Solution brief"],
  },
  {
    role: "IT / SECURITY",
    title: "Evaluate architecture and trust boundaries",
    description:
      "Architecture, integration, permissions, and deployment context.",
    links: ["Platform Foundation", "Integrations", "Trust Center"],
  },
  {
    role: "LEADERSHIP",
    title: "See cross-domain operating context",
    description:
      "Understand where decisions need attention across the enterprise.",
    links: ["Operating Intelligence", "Platform Tour", "Demo"],
  },
  {
    role: "EXISTING CUSTOMER",
    title: "Discover adjacent capabilities",
    description:
      "Explore beyond your currently used module — no forced funnel.",
    links: ["Core Modules", "Platform Tour", "Customer Success"],
  },
];

export default function FindYourPathSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
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
              FIND YOUR PATH
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-6">
            Continue with the proof that matters to your role.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed">
            Each row names the proof surface most relevant to that evaluation,
            not a generic feature promise.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roleCards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E4E1D8] border-l-3 border-l-[#0F476A] rounded-2xl p-6 flex flex-col shadow-sm transition-all hover:border-[#0F476A]"
            >
              <div>
                {/* Role Eyebrow */}
                <div className="text-[10px] font-mono font-bold tracking-wider mb-2 text-[#0F476A]">
                  {item.role}
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-[#08222F] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-gray-600 leading-relaxed font-mono mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action Links Footer */}
              <div className="border-t border-dashed border-[#D9D3C7] pt-4">
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-center text-xs font-bold text-[#08222F]">
                  {item.links.map((link, linkIdx) => (
                    <React.Fragment key={linkIdx}>
                      <a
                        href="#"
                        className="hover:text-[#C59B3F] transition-colors inline-flex items-center gap-1 group"
                      >
                        <span>{link}</span>
                        {linkIdx < item.links.length - 1 && (
                          <span className="text-gray-400 font-normal ml-1">
                            →
                          </span>
                        )}
                      </a>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
