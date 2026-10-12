import React from "react";
import Link from "next/link";

interface RouteItem {
  title: string;
  badge?: string;
  href?: string;
  isCurrent?: boolean;
}

const globalRoutes: RouteItem[] = [
  {
    title: "Enterprise sales ↗",
    href: "/enterprise-sales",
  },
  {
    title: "Corporate enquiries ↗",
    href: "/corporate-enquiries",
  },
  {
    title: "Media enquiries ↗",
    badge: "This page",
    href: "#inquiry",
    isCurrent: true,
  },
  {
    title: "Partner enquiries",
    badge: "Route pending",
  },
];

const europeanRoutes: RouteItem[] = [
  {
    title: "European enterprise sales",
    badge: "Route pending",
  },
  {
    title: "UK and European partnerships",
    badge: "Route pending",
  },
  {
    title: "Privacy and data protection",
    badge: "Route pending",
  },
  {
    title: "Regional support",
    badge: "Route pending",
  },
];

export default function MediaEnquiriesRoutes() {
  return (
    <section id="routes" className="bg-[#F6F5EF] py-[82px] px-6 sm:px-12 lg:px-[120px] font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        {/* Section Header */}
        <div className="flex flex-col gap-[18.8px] mb-[32px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
            <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#13303B]">
              Headquarters contact directory
            </span>
          </div>

          {/* H2 */}
          <h2 className="font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.15] lg:leading-[48.3px] tracking-[-0.035em] text-[#13303B]">
            Different requests.
            <br />
            Dedicated destinations.
          </h2>

          {/* Lead */}
          <p className="max-w-[640px] font-normal text-[17px] leading-[28px] text-[#64757C]">
            Choose the contact that matches your purpose. Office addresses provide context
            <br className="hidden sm:inline" />
            and do not imply walk-in access or operating hours.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] pt-[13.2px]">
          {/* Card 1: Global Headquarters */}
          <div className="bg-white border border-[#DCE4E4] rounded-[6px] p-[30px] flex flex-col gap-[19px] shadow-sm">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[10px] leading-[16.5px] tracking-[0.17em] uppercase text-[#13303B]">
                Global headquarters
              </span>
            </div>

            {/* Entity Name */}
            <h3 className="font-bold text-[21px] leading-[24.15px] tracking-[-0.02em] text-[#13303B]">
              Zoiko Tech Inc.
            </h3>

            {/* Address */}
            <address className="not-italic font-normal text-[13px] leading-[21.45px] text-[#64757C] whitespace-pre-line">
              1401 21st Street, Suite R{"\n"}Sacramento, CA 95811{"\n"}United States
            </address>

            {/* List */}
            <ul className="flex flex-col pt-[1px]">
              {globalRoutes.map((route, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between py-[10px] border-b border-[#DCE4E4]"
                >
                  {route.href ? (
                    route.href.startsWith("/") ? (
                      <Link
                        href={route.href}
                        className="font-semibold text-[12px] leading-[19.8px] text-[#1C7A78] underline hover:text-[#13303B] transition-colors"
                      >
                        {route.title}
                      </Link>
                    ) : (
                      <a
                        href={route.href}
                        className="font-semibold text-[12px] leading-[19.8px] text-[#1C7A78] underline hover:text-[#13303B] transition-colors"
                      >
                        {route.title}
                      </a>
                    )
                  ) : (
                    <span className="font-normal text-[13px] leading-[21.45px] text-[#13303B]">
                      {route.title}
                    </span>
                  )}

                  {route.badge && (
                    <small className="font-normal text-[10px] leading-[16.5px] text-[#64757C]">
                      {route.badge}
                    </small>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: European Headquarters */}
          <div className="bg-white border border-[#DCE4E4] rounded-[6px] p-[30px] pb-[49.7px] flex flex-col gap-[19px] shadow-sm">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[10px] leading-[16.5px] tracking-[0.17em] uppercase text-[#13303B]">
                European headquarters
              </span>
            </div>

            {/* Entity Name */}
            <h3 className="font-bold text-[21px] leading-[24.15px] tracking-[-0.02em] text-[#13303B]">
              Zoiko Tech
            </h3>

            {/* Address */}
            <address className="not-italic font-normal text-[13px] leading-[21.45px] text-[#64757C] whitespace-pre-line">
              167–169 Great Portland Street, 5th Floor{"\n"}London W1W 5PF{"\n"}United Kingdom
            </address>

            {/* List */}
            <ul className="flex flex-col pt-[1px]">
              {europeanRoutes.map((route, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between py-[10px] border-b border-[#DCE4E4]"
                >
                  <span className="font-normal text-[13px] leading-[21.45px] text-[#13303B]">
                    {route.title}
                  </span>

                  {route.badge && (
                    <small className="font-normal text-[10px] leading-[16.5px] text-[#64757C]">
                      {route.badge}
                    </small>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
