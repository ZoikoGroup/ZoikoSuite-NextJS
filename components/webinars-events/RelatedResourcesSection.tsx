import React from "react";
import Link from "next/link";

interface ResourceCard {
  type: string;
  title: string;
  href: string;
  borderColor: string;
  linkText?: string;
}

const resources: ResourceCard[] = [
  {
    type: "Training Academy",
    title: "Governance foundations learning path",
    href: "/training-academy",
    borderColor: "border-[#0f476a]",
  },
  {
    type: "Documentation",
    title: "Configuring approval matrices by policy class",
    href: "/documentation",
    borderColor: "border-[#0f476a]",
  },
  {
    type: "Executive Briefs",
    title: 'What "policy-to-evidence" governance requires',
    href: "/executive-briefs",
    borderColor: "border-[#0f476a]",
  },
  {
    type: "Support",
    title: "Registration or access issue?",
    href: "/support-center",
    borderColor: "border-[#a07a2e]",
    linkText: "Open Support Center →",
  },
];

export default function RelatedResourcesSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <span className="font-mono text-[11px] font-normal tracking-[0.1em] text-[#a07a2e] block mb-2">
            09 / RELATED &amp; SUPPORT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[33px] font-semibold text-[#16262f] tracking-tight">
            Related resources &amp; event continuity
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white border ${item.borderColor} rounded-lg p-6 flex flex-col justify-between hover:shadow-md transition-shadow`}
            >
              <div>
                <span className="font-mono text-[10.5px] text-[#a07a2e] block mb-3 font-medium">
                  {item.type}
                </span>

                <h3 className="text-[15px] font-semibold text-[#16262f] leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="mt-8 pt-4 border-t border-[#f0f4f7]">
                {item.linkText ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-[14.5px] font-semibold text-[#0f476a] hover:underline"
                  >
                    {item.linkText}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-[13.5px] font-semibold text-[#5a6d79] hover:text-[#0f476a] transition-colors"
                  >
                    Explore resource →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
