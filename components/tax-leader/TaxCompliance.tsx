import React from "react";
import Image from "next/image";

interface SectionItem {
  title: string;
  description: string;
}

const items: SectionItem[] = [
  {
    title: "Source and scope",
    description:
      "Authoritative source, entity, jurisdiction, and reporting period.",
  },
  {
    title: "Owner and review",
    description:
      "Preparation, independent review, and explicitly delegated approval.",
  },
  {
    title: "Evidence and oversight",
    description:
      "Authorized artifacts, unresolved decisions, and source freshness.",
  },
];

export default function TaxCompliance() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              EVIDENCE IS NOT CERTAINTY
            </p>
            <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.15]">
              A completed task
              <br />
              is not verified compliance.
            </h2>
            <p className="text-[#64748B] text-base md:text-lg leading-relaxed max-w-xl">
              Keep obligations, assignment, control mapping, exception handling,
              and supporting evidence separately connected and reviewed.
            </p>
          </div>

          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="pb-6 border-b border-[#E2E8F0] last:border-b-0 last:pb-0"
              >
                <h3 className="text-[#1E293B] text-base font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-6">
          <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm bg-[#F1F5F9]">
            <Image
              src="/tax/6.png"
              alt="Tax compliance visualization"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
