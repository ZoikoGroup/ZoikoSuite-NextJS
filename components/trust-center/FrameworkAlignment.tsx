import React from "react";
import Image from "next/image";

type BadgeColor = "amber" | "blue" | "purple" | "gray" | "red";

interface FrameworkItem {
  title: string;
  description: string;
  badgeText: string;
  badgeColor: BadgeColor;
}

const frameworks: FrameworkItem[] = [
  {
    title: "SOC 2",
    description:
      "Control mapping and readiness work underway. Next evidence gate is a readiness assessment.",
    badgeText: "READINESS",
    badgeColor: "amber",
  },
  {
    title: "ISO/IEC 27001",
    description:
      "Control mapping against the standard. No statement of applicability is published.",
    badgeText: "READINESS",
    badgeColor: "amber",
  },
  {
    title: "NIST CSF 2.0",
    description:
      "Referenced as a risk-management framework for design context only.",
    badgeText: "REFERENCE FRAMEWORK",
    badgeColor: "blue",
  },
  {
    title: "Sector frameworks",
    description:
      "PCI DSS, HIPAA, FedRAMP, NERC CIP and equivalents are addressed per industry with applicability states.",
    badgeText: "BY SCOPE AND SECTOR",
    badgeColor: "purple",
  },
];

const getBadgeStyles = (color: BadgeColor): string => {
  switch (color) {
    case "amber":
      return "bg-[#F6EDD9] text-[#6A5620] border-[#C9B07A]";
    case "blue":
      return "bg-[#F1F3F4] text-[#5A6D79] border-[#DBE3E8]";
    case "purple":
      return "bg-[#F4EFF7] text-[#5B3B7A] border-[#C9B0DC]";
    case "red":
      return "bg-[#F9EDED] text-[#8A3B3B] border-[#DFA9A9]";
    case "gray":
    default:
      return "bg-[#EEF2F5] text-[#3E5A6B] border-[#C3D0D8]";
  }
};

export default function FrameworkAlignment() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-xs font-semibold tracking-widest uppercase">
                COMPLIANCE AND CERTIFICATIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-[1.15]">
              Framework alignment is not certification
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-base leading-relaxed">
              These are kept strictly separate. Alignment describes how the
              control model maps to a framework; certification requires an
              independent issuer, scope and period.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Framework Cards */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {frameworks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E5E7EB] border-l-3 border-l-[#2A6386] p-5 shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="w-full sm:w-[35%]">
                  <h3 className="font-bold text-[#111827] text-base">
                    {item.title}
                  </h3>
                </div>
                <div className="w-full sm:w-[65%] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-[#6B7280] text-xs leading-relaxed">
                    {item.description}
                  </p>
                  <div className="self-start sm:self-center shrink-0">
                    <span
                      className={`inline-block px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-md border ${getBadgeStyles(
                        item.badgeColor,
                      )}`}
                    >
                      {item.badgeText}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Illustration Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full overflow-hidden">
              <div className="relative w-full h-[360px] sm:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/trust/3.png"
                  alt="Framework Alignment and Certification Illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
