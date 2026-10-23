import React from "react";
import Link from "next/link";

export default function ContactRoutingSection() {
  const cards = [
    {
      title: "ZoikoSuite enterprise evaluation",
      description:
        "Product, architecture, deployment, and procurement discussion.",
      href: "/enterprise-sales",
    },
    {
      title: "ZoikoSuite support",
      description: "Existing customers and technical support.",
      href: "/support-center",
    },
    {
      title: "Corporate enquiry",
      description:
        "Questions about Group structure or public corporate information.",
      href: "/corporate-enquiries",
    },
    {
      title: "Investor Relations",
      description: "Institutional investors and long-term capital partners.",
      href: "/investor-relations",
    },
    {
      title: "Press & media",
      description: "Media enquiries, interviews, press assets.",
      href: "/media-enquiries",
    },
    {
      title: "Careers",
      description:
        "Candidates and recruiting questions; employer identified per role.",
      href: "/careers",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            CONTACT ROUTING
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Find the right Zoiko team.
          </h1>
        </div>

        {/* 3x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-center relative hover:border-[#A8843A] transition-colors"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
