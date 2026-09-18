import React from "react";
import {
  ExternalLink,
  CheckCircle2,
  Clock,
  FileText,
  AlertCircle,
  Shield,
  Layers,
  Database,
  Lock,
  Eye,
  Activity,
} from "lucide-react";

export default function TrustDestinations() {
  const cards = [
    {
      bg:"bg-[#F7F5F0]",
      title: "Security Overview",
      description:
        "Control categories across identity, access, segregation of duties, encryption, logging and operational security.",
      badges: [
        { text: "READINESS", variant: "amber" },
        { text: "IMPLEMENTED CONTROLS", variant: "blue" },
      ],
      footerText: "DESTINATION NOT PUBLISHED",
      hasLink: false,
    },
    {
      bg:"bg-[#F7F5F0]",
      title: "Compliance Overview",
      description:
        "Framework alignment and readiness work, separated from any independent certification.",
      badges: [{ text: "READINESS", variant: "amber" }],
      footerText: "DESTINATION NOT PUBLISHED",
      hasLink: false,
    },
    {
      bg:"bg-[#F7F5F0]",
      title: "Certifications",
      description:
        "Independent assurance where it exists, with issuer, scope, period and access rule.",
      badges: [{ text: "NONE CURRENTLY HELD", variant: "gray" }],
      footerText: "DESTINATION NOT PUBLISHED",
      hasLink: false,
    },
    {
      bg:"bg-[#F7F5F0]",
      title: "Data Residency",
      description:
        "Region, storage, processing, backup, replication, key custody and support-access behaviour.",
      badges: [
        { text: "ARCHITECTURE TARGET", variant: "blue" },
        { text: "BY DEPLOYMENT", variant: "purple" },
      ],
      footerText: "DESTINATION NOT PUBLISHED",
      hasLink: false,
    },
    {
      bg:"bg-[#F7F5F0]",
      title: "Privacy Architecture",
      description:
        "Data classification, purpose, access scope, retention references and review states.",
      badges: [
        { text: "CURRENT ARCHITECTURE", variant: "blue" },
        { text: "PHASED DELIVERY", variant: "amber" },
      ],
      footerText: "DESTINATION NOT PUBLISHED",
      hasLink: false,
    },
    {
      bg:"bg-[#F7F5F0]",
      title: "Evidence Architecture",
      description:
        "How decisions, workflows, documents, events and manifests form audit evidence.",
      badges: [
        { text: "CURRENT ARCHITECTURE", variant: "blue" },
        { text: "PHASED DELIVERY", variant: "amber" },
      ],
      footerText: "DESTINATION NOT PUBLISHED",
      hasLink: false,
    },
    {
      bg:"bg-[#F7F5F0]",
      title: "Responsible AI",
      description:
        "AI governance boundaries, human decision requirements and evidence expectations.",
      badges: [{ text: "CURRENT ARCHITECTURE", variant: "blue" }],
      footerText: "DESTINATION NOT PUBLISHED",
      hasLink: false,
    },
    {
      bg:"bg-[#F7F5F0]",
      title: "Accessibility",
      description:
        "Design standard, conformance status, documentation and the feedback path.",
      badges: [{ text: "IN VALIDATION", variant: "amber" }],
      footerText: "DESTINATION NOT PUBLISHED",
      hasLink: false,
    },
    {
      bg:"bg-[#F7F5F0]",
      title: "Policies",
      description:
        "Policy library, legal notices, DPA, subprocessors and disclosure routes.",
      badges: [{ text: "PUBLISHED ON REQUEST", variant: "blue" }],
      footerText: "DESTINATION NOT PUBLISHED",
      hasLink: false,
    },
    {
      bg:"bg-[#F7F5F0]",
      title: "System Status",
      description:
        "Live service health, incident transparency model and historical record.",
      badges: [{ text: "LIVE STATUS SOURCE", variant: "blue" }],
      footerText: "DESTINATION NOT PUBLISHED",
      hasLink: false,
    },
    {
      bg:"bg-white",
      title: "Platform architecture",
      description:
        "Source ownership, authority model, integration contracts and deployment options — published today.",
      badges: [{ text: "PUBLISHED", variant: "blue" }],
      footerText: "Platform Foundation",
      hasLink: true,
    },
  ] as const;

  const getBadgeStyles = (variant: string) => {
    switch (variant) {
      case "amber":
        return "bg-[#F6EDD9] text-[#6A5620] border-[#C9B07A]";
      case "blue":
        return "bg-[#F1F3F4] text-[#5A6D79] border-[#DBE3E8]";
      case "purple":
        return "bg-[#F4EFF7] text-[#5B3B7A] border-[#C9B0DC]";
      case "gray":
      default:
        return "bg-[#F1F3F4] text-[#5A6D79] border-[#DBE3E8]";
    }
  };

  return (
    <div className="bg-white text-[#111827] font-sans antialiased px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-[#C29B38]"></span>
              <span className="text-xs font-bold tracking-[0.15em] text-[#C29B38] uppercase">
                Trust Diligence Finder
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
              Eleven trust destinations
            </h1>
          </div>

          <div className="max-w-md lg:pt-8">
            <p className="text-[15px] leading-relaxed text-[#4B5563]">
              Trust Center is the hub. Depth lives in each destination rather
              than being duplicated inconsistently here. Destinations that are
              not yet published are shown without a link.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bg} border border-[#5A6D79] border-t-[3px] rounded-lg p-6 flex flex-col justify-between shadow-sm relative`}
            >
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.badges.map((badge, bIndex) => (
                    <span
                      key={bIndex}
                      className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded border ${getBadgeStyles(badge.variant)}`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div>
                <div className="border-t border-dashed border-[#CBD5E1] my-4"></div>
                {card.hasLink ? (
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F2942] text-white text-xs font-semibold rounded hover:bg-[#1A3B5C] transition-colors"
                  >
                    {card.footerText}
                  </a>
                ) : (
                  <span className="text-[11px] bg-[#E8EFF4] text-[#5A6D79] rounded-md border-[#B9CBD6] tracking-wider p-2 uppercase">
                    {card.footerText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
