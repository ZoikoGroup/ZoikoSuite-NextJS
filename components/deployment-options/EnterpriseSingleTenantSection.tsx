"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, AlertTriangle, FileText, CheckSquare } from "lucide-react";

interface Dimension {
  number: string;
  name: string;
}

const DIMENSIONS: Dimension[] = [
  { number: "01", name: "Identity & Access" },
  { number: "02", name: "Data Isolation" },
  { number: "03", name: "Data Residency" },
  { number: "04", name: "Encryption" },
  { number: "05", name: "Key Management" },
  { number: "06", name: "Network Isolation" },
  { number: "07", name: "Application Isolation" },
  { number: "08", name: "Infrastructure Isolation" },
  { number: "09", name: "Logging & Monitoring" },
  { number: "10", name: "Backup & Recovery" },
  { number: "11", name: "Change Management" },
  { number: "12", name: "Vulnerability Management" },
  { number: "13", name: "Incident Response" },
  { number: "14", name: "Compliance Mapping" },
  { number: "15", name: "Third-Party Dependencies" },
];

export default function EnterpriseSingleTenantSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                PATTERN 02 &mdash; ENTERPRISE SINGLE-TENANT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15] text-[#0F172A]">
              Define what is isolated, who operates it, and how it changes
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              &ldquo;Single-tenant&rdquo; is a tenancy relationship, not a
              complete architecture. Fifteen dimensions need an explicit answer.
            </p>
          </div>
        </div>

        {/* Main Visual Image Component */}
        <div className="w-full h-[420px] sm:h-[610px] relative rounded-2xl overflow-hidden">
          <Image
            src="/deployment/7.png"
            alt="Enterprise single tenant 15 dimensions architecture dashboard"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
