"use client";

import React from "react";
import {
  Fingerprint,
  Handshake,
  Building2,
  CreditCard,
  HardDrive,
  MessageSquare,
  Network,
  Globe,
} from "lucide-react";

interface IntegrationItem {
  icon: React.ReactNode;
  title: string;
  status: string;
}

const integrationItems: IntegrationItem[] = [
  {
    icon: <Fingerprint className="w-5 h-5 text-[#0F476A]" />,
    title: "Identity",
    status: "Status: registry-driven",
  },
  {
    icon: <Handshake className="w-5 h-5 text-[#0F476A]" />,
    title: "CRM",
    status: "Status: registry-driven",
  },
  {
    icon: <Building2 className="w-5 h-5 text-[#0F476A]" />,
    title: "ERP",
    status: "Status: registry-driven",
  },
  {
    icon: <CreditCard className="w-5 h-5 text-[#0F476A]" />,
    title: "Finance",
    status: "Status: registry-driven",
  },
  {
    icon: <HardDrive className="w-5 h-5 text-[#0F476A]" />,
    title: "Storage",
    status: "Status: registry-driven",
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-[#0F476A]" />,
    title: "Collaboration",
    status: "Status: registry-driven",
  },
  {
    icon: <Network className="w-5 h-5 text-[#0F476A]" />,
    title: "API",
    status: "Status: registry-driven",
  },
  {
    icon: <Globe className="w-5 h-5 text-[#0F476A]" />,
    title: "Zoiko ecosystem",
    status: "Status: registry-driven",
  },
];

export default function IntegrationsSection() {
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
              INTEGRATIONS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-6">
            Connect the platform to the systems that already run your business.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed">
            Approved connectors, APIs, webhooks, identity providers, data
            sources, and Zoiko ecosystem integrations connect selected workflows
            and context. Availability and data direction come from the
            integration registry.
          </p>
        </div>

        {/* 2x4 Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#0F476A]"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E8F0F5] flex items-center justify-center mb-4 border border-[#EBE5DA]">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#08222F] mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 font-mono">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
