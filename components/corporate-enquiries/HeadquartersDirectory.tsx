import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ContactRoute {
  label: string;
  status: string;
  href?: string;
  isExternal?: boolean;
}

interface DirectoryCard {
  category: string;
  companyName: string;
  addressLines: string[];
  routes: ContactRoute[];
}

const directoryData: DirectoryCard[] = [
  {
    category: "GLOBAL HEADQUARTERS",
    companyName: "Zoiko Tech Inc.",
    addressLines: [
      "1401 21st Street, Suite R",
      "Sacramento, CA 95811",
      "United States",
    ],
    routes: [
      {
        label: "Enterprise sales",
        status: "Local page",
        href: "/enterprise-sales",
        isExternal: true,
      },
      {
        label: "Corporate enquiries",
        status: "This page",
        href: "#right-enquiry",
        isExternal: true,
      },
      {
        label: "Media enquiries",
        status: "Route pending",
      },
      {
        label: "Partner enquiries",
        status: "Route pending",
      },
    ],
  },
  {
    category: "EUROPEAN HEADQUARTERS",
    companyName: "Zoiko Tech",
    addressLines: [
      "167–169 Great Portland Street, 5th Floor",
      "London W1W 5PF",
      "United Kingdom",
    ],
    routes: [
      {
        label: "European enterprise sales",
        status: "Route pending",
      },
      {
        label: "UK and European partnerships",
        status: "Route pending",
      },
      {
        label: "Privacy and data protection",
        status: "Route pending",
      },
      {
        label: "Regional support",
        status: "Route pending",
      },
    ],
  },
];

export default function HeadquartersDirectory() {
  return (
    <section id="contact" className="bg-[#F6F5EF] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              HEADQUARTERS CONTACT DIRECTORY
            </p>
          </div>
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Find the right contact.
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed">
            Distinct destinations for distinct requests. Postal addresses do not
            imply walk-in access, service coverage, or legal notice acceptance.
          </p>
        </div>

        {/* Directory Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {directoryData.map((hq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-10 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="w-4 h-[2px] bg-[#C9A34C]" />
                  <p className="text-[#A2783A] text-[11px] font-bold tracking-[0.15em] uppercase">
                    {hq.category}
                  </p>
                </div>

                {/* Company & Address */}
                <h3 className="text-[#1E293B] text-2xl font-bold mb-4">
                  {hq.companyName}
                </h3>
                <div className="text-[#64748B] text-sm leading-relaxed mb-8">
                  {hq.addressLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Routes Table / List */}
              <div className="border-t border-[#F1F5F9] pt-2">
                {hq.routes.map((route, rIndex) => (
                  <div
                    key={rIndex}
                    className="py-3.5 border-b border-[#F1F5F9] last:border-none flex items-center justify-between text-sm"
                  >
                    {route.href ? (
                      <a
                        href={route.href}
                        className="inline-flex items-center text-[#386665] font-bold hover:underline space-x-1"
                      >
                        <span>{route.label}</span>
                        {route.isExternal && (
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        )}
                      </a>
                    ) : (
                      <span className="text-[#1E293B] font-medium">
                        {route.label}
                      </span>
                    )}

                    <span
                      className={`text-xs font-normal ${
                        route.status === "Route pending"
                          ? "text-[#94A3B8]"
                          : "text-[#64748B]"
                      }`}
                    >
                      {route.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
