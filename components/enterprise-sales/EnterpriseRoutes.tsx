import React from "react";
import Link from "next/link";

interface RouteItem {
  title: string;
  badge: string;
  href?: string;
  isCurrent?: boolean;
}

const globalRoutes: RouteItem[] = [
  {
    title: "Enterprise sales",
    badge: "This page",
    href: "#inquiry",
    isCurrent: true,
  },
  {
    title: "Corporate enquiries",
    badge: "Route pending",
    href: "/corporate-enquiries",
  },
  {
    title: "Media enquiries",
    badge: "Route pending",
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

export default function EnterpriseRoutes() {
  return (
    <section id="routes" className="bg-[#F6F5EF] py-[82px] px-6 sm:px-12 lg:px-[120px] font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        {/* Section Header */}
        <div className="flex flex-col gap-[18.6px] mb-[32px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
            <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#13303B]">
              The right destination
            </span>
          </div>

          {/* H2 */}
          <h2 className="font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.15] lg:leading-[48.3px] tracking-[-0.035em] text-[#13303B]">
            Looking for a different conversation?
          </h2>

          {/* Lead */}
          <p className="max-w-[640px] font-normal text-[17px] leading-[28px] text-[#64757C]">
            Enterprise sales is one of several distinct contact destinations. The routes below
            <br className="hidden sm:inline" />
            show the headquarters contact structure; links await approved destinations.
          </p>
        </div>

        {/* 2-Column Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] pt-[13.4px]">
          {/* Card 1: Global Headquarters */}
          <div className="bg-white border border-[#DCE4E4] rounded-[6px] p-[30px] flex flex-col gap-[19px] shadow-sm">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[10px] leading-[16.5px] tracking-[0.17em] uppercase text-[#13303B]">
                Global headquarters
              </span>
            </div>

            {/* H3 */}
            <h3 className="font-bold text-[21px] leading-[24.15px] tracking-[-0.02em] text-[#13303B]">
              Global contact destinations
            </h3>

            {/* List */}
            <ul className="flex flex-col pt-[1px]">
              {globalRoutes.map((route, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between py-[10px] border-b border-[#DCE4E4]"
                >
                  {route.isCurrent ? (
                    <a
                      href={route.href}
                      className="font-semibold text-[12px] leading-[19.8px] text-[#1C7A78] hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{route.title}</span>
                      <svg
                        className="w-2.5 h-2.5 shrink-0"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : route.href ? (
                    <Link
                      href={route.href}
                      className="font-normal text-[13px] leading-[21.45px] text-[#13303B] hover:text-[#1C7A78] transition-colors"
                    >
                      {route.title}
                    </Link>
                  ) : (
                    <span className="font-normal text-[13px] leading-[21.45px] text-[#13303B]">
                      {route.title}
                    </span>
                  )}

                  <small className="font-normal text-[10px] leading-[16.5px] text-[#64757C]">
                    {route.badge}
                  </small>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: European Headquarters */}
          <div className="bg-white border border-[#DCE4E4] rounded-[6px] p-[30px] pb-[36.56px] flex flex-col gap-[19px] shadow-sm">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[10px] leading-[16.5px] tracking-[0.17em] uppercase text-[#13303B]">
                European headquarters
              </span>
            </div>

            {/* H3 */}
            <h3 className="font-bold text-[21px] leading-[24.15px] tracking-[-0.02em] text-[#13303B]">
              European contact destinations
            </h3>

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

                  <small className="font-normal text-[10px] leading-[16.5px] text-[#64757C]">
                    {route.badge}
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
