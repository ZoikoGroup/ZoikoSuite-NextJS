import React from "react";

interface ContactRoute {
  label: string;
  badge?: string;
  href?: string;
}

interface DirectoryCard {
  category: string;
  companyName: string;
  addressLines: string[];
  routes: ContactRoute[];
}

const privacyDirectoryData: DirectoryCard[] = [
  {
    category: "EUROPEAN HEADQUARTERS",
    companyName: "Zoiko Tech",
    addressLines: [
      "167–169 Great Portland Street, 5th Floor",
      "London W1W 5PF, United Kingdom",
    ],
    routes: [
      {
        label: "European enterprise sales",
        badge: "Local preview",
        href: "#",
      },
      {
        label: "UK and European partnerships",
        badge: "Local preview",
        href: "#",
      },
      {
        label: "Privacy and data protection",
        badge: "Local preview",
        href: "#",
      },
      {
        label: "Regional support",
        badge: "Local preview",
        href: "#",
      },
    ],
  },
  {
    category: "GLOBAL HEADQUARTERS",
    companyName: "Zoiko Tech Inc.",
    addressLines: [
      "1401 21st Street, Suite R",
      "Sacramento, CA 95811, United States",
    ],
    routes: [
      {
        label: "Enterprise sales",
        href: "#",
      },
      {
        label: "Corporate enquiries",
        href: "#",
      },
      {
        label: "Media enquiries",
        href: "#",
      },
      {
        label: "Partner enquiries",
        badge: "Local preview",
        href: "#",
      },
    ],
  },
];

export default function PrivacyDirectory() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              HEADQUARTERS AND RELATED CONTACTS
            </p>
          </div>
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Find the right destination.
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed">
            The London office provides contact context. It does not establish
            legal ownership, jurisdiction, service coverage, or walk-in
            availability.
          </p>
        </div>

        {/* Directory Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {privacyDirectoryData.map((hq, index) => (
            <div
              key={index}
              className="bg-[#F6F5EF80] rounded-2xl border border-[#E2E8F0] p-8 md:p-10 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Label */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="w-4 h-[2px] bg-[#C9A34C]" />
                  <p className="text-[#A2783A] text-[11px] font-bold tracking-[0.15em] uppercase">
                    {hq.category}
                  </p>
                </div>

                {/* Company Name & Address */}
                <h3 className="text-[#1E293B] text-2xl font-bold mb-4">
                  {hq.companyName}
                </h3>
                <div className="text-[#64748B] text-sm leading-relaxed mb-8">
                  {hq.addressLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Contact Routes List */}
              <div className="border-t border-[#E2E8F0] pt-2">
                {hq.routes.map((route, rIndex) => (
                  <div
                    key={rIndex}
                    className="py-3.5 border-b border-[#E2E8F0] last:border-none flex items-center justify-between text-sm"
                  >
                    <a
                      href={route.href || "#"}
                      className="text-[#1E293B] font-medium hover:text-[#386665] hover:underline transition-colors duration-150"
                    >
                      {route.label}
                    </a>

                    {route.badge && (
                      <span className="bg-[#E9D8A6]/60 text-[#725414] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        {route.badge}
                      </span>
                    )}
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
