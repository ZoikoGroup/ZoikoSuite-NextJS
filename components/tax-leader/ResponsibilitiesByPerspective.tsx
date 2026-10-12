import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PerspectiveCard {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const perspectivesData: PerspectiveCard[] = [
  {
    title: "Tax leadership",
    description:
      "Understand scoped obligations, jurisdiction context, and review priorities.",
    imageSrc: "/tax/7.png",
    href: "/leadership",
  },
  {
    title: "Finance / Controller",
    description:
      "Connect tax responsibilities with financial reconciliation and supporting evidence.",
    imageSrc: "/tax/8.png",
    href: "/financial-service",
  },
  {
    title: "Compliance leadership",
    description:
      "Review policy framing, exceptions, and governance boundaries.",
    imageSrc: "/tax/9.png",
    href: "/leadership",
  },
  {
    title: "CIO / IT",
    description:
      "Assess security, system connectivity, and data lineage requirements.",
    imageSrc: "/tax/10.png",
    href: "/cio",
  },
  {
    title: "COO / Operations",
    description:
      "Identify process handoffs, bottlenecks, and escalation responsibilities.",
    imageSrc: "/tax/11.png",
    href: "/coo",
  },
  {
    title: "Audit committee / Board",
    description:
      "Review authorized summaries and unresolved issues at an oversight level.",
    imageSrc: "/tax/12.png",
    href: "/audit-committee",
  },
];

export default function ResponsibilitiesByPerspective() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            RESPONSIBILITIES BY PERSPECTIVE
          </p>
          <h2 className="text-[#1E293B] text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Different readers.
            <br />
            Different responsibilities.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perspectivesData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-48 bg-[#F1F5F9]">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#1E293B] text-lg font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <a
                  href={card.href}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-2xl bg-[#C8A24AAD] text-[#FFFFFF] text-xs font-semibold hover:bg-[#E5D0A7] transition-colors duration-200 space-x-2"
                >
                  <span>Discuss this perspective</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
