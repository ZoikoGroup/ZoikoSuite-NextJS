import React from "react";
import Link from "next/link";

const relatedDestinations = [
  { title: "Privacy Policy", href: "/trust/policies" },
  { title: "Cookie Policy", href: "/trust/policies" },
  { title: "Cookie Preferences", href: "#" },
  { title: "Data Processing Agreement", href: "/trust/policies" },
  { title: "Subprocessor List", href: "/privacy-architecture" },
  { title: "Accessibility Statement", href: "/accessibility" },
  { title: "Responsible AI", href: "/responsible-ai" },
  { title: "Security Disclosure", href: "/security-overview" },
  { title: "Legal Notices", href: "/trust/policies" },
  { title: "Consumer Rights Request", href: "#requests" },
  { title: "California Privacy Notice", href: "/privacy-data-protection" },
];

export default function RelatedDestinationsSection() {
  return (
    <section className="py-5 sm:py-[26px] flex flex-col gap-4 sm:gap-5 border-t border-[#DCD6C8]">
      {/* Heading */}
      <h2
        className="text-[17px] sm:text-[18px] font-bold text-[#16223A] tracking-[-0.01em]"
        style={{
          fontFamily: "Georgia, serif",
          lineHeight: "28.8px",
        }}
      >
        Related Legal Destinations
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-[10px]">
        {relatedDestinations.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="min-h-[44px] bg-white border border-[#DCD6C8] rounded-[6px] px-3.5 sm:px-[13px] py-2.5 sm:py-[10px] pb-2.5 sm:pb-[11.2px] hover:border-[#A8843A] hover:bg-[#F6F1E6]/50 transition-all flex items-center shadow-2xs group"
          >
            <span
              className="text-[12px] font-semibold text-[#123255] group-hover:text-[#0c223a] transition-colors"
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                lineHeight: "19.2px",
              }}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
