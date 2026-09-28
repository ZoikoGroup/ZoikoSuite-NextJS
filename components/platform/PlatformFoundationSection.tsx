"use client";

import React from "react";
import {
  Fingerprint,
  Plug,
  FileText,
  ShieldCheck,
  Bell,
  Activity,
  Globe,
} from "lucide-react";

interface FoundationCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const foundationCards: FoundationCard[] = [
  {
    icon: <Fingerprint className="w-5 h-5 text-[#0F476A]" />,
    title: "Identity & enterprise context",
    description:
      "Shared role, entity, and context hooks only where supported by the deployment.",
  },
  {
    icon: <Plug className="w-5 h-5 text-[#0F476A]" />,
    title: "Integration & event fabric",
    description:
      "Approved APIs, webhooks, connectors, and event patterns at an architectural level.",
  },
  {
    icon: <FileText className="w-5 h-5 text-[#0F476A]" />,
    title: "Evidence & audit substrate",
    description:
      "How source, context, and state can be retained or referenced when the product supports it.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#0F476A]" />,
    title: "Policy / governance hooks",
    description:
      "Shared mechanisms modules can use to apply governance consistently.",
  },
  {
    icon: <Bell className="w-5 h-5 text-[#0F476A]" />,
    title: "Notifications & workflow services",
    description:
      "Common platform services shown only where released and published.",
  },
  {
    icon: <Activity className="w-5 h-5 text-[#0F476A]" />,
    title: "Observability & resilience",
    description:
      "Routes to System Status and architecture evidence where public.",
  },
  {
    icon: <Globe className="w-5 h-5 text-[#0F476A]" />,
    title: "Data & residency context",
    description:
      "Deployment-aware context, linked to Data Residency for current detail.",
  },
];

export default function PlatformFoundationSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-4 h-[1px]"
              style={{ backgroundColor: "#B8913F" }}
            ></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase font-mono"
              style={{ color: "#B8913F" }}
            >
              PLATFORM FOUNDATION
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-6">
            A shared foundation for governed, modular operations.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed">
            Platform Foundation is the shared architecture beneath ZoikoSuite:
            common platform services, context, integration patterns, evidence
            handling, governance hooks, and operating layers that allow modules
            to work as parts of one system rather than isolated applications.
          </p>
        </div>

        {/* Cards Grid Layout matching the image arrangement (4 on top row, 3 on bottom row) */}
        <div className="w-full flex flex-col gap-6">
          {/* Top Row: 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundationCards.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#D9D3C7] rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#0F476A]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E8F0F5] flex items-center justify-center mb-4 border border-[#EBE5DA]">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#08222F] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-mono">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foundationCards.slice(4, 7).map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#D9D3C7] rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#0F476A]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E8F0F5] flex items-center justify-center mb-4 border border-[#EBE5DA]">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#08222F] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-mono">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
