import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RelatedTrustAreasSection() {
  const trustAreas = [
    {
      title: "Security Overview",
      desc: "Control architecture & readiness",
      href: "/security-overview",
    },
    {
      title: "Compliance Overview",
      desc: "Obligation & evidence model",
      href: "/compliance-overview",
    },
    {
      title: "Data Residency",
      desc: "Deployment & jurisdiction truth",
      href: "/data-residency",
    },
    {
      title: "Privacy Architecture",
      desc: "Data governance controls",
      href: "/privacy-architecture",
    },
    {
      title: "Evidence Architecture",
      desc: "Evidence lineage & integrity",
      href: "/evidence-architecture",
    },
    {
      title: "Responsible AI",
      desc: "AI governance boundaries",
      href: "/responsible-ai",
    },
    {
      title: "Accessibility",
      desc: "Requirements & testing status",
      href: "/accessibility",
    },
    {
      title: "Policies",
      desc: "Published policies & ownership",
      href: "/trust/policies",
    },
    {
      title: "System Status",
      desc: "Availability & incidents",
      href: "/trust-system-status",
    },
  ];

  return (
    <section className="w-full bg-color-white-solid py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-6 sm:px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-color-orange-48" />
            <span className="text-color-orange-48 text-xs font-semibold font-['Inter'] tracking-wider uppercase">
              RELATED TRUST AREAS
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-color-azure-12-4 text-2xl sm:text-3xl font-bold font-['Inter'] leading-tight">
              This page proves assurance status. These pages prove the controls behind it.
            </h2>
          </div>
        </div>

        {/* 3x3 Grid of Trust Area Cards */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustAreas.map((area, idx) => (
            <Link
              key={idx}
              href={area.href}
              className="px-5 py-4 bg-color-white-solid rounded-[10px] border border-color-orange-87 flex justify-between items-center group hover:border-color-orange-48 hover:shadow-xs transition-all"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-color-azure-12-4 text-sm font-bold font-['Inter'] group-hover:text-color-orange-48 transition-colors">
                  {area.title}
                </span>
                <span className="text-color-grey-44 text-xs font-normal font-['Inter']">
                  {area.desc}
                </span>
              </div>
              <div className="text-color-azure-24 text-sm font-semibold font-['Inter'] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Open</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
