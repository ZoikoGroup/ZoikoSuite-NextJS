import React from "react";
import Link from "next/link";

export default function IntentRouterSection() {
  const cards = [
    {
      title: "Deploy ZoikoSuite",
      actionText: "Talk to a solutions architect →",
      href: "/contact",
    },
    {
      title: "Explore Zoiko Tech broadly",
      actionText: "Visit Zoiko Tech ↗",
      href: "https://zoikotech.com",
      external: true,
    },
    {
      title: "Build / integrate",
      actionText: "Developer resources →",
      href: "/developers",
    },
    {
      title: "Partner",
      actionText: "Explore partnerships →",
      href: "/partners",
    },
    {
      title: "Media",
      actionText: "Newsroom / media enquiries →",
      href: "/media",
    },
    {
      title: "Careers",
      actionText: "View careers →",
      href: "/careers",
    },
    {
      title: "Investors",
      actionText: "Investor Relations →",
      href: "/investors",
    },
    {
      title: "Group context",
      actionText: "Explore Zoiko Group →",
      href: "/group",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            WORK WITH ZOIKO TECH — INTENT ROUTER
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Choose the route that matches your intent
          </h1>
        </div>

        {/* 4x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const isExternal = "external" in card && card.external;
            return (
              <Link
                key={index}
                href={card.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                style={{ borderRadius: "14px" }}
                className="w-full p-6 border border-[#E5E0D5] bg-white shadow-sm hover:border-[#A8843A] transition-colors flex flex-col items-start justify-between min-h-[140px] group"
              >
                <h3 className="text-base font-semibold tracking-tight text-[#0b1329] mb-4">
                  {card.title}
                </h3>
                <span className="text-xs font-semibold text-[#0A1D34] group-hover:text-[#A8843A] transition-colors flex items-center gap-1">
                  {card.actionText}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
