import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface TopicCard {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

interface SpecialistRoute {
  title: string;
  linkText: string;
  href: string;
  note?: string;
  external?: boolean;
}

const topicsData: TopicCard[] = [
  {
    number: "01",
    title: "Company and organizational information",
    description:
      "High-level questions about company identity and organization.",
    imageSrc: "/corporate/2.png",
  },
  {
    number: "02",
    title: "Governance and corporate accountability",
    description:
      "Questions about organizational governance, oversight, and accountability.",
    imageSrc: "/corporate/3.png",
  },
  {
    number: "03",
    title: "Official notices and documentation",
    description:
      "General questions about where to direct official documentation.",
    imageSrc: "/corporate/4.png",
  },
  {
    number: "04",
    title: "Corporate events and participation",
    description:
      "General organizational questions about events and institutional participation.",
    imageSrc: "/corporate/2.png",
  },
  {
    number: "05",
    title: "General business correspondence",
    description:
      "Organizational questions outside sales, media, partnerships, and support.",
    imageSrc: "/corporate/3.png",
  },
  {
    number: "06",
    title: "Regional and special-purpose routing",
    description:
      "Help identifying a global, European, or specialist contact destination.",
    imageSrc: "/corporate/4.png",
  },
];

const specialistRoutes: SpecialistRoute[] = [
  {
    title: "Product sales",
    linkText: "Enterprise sales",
    href: "/enterprise-sales",
    external: true,
  },
  {
    title: "Press & media",
    linkText: "Media enquiries ↓",
    href: "#",
    note: "Dedicated route pending",
  },
  {
    title: "Partnerships",
    linkText: "Partner enquiries ↓",
    href: "#",
    note: "Dedicated route pending",
  },
  {
    title: "Privacy matters",
    linkText: "Privacy and data protection ↓",
    href: "#",
    note: "Dedicated route pending",
  },
  {
    title: "Customer support",
    linkText: "Regional support ↓",
    href: "",
    note: "Dedicated route pending",
  },
];

export default function EnquiryTopics() {
  return (
    <section id="right-enquiry" className="bg-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              START WITH YOUR PURPOSE
            </p>
          </div>
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-4">
            What is your enquiry about?
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed">
            Choose a corporate topic to shape your message, or check the
            dedicated contacts below before you begin.
          </p>
        </div>

        {/* 6 Corporate Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {topicsData.map((topic, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image & Topic Number Badge */}
                <div className="relative w-full h-48">
                  <Image
                    src={topic.imageSrc}
                    alt={topic.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded text-white text-[14px] tracking-widest uppercase">
                    {topic.number} / CORPORATE TOPIC
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[#1E293B] text-lg font-bold mb-3 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href="/sign-in"
                  className="inline-flex items-center text-xs font-bold text-[#1C7A78] hover:underline space-x-1"
                >
                  <span>Choose this topic</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Specialist Team Section */}
        <div>
          <div className="mb-8">
            <h3 className="text-[#1E293B] text-2xl font-bold mb-2">
              Looking for a specialist team?
            </h3>
            <p className="text-[#64748B] text-sm md:text-base max-w-2xl">
              For product purchases, media requests, partnerships, privacy
              questions, or customer support, use the appropriate dedicated
              contact.
            </p>
          </div>

          {/* Specialist Routes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {specialistRoutes.map((route, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-[#1E293B] text-xs font-bold uppercase tracking-wider mb-3">
                    {route.title}
                  </h4>
                  <a
                    href={route.href}
                    className="inline-flex items-center text-xs font-bold text-[#386665] hover:underline space-x-1"
                  >
                    <span>{route.linkText}</span>
                    {route.external && <ArrowUpRight className="w-3 h-3" />}
                  </a>
                </div>
                {route.note && (
                  <p className="text-[10px] text-[#94A3B8] mt-4 font-normal">
                    {route.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
